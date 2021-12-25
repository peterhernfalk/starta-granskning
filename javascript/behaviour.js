
async function initDomainNameList() {
    document.getElementById("select_version").style.display = "none";
    document.getElementById("start_service").style.display = "none";

    var select = document.getElementById('domain_name_list');
    select.innerHTML = "";

    var repo_listing = "https://api.bitbucket.org/2.0/repositories/rivta-domains/?pagelen=100&max_depth=10&sort=name"

    const response = await fetch(repo_listing);
    const rivta_domains = await response.json();
    //console.log("rivta_domains:");
    //console.log(rivta_domains);

    jsonAdd2domainNames("");
    for (let i = 0; i < rivta_domains.values.length; i++) {
        if (rivta_domains.values[i].name.startsWith("riv") == true) {
            jsonAdd2domainNames(rivta_domains.values[i].name);
            domain_tag_dictionary[ rivta_domains.values[i].name ] = rivta_domains.values[i].links.tags.href;
        }
    }
    //console.log("initDomainNameList.domain_tag_dictionary: " + domain_tag_dictionary);
    //console.log(domain_tag_dictionary);

    for (let i = 0; i < domainNames.length; i++) {
        var option_element = document.createElement('option');
        option_element.textContent = domainNames[i];
        option_element.value = domainNames[i];
        select.appendChild(option_element);
    }
}

async function initDomainTagList() {
    document.getElementById("start_service").style.display = "none";

    var select = document.getElementById("domain_tag_list");

    var repo_listing_tags = domain_tag_dictionary[document.getElementById('domain_name_list').value]+"?pagelen=100&max_depth=10&sort=-name";

    const response = await fetch(repo_listing_tags);
    const domain_tags = await response.json();

    domainTags.length = 0;
    while (select.length > 0) {
        select.removeChild(select.childNodes[0]);
    }

    jsonAdd2domainTags("");
    for (let i = 0; i < domain_tags.values.length; i++) {
        jsonAdd2domainTags(domain_tags.values[i].name);
    }
    for (let i = 0; i < domainTags.length; i++) {
        var option_element = document.createElement('option');
        option_element.textContent = domainTags[i];
        option_element.value = domainTags[i];
        select.appendChild(option_element);
    }

    document.getElementById("select_version").style.display = "block";
}


function fetchDomainTagList(domainName) {
    const domainTags = [];

    //--- Hard coded values
    if (domainName == "riv.clinicalprocess.activity.request") {
        domainTags[0] = "1.0.2";
    } else if (domainName == "riv.clinicalprocess.healthcond.certificate") {
        domainTags[0] = "4.0.5";
    }

    //console.log("fetchDomainTagList:\n" + domain_tag_dictionary);


    //--- 2do: Fetch domain names from Bitbucket
    //Source: tags in dropdown list in a commit page for a domain, such as: https://bitbucket.org/rivta-domains/riv.clinicalprocess.healthcond.description/commits/
    //Better source: find "/tags/" in https://api.bitbucket.org/2.0/repositories/rivta-domains/riv.itintegration.engagementindex/refs/tags
    // The page link is derived from https://api.bitbucket.org/2.0/repositories/rivta-domains/?pagelen=100&max_depth=10
    // search for: "tags": {"href": and open link
    // Search for: "commits": {"href": which will find all tags

    return domainTags;
}

function jsonAdd2domainNames(domainName) {
    domainNames.push(domainName);
}

function jsonAdd2domainTags(domainTag) {
    domainTags.push(domainTag);
}


function startIgranskning() {
    var domain = document.getElementById("domain_name_list").value
    var tag = document.getElementById("domain_tag_list").value
    var parameters = "?domain=" + domain + "&tag=" + tag
    window.open(i_service_domain+i_service+parameters);
}

function startTgranskning() {
    var domain = document.getElementById("domain_name_list").value
    var tag = document.getElementById("domain_tag_list").value
    var parameters = "?domain=" + domain + "&tag=" + tag
    window.open(t_service_domain+t_service+parameters);
}