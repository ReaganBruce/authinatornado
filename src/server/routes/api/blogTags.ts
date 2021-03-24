import * as express from "express";
import db from "../../db";


const router = express.Router();


router.get('/:blogtagid', async (req, res) => {

    const blogtagid = Number(req.params.blogtagid);
    try {
        const [blogTag] = await db.blogTags.getBlogTag(blogtagid);
        res.json(blogTag);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Did not get Blog Tags', error: error.message });
    }
})


router.post('/', async (req, res) => {
    const newBlogTag = req.body;
    try {
       const result = await db.blogTags.insertBlogTag(newBlogTag.blogid, newBlogTag.tagid);
       res.json({ msg: 'blogtag inserted', ...result});
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Updated Blog Tags', error: error.message });
    }
})

        
        






export default router;