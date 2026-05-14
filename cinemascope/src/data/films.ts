type filmsMetaData = {
    id:number,
    title:string,
    description:string,
    badge:"Free" | "Premium"
}

export const films:filmsMetaData[] = [
    {
        id:1,
        title:"Interstellar",
        description:"In a dystopian future where Earth has become near-uninhabitable, a team of astronauts embark on a mission to find a new home for humanity.",
        badge:"Free"
    },
    {
        id:2,
        title:"The Avengers",
        description:"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        badge:"Premium"
    }
]