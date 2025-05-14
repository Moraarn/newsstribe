// Types
export interface User {
  id: string;
  name: string;
  email: string;
  points: number;
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  interests: string[];
  completedQuests: string[];
  notifications: Notification[];
  joinDate: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  category: string;
  author: string;
  readTime: string;
  points: number;
  image: string;
  content: string;
  comments: Comment[];
  verified: boolean;
}

export interface Comment {
  id: string;
  userId: string;
  content: string;
  timestamp: string;
}

export interface Notification {
  id: string;
  type: 'quiz' | 'reward' | 'news' | 'achievement';
  message: string;
  read: boolean;
  timestamp: string;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  points: number;
  type: 'daily' | 'weekly' | 'special';
  completed: boolean;
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  points: number;
  type: string;
  available: boolean;
  image: string;
}

// Store keys
const KEYS = {
  USER: 'newstribe_user',
  ARTICLES: 'newstribe_articles',
  QUESTS: 'newstribe_quests',
  NOTIFICATIONS: 'newstribe_notifications',
  LEADERBOARD: 'newstribe_leaderboard',
  QUIZZES: 'newstribe_quizzes',
  REWARDS: 'newstribe_rewards',
};

// Dummy data
export const dummyArticles = [
  {
    id: 1,
    title: "The Future of AI: Breakthroughs in 2024",
    category: "Technology",
    author: "Sarah Chen",
    readTime: "5 min read",
    points: 15,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    content: "Artificial Intelligence continues to evolve at an unprecedented pace...",
    comments: [],
    verified: true
  },
  {
    id: 2,
    title: "Premier League: Title Race Heats Up",
    category: "Sports",
    author: "James Wilson",
    readTime: "4 min read",
    points: 10,
    image: "https://images.unsplash.com/photo-1508098682722-e99c643e5fae",
    content: "The Premier League title race is reaching its climax...",
    comments: [],
    verified: true
  },
  {
    id: 3,
    title: "Climate Change: New Study Reveals Impact",
    category: "Environment",
    author: "Emma Thompson",
    readTime: "6 min read",
    points: 20,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    content: "A groundbreaking study on climate change effects...",
    comments: [],
    verified: true
  },
  {
    id: 4,
    title: "Oscar Nominations Announced",
    category: "Entertainment",
    author: "Michael Brown",
    readTime: "3 min read",
    points: 10,
    image: "https://images.unsplash.com/photo-1512070679279-8988d32161be",
    content: "The Academy has announced this year's Oscar nominations...",
    comments: [],
    verified: true
  },
  {
    id: 5,
    title: "Global Markets: Tech Stocks Surge",
    category: "Business",
    author: "David Lee",
    readTime: "4 min read",
    points: 15,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    content: "Technology stocks are leading the market rally...",
    comments: [],
    verified: true
  },
  {
    id: 6,
    title: "New Smartphone Features Revealed",
    category: "Technology",
    author: "Alex Johnson",
    readTime: "5 min read",
    points: 15,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    content: "The latest smartphone innovations promise to revolutionize...",
    comments: [],
    verified: true
  },
  {
    id: 7,
    title: "World Cup Qualifiers: Key Matches",
    category: "Sports",
    author: "Maria Garcia",
    readTime: "4 min read",
    points: 10,
    image: "https://images.unsplash.com/photo-1508098682722-e99c643e5fae",
    content: "Critical World Cup qualifying matches are set to begin...",
    comments: [],
    verified: true
  },
  {
    id: 8,
    title: "Renewable Energy Milestone",
    category: "Environment",
    author: "Robert Green",
    readTime: "5 min read",
    points: 20,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
    content: "Global renewable energy production reaches new heights...",
    comments: [],
    verified: true
  },
  {
    id: 9,
    title: "Summer Blockbuster Preview",
    category: "Entertainment",
    author: "Lisa Wong",
    readTime: "4 min read",
    points: 10,
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
    content: "The most anticipated movies of the summer season...",
    comments: [],
    verified: true
  },
  {
    id: 10,
    title: "Startup Funding Trends",
    category: "Business",
    author: "Thomas Anderson",
    readTime: "6 min read",
    points: 15,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    content: "Analysis of the latest trends in startup funding...",
    comments: [],
    verified: true
  }
];

const dummyQuests: Quest[] = [
  {
    id: '1',
    title: 'Daily Quiz',
    description: 'Test your knowledge about current events',
    points: 15,
    type: 'daily',
    completed: false,
  },
  {
    id: '2',
    title: 'Comment Master',
    description: 'Comment on 3 articles today',
    points: 10,
    type: 'daily',
    completed: false,
  },
  {
    id: '3',
    title: 'News Explorer',
    description: 'Read 5 articles from different categories',
    points: 25,
    type: 'weekly',
    completed: false,
  },
  {
    id: '4',
    title: 'Verification Expert',
    description: 'Verify 3 news articles',
    points: 30,
    type: 'weekly',
    completed: false,
  }
];

