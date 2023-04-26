const express = require('express');
const app = express();

const userActivities = [];

app.get('/', (req, res) => {
    try {
        const newUserActivity = {
            id: userActivities.length + 1,
            activityName: 'Run',
            description: 'Run with your Mom',
            startDateTime: new Date(Date.now()),
            finishDateTime: new Date(Date.now() + 3600000),
            activityType: 'Run',
            durationTime: '50 minutes',
            distance: '5 KM'
        };
        userActivities.push(newUserActivity);
        res.send(newUserActivity);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(8081, () => {
    console.log('Server listening on port 8081');
});