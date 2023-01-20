import express from 'express';
const router = express.Router();
router.post('/api/users/logout',(req,res) => {

    res.send('Hi wolrd');


});

export { router as userLogOut };