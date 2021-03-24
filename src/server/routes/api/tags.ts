import * as express from 'express';
import db from '../../db/index'

const router = express.Router();


router.get('/', async (req, res) => {

    try {
        const tags = await db.tags.allTags()
        res.json(tags);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Did not get Tags', error: error.message });
    }
})






export default router;