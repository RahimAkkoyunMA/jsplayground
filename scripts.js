function testfunction()
{
    if(document.getElementById("test").innerHTML == "test")
    {
        console.log("Hello World!");
    }
}

window.onload = function()
{
    testfunction();
    console.log("From onload");
}

function erstelleZaehler() {
    let zaehler = 0;

    return function() {
        zaehler += 1;
        return zaehler;
    };
}

let meinZaehler = erstelleZaehler();