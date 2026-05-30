import type { blogsType } from "@/data/blogs";
import FilmImage from "./filmimage";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

type blogCardProps = blogsType

export default function BlogCard({id, author, date, title, description, topic}:blogCardProps){
    const navigate = useNavigate()

    function BadgeColor(){
        if(topic == "Interview" || topic == "Analysis"){
            return "text-blue-300"
        } else if(topic == "Ranking" || topic == "Behind the Scene"){
            return "text-purple-300"
        } else {
            return "text-yellow-300"
        }
    }

    return(
        <Card className="flex pt-0 pb-5 gap-3">
            <FilmImage path={`/blog/${id}`} className="w-full h-50"/>
            <CardHeader className="items-center justify-center">
                <CardTitle className="flex flex-col justify-start text-xs text-muted-foreground mb-1 font-bold ">
                    {author} | {date}
                </CardTitle>
                <CardAction>
                    <Badge variant="secondary" className={BadgeColor()}>{topic}</Badge>
                </CardAction>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                <span onClick={() => navigate(`/blog/${id}`)} className="font-heading text-base leading-snug font-medium hover:text-orange-300 cursor-pointer">{title}</span>
                <span className="text-muted-foreground">{description}</span>
            </CardContent>
        </Card>
    )
}