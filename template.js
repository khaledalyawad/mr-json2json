var moment = require('moment');

function template() {
  return {
    "name": {
      "keywords":[ "name", "title", "summary", "event name", "landmark", "location name", "activity name"],
      "stopKeywprds": ["street", "contact", "person", "parent", "file", "partner"],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return true;
      }
    },
    "description": {
      "keywords":["content", "description"],
      "stopKeywprds": [],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return true;
      }
    },
    "summary": {
      "keywords":["summary"],
      "stopKeywprds": [],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return true;
      }
    },
    "lat": {
      "keywords": ["latitude" , "lat", "y"],
      "stopKeywprds": [],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return true;
      }
    },
    "long": {
      "keywords": ["longitude", "lng", "x"],
      "stopKeywprds": [],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return true;
      }
    },
    "postalCode": {
      "keywords": ["postal cd", "postal code", "zip code"],
      "stopKeywprds": [],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return true;
      }
    },
    "address": {
      "keywords": ["location", "locations", "address", "street no", "street number", "street name", "street type", "city", "postal cd", "postal code", "zip code", "country"],
      "stopKeywprds": ["id", "type"],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return true;
      }
    },
    "streetNumber": {
      "keywords": ["street no", "street number"],
      "stopKeywprds": [],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return true;
      }
    },
    "streetName": {
      "keywords": ["street name", "street type"],
      "stopKeywprds": [],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return true;
      }
    },
    "city": {
      "keywords": ["city"],
      "stopKeywprds": [],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return true;
      }
    },
    "country": {
      "keywords": ["country"],
      "stopKeywprds": [],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return true;
      }
    },
    "state": {
      "keywords": ["state"],
      "stopKeywprds": [],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return true;
      }
    },
    "startDate": {
      "keywords": ["start", "from"],
      "stopKeywprds": ["end", "first", "last", "to", "time", "range"],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return true;
      }
    },
    "endDate": {
      "keywords": ["end", "to"],
      "stopKeywprds": ["start", "first", "last", "from", "time", "range"],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return true;
      }
    },
    "startTime": {
      "keywords": ["time", "start", "from"],
      "stopKeywprds": ["end", "first", "last", "to", "range"],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return true;
      }
    },
    "endTime": {
      "keywords": ["time", "end", "to"],
      "stopKeywprds": ["start", "first", "last", "from", "range"],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return true;
      }
    },
    "tags": {
      "keywords": ["tags", "tag"],
      "stopKeywprds": [],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return true;
      }
    },
    "phone": {
      "keywords": ["phone"],
      "stopKeywprds": [],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return true;
      }
    },
    "website": {
      "keywords": ["website"],
      "stopKeywprds": [],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return true;
      }
    },
    "email": {
      "keywords": ["email"],
      "stopKeywprds": [],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return true;
      }
    },
    "parking": {
      "keywords": ["parking"],
      "stopKeywprds": [],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return true;
      }
    },
    "price": {
      "keywords": ["price", "cost", "fee"],
      "stopKeywprds": [],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return true;
      }
    },
    "category": {
      "keywords": ["category", "categories", "location type", "tags", "tag"],
      "stopKeywprds": [],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return true;
      }
    },
    "image": {
      "keywords": ["image", "images", "img", "pictures"],
      "stopKeywprds": [],
      keyHint: function(input){
        return true;
      },
      valueHint: function(){

      }
    },
    "type": {
      "keywords": ["type", "location type"],
      "stopKeywprds": ["street", "location"],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return true;
      }
    },
    "isEvent": {
      "keywords": [],
      "stopKeywprds": [],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return true;
      }
    },
    "accessibility": {
      "keywords": [],
      "stopKeywprds": [],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return true;
      }
    },
    "reservationsRequired": {
      "keywords": ["website"],
      "stopKeywprds": [],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return true;
      }
    }
  }
}

module.exports = template;
