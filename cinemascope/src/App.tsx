import { ThemeProvider } from "./components/theme-provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./rootlayout";
import HomePage from "./pages/homepage";
import NotFoundPage from "./pages/notfoundpage";

const route = createBrowserRouter([
    {
        path:"/",
        element:<RootLayout/>,
        children: [
            {
                index:true,
                element:<HomePage />
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