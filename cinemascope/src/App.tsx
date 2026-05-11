import { CardImage } from "./components/cardimage";
import Navbar from "./components/navbar";
import { ThemeProvider } from "./components/theme-provider";

export default function App(){
    return(
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Navbar/>

            <CardImage title="Card #1" description="This is the placeholder for the card description." badge="Free" buttonText="Learn More"/>
        </ThemeProvider>
    );
}