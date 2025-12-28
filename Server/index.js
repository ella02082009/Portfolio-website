const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.log("MongoDB connection Error:",err));

// Message Schema
const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    content: String,
    date: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', messageSchema);

// Email Transporter Setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS // Use an App Password, not your regular password
    }
});

// Contact Route
app.post('/api/contact', async (req, res) => {
    const { name, email, content } = req.body;
    try {
        // 1. Save to Database
        const newMessage = new Message({ name, email, content });
        await newMessage.save();

        // 2. Send Email Notification
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: `New Portfolio Message from ${name}`,
            text: `You have a new message!\n\nFrom: ${name}\nEmail: ${email}\nMessage: ${content}`
        });

        res.status(200).json({ success: true, message: "Message sent!" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{console.log(`Server running on port ${PORT}`)});