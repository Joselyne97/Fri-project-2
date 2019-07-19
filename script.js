function check() {
var input = document.getElementById("user").value;
var d = new Date( input );
year = d.getFullYear();
month = d.getMonth();
month = month+1;
dayi = d.getDate();
console.log(day);
var gender = document.getElementById("selection").value;
var century= (year/100) + 1;
var cc=parseFloat(century);
var day= parseFloat(( ((cc/4) -2*cc-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dayi )) % 7;
var day=day.toFixed(0);

if(input='' || gender =='' ){
    document.getElementById('nom').innerHTML ='you can enter the the information required';
}
else if(day==0 && gender=='Male'){
    document.getElementById('nom').innerHTML ='Kwasi';
}
else if(day==1 && gender=='Male'){
    document.getElementById('nom').innerHTML ='Kwadwo';
}
else if(day==2 && gender=='Male'){
    document.getElementById('nom').innerHTML ='Kwabena';
}
else if(day==3 && gender=='Male'){
    document.getElementById('nom').innerHTML ='Kwaku';
}
else if(day==4 && gender=='Male'){
    document.getElementById('nom').innerHTML ='Yaw';
}
else if(day==5 && gender=='Male'){
    document.getElementById('nom').innerHTML ='Kofi';
}
else if(day==6 && gender=='Male'){
    document.getElementById("nom").innerHTML ="Kwame";
}
else if(day==0 && gender=='Female'){
    document.getElementById('nom').innerHTML ='Akosua';
}
else if(day==1 && gender=='Female'){
    document.getElementById('nom').innerHTML ='Adwoa';
}
else if(day==2 && gender=='Female'){
    document.getElementById('nom').innerHTML ='Abenaa';
}
else if(day==3 && gender=='Female'){
    document.getElementById('nom').innerHTML ='Akua';
}
else if(day==4 && gender=='Female'){
    document.getElementById('nom').innerHTML ='Yaa';
}
else if(day==5 && gender=='Female'){
    document.getElementById('nom').innerHTML ='Afua';
}
else if(day==6 && gender=='Female'){
    document.getElementById('nom').innerHTML ='Ama';
}
}