

    async function fetchDomainNameList() {

        //--- Hard coded values
        domainNames[0] = "riv.clinicalprocess.activity.request";
        domainNames[1] = "riv.clinicalprocess.healthcond.certificate";

        //--- 2do: Fetch domain names from Bitbucket
        //Source: https://bitbucket.org/rivta-domains/
        //var link_2_repo_listing = "https://api.bitbucket.org/2.0/repositories/rivta-domains/"+domain_name+"/src/"+domain_hash_in_repo+"/?pagelen=100&max_depth=10&tag="+tag
        var repo_listing = "https://api.bitbucket.org/2.0/repositories/rivta-domains/?pagelen=100&max_depth=10"

        //repo_listing_page_contents = getPageText(repo_listing);

        /*fetch(repo_listing)
        .then(response => response.text())
        .then(data => {
  	    //console.log("data:\n" + data + " " + data.length);
  	    //domainNames.push(data.substring(216,249));
  	    domainNames = add2domainNames(data.substring(216,249));
  	    domainNames = add2domainNames(data.substring(316,349));
  	    //console.log(data.substring(1,16));
  	    //console.log("inside fetch, domainNames: " + domainNames + "  " + domainNames.length);
        }
        );*/

        /*fetch(repo_listing)
        .then(response => response.json())
        .then(data => {
            storeFetchedData(data);
            console.log(data);
            add2domainNames("domain-1");
            add2domainNames("domain-2");
        }
        );*/

        let response = await fetch(repo_listing);
        let data = await response.text();
  	    domainNames = add2domainNames(data.substring(216,249));
  	    domainNames = add2domainNames(data.substring(316,349));

  	    //console.log("outside of fetch, fetchedData: " + fetchedData + "  " + fetchedData.length);
  	    console.log("outside of fetch, domainNames: " + domainNames + "  " + domainNames.length);

        //console.log("fetchDomainNameList.domainListPageString: " + domainListPageString);
        //console.log("fetchDomainNameList.fetchedData: " + fetchedData);
        //console.log("fetchDomainNameList.domainNames: " + domainNames + " " + domainNames.length);

        //repo_listing_page_contents = fetch("https://URL/file").then((r)=>{r.text().then((d)=>{let CONTENT = d})});
        //console.log(repo_listing_page_contents.CONTENT);
        //alert(page_contents);
        //alert(String(page_contents));
        //alert(repo_listing);
        // Python code: downloaded_requests_get = requests.get(repo_listing, stream=True)

        return domainNames;
    }

    function storeFetchedData(data) {
        fetchedData = data;
    }

    function add2domainNames(domainName) {
        domainNames.push(domainName);
  	    console.log("add2domainNames, domainNames: " + domainNames + "  " + domainNames.length);
  	    return domainNames;
    }

    function jsonAdd2domainNames(domainName) {
        domainNames.push(domainName);
  	    //console.log("add2domainNames, domainNames: " + domainNames + "  " + domainNames.length);
  	    //console.log("jsonAdd2domainNames, json_data: " + json_data + "  " + json_data.length);
    }

    /*function storedomainListPageString(pageContents) {
        domainListPageString = page_contents;
    }*/

    function fetchDomainTagList(domainName) {
        const domainTags = [];

        //--- Hard coded values
        if (domainName == "riv.clinicalprocess.activity.request") {
            domainTags[0] = "1.0.2";
        } else if (domainName == "riv.clinicalprocess.healthcond.certificate") {
            domainTags[0] = "4.0.5";
        }

        //--- 2do: Fetch domain names from Bitbucket
        //Source: tags in dropdown list in a commit page for a domain, such as: https://bitbucket.org/rivta-domains/riv.clinicalprocess.healthcond.description/commits/
        //Better source: find "/tags/" in https://api.bitbucket.org/2.0/repositories/rivta-domains/riv.itintegration.engagementindex/refs/tags
        // The page link is derived from https://api.bitbucket.org/2.0/repositories/rivta-domains/?pagelen=100&max_depth=10
        // search for: "tags": {"href": and open link
        // Search for: "commits": {"href": which will find all tags

        return domainTags;
    }

    function getPageText(page_url) {
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
