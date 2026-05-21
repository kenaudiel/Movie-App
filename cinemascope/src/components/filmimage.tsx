import { Image } from "lucide-react";
import { Link } from "react-router-dom";

type FilmImageProps = {
    image?:React.ReactNode,
    path:string,
    className?:string
}

export default function FilmImage({image, path, className}:FilmImageProps){
    return(
        <Link to={path}>
            <div className={`h-40 w-40 flex items-center justify-center bg-black/35 rounded-md ${className}`}>{image ? image : <Image />}</div>
        </Link>
    )
}