import { Avatar, AvatarFallback } from "./ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function CarouselCard(){
    return(
        <Card className="w-100">
            <div className="flex flex-col items-center">
                <Avatar size="lg" className="">
                    <AvatarFallback>K</AvatarFallback>
                </Avatar>
            </div>
            <CardHeader className="justify-center">
                <CardTitle className="flex flex-row">Kenneth Audiel Manuelli</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className="flex justify-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium nisi, totam amet unde soluta vitae, odit aperiam quos enim illum asperiores quisquam, neque accusamus ducimus! Natus repellendus quam sapiente error.
                </CardDescription>
            </CardContent>
            
        </Card>
    )
}