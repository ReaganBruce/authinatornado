import * as express from 'express';
import db from '../../db/index'


const router = express.Router();


//IS ANY OF THIS NECESSARY FOR AUTHORS?

router.get('/:authorid', async (req, res) => {
    const authorid = Number(req.params.authorid);

	try {
		if(authorid) {
			const [author] = await db.authors.getOneAuthor(authorid);
			res.json(author);
		} else {
			const authors = await db.authors.getAllAuthors();
			res.json(authors);
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Did not get Authors by ID', error: error.message });
	}
        

})

router.get('/', async (req, res) => {
    try {
        const getAuthors = await db.authors.getAllAuthors();
        res.json(getAuthors);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Did not get all Authors', error: error.message })
    }
})


router.post('/', async (req, res) => {
    const postedByAuthor = req.body;
    try {
        
        const authorPosted = await db.authors.postAuthor(postedByAuthor.id, postedByAuthor.name, postedByAuthor.email);
        res.json(authorPosted);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Author did not post', error: error.message});
    }
})


router.delete('/:authorid', async (req, res) => {
    const authorid = Number(req.params.authorid);

    try {
        const deleteAuthor =  await db.authors.deleteAuthor(authorid);
        res.json(deleteAuthor);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Did not delete Author', error: error.message});
    }
})


export default router;
