const data = {
  "values": {
    "0050": {
      "report_data": {
        "name": "John Smith",
        "reportDate": "05/07/2022",
        "startTime": "8:00",
        "endTime": "9:55",
        "address": "Ritterstrasse 63, 10969 Berlin, Germany",
        "latitude": "52.504859",
        "longitude": "13.398395",
        "signature": "",
        "project": "Baustelle Justizpalast",
        "status": "Complete",
        "serviceType": "Site Inspection",
        "supervisor": "Julie Watson"
      },
      "sections":{
        "equipment": [{
          "pk": "1234567890",
          "title": "Digger",
          "direction": "north",
          "quantity": 2,
          "ohs_check": true
        },{
          "pk": "1234567899",
          "title": "Crane",
          "direction": "south",
          "quantity": 3,
          "ohs_check": true
        },{
          "pk": "1234567898",
          "title": "Fork Lift",
          "direction": "east",
          "quantity": 1,
          "ohs_check": false
        }],
        "hazardous": [{
          "pk": "h1",
          "title": "Propane Gas Cylinders",
          "location": "First floor",
          "contractor": "beta",
          "tons": 0,
          "cfr_section": "72.89"
        },{
          "pk": "h2",
          "title": "Dynamite",
          "location": "Basement",
          "contractor": "alpha",
          "tons": 1,
          "cfr_section": "72.89"
        },{
          "pk": "h3",
          "title": "Biohazard Waste",
          "location": "Basement",
          "contractor": "alpha",
          "tons": 1,
          "cfr_section": "72.89"
        },{
          "pk": "h3",
          "title": "Acetone",
          "location": "Basement",
          "contractor": "alpha",
          "tons": 1,
          "cfr_section": "72.89"
        }]
      }
    },
    "0051": {
      "report_data": {
        "name": "John Smith",
        "reportDate": "05/07/2022",
        "startTime": "10:00",
        "endTime": "11:55",
        "address": "Leberstrasse. 32, 10829 Berlin, Germany",
        "latitude": "52.483007",
        "longitude": "13.361400",
        "signature": "",
        "project": "Baustelle Tankstelle Shell",
        "status": "Scheduled",
        "serviceType": "Site Inspection",
        "supervisor": "Julie Watson"
      },
      "sections":{
        "equipment": [],
        "hazardous": []
      }
    },
    "0052": {
      "report_data": {
        "name": "John Smith",
        "reportDate": "06/07/2022",
        "startTime": "13:00",
        "endTime": "14:55",
        "address": "Mollstrasse 20, 10249 Berlin, Germany",
        "latitude": "52.524148",
        "longitude": "13.425226",
        "signature": "",
        "project": "Baustelle Öffentliche Parks",
        "status": "Scheduled",
        "serviceType": "Site Inspection",
        "supervisor": "Julie Watson"
      },
      "sections":{
        "equipment": [],
        "hazardous": []
      }
    },
    "0053": {
      "report_data": {
        "name": "John Smith",
        "reportDate": "06/07/2022",
        "startTime": "15:00",
        "endTime": "16:55",
        "address": "Harzerstrasse. 26, 12059 Berlin, Germany",
        "latitude": "52.485874",
        "longitude": "13.447363",
        "signature": "",
        "project": "Baustelle Schulhof",
        "status": "Scheduled",
        "serviceType": "Site Inspection",
        "supervisor": "Julie Watson"
      },
      "sections":{
        "equipment": [],
        "hazardous": []
      }
    }
  },

  "report_data": [{
    //     "id": "name",
    //     "type": "text",
    //     "label": "Engineer Name"
    //   },{
    //     "id": "reportDate",
    //     "type": "date",
    //     "label": "Date"
    //   },{
    //     "id": "address",
    //     "type": "text",
    //     "label": "Address"
    //   },
    //  {
    "id": "signature",
    "type": "signature"
  }],

  "sections": [{
    "id": "equipment",
    "title": "Equipment Records",
    "record": {
      "pk": "guid",
      "title": "new Equipment Record",
      "fields": [{
        "id": "direction",
        "type": "dropdown",
        "label": "Direction",
        "default": "north",
        "options": [{
          "value": "north",
          "display": "North"
        },{
          "value": "east",
          "display": "East"
        },{
          "value": "south",
          "display": "South"
        },{
          "value": "west",
          "display": "West"
        }]
      },{
        "id": "quantity",
        "type": "number",
        "label": "Count",
        "default": 0
      },{
        "id": "ohs_check",
        "type": "checkbox",
        "label": "Safety record",
        "checkboxLabel": "OHS Verified",
        "default": false
      }]
    }
  },{
    "id": "hazardous",
    "title": "Hazardous Materials",
    "record": {
      "pk": "guid",
      "title": "new Hazardous Material",
      "fields":[{
        "id": "location",
        "type": "text",
        "label": "Location"
      },{
        "id": "tons",
        "type": "number",
        "label": "Metric tons",
        "default": 0
      },{
        "id": "contractor",
        "type": "dropdown",
        "label": "Contractor",
        "default": "alpha",
        "options": [{
          "value": "alpha",
          "display": "Alpha waste disposal"
        },{
          "value": "beta",
          "display": "Beta waste disposal"
        },{
          "value": "gamma",
          "display": "Gamma waste disposal"
        }]
      },{
        "id": "cfr_section",
        "type": "dropdown",
        "label": "40 CFR Section",
        "default": "26.131",
        "options": [{
          "value": "26.131",
          "display": "26.131"
        },{
          "value": "48.9",
          "display": "48.9"
        },{
          "value": "72.89",
          "display": "72.89"
        }]
      }, {
        "id": "images",
        "type": "image",
        "label": "Images",
        "default": ""
      }]
    }
  }]
};

