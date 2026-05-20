import CardImageHorizontal from "@/components/cardimagehorizontal";
import { films } from "@/data/films";

export default function FilmsPage(){
    
    return(
        <section>

            <ul className="flex flex-col gap-3">
                {ListFilm()}
            </ul>
        </section>
    )
}

function ListFilm(){
    const sortFilm = films.sort((a,b) => b.rating - a.rating)
    const sliceFilm = sortFilm.slice(0, 5)

    return(
        sliceFilm.map(film =>
            <li className="w-180">
                <CardImageHorizontal id={film.id} title={film.title} synopsis={film.synopsis} year={film.year} rating={film.rating} duration={film.duration} badge={film.badge}/>
            </li>
        )
    )
}