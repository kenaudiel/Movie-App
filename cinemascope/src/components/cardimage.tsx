import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Dot, Image } from "lucide-react"
import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"

type CardImageProps = {
    title:string,
    year:number,
    duration:number,
    rating:number
    badge: "Free" | "Premium"
    path:string
}

export function CardImage({title, year, duration, rating, badge, path}:CardImageProps) {
  return (
    <Card className="mx-auto w-full pt-0">
      <Link to={path}>
        <div className="inset-0 z-30 w-full h-60 bg-black/35 flex items-center justify-center">
          <Image />
        </div>
      </Link>
      <CardHeader className="">
        <CardAction>
          <Badge variant="secondary">{badge}</Badge>
        </CardAction>
        <CardTitle className="mb-2">{title}</CardTitle>
        <CardDescription className="flex items-center">
          {year}
          <Dot />
          {`${duration}m`}  
        </CardDescription>
        <CardDescription className="flex items-center justify-start gap-2">
          <FaStar color="#f5c518"/>
          {rating}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
