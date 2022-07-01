define(function() {

  return {
    constructor(baseConfig, layoutConfig, pspConfig) {},

    initComponent(){
      this.view.camAddPhoto && (this.view.camAddPhoto.onCapture = (camWidget, metadata) => {
        this.onCapture({
          base64: camWidget.base64,
          dateTimeInMilliSeconds: metadata.dateTimeInMilliSeconds || new Date().getTime(), 
          latitude: metadata.location ? metadata.location.latitude : "", 
          longitude: metadata.location ? metadata.location.longitude : "",
          gallery: false
        });
      });

      this.view.flxGallery.onClick = () => {
        voltmx.phone.openMediaGallery && voltmx.phone.openMediaGallery((rawBytes) => {
          this.onCapture({
            base64: voltmx.convertToBase64(rawBytes),
            dateTimeInMilliSeconds: new Date().getTime(), 
            latitude: "", 
            longitude: "",
            gallery: true
          });
        }, {
          mimetype: "image/*"
        });
      };
    },

    initGettersSetters() {},

    onCapture(){}
  };
});
