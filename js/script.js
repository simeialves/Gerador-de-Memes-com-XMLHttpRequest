var API_URL = "https://api.imgflip.com/get_memes";

function reqListener(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200)
        {
             let result = JSON.parse(xhttp.responseText);
             let items = result.data.memes;
             items = items.sort(function () { return 0.5 - Math.random(); });
             let htmlToAppend = "";
             items.forEach(function (item) {
                 let tr = "<tr>"
                  tr += "<td><img width='150px' src= '" + item.url + "' title='" + item.name + "'/></td>";                  
                  tr += "<td>" + item.name + "</td>";                 
                  tr += "<td><a target='_blank' href='" + item.url + "'>" + item.url + "</a></td>";
                  tr += "<td>" + item.width + "</td>";                 
                  tr += "<td>" + item.height + "</td>";
                  tr += "</tr>"
                 htmlToAppend += tr;
             });
                         
             tbodyConteudo = document.getElementById("conteudo");
             tbodyConteudo.innerHTML = htmlToAppend;
        }
    }
    xhttp.open("GET", API_URL, true);
    xhttp.send();
}