define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {},

    initComponent(){
      const v = this.view;
      
      this.view.flxExpandCollapse.onClick = () => {
        v.lblTopUp.isVisible = !v.lblTopUp.isVisible;
        v.lblTopDown.isVisible = !v.lblTopDown.isVisible;
        v.lblBottomUp.isVisible = !v.lblBottomUp.isVisible;
        v.lblBottomDown.isVisible = !v.lblBottomDown.isVisible;

        eventManager.publish(globals.EVENT_EXPAND_COLLAPSE_ALL, {
          reportKey: this.reportKey,
          sectionKey: this.key,
          expand: v.lblTopDown.isVisible
        });
      };

      this.view.flxAddRecordIcon.onClick = () => {
        eventManager.publish(globals.EVENT_CREATE_RECORD, {
          reportKey: this.reportKey,
          sectionKey: this.key,
          recordKey: new Date().getTime() + ''
        });
      };

      eventManager.subscribe(globals.EVENT_EXPAND_COLLAPSE_ONE, ({reportKey, sectionKey, expand}) => {
        if(reportKey === this.reportKey){
          if(sectionKey === this.key){
            if(expand){
              v.lblTopUp.isVisible = false;
              v.lblTopDown.isVisible = true;
              v.lblBottomUp.isVisible = true;
              v.lblBottomDown.isVisible = false;
            } else {
              let index = -1;
              v.flxRecords.widgets().forEach((accordeonRecord, i) => {
                accordeonRecord.open && (index = i);
              });
              if(index === -1){
                v.lblTopUp.isVisible = true;
                v.lblTopDown.isVisible = false;
                v.lblBottomUp.isVisible = false;
                v.lblBottomDown.isVisible = true;
              }
            }
          }
        }
      });

    },

    initGettersSetters() {
      defineGetter(this, 'key', () => {
        return this._key;
      });
      defineSetter(this, 'key', value => {
        this._key = value;
      });
      defineGetter(this, 'reportKey', () => {
        return this._reportKey;
      });
      defineSetter(this, 'reportKey', value => {
        this._reportKey = value;
      });
    },

    toggleRecord(pk, open, skipAutomation){
      const accordeonRecord = this.view.flxRecords.widgets().find((widget) => widget.pk === pk);
      accordeonRecord && (accordeonRecord.toggle(open, skipAutomation));
    }

  };
});