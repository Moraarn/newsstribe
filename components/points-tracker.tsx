import { TrendingUp } from "lucide-react"

interface PointsTrackerProps {
  points: number
}

export function PointsTracker({ points }: PointsTrackerProps) {
  return (
    <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-lg p-3 mb-4 text-white flex items-center justify-between">
      <div>
        <h3 className="font-bold text-sm">Weekly Points</h3>
        <p className="text-lg font-bold">You earned {points} points this week!</p>
      </div>
      <div className="bg-white/20 p-2 rounded-full">
        <TrendingUp className="h-6 w-6" />
      </div>
    </div>
  )
}
