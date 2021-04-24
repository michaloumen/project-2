const { MONTHS, WEEK_DAYS_STRING } = require('./constants.util')

module.exports = {
  transformDateToDateFormatAndWeekDay: (date) => {
    const arrayDate = date.split(',');
    const weekDay = WEEK_DAYS_STRING[`${arrayDate[0]}`];

    const dateWithouSpace = arrayDate[1].trim();
    const year = parseInt(dateWithouSpace.slice(-4));
    const day = parseInt(dateWithouSpace.slice(0, 2));
    const month = dateWithouSpace.replace(day, "").replace(year, "").trim();

    const monthShort = parseInt(month.replace(month, MONTHS[`${month}`]));

    return { weekDay, year, monthShort, day };
  },
};