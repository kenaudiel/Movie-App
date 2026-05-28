import { cn } from "@/lib/utils";
import { Image } from "lucide-react";
import { useNavigate } from "react-router-dom";

type FilmImageProps = {
    image?:React.ReactNode,
    path?:string,
    className?:string
}

export default function FilmImage({image, path, className}:FilmImageProps){
    const navigate = useNavigate()

    return(
        <div onClick={() => path && navigate(path)} className={cn(`h-40 w-40 flex items-center justify-center bg-black/35 rounded-md ${path && "cursor-pointer"}`, className)}>
                {image ? image : <Image />}
        </div>
    )
}