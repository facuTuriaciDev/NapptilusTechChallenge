const localStorageExpiration = ((hours) => {
  var hoursInMilliseconds = hours * 1000 * 60 * 60;
  var expirationTime = localStorage.getItem('expirationTime');
  var now = new Date().getTime();

  if (expirationTime === null) {
    localStorage.setItem('expirationTime', now)
  } else {
    if (now - expirationTime > hoursInMilliseconds) {
      localStorage.clear();
      localStorage.setItem('expirationTime', now);
    }
  }
})

export default localStorageExpiration;