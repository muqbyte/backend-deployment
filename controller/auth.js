import User from "../model/user.js"

const register = async (req, res) =>{
    //object destructure
    const {email, username, password} =req.body

    try {
        const newUser = await User.create({
            email:email,
            username:username,
            password:password,
        })
        res.status(200).json({message:"created", data:newUser.dataValues})
    } catch (error) {
        console.error(error)
        res.status(500).json({error:error})
    }
}

const login = async (req, res) =>{
    const {email}=req.body
    try {
        const user=await User.findOne({
            where:{
                email:email
            }
        });

        //if user not found
        if (!user){
            res.status(404).json({message:"user not found"})
            return;
        }
        res.status(200).json({message:"a user found", data:user})
        
    } catch (error) {
        console.error(error)
        res.status(500).json({error:error})
    }
}

const authController={register, login}

export default authController;

