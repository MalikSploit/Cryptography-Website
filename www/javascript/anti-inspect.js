jQuery(document).ready(function()
{
    jQuery(function()
    {
        jQuery(this).bind("contextmenu", function(event)
        {
            event.preventDefault();
            alert('Sorry but right click is disabled on this site');
        });
    });
});

document.onkeydown = function(e)
{
    if (event.keyCode === 123)
    {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0))
    {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0))
    {
        return false;
    }
    if (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
    {
        return false;
    }

    function mousehandler(a)
    {
        const myevent = null ? a : event;
        const eventbutton = null ? myevent.which : myevent.button;
        if ((eventbutton === 2) || (eventbutton === 3)) return false;
    }
    document.onmousedown = mousehandler;
    document.onmouseup = mousehandler;
};