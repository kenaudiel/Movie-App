import { films } from "@/data/films"
import { useParams } from "react-router-dom"

export default function SearchPage(){
    const {keyword} = useParams()

    if(!keyword){
        return
    }

    const filtered = films.filter(film => film.title.toLowerCase().includes(keyword.toLowerCase()))

    return(
        <section>
            
        </section>
    )
}