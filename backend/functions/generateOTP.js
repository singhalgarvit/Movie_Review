const otpGenerator = require('otp-generator')

const OTP=()=>{
   return otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false,lowerCaseAlphabets:false });
}

module.exports=OTP