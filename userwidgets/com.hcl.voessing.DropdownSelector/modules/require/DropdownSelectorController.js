define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.view.preShow = () => {
        if(!this.initDone){
          
          this.view.flxBackground.onClick =  () => {
            this.view.isVisible = false;
          };
          
          this.initDone = true;
        }
      };
    },

    initGettersSetters() {
      defineGetter(this, 'widgetId', () => {
        return this._widgetId;
      });
      defineSetter(this, 'widgetId', value => {
        this._widgetId = value;
      });
      defineGetter(this, 'selection', () => {
        return this._selection;
      });
      defineSetter(this, 'selection', value => {
        this._selection = value;
      });
      defineGetter(this, 'options', () => {
        return this._options;
      });
      defineSetter(this, 'options', value => {
        this._options = value;
      });
    },

    loadData(){
      this.view.flxList.removeAll();
      this.view.flxList.height = 50 * this.options.data.length + 20;
      this.options.data.forEach(({value, display}, index) => {
        const selectorItem = new com.hcl.voessing.DropdownSelectorItem({
          id: `selectorItem${new Date().getTime()}`,
          top: index ? 0 : 10,
          skin: value === this.selection ? 'sknFlxSelected': 'sknFlxUnelected'
        },{},{});
        selectorItem.selection = value;
        selectorItem.display = display;
        selectorItem.onSelection = () => {
          this.selection = value;
          eventManager.publish(globals.EVENT_DROPDOWN_SELECTION, {
            widgetId: this.widgetId,
            selection: this.selection
          });
          this.view.isVisible = false;
        };
        this.view.flxList.add(selectorItem);
      });
    }
  };
});