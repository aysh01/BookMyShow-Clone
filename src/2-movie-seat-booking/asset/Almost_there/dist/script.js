document.querySelector(".movie-title").innerHTML = localStorage.getItem("text");
document.querySelector(".bigger").innerHTML = localStorage.getItem("screen");
document.querySelector(".bigger1").innerHTML = localStorage.getItem("123"); //456
document.querySelector(".bigger2").innerHTML = localStorage.getItem("456");
document.getElementById("1").innerHTML = localStorage.getItem("total");
document.getElementById("3").innerHTML = localStorage.getItem("time");

const h = ['1', '2', '3', '2A', '3B']; //List of Screens
const t = ['09.00', '11:15', '14:30', '16:30', '18:15'];

const res = getRR(h);
localStorage.setItem("screen", res);
// console.log(res);

function getRR(a) {

	// get random index value
	const randInd = Math.floor(Math.random() * a.length);

	// get random item
	const item1 = a[randInd];

	return item1;
}

const req = gett(t);
localStorage.setItem("time", req);

function gett(time) {
	const rnd = Math.floor(Math.random() * time.length);
	const tm = time[rnd];
	return tm;
}
const date = new Date();
const f = new Intl.DateTimeFormat("en-us", {
	dateStyle: "full",
})
// console.log(f.format());
document.getElementById("2").innerHTML = f.format();