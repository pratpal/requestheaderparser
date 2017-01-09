`use strict`

function requestHeaderParser(){
   
    this.getUserIP = function(req){
        if (req.headers['x-forwarded-for']) {
            ip = req.headers['x-forwarded-for'].split(",")[0];
        } else if (req.connection && req.connection.remoteAddress) {
            ip = req.connection.remoteAddress;
        } else {
            ip = req.ip;
        }
        return ip;
    }

     this.getBrowserLanguage = function(req){
        return req.headers["accept-language"].split(',')[0];
     }

     this.getBrowserSoftware = function(req){
         return req.headers['user-agent'].split(') ')[0].split(' (')[1]
     }

    this.getHeaders = function(req){
       return {ipaddress:this.getUserIP(req),language:this.getBrowserLanguage(req),software:this.getBrowserSoftware(req)}
    }
}

module.exports = requestHeaderParser