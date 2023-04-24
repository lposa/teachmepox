import cors from "cors"
import express from 'express'
import {schedule} from "./database/scheduleService.js"
import nodemailer from "nodemailer"

const app = express();

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "teacherpox97@gmail.com",
        pass: "pkproleter97",
    },
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/schedule", (req, res) => {
    res.json(schedule);
});

app.put("/updateschedule:id", (req, res) => {
    const id = req.params.id;

    const { subject, name, email } = req.body;
    let booking = {
        subject: subject,
        name: name,
        email: email,
        available: false,
    };

    res.status(200).json(booking);

    if (booking) {
        schedule[id].name = booking.name;
        schedule[id].subject = booking.subject;
        schedule[id].email = booking.email;
        schedule[id].available = booking.available;
        console.log(schedule[id]);
    }

    transporter.sendMail({
            from: "teacherpox97@gmail.com",
            to: "posa.97@gmail.com",
            subject: "Class booking confirmation!",
            text: `Hello, ${booking.name}! 
    You successfully booked a class on ${schedule[id].date}, ${schedule[id].time}
    Choosen subject: ${schedule[id].subject},
    Thank you!`,
        },
        function(err, info) {
            if (err) console.log(err);
            else console.log(info);
        }
    );
});

app.post("/admin/addDates", (req, res) => {
    const { date, timeslot } = req.body;
    const id = Math.floor(Math.random() * 10000) + 1;
    const newSchedule = {
        id: id,
        timeslot: timeslot,
        available: true,
        date: date,
        name: "",
        email: "",
        subject: "",
    };
    schedule.push(newSchedule);
    res.status(200);
    console.log(schedule);
});

app.listen(process.env.PORT_NUMBER || 8000, (err) => {
    if (err) {
        console.log("Bad things", err);
        return;
    }
    console.log("Listening on port", 8000);
});