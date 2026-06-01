export type blogsType = {
    id?:number,
    author:string,
    date:string,
    title:string,
    topic?:"Recommendation" | "Review" | "Ranking" | "Interview" | "Analysis" | "Behind the Scene"
    description?:string
}

export const blogs:blogsType[] = [
    {
        id:1,
        author:"Kenneth Audiel",
        date:"30 May 2026",
        title:"Top 10 Highest Rating Films in 2026",
        topic:"Recommendation",
        description:"Have you wonder which film should you watch tonight? We got some suggestion for you."
    },
    {
        id:2,
        author:"Lenon Jame",
        date:"30 May 2026",
        title:"The Avengers: Why Is It One of The Greatest Film of All Time",
        topic:"Analysis",
        description:"Here are some reason why The Avengers is arguably one of the best film among all."
    },
    {
        id:3,
        author:"Brian Zeke",
        date:"31 May 2026",
        title:"All Spider-Man Movies Ranked",
        topic:"Ranking",
        description:"As a spiderman fan, here is how I would rank every spider-man movie."
    }
]