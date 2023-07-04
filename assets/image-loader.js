function buildOutput() {
	const output = document.querySelectorAll("section > span");
	const urls = Array.from(document.querySelectorAll("section > span"));
	const links = urls.map(x => x.innerText);
	let arrayLength = links.length;
	let i = 0;

	output.forEach((span) => {
		span.outerHTML = "<img src=\"" + links[i] + "\" height=\"300\" width=\"auto\">";
		i++;}
		)
	}


