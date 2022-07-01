const globals = {
  //don't share this key
  MAP_KEY: "AIzaSyDhjYPW5Mz9UFmaguQUmD5BH8CcoH4Gpzk",
  
  EVENT_EXPAND_COLLAPSE_ALL: "evtExpandCollapseAll",
  EVENT_EXPAND_COLLAPSE_ONE: "evtExpandCollapseOne",
  EVENT_DROPDOWN_SHOW_LIST: "evtDropdownShowList",
  EVENT_DROPDOWN_SELECTION: "evtDropdownSelection",
  EVENT_DELETE_RECORD: "evtDeleteRecord",
  EVENT_CREATE_RECORD: "evtCreateRecord",
  EVENT_UPDATE_RECORD: "evtUpdateRecord",
  EVENT_CREATE_PHOTO: "evtCreatePhoto",
  EVENT_DELETE_PHOTO: "evtDeletePhoto",
  EVENT_UPDATE_PHOTO: "evtUpdatePhoto",
  EVENT_SAVE_SIGNATURE: "evtSaveSignature",
  EVENT_TOGGLE_RECORD: "evtToggleRecord",
  
  getProject(reportKey){
    return data.values[reportKey].report_data.project;
  }
};