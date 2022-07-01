define(function() {

  return {
    constructor(baseConfig, layoutConfig, pspConfig) {
      this.view.preShow = () => {
        const v = this.view;

        if(!this.initDone){


          //data.values[this.reportKey] = voltmx.store.getItem(`accordeon_data_${this.reportKey}`) || data.values[this.reportKey];

          eventManager.subscribe(globals.EVENT_DELETE_RECORD, ({reportKey, sectionKey, recordKey}) => {
            if(this.reportKey === reportKey && sectionKey && recordKey){
              data.values[reportKey].sections[sectionKey] = data.values[reportKey].sections[sectionKey].filter((record) => record.pk !== recordKey);
              //voltmx.store.setItem(`accordeon_data_${reportKey}`, data.values[reportKey]);
              this.loadData();
            }
          });

          eventManager.subscribe(globals.EVENT_CREATE_RECORD, ({reportKey, sectionKey, recordKey}) => {
            if(this.reportKey === reportKey && sectionKey && recordKey){
              const section = data.sections.find((s) => s.id === sectionKey);
              const record = {
                pk: recordKey,
                title: section.record.title,
              };
              section.record.fields.forEach((field) => {
                record[field.id] = field.default || "";
              });
              data.values[reportKey].sections[sectionKey] || (data.values[reportKey].sections[sectionKey] = []);
              data.values[reportKey].sections[sectionKey].push(record);
              //voltmx.store.setItem(`accordeon_data_${reportKey}`, data.values[reportKey]);
              this.loadData();

              const accordeonSection = v.flxSections.widgets().find((s) => s.key === sectionKey);
              accordeonSection && (accordeonSection.toggleRecord(recordKey, true, true));
            }
          });

          eventManager.subscribe(globals.EVENT_UPDATE_RECORD, ({reportKey, recordKey, sectionKey, fieldName, value}) => {
            if(this.reportKey === reportKey && sectionKey && recordKey && fieldName){
              const record = data.values[reportKey].sections[sectionKey].find((r) => r.pk === recordKey);
              record && (record[fieldName] = value);
              //voltmx.store.setItem(`accordeon_data_${reportKey}`, data.values[reportKey]);
            }
          });

          eventManager.subscribe(globals.EVENT_CREATE_PHOTO, ({
            id, 
            recordKey,
            sectionKey,
            reportKey,
            base64, 
            latitude, 
            longitude,
            location
          }) => {
            if(this.reportKey === reportKey && sectionKey && recordKey){
              const record = data.values[reportKey].sections[sectionKey].find((r) => r.pk === recordKey);
              if(record){
                const photos = record.photos || [];
                photos.push({
                  id,
                  latitude,
                  longitude,
                  base64,
                  location,
                  direction: '',
                  notes: ''
                });
                record.photos = photos; 
              }
              //voltmx.store.setItem(`accordeon_data_${reportKey}`, data.values[reportKey]);
            }
          });

          eventManager.subscribe(globals.EVENT_DELETE_PHOTO, ({
            id, 
            recordKey,
            sectionKey,
            reportKey
          }) => {
            if(this.reportKey === reportKey && sectionKey && recordKey){
              const record = data.values[reportKey].sections[sectionKey].find((r) => r.pk === recordKey);
              if(record){
                const photos = record.photos || [];
                record.photos = photos.filter((photo) => photo.id !== id); 
              }
              //voltmx.store.setItem(`accordeon_data_${reportKey}`, data.values[reportKey]);
            }
          });

          this.initDone = true;
        }
        this.loadData();
      };
    },

    initGettersSetters() {
      defineGetter(this, 'reportKey', () => {
        return this._reportKey;
      });
      defineSetter(this, 'reportKey', value => {
        this._reportKey = value;
      });
    },

    loadData(){
      this.view.flxSections.removeAll();
      data.sections.forEach((section, sectionIndex) => {
        const accordeonSection = new com.hcl.voessing.AccordeonSection({
          id: `accordeonSection${new Date().getTime()}`
        }, {}, {});
        accordeonSection.title = section.title;
        accordeonSection.key = section.id;
        accordeonSection.reportKey = this.reportKey;

        accordeonSection.removeAllRecords();
        const records = data.values[this.reportKey].sections[section.id] || [];
        records.forEach((record, recordIndex) => {
          const accordeonRecord = new com.hcl.voessing.AccordeonRecord({
            id: `accordeonRecord${new Date().getTime()}`
          }, {}, {});
          accordeonRecord.title = record.title;
          accordeonRecord.pk = record.pk;
          accordeonRecord.sectionKey = section.id;
          accordeonRecord.reportKey = this.reportKey;

          accordeonRecord.removeAllWidgets();
          section.record.fields.forEach((field, fieldIndex) => {
            let widget = null;
            const widgetId = `widget${new Date().getTime()}`;
            let addSignature = false;
            switch(field.type){
              case 'text':
              case 'time':
                widget = new com.hcl.voessing.TextWidget({
                  id: widgetId
                },{},{});
                widget.text = record[field.id] + '';
                break;
              case 'number':
                widget = new com.hcl.voessing.NumberWidget({
                  id: widgetId
                },{},{});
                widget.text = record[field.id] + '';
                break;
              case 'checkbox':
                widget = new com.hcl.voessing.CheckboxWidget({
                  id: widgetId
                },{},{});
                widget.checked = record[field.id];
                widget.checkboxLabel = field.checkboxLabel;
                break;
              case 'dropdown':
                widget = new com.hcl.voessing.DropdownWidget({
                  id: widgetId
                },{},{});
                widget.selection = record[field.id];
                widget.options = widget.options || {};
                widget.options.data = field.options;
                break;
              case 'image':
                accordeonRecord.showPhotoList = true;
                accordeonRecord.removeAllPhotos();
                (record.photos || []).forEach((photo) => {
                  const photoThumbnail = new com.hcl.voessing.PhotoThumbnail({
                    id: photo.id
                  }, {}, {});
                  photoThumbnail.setPhoto(photo.base64);
                  photoThumbnail.recordKey = record.pk;
                  photoThumbnail.sectionKey = section.id;
                  photoThumbnail.reportKey = this.reportKey;
                  photoThumbnail.initComponent();
                  accordeonRecord.addPhoto(photoThumbnail);
                });
                break;
              case 'signature':
                addSignature = true;
				break;                
              default:
                break;
            }

            if(addSignature){
              accordeonRecord.showSignature = true;
              const cmpSignature = new com.voltmxqfs.signaturepad({
                id: `cmpSignature${new Date().getTime()}`
              },{},{});
              accordeonRecord.addSignature(cmpSignature);
            }
            if(widget){
              widget.fieldName = field.id;
              widget.recordKey = record.pk;
              widget.sectionKey = section.id;
              widget.reportKey = this.reportKey;
              const widgetWrapper = new com.hcl.voessing.WidgetWrapper({
                id: `widgetWrapper${new Date().getTime()}`
              },{},{});
              widgetWrapper.label = field.label;

              widget.initComponent();
              widgetWrapper.setWidget(widget);
              accordeonRecord.addWidget(widgetWrapper);
            }

          });

          accordeonRecord.initComponent();
          accordeonSection.addRecord(accordeonRecord);
        });
        accordeonSection.initComponent();
        this.view.flxSections.add(accordeonSection);
      });
    }
  };
});