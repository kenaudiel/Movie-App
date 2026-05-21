import { CardImage } from "@/components/cardimage"
import { films } from "@/data/films"

export default function HomePage(){
    return(
        <>
            <section className="">
                
            </section>
            <section className="">
                <h2 className="mb-5">Popular Movies</h2>   
                <ul className="grid grid-cols-4 gap-5">
                    {FilmCardImageList()}
                </ul>
            </section>
        </>
    )
}

function FilmCardImageList(){
    const sampleFilms = films.slice(0,8)

    return(
        sampleFilms.map(film => 
            <li key={film.id}>
                <CardImage id={film.id} synopsis={film.synopsis} title={film.title} badge={film.badge} rating={film.rating} duration={film.duration} year={film.year} path={`/films/${film.id}`} />
            </li>
        )
    )
}