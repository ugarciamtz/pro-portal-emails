require('dotenv').config()

const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: process.env.MJ_HOST ? process.env.MJ_HOST : process.env.MT_HOST,
    port: process.env.MJ_PORT ? process.env.MJ_PORT : process.env.MT_PORT,
    auth: {
       user: process.env.MJ_USER ? process.env.MJ_USER : process.env.MT_USER,
       pass: process.env.MJ_PASS ? process.env.MJ_PASS : process.env.MT_PASS
    }
});

const message = ({ uCode, sendTo, adminFirstName, userFirstName, userLastName, companyName, country = 'US', language = 'en'}) => ({
    from: 'rezi-pro-qa@resideo.com',
    // to: '91349b97b3-e58db6@inbox.mailtrap.io',
    to: sendTo,
    subject: 'You have been Invited - Pro Portal', 
    html: `<html>
    <head>
      <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet">
      <style type="text/css">
        .ExternalClass,.ExternalClass div,.ExternalClass font,.ExternalClass p,.ExternalClass span,.ExternalClass td,img {line-height: 100%;}#outlook a {padding: 0;}.ExternalClass,.ReadMsgBody {width: 100%;}a,blockquote,body,li,p,table,td {-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;}table,td {mso-table-lspace: 0;mso-table-rspace: 0;}img {-ms-interpolation-mode: bicubic;border: 0;height: auto;outline: 0;text-decoration: none;}table {border-collapse: collapse !important;}#bodyCell,#bodyTable,body {height: 100% !important;margin: 0;padding: 0;font-family: Roboto, sans-serif;}#bodyCell {padding: 20px;}#bodyTable {width: 600px;}@media only screen and (max-width: 480px) {#bodyTable,body {width: 100% !important;}a,blockquote,body,li,p,table,td {-webkit-text-size-adjust: none !important;}body {min-width: 100% !important;}#bodyTable {max-width: 600px !important;}#signIn {max-width: 280px !important;}}
      </style>
    </head>
    <body>
      <center>
        <table
          style='width: 600px;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;margin: 0;padding: 0;font-family: "Roboto", sans-serif;border-collapse: collapse !important;height: 100% !important;'
          align="center"
          border="0"
          cellpadding="0"
          cellspacing="0"
          height="100%"
          width="100%"
          id="bodyTable"
        >
          <tr>
            <td
              align="center"
              valign="top"
              id="bodyCell"
              style='-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;margin: 0;padding: 20px;font-family: "Roboto", sans-serif;height: 100% !important;'
            >
              <div class="main" style="text-align: left;">
                <p
                  style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%; margin-bottom: 30px; background-color: #032A3B;"
                >
                  <svg height='30' viewBox='0 0 161.43 28.59' role='presentation' style="padding: 40px;">
                    <path
                      id='main' fill='#FFFFFF'
                      d='M101.24,6.16h-9.79l-2.42,2.42v11.51l2.42,2.42h9.79l2.42-2.45V8.61L101.24,6.16z M99.79,18.28
                      c0.01,0.45-0.34,0.82-0.79,0.84c-0.02,0-0.03,0-0.05,0h-5.22c-0.45,0.01-0.82-0.34-0.84-0.79c0-0.02,0-0.03,0-0.05v-7.9
                      c-0.01-0.45,0.34-0.82,0.79-0.84c0.02,0,0.03,0,0.05,0h5.22c0.45-0.01,0.82,0.34,0.84,0.79c0,0.02,0,0.03,0,0.05V18.28z
                      M82.49,18.79c-0.16,0.21-0.41,0.33-0.68,0.32h-5.6c-0.45,0.01-0.82-0.34-0.84-0.79c0-0.02,0-0.03,0-0.05V15.8h10.76V8.61
                      l-2.42-2.45h-9.79l-2.42,2.42v11.51l2.42,2.42h9.82l2.8-2.8l-2.51-2.45L82.49,18.79z M75.37,10.38c-0.01-0.45,0.34-0.82,0.79-0.84
                      c0.02,0,0.03,0,0.05,0h5.22c0.45-0.01,0.82,0.34,0.84,0.79c0,0.02,0,0.03,0,0.05v2.26h-6.89V10.38z M68.61,0h-3.99v6.16H56.4
                      l-2.42,2.42v11.51l2.42,2.42h9.79l2.42-2.45L68.61,0z M64.74,18.28c0.01,0.45-0.34,0.82-0.79,0.84c-0.02,0-0.03,0-0.05,0h-5.22
                      c-0.45,0.01-0.82-0.34-0.84-0.79c0-0.02,0-0.03,0-0.05v-7.9c-0.01-0.45,0.34-0.82,0.79-0.84c0.02,0,0.03,0,0.05,0h5.22
                      c0.45-0.01,0.82,0.34,0.84,0.79c0,0.02,0,0.03,0,0.05V18.28z M45.09,6.16h5.99V22.5h-3.87V10.28c0.05-0.36-0.21-0.7-0.58-0.74
                      c-0.05-0.01-0.11-0.01-0.16,0h-1.39V6.16z M47.16,3.8h3.99V0h-3.99V3.8z M33.89,9.54h5.03c0.26,0,0.51,0.11,0.68,0.32l1.35,1.35
                      l2.54-2.45l-2.61-2.61H31.7l-2.42,2.42v4.32c0,1.06,0.61,1.9,2.16,2.16l7.54,1.32c0.3,0.01,0.53,0.27,0.52,0.57c0,0,0,0.01,0,0.01
                      v1.32c0.01,0.45-0.34,0.82-0.79,0.84c-0.02,0-0.03,0-0.05,0h-4.93c-0.26,0-0.51-0.12-0.68-0.32l-1.55-1.48l-2.54,2.39l2.8,2.8h9.08
                      l2.41-2.42v-4.64c0-1.06-0.61-1.9-2.16-2.16l-7.54-1.32c-0.3-0.02-0.53-0.27-0.52-0.57c0,0,0-0.01,0-0.01v-1
                      c-0.01-0.45,0.34-0.82,0.79-0.84C33.85,9.54,33.87,9.54,33.89,9.54z M22.9,18.79c-0.16,0.21-0.41,0.33-0.68,0.32h-5.6
                      c-0.45,0.01-0.82-0.34-0.84-0.79c0-0.02,0-0.03,0-0.05V15.8h10.76V8.61l-2.41-2.45h-9.79l-2.42,2.42v11.51l2.42,2.42h9.82l2.8-2.8
                      l-2.51-2.45L22.9,18.79z M15.78,10.38c-0.01-0.45,0.34-0.82,0.79-0.84c0.02,0,0.03,0,0.05,0h5.22c0.45-0.01,0.82,0.34,0.84,0.79
                      c0,0.02,0,0.03,0,0.05v2.26h-6.89L15.78,10.38z M0,8.58V22.5h3.86V10.38C3.85,9.93,4.2,9.56,4.65,9.54c0.02,0,0.03,0,0.05,0h4.96
                      V6.16H2.42L0,8.58z M130.65,22.12c-1.41,0.61-2.95,0.88-4.48,0.77c-1.69,0.02-3.28-0.81-4.23-2.21v7.92h-2.63V6.15h2.4v2.31
                      c1.12-2.02,2.88-2.69,5.13-2.69c1.32-0.09,2.63,0.18,3.81,0.77c2.63,1.44,2.79,5.13,2.79,7.89
                      C133.43,17.98,132.79,20.93,130.65,22.12 M129.17,8.4c-0.94-0.45-1.97-0.65-3.01-0.58c-3.62,0-4.39,2.53-4.39,6.61
                      c0,3.43,0.96,6.41,4.39,6.41c1.04,0.08,2.08-0.13,3.01-0.61c1.54-0.99,1.7-3.27,1.7-5.8C130.87,11.7,130.58,9.33,129.17,8.4
                      M140.48,12.79v9.71h-2.6V6.15h2.37v3.43c0.77-2.35,3.01-3.91,5.48-3.82v2.4c-2.72-0.15-5.05,1.9-5.26,4.62 M158.64,22.08
                      c-2.7,1.07-5.7,1.07-8.39,0c-2.53-1.38-2.79-4.94-2.79-7.6c0-2.76,0.16-6.48,2.79-7.92c2.7-1.07,5.7-1.07,8.39,0
                      c2.63,1.44,2.79,5.16,2.79,7.92C161.43,17.14,161.17,20.7,158.64,22.08 M157.23,8.42c-1.77-0.81-3.8-0.81-5.57,0
                      c-1.35,0.87-1.63,3.3-1.63,6.06c0,2.79,0.32,4.91,1.63,5.74c1.77,0.81,3.8,0.81,5.57,0c1.41-0.9,1.63-3.05,1.63-5.74
                      C158.86,11.44,158.61,9.29,157.23,8.42' />
                  </svg>
                  <svg width="48px" height="80px" viewBox="0 0 48 80" style="float: right;padding-right: 40px;">
                    <g>
                        <g transform="translate(-888.000000, 0.000000)">
                            <g transform="translate(888.000000, 0.000000)">
                                <polygon id="Fill-1" fill="#014163" points="0 90 48 90 48 0 0 0"></polygon>
                                <polygon id="Fill-2" fill="#FFFFFF" points="12 45 12 68 24.0008352 68 24.0008352 56.5 36 56.5 36 45"></polygon>
                            </g>
                        </g>
                    </g>
                </svg>
                </p>
                <h1 style="color: #217EAE; margin: 16px 20px;">${ adminFirstName } invited you to ${ companyName }</h1>
  
                <p style="margin: 16px 20px;">${ userFirstName },</p>
                <p style="margin: 16px 20px;">Create your Resideo Pro Account by clicking on the button below.</p>
                <p style="margin: 16px 20px;">This email expires in ${ daysForExpiraion = 10 }</p>
               
                <br />  
                <p style="margin: 16px 20px;"><a style="background-color: #217EAE; padding: 15px 30px; color: #FFFFFF; text-decoration: none; font-weight:  bold; text-transform:  uppercase; margin-top: 20px; font-size: 14px; letter-spacing: 1px;" href="https://deploy-preview-1043--resideo-pro.netlify.com/sign-up?invite=${Buffer.from(`${uCode}|${sendTo}|${userFirstName}|${userLastName}|${companyName}|${country}|${language}`).toString('Base64')}">Create Account</a></p>
                <br />
  
                <hr style="border: 1px solid #EAEEF3; border-bottom: 0; margin: 20px 0;" />
                <p style="text-align: center;color: #A9B3BC;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%; font-size: 11px;">
                  &copy; 2019 Resideo Technologies, Inc.
                  <br/>
                  The Honeywell Home trademark is used under license from Honeywell International Inc.
                  <br /> <br />
                  This message was sent to {{ user.email }}. If you don't want to receive emails from Resideo in the future, you can 
                  <a href='https://corporate.resideo.com/privacy' target='_blank' style="color: #A9B3BC;">edit your profile</a> or 
                  <a href='https://corporate.resideo.com/privacy' target='_blank' style="color: #A9B3BC;">unsubscribe</a>.
                  <br /> <br />
                  <a href='#' target='_blank' style="font-weight: bold; text-decoration: none;color: #A9B3BC;">Terms of Use</a> | 
                  <a href='https://corporate.resideo.com/privacy' target='_blank' style="font-weight: bold; text-decoration: none;color: #A9B3BC;">Privacy Policy</a> | 
                  <a href='mailto:prowebsitesupport@resideo.com' target='_blank' style="font-weight: bold; text-decoration: none;color: #A9B3BC;">Contact Us</a>
                </p>
              </div>
            </td>
          </tr>
        </table>
      </center>
    </body>
  </html>` // Plain text body
});

exports.handler = (event, context, callback) => {

  if (event.httpMethod === 'GET') {

    callback(null,{
      statusCode: 200,
      body: `Transactional email service`
    })

  } else if (event.httpMethod === 'OPTIONS') {

    callback(null,{
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        'Access-Control-Allow-Headers': 'content-type'
      }
    })

  } else if (event.httpMethod === 'POST') {

    transport.sendMail(message(JSON.parse(event.body)), function(err, info) {
      if (err) {
          console.log(err)
      } else {
        console.log(info);

        callback(null, {
          statusCode: 200,
          headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: `Invite Email sent`,
        })
      }
    });
  }
}