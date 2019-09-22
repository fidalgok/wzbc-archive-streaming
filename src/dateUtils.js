import { subDays, format, getDate, getMonth, isToday } from 'date-fns';

export const formatDate = (date, string) => format(date, string);

export const formatStreams = () => {
  const today = new Date();
  const dates = Array.from({ length: 14 });
  const formattedStreams = dates.map((_, i) => {
    const currentDate = subDays(today, i);
    return {
      id: formatDate(currentDate, 'M-dd-yyyy'),
      streams: getDateStreams(currentDate),
    };
  });

  return formattedStreams;
};

export function formatAmPm(hour) {
  const hourAsNumber = parseFloat(hour);
  if (hour === '00') return '12 a.m.';
  if (parseFloat(hour) < 12) {
    return `${hour} a.m.`;
  }
  return `${hourAsNumber === 12 ? hourAsNumber : hourAsNumber - 12} p.m.`;
}

export function getPrevDays(numDays) {
  // returns a function that will give an array of dates starting from today
  // and going back the number of days specified in the functions argument
  return () => {
    const dates = [];
    for (let i = numDays; i >= 0; i--) {
      dates.push(subDays(new Date(), i));
    }
    return dates;
  };
}

function getDateStreams(date = new Date()) {
  // set the hours for the date
  if (isToday(date)) {
    date.setHours(new Date().getHours());
  } else {
    date.setHours(23);
  }

  const formattedDate = format(date, 'yyyy-MM-dd');
  const baseUrl = `http://zbconline.com/wzbc-${formattedDate}`;
  const currentHour = date.getHours();

  const streams = [];
  for (let i = 8; i <= currentHour; i++) {
    streams.push({
      dayOfWeek: formatDate(date, 'EEEEEE'),
      formattedDate: formatDate(date, 'MMM dd'),
      formattedTime: formatDate(date.setHours(i), 'h aa'),
      url: baseUrl.concat(
        i >= 10 ? `-${i}-00.mp3` : '-0'.concat(`${i}-00.mp3`)
      ),
    });
  }
  return streams;
}

export function fancyTimeFormat(seconds) {
  // Hours, minutes and seconds
  if (isNaN(seconds)) return '00:00';
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  // Output like "1:01" or "4:03:59" or "123:03:59"
  let ret = '';

  if (hrs > 0) {
    ret += `${hrs}:${mins < 10 ? '0' : ''}`;
  }

  ret += `${mins}:${secs < 10 ? '0' : ''}`;
  ret += `${secs}`;
  return ret;
}
