import express,{Response,Request} from 'express';
import jsonwebtoken from 'jsonwebtoken';
const router = express.Router();
router.get('/api/users/current',async (req:Request,res:Response) => {

       if(!req.session?.jwt){
            return res.send({currentUser : null});
       }
       try{
        const payload = jsonwebtoken.verify(req.session.jwt,process.env.jwt!);
        res.send({currentUser:payload});
       }catch(error){

          res.send({curentUser:null});
       }
      

    

});

export { router as currentUserRouter };