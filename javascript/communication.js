

    /*async function fetchDomainNameList() {

        //--- Hard coded values
        domainNames[0] = "riv.clinicalprocess.activity.request";
        domainNames[1] = "riv.clinicalprocess.healthcond.certificate";

        //--- 2do: Fetch domain names from Bitbucket
        //Source: https://bitbucket.org/rivta-domains/
        var repo_listing = "https://api.bitbucket.org/2.0/repositories/rivta-domains/?pagelen=100&max_depth=10"

        let response = await fetch(repo_listing);
        let data = await response.text();
  	    domainNames = add2domainNames(data.substring(216,249));
  	    domainNames = add2domainNames(data.substring(316,349));

        return domainNames;
    }*/

    /*function storeFetchedData(data) {
        fetchedData = data;
    }*/

    /*function add2domainNames(domainName) {
        domainNames.push(domainName);
  	    return domainNames;
    }*/

    /*function storedomainListPageString(pageContents) {
        domainListPageString = page_contents;
    }*/


    /*function getPageText(page_url) {
        var request = new XMLHttpRequest();
        //request.open('GET', 'http://www.xxxxx.com/pocket.txt', true);
        request.open('GET', page_url, true);
        request.send(null);
        var fetchedData = "";
        var page_content_string = request.responseText;
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                var type = request.getResponseHeader('Content-Type');
                //alert("request.responseText:\n" + request.responseText);
                fetchedData = String(request.responseText);
                console.log("request.onreadystatechange, page_content_string:\n" + page_content_string);
                return page_content_string;
                //if (type.indexOf("text") !== 1) {
                //    return request.responseText;
                //}
            }
           console.log("after request.onreadystatechange, fetchedData:\n" + fetchedData);
        }
        //var type = request.getResponseHeader('Content-Type');
        //page_content_string = String(request.responseText);
        console.log("return page_content_string:\n" + page_content_string);
        return page_content_string;
    }*/

/*
    function getNodeUrl(botId) {
        //nodeurl = "http://127.0.0.1:4001"
        nodeurl = ""
        switch (botId) {
            case "1":
                nodeurl = "https://callistabackend.herokuapp.com"
                break;
            case "2":
                //nodeurl = "http://127.0.0.1:4001"
                nodeurl = "http://127.0.0.1:5000"
                break;
        }
        return nodeurl;
    }


    var request = new Object();
    var response = new Object();

    function setRequest(requestNumber,responseTo,value,botId,language) {
        request.objectType = "ChatRequest"
        request.objectVersion = "1.0"
        request.requestNumber = requestNumber
        request.responseTo = responseTo
        request.value = value
        request.botId = botId
        request.language = language
    }

    function callChatBot(url,usermessage) {
        const params = {
            requestNumber: "0",
            responseTo: "0",
            value: usermessage,
            botId: "1",
            language: "sv"
        }

        endpoint = url + "/request";

        const http = new XMLHttpRequest();
        http.open('POST', endpoint, false);
        http.setRequestHeader('Content-type', 'application/json');
        http.send(JSON.stringify(params));
        //alert(JSON.stringify(params));

        return http.responseText;


    }
*/
