const api = {
  endpoint: "https://api.openweathermap.org/data/2.5/",
  key: "48f2be43fdb3ad1de3a0522f077c365b",
}; 
const input = document.querySelector("#inputField");
input.addEventListener("keydown", enter);

function enter(event){
	if (event.keyCode === 13) {
		getInfo(input.value);
	}
}
async function getInfo(data){
	const getInfoResult = await fetch(`${api.endpoint}weather?q=${data}&units=imperial&appID=${api.key}`);
	console.log(getInfoResult);
}