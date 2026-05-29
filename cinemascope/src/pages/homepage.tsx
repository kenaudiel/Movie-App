import { CardImage } from "@/components/cardimage"
import { Button } from "@/components/ui/button"
import { films } from "@/data/films"

export default function HomePage(){
    return(
        <>
            <section className="">
                <div className="flex flex-col gap-3 items-center justify-center mt-10">
                    <h1 className="text-4xl font-bold">Everything Worth Your Time</h1>
                    <p className="text-lg">
                        A place to explore films, movies, and blogs that actually matter.
                    </p>
                    <div className="flex gap-5 mt-5">
                        <Button variant="default">Get Started</Button>
                        <Button variant="secondary">Watch Films</Button>
                    </div>
                </div>
                
            </section>
            <section className="">
                <h2 className="mb-5 text-muted-foreground text-sm">TOP RATING FILMS</h2>   
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
                <CardImage id={film.id} synopsis={film.synopsis} title={film.title} badge={film.badge} rating={film.rating} duration={film.duration} year={film.year} path={`/film/${film.id}`} />
            </li>
        )
    )
}