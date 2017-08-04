function template() {
  return {
    "name": {
      "keywords":[ "name", "title", "summary", "event name", "landmark", "location name", "activity name"],
      "stopKeywprds": ["street", "contact", "person", "parent", "file", "partner"],
      keyHint: function(){

      },
      valueHint: function(){

      },
    },
    "description": {
      "keywords":["content", "description"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
    },
    "summary": {
      "keywords":["summary"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
    },
    "lat": {
      "keywords": ["latitude" , "lat", "y"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
    },
    "long": {
      "keywords": ["longitude", "lng", "x"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
    },
    "postalCode": {
      "keywords": ["postal cd", "postal code", "zip code"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
    },
    "address": {
      "keywords": ["location", "locations", "address", "street no", "street number", "street name", "street type", "city", "postal cd", "postal code", "zip code", "country"],
      "stopKeywprds": ["id", "type"],
      keyHint: function(){

      },
      valueHint: function(){

      },
    },
    "streetNumber": {
      "keywords": ["street no", "street number"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
    },
    "streetName": {
      "keywords": ["street name", "street type"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
    },
    "city": {
      "keywords": ["city"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
    },
    "country": {
      "keywords": ["country"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
    },
    "state": {
      "keywords": ["state"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
    },
    "startDate": {
      "keywords": ["start", "from"],
      "stopKeywprds": ["end", "first", "last", "to", "time", "range"],
      keyHint: function(){

      },
      valueHint: function(){

      },
    },
    "endDate": {
      "keywords": ["end", "to"],
      "stopKeywprds": ["start", "first", "last", "from", "time", "range"],
      keyHint: function(){

      },
      valueHint: function(){

      },
    },
    "startTime": {
      "keywords": ["time", "start", "from"],
      "stopKeywprds": ["end", "first", "last", "to", "range"],
      keyHint: function(){

      },
      valueHint: function(){

      },
    },
    "endTime": {
      "keywords": ["time", "end", "to"],
      "stopKeywprds": ["start", "first", "last", "from", "range"],
      keyHint: function(){

      },
      valueHint: function(){

      },
    },
    "tags": {
      "keywords": ["tags", "tag"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
    },
    "phone": {
      "keywords": ["phone"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
    },
    "website": {
      "keywords": ["website"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
    },
    "contactPersonName": [],
    "email": {
      "keywords": ["email"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
    },
    "parking": {
      "keywords": ["parking"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
    },
    "price": {
      "keywords": ["price", "cost", "fee"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
    },
    "category": {
      "keywords": ["category", "categories", "location type", "tags", "tag"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
    },
    "image": {
      "keywords": ["image", "images", "img", "pictures"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
    },
    "type": {
      "keywords": ["type", "location type"],
      "stopKeywprds": ["street", "location"],
      keyHint: function(){

      },
      valueHint: function(){

      },
    },
    "isEvent": {
      "keywords": [],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
    },
    "accessibility": {
      "keywords": [],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      },
    },
    "reservationsRequired": {
      "keywords": ["website"],
      "stopKeywprds": [],
      keyHint: function(){

      },
      valueHint: function(){

      }
    }
  }
}

module.exports = template;
