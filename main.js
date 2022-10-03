console.log(4);

var product_quantitiy;
//camelCase naming method


function displayGreeting(name) {
    var time = new Date()
    //debugger;
    //console.log(time, typeof (time));
    hours = time.getHours()
    console.log(hours, typeof (hours));

    var greet = '';
    if (hours >= 12) {
        greet = 'Good afternoon '
    }
    else {
        greet = 'Good Morning '
    }

   document.getElementById('greet').innerHTML =
    greet ; 
}

var userName = 'rand';
//document.getElementById('greet').innerHTML += " "+userName; 

displayGreeting(userName);


var x = 5;
var y = '5';

console.log(x == y)

function callWindow(){
    window.alert('Hacked successfully');
}

