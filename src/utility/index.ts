import twilio, { Twilio } from "twilio";

export const sendOTP = async (phone: string, message: string) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client: Twilio = twilio(accountSid, authToken);
  await client.messages
    .create({
      body: message,
      from: process.env.TWILIO_PHONE,
      to: phone,
    })
    .then((message) => console.log(message.sid))
    .catch((err) => {
      console.log(err);
    });
};
