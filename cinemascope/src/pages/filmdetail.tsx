import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { films } from "@/data/films";
import { Clock, Image } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

type filmDetailsType = {
    key:string,
    detail:string,
    value:string | number
    icon:React.ReactNode
}

export default function FilmDetail(){
    const {id} = useParams()
    const filmsFiltered = films.filter(film => film.id === Number(id))
    const film = filmsFiltered[0]

    const filmDetails:filmDetailsType[] = [
    {
        key:"Duration",
        detail:"Duration",
        value:`${film.duration} min`,
        icon:<Clock size={16} color="#e26918"/>
    },
    {
        key:"Rating",
        detail:"Rating",
        value:film.rating,
        icon:<FaStar color="#f5c518"/>
    }
]

    function filmDetailsList(){
        return(
            <ul className="flex flex-col gap-1">
                {filmDetails.map(film => 
                    <li key={film.key} className="flex items-center gap-1">
                        {film.icon}
                        {`${film.detail}: ${film.value}`}
                    </li>
                )}
            </ul>
        )
    }

    return(
        <section className="flex gap-20">
            <Card className="flex flex-row p-10 gap-15 w-220 bg-background ring-0">
                <div className="h-70 w-1/3 flex items-center justify-center bg-black/35 rounded-md dark:bg-card/40">
                    <Image />
                </div>
                <CardHeader className="flex flex-col gap-7 w-2/3">
                    <CardTitle className="text-xl">{film.title} <span className="text-muted-foreground ml-2">{`(${film.year})`}</span></CardTitle>
                    <CardDescription>
                       {film.synopsis}
                    </CardDescription>
                    <CardDescription className="mt-3 flex flex-col gap-1">
                        <div>
                            {filmDetailsList()}
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