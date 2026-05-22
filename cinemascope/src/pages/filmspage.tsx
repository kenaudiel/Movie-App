import CardImageHorizontal from "@/components/cardimagehorizontal";
import FilmImage from "@/components/filmimage";
import { films } from "@/data/films";

const sortFilm = films.sort((a,b) => b.rating - a.rating)
const sliceFilm = sortFilm.slice(0, 5)
const sliceMoreFilm = sortFilm.slice(6,12)

export default function FilmsPage(){
    
    return(
        <section className="flex gap-15">
            <div>
                <p className="text-sm text-muted-foreground mb-5">POPULAR FILM THIS WEEK</p>
                <ul className="flex flex-col gap-3">
                {ListFilm()}
                </ul>
            </div>
            <div>
                <p className="text-sm text-muted-foreground mb-5">MORE FILMS FOR YOU</p>
                <ul className="grid grid-cols-3 gap-2">
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
                <FilmImage className="w-25 h-30" path={`/films/${film.id}`}/> 
            </li>
        )
    )
}