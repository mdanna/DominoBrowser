define({ 

  onViewCreated(){
    this.view.init = () => {
      this.view.buttonFieldReport.onButtonClick = () => new voltmx.mvc.Navigation('frmReportDetails').navigate({reportKey: this.navigationContext.reportKey});
      
      this.view.cmpSimpleHeader.doLayout = () => {
        this.view.flxContent.height = `${this.view.frame.height - 170}dp`;
      };
    };
    
    this.view.preShow = () => {
      this.view.cmpSimpleHeader.title = `Field Report ${this.navigationContext.reportKey}`;
      this.view.cmpSimpleHeader.subtitle = `Project ${globals.getProject(this.navigationContext.reportKey)}`;
      
      const fieldReport = data.values[this.navigationContext.reportKey].report_data;
      this.view.fieldServiceType.text = fieldReport.serviceType;
      this.view.fieldEngineerName.text = fieldReport.name;
      this.view.fieldAddress.text = fieldReport.address;
      this.view.fieldScheduledAt.text = `${fieldReport.reportDate} at ${fieldReport.startTime}`;
      this.view.fieldSupervisor.text = fieldReport.supervisor;
      this.view.fieldStatus.text = fieldReport.status;
      this.view.mapLocation.locationData = [{
        lat: fieldReport.latitude,
        lon: fieldReport.longitude,
        showCallout: false
      }];
      this.view.mapLocation.zoomLevel = 13;
      this.view.buttonFieldReport.text = fieldReport.status === 'Complete' ? 'View Field Report' : 'Update Field Report';
    };
  }

});