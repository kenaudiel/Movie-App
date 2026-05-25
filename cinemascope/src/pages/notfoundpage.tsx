import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage(){
    const navigate = useNavigate()

    return(
        <div className="h-114 flex flex-col items-center justify-center gap-5">
            <div className="flex flex-col gap-1 justify-center items-center">
                <p className="text-3xl">Error 404</p>
                <p className="text-muted-foreground text-sm">Page Not Found.</p>
            </div>
            
            <Button variant="default" onClick={() => navigate("/")}>
                <ArrowLeft />
                Back to Home
            </Button>
        </div>
    )
}