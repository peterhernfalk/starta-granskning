
function initDomainNameList() {
    document.getElementById("select_version").style.display = "none";
    document.getElementById("start_service").style.display = "none";

    var select = document.getElementById('domain_name_list');
    select.innerHTML = "";

    var domains = fetchDomainNameList();
    for (let i = 0; i < domains.length; i++) {
        var option_element = document.createElement('option');
        option_element.textContent = domains[i];
        option_element.value = domains[i];
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