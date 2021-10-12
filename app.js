require('dotenv').config()
var Watcher  = require('feed-watcher'),
feed = 'https://www.upwork.com/ab/feed/topics/atom?securityToken=057ad2ed4c4744af4694e886152da017ee4b3aed1c53fef1b8a1fbf07cd2a598911e3d71215a67e6ae529dfc3538b39a21dfde885afeeb4c99e96f365c2b79e1&userUid=1434228128106266624&orgUid=1434228128106266625'
interval = 10 // seconds

// if not interval is passed, 60s would be set as default interval.
var watcher = new Watcher(feed, interval)

// Check for new entries every n seconds.
watcher.on('new entries', function (entries) {
entries.forEach(function (entry) {
console.log(entry)
let titled = entry.title
let descriptioned = entry.description
console.log(titled)
console.log(descriptioned)


const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// These id's and secrets should come from .env file.
const CLIENT_ID = process.env.CLIENT_ID;
const CLEINT_SECRET = process.env.CLEINT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const accessToken = process.env.accessToken;
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'adegbamiyestephen2018@gmail.com',
        clientId: CLIENT_ID
        ,
        clientSecret: CLEINT_SECRET
        ,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: 'adegbamiyestephen2018@gmail.com',
      to: 'stephengbenga6000@gmail.com',
      subject: titled,
      text: 'hey',
      html: descriptioned,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

sendMail()
  .then((result) => console.log('Email sent...', result))
  .catch((error) => console.log(error.message));

})
})

// Start watching the feed.
watcher
.start()
.then(function (entries) {
console.log(entries)
})
.catch(function(error) {
console.error(error)
})

// Stop watching the feed.
watcher.stop()
var express=require('express');
var app=express();
app.get('/',function(req,res)
{
res.send("Upwork Rss Feed to Steve Gmail")
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
});
