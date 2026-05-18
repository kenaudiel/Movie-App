type filmsMetaData = {
    id:number,
    title:string,
    synopsis:string,
    badge:"Free" | "Premium",
    duration:string,

}

export const films:filmsMetaData[] = [
    {
        id:1,
        title:"Interstellar",
        synopsis:"In a dystopian future where Earth has become near-uninhabitable, a team of astronauts embark on a mission to find a new home for humanity.",
        badge:"Free"
    },
    {
        id:2,
        title:"The Avengers",
        synopsis:"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        badge:"Premium"
    },
    {
        id:3,
        title:"Spider-Man: No Way Home",
        synopsis:"With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
        badge:"Free"
    },
    {
        id:4,
        title:"Ice Age",
        synopsis:"Manny the mammoth, Sid the loquacious sloth, and Diego the sabre-toothed tiger go on a comical quest to return a human baby back to his father, across a world on the brink of an ice age.",
        badge:"Premium"
    },
    {
        id:5,
        title:"Up",
        synopsis:"A grumpy old man turns his house into an airship using balloons and flies off to South America with a young stowaway.",
        badge:"Free"
    },
    {
        id:6,
        title:"Toy Story",
        synopsis:"A cowboy doll is profoundly jealous when a new spaceman action figure supplants him as the top toy in a boy's bedroom.",
        badge:"Premium"
    },
    {
        id:7,
        title:"Despicable Me",
        synopsis:"A villainous mastermind's plan to steal the moon from the sky veers off course when a trio of orphans looking for a dad capture his heart instead.",
        badge:"Premium"
    },
    {
        id:8,
        title:"Breaking Bad",
        synopsis:"A high school chemistry teacher dying of cancer teams with a former student to secure his family's future by manufacturing and selling crystal meth.",
        badge:"Premium"
    }
]