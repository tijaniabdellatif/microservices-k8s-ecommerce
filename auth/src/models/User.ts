import mongoose from "mongoose";
import { createDecorator } from "typescript";
import { PasswordHash } from "../services/PasswordHash";
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

},{ 
    
    timestamps: true,
    toJSON:{

        transform(doc,ret){

               /**
                * Remove the password in response 
                * and some other propreties
                */
               ret.id = ret._id;
               delete ret._id;
               delete ret.password;
               delete ret.__v;
               delete ret.createdAt;
               delete ret.updatedAt;

        }
        
}});


/**
 * Pre saved Hook
 * Save hashed password
 * @param action event
 * @param anonymous function 
 */
userSchema.pre('save',async function(done){

    if(this.isModified('password')){

        const hashed = await PasswordHash.toHash(this.get('password'));
        this.set('password',hashed);
    }

    done();

});

userSchema.statics.build = (attrs: UserInterface) => {

     return new User(attrs);
}

const User = mongoose.model<UserDocumentDecorator, UserDecorator>('User',userSchema);

export { User };
