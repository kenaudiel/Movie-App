import type { blogsType } from "@/data/blogs";
import FilmImage from "./filmimage";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";

type blogCardProps = blogsType

export default function BlogCard({id, author, date, title, description, topic}:blogCardProps){
    return(
        <Card className="flex pt-0 pb-5 gap-3">
            <Link to={`/blog/${id}`}>
                <FilmImage className="w-full h-50"/>
            </Link>
            <CardHeader className="items-center justify-center">
                <CardTitle className="flex flex-col justify-start text-xs text-muted-foreground mb-1 font-bold ">
                    {author} | {date}
                </CardTitle>
                <CardAction>
                    <Badge variant="secondary">{topic}</Badge>
                </CardAction>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                <span className="font-heading text-base leading-snug font-medium hover:text-orange-300 cursor-pointer">{title}</span>
                <span className="text-muted-foreground">{description}</span>
            </CardContent>
        </Card>
    )
}