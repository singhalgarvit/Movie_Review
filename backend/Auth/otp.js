const nodemailer=require('nodemailer')
require('dotenv').config()

var transporter = nodemailer.createTransport({
    service: 'gmail',
    secure:true,
    port:465,
    auth: {
      user: process.env.sending_Mail,
      pass: process.env.Mail_pass
    }
  });


  
const sendOTP=(name,email,otp)=>{   //function to implement OTP send Logic
    
  var mailOptions = {
    from: process.env.sending_Mail,
    to: email,
    subject: `Verify Your Email`,
    html: `Hi, ${name}<br>Your One Time Password is <br><b><h1>${otp}</h1></b><br>Please do not share it. `
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports=sendOTP