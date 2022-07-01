define({ 

	onViewCreated(){
      this.view.init = () => {
        this.view.flxSplash.onClick = () => this.view.flxLogin.isVisible = true;
        this.view.flxRememberMe.onClick = () => this.view.flxCheck.isVisible = !this.view.flxCheck.isVisible;
        this.view.buttonLogin.onButtonClick = () => {
          this.view.flxLogin.isVisible = false;
          new voltmx.mvc.Navigation('frmReportList').navigate();
        };
      };
    }

});