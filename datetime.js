const randoitCore = require('./core');

const dayOfWeekNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const monthOfYearsNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const dayOfWeek = () => {
    var result = new Date();
    result.setDate(result.getDate() + randoitCore.numberRange(1, 7));
    return dayOfWeekNames[result.getDay()];
};

const monthOfYear = () => {
    var result = new Date();
    result.setDate(result.getDate() + randoitCore.numberRange(1, 12) * 30);
    return monthOfYearsNames[result.getMonth()];
};

module.exports = {
    dayOfWeek: dayOfWeek,
    monthOfYear: monthOfYear,
};
