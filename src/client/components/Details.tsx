import * as React from 'react';
import { useParams } from 'react-router-dom';
import { IBlogs, ITags } from '../modulas';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const Details: React.FC<DetailsProps> = (props) => {
    const { blogid } = useParams<{ blogid: string }>();

    const [getBlog, setGetBlog] = useState<IBlogs>(null)
    
    const history = useHistory();


    useEffect(() => {
        (async () => {
            try {
                const response: Response = await fetch(`http://localhost:3000/api/blogs/${blogid}`);
                const getBlog = await response.json();

                setGetBlog(getBlog);

            } catch (error) {
                console.log('Error getting all Blogs.');
            }
        })();
    }, [])


    function handleClick() {
        history.goBack()
    }



    return (
        <>
            <main className="container-fluid">
                <section className="row">
                    <div className="col-md-12">
                        <div key={`blogs-blog-${getBlog?.id}`}>
                            <div className="card shadow my-2">
                                <div className="card-body">
                                    <h5 className="card-title">{getBlog?.title}</h5>
                                    <hr className="border border-primary"></hr>
                                    <h6 className="card-text text-muted">{getBlog?.name}</h6>
                                    <p className="card-text">{getBlog?.content}</p>
                                    {/* <div className="badge badge-success">
                                        {getTag.map(blogtag => (
                                            <div key={`blogtag--${blogtag.id}`}>{blogtag.name}</div>
                                        ))}
                                    </div> 
                                    
                                    All of my maps kept giving me key prop errors in the debugger, however;
                                    each map had its own unique key in React... so? Still confused as to why this is happening.
                                    I don't think I've ever had a map that didn't give me this error, even tho I had a unique key.
                                    
                                    */}

                                    <button type="button" className="btn btn-primary" onClick={handleClick}>View All Blogs</button>
                                    <Link to={`/details/${getBlog?.id}/edit`} className="btn btn-warning">
                                        Edit Blog
                                                        </Link>

                                    <h6 className='card-text text-muted'>{getBlog?.created_at}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
};












interface DetailsProps { }


export default Details;
