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
let showresult = document.getElementById("showresult");
showresult.addEventListener("click" , () => {
  myfunction();
});
const myfunction = () => {
	let search = document.getElementById("result");
	let textv = search.value;
	let Show = document.getElementById("show");
    console.log(textv);
	if(textv == 17)
	{
		let html=`<div class="display">
		<img class="winner" src="winner.jpg">
		<p class="text">CONGRATULATIONS!
		<br> YOU ARE THE WINNER</p>
		</div>`
		Show.innerHTML = html;	
	}
	else if(textv == 15)
	{
		let html=`<div class="display">
		<img src="first.jpg">
		<p class="text">CONGRATULATIONS!
		<br> YOU ARE THE FIRST RUNNER-UP</p>
		</div>`
		Show.innerHTML = html;
	}
	else if(textv == 13)
	{
		let html=`<div class="display">
		<img src="second.jpg">
		<p class="text">CONGRATULATIONS!
		<br> YOU ARE THE SECOND RUNNER-UP</p>
		</div>`
		Show.innerHTML = html;
	}
	else 
	{
	document.getElementById("show").innerHTML = "TRY AGAIN! BETTER LUCK NEXT TIME";	
	}
};
const open = document.getElementById("showresult");
const close = document.getElementById("close_it");
const container = document.getElementById("container");

open.addEventListener("click", () => {
    container.classList.add("active");
});

close.addEventListener("click", () => {
    container.classList.remove("active");
});

