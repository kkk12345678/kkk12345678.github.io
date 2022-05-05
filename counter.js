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
	let h3saved = document.getElementById("save").innerText
	saved += counter
	if h3saved == '' h3saved.innertext = saved
	else h3saved.innertext = '-' + saved
	counter = 0
	h2Count.innerText = counter
}
