import express,{Response,Request} from 'express';
import { CurrentUserMiddlleware } from '../middlewares/CurrentUser';
const router = express.Router();
router.get('/api/users/current',CurrentUserMiddlleware,async (req:Request,res:Response) => {
     res.send({currentUser: req.currentUser || null});
});

export { router as currentUserRouter };