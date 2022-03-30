const form = document.getElementsByTagName('form')[5];
const email = document.getElementById("useremail");
const password = document.getElementById("userpwd2");
const user = document.getElementById("username2");
const date = document.getElementById("birthdate");


const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const passRegExp = /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/;

let essaiPwd =0;
let essaiEmail =0;
let essaiUser =0;
let essaiDate =0;


function addEvent(element, event, callback)
{
  const previousEventCallBack = element["on"+event];
  element["on"+event] = function (e)
  {
    let output = callback(e);

    if (output === false) return false;
  
    if (typeof previousEventCallBack === 'function')
    {
      output = previousEventCallBack(e);
      if(output === false) return false;
    }
  };
}
  
addEvent(window, "load", function ()
{
  const test = email.value.length === 0 || emailRegExp.test(email.value);
  const test2 = password.value.length === 0 || password.value.length > 8;
  password.className = test2 ? "valid" : "invalid";
  email.className = test ? "valid" : "invalid";
  user.className = test ? "valid" : "invalid";
  date.className = test ? "valid" : "invalid";
});

function validateDOB()
{
  let isValidDate = Date.parse(date.value);
  let test = new Date(date.value);
  return !(isNaN(isValidDate) && test !== date.value);
}

addEvent(date, "keyup", function ()
{
  const test = date.value.length === 0 || (date.value.length === 10 && validateDOB());
  if (test)
  {
    if(essaiPwd === 1 && essaiEmail === 1 && essaiUser === 1)
    {
      document.querySelector('[type="submit2"]').disabled = false;
    }
    date.className = "valid";
  }
  else
  {
    document.querySelector('[type="submit2"]').disabled = true;
    if(essaiDate === 0)
    {
      essaiDate=1;
    }
    date.className = "invalid";
  }
});

addEvent(user, "keyup", function ()
{
  const test = user.value.length === 0 || user.value.length >= 6;
  if (test)
  {
    if(essaiPwd === 1 && essaiEmail === 1 && essaiDate === 1)
    {
      document.querySelector('[type="submit2"]').disabled = false;
    }
    user.className = "valid";
  }
  else
  {
    document.querySelector('[type="submit2"]').disabled = true;
    if(essaiUser === 0)
    {
      essaiUser=1;
    }
    user.className = "invalid";
  }
});
  
addEvent(email, "keyup", function ()
{
  const test = email.value.length === 0 || emailRegExp.test(email.value);
  if (test)
  {
    if(essaiPwd === 1 && essaiUser === 1  && essaiDate === 1 )
    {
      document.querySelector('[type="submit2"]').disabled = false;
    }
    email.className = "valid";
  }
  else
  {
    document.querySelector('[type="submit2"]').disabled = true;
    if(essaiEmail === 0)
    {
      essaiEmail=1;
    }
    email.className = "invalid";
  }
});

addEvent(password, "keyup", function ()
{
  const test = password.value.length === 0 || passRegExp.test(password.value);
  if(test)
  {
    if(essaiEmail === 1  && essaiUser === 1 && essaiDate === 1)
    {
      document.querySelector('[type="submit2"]').disabled = false;
    } 
    password.className = "valid";
  }
  else
  {
    document.querySelector('[type="submit2"]').disabled = true;
    if(essaiPwd === 0)
    {
      essaiPwd=1;
    }
    password.className = "invalid";
  }
});