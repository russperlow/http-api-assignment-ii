const http = require('http');
const url = require('url');
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');
const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
    '/': htmlHandler.getIndex
}

const onRequest = (request, response) => {
    const parsedUrl = url.parse(request.url);
    const params = query.parse(parsedUrl.query);
    const acceptedTypes = request.headers.accept.split(',');

    if(urlStruct[parsedUrl.pathName]){
        urlStruct[parsedUrl.pathname](request, response, paramas, acceptedTypes);
    }else{
        urlStruct.notFound(request, response, params, acceptedTypes);
    }
}

http.createServer(onRequest).listen(port);