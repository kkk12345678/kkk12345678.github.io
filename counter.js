let counter = 0
let saved = 0
let h2Count = document.getElementById("counter")

document.getElementById("increment").onclick = function()
{
	counter++
	h2Count.innerText = counter
}

document.getElementById("save").onclick = function()
{
	let h3saved = document.getElementById("saved")
	saved += counter
	if (h3saved.innerText == '') h3saved.innerText = "Previous entries: " + saved
	else h3saved.innerText += '-' + saved
	counter = 0
	h2Count.innerText = counter
}
