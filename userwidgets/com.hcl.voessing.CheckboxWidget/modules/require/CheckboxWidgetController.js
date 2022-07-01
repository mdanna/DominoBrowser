define(function() {

	return {
		constructor(baseConfig, layoutConfig, pspConfig) {},
      
        initComponent(){
          this.view.onClick = () => {
            this.view.flxCheck.isVisible = !this.view.flxCheck.isVisible;
            eventManager.publish(globals.EVENT_UPDATE_RECORD, {
              reportKey: this.reportKey,
              recordKey: this.recordKey,
              sectionKey: this.sectionKey,
              fieldName: this.fieldName,
              value: this.view.flxCheck.isVisible
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
        }
	};
});