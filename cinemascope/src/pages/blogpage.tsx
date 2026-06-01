import BlogCard from "@/components/blogcard";
import CarouselCard from "@/components/carouselcard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { blogs } from "@/data/blogs";

export default function BlogPage(){
    return(
        <section className="">
            <div className="flex flex-col gap-2 mb-10">
                <h1 className="text-3xl font-bold">Blog</h1>
                <p className="text-muted-foreground text-lg" >Discover stories, ideas, and perspectives worth reading.</p>
            </div>
            <p className="text-muted-foreground text-sm mb-5">RECENT BLOG POSTS</p>
            <ul className="grid grid-cols-3 gap-10">
                {blogs.map(blog =>
                    <li key={blog.id}>
                        <BlogCard title={blog.title} author={blog.author} date={blog.date} description={blog.description} id={blog.id} topic={blog.topic}/> 
                    </li>
                )}
            </ul>
            <div className="mt-5">
                <p className="text-muted-foreground text-sm mb-5">USER STORIES</p>
                <div className="flex justify-center items-center">
                    <Carousel className="">
                        <CarouselContent>
                            <CarouselItem>
                                <CarouselCard></CarouselCard>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}