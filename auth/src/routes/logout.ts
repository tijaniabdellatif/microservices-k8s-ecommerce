import express, {Request,Response}from 'express';
const router = express.Router();
router.post('/api/users/logout',async (req: Request,res: Response) => {

   /**
    * Destroying session
    */

   req.session = null;

   res.send({});


});

export { router as userLogOut };