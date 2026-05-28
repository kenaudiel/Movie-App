import { CardImage } from "@/components/cardimage"
import { films } from "@/data/films"
import { useParams } from "react-router-dom"

export default function SearchPage(){
    const {keyword} = useParams()

    if(!keyword){
        return
    }

    const filtered = films.filter(film => film.title.toLowerCase().includes(keyword.toLowerCase()))

    function FilmList(){
        if(filtered.length == 0){
            return(
                <p>There were no matches for your search term.</p>
            )
        }

        return(
            <ul className="grid grid-cols-4 gap-5">
                {filtered.map(film => 
                    <li key={film.id}>
                        <CardImage id={film.id} title={film.title} year={film.year} duration={film.duration} rating={film.rating} synopsis={film.synopsis} badge={film.badge} path={`/film/${film.id}`}/>
                    </li>
                )}
            </ul>
        )
    }

    return(
        <section className="min-h-114">
            {FilmList()}
        </section>
    )
}