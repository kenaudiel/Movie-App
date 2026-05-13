import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFoundPage(){
    return(
        <div>
            <p>Page Not Found</p>
            <Link to="/">
                <Button variant="default">Back to Home</Button>
            </Link>
        </div>
    )
}