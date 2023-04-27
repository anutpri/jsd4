// import { express } from 'express'; //Need to input "type":"module" in package.json
const express = require('express');
const app = express();

const userActivities = [];

//Wlidcard stype
app.get('/:para', (req, res) => {
    const {para} = req.params;
    const activityData = userActivities.map(activity => `
    ID: ${activity.id}
    Activity Name: ${activity.activityName}
    Description: ${activity.description}
    Start Time: ${activity.startDateTime.toLocaleString()}
    Finish Time: ${activity.finishDateTime.toLocaleString()}
    Activity Type: ${activity.activityType}
    Duration: ${activity.durationTime}
    Distance: ${activity.distance}
`);
    try {if (para === 'Main'){
        
        res.send(`All Activity : ${activityData}`);

    } 

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/:para', (req, res) => {
    const {para} = req.params;
    try {if (para === 'Create'){
        const newUserActivity = {
            id: userActivities.length,
            activityName: 'Run',
            description: 'Run with your Mom',
            startDateTime: new Date(Date.now()),
            finishDateTime: new Date(Date.now() + 3600000),
            activityType: 'Run',
            durationTime: '50 minutes',
            distance: '5 KM'
    };
        userActivities.push(newUserActivity);
        res.send(`New Activity has been add ID:${newUserActivity.id}`);
    
    }

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.delete('/:para/:activityID', (req, res) => {
    const {para,activityID} = req.params;
    const activityIndex = userActivities.findIndex((activity) => activity.id == activityID);
    try {if (activityIndex){
        userActivities[activityIndex] = null;
        res.send(`Your Activity has been deleted`);
    };
       
        
        res.status(404),res.send('Activity not exist');
    }

    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

//Normol style
// app.get('/Delete', (req, res) => {
//     try {
        
//         res.send('This is Delete Page');
                 
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// app.get('/Edit', (req, res) => {
//     try {
//         res.send('This is Edit Page');
        
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// });

app.listen(8084, () => {
    console.log('Server listening on port 8084');
});