import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import proUser from "../models/proUser.js";
import userotp from "../models/userotp.js";
import otpGenerator from "otp-generator";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {

    //first see if the user exists for sign in
    const existingUser = await proUser.findOne({ email });

    if (!existingUser)
    {
        //if user does'nt exists
        return res.status(401).json({
          success : false,
          message : `User not registered! SignUp to continue`,
        });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    //if the entered password is incorrect
    if (!isPasswordCorrect)
    {
      return res.status(401).json({
        success : false,
        message : `Password is incorrect`,
      })
    }

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );

    res.status(200).json({ 
      success : true,
      message : `User Login Successful`,
      result: existingUser, 
      token : token, 
    });
  } catch (error) {
      console.log(error);
      return res.status(500).json({
        success : false,
        message : `Login failed Please Try Again`
      })
  }
};

export const signup = async (req, res) => {
  const { firstName, lastName, email, password , otp} = req.body;

  try {
    const existingUser = await proUser.findOne({ email });


    if(existingUser)
    {
      return res.status(400).json({
        success : false,
        message : `User already exists. Please sign in to continue`,
      })
    }

    const response = await userotp.find({ email }).sort({ createdAt: -1 }).limit(1);
    console.log(response);
    if(response.length === 0)
    {
      return res.status(400).json({
        success : false,
        message : `the OTP is not valid`,
      })
    }else if(otp !== response[0].otp)
    {
      //invalid OTP
      return res.status(400).json({
        success : false,
        message : `the OTP is not valid`,
      })
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await proUser.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });

    res.status(200).json({
      success : true,
      message : `User Sign Up sucesssful`,
      result : result,
      token : token,
    });
  } catch (error) {
    
    res.status(400).json({ 
      success : false,
      message : `Something went wrong..Try again later!`
    });
  }
};

export const sendotp = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    //check if user is already present
    const checkUserPresent = await proUser.findOne({email});
    if (checkUserPresent) {
      return res.status(401).json({
        success: false,
        message: `User already exists. Use different email!`,
      });
    }
    var otp = otpGenerator.generate(4, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    //check if the result is already in use
    const result = await userotp.findOne({ otp });
    //untill we get a non used otp keep generating
    while (result) {
      otp = otpGenerator.generate(4, {
        upperCaseAlphabets: false,
      });
    }

    //now we have the otp
    const otpBody = await userotp.create({
        email,
        otp
    });
    console.log("OTP BODY", otpBody);
    res.status(200).json({
      success: true,
      message: `OTP SENT SUCCESSFULLY B.E.`,
      otp,
      email
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({success : false,
      message : `Error Occured! Please try again..`
    })
  }
};
