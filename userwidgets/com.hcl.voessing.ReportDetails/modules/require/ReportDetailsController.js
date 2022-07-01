define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.view.preShow = () => {
        this.view.cmpSimpleHeader.title = `Field Report ${this.reportKey}`;
        this.view.cmpSimpleHeader.subtitle = `Project ${globals.getProject(this.reportKey)}`;
        
        this.view.cmpAccordeon.reportKey = this.reportKey;
        this.view.cmpReportData.reportKey = this.reportKey;
        this.view.cmpReportCompletedPopup.reportKey = this.reportKey;
        this.view.buttonComplete.isVisible = data.values[this.reportKey].report_data.status !== 'Complete';
        if(!this.initDone){
          this.view.cmpSimpleHeader.doLayout = () => {
            this.view.flxScroll.height = `${this.view.frame.height - 100}dp`;
          };
          
          this.view.cmpSimpleHeader.onClickLeft = () => {
            new voltmx.mvc.Navigation('frmReport').navigate({reportKey: this.reportKey});
          };
          
          this.view.cmpAccordeon.reportKey = this.reportKey;
          this.view.cmpReportData.reportKey = this.reportKey;

          eventManager.subscribe(globals.EVENT_DROPDOWN_SHOW_LIST, ({reportKey, widgetId, options, selection}) => {
            if(this.reportKey === reportKey && widgetId){
              this.view.cmpDropdownSelector.selection = selection;
              this.view.cmpDropdownSelector.widgetId = widgetId;
              this.view.cmpDropdownSelector.options = this.view.cmpDropdownSelector.options || {};
              this.view.cmpDropdownSelector.options.data = options;
              this.view.cmpDropdownSelector.loadData();
              this.view.cmpDropdownSelector.isVisible = true;
            }
          });
          
          this.view.buttonComplete.onButtonClick = () => {
            eventManager.publish(globals.EVENT_SAVE_SIGNATURE, {reportKey: this.reportKey});
            data.values[this.reportKey].report_data.status = 'Complete';
            this.view.cmpReportCompletedPopup.isVisible = true;
          };
          
          this.view.buttonReport.onButtonClick = () => new voltmx.mvc.Navigation('frmReportPdf').navigate({reportKey: this.reportKey});

          this.initDone = true;
        }
      };

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineGetter(this, 'reportKey', () => {
        return this._reportKey;
      });
      defineSetter(this, 'reportKey', value => {
        this._reportKey = value;
      });
    }
  };
});