$('#contact-us-form').submit(function (e) {
    e.preventDefault();
    $("#response").fadeIn();
    $("#response").html('<span style="color:green;"><em>Sending...</em></span>');
    var form = $(this);
    $.ajax({
        type: "POST",
        url: './assets/php/contact-handler.php',
        data: form.serialize(),
        success: function (data) {
            var result = data.split('|');
            if (result[0] == 1) {
                $("#response").html(`<span style="color:green;"><em>${result[1]}</em></span>`);
                $("#response").fadeOut(15000);
            }
            else {
                $("#response").html(`<span style="color:red;"><em>Something went wrong, could not send your message!. please try again later</em></span>`);
                $("#response").fadeOut(15000);
            }
        }
    });
});



(function () {
    var options = { whatsapp: "+255684797667", call_to_action: "Message us", position: "left", color: "red" };
    var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();