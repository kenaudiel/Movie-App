import { Card, CardContent, CardDescription } from "./ui/card";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import type { quotesTypes } from "@/data/quotes";

export default function CarouselCard({name, film, quote}:quotesTypes){
    return(
        <Card className="w-100 px-7 py-5">
            <FaQuoteLeft color="#FFB86A" className=""/>
            <CardContent className="p-0 flex flex-col gap-3">
                <CardDescription className="text-primary">
                    {quote}
                </CardDescription>
                <span className="text-xs text-muted-foreground">— {name}, {film}</span>
            </CardContent>
            <FaQuoteRight color="#FFB86A" className="ml-auto"/>
        </Card>
    )
}