const dummyQuizzes = [
  {
    id: '1',
    title: "Kenya's Political History",
    questions: [
      {
        id: '1',
        question: "Who was Kenya's first president?",
        options: ["Jomo Kenyatta", "Daniel Moi", "Mwai Kibaki", "Uhuru Kenyatta"],
        correctAnswer: "Jomo Kenyatta",
        points: 5
      },
      {
        id: '2',
        question: "In which year did Kenya gain independence?",
        options: ["1960", "1961", "1962", "1963"],
        correctAnswer: "1963",
        points: 5
      }
    ],
    totalPoints: 10,
    timeLimit: 300, // 5 minutes in seconds
    completed: false
  },
  {
    id: '2',
    title: "Current Affairs Quiz",
    questions: [
      {
        id: '1',
        question: "Which Kenyan city is known as the 'Silicon Savannah'?",
        options: ["Mombasa", "Nairobi", "Kisumu", "Nakuru"],
        correctAnswer: "Nairobi",
        points: 5
      },
      {
        id: '2',
        question: "What is Kenya's main export?",
        options: ["Coffee", "Tea", "Flowers", "All of the above"],
        correctAnswer: "All of the above",
        points: 5
      }
    ],
    totalPoints: 10,
    timeLimit: 300,
    completed: false
  }
];

const dummyRewards = [
  {
    id: '1',
    title: 'Airtime Bundle',
    description: 'Ksh 50 Airtime for any network',
    points: 500,
    type: 'airtime',
    available: true,
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308' // phone/airtime
  },
  {
    id: '2',
    title: 'Data Bundle',
    description: '1GB Safaricom Data',
    points: 1000,
    type: 'data',
    available: true,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c' // data/internet
  },
  {
    id: '3',
    title: 'Event Ticket',
    description: 'Nation Media Event Pass',
    points: 2000,
    type: 'ticket',
    available: true,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' // event
  },
  {
    id: '4',
    title: 'Supermarket Voucher',
    description: 'Ksh 300 Naivas Shopping Voucher',
    points: 1200,
    type: 'shopping',
    available: true,
    image: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b302b' // shopping
  },
  {
    id: '5',
    title: 'Coffee Date',
    description: 'Free coffee at Java House',
    points: 800,
    type: 'food',
    available: true,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836' // coffee
  },
  {
    id: '6',
    title: 'Movie Ticket',
    description: 'Cinema ticket for any movie at Westgate',
    points: 1500,
    type: 'entertainment',
    available: true,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b' // movie
  },
  {
    id: '7',
    title: 'Digital Magazine Subscription',
    description: '1 month of Daily Nation e-paper',
    points: 900,
    type: 'subscription',
    available: true,
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2' // magazine
  },
  {
    id: '8',
    title: 'Gym Day Pass',
    description: 'One day access to Smart Gyms',
    points: 700,
    type: 'fitness',
    available: true,
    image: 'https://images.unsplash.com/photo-1517960413843-0aee8e2d471c' // gym
  },
  {
    id: '9',
    title: 'Pizza Treat',
    description: 'Medium pizza at Pizza Inn',
    points: 1100,
    type: 'food',
    available: true,
    image: 'https://images.unsplash.com/photo-1548365328-8b849e6c7b75' // pizza
  },
  {
    id: '10',
    title: 'Bookstore Voucher',
    description: 'Ksh 500 Text Book Centre voucher',
    points: 1300,
    type: 'shopping',
    available: true,
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353' // books
  }
];

// Helper function to safely access localStorage
const getLocalStorage = () => {
  if (typeof window === 'undefined') {
    return null;
  }
  return window.localStorage;
};

const migrateRewards = () => {
  const storage = getLocalStorage();
  if (!storage) return;
  const rewards = JSON.parse(storage.getItem(KEYS.REWARDS) || '[]');
  // If any reward is missing the image property or there are fewer than 10, reset to dummyRewards
  if (!rewards.length || !rewards[0].image || rewards.length < 10) {
    storage.setItem(KEYS.REWARDS, JSON.stringify(dummyRewards));
  }
};

// Initialize default data
const initializeDefaultData = () => {
  const storage = getLocalStorage();
  if (!storage) return;

  if (!storage.getItem(KEYS.USER)) {
    const defaultUser: User = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      points: 0,
      tier: 'Bronze',
      interests: ['Technology', 'Sports', 'Politics'],
      completedQuests: [],
      notifications: [],
      joinDate: new Date().toISOString(),
    };
    storage.setItem(KEYS.USER, JSON.stringify(defaultUser));
  }

  if (!storage.getItem(KEYS.ARTICLES)) {
    storage.setItem(KEYS.ARTICLES, JSON.stringify(dummyArticles));
  }

  if (!storage.getItem(KEYS.QUESTS)) {
    storage.setItem(KEYS.QUESTS, JSON.stringify(dummyQuests));
  }

  if (!storage.getItem(KEYS.QUIZZES)) {
    storage.setItem(KEYS.QUIZZES, JSON.stringify(dummyQuizzes));
  }

  // Always run rewards migration to ensure up-to-date structure
  migrateRewards();
};

