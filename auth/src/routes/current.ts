import express from 'express';
const router = express.Router();
router.get('/api/users/current',(req,res) => {

    res.send('Hi world!');


});

export { router as currentUserRouter };