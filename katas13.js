/*
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, 
and returns a new human readable date that looks like December 2nd, 2017.
*/

const getMonthName = (month) => {
  const monthName ={
    01: 'January', 02: 'February', 03: 'March',
    04: 'April', 05: 'May', 06: 'June',
    07: 'July', 08: 'August', 09: 'September',
    10: 'October', 11: 'November', 12: 'December'
  };
  return monthName[month];
}

const getDay = (day) => {
  switch(day){
    case '01': 
      day = '1st';
      break;
    case '02': 
      day = '2nd';
      break;
    case '03': 
      day = '3rd';
      break;    
    case '11': case '21': case '31':
      day += 'st';
      break;
    case '12': case '22':
      day += 'nd';
      break;
    case '13': case '23':
      day += 'rd';      
      break;
    default:
      day += 'th';
      break;
  }
  return day;
}

const talkingCalendar = function(date) {
  const dateSplit = date.split('/');
  const year = dateSplit[0];
  const month = dateSplit[1];
  const day = dateSplit[2];

  return `${getMonthName(month)} ${getDay(day)}, ${year}`;
}

console.log(talkingCalendar("2017/12/03"));
