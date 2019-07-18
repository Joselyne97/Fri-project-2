function check() {
var input = document.getElementById(user).value;
var d = new Date( input );
year = d.getFullYear();
month = d.getMonth();
month = month+1;
day@1 = d.getDate();
document.forms["birthday"].getElementsByTagName("option");
var dd=parseInt(prompt("Enter the date:"));
var mm=parseInt(prompt("Enter the month:"));
var yyyy=parseInt(prompt("Enter the year:"));
var gender=prompt("Enter the gender:");
var century= (yyyy-1)/100 + 1;
var cc=parseFloat(century);
var day= parseFloat(( ((cc/4) -2*cc-1) + ((5*yyyy/4) ) + ((26*(mm+1)/10)) + dd )) % 7;
var day=(day.toFixed(0));

if(day==0 && gender=='male'){
alert("The name is Kwasi");
}
else if(day==1 && gender=='male'){
alert("The name is Kwadwo");
}
else if(day==2 && gender=='male'){
alert("The name is Kwabena")
}
else if(day==3 && gender=='male'){
alert("The name is Kwaku");
}
else if(day==4 && gender=='male'){
alert("The name is Yaw");
}
else if(day==5 && gender=='male'){
alert("The name is  Kofi");
}
else if(day==6 && gender=='male'){
alert("The name is Kwame");
}
else if(day==0 && gender=='female'){
alert("The name is Akosua");
}
else if(day==1 && gender=='female'){
alert("The name is Adwoa");
}
else if(day==2 && gender=='female'){
alert("The name is Abenaa");
}
else if(day==3 && gender=='female'){
alert("The name is Akua");
}
else if(day==4 && gender=='female'){
alert("The name is Yaa");
}
else if(day==5 && gender=='female'){
alert("The name is Afua");
}
else if(day==6 && gender=='female'){
alert("The name is Ama");
}
}