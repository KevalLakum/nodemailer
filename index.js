
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
app.use(express.json());
const transporter = nodemailer.createTransport({
service:"gmail",
auth:{
    user:"lakumkeval2004@gmail.com",
    pass:"cpqw qeaj bdix wfny    "
}
})

let Otp = Math.floor(Math.random()*10000);

    
app.post('/',(req,res) => {

    const mailOptions ={
        from:"lakumkeval2004@gmail.com",
        to:"kevallakum28@gmail.com",
        subject:req.body.subject,
        html:`<h1>otp${Otp}</h1>`
    };
    transporter.sendMail(mailOptions,(err,info) => {
        if(err) {
            console.log(err);
        }else{
            console.log(info);
        }
    });
    res.send("sending")
}
)



app.get("/:otp", (req, res) => {
    let {otp} = req.params;
    if (Otp == otp){
        res.send("otp match");
    }else{
        res.send("otp not match");
    }

})


app.listen(6060,()=>{
    console.log("listening on port 6060");
})