import FilmImage from "./filmimage";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";


export default function BlogCard(){
    return(
        <Card className="flex p-0">
            <FilmImage className="w-full h-50"/>
            <CardHeader className="">
                <CardTitle className="flex flex-col w-30 justify-start text-xs text-muted-foreground mb-1 font-bold">
                    Author | Date
                </CardTitle>
                <CardTitle className="hover:text-orange-300 cursor-pointer">
                    Blog Title
                </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maiores ullam delectus deserunt dolorum provident reiciendis, quibusdam sint animi incidunt architecto doloremque, quam minima vitae cupiditate cumque quaerat similique maxime.
            </CardContent>
        </Card>
    )
}