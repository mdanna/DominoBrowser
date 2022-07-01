define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {},

    initComponent(){
      const v = this.view;
      
      this.view.onClick = () => {
        v.lblUp.isVisible = !v.lblUp.isVisible;
        v.lblDown.isVisible = !v.lblDown.isVisible;
        eventManager.publish(globals.EVENT_DROPDOWN_SHOW_LIST, {
          reportKey: this.reportKey,
          widgetId: v.id,
          options: this.options ? this.options.data || [] : [],
          selection: this.selection
        });

      };

      eventManager.subscribe(globals.EVENT_DROPDOWN_SELECTION, ({widgetId, selection}) => {
        if(widgetId === v.id){
          v.lblUp.isVisible = !v.lblUp.isVisible;
          v.lblDown.isVisible = !v.lblDown.isVisible;
          if(selection){
            this.selection = selection;
            eventManager.publish(globals.EVENT_UPDATE_RECORD, {
              reportKey: this.reportKey,
              recordKey: this.recordKey,
              sectionKey: this.sectionKey,
              fieldName: this.fieldName,
              value: selection
            });
          }
        }                    
      });
      this.setDisplayValue(this.selection);
      this.initDone = true;
    },

    initGettersSetters: function() {
            defineGetter(this, 'selection', () => {
                return this._selection;
            });
            defineSetter(this, 'selection', value => {
                this._selection = value;
                this.initDone && this.setDisplayValue(value);
            });
            defineGetter(this, 'options', () => {
                return this._options;
            });
            defineSetter(this, 'options', value => {
                this._options = value || { data: [] };
            });
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
        },

    setDisplayValue(value){
      const found = this.options.data.find((record) => record.value === value);
      this.view.lblDropdown.text = found ? found.display : "";
    }
  };
});