var config = {
    apiKey: "AIzaSyBvSgPt_jAoEgV-TUU9S-22EQ0kKya3G68",
    authDomain: "cost-per-use.firebaseapp.com",
    databaseURL: "https://cost-per-use.firebaseio.com",
    projectId: "cost-per-use",
    storageBucket: "",
    messagingSenderId: "547727000276"
};
firebase.initializeApp(config);

var database = firebase.database();
var balance = 325;
var date = Date.today().toString('MMMM dS, yyyy');
var daysLeft = Math.round(balance/6);
var cycled = 0;


$(".date").append("<h2> It is " + date + "<h2>");
$(".remaining").append("<p> Only $" + balance + " and " + daysLeft + " days to go!<p>");

$("button").on("click", function(){
    event.preventDefault();
    if (balance >= 0){
        var daysLeft = Math.round(balance / 6);
        // database.ref("/trains").push(newTrain);
        balance -= 6;
        cycled+=1;
        $(".remaining").text("Yay! Only $" + balance + " and " + daysLeft + " more days to go!");
        $(".cycled").text("You have ridden " + cycled + " days!");

    } else {
        $(".remaining").text("Yay! You made it!");
    }

});
