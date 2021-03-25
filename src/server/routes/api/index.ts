import * as express from 'express';
import authorsRouter from './authors';
import blogsRouter from './blogs';
import blogTagsRouter from './blogTags';
import tagsRouter from './tags';
import tokenRouter from './tokens';

const router = express.Router();

router.use('/authors', authorsRouter);
router.use('/blogs', blogsRouter);
router.use('/blogTags/', blogTagsRouter);
router.use('/tags', tagsRouter);
router.use('/token', tokenRouter);


export default router;