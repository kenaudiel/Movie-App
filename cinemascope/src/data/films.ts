type filmsMetaData = {
    id:number,
    title:string,
    synopsis:string,
    badge:"Free" | "Premium",
    duration:number,
    rating:number,
    year:number
}

export const films:filmsMetaData[] = [
    {
        id:1,
        title:"Interstellar",
        synopsis:"A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival as Earth faces a global crop blight and second Dust Bowl.",
        badge:"Free",
        duration:130,
        rating:9.1,
        year:2014
    },
    {
        id:2,
        title:"The Avengers",
        synopsis:"Earth's mightiest heroes must learn to work together as a team to stop the mischievous Loki and his alien army from enslaving humanity.",
        badge:"Premium",
        duration:150,
        rating:9.5,
        year:2015
    },
    {
        id:3,
        title:"Spider-Man: No Way Home",
        synopsis:"With Spider-Man's identity now revealed, Peter Parker asks Doctor Strange for magical help, but the spell goes wrong, tearing open the multiverse and releasing dangerous villains from other worlds.",
        badge:"Free",
        duration:140,
        rating:8.9,
        year:2020
    },
    {
        id:4,
        title:"Ice Age",
        synopsis:"Set during the days of the ice age, a misfit trio of prehistoric beasts—a mammoth, a sloth, and a saber-toothed tiger—unite to return a lost human baby to his tribe.",
        badge:"Premium",
        duration:120,
        rating:8.7,
        year:2010
    },
    {
        id:5,
        title:"Up",
        synopsis:"A seventy-year-old widower ties thousands of balloons to his house to fulfill a promise to his late wife, accidentally taking a young wilderness explorer along for the ride.",
        badge:"Free",
        duration:130,
        rating:9.3,
        year:2009
    },
    {
        id:6,
        title:"Toy Story",
        synopsis:"A cowboy doll's position as a boy's favorite toy is threatened when a flashy new spaceman action figure arrives, sparking a rivalry that gets them both lost in the outside world.",
        badge:"Premium",
        duration:120,
        rating:9.0,
        year:2000
    },
    {
        id:7,
        title:"Despicable Me",
        synopsis:"A cynical supervillain adopts three orphan girls as pawns for a grand heist, but finds his malicious heart softening as he grows genuinely attached to them.",
        badge:"Premium",
        duration:140,
        rating:9.1,
        year:2014
    },
    {
        id:8,
        title:"Breaking Bad",
        synopsis:"A high school chemistry teacher dying of cancer teams with a former student to secure his family's future by manufacturing and selling crystal meth.",
        badge:"Premium",
        duration:300,
        rating:9.2,
        year:2015
    },
    {
        id:9,
        title:"The Lion King",
        synopsis:"A young lion prince flees his kingdom after his father's murder, only to return years later as an adult to reclaim his throne from his wicked uncle.",
        badge:"Premium",
        duration:100,
        rating:8.2,
        year:2015
    },
    {
        id:10,
        title:"Frozen",
        synopsis:"When a newly crowned queen accidentally uses her icy powers to trap her kingdom in an eternal winter, her optimistic sister teams up with a rugged mountain man to find her and break the spell.",
        badge:"Premium",
        duration:110,
        rating:8.3,
        year:2013
    },
    {
        id:11,
        title:"Cars",
        synopsis:"A hotshot, arrogant rookie race car gets stranded in a forgotten, rundown desert town on his way to a championship, where he discovers the true meaning of friendship and family.",
        badge:"Premium",
        duration:90,
        rating:8.4,
        year:2014
    },
    {
        id:12,
        title:"Fast & Furious",
        synopsis:"An undercover cop infiltrates the street racing subculture of Los Angeles to bust a high-speed hijacking ring, but finds his loyalties tested after befriending the gang's charismatic leader.",
        badge:"Premium",
        duration:130,
        rating:8.5,
        year:2001
    },
]