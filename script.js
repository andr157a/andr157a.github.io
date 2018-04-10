var date = new Date();

var datemon = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

document.write("<p class='leftsidemenu'>Current date: " + datemon + "/" + month + " " +
    year + "</p>");