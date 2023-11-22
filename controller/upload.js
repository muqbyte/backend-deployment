import File from "../model/file.js";
import User from "../model/user.js";

const upload = async (req, res) =>{
    const {username, email, password}= req.body

    try {
        const newUpload= await File.create(req.file)
        const newUser = await User.create({username, email, password,profilepictureurl:newUpload.path})
        // console.log(req.file);
        res.status(200).json({message:"Upload succesful with profile picture", data:newUpload})
    } catch (error) {
        console.error(error)
        res.status(500).json({error:error})
    }


    
}

export default upload;