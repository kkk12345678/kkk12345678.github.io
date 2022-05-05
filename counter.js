let counter = 0
document.getElementById("increment").onclick = function()
{
	counter++
	document.getElementById("counter").textContent = counter
	console.log(counter)
}