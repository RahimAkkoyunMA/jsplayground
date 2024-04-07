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
}