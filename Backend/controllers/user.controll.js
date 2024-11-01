import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { fullname, email,password } = req.body;

  try {
    // const user = await User.findOne({ email });
    // if (user) {
    //     return res.status(400).send('User  already exits ');
    // }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User Already Exits" });
    }

    //Secure password
    const hashPassword= await bcryptjs.hash(password, 10);
    const CreateUser = new User({
      fullname:fullname,
      email:email,
      password:hashPassword,

    });
    await CreateUser.save();
    return res.status(201).json({ message: "User Created Successfull!", user:{
      _id: CreateUser._id,
      fullname: CreateUser.fullname,
      email: CreateUser.email,

    } });
   

    // console.log("User Created Success!");
    // console.log(req.body);
    // Proceed to check password
  } catch (error) {
    console.error("Database error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req,res) => {

  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!user || !isMatch) {
        return res.status(400).json({ message: "Invalid username or password" });
    } else {
        res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
            },
        });
    }
} catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
}

};
// export const signup = async (req,res) => {
//   try {
//     const {fullname,email,password}= req.body;
//     const user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({ message: "User already exists" });
//     }
// const hashPassword= bcryptjs.hash(password, 10)
//     const createdUser = new User({
//       fullname:fullname,
//        email: email,
//       passowrd: hashPassword,

//     });

//     await createdUser.save();
//     res.status(201).json({ message: "User created Successfully !" });
//   } catch (error) {
//     console.log("Error: ", error);

//     res.status(500).json({ message: "Internal server error!" });
//   }
// };

// export const login= async(req,res)=>{
//   try {
//     const {email, password}= req.body;
//     const user= await User.findOne({email});
//     const isMatch= await bcryptjs.compare(password, user.passowrd);
//     if(!user || !isMatch ){
//       return res.status(400).json({message: "Invalid username and password!"});

//     }
//     else{
//       return res.status(200).json({message: "Login succcessfully!", user:{
//         _id: user._id,
//         fullname: user.fullname,
//         email: user.email
//       } });
//     }

//   } catch (error) {
//     console.log("Error", error);
//     res.status(500).json({message: "Internal server error !"});
//   }
// }
