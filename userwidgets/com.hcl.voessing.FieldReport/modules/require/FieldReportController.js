define(function() {

  return {
    constructor(baseConfig, layoutConfig, pspConfig) {},

    initComponent(){
		this.view.flxFieldReportDetails.onClick = () => this.onClickReport(this.reportKey);
    },
    
    initGettersSetters() {},
    
    onClickReport(){},
  };
});