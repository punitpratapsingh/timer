const moment = require('moment');
const cron = require('cron').CronJob;

const endTime = moment().hours(18).minutes(5);

new cron('* * * * * *', () =>{ 
    console.log(endTime.fromNow());
}, null, true, 'America/Los_Angeles');