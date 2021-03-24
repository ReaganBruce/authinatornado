import * as express from 'express';
import authorsRouter from './authors';
import blogsRouter from './blogs';
import blogTagsRouter from './blogTags';
import tagsRouter from './tags';

const router = express.Router();

router.use('/authors', authorsRouter);
router.use('/blogs', blogsRouter);
router.use('/blogTags/', blogTagsRouter);
router.use('/tags', tagsRouter);


export default router;