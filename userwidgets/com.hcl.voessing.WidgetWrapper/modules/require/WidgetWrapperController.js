define(function() {

  return {
    constructor(baseConfig, layoutConfig, pspConfig) {},

    initGettersSetters() {},

    setWidget(widget){
      this.view.flxWidget.removeAll();
      this.view.flxWidget.add(widget);
    }
  };
});