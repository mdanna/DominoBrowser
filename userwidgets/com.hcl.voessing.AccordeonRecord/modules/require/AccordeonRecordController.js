define(function() {
  const WIDGET_WRAPPER_HEIGHT = 90;
  const FLX_BIN_HEIGHT = 80;
  const FLX_IMAGES_HEIGHT = 130;

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {

      eventManager.subscribe(globals.EVENT_EXPAND_COLLAPSE_ALL, ({reportKey, sectionKey, expand}) => {
        if(reportKey === this.reportKey && sectionKey === this.sectionKey){
          this.toggle(!!expand);
        }
      });
    },

    initComponent(){
      this.open = false;

      const v = this.view;

      this.view.cmpPhotoList.reportKey = this.reportKey;
      this.view.cmpPhotoList.sectionKey = this.sectionKey;
      this.view.cmpPhotoList.recordKey = this.pk;
      this.view.cmpPhotoList.initComponent();

      this.view.flxArrow.onClick = () => {
        this.toggle(this.view.lblDown.isVisible);
      };

      this.view.flxBin.onClick = () => {
        eventManager.publish(globals.EVENT_DELETE_RECORD, {
          reportKey: this.reportKey,
          sectionKey: this.sectionKey,
          recordKey: this.pk
        });
      };

      this.view.txtTitle.onEndEditing = () => {
        eventManager.publish(globals.EVENT_UPDATE_RECORD, {
          reportKey: this.reportKey,
          recordKey: this.pk,
          sectionKey: this.sectionKey,
          fieldName: 'title',
          value: v.txtTitle.text
        });
      };

      eventManager.subscribe(globals.EVENT_TOGGLE_RECORD, ({recordKey, open, skipAutomation}) => {
        if(this.pk === recordKey){
          v.lblDown.isVisible = !open;
          v.lblUp.isVisible = open;
          v.flxTitle.skin = open ? 'sknFlxRecordTitleOpen' : 'sknFlxRecordTitle';
          v.txtTitle.skin = open ? 'sknTxtTitleOpen' : 'sknTxtTitle';
          this.open = !open;

          eventManager.publish(globals.EVENT_EXPAND_COLLAPSE_ONE, {
            reportKey: this.reportKey,
            sectionKey: this.sectionKey,
            expand: open
          });

          const menuHeight = WIDGET_WRAPPER_HEIGHT * v.flxWidgets.widgets().length + FLX_BIN_HEIGHT + 
                (v.flxSignature.isVisible ? 250 : 0) + (v.flxPhotoList.isVisible ? FLX_IMAGES_HEIGHT : 0);

          if(skipAutomation){
            v.flxWidgetsContainer.height = open ? menuHeight : 0;
          } else {
            v.flxWidgetsContainer.animate(voltmx.ui.createAnimation({
              "0": {
                height: open ? 0 : menuHeight
              },
              "100": {
                height: open ? menuHeight : 0
              }
            }), {
              "duration": 0.5,
              "iterationCount": 1,
              "delay": 0,
              "fillMode": kony.anim.FILL_MODE_FORWARDS
            }, {
              animationStart: function() {},
              animationEnd: function() {}
            });
          }

        }
      });
    },

    addSignature(cmpSignature){
      this.view.flxSignature.removeAll();
      this.view.flxSignature.add(cmpSignature);
    },



    initGettersSetters: function() {
      defineGetter(this, 'open', () => {
        return this._open;
      });
      defineSetter(this, 'open', value => {
        this._open = !!value;
      });
      defineGetter(this, 'sectionKey', () => {
        return this._sectionKey;
      });
      defineSetter(this, 'sectionKey', value => {
        this._sectionKey = value;
      });
      defineGetter(this, 'pk', () => {
        return this._pk;
      });
      defineSetter(this, 'pk', value => {
        this._pk = value;
      });
      defineGetter(this, 'reportKey', () => {
        return this._reportKey;
      });
      defineSetter(this, 'reportKey', value => {
        this._reportKey = value;
      });
    },

    toggle(open, skipAutomation){
      eventManager.publish(globals.EVENT_TOGGLE_RECORD, ({open, skipAutomation, recordKey: this.pk}));
    },
  };
});