document.addEventListener("DOMContentLoaded", function () {
	// Funktion att ändra inre text
	function changeInnerText(item, text) {
		item.innerText = text;
	}

	// 1. Byt namn på första hoodien från Ash till Potato.
	changeInnerText(document.querySelector(".art-1").querySelector("h3"), "Potato");

	// 2. Byt namn på Home till Start.
	changeInnerText(document.querySelector("body header nav").querySelector("a"), "Start");

	// 3. Byt namn på Contact till Mail Us.
	changeInnerText(
		document.querySelector("body header nav").querySelector("a").nextElementSibling.nextElementSibling,
		"Mail us"
	);

	// 4. Byt ut informationen om Sinus Hoodie  - Fire.
	changeInnerText(document.querySelector(".art-2").querySelector("p"), "A very hot shirt");

	// 5. Byt bakgrundsfärg och text på en knapp.
	const lastButton = document.querySelector(".art-3").querySelector("button");
	changeInnerText(lastButton, "out of stock");
	lastButton.style.backgroundColor = "red";

	// 7. Byt ut adressen på sidan.
	const adress = document.querySelector("footer").querySelector("p");
	adress.innerHTML = "Sinus Skateboards </br> Obeboddgränd 12 </br> 112 12 Ödestad";

	// 8. Byt textfärg på samtliga articles/kort´s paragraf (<p>) text
	const articleP = document.querySelectorAll("article p");
	articleP.forEach((item) => (item.style.color = "red"));

	// 9. Ändra text på samtliga knappar till add to cart.
	document.querySelectorAll("button").forEach((button) => changeInnerText(button, "add to cart"));

	// 10. Lägg till classen active på menyalternativet home.
	const home = document.querySelector("footer section article").querySelector("a");
	home.classList.add("active");

	// 11. Ta bort classen logo på logotypen.
	document.querySelector("body header img").classList.remove("logo");

	// 12. Lägg till ett nytt menyalternativ.
	const awards = document.createElement("a");
	awards.innerText = "Awards";
	awards.href = "#";

	document.querySelector("footer section article").appendChild(awards);

	// 13. Lägg till en ny produkt med följande info.
	document.querySelector("main").insertAdjacentHTML(
		"beforeend",
		`<article class="art-4">
                <figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
                <h2>Sinus Hoodie</h2>
                <h3>Forrest</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos saepe ratione possimus nobis?
                </p>
                <button>buy</button>
            </article>`
	);

	// 14. Lyssna efter ett klick på logotypen (.logo). När den registrerar ett klick skall du console.log:a "found you!";
	document.querySelector("body header img").addEventListener("click", function (event) {
		event.preventDefault();
		console.log("found you!");
	});

	// 15. Lyssna efter klick på samtliga produkter ( <article>). När den registrerar ett klick skall du console.log:a "Hi, Im article Fire / Ash / Water".

	document.querySelector(".art-1").addEventListener("click", function (event) {
		event.preventDefault();
		console.log("Potato");
	});
	document.querySelector(".art-2").addEventListener("click", function (event) {
		event.preventDefault();
		console.log("Fire");
	});
	document.querySelector(".art-3").addEventListener("click", function (event) {
		event.preventDefault();
		console.log("Water");
	});
	document.querySelector(".art-4").addEventListener("click", function (event) {
		event.preventDefault();
		console.log("Forrest");
	});
});
