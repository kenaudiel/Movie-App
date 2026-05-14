import { CardImage } from "@/components/cardimage"
import { films } from "@/data/films"

export default function HomePage(){
    return(
        <section className="p-10">
            <h2 className="mb-5">Popular Movies</h2>   
            <div className="grid grid-cols-4 gap-5">
                {films.map(film => 
                    <CardImage title={film.title} description={film.description} badge={film.badge} path={`/films/${film.id}`} />
                )}
            </div>
        </section>
    )
}