const utils = {
  formatDateComponent(dateComponent){
    dateComponent = dateComponent + '';
    return dateComponent.length === 1 ? `0${dateComponent}` : dateComponent;
  }
};