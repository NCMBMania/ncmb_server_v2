"use strict";

var crypto  = require("crypto");
var Url     = require("url");
var request = require("superagent");

module.exports.create = create;

function create(url, method, query, timestamp,
                signatureMethod, signatureVersion, fqdn,
                apikey, clientkey,dataResponse)
{
  var parsedUrl = Url.parse(url);

  if(method === "DEL") method = "DELETE";

  var data = {
    "SignatureMethod":        signatureMethod || this.signatureMethod,
    "SignatureVersion":       signatureVersion || this.signatureVersion,
    "X-NCMB-Application-Key": apikey || this.apikey,
    "X-NCMB-Timestamp":       (timestamp || new Date().toISOString())
  };
  Object.keys(query).forEach(function(key){
    var q = query[key];
    if(typeof q === "object") q = JSON.stringify(q);
    data[key] = encodeURIComponent(q);
  });

  var sigStr = [
    method,
    fqdn || this.fqdn,
    parsedUrl.path,
    Object.keys(data).sort().map(function(key){
      return [key, data[key]].join("=");
    }).join("&")
  ].join("\n");
  if (dataResponse) sigStr+= "\n" + dataResponse;
  if (window && window.SIGNATURE_SERVER) {
    return request
      .post(window.SIGNATURE_SERVER)
      .send({
        body: sigStr
      });
  } else {
    var sig = crypto
      .createHmac("SHA256", clientkey || this.clientkey)
      .update(sigStr).digest("base64");
  }
  return sig;
};
