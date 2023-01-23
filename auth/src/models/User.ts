import mongoose from "mongoose";

/**
 * Interface UserInterface 
 * propreties required as creating new User
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

/**
 * Interface UserDecorator 
 * Describe propreties of a model User
 * @param email:String
 * @param password:String
 * @param name:String
 */
interface UserDecorator  extends mongoose.Model<any>{
     build(attrs: UserInterface): any;
    
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

userSchema.statics.build = (attrs: UserInterface) => {

     return new User(attrs);
}

const User = mongoose.model<any, UserDecorator>('User',userSchema);

 
User.build({

    email:'tijani@gmail.com',
    password:'abdellatif23',
    name:'franky'

});


export { User };
