$('#searchForm').submit(function(event) 
{
    event.preventDefault();
    var $form = $(this),
    url = $form.attr( "action" );
    $.post( url, {
        user: $form.find( "input[name='user']").val(),
        msg: $form.find( "input[name='message']").val()
    }
    , function() {
        window.location.reload();
    },"json" );
});

$(document).ready(function() 
{
    $.getJSON("../htbin/chatget.py", function(jd)
    {
        for (let i = 0; i < jd.length; i++)
        {
            let date = document.createElement("div");
            let message = document.createElement("div");
            let date_message = document.createElement("div");
            date.innerHTML = `The  ${jd[i].date} at ${jd[i].time} by ${jd[i].user}`;
            message.innerHTML = jd[i].msg;
            date_message.appendChild(date);
            date_message.appendChild(message);
            date_message.setAttribute("class", "my-chat");
            document.getElementById('message').appendChild(date_message);
        }
        let element_b = document.getElementById("message");
        element_b.scrollTop = element_b.scrollHeight;
    });
});

$(document).ready(() =>
{
    $(".chat-btn").click(() =>
    {
        $(".chat-box").slideToggle("slow")
    })
});