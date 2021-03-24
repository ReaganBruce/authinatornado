import { Query } from '../index';

// Because we just joined the authors and blogs in MySql, is it necessary having queries for the authors table in node?



const getAllAuthors = () => Query('SELECT * FROM Authors');

const getOneAuthor = (id: number) => Query('SELECT * FROM Authors WHERE id =?', [id]);

const postAuthor = (id: number, name: string, email: string) => Query('INSERT INTO Authors(id, name, email) VALUES (?, ?, ?)', [id, name, email]);

const deleteAuthor = (id: number) => Query('DELETE FROM Authors WHERE id =?', [id]);



export default { 
    getAllAuthors,
    getOneAuthor,
    postAuthor,
    deleteAuthor,
}



