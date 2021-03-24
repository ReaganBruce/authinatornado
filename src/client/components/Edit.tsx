import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';






const Edit: React.FC<EditProps> = (props) => {
    const history = useHistory();
    const { blogid } = useParams<{ blogid: string }>();

    const [title, setEditTitle] = useState('');
    const [content, setEditContent] = useState('');

    


    useEffect(() => {
        (async () => {
            try {

                let response = await fetch(`/api/blogs/${blogid}`)
                let blog = await response.json()
                setEditTitle(blog.title);
                setEditContent(blog.content);
            } catch (err) {
                console.error(err)
            }
        })()
    }, [blogid])


    const handleUpdateClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            await fetch(`/api/blogs/${blogid}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    title,
                    content
                })
            })
        } catch (err) {
            console.log('Error getting PUT request');
        }

        history.goBack()
    }


    const handleDeleteClick: React.ReactEventHandler = async () => {
        
        try {
            await fetch(`/api/blogs/${blogid}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
        catch (err) {
            console.log(`Error getting DELETE request`);
        }
        history.push('/')
    }


    return (
        <>
            <div className="container">
                <main className="col-md-12">
                    <section className="row justify-content-center mt-5">
                        <div className="card col-md-6 text-center shadow my-3">
                            <div className="card-body">
                                <form className="d-flex justify-content-between mt-3">
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) => setEditTitle(e.target.value)}

                                    />
                                    <input
                                        type="text"
                                        value={content}
                                        onChange={(e) => setEditContent(e.target.value)}
                                    />
                                    <button className="btn btn-warning" onClick={handleUpdateClick}>
                                        Save & Edit</button>
                                </form>

                                <button className="btn btn-danger" onClick={handleDeleteClick}>
                                    Delete Blog</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
)

};

interface EditProps {}


export default Edit;