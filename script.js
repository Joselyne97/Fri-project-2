function check() {
var input = document.getElementById("user").value;
var d = new Date( input );
year = d.getFullYear();
month = d.getMonth();
month = month+1;
dayi = d.getDate();
console.log('year');
var gender = document.forms["birthday"].getElementsByTagName("select");
var gender = document.getElementById("selection").form.id;
  document.getElementById("nom").innerHTML = gender;
console.log(gender);
var century= (yyyy-1)/100 + 1;
var cc=parseFloat(century);
var day= parseFloat(( ((cc/4) -2*cc-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dayi )) % 7;
var day=day.toFixed(0);

if(day==0 && gender=='male'){
    document.getElementById("nom").innerHTML ="Kwasi";
}
else if(day==1 && gender=='male'){
    document.getElementById("nom").innerHTML ="Kwadwo";
}
else if(day==2 && gender=='male'){
    document.getElementById("nom").innerHTML ="Kwabena";
}
else if(day==3 && gender=='male'){
    document.getElementById("nom").innerHTML ="Kwaku";
}
else if(day==4 && gender=='male'){
    document.getElementById("nom").innerHTML ="Yaw";
}
else if(day==5 && gender=='male'){
    document.getElementById("nom").innerHTML ="Kofi";
}
else if(day==6 && gender=='male'){
    document.getElementById("nom").innerHTML ="Kwame";
}
else if(day==0 && gender=='female'){
    document.getElementById("nom").innerHTML ="Akosua";
}
else if(day==1 && gender=='female'){
    document.getElementById("nom").innerHTML ="Adwoa";
}
else if(day==2 && gender=='female'){
    document.getElementById("nom").innerHTML ="Abenaa";
}
else if(day==3 && gender=='female'){
    document.getElementById("nom").innerHTML ="Akua";
}
else if(day==4 && gender=='female'){
    document.getElementById("nom").innerHTML ="Yaa";
}
else if(day==5 && gender=='female'){
    document.getElementById("nom").innerHTML ="Afua";
}
else if(day==6 && gender=='female'){
    document.getElementById("nom").innerHTML ="Ama";
}
}