// Store functions
export const store = {
  initialize: () => {
    if (typeof window !== 'undefined') {
      initializeDefaultData();
    }
  },

  // User operations
  getUser: (): User => {
    const storage = getLocalStorage();
    if (!storage) return {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      points: 0,
      tier: 'Bronze',
      interests: ['Technology', 'Sports', 'Politics'],
      completedQuests: [],
      notifications: [],
      joinDate: new Date().toISOString(),
    };
    return JSON.parse(storage.getItem(KEYS.USER) || '{}');
  },

  updateUser: (userData: Partial<User>) => {
    const storage = getLocalStorage();
    if (!storage) return;
    const currentUser = store.getUser();
    const updatedUser = { ...currentUser, ...userData };
    storage.setItem(KEYS.USER, JSON.stringify(updatedUser));
    return updatedUser;
  },

  addPoints: (points: number) => {
    const storage = getLocalStorage();
    if (!storage) return;
    const user = store.getUser();
    const newPoints = user.points + points;
    const newTier = calculateTier(newPoints);
    return store.updateUser({ points: newPoints, tier: newTier });
  },

  // Article operations
  getArticles: (): NewsArticle[] => {
    const storage = getLocalStorage();
    if (!storage) return dummyArticles;
    return JSON.parse(storage.getItem(KEYS.ARTICLES) || '[]');
  },

  getArticle: (id: number): NewsArticle | undefined => {
    const articles = store.getArticles();
    return articles.find(article => article.id === id);
  },

  addComment: (articleId: number, comment: Comment) => {
    const storage = getLocalStorage();
    if (!storage) return;
    const articles = store.getArticles();
    const articleIndex = articles.findIndex(a => a.id === articleId);
    if (articleIndex !== -1) {
      articles[articleIndex].comments.push(comment);
      storage.setItem(KEYS.ARTICLES, JSON.stringify(articles));
    }
  },

  // Quest operations
  getQuests: (): Quest[] => {
    const storage = getLocalStorage();
    if (!storage) return dummyQuests;
    return JSON.parse(storage.getItem(KEYS.QUESTS) || '[]');
  },

  completeQuest: (questId: string) => {
    const storage = getLocalStorage();
    if (!storage) return;
    const quests = store.getQuests();
    const questIndex = quests.findIndex(q => q.id === questId);
    if (questIndex !== -1) {
      quests[questIndex].completed = true;
      storage.setItem(KEYS.QUESTS, JSON.stringify(quests));
      store.addPoints(quests[questIndex].points);
    }
  },

  // Notification operations
  getNotifications: (): Notification[] => {
    const storage = getLocalStorage();
    if (!storage) return [];
    return JSON.parse(storage.getItem(KEYS.NOTIFICATIONS) || '[]');
  },

  addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => {
    const storage = getLocalStorage();
    if (!storage) return;
    const notifications = store.getNotifications();
    const newNotification: Notification = {
      ...notification,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
    };
    notifications.unshift(newNotification);
    storage.setItem(KEYS.NOTIFICATIONS, JSON.stringify(notifications));
  },

  markNotificationAsRead: (notificationId: string) => {
    const storage = getLocalStorage();
    if (!storage) return;
    const notifications = store.getNotifications();
    const notificationIndex = notifications.findIndex(n => n.id === notificationId);
    if (notificationIndex !== -1) {
      notifications[notificationIndex].read = true;
      storage.setItem(KEYS.NOTIFICATIONS, JSON.stringify(notifications));
    }
  },

  // Quiz operations
  getQuizzes: () => {
    const storage = getLocalStorage();
    if (!storage) return dummyQuizzes;
    return JSON.parse(storage.getItem(KEYS.QUIZZES) || '[]');
  },

  completeQuiz: (quizId: string, score: number) => {
    const storage = getLocalStorage();
    if (!storage) return;
    const quizzes = store.getQuizzes();
    const quizIndex = quizzes.findIndex(q => q.id === quizId);
    if (quizIndex !== -1) {
      quizzes[quizIndex].completed = true;
      storage.setItem(KEYS.QUIZZES, JSON.stringify(quizzes));
      store.addPoints(score);
    }
  },

  // Reward operations
  getRewards: () => {
    const storage = getLocalStorage();
    if (!storage) return dummyRewards;
    return JSON.parse(storage.getItem(KEYS.REWARDS) || '[]');
  },

  redeemReward: (rewardId: string) => {
    const storage = getLocalStorage();
    if (!storage) return false;
    const rewards = store.getRewards();
    const reward = rewards.find(r => r.id === rewardId);
    if (reward) {
      const user = store.getUser();
      if (user.points >= reward.points) {
        store.addPoints(-reward.points); // Deduct points
        return true;
      }
    }
    return false;
  },
};

// Helper functions
const calculateTier = (points: number): User['tier'] => {
  if (points >= 10000) return 'Platinum';
  if (points >= 5000) return 'Gold';
  if (points >= 1000) return 'Silver';
  return 'Bronze';
};

// Initialize store when imported
if (typeof window !== 'undefined') {
  store.initialize();
} 