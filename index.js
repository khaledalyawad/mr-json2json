var decamelize = require('decamelize');
var _ = require('lodash');

module.exports = function(_template, _data) {

  var FINALRESULT = {};
  var template = _template || require('./template.js')
  var TEMPLATE = new template(); // for testing
  var data = _data || require('./data')[2];

  function traverseWapper (EXTERNALDATA, X) {
    (function traverse (EXTERNALDATA, X){

      function stopWordChecker(inputWord, stopKeywprdsArray){
        var result;
        for (var i = 0; i < stopKeywprdsArray.length; i++) {
          if (inputWord.indexOf(stopKeywprdsArray[i]) > -1) {
            result = '>>>>>>>>>>>dontAdd<<<<<<<<<<<<<';
          }
        }
        return result
      }

      function assignFinding(_EXTERNALDATA, _key, _FINALRESULT, _props){
        if (_EXTERNALDATA[_key]) {
          if (TEMPLATE[_props].keyHint(_cleanedKey) && TEMPLATE[_props].valueHint(_EXTERNALDATA[_key])) {
            _FINALRESULT[_props] = _FINALRESULT[_props] || {};
            _FINALRESULT[_props].values = _FINALRESULT[_props].values || [];

            _FINALRESULT[_props].values.push(_EXTERNALDATA[_key]);
            _FINALRESULT[_props].values = _.uniq(_FINALRESULT[_props].values)
            _FINALRESULT[_props].value = _FINALRESULT[_props].values.join(" , ")

          }
        }
      }

      for(key in EXTERNALDATA){
        for(props in TEMPLATE){
          var keywords = TEMPLATE[props].keywords
          var stopKeywprds = TEMPLATE[props].stopKeywprds
          var _cleanedKey = decamelize(key, " ").toLowerCase().replace(/[&\/\\#,+()$~%.'":*?<>{}_]/g,' ').replace(/[0-9]/g, '')

          if (typeof(EXTERNALDATA[key]) != 'object') {
            if(_cleanedKey == props.toLowerCase()){
              // console.log('---- key Match ---');
              // console.log(props+ ' : '+_cleanedKey+'       '+ props);
              assignFinding(EXTERNALDATA, key, FINALRESULT, props, _cleanedKey)
            }else if(_cleanedKey.indexOf(props.toLowerCase()) > -1){
              if(!stopWordChecker(_cleanedKey, stopKeywprds)) {
                // console.log('---- key indexOf ---');
                // console.log(props+ ' : '+_cleanedKey+'       '+ props);
                assignFinding(EXTERNALDATA, key, FINALRESULT, props, _cleanedKey)
              }
            } else if (EXTERNALDATA[key]) {
              // console.log('HERE2');
              if (TEMPLATE[props].keywords && TEMPLATE[props].keywords.length > 0) {
                for (var i = 0; i < keywords.length; i++) {
                  // console.log(TEMPLATE[props].hint)
                  if( _cleanedKey == keywords[i] ){
                    // console.log('---- keyword Match ---');
                    // console.log(props+ ' : '+_cleanedKey+'       '+keywords[i]);
                    assignFinding(EXTERNALDATA, key, FINALRESULT, props, _cleanedKey)
                  } else if (_cleanedKey.indexOf(keywords[i])> -1 && keywords[i].length > 2) {

                    if (!stopWordChecker(_cleanedKey, stopKeywprds)){
                      // console.log('---- keyword indexOf ---');
                      // console.log(props+ ' : '+_cleanedKey+'       '+keywords[i]);
                      assignFinding(EXTERNALDATA, key, FINALRESULT, props, _cleanedKey)
                    }
                  }
                }
              }
            }
          } else {
            traverse(EXTERNALDATA[key])
          }
        }
      }
    })(EXTERNALDATA, X)
  }

  traverseWapper(data)


  // for (i in data) {
  //   traverseWapper(data[i], i)
  // }

  if (!_data && !_template) {
    console.log(JSON.stringify(FINALRESULT, false, 2));
  }

  return FINALRESULT;

}
