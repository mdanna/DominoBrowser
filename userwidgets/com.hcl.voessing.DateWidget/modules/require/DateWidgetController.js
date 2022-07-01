define(function() {

  return {
    constructor(baseConfig, layoutConfig, pspConfig) {},

    initComponent(){
      this.view.calWidget.onSelection = () => {
        eventManager.publish(globals.EVENT_UPDATE_RECORD, {
          reportKey: this.reportKey,
          recordKey: this.recordKey,
          sectionKey: this.sectionKey,
          fieldName: this.fieldName,
          value: this.date
        });
      };
    },

    initGettersSetters() {
            defineGetter(this, 'recordKey', () => {
                return this._recordKey;
            });
            defineSetter(this, 'recordKey', value => {
                this._recordKey = value;
            });
            defineGetter(this, 'sectionKey', () => {
                return this._sectionKey;
            });
            defineSetter(this, 'sectionKey', value => {
                this._sectionKey = value;
            });
            defineGetter(this, 'fieldName', () => {
                return this._fieldName;
            });
            defineSetter(this, 'fieldName', value => {
                this._fieldName = value;
            });
            defineGetter(this, 'reportKey', () => {
                return this._reportKey;
            });
            defineSetter(this, 'reportKey', value => {
                this._reportKey = value;
            });
            defineGetter(this, 'date', () => {
              const dateComponents = this.view.calWidget.dateComponents;
              return dateComponents ? `${utils.formatDateComponent(dateComponents[0])}/${utils.formatDateComponent(dateComponents[1])}/${dateComponents[2]}` : "";
            });
            defineSetter(this, 'date', value => {
              this._date = value;
              if(value){
                this.view.calWidget.dateComponents = this.view.calWidget.dateComponents || [0,0,0,0,0,0];
                const valueComponents = value.split('/');
                this.view.calWidget.dateComponents = [parseInt(valueComponents[0]), parseInt(valueComponents[1]), parseInt(valueComponents[2]),0,0,0];
              } 
            });
        }
  };
});