import nodemailer from 'nodemailer';

const mailSender = async (email, title, body) => {
    try{
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port : 587,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD,
            }
        });

        const info = await transporter.sendMail({
            from : 'Prep-Net Verification',
            to : `${email}`,
            subject : `${title}`,
            html : `${body}`,
        })


        console.log("Info is here", info);
        return info
    }
    catch(error)
    {
        console.log(error);
    }
}


export default mailSender;