import {Clock, Image} from "lucide-react";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { FaStar } from "react-icons/fa";

type CardImageProps = {
    title:string,
    synopsis:string,
    year:number,
    rating:number,
    duration:number,
    badge:"Free" | "Premium"
}

export default function CardImageHorizontal({title, synopsis, year, rating, duration, badge}:CardImageProps){
    return(
        <Card className="flex flex-row gap-2 items-center">
            <div className="h-full w-40 flex items-center justify-center"><Image /></div>
            <CardHeader className="w-120">
                <CardAction>
                    <Badge variant="secondary" className={`${badge === "Premium" && "text-yellow-400"}`}>{badge}</Badge>
                </CardAction>
                <CardTitle>{title} <span className="text-muted-foreground ml-2">{`(${year})`}</span></CardTitle>
                <CardDescription className="mt-1">{synopsis}</CardDescription>
                <CardDescription className="flex items-center gap-7 mt-3">
                    <div className="flex items-center gap-1">
                        <Clock size={16} color="#e26918"/>
                        {`${duration}m`}
                    </div>
                    <div className="flex items-center gap-1">
                        <FaStar color="#f5c518"/>
                        {rating}
                    </div>
                </CardDescription>
            </CardHeader>
        </Card>
    )
}