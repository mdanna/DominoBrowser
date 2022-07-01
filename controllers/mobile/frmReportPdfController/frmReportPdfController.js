define({ 

	onViewCreated(){
      this.view.init = () => {
          this.view.cmpSimpleHeader.doLayout = () => {
            this.view.flxPdf.height = `${this.view.frame.height - 160}dp`;
          };
        
          this.view.cmpSimpleHeader.onClickLeft = () => {
            new voltmx.mvc.Navigation('frmReportList').navigate({reportKey: this.reportKey});
          };
      };
      
      this.view.preShow = () => {
         this.view.cmpSimpleHeader.title = `Field Report ${this.navigationContext.reportKey}`;
         this.view.cmpSimpleHeader.subtitle = `Project ${globals.getProject(this.navigationContext.reportKey)}`;
      };
    }

});