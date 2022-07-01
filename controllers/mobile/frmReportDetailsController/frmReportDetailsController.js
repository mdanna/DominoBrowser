define({ 

	onViewCreated(){
      this.view.preShow = () => {
        this.view.cmpReportDetails.reportKey = this.navigationContext.reportKey;
      };
    }

});