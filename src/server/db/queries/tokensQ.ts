import { Query } from '../index'

const findOneById = (id: string) =>  Query('SELECT * from tokens WHERE id = ?', [id]);

const findOneByToken = (id: number, token: 'string') => Query('SELECT * from tokens WHERE id = ? AND token = ?', [id, token]); 

const insertToken = (authorid: number) => Query('INSERT INTO tokens (authorid) VALUES (?)', [authorid]);

const updateToken = (token: string, id: number) => Query('UPDATE tokens SET token = ? WHERE id = ?', [token, id]);





export default {
    findOneById,
    findOneByToken,
    insertToken,
    updateToken
 }