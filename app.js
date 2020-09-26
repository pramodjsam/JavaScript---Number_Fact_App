let fact=document.getElementById("fact");
let factText=document.querySelector("#factText");
let numberInput= document.querySelector("#numberInput");

numberInput.addEventListener("input",getData);

function getData(){
	fact.style.display="none"
	let number= numberInput.value;
	let url=`http://numbersapi.com/${number}`
	fetch(url)
		.then(function(response){
			return response.text();
		}).then(function(data){
			if(number!=""){
				fact.style.display="block";
				factText.innerHTML=data
			}
		})

}