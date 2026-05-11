import { CardImage } from "./components/cardimage";
import Navbar from "./components/navbar";
import { ThemeProvider } from "./components/theme-provider";

export default function App(){
    return(
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Navbar/>

            <div className="grid grid-cols-4 gap-y-5">
                <CardImage title="Card #1" description="This is the placeholder for the card description." badge="Free" buttonText="Learn More"/>
                <CardImage title="Card #2" description="This is the placeholder for the card description." badge="Free" buttonText="Learn More"/>
                <CardImage title="Card #3" description="This is the placeholder for the card description." badge="Free" buttonText="Learn More"/>
                <CardImage title="Card #4" description="This is the placeholder for the card description." badge="Free" buttonText="Learn More"/>
                <CardImage title="Card #5" description="This is the placeholder for the card description." badge="Free" buttonText="Learn More"/>
                <CardImage title="Card #6" description="This is the placeholder for the card description." badge="Free" buttonText="Learn More"/>
                <CardImage title="Card #7" description="This is the placeholder for the card description." badge="Free" buttonText="Learn More"/>
                <CardImage title="Card #8" description="This is the placeholder for the card description." badge="Free" buttonText="Learn More"/>
            </div>
            
        </ThemeProvider>
    );
}