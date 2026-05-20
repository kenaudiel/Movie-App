import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Clock, Image } from "lucide-react"
import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"

type CardImageProps = {
    title:string,
    year:number,
    synopsis:string
    duration:number,
    rating:number
    badge: "Free" | "Premium"
    path:string
}

export function CardImage({title, year, duration, rating, badge, path, synopsis}:CardImageProps) {
  return (
    <Card className="mx-auto w-full pt-0">
      <Link to={path}>
        <div className="inset-0 z-30 w-full h-60 bg-black/35 flex items-center justify-center">
          <Image />
        </div>
      </Link>
      <CardHeader className="">
        <CardTitle className="w-40">{title} <span className="text-muted-foreground ml-2">{`(${year})`}</span></CardTitle>
        <CardAction>
          <Badge variant="secondary" className={`${badge === "Premium" && "text-yellow-600 dark:text-yellow-400"}`}>{badge}</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="">
        <CardDescription className="">{synopsis}</CardDescription>
        <CardDescription className="flex items-center gap-5 mt-3">
          <div className="flex items-center gap-1">
            <Clock size={16} color="#e26918"/>
              {`${duration}m`}
          </div>
          <div className="flex items-center gap-1">
            <FaStar color="#f5c518"/>
            {rating}
          </div>
        </CardDescription>
      </CardContent>
    </Card>
  )
}
