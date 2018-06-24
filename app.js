var config = {
    apiKey: "AIzaSyDjwRIylT1T1Ze8yX5JNh4jqfho7ggtAOs",
    authDomain: "cost-per-use-452b1.firebaseapp.com",
    databaseURL: "https://cost-per-use-452b1.firebaseio.com",
    projectId: "cost-per-use-452b1",
    storageBucket: "cost-per-use-452b1.appspot.com",
    messagingSenderId: "983429374152"
};
firebase.initializeApp(config);

var database = firebase.database();

var balance;
var date = Date.today().toString('MMMM dS, yyyy');
var daysLeft;
var cycled = 0;


database.ref().on("value", function (snapshot) {
    balance = snapshot.val().balance;
    daysLeft = Math.round(balance / 6)
    console.log(balance);
    $(".remaining").append("<p> Only $" + balance + " and " + daysLeft + " days to go!<p>");
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});


$(".date").append("<h2> It is " + date + "<h2>");


$("button").on("click", function(){
    event.preventDefault();
    if (balance >= 0){
        var daysLeft = Math.round(balance / 6);
        balance -= 6;
        cycled+=1;
        //sets firebase values
        database.ref().set({
            balance: balance,
            daysLeft:daysLeft,
            cycled:cycled
                });
        $(".remaining").text("Yay! Only $" + balance + " and " + daysLeft + " more days to go!");
        $(".cycled").text("You have ridden " + cycled + " days!");

    } else {
        $(".remaining").text("Yay! You made it!");
    }

});




