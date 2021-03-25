import * as mysql from 'mysql';
import authors from './queries/authorsQ';
import blogs from './queries/blogsQ';
import blogTags from './queries/blogTagsQ';
import tags from './queries/tagsQ';
import tokens from './queries/tokensQ';
import config from '../config'

export const pool = mysql.createPool(config.mysql)

export const Query = <T = any>(query: string, values?: any) => {
    return new Promise<T>((resolve, reject) => {

        const sql = mysql.format(query, values);
        
        
        pool.query(sql, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        })

    })
    }


export default {
    authors,
    blogs,
    blogTags,
    tags,
    tokens,
}




