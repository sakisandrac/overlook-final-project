const setMonth = (today) => {
  let month;

  if(today.getMonth() < 12) {
    month = today.getMonth() + 1;
  } else {
    month =  1;
  }

  if (today.getMonth().toString().length < 2) {
    month = `0${month}`;
  } 

  return month;
}

const setDay = (today) => {
  if (today.getDate().toString().length < 2) {
    return `0${today.getDate()}`;
  } else {
    return today.getDate().toString();
  }
}

const getDate = (today) => {
  let month = setMonth(today);
  let day = setDay(today);

  return `${today.getFullYear()}${month}${day}`;
}


export { setMonth, setDay, getDate }