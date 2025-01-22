import { blogData } from '../constants/BlogData';

const BlogCard = () => {
    return (
        <>
             
            
                {Object.keys(blogData).map((key) => {
                    const { title, image, content } = blogData[key];
                    return (
                        <div key={key} className="card bg-base-100 shadow-xl">
                            <figure className='h-36 '>
                                <img
                                    className='w-full h-full object-cover'
                                    src={image}
                                    alt={title}
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold">{title}</h2>
                                <p className='text-sm font-light text-left'>
                                    {content}
                                </p>
                                <span className='text-lg text-indigo-950 font-bold'>
                                    Know More
                                </span>
                            </div>
                        </div>
                    );
                })}
            
        </>
    )
}

export default BlogCard