define(function() {
  var voltmxqfs = voltmxqfs || {};
  var voltmxLoggerModule = require("com/voltmxqfs/signaturepad/voltmxLogger");
  voltmxqfs.logger = (new voltmxLoggerModule("Signature Pad Component")) || function () {};
  voltmxqfs.logger.setLogLevel("DEBUG");
  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {},
    
    initGettersSetters: function() {},
    
    /**
      * @function onComponentPreshow
      * @description This function is invoked on preshow of the component
      * @private
      */
    onComponentPreshow(){
      voltmxqfs.logger.trace("----------Entering onComponentPreshow Function---------", voltmxqfs.logger.FUNCTION_ENTRY);
      try{
        this.view.brwsrSignature.enableParentScrollingWhenReachToBoundaries=false;
      }catch(excp){
        voltmxqfs.logger.error(JSON.stringify(exception), voltmxqfs.logger.EXCEPTION);
      }
      voltmxqfs.logger.trace("----------Exiting onComponentPreshow Function---------", voltmxqfs.logger.FUNCTION_EXIT);
    },
    /**
         * @function getSignature
         * @description This function is invoked to get signature image base64 string
         * @private
         */
    getSignature(){
      voltmxqfs.logger.trace("----------Entering getSignature Function---------", voltmxqfs.logger.FUNCTION_ENTRY);
      var str = this.view.brwsrSignature.evaluateJavaScript('getSignatureBase64()');
      if(typeof str === 'string'){
        try{
          str = str.replace(/"/g,'');
//           str = str.split(',');
//           str = str[1];
        } catch(excp){
          str = null;
        }
      }
      voltmxqfs.logger.trace("----------Exiting getSignature Function---------", voltmxqfs.logger.FUNCTION_EXIT);
      return str;
    },
    
    getSignatureAsync(callback){
      try {
        this.view.brwsrSignature.evaluateJavaScriptAsync('getSignatureBase64()', (str) => {
          str = str || '';
          str = str.replace(/"/g, '');
          callback(str || null);
        });
      } catch(exception){
        callback(null);
      }
    },
    
    setSignature(base64){
      this.view.brwsrSignature.evaluateJavaScript(`setCanvasData('${base64}')`);
    },
    
    clearSignature(){
      this.view.brwsrSignature.evaluateJavaScript('clearCanvasData()');
    }
  };
});