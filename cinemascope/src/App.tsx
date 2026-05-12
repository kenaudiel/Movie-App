import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/navbar";
import HomePage from "./pages/homepage";

export default function App(){
    return(
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Navbar/>
            <HomePage/>
        </ThemeProvider>
    );
}