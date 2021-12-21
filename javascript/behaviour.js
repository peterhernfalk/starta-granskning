
function initDomainNameList() {
    document.getElementById("select_version").style.display = "none";
    document.getElementById("start_service").style.display = "none";

    var select = document.getElementById('domain_name_list');
    select.innerHTML = "";

    var domains = fetchDomainNameList();
    //domain_1 = "riv.clinicalprocess.activity.request";
    //domain_2 = "clinicalprocess.healthcond.certificate";

    for (let i = 0; i < domains.length; i++) {
        var el=document.createElement('option');
        el.textContent = domains[i];
        el.value = domains[i];
        select.appendChild(el);
    }


    /*var el1=document.createElement('option');
    el1.textContent = domain_1;
    el1.value = domain_1;
    select.appendChild(el1);
    var el2=document.createElement('option');
    el2.textContent = domain_2;
    el2.value = domain_2;
    select.appendChild(el2);*/

    //alert(domains.length);
}

function initDomainTagList() {
    document.getElementById("start_service").style.display = "none";

    //fetchDomainTagList();

    tag_1 = "1.0.2";
    tag_2 = "4.0.5";

    var select = document.getElementById('domain_tag_list');
    select.innerHTML = "";
    var el1=document.createElement('option');

    el1.textContent = tag_1;
    el1.value = tag_1;
    select.appendChild(el1);
    var el2=document.createElement('option');
    el2.textContent = tag_2;
    el2.value = tag_2;
    select.appendChild(el2);

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