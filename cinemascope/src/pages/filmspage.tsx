import CardImageHorizontal from "@/components/cardimagehorizontal";
import { films } from "@/data/films";

export default function FilmsPage(){
    
    return(
        <ul>
            {films.map(film =>
                <li>
                    <CardImageHorizontal title={film.title} synopsis={film.synopsis} year={film.year} rating={film.rating} duration={film.duration} badge={film.badge}/>
                </li>
            )}
        </ul>
    )
}