define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.view.preShow = () => {
        if(!this.initDone){
          //data.values[this.reportKey].report_data = voltmx.store.getItem(`report_data_${this.reportKey}`) || data.values[this.reportKey].report_data;

          eventManager.subscribe(globals.EVENT_UPDATE_RECORD, ({reportKey, recordKey, sectionKey, fieldName, value}) => {
            if(this.reportKey === reportKey && !sectionKey && !recordKey && fieldName){
              data.values[reportKey].report_data[fieldName] = value;
              //voltmx.store.setItem(`report_data_${reportKey}`, data.values[reportKey].report_data);
            }
          });

          eventManager.subscribe(globals.EVENT_SAVE_SIGNATURE, ({reportKey}) => {
            if(reportKey === this.reportKey){
              this.view.cmpSignature.getSignatureAsync((base64) => {
                data.values[reportKey].report_data.signature = base64;
              //voltmx.store.setItem(`report_data_${reportKey}`, data.values[reportKey].report_data);
              });
            }
          });

          this.initDone = true;
        }

        this.loadData();
      };
    },

    loadData(){
      this.view.flxWidgets.removeAll();
      const reportData = data.values[this.reportKey].report_data;
      data.report_data.forEach((field) => {
        let widget = null;
        const widgetId = `widget${new Date().getTime()}`;
        switch(field.type){
          case 'text':
            widget = new com.hcl.voessing.TextWidget({
              id: widgetId
            },{},{});
            widget.text = reportData[field.id] + '';
            break;
          case 'date':
            widget = new com.hcl.voessing.DateWidget({
              id: widgetId
            },{},{});
            widget.date = reportData[field.id] + '';
            break;
          case 'signature':
            this.view.flxSignature.isVisible = true;
            try {
              this.view.cmpSignature.setSignature(reportData[field.id] || null);
            } catch(error) {
              voltmx.print(error);
            }
            break;
          default:
            break;
        }

        if(widget){
          widget.fieldName = field.id;
          widget.recordKey = "";
          widget.sectionKey = "";
          widget.reportKey = this.reportKey;
          const widgetWrapper = new com.hcl.voessing.WidgetWrapper({
            id: `widgetWrapper${new Date().getTime()}`
          },{},{});
          widgetWrapper.label = field.label;

          widget.initComponent();
          widgetWrapper.setWidget(widget);
          this.view.flxWidgets.add(widgetWrapper);
        }
      });
    },


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

