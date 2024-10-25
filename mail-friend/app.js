const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "valerie.boyle38@ethereal.email",
    pass: "jdUZyfmqkS5dEtgumK",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Valerie Boyle" <valerie.boyle38@ethereal.email>', // sender address
    to: "dassubbulakshmi@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world? Sending this mail from the node mailer", // plain text body
    html: "<b>Hello world? Sending this mail from the node mailer</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);