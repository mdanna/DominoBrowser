define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.view.preShow = () => {
        if(!this.initDone){
          this.view.mapView.mapKey = globals.MAP_KEY;
          
          this.view.cmpSimpleHeader.doLayout = () => {
            this.view.flxContent.height = `${this.view.frame.height - 110}dp`;
          };
          
          this.view.flxDay.doLayout = () => {
            this.view.flxReports.height = `${this.view.flxDay.frame.height - 50}dp`;
          };

          this.view.cmpSimpleHeader.onClickLeft = () => this.view.cmpHamburgerMenu.toggle(true);
          
          this.view.cmpHamburgerMenu.onItemSelected = (key) => {
            switch(key){
              case "logout":
                new voltmx.mvc.Navigation('frmLogin').navigate();
                break;
              default: 
                break;
            }
          };
          
          this.view.flxTabHeaderLeft.onClick = () => {
            this.view.lblIconCalendarView.skin = 'sknLblIconBlue120';
            this.view.lblCalendarView.skin = 'sknLblBlue100';
            this.view.flxLineLeft.isVisible = true;
            this.view.flxCalendarView.isVisible = true;
            this.view.lblIconMapView.skin = 'sknLblIconGrey120';
            this.view.lblMapView.skin = 'sknLblGrey100';
            this.view.flxLineRight.isVisible = false;
            this.view.flxMapView.isVisible = false;
          };
          
          this.view.flxTabHeaderRight.onClick = () => {
            this.view.lblIconMapView.skin = 'sknLblIconBlue120';
            this.view.lblMapView.skin = 'sknLblBlue100';
            this.view.flxLineRight.isVisible = true;
            this.view.flxMapView.isVisible = true;
            this.view.lblIconCalendarView.skin = 'sknLblIconGrey120';
            this.view.lblCalendarView.skin = 'sknLblGrey100';
            this.view.flxLineLeft.isVisible = false;
            this.view.flxCalendarView.isVisible = false;
          };

          this.initDone = true;
        }
        
        this.loadData();
      };
    },
    
    initGettersSetters() {},
    
    loadData() {
      this.view.flxReports.removeAll();
      const locationData = [];
      var reportData = [];
      Object.keys(data.values).forEach((reportKey) => {
        const fieldReportData = data.values[reportKey].report_data;
        const fieldReport = new com.hcl.voessing.FieldReport({
          id: `fieldReport${new Date().getTime()}`
        },{},{});
        fieldReport.initComponent();
        fieldReport.reportKey = reportKey;
        fieldReport.startTime = fieldReportData.startTime;
        fieldReport.endTime = fieldReportData.endTime;
        fieldReport.serviceType = fieldReportData.serviceType;
        fieldReport.completed = fieldReportData.status === 'Complete';
        fieldReport.project = fieldReportData.project;
        fieldReport.supervisor = fieldReportData.supervisor;
        fieldReport.onClickReport = () => new voltmx.mvc.Navigation('frmReport').navigate({reportKey});
        
        locationData.push({
          lat: fieldReportData.latitude,
          lon: fieldReportData.longitude,
          showCallout: false
        });
        reportData.push(fieldReport);
      });
      reportData.sort(function(a,b) {
        var timePartsA = a.startTime.split(":");
		var timePartsB = b.startTime.split(":");
        return ((timePartsA[0] * 60) + timePartsA[1])>((timePartsB[0] * 60) + timePartsB[1]);
      });
      for(var rep in reportData) {
        this.view.flxReports.add(reportData[rep]);
      }
      this.view.mapView.locationData = locationData;
      this.view.mapView.zoomLevel = 11;
    }
  };
});