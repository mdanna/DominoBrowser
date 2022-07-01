define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {},

    initComponent(){
      this.view.txtWidget.text = this.view.txtWidget.text || '0';

      this.view.txtWidget.onEndEditing = () => {
        this.view.txtWidget.text = ('' + parseInt(this.view.txtWidget.text || '0')) || '0';
        this.publishUpdateEvent(this.view.txtWidget.text);
      };

      this.view.flxMinus.onClick = () => {
        if(parseInt(this.view.txtWidget.text || '0') > 0){
          this.view.txtWidget.text = '' + (parseInt(this.view.txtWidget.text) - 1);
          this.publishUpdateEvent(this.view.txtWidget.text);
        }
      };

      this.view.flxPlus.onClick = () => {
        this.view.txtWidget.text = '' + (parseInt(this.view.txtWidget.text || '0') + 1);
        this.publishUpdateEvent(this.view.txtWidget.text);
      };
    },

    publishUpdateEvent(value){
      eventManager.publish(globals.EVENT_UPDATE_RECORD, {
        reportKey: this.reportKey,
        sectionKey: this.sectionKey,
        recordKey: this.recordKey,
        fieldName: this.fieldName,
        value: value
      });
    },

    initGettersSetters: function() {
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
        }
  };
});