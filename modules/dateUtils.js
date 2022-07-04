const dateUtils = {
    MILLISEC_PER_DAY: 24 * 60 * 60 * 1000,

    getFirstMonday(year){
        const oneJan = new Date(year, 0, 1);
        const oneJanDay = oneJan.getDay();
        const dayToFirstMonaday = (8 - oneJanDay) % 7;
        return new Date(year, 0, 1 + dayToFirstMonaday);
    },

    getDateInfo(year, month, day){
        const inputDate = new Date(year, month - 1, day);
        const dayOfWeek = inputDate.getDay() || 7;
        const dayToNextMonday = (8 - dayOfWeek) % 7;    
        const dayFromPrevMonday = (7 - dayToNextMonday) % 7;
        const prevMonday = new Date(inputDate.valueOf() - (dayFromPrevMonday * dateUtils.MILLISEC_PER_DAY));
      
        const firstMonday = dateUtils.getFirstMonday(year);
        var numberOfDays = parseInt(Math.floor((prevMonday - firstMonday) / dateUtils.MILLISEC_PER_DAY));
      
        var weekNumber = inputDate >= firstMonday ? Math.ceil((dayOfWeek + 1 + numberOfDays) / 7) : 0;

        return {
            date: `${day}/${month}/${year}`,
            dayOfWeek,
            weekNumber,
            weekDays: dateUtils.getWeekDays(year, weekNumber)
        };
    },

    getWeekDays(year, weekNumber) {
        if(weekNumber > 0){
            const weekDays = [];
            const firstMonday = dateUtils.getFirstMonday(year);
            const mondayOfWeek = new Date(firstMonday.valueOf() + (7 * (weekNumber - 1) * dateUtils.MILLISEC_PER_DAY));

            for(let i = 0; i < 7; i++){
                let dayOfWeek = new Date(mondayOfWeek.valueOf() + (i * dateUtils.MILLISEC_PER_DAY));
                weekDays.push({
                    year: dayOfWeek.getFullYear(),
                    month: dayOfWeek.getMonth() + 1,
                    day: dayOfWeek.getDate(),
                    dayOfWeek: dayOfWeek.getDay()
                });
            }

            return weekDays;
        } else {
            return dateUtils.getWeekDays(year - 1, 52);
        }
    },
  
  getWeekDay(weekDay){
    let ret;
    switch(weekDay){
      case 1:
        ret = 'Monday';
        break;
       case 2:
        ret = 'Tuesday';
        break;
       case 3:
        ret = 'Wednesday';
        break;
       case 4:
        ret = 'Thursday';
        break;
       case 5:
        ret = 'Friday';
        break;
       case 6:
        ret = 'Saturday';
        break;
      default:
        ret = 'Sunday';
        break;
    }
    return ret;
  },
  
    getMonth(month){
    let ret;
    switch(month){
      case 1:
        ret = 'January';
        break;
       case 2:
        ret = 'February';
        break;
       case 3:
        ret = 'March';
        break;
       case 4:
        ret = 'April';
        break;
       case 5:
        ret = 'May';
        break;
       case 6:
        ret = 'June';
        break;
      case 7:
        ret = 'July';
        break;
       case 8:
        ret = 'August';
        break;
       case 9:
        ret = 'September';
        break;
       case 10:
        ret = 'October';
        break;
       case 11:
        ret = 'November';
        break;
      default:
        ret = 'December';
        break;
    }
    return ret;
  }
};

