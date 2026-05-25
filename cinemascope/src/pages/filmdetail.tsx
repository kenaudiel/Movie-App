import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Image } from "lucide-react";
import { FaStar } from "react-icons/fa";

export default function FilmDetail(){
    return(
        <section className="flex gap-20">
            <Card className="flex flex-row p-10 gap-15 w-220 bg-background ring-0">
                <div className="h-70 w-1/3 flex items-center justify-center bg-black/35 rounded-md dark:bg-card/40">
                    <Image />
                </div>
                <CardHeader className="flex flex-col gap-7 w-2/3">
                    <CardTitle className="text-xl">Title <span className="text-muted-foreground ml-2">(2026)</span></CardTitle>
                    <CardDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fugit ex fuga recusandae eligendi corrupti sint illum provident voluptates porro, vel animi vitae praesentium nesciunt, dignissimos eveniet consectetur laboriosam! Provident.</CardDescription>
                    <CardDescription className="mt-3 flex flex-col gap-1">
                        <div className="flex items-center gap-1">
                            <Clock size={16} color="#e26918"/>
                            {`Duration: 200 min`}
                        </div>
                        <div className="flex items-center gap-1">
                            <FaStar color="#f5c518"/>
                            {`Rating: 8.0`}
                        </div>
                    </CardDescription>
                </CardHeader>
            </Card>
            <div>
                <p className="text-sm text-muted-foreground">RELATED FILMS</p>
            </div>
        </section>
    )
}