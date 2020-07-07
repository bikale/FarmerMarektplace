const nodemailer = require("nodemailer");

exports.sendmail = async () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",

    secure: false, // true for 465, false for other ports
    auth: {
      user: "", // email username
      pass: "", // email password
    },
  });

  const mailOptions = {
    from: '"Farmer Market" <bikaleaberra@gmail.com>', // sender address
    to: "bikale12@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  };
  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);
  console.log("Message sent: %s", info.messageId);
};
