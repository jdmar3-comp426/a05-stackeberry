window.addEventListener("load", function () {

    function sendData() {
        const sendRequest = new XMLHttpRequest();
        const signupInfo = new URLSearchParams(new FormData( form ));
        
        // Define what happens on successful data submission
        sendRequest.addEventListener( "load", function( event ) {
            alert( 'Your account was created!' );
        });

        // Define what happens in case of error
        sendRequest.addEventListener("error", function( event ) {
            alert( 'Submission unsuccessful!' );
        });

        sendRequest.open("POST", "http://localhost:5000/app/new/user");
        sendRequest.send( signupInfo );
    }
    const form = document.getElementById("signUp");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        sendData();
    });
});