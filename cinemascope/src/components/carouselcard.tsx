import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

export default function CarouselCard(){
    return(
        <Card className="w-100 px-7 py-5">
            <FaQuoteLeft color="#FFB86A" className=""/>
            <CardContent className="p-0 flex flex-col gap-3">
                <CardDescription className="text-primary">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium nisi, totam amet unde soluta vitae, odit aperiam quos enim illum asperiores quisquam, neque accusamus ducimus! Natus repellendus quam sapiente error.
                </CardDescription>
                <span className="text-xs text-muted-foreground">— The Doctor, Doctor Who</span>
            </CardContent>
            <FaQuoteRight color="#FFB86A" className="ml-auto"/>
        </Card>
    )
}