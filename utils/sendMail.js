const nodemailer = require("nodemailer");

exports.sendmail = async (
  customeremail,
  farmeremail,
  ordernumber,
  pickupaddress
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAILADDRESS,
      pass: process.env.EMAILPASSWORD, // email password
    },
  });

  if (farmeremail) {
    // if there is email for farmer the email will be for placing order n we have to send to farmer n customer
    const mailOptionsForCustomer = {
      from: `"Farmer Market" <${process.env.EMAILADDRESS}>`,
      to: customeremail,
      subject: "Order Placed",
      text: "Order placed succesfully",
      html: `<b>Order ${ordernumber}  succesfully placed</b> </br> it would be prepred for pick up you will get notified when the order is ready</br><p>Thank you shopping with us</p>`,
    };
    const mailOptionsForFarmer = {
      from: `"Farmer Market" <${process.env.EMAILADDRESS}>`,
      to: farmeremail,
      subject: "Order Placed",
      text: "Order Placed",
      html: `<b>Order ${ordernumber}  succesfully placed</b> <p>please responed the check the customer order</p><p>Thank you for using our service</p>`,
    };
    // send mail with defined transport object
    await transporter.sendMail(mailOptionsForCustomer);
    await transporter.sendMail(mailOptionsForFarmer);
  } else {
    // sending to the customer the order is ready message
    const mailOptionsForCustomer = {
      from: `"Farmer Market" <${process.env.EMAILADDRESS}>`,
      to: customeremail,
      subject: "Order Ready",
      text: "Your order is ready",
      html: `<b>Your order ${ordernumber}  is ready for pick up</b> </br> you can pick up your order at ${pickupaddress}</br><p>Thank you shopping with us</p>`,
    };
    // send mail with defined transport object
    const info = await transporter.sendMail(mailOptionsForCustomer);
  }

  return;
};

exports.forgetPasswordEmail = async (useremail, resetLink) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAILADDRESS,
      pass: process.env.EMAILPASSWORD, // email password
    },
  });

  // if there is email for farmer the email will be for placing order n we have to send to farmer n customer
  const resetLinkEmail = {
    from: `"Farmer Market" <${process.env.EMAILADDRESS}>`,
    to: useremail,
    subject: "Reset password Link",
    text: "Reset Your password",
    html: `<strong>Reset password</strong> </br> <p>
        <hr/>
      You are receiving this email because you (or someone else) has requested to reset  a password.
                  to reset your password password click this link  </br>
                  <strong>  <a href=${resetLink}>${resetLink}</a></strong>
      
      </p><p>Thank You For using our service </p>`,
  };

  // send mail with defined transport object
  await transporter.sendMail(resetLinkEmail);

  return;
};
