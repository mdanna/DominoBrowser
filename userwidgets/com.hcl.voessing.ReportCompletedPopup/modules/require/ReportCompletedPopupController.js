define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.view.preShow = () => {
        if(!this.initDone){
          
          this.view.flxBackground.onClick = () => {
            this.view.isVisible = false;
          };

          this.view.buttonViewReport.onButtonClick =  () => {
            this.view.isVisible = false;
            new voltmx.mvc.Navigation('frmReport').navigate({reportKey: this.reportKey});
          };
          
          this.view.buttonDismiss.onButtonClick =  () => {
            this.view.isVisible = false;
            new voltmx.mvc.Navigation('frmReportList').navigate({reportKey: this.reportKey});
          };
          
          this.initDone = true;
        }
      };
    },

    initGettersSetters() {
      defineGetter(this, 'reportKey', () => {
        return this._reportKey;
      });
      defineSetter(this, 'reportKey', value => {
        this._reportKey = value;
      });
    }
  };
});