import CardImageHorizontal from "@/components/cardimagehorizontal";
import FilmImage from "@/components/filmimage";
import { films } from "@/data/films";
import { Clock } from "lucide-react";
import { FaStar } from "react-icons/fa";

const sortFilm = films.sort((a,b) => b.rating - a.rating)
const sliceFilm = sortFilm.slice(0, 5)
const sliceMoreFilm = sortFilm.slice(6,12)

export default function FilmsPage(){
    
    return(
        <section className="flex gap-15">
            <div>
                <p className="text-sm text-muted-foreground mb-5">POPULAR FILMS THIS WEEK</p>
                <ul className="flex flex-col gap-3">
                {ListFilm()}
                </ul>
            </div>
            <div>
                <p className="text-sm text-muted-foreground mb-5">MORE FILMS FOR YOU</p>
                <ul className="grid grid-cols-3 gap-x-3 gap-y-7">
                    {ListMoreFilm()}
                </ul>
            </div>
        </section>
    )
}

function ListFilm(){

    return(
        sliceFilm.map(film =>
            <li key={film.id} className="w-180">
                <CardImageHorizontal id={film.id} title={film.title} synopsis={film.synopsis} year={film.year} rating={film.rating} duration={film.duration} badge={film.badge}/>
            </li>
        )
    )
}

function ListMoreFilm(){
    return(
        sliceMoreFilm.map(film =>
            <li key={film.id} className="max-w-fit">
                <div className="flex flex-col items-center gap-2">
                    <FilmImage className="w-25 h-30 bg-card" path={`/films/${film.id}`}/>
                    <div className="flex gap-2">
                        <div className="flex items-center gap-1 text-xs">
                            <Clock size={12} color="#e26918"/>
                            {`${film.duration}m`}
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                            <FaStar size={12} color="#f5c518"/>
                            {film.rating}
                        </div>
                    </div>
                </div>
            </li>
        )
    )
}