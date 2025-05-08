import express from "express";
import { createTransport } from "nodemailer";
import { json } from "body-parser";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(json());

// Nodemailer API
app.post("/api/sendEmail", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = createTransport({
    service: "gmail",
    auth: {
      user: "premsaiteja58@gmail.com", // Your email
      pass: "prem.123", // Your email password
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`, // Sender's name and email
      to: "premsaiteja58@gmail.com", // Your email
      subject: `New Contact Form Submission from ${name}`,
      text: `You have received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h3>You have received a new message:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Message sent:", info.messageId);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});