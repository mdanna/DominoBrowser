define(function() {

  return {
    constructor(baseConfig, layoutConfig, pspConfig) {},
    
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
            defineGetter(this, 'reportKey', () => {
                return this._reportKey;
            });
            defineSetter(this, 'reportKey', value => {
                this._reportKey = value;
            });
        },
    
    initComponent(){
      const v = this.view;
      
      this.view.flxDeletePhoto.onClick = () => {
        eventManager.publish(globals.EVENT_DELETE_PHOTO, {
          id: v.id,
          recordKey: this.recordKey,
          sectionKey: this.sectionKey,
          reportKey: this.reportKey
        });
      };
      
      this.view.flxPhotoContainer.onClick = () => {
        new voltmx.mvc.Navigation('frmPhotoDetails').navigate({
          id: v.id,
          recordKey: this.recordKey,
          sectionKey: this.sectionKey,
          reportKey: this.reportKey
        });
      };
    },

    setPhoto(base64){
      this.view.imgPhoto.base64 = base64;
    }
  };
});