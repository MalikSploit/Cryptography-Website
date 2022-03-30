let test = document.getElementById("ajaxButton");
test.addEventListener("submit", function(evt)
{
    evt.preventDefault();
}, true);

function submitForm()
{
    let xhr;
    try
    {
        xhr = new ActiveXObject('Msxml2.XMLHTTP');
    }
    catch (e)
    {
        try
        {
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }
        catch (e2)
        {
            try
            {
                xhr = new XMLHttpRequest();
            }
            catch (e3)
            {
                xhr = false;
            }
        }
    }
    xhr.onreadystatechange  = function()
    {
        if(xhr.readyState  === 4)
        {
            if(xhr.status  === 200)
            {
                document.getElementById("zone").innerHTML =  xhr.responseText;
                // document.getElementById("myButton").onclick = function ()
                // {
                //     location.href = "../index.html";
                // }
            }
            else
            {
                document.getElementById("zone").innerHTML =  "erreur: "+ xhr.status;
            }
        }
    };

    xhr.open("POST", "../htbin/login.py", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    const data = "file=../htbin/login.py&username=" + document.getElementById("username").value + "&userpwd=" + document.getElementById("userpwd").value;
    xhr.send(data);
}