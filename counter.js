let counter = 0
document.getElementById("increase").onclick = function()
{
	counter++
	document.getElementById("counter").innerHTML = counter
}