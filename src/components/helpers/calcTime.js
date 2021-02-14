const calcTime = (time) => {
    const date = new Date();
    const localTime = time + -date.getTimezoneOffset();

    const hours = (localTime / 60);
    let rhours = Math.floor(hours);
    const minutes = Math.round((hours - rhours) * 60);
    let rminutes = Math.round(minutes);

    if (rhours > 23) {
      rhours -= 24;
    }
    if (rhours.toString().length < 2) {
      rhours = '0' + rhours;
    }
    if (rminutes.toString().length < 2) {
      rminutes < 19 ?
      rminutes = '0' + rminutes :
      rminutes = rminutes + '0'
    }

    return rhours + ':' + rminutes;
};

export default calcTime;