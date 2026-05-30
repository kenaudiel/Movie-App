import BlogCard from "@/components/blogcard";

export default function BlogPage(){
    return(
        <section className="">
            <div className="flex flex-col gap-2 mb-10">
                <h1 className="text-3xl font-bold">Blog</h1>
                <p className="text-muted-foreground text-lg" >Discover stories, ideas, and perspectives worth reading.</p>
            </div>
            <div className="grid grid-cols-3 gap-15">
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </section>
    )
}