import { clerkClient } from "@clerk/express"

export const protectRoute=async (req,res,next) =>{
// const{userId}=await clerkClient.users.getUser(req.userId);
if(!req.auth.userId){
    return  res.status(401).json({message:'Unauthorized - you must be logged in '});


}
next();//if user is authenticated call the next function

};
//check the user is admin or not 
//checkfor admin in .env file if User s logging in with .env Admin email the user is admin 
export const requireAdmin=async(req,res,next)=>{
    try{
        const currentUser =await clerkClient.users.getUser(req.auth.userId);
        const isAdmin =process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress?.emailAddress;//clerk stores like this 
        if(!isAdmin){
           return  res.status(403).json({message:"Unauthorized - you must be an admin "});
            
        }
        next();


    }catch(error){
        next(error);

    }

    
};