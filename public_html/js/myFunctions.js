function loadRest() {
    url = "rest/resources/manufacturer.json";
    $.getJSON(url, function(data) {
        content = "<div id='restDataList'><table border=0><tr>";
        for (i = 0; i < 15; i++) {
            content += "<td><img src='" + data[i].zip + "' width=130 height=150><a id='listItem' onclick='showDetails(" + data[i].manufacturerId + ")' class='btn btn-primary'>" + data[i].name + " &raquo;&raquo;</a></td></tr>";
        }
        content += "</table></div>";
        $("#rest").html(content);
    });
}

function showDetails(id) {
    url = "rest/resources/id" + id+".json";
    $.getJSON(url, function(data) {
       $("#restName").text(data.name);
       list = "";
       for (i = 0; i < 8; i++) {
           list +="<p>"+data.rdates[i].country +" - "+ data.rdates[i].date +"</p>";
       }
       $("#restRep").html(list);
       //$("#restEmail").text(data.email);
       //$("#restPhone").text(data.phone);
    });
    dataSwitch();
}

function dataSwitch() {
    $('#restDataList').toggle(700, 'easeOutExpo');
    $('#restDetails').toggle(700, 'easeOutExpo');
}


