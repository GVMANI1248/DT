const {Queue} = require('bullmq')

const notificationQueue = new Queue('email-queue');

async function init() {
    const res = await notificationQueue.add("email to gvm",
        {
            email: "gudipudivenkatamani116@gmail.com",
            subject: "Welcome Message",
            body: "Hey GVM, Welcome",
        })
        console.log("Job added to queue",res.id)
}

init();