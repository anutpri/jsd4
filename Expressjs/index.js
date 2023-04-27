// import { express } from 'express'; //Need to input "type":"module" in package.json
const express = require('express');
const app = express();

// const userActivities = [];

//Wlidcard stype
app.get('/:para', (req, res) => {
    const {para} = req.params;
    try {if (para === 'Main'){
        res.send('This is Main Page');

    } else if (para === 'Create'){
    //     const newUserActivity = {
    //         id: userActivities.length + 1,
    //         activityName: 'Run',
    //         description: 'Run with your Mom',
    //         startDateTime: new Date(Date.now()),
    //         finishDateTime: new Date(Date.now() + 3600000),
    //         activityType: 'Run',
    //         durationTime: '50 minutes',
    //         distance: '5 KM'
    // };
    //     userActivities.push(newUserActivity);
    //     res.send(newUserActivity);
    res.send('This is Create Page');
    }

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

//Normol style
// app.get('/Main', (req, res) => {
//     try {
        
//         res.send('This is Main Page');
                 
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// app.get('/Create', (req, res) => {
//     try {
//         const newUserActivity = {
//             id: userActivities.length + 1,
//             activityName: 'Run',
//             description: 'Run with your Mom',
//             startDateTime: new Date(Date.now()),
//             finishDateTime: new Date(Date.now() + 3600000),
//             activityType: 'Run',
//             durationTime: '50 minutes',
//             distance: '5 KM'
//         };
//         userActivities.push(newUserActivity);
//         res.send(newUserActivity);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// });

app.listen(8082, () => {
    console.log('Server listening on port 8082');
});