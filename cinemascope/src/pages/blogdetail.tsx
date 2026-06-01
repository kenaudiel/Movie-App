import FilmImage from "@/components/filmimage";
import { blogs } from "@/data/blogs";
import { Badge } from '@/components/ui/badge'
import { useParams } from "react-router-dom";

export default function BlogDetail(){
    const {id} = useParams()

    const filtered = blogs.filter(blog => blog.id === Number(id))
    const blog = filtered[0]

    function BadgeColor(){
        if(blog.topic == "Interview" || blog.topic == "Analysis"){
            return "dark:text-blue-300 text-blue-400"
        } else if(blog.topic == "Ranking" || blog.topic == "Behind the Scene"){
            return "dark:text-purple-300 text-purple-400"
        } else {
            return "dark:text-yellow-300 text-yellow-600"
        }
    }

    return(
        <section className="px-40">
            <div className="flex justify-center px-10 py-3">
                <FilmImage className="dark:bg-card bg-black/35 w-full h-60"/>
            </div>
            <div className="mt-3 px-10 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-bold">{blog.title}</h2>
                    <Badge variant="secondary" className={`text-sm p-4 ${BadgeColor()}`}>{blog.topic}</Badge>
                </div>
                <p className="text-muted-foreground">{blog.author} | {blog.date}</p>
            </div>
            <div className="mt-10 px-10 text-justify flex flex-col gap-10 dark:text-gray-300 text-gray-600">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, dicta quae cumque quam beatae quisquam odio doloremque vel repudiandae earum maxime suscipit magni corrupti repellendus facere minima magnam, aperiam nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, necessitatibus? Odio quia facere corrupti dolore nam laboriosam. Maxime quis modi iste officiis molestias odio placeat possimus, fuga architecto porro reiciendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus modi temporibus culpa enim repellendus aspernatur commodi aliquid rem nemo dicta. Quaerat odio architecto nobis velit porro exercitationem odit, autem nisi.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos in dolor accusantium cupiditate aperiam ipsum quis culpa, veritatis iusto porro quia, molestiae laboriosam ut architecto quod debitis omnis minus minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tempore corrupti expedita nesciunt magnam veniam, dicta voluptates repudiandae dolores iure, repellat architecto reiciendis vel, quibusdam itaque dolore! Necessitatibus, inventore ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, delectus, fuga nemo nihil iste asperiores, repudiandae culpa dolore voluptate corrupti ipsum impedit animi? Debitis enim molestias ab! Omnis, molestias enim?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, dicta quae cumque quam beatae quisquam odio doloremque vel repudiandae earum maxime suscipit magni corrupti repellendus facere minima magnam, aperiam nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, necessitatibus? Odio quia facere corrupti dolore nam laboriosam. Maxime quis modi iste officiis molestias odio placeat possimus, fuga architecto porro reiciendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus modi temporibus culpa enim repellendus aspernatur commodi aliquid rem nemo dicta. Quaerat odio architecto nobis velit porro exercitationem odit, autem nisi.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, dicta quae cumque quam beatae quisquam odio doloremque vel repudiandae earum maxime suscipit magni corrupti repellendus facere minima magnam, aperiam nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, necessitatibus? Odio quia facere corrupti dolore nam laboriosam. Maxime quis modi iste officiis molestias odio placeat possimus, fuga architecto porro reiciendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus modi temporibus culpa enim repellendus aspernatur commodi aliquid rem nemo dicta. Quaerat odio architecto nobis velit porro exercitationem odit, autem nisi.</p>
            </div>
        </section>
    )
}