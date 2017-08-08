function template() {
  return {
    "name": {
      "keywords":[ "name", "title", "summary", "event name", "landmark", "location name", "activity name"],
      "stopKeywprds": ["street", "contact", "person", "parent", "file", "partner"],
      keyHint: function(){

      },
      valueHint: function(){

      },
      "type": "String"
    },
    "description": {
      "keywords":["content", "description"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
      "type": "String"
    },
    "summary": {
      "keywords":["summary"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
      "type": "String"
    },
    "lat": {
      "keywords": ["latitude" , "lat", "y"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
      "type": "String"
    },
    "long": {
      "keywords": ["longitude", "lng", "x"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
      "type": "String"
    },
    "postalCode": {
      "keywords": ["postal cd", "postal code", "zip code"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
      "type": "String"
    },
    "address": {
      "keywords": ["location", "locations", "address", "street no", "street number", "street name", "street type", "city", "postal cd", "postal code", "zip code", "country"],
      "stopKeywprds": ["id", "type"],
      keyHint: function(){

      },
      valueHint: function(){

      },
      "type": "String"
    },
    "streetNumber": {
      "keywords": ["street no", "street number"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
      "type": "String"
    },
    "streetName": {
      "keywords": ["street name", "street type"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
      "type": "String"
    },
    "city": {
      "keywords": ["city"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
      "type": "String"
    },
    "country": {
      "keywords": ["country"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
      "type": "String"
    },
    "state": {
      "keywords": ["state"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
      "type": "String"
    },
    "startDate": {
      "keywords": ["start", "from"],
      "stopKeywprds": ["end", "first", "last", "to", "time", "range"],
      keyHint: function(){

      },
      valueHint: function(){

      },
      "type": "Date"
    },
    "endDate": {
      "keywords": ["end", "to"],
      "stopKeywprds": ["start", "first", "last", "from", "time", "range"],
      keyHint: function(){

      },
      valueHint: function(){

      },
      "type": "Date"
    },
    "startTime": {
      "keywords": ["time", "start", "from"],
      "stopKeywprds": ["end", "first", "last", "to", "range"],
      keyHint: function(){

      },
      valueHint: function(){

      },
      "type": "Date"
    },
    "endTime": {
      "keywords": ["time", "end", "to"],
      "stopKeywprds": ["start", "first", "last", "from", "range"],
      keyHint: function(){

      },
      valueHint: function(){

      },
      "type": "Date"
    },
    "tags": {
      "keywords": ["tags", "tag"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
      "type": "String"
    },
    "phone": {
      "keywords": ["phone"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
      "type": "Phone"
    },
    "website": {
      "keywords": ["website"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
      "type": "Url"
    },
    "contactPersonName": [],
    "email": {
      "keywords": ["email"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
      "type": "Email"
    },
    "parking": {
      "keywords": ["parking"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
      "type": "String"
    },
    "price": {
      "keywords": ["price", "cost", "fee"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
      "type": "String"
    },
    "category": {
      "keywords": ["category", "categories", "location type", "tags", "tag"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
      "type": "String"
    },
    "image": {
      "keywords": ["image", "images", "img", "pictures"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
      "type": "Url"
    },
    "type": {
      "keywords": ["type", "location type"],
      "stopKeywprds": ["street", "location"],
      keyHint: function(){

      },
      valueHint: function(){

      },
      "type": "String"
    },
    "isEvent": {
      "keywords": [],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
      "type": "String"
    },
    "accessibility": {
      "keywords": [],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
      "type": "String"
    },
    "reservationsRequired": {
      "keywords": ["website"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
      "type": "String"
    }
  }
}

module.exports = template;
