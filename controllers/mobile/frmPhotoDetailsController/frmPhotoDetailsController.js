define({ 

  onViewCreated(){
    this.view.init = () => {
      this.view.cmpSimpleHeader.onClickLeft = () => {
        new voltmx.mvc.Navigation('frmReportDetails').navigate({reportKey: this.navigationContext.reportKey});
      };
      
      this.view.txtDirection.onEndEditing = (widget) => this.getPhoto().direction = widget.text;
      this.view.txtNotes.onEndEditing = (widget) => this.getPhoto().notes = widget.text;
    };

    this.view.preShow = () => {
      const photo = this.getPhoto();
      if(photo){
        this.view.imgPhoto.base64 = photo.base64;
        this.view.fieldAddress.text = photo.location;
        this.view.mapLocation.locationData = [{
          lat: photo.latitude,
          lon: photo.longitude,
          showCallout: false
        }];
        this.view.fieldLatitude.text = photo.latitude;
        this.view.fieldLongitude.text = photo.longitude;
        this.view.txtDirection.text = photo.direction;
        this.view.txtNotes.text = photo.notes;
      } else {
        alert('Photo not found.');
      }
    };
  },

  getPhoto(){
    let photo = null;
    const record = data.values[this.navigationContext.reportKey].sections[this.navigationContext.sectionKey].find((r) => r.pk === this.navigationContext.recordKey);
    if(record){
      const photos = record.photos || [];
      photo = photos.find((ph) => ph.id === this.navigationContext.id);
    } else {
      alert('Record not found.');
    }
    return photo;
  }


});