import mongoose from 'mongoose';
import mailSender from '../utils/mailSender.js';
import emailTemplate from '../mail/emailVerificationTemplate.js';

const OTPSchema = new mongoose.Schema({
    email: {
		type: String,
		// required: true,
	},
	otp: {
		type: String,
		// required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
	},

})

async function sendVerificationEmail(email, otp) {
    try{
        const mailResponse = await mailSender(
            email,
            "Verification Email",
            emailTemplate(otp)
        );
        console.log("Email sent Successfully", mailResponse);

    }
    catch(error){
        console.log("Error occured while sending verification email!", error);
        throw error;
    }
}

//defining a middleware before saving the document to mongoDB
OTPSchema.pre("save", async function (next) {
	console.log("New document saved to database");

	// Only send an email when a new document is created
	if (this.isNew) {
		await sendVerificationEmail(this.email, this.otp);
	}
	next();
});

const userotp = mongoose.model("userotp", OTPSchema);

export default userotp;