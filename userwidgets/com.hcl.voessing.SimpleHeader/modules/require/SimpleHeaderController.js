define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
			this.view.preShow = () => {
              if(!this.initDone){
                this.view.flxLeft.onClick = () => this.onClickLeft();
                this.view.flxRight.onClick = () => this.onClickRight();
                this.initDone = true;
              }
            };
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {
            defineGetter(this, 'targetForm', () => {
                return this._targetForm;
            });
            defineSetter(this, 'targetForm', value => {
                this._targetForm = value;
            });
        },
      
      onClickLeft(){
        if(this.targetForm){
          new voltmx.mvc.Navigation(this.targetForm).navigate();
        }
      },
      onClickRight(){}
	};
});