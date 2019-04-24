// install nodemailer , write "npm install nodemailer" in your terminal

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'sir@yahoo.com',
  subject: 'Sending Email using Node.js ',
  text: 'Dear Sir, A lot of the confusion for newcomers to Node is misunderstanding exactly what it is? An important thing to realize is that Node is not a webserver. By itself it doesn’t do anything. It doesn’t work like Apache. There is no config file where you point it to you HTML files. If you want it to be a HTTP server, you have to write an HTTP server (with the help of its built-in libraries). Node.js is just another way to execute code on your computer. It is simply a JavaScript runtime.Installing Node.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
