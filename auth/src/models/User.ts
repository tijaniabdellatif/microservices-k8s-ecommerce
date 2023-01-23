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
interface UserDecorator  extends mongoose.Model<UserDocumentDecorator>{
     build(attrs: UserInterface): UserDocumentDecorator;
    
}

/**
 * Interface UserDocumentDecorator
 * Describe propreties that a user Document has
 * @param email:String
 * @param password:String
 * @param name:String
 */

interface UserDocumentDecorator extends mongoose.Document {

    email:string;
    name:string;
    password:string;
    createdAt:string,
    updatedAt:string
    
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

},{ timestamps: true });

userSchema.statics.build = (attrs: UserInterface) => {

     return new User(attrs);
}

const User = mongoose.model<UserDocumentDecorator, UserDecorator>('User',userSchema);

export { User };
