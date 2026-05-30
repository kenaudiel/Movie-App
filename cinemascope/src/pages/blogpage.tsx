import BlogCard from "@/components/blogcard";
import { blogs } from "@/data/blogs";

export default function BlogPage(){
    return(
        <section className="">
            <div className="flex flex-col gap-2 mb-10">
                <h1 className="text-3xl font-bold">Blog</h1>
                <p className="text-muted-foreground text-lg" >Discover stories, ideas, and perspectives worth reading.</p>
            </div>
            <ul className="grid grid-cols-3 gap-15">
                {blogs.map(blog =>
                    <li key={blog.key}>
                        <BlogCard title={blog.title} author={blog.author} date={blog.date} description={blog.description} key={blog.key} topic={blog.topic}/> 
                    </li>
                )}
            </ul>
        </section>
    )
}