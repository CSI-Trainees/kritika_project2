console.log("connected");
const modal = document.getElementById("myModal");
const button = document.getElementById("btn");
const closebtn = document.getElementsByClassName("close")[0];
const showModal = () => {
    var x = Math.floor((Math.random() * 10) + 11);
    document.getElementById("demo").innerHTML = "YOUR  NUMBER  IS  " + x;
    document.getElementById("btn").disabled = true;
    modal.style.display = "block";
};
const closeModal = () => {
  modal.style.display = "none";
};
button.addEventListener("click", () => {
  showModal();
});
closebtn.addEventListener("click", () => {
  closeModal();
});

function abc() {
	let search = document.getElementById("result");
	let textv = search.value;
    console.log(textv);
	if(textv == 17)
	{
	document.getElementById("xyz").innerHTML = "CONGRATULATIONS! YOU ARE THE WINNER";	
	}
	else if(textv == 15)
	{
	document.getElementById("xyz").innerHTML = "CONGRATULATIONS! YOU ARE THE FIRST RUNNER-UP";	
	}
	else if(textv == 13)
	{
	document.getElementById("xyz").innerHTML = "CONGRATULATIONS! YOU ARE THE SECOND RUNNER-UP";	
	}
	else 
	{
	document.getElementById("xyz").innerHTML = "TRY AGAIN! BETTER LUCK NEXT TIME";	
	}
}