// const data = {
//   "values": {
//     "0070": {
//       "report_data": {
//         "name": "John Smith",
//         "reportDate": "25/05/2022",
//         "startTime": "8:00",
//         "endTime": "9:55",
//         "address": "Ritterstrasse 63, 10969 Berlin, Germany",
//         "latitude": "52.504859",
//         "longitude": "13.398395",
//         "signature": "",
//         "project": "Baustelle Justizpalast",
//         "status": "Scheduled",
//         "serviceType": "Site Inspection",
//         "supervisor": "Julie Watson"
//       },
//       "sections":{}
//     },
//     "0071": {
//       "report_data": {
//         "name": "John Smith",
//         "reportDate": "25/05/2022",
//         "startTime": "10:00",
//         "endTime": "11:55",
//         "address": "Leberstrasse. 32, 10829 Berlin, Germany",
//         "latitude": "52.483007",
//         "longitude": "13.361400",
//         "signature": "",
//         "project": "Baustelle Tankstelle Shell",
//         "status": "Scheduled",
//         "serviceType": "Site Inspection",
//         "supervisor": "Julie Watson"
//       },
//       "sections":{}
//     },
//     "0072": {
//       "report_data": {
//         "name": "John Smith",
//         "reportDate": "25/05/2022",
//         "startTime": "13:00",
//         "endTime": "14:55",
//         "address": "Mollstrasse 20, 10249 Berlin, Germany",
//         "latitude": "52.524148",
//         "longitude": "13.425226",
//         "signature": "",
//         "project": "Baustelle Öffentliche Parks",
//         "status": "Scheduled",
//         "serviceType": "Site Inspection",
//         "supervisor": "Julie Watson"
//       },
//       "sections":{}
//     },
//     "0073": {
//       "report_data": {
//         "name": "John Smith",
//         "reportDate": "25/05/2022",
//         "startTime": "15:00",
//         "endTime": "16:55",
//         "address": "Harzerstrasse. 26, 12059 Berlin, Germany",
//         "latitude": "52.485874",
//         "longitude": "13.447363",
//         "signature": "",
//         "project": "Baustelle Schulhof",
//         "status": "Scheduled",
//         "serviceType": "Site Inspection",
//         "supervisor": "Julie Watson"
//       },
//       "sections":{}
//     },
//   },

//   "report_data": [],

