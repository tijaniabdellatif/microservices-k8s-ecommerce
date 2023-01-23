import mongoose from "mongoose";

/**
 * Interface UserInterface 
 * @param email:String
 * @param password:String
 * @param name:String
 * @return User
 */

interface UserInterface {

    name:string,
    email:string,
    password:string

}
const userSchema = new mongoose.Schema({

    name:{

          type:String,
          required:true
    },

    email : {

         type:String,
         required:true
    },

    password:{

        type:String,
        required:true
    }

});

const User = mongoose.model('User',userSchema);

const buildUser = (attrs: UserInterface) =>{
    return new User(attrs);
};


export { User , buildUser};
