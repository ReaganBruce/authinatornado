import { Query } from '../index';

const getBlogTag = (blogtagid: number) => Query('CALL spBlogTags(?)', [blogtagid]);

const insertBlogTag = (blogid: number, tagid: number) => Query('INSERT INTO BlogTags (blogid, tagid) VALUES (?, ?)', [blogid, tagid])


export default {
    getBlogTag,
    insertBlogTag
}

