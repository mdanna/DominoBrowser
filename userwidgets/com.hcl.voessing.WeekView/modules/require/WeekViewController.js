define(function() {

  return {
    weekNumber: null,
    year: null,

    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.view.preShow = () => {
        if(!this.initDone){
          this.initMonthDayButtons();
          this.initTodayButton();
          this.initFlxArrowLeft();
          this.initFlxArrowRight();
          this.initDone = true;
        }
      };
    },

    initMonthDayButtons(){
      for(let i = 1; i <= 7; i++){
        this.view[`monthDay${i}`].onClick = () => {
          this.focusDate = `${this.view[`monthDay${i}`].day}/${this.view[`monthDay${i}`].month}/${this.view[`monthDay${i}`].year}`;
        };
      }

    },

    initTodayButton() {
      this.view.buttonToday.onButtonClick = () => {
        const today = new Date();
        this.focusDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
      };
    },

    initFlxArrowLeft() {
      this.view.flxArrowLeft.onClick = () => {
        this.year = this.weekNumber ? this.year : this.year - 1;
        this.weekNumber = this.weekNumber ? this.weekNumber - 1 : 51; //week 0 = week 52 of previous year
        const dateInfoPrevMonday = dateUtils.getWeekDays(this.year, this.weekNumber)[0]; 
        this.focusDate = `${dateInfoPrevMonday.day}/${dateInfoPrevMonday.month}/${dateInfoPrevMonday.year}`;
      };
    },

    initFlxArrowRight() {
      this.view.flxArrowRight.onClick = () => {
        this.year = this.weekNumber === 52 ? this.year + 1: this.year;
        this.weekNumber = this.weekNumber === 52 ? 1 : this.weekNumber + 1; //week 0 = week 52 of previous year
        const dateInfoNextMonday = dateUtils.getWeekDays(this.year, this.weekNumber)[0]; 
        this.focusDate = `${dateInfoNextMonday.day}/${dateInfoNextMonday.month}/${dateInfoNextMonday.year}`;
      };
    },

    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineGetter(this, 'focusDate', () => {
        return this._focusDate;
      });

      defineSetter(this, 'focusDate', value => {
        if(value){
          this._focusDate = value;
        } else {
          const today = new Date();
          this._focusDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
        }
        const dateComponents = this._focusDate.split('/');
        const {weekNumber, weekDays} = dateUtils.getDateInfo(dateComponents[2], dateComponents[1], dateComponents[0]);
        this.weekNumber = weekNumber;
        this.year = dateComponents[2];

        this.view.lblDay.text = dateComponents[0];
        this.view.lblWeekday.text = dateUtils.getWeekDay(new Date(dateComponents[2], dateComponents[1] - 1, dateComponents[0]).getDay()).substring(0, 3);
        this.view.lblMonthYear.text = `${dateUtils.getMonth(parseInt(dateComponents[1]))} ${dateComponents[2]}`;

        for(let i = 0; i < 7; i++){
          const monthDay = this.view[`monthDay${i + 1}`];
          monthDay.weekDay = dateUtils.getWeekDay(weekDays[i].dayOfWeek).substring(0, 1);
          monthDay.day = weekDays[i].day + '';
          monthDay.month = weekDays[i].month;
          monthDay.year = weekDays[i].year;

          if(monthDay.day === dateComponents[0]){
            monthDay.skinDay = 'sknLblWhite80';
            monthDay.skinWeekday = 'sknLblWhite80'; 
            monthDay.skinMonthDay = 'sknFlxButtonBlue';
          } else {
            monthDay.skinDay = 'sknLblGrey80';
            monthDay.skinWeekday = 'sknLblGrey80'; 
            monthDay.skinMonthDay = 'sknFlxWhite';
          }
        }
        
        this.onDaySelect({
          day: dateComponents[0],
          month: dateComponents[1],
          year: dateComponents[2],
        });
      });
    },
    
    onDaySelect(){}
  };
});