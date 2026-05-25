import {Clock} from "lucide-react";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import FilmImage from "./filmimage";

type CardImageProps = {
    id:number,
    title:string,
    synopsis:string,
    year:number,
    rating:number,
    duration:number,
    badge:"Free" | "Premium"
}

export default function CardImageHorizontal({id, title, synopsis, year, rating, duration, badge}:CardImageProps){
    return(
        <Card className="flex flex-row gap-2 items-center p-0">
            <FilmImage path={`/film/${id}`}/>
            <div className="w-140 py-5">
                <CardHeader className="">
                    <CardAction>
                        <Badge variant="secondary" className={`${badge === "Premium" && "text-yellow-400"}`}>{badge}</Badge>
                    </CardAction>
                    <CardTitle>
                        <Link to={`/film/${id}`}> 
                        <span className="hover:text-orange-300">{title}</span>
                        </Link>
                        <span className="text-muted-foreground ml-2">{`(${year})`}</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="w-100">
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
                </CardContent>
            </div>
        </Card>
    )
}