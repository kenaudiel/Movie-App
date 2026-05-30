import type { blogsType } from "@/data/blogs";
import FilmImage from "./filmimage";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type blogCardProps = blogsType

export default function BlogCard({author, date, title, description}:blogCardProps){
    return(
        <Card className="flex p-0">
            <FilmImage className="w-full h-50"/>
            <CardHeader className="">
                <CardTitle className="flex flex-col w-30 justify-start text-xs text-muted-foreground mb-1 font-bold">
                    {author} | {date}
                </CardTitle>
                <CardTitle className="hover:text-orange-300 cursor-pointer">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
                {description}
            </CardContent>
        </Card>
    )
}