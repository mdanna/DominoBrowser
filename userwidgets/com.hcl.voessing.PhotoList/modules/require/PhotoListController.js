define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {},

    initComponent(){
      const v = this.view;
      
      this.view.cmpNewPhoto.initComponent();

      this.view.cmpNewPhoto.onCapture = ({base64, dateTimeInMilliSeconds, latitude, longitude}) => {
        if(latitude && longitude){
          this.createPhotoThumbnail({base64, dateTimeInMilliSeconds, latitude, longitude});
        } else {
          voltmx.location.getCurrentPosition((position) => {
            this.createPhotoThumbnail({
              base64, 
              dateTimeInMilliSeconds, 
              latitude: position.coords.latitude, 
              longitude: position.coords.longitude
            });                
          }, (error) => {
            alert(JSON.stringify(error));
          }, {});
        }
      };

      eventManager.subscribe(globals.EVENT_DELETE_PHOTO, ({
        id, 
        recordKey,
        sectionKey,
        reportKey
      }) => {
        if(this.reportKey === reportKey && this.sectionKey === sectionKey && this.recordKey === recordKey){
          const widgets = v.flxPhotos.widgets().filter((widget) => widget.id !== id);
          v.flxPhotos.removeAll();
          widgets.forEach((widget) => v.flxPhotos.add(widget));
        }
      });
    },

    createPhotoThumbnail({base64, dateTimeInMilliSeconds, latitude, longitude}){
      const doCreatePhotoThumbnail = (location) => {
        try {
          const id = `photo${dateTimeInMilliSeconds}`;
          const photoThumbnail = new com.hcl.voessing.PhotoThumbnail({
            id
          }, {}, {});
          this.view.flxPhotos.add(photoThumbnail);

          photoThumbnail.setPhoto(base64);
          photoThumbnail.recordKey = this.recordKey;
          photoThumbnail.sectionKey = this.sectionKey;
          photoThumbnail.reportKey = this.reportKey;
          photoThumbnail.initComponent();

          eventManager.publish(globals.EVENT_CREATE_PHOTO, {
            recordKey: this.recordKey,
            sectionKey: this.sectionKey,
            reportKey: this.reportKey,
            base64, 
            id, 
            latitude, 
            longitude,
            location
          });
        } catch(error){
          alert(error + ':' + JSON.stringify(error));
        }
      };

      VMXFoundry.getIntegrationService('geoLocation').invokeOperation('getLocation', {}, {
        lat: latitude,
        lon: longitude
      }, (result) => {
        doCreatePhotoThumbnail(`${result.place} (${result.region}) - ${result.countryCode}`);
      }, (error) => {
		doCreatePhotoThumbnail(data.values[this.reportKey].report_data.address);
      });
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
            defineGetter(this, 'reportKey', () => {
                return this._reportKey;
            });
            defineSetter(this, 'reportKey', value => {
                this._reportKey = value;
            });
        }
  };
});