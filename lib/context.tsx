'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { store, User, NewsArticle, Quest, Notification } from './store';

interface Quiz {
  id: string;
  title: string;
  questions: {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
    points: number;
  }[];
  totalPoints: number;
  timeLimit: number;
  completed: boolean;
}

interface Reward {
  id: string;
  title: string;
  description: string;
  points: number;
  type: string;
  available: boolean;
  image: string;
}

interface AppContextType {
  user: User;
  articles: NewsArticle[];
  quests: Quest[];
  notifications: Notification[];
  quizzes: Quiz[];
  rewards: Reward[];
  updateUser: (data: Partial<User>) => void;
  addPoints: (points: number) => void;
  completeQuest: (questId: string) => void;
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => void;
  markNotificationAsRead: (notificationId: string) => void;
  completeQuiz: (quizId: string, score: number) => void;
  redeemReward: (rewardId: string) => boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(store.getUser());
  const [articles, setArticles] = useState<NewsArticle[]>(store.getArticles());
  const [quests, setQuests] = useState<Quest[]>(store.getQuests());
  const [notifications, setNotifications] = useState<Notification[]>(store.getNotifications());
  const [quizzes, setQuizzes] = useState<Quiz[]>(store.getQuizzes());
  const [rewards, setRewards] = useState<Reward[]>(store.getRewards());

  // Update local state when store changes
  useEffect(() => {
    const handleStorageChange = () => {
      setUser(store.getUser());
      setArticles(store.getArticles());
      setQuests(store.getQuests());
      setNotifications(store.getNotifications());
      setQuizzes(store.getQuizzes());
      setRewards(store.getRewards());
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  useEffect(() => {
    store.initialize();
    // Debug log for rewards
    console.log('Loaded rewards:', store.getRewards());
  }, []);

  const value = {
    user,
    articles,
    quests,
    notifications,
    quizzes,
    rewards,
    updateUser: (data: Partial<User>) => {
      const updatedUser = store.updateUser(data);
      setUser(updatedUser);
    },
    addPoints: (points: number) => {
      const updatedUser = store.addPoints(points);
      setUser(updatedUser);
    },
    completeQuest: (questId: string) => {
      store.completeQuest(questId);
      setQuests(store.getQuests());
    },
    addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => {
      store.addNotification(notification);
      setNotifications(store.getNotifications());
    },
    markNotificationAsRead: (notificationId: string) => {
      store.markNotificationAsRead(notificationId);
      setNotifications(store.getNotifications());
    },
    completeQuiz: (quizId: string, score: number) => {
      store.completeQuiz(quizId, score);
      setQuizzes(store.getQuizzes());
    },
    redeemReward: (rewardId: string) => {
      const success = store.redeemReward(rewardId);
      if (success) {
        setRewards(store.getRewards());
        setUser(store.getUser());
      }
      return success;
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
} 