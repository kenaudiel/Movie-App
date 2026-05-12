import { CardImage } from "@/components/cardimage"

export default function HomePage(){
    return(
        <section className="p-10">
            <h2 className="mb-5">Popular Movies</h2>   
            <div className="grid grid-cols-4 gap-5">
                <CardImage title="Card #1" description="This is the placeholder for the card description." badge="Free" buttonText="Learn More"/>
                <CardImage title="Card #2" description="This is the placeholder for the card description." badge="Free" buttonText="Learn More"/>
                <CardImage title="Card #3" description="This is the placeholder for the card description." badge="Free" buttonText="Learn More"/>
                <CardImage title="Card #4" description="This is the placeholder for the card description." badge="Free" buttonText="Learn More"/>
                <CardImage title="Card #5" description="This is the placeholder for the card description." badge="Free" buttonText="Learn More"/>
                <CardImage title="Card #6" description="This is the placeholder for the card description." badge="Free" buttonText="Learn More"/>
                <CardImage title="Card #7" description="This is the placeholder for the card description." badge="Free" buttonText="Learn More"/>
                <CardImage title="Card #8" description="This is the placeholder for the card description." badge="Free" buttonText="Learn More"/>
            </div>
        </section>
    )
}