import * as React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ITags } from '../modulas';






const Create: React.FC<CreateProps> = (props) => {
    const history = useHistory();

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [selectTags, setSelectTags] = useState('')


    const [tags, setTags] = useState<ITags[]>([])

    useEffect(() => {
        (async () => {
            try {

                let response = await fetch('/api/tags');
                let tags = await response.json();
                setTags(tags);

            } catch (err) {
                console.error(err)
            }
        })()

    }, [])


    const handleCreateClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const response = await fetch('http://localhost:3000/api/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                title,
                content

            })
        })
        const blogResult = await response.json();
        console.log(blogResult);

        history.push('/');
    }





    //The option to choose tags work in react state.
    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <form className="d-flex justify-content-center mt-3">

                            <label htmlFor="selected tag"></label>
                            <select value={selectTags} onChange={(e) => setSelectTags(e.target.value)}>
                                {tags.map(tag => (
                                    <option key={`tag-${tag.id}`} value={tag.id}>{tag.name}</option>
                                ))}
                            </select>

                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Title Of Blog..."
                            />


                            <input
                                type="text"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="Write abt ur day"
                            />
                            <button className="btn btn-primary" onClick={handleCreateClick}>Create New Blog</button>
                        </form>
                    </div>
                </section>
            </main>

        </>

    )



};

interface CreateProps { }


export default Create;