//   "sections": [{
//     "id": "Datum_und_Zeit",
//     "title": "Datum und Zeit",
//     "record": {
//       "pk": "guid",
//       "title": "",
//       "fields": [{
//         "id": "Schicht",
//         "type": "dropdown",
//         "label": "Schicht",
//         "default": "",
//         "options": [{
//           "value": "Tagschicht",
//           "display": "Tagschicht"
//         }, {
//           "value": "Spätschicht",
//           "display": "Spätschicht"
//         }, {
//           "value": "Nachtschicht",
//           "display": "Nachtschicht"
//         }]
//       },{
//         "id": "Schichtbeginn",
//         "type": "time",
//         "label": "Schichtbeginn",
//         "default": ""
//       },{
//         "id": "Schichtende",
//         "type": "time",
//         "label": "Schichtende",
//         "default": ""
//       }]
//     }
//   }, {
//     "id": "Wetter",
//     "title": "Wetter",
//     "record": {
//       "pk": "guid",
//       "title": "",
//       "fields": [{
//         "id": "Zeitpunkt",
//         "type": "dropdown",
//         "label": "Zeitpunkt",
//         "default": "",
//         "options": [{
//           "value": "06:00",
//           "display": "06:00"
//         }, {
//           "value": "12:00",
//           "display": "12:00"
//         }, {
//           "value": "18:00",
//           "display": "18:00"
//         }, {
//           "value": "24:00",
//           "display": "24:00"
//         }]
//       }, {
//         "id": "Temperatur",
//         "type": "number",
//         "label": "Temperatur",
//         "default": ""
//       }, {
//         "id": "Wind",
//         "type": "number",
//         "label": "Wind",
//         "default": ""
//       }, {
//         "id": "Niederschläge",
//         "type": "number",
//         "label": "Niederschläge",
//         "default": ""
//       }, {
//         "id": "Taupunkt",
//         "type": "number",
//         "label": "Taupunkt",
//         "default": ""
//       }, {
//         "id": "Symbol",
//         "type": "image",
//         "label": "Symbol",
//         "default": ""
//       }]
//     }
//   }, {
//     "id": "Baustellenbesetzung",
//     "title": "Baustellenbesetzung",
//     "record": {
//       "pk": "guid",
//       "title": "",
//       "fields": [{
//         "id": "Baufirma",
//         "type": "dropdown",
//         "label": "Baufirma",
//         "default": "",
//         "options": [{
//           "value": "DBAG",
//           "display": "DBAG"
//         }, {
//           "value": "StrabAG",
//           "display": "StrabAG"
//         }, {
//           "value": "Hochtief",
//           "display": "Hochtief"
//         }]
//       }, {
//         "id": "Personen",
//         "type": "dropdown",
//         "label": "Personen",
//         "default": "",
//         "options": [{
//           "value": "Polier",
//           "display": "Polier"
//         }, {
//           "value": "Facharbeiter",
//           "display": "Facharbeiter"
//         }, {
//           "value": "SIPO",
//           "display": "SIPO"
//         }]
//       },{
//         "id": "Anzahl",
//         "type": "number",
//         "label": "Anzahl",
//         "default": "0"
//       }]
//     }
//   }, {
//     "id": "Gerate_Baumaschinen",
//     "title": "Geräte/Baumaschinen",
//     "record": {
//       "pk": "guid",
//       "title": "",
//       "fields": [{
//         "id": "Baufirma",
//         "type": "dropdown",
//         "label": "Baufirma",
//         "default": "",
//         "options": [{
//           "value": "DBAG",
//           "display": "DBAG"
//         }, {
//           "value": "StrabAG",
//           "display": "StrabAG"
//         }, {
//           "value": "Hochtief",
//           "display": "Hochtief"
//         }]
//       }, {
//         "id": "Gerätetyp",
//         "type": "dropdown",
//         "label": "Gerätetyp",
//         "default": "",
//         "options": [{
//           "value": "Radlader",
//           "display": "Radlader"
//         }, {
//           "value": "Bagger",
//           "display": "Bagger"
//         }, {
//           "value": "Kran",
//           "display": "Kran"
//         }]
//       }, {
//         "id": "Anzahl",
//         "type": "number",
//         "label": "Anzahl",
//         "default": "0"
//       }]
//     }
//   },{
//     "id": "Lieferungen",
//     "title": "Lieferungen",
//     "record": {
//       "pk": "guid",
//       "title": "",
//       "fields": [{
//         "id": "Lieferung",
//         "type": "text",
//         "label": "Lieferung",
//         "default": ""
//       }]
//     }
//   },{
//     "id": "Bauleistungen",
//     "title": "Bauleistungen",
//     "record": {
//       "pk": "guid",
//       "title": "",
//       "fields": [{
//         "id": "Baufirma",
//         "type": "dropdown",
//         "label": "Baufirma",
//         "default": "",
//         "options": [{
//           "value": "DBAG",
//           "display": "DBAG"
//         }, {
//           "value": "StrabAG",
//           "display": "StrabAG"
//         }, {
//           "value": "Hochtief",
//           "display": "Hochtief"
//         }]
//       },{
//         "id": "Bauleistung",
//         "type": "text",
//         "label": "Bauleistung",
//         "default": ""
//       }]
//     }
//   },{
//     "id": "Vertragsabweichungen",
//     "title": "Vertragsabweichungen",
//     "record": {
//       "pk": "guid",
//       "title": "",
//       "fields": [{
//         "id": "Baufirma",
//         "type": "dropdown",
//         "label": "Baufirma",
//         "default": "",
//         "options": [{
//           "value": "DBAG",
//           "display": "DBAG"
//         }, {
//           "value": "StrabAG",
//           "display": "StrabAG"
//         }, {
//           "value": "Hochtief",
//           "display": "Hochtief"
//         }]
//       },{
//         "id": "Abweichung",
//         "type": "text",
//         "label": "Abweichung",
//         "default": ""
//       }]
//     }
//   },{
//     "id": "Mangel",
//     "title": "Mängel",
//     "record": {
//       "pk": "guid",
//       "title": "",
//       "fields": [{
//         "id": "Baufirma",
//         "type": "dropdown",
//         "label": "Baufirma",
//         "default": "",
//         "options": [{
//           "value": "DBAG",
//           "display": "DBAG"
//         }, {
//           "value": "StrabAG",
//           "display": "StrabAG"
//         }, {
//           "value": "Hochtief",
//           "display": "Hochtief"
//         }]
//       },{
//         "id": "Mangel",
//         "type": "text",
//         "label": "Mangel",
//         "default": ""
//       }]
//     }
//   },{
//     "id": "Anordnungen_Entscheidungen",
//     "title": "Anordnungen/Entscheidungen",
//     "record": {
//       "pk": "guid",
//       "title": "",
//       "fields": [{
//         "id": "Anordnung/Entscheidung",
//         "type": "text",
//         "label": "Anordnung/Entscheidung",
//         "default": ""
//       }]
//     }
//   },{
//     "id": "Entsorgungen",
//     "title": "Entsorgungen",
//     "record": {
//       "pk": "guid",
//       "title": "",
//       "fields": [{
//         "id": "Entsorgung",
//         "type": "text",
//         "label": "Entsorgung",
//         "default": ""
//       }]
//     }
//   },{
//     "id": "Zwischenabnahmen_Prufungen",
//     "title": "Zwischenabnahmen/Prüfungen",
//     "record": {
//       "pk": "guid",
//       "title": "",
//       "fields": [{
//         "id": "Baufirma",
//         "type": "dropdown",
//         "label": "Baufirma",
//         "default": "",
//         "options": [{
//           "value": "DBAG",
//           "display": "DBAG"
//         }, {
//           "value": "StrabAG",
//           "display": "StrabAG"
//         }, {
//           "value": "Hochtief",
//           "display": "Hochtief"
//         }]
//       }, {
//         "id": "Gewerk",
//         "type": "dropdown",
//         "label": "Gewerk",
//         "default": "",
//         "options": [{
//           "value": "Hochbau",
//           "display": "Hochbau"
//         }, {
//           "value": "Gleisbau",
//           "display": "Gleisbau"
//         }, {
//           "value": "Tiefbau",
//           "display": "Tiefbau"
//         }, {
//           "value": "Straßenbau",
//           "display": "Straßenbau"
//         }]
//       }, {
//         "id": "Zwischenabnahme/Prüfung",
//         "type": "text",
//         "label": "Zwischenabnahme/Prüfung",
//         "default": ""
//       }]
//     }
//   },{
//     "id": "Begehungen",
//     "title": "Begehungen",
//     "record": {
//       "pk": "guid",
//       "title": "",
//       "fields": [{
//         "id": "Art_der_Begehung",
//         "type": "dropdown",
//         "label": "Art der Begehung",
//         "default": "",
//         "options": [{
//           "value": "Kontrolle",
//           "display": "Kontrolle"
//         }, {
//           "value": "Ortstermin",
//           "display": "Ortstermin"
//         }, {
//           "value": "Arbeitsschutz",
//           "display": "Arbeitsschutz"
//         }]
//       },{
//         "id": "Bemerkungen",
//         "type": "text",
//         "label": "Bemerkungen",
//         "default": ""
//       }]
//     }
//   },{
//     "id": "Sonstige_Angaben",
//     "title": "Sonstige Angaben",
//     "record": {
//       "pk": "guid",
//       "title": "",
//       "fields": [{
//         "id": "Kategorie",
//         "type": "dropdown",
//         "label": "Kategorie",
//         "default": "",
//         "options": [{
//           "value": "Allgemein",
//           "display": "Allgemein"
//         }, {
//           "value": "Angaben zu Gleissperrungen",
//           "display": "Angaben zu Gleissperrungen"
//         }, {
//           "value": "Einweisungen",
//           "display": "Einweisungen"
//         }]
//       },{
//         "id": "Bemerkungen",
//         "type": "text",
//         "label": "Bemerkungen",
//         "default": ""
//       }]
//     }
//   },{
//     "id": "Bilder",
//     "title": "Bilder",
//     "record": {
//       "pk": "guid",
//       "title": "",
//       "fields": [{
//         "id": "Bild",
//         "type": "image",
//         "label": "Bild",
//         "default": ""
//       },{
//         "id": "Bemerkungen",
//         "type": "text",
//         "label": "Bemerkungen",
//         "default": ""
//       }]
//     }
//   },{
//     "id": "Unterschriften",
//     "title": "Unterschriften",
//     "record": {
//       "pk": "guid",
//       "title": "",
//       "fields": [{
//         "id": "Unterschrift",
//         "type": "signature",
//         "label": "Unterschrift",
//         "default": ""
//       }, {
//         "id": "Bemerkungen",
//         "type": "text",
//         "label": "Bemerkungen",
//         "default": ""
//       }]
//     }
//   }]
//};
