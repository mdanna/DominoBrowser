define({ 

	onViewCreated(){
      this.view.init = () => {
        this.view.flxSplash.onClick = () => this.view.flxLogin.isVisible = true;
        this.view.flxRememberMe.onClick = () => this.view.flxCheck.isVisible = !this.view.flxCheck.isVisible;
        this.view.buttonLogin.onButtonClick = () => {
          this.view.flxLogin.isVisible = false;
          
          //load reports before navigating to next form
          
          VMXFoundry.getIntegrationService('DominoBrowser').invokeOperation('getAllReports', {}, {}, ({items}) => {
            items.forEach((item) => {
              data.values[item.key] = data.values[item.key] || {};
              data.values[item.key].report_data = data.values[item.key].report_data || {};
              data.values[item.key].sections = data.values[item.key].sections || {};
              
              const reportDate = new Date(item.reportDate);
              data.values[item.key].report_data.name = item.name;
              data.values[item.key].report_data.reportDate = `${reportDate.getDate()}/${reportDate.getMonth() + 1}/${reportDate.getFullYear()}`;
              data.values[item.key].report_data.startTime = item.startTime;
              data.values[item.key].report_data.endTime = item.endTime;
              data.values[item.key].report_data.address = item.address;
              data.values[item.key].report_data.latitude = item.latitude;
              data.values[item.key].report_data.longitude = item.longitude;
              data.values[item.key].report_data.project = item.project;
              data.values[item.key].report_data.status = "Scheduled"; //item.status; 
              data.values[item.key].report_data.serviceType = item.serviceType;
              data.values[item.key].report_data.supervisor = item.supervisor;
              data.values[item.key].report_data.signature = item.signature;
            });
            new voltmx.mvc.Navigation('frmReportList').navigate();
          }, (error) => {
            alert(error);
          });
          
        };
      };
    }

});