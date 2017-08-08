# MR-JSON2JSON
![image](./mr-json2json.png)
converts json to json using node, just construct your own template, keywords and hint and get your json. Use it to prepare and clean your data



### Installation
```
npm install --save mr-json2json
```

### Requiring:
```
var mrjson2json = require('mr-json2json');
```

#### Sample data
```
data = {
    "ID,N,10,0": 131,
    "ADDR_INFO,C,254": "",
    "TITLE,C,250": "Textile Museum of Canada",
    "CATEGORY,C,150": "Museum",
    "PHONE,C,50": "416-366-3561",
    "EMAIL,C,100": "",
    "WEBSITE,C,254": "www.textilemuseum.ca",
    "ADDRESS,C,131": "55 Centre Ave",
    "POSTAL_CD,C,7": "M5G 2H5",
    "X,N,11,4": 313927.085,
    "Y,N,11,4": 4834743.652,
    "LONGITUDE,N,14,11": -79.3866557106,
    "LATITUDE,N,14,11": 43.6545873402,
    "OBJECTID,N,20,0": 131,
    "SRC_ADDRSS,C,100": "55 Centre Avenue",
    "LEVEL,N,5,0": 3,
    "DESCRIPTIO,C,254": "With more than 13,000 objects from more than 200 countries and regions, the Textile Museum of Canada celebrates cultural diversity through traditional fabrics, garments, carpets and related artifacts such as beadwork and basketry."
}
```


### Template
```
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
        return validator.isFloat(input.toString() , { min: -90, max: 90 })
      }
    },
    "long": {
      "keywords": ["longitude", "lng", "x"],
      "stopKeywprds": [],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return validator.isFloat(input.toString() , { min: -180, max: 180 })
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
        return moment(input)._isValid;
      }
    },
    "endDate": {
      "keywords": ["end", "to"],
      "stopKeywprds": ["start", "first", "last", "from", "time", "range"],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return moment(input)._isValid;
      }
    },
    "startTime": {
      "keywords": ["time", "start", "from"],
      "stopKeywprds": ["end", "first", "last", "to", "range"],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return moment(input)._isValid;
      }
    },
    "endTime": {
      "keywords": ["time", "end", "to"],
      "stopKeywprds": ["start", "first", "last", "from", "range"],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return moment(input)._isValid;
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
        return validator.isMobilePhone(input, 'any');
      }
    },
    "website": {
      "keywords": ["website"],
      "stopKeywprds": [],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return validator.isURL(input);
      }
    },
    "email": {
      "keywords": ["email"],
      "stopKeywprds": [],
      keyHint: function(input){
        return true;
      },
      valueHint: function(input){
        return validator.isEmail(input);
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
      valueHint: function(input){
        return validator.isURL(input);
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

```

### Usage
```
mrjson2json(template, data);
```
