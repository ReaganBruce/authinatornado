import * as express from 'express';
import db from '../../db/index'

const router = express.Router();


router.get('/:blogid?', async (req, res) => {

    const blogid = Number(req.params.blogid);
    try {
        if (blogid) {
            const [blog] = await db.blogs.oneBlog(blogid);
            res.json(blog);
        } else {
            const blogs = await db.blogs.allBlogs();
            res.json(blogs);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Did not get Blogs', error: error.message });
    }
})

router.post('/', async (req, res) => {
    const postedBlog = req.body;
    postedBlog.authorid = 1; //still unsure as to what this does, but i saw luke do it.
    try {
        const blogPosted = await db.blogs.insertBlog(postedBlog);
        res.json(blogPosted);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Blog was not posted', error: error.message });
    }
})

router.put('/:blogid?', async (req, res) => {
    const blogUpdated = req.body;
    const blogid = Number(req.params.blogid);
    try {
        const updatedBlog = await db.blogs.updateBlog(blogUpdated, blogid);
        res.json(updatedBlog);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Blog was not updated', error: error.message });
    }
})

router.delete('/:blogid', async (req, res) => {
    const blogid = Number(req.params.blogid);

    try {
        const blogDeleted =  await db.blogs.deleteBlog(blogid);
        res.json(blogDeleted);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Blog was not deleted', error: error.message});
    }
})

export default router;