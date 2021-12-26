
async function initDomainNameList() {
    document.getElementById("select_version").style.display = "none";
    document.getElementById("start_service").style.display = "none";
    var select = document.getElementById('domain_name_list');

    var repo_listing = "https://api.bitbucket.org/2.0/repositories/rivta-domains/?pagelen=100&max_depth=10&sort=name"
    const response = await fetch(repo_listing);
    const rivta_domains = await response.json();

    add2ListElement(select, "")
    for (let i = 0; i < rivta_domains.values.length; i++) {
        if (rivta_domains.values[i].name.startsWith("riv") == true) {
            add2ListElement(select, rivta_domains.values[i].name)
            domain_tag_dictionary[ rivta_domains.values[i].name ] = rivta_domains.values[i].links.tags.href;
        }
    }
}

async function initDomainTagList() {
    document.getElementById("start_service").style.display = "none";
    var select = document.getElementById("domain_tag_list");

    var repo_listing_tags = domain_tag_dictionary[document.getElementById('domain_name_list').value]+"?pagelen=100&max_depth=10&sort=-name";
    const response = await fetch(repo_listing_tags);
    const domain_tags = await response.json();

    domain_tags.length = 0;
    while (select.length > 0) {
        select.removeChild(select.childNodes[0]);
    }

    add2ListElement(select, "")
    for (let i = 0; i < domain_tags.values.length; i++) {
        add2ListElement(select, domain_tags.values[i].name)
    }

    document.getElementById("select_version").style.display = "block";
}

function add2ListElement(listElement, listItem) {
    var option_element = document.createElement('option');
    option_element.textContent = listItem;
    option_element.value = listItem;
    listElement.appendChild(option_element);
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