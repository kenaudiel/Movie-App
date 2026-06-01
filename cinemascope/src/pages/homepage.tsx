import { CardImage } from "@/components/cardimage"
import { Button } from "@/components/ui/button"
import { films } from "@/data/films"
import { FaArrowRight } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

export default function HomePage(){
    const navigate = useNavigate()
    return(
        <>
            <section className="">
                <div className="flex flex-col gap-3 items-center justify-center mt-10">
                    <h1 className="text-5xl font-bold dark:text-orange-300 text-yellow-500">Everything Worth Your Time</h1>
                    <p className="text-xl dark:text-gray-300 text-black/50">
                        A place to explore films, movies, and blogs that actually matter.
                    </p>
                    <div className="flex gap-5 mt-5">
                        <Button className="cursor-pointer" size="lg" variant="default" onClick={() => navigate("/films")}>
                            Watch Films
                            <FaArrowRight/>
                        </Button>
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