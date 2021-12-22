
    function fetchDomainNameList() {
        const domainNames = [];
        domainNames[0] = "riv.clinicalprocess.activity.request";
        domainNames[1] = "riv.clinicalprocess.healthcond.certificate";
        return domainNames;
    }

    function fetchDomainTagList(domainName) {
        const domainTags = [];
        if (domainName == "riv.clinicalprocess.activity.request") {
            domainTags[0] = "1.0.2";
        } else if (domainName == "riv.clinicalprocess.healthcond.certificate") {
            domainTags[0] = "4.0.5";
        }
        return domainTags;
    }

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
