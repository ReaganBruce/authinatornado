import * as React from 'react';
import { useEffect, useState } from 'react';
import { IBlogs } from '../modulas';
import { Link } from 'react-router-dom';


const Home: React.FC<HomeProps> = (props) => {

    const [getBlogs, setGetBlogs] = useState<IBlogs[]>([])


    useEffect(() => {
        (async () => {
            try {
                const response: Response = await fetch('http://localhost:3000/api/blogs');
                const getBlogs = await response.json();
                setGetBlogs(getBlogs);
            } catch (error) {
                console.log('Error getting all Blogs.');
            }
        })();

    }, [])



    return (
        <>
            <main className="container">
                <section className="row-lg-12 d-flex flex-row flex-wrap">
                    
                    {getBlogs.map((blog) => (
                        <div id="blog-column" className="col-4 mb-4">
                            <div key={`blogs-blog-${blog.id}`}>
                                <div className="card shadow h-100">
                                    <div className="card-body">
                                        <h5 className="card-title">{blog.title}</h5>
                                        <hr className="border border-primary"></hr>
                                        <h6 className="card-text text-muted">{blog.name}</h6>
                                        <p className="card-text">{blog.content}</p>
                                        <Link to={`/details/${blog.id}`} className="btn btn-primary">
                                            View Blog
                                            </Link>
                                        <h6 className='card-text text-muted'>{blog.created_at}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </>
    )
};



interface HomeProps { }


export default Home;
