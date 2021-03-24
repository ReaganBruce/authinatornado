import { Query } from '../index';

const allBlogs = () => Query('SELECT blogs.*, authors.name FROM blogs JOIN authors ON authors.id = blogs.authorid');

const oneBlog = (id: number) => Query('SELECT blogs.*, authors.name FROM blogs JOIN authors ON authors.id = blogs.authorid WHERE blogs.id = ?', [id]);

const insertBlog = (postBlogs: {authorid: number, title: string, content: string }) => Query('INSERT INTO Blogs SET ?', [postBlogs])
// const insertBlog = (authorid: number, title: string, content: string) => Query('INSERT INTO Blogs VALUES (?, ?, ?)', [authorid, title, content])

const updateBlog = ( updateBlogs: {title?: string, content?: string}, id: number) => Query('UPDATE blogs SET ? WHERE id = ?', [updateBlogs, id]);

const deleteBlog = (id: number) => Query('DELETE FROM Blogs WHERE id = ?', [id]);





export default {
   allBlogs,
   oneBlog,
   insertBlog,
   updateBlog,
   deleteBlog
}

