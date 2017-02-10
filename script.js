window.onload = function(){
  timer();
  backgr();
}
function timer(){
        var date = new Date();
        var hours = date.getHours();
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        var month = new Array(12);
        month[0] = "Jan";
        month[1] = "Feb";
        month[2] = "Mar";
        month[3] = "Apr";
        month[4] = "May";
        month[5] = "Jun";
        month[6] = "Jul";
        month[7] = "Aug";
        month[8] = "Seb";
        month[9] = "Oct";
        month[10] = "Nov";
        month[11] = "Dec";
        var day = weekday[date.getDay()]+", "+date.getDate()+" "+month[date.getMonth()]+" "+date.getFullYear();

        if(date.getMinutes()<10){
            var minute = '0'+date.getMinutes();
        }
        else{
            var minute = date.getMinutes();
        }
        if(date.getSeconds()<10){
           var second = '0'+date.getSeconds();
        }
        else{
          var second = date.getSeconds();
        }
        var time = date.getHours()+':'+minute+':'+second;
        if(hours<20 && hours>=8){
            //document.getElementById("header_theme").style.background = "#FFCC99";
            document.getElementById("date").style.color = "#000000";
            document.getElementById("timer").style.color = "#000000";
            document.getElementById("imgmenu").style.backgroundImage = 'url(img/compasday.png)';
            //document.getElementById("autoslider").style.backgroundImage = 'url(img/day.jpg)';
            /*document.getElementById("home").style.color = "#FFFFFF";
            document.getElementById("tours").style.color = "#000000";
            document.getElementById("hotels").style.color = "#000000";
            document.getElementById("contacts").style.color = "#000000"; */
            document.getElementById("join").style.color = "#000000";
            document.getElementById("login").style.color = "#000000";
            document.getElementById("search").style.backgroundImage = 'url(img/header/search.png)';
            document.getElementById("searchblock").style.backgroundImage ="url(img/header/background.png)";
            document.getElementById("loginblock1").style.color = "#000000";
            document.getElementById("loginblock2").style.color = "#000000";
            document.getElementById("loginblock3").style.color = "#000000";
            document.getElementById("loginblock3").style.color = "#000000";
            document.getElementById("loginblock").style.backgroundImage = 'url(img/header/background.png)';

        }
        else{
            document.getElementById("header_theme").style.background = "#663399";
            document.getElementById("date").style.color = "#FFFFFF";
            document.getElementById("timer").style.color = "#FFFFFF";
            document.getElementById("imgmenu").style.backgroundImage = 'url(img/compasnight.png)';
            //document.getElementById("autoslider").style.backgroundImage = 'url(img/night.jpg)';
            /*document.getElementById("home").style.color = "#FFFFFF";
            document.getElementById("tours").style.color = "#FFFFFF";
            document.getElementById("hotels").style.color = "#FFFFFF";
            document.getElementById("contacts").style.color = "#FFFFFF";*/
            document.getElementById("join").style.color = "#FFFFFF";
            document.getElementById("login").style.color = "#FFFFFF";
            document.getElementById("search").style.backgroundImage = 'url(img/header/search_night.png)';
            document.getElementById("searchblock").style.background = "#663399";
            document.getElementById("loginblock1").style.color = "#FFFFFF";
            document.getElementById("loginblock2").style.color = "#FFFFFF";
            document.getElementById("loginblock3").style.color = "#FFFFFF";
            document.getElementById("loginblock").style.background = "#663399";
        }
    document.getElementById("date").innerHTML = day;
    document.getElementById("timer").innerHTML = time;
    window.setTimeout(timer, 1000);
}
function backgr(){
    var date = new Date();
    var hours = date.getHours();
    if(hours<20 && hours>=8){
        document.getElementById("autoslider").style.backgroundImage = 'url(img/day.jpg)';
    }
    else{
        document.getElementById("autoslider").style.backgroundImage = 'url(img/night.jpg)';
    }
}
function ahome(){
    document.getElementById("arrow").style.transform = "rotate(0deg)";
}
function atours(){
    document.getElementById("arrow").style.transform = "rotate(90deg)";
}
function ahotels(){
    document.getElementById("arrow").style.transform = "rotate(270deg)";
}
function acontacts(){
    document.getElementById("arrow").style.transform = "rotate(180deg)";
}
var slider;
function sliderfun(slider){
    var date = new Date();
    var hours = date.getHours();
    switch(slider.id){
        case 'slider1':
        if(hours<20 && hours>=8){
            document.getElementById("autoslider").style.backgroundImage = 'url(img/background/day/1.jpg)'
            break;
        }
        else{
            document.getElementById("autoslider").style.backgroundImage = 'url(img/background/night/1.jpg)'
            break;
        }
        case 'slider2':
        if(hours<20&& hours>=8){
            document.getElementById("autoslider").style.backgroundImage = 'url(img/background/day/2.jpg)'
            break;
        }
        else{
            document.getElementById("autoslider").style.backgroundImage = 'url(img/background/night/2.jpg)'
            break;
        }
        case 'slider3':
        if(hours<20&& hours>=8){
            document.getElementById("autoslider").style.backgroundImage = 'url(img/background/day/3.jpg)'
            break;
        }
        else{
            document.getElementById("autoslider").style.backgroundImage = 'url(img/background/night/3.jpg)'
            break;
        }
        case 'slider4':
        if(hours<20 && hours>=8){
            document.getElementById("autoslider").style.backgroundImage = 'url(img/background/day/4.jpg)'
            break;
        }
        else{
            document.getElementById("autoslider").style.backgroundImage = 'url(img/background/night/4.jpg)'
            break;
        }
        case 'slider5':
        if(hours<20 && hours>=8){
            document.getElementById("autoslider").style.backgroundImage = 'url(img/background/day/5.jpg)'
            break;
        }
        else{
            document.getElementById("autoslider").style.backgroundImage = 'url(img/background/night/5.jpg)'
            break;
        }
        case 'slider6':
        if(hours<20 && hours>=8){
            document.getElementById("autoslider").style.backgroundImage = 'url(img/background/day/6.jpg)'
            break;
        }
        else{
            document.getElementById("autoslider").style.backgroundImage = 'url(img/background/night/6.jpg)'
            break;
        }
        default:
            break;
    }
}
var sub;
var a=1;
function submenu(sub){
  var temp;
  switch(sub.id){
    case 'home':
       document.getElementById("sb").style.display = "none";
       if(a!=0){
            document.getElementById("submenu").style.transform = "rotateX(0deg)";
            a = 0;
       }
       else{
            document.getElementById("submenu").style.transform = "rotateX(90deg)";
            a = 1;
       }
       temp = document.getElementById("htext");
       temp.innerHTML = "New!!!";
       document.getElementById("promo").style.display = "block";
       document.getElementById("imgsub").style.backgroundImage ="url(img/menu/home.png)";
       break;

    case 'tours':
       document.getElementById("promo").style.display = "none";
       document.getElementById("sb").style.display = "block";
       document.getElementById("subbutton4").style.display ="block";
       temp = document.getElementById("htext");
       temp.innerHTML = "Tours";
       temp = document.getElementById("subtext1");
       temp.innerHTML = "Country";
       temp = document.getElementById("subtext2");
       temp.innerHTML = "Categoties";
       temp = document.getElementById("subtext3");
       temp.innerHTML = "Gallery";
       temp = document.getElementById("subtext4");
       temp.innerHTML = "Visa";
       document.getElementById("imgsub").style.backgroundImage ="url(img/menu/tours.png)";
       document.getElementById("subbutton1").style.backgroundImage ="url(img/menu/country.png)";
       document.getElementById("subbutton2").style.backgroundImage ="url(img/menu/categories.png)";
       document.getElementById("subbutton3").style.backgroundImage ="url(img/menu/gallery.png)";
       document.getElementById("subbutton4").style.backgroundImage ="url(img/menu/visa.png)";
       if(a!=2){
       document.getElementById("submenu").style.transform = "rotateX(0deg)";
       a = 2;
       }
       else{
       document.getElementById("submenu").style.transform = "rotateX(90deg)";
       a = 3;
       }
       break;
    case 'contacts':
       document.getElementById("promo").style.display = "none";
       document.getElementById("sb").style.display = "block";
       document.getElementById("subbutton4").style.display ="none";
       temp = document.getElementById("htext");
       temp.innerHTML = "Contacts";
       temp = document.getElementById("subtext1");
       temp.innerHTML = "Message";
       temp = document.getElementById("subtext2");
       temp.innerHTML = "FAQ";
       temp = document.getElementById("subtext3");
       temp.innerHTML = "About Us";
       document.getElementById("imgsub").style.backgroundImage ="url(img/menu/contacts.png)";
       document.getElementById("subbutton1").style.backgroundImage ="url(img/menu/message.png)";
       document.getElementById("subbutton2").style.backgroundImage ="url(img/menu/faq.png)";
       document.getElementById("subbutton3").style.backgroundImage ="url(img/menu/aboutus.png)";
       document.getElementById("submenu").style.transform = "rotateX(0deg)";
       if(a!=4){
       document.getElementById("submenu").style.transform = "rotateX(0deg)";
       a = 4;
       }
       else{
       document.getElementById("submenu").style.transform = "rotateX(90deg)";
       a = 5;
       }
       break;
    case 'hotels':
       document.getElementById("promo").style.display = "none";
       document.getElementById("sb").style.display = "block";
       document.getElementById("subbutton4").style.display ="block";
       temp = document.getElementById("htext");
       temp.innerHTML = "Hotels";
       temp = document.getElementById("subtext1");
       temp.innerHTML = "Country";
       temp = document.getElementById("subtext2");
       temp.innerHTML = "Categoties";
       temp = document.getElementById("subtext3");
       temp.innerHTML = "Gallery";
       temp = document.getElementById("subtext4");
       temp.innerHTML = "Book a room";
       document.getElementById("imgsub").style.backgroundImage ="url(img/menu/hotels.png)";
       document.getElementById("subbutton1").style.backgroundImage ="url(img/menu/country.png)";
       document.getElementById("subbutton2").style.backgroundImage ="url(img/menu/hcategories.png)";
       document.getElementById("subbutton3").style.backgroundImage ="url(img/menu/hgallery.png)";
       document.getElementById("subbutton4").style.backgroundImage ="url(img/menu/room.png)";
       document.getElementById("submenu").style.transform = "rotateX(0deg)";
       if(a!=6){
       document.getElementById("submenu").style.transform = "rotateX(0deg)";
       a = 6;
       }
       else{
       document.getElementById("submenu").style.transform = "rotateX(90deg)";
       a = 7;
       }
       break;
  }
}
var s = 1;
var l = 1;
var j = 1;
function searchbutton(){
  if(s!=0){
    document.getElementById("searchblock").style.top ="55px";
    document.getElementById("loginblock").style.top ="-100px";
    s = 0;
    l = 1;
  }
  else{
    document.getElementById("searchblock").style.top ="-55px";
    s = 1;
  }

}
function loginbutton(){
  if(l!=0){
    document.getElementById("loginblock").style.top ="55px";
    document.getElementById("searchblock").style.top ="-55px";
    l = 0;
    s = 1;
  }
  else{
    document.getElementById("loginblock").style.top ="-100px";
    l = 1;
  }
}
