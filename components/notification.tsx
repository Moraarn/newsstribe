import { AlertCircle, Award, Gift } from "lucide-react"
import { Alert, AlertTitle } from "@/components/ui/alert"

interface NotificationProps {
  message: string
  type: "quiz" | "reward" | "news"
}

export function Notification({ message, type }: NotificationProps) {
  const getIcon = () => {
    switch (type) {
      case "quiz":
        return <Award className="h-4 w-4" />
      case "reward":
        return <Gift className="h-4 w-4" />
      case "news":
        return <AlertCircle className="h-4 w-4" />
      default:
        return <AlertCircle className="h-4 w-4" />
    }
  }

  const getColor = () => {
    switch (type) {
      case "quiz":
        return "bg-blue-50 border-blue-200 text-blue-800"
      case "reward":
        return "bg-green-50 border-green-200 text-green-800"
      case "news":
        return "bg-orange-50 border-orange-200 text-orange-800"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  return (
    <Alert className={`${getColor()} mb-4`}>
      <div className="flex items-center">
        {getIcon()}
        <AlertTitle className="ml-2 text-sm font-medium">{message}</AlertTitle>
      </div>
    </Alert>
  )
}
