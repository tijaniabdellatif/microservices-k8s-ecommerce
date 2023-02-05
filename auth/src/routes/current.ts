import express,{Response,Request} from 'express';
import { CurrentUserMiddlleware } from '../middlewares/CurrentUser';
import { authAccess } from '../middlewares/AuthAccess';
const router = express.Router();
router.get('/api/users/current',CurrentUserMiddlleware,authAccess,async (req:Request,res:Response) => {
     res.send({currentUser: req.currentUser});
});

export { router as currentUserRouter };