
async function initDomainNameList() {
    document.getElementById("select_version").style.display = "none";
    document.getElementById("start_service").style.display = "none";

    var select = document.getElementById('domain_name_list');
    select.innerHTML = "";

    var repo_listing = "https://api.bitbucket.org/2.0/repositories/rivta-domains/?pagelen=100&max_depth=10&sort=name"

    const response = await fetch(repo_listing);
    const rivta_domains = await response.json();
    console.log("rivta_domains:");
    console.log(rivta_domains);
    for (let i = 0; i < rivta_domains.values.length; i++) {
        if (rivta_domains.values[i].name.startsWith("riv") == true) {
            jsonAdd2domainNames(rivta_domains.values[i].name);
        }
    }

    for (let i = 0; i < domainNames.length; i++) {
        var option_element = document.createElement('option');
        option_element.textContent = domainNames[i];
        option_element.value = domainNames[i];
        select.appendChild(option_element);
    }
}

function initDomainTagList() {
    document.getElementById("start_service").style.display = "none";

    var select = document.getElementById('domain_tag_list');
    select.innerHTML = "";

    var domain = String(document.getElementById('domain_name_list').value);
    var tags = fetchDomainTagList(domain);
    for (let i = 0; i < tags.length; i++) {
        var option_element = document.createElement('option');
        option_element.textContent = tags[i];
        option_element.value = tags[i];
        select.appendChild(option_element);
    }

    document.getElementById("select_version").style.display = "block";
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