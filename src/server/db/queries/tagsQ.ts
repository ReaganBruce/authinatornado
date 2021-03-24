import { Query } from '../index';

const allTags = () => Query('SELECT * FROM tags');


export default {
    allTags,
 }


