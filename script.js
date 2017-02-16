$(function(){

    var channel = 'pubnub-tutor-request',
    //var channel = 'pubnub.'+Math.floor(Math.random() * 99999 + 1),
        siteId,eventId,counter = 0;





    var pubnub = window.pubnub = PUBNUB.init({
        publish_key   : 'pub-c-8e45f540-691c-4e55-9f07-f2278795ec3d', // Your Pub Key
        subscribe_key : 'sub-c-b5732f80-4ccf-11e6-8b3b-02ee2ddab7fe', // Your Sub Key
        ssl           : true,
        error: function (error) {
            console.log('Error:', error);
        }
    });

    pubnub.subscribe({
        channel: channel+'-out',
        message: function (m) {
            $('#ulConversation').append('<li>'+ m.text+'</li>');
        },
        connect : function(){
            console.log('connect..');

        }

    });




    $('#send').click(function(){

        var text = $('#text').val();

        var data = {
            "text": text
            //"channel" : channel
        };

        pubnub.fire({
            channel: channel,
            message: data,
            callback: function (m) {
                //console.log(m);

            }
        });
    });


});
