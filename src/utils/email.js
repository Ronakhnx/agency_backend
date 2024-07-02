import nodemailer from "nodemailer";

export const mailService = (data) => {
  let mailTransporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let mailDetails = {
    from: process.env.EMAIL_USER,
    to: data.to,
    subject: data.subject,
    html: `<!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
              </head>
                 <body>
                <h1>Hi, we got your message for inqury </h1>
                </body>
            </html>`,
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error Occurs", err.message);
    } else {
      console.log("Email sent successfully");
    }
  });
};
export const mailServiceToGrapha = (data) => {
    let mailTransporter = nodemailer.createTransport({
      service:"gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  
    let mailDetails = {
      from: process.env.EMAIL_USER,
      to: data.to,
      subject: data.subject,
      html: `<!DOCTYPE html>
              <html lang="en">
                <head>
                  <meta charset="UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                </head>
                   <body>
                   <h1>${data.title}</h1>
                  <h1>Hi, we received new inquiry for Grapha from ${data.name} of ${data.country} </h1>
                   <h5>${data.email}</h5><br />
                    <h5>${data.mobileNo}</h5><br />
                  <h5>${data.message}</h5><br />
                  </body>
              </html>`,
    };
  
    mailTransporter.sendMail(mailDetails, function (err, data) {
      if (err) {
        console.log("Error Occurs", err.message);
      } else {
        console.log("Email sent successfully");
      }
    });
  };
