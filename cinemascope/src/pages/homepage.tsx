import { CardImage } from "@/components/cardimage"
import { films } from "@/data/films"

export default function HomePage(){
    return(
        <>
            <section className="">
                
            </section>
            <section className="p-10">
                <h2 className="mb-5">Popular Movies</h2>   
                <ul className="grid grid-cols-4 gap-5">
                    {films.map(film => 
                        <li key={film.id}>
                            <CardImage synopsis={film.synopsis} title={film.title} badge={film.badge} rating={film.rating} duration={film.duration} year={film.year} path={`/films/${film.id}`} />
                        </li>
                    )}
                </ul>
            </section>
        </>
        
    )
}