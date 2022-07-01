define(function() {

  return {
    constructor(baseConfig, layoutConfig, pspConfig) {
      this.view.preShow = () => {
        if(!this.initDone){
          this.init();
          this.initDone = true;
        }
      };
    },

    initGettersSetters() {},

    init(){
      this.view.flxLeft.isVisible = !!this.view.lblLeft.text;
      this.view.flxRight.isVisible = !!this.view.lblRight.text;
    }
  };
});