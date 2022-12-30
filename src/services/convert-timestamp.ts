const convertTimestamp = (timestamp: number): string => {
  let result = "";

  const date = new Date(timestamp);
  const month = date.getMonth() + 1;
  const hour = date.getHours();
  if (hour < 10) {
    result += `0${hour}:`;
  } else {
    result += `${hour}:`;
  }
  const minute = date.getMinutes();
  if (minute < 10) {
    result += `0${minute} `;
  }
  const day = date.getDate();
  if (day < 10) {
    result += `0${day}/`;
  } else {
    result += `${day}/`;
  }
  if (month < 10) {
    result += `0${month}`;
  } else {
    result += `${month}`;
  }

  return result;
};

export default convertTimestamp;
