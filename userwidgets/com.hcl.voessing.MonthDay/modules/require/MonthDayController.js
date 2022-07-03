define(function() {

  return {
    constructor(baseConfig, layoutConfig, pspConfig) {
      this.view.preShow = () => {
        if(!this.initDone){
          this.view.flxMonthDay.onClick = () => this.onSelect();
          this.initDone = true;
        }
      };
    },

    initGettersSetters() {},
    
    onSelect(){}
  };
});