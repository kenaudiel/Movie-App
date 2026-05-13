import { ThemeProvider } from "./components/theme-provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./rootlayout";
import HomePage from "./pages/homepage";
import NotFoundPage from "./pages/notfoundpage";
import AboutPage from "./pages/aboutpage";
import FilmsPage from "./pages/filmspage";
import BlogPage from "./pages/blogpage";

const route = createBrowserRouter([
    {
        path:"/",
        element:<RootLayout/>,
        children: [
            {
                index:true,
                element:<HomePage />
            },
            {
                path:"/about",
                element:<AboutPage />
            },
            {
                path:"/films",
                element:<FilmsPage />
            },
            {
                path:"/blog",
                element:<BlogPage />
            }
        ]
    },
    {
        path:"*",
        element:<NotFoundPage />
    }
])

export default function App(){
    return(
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={route} />
        </ThemeProvider>
    );
}