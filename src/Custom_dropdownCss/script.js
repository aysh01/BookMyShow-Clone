const optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".sBtn-text"),
    container = document.querySelector(".container");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption; //Selected, option
        // console.log(sBtn_text.innerHTML); //Console.log()

        localStorage.setItem('text', sBtn_text.innerHTML);
        console.log(localStorage.getItem('text')); //localStorage()

        optionMenu.classList.remove("active");
        optionMenu.style.display = 'none';
        container.style.display = 'block';
        if (localStorage.getItem('text') == 'Jawan') {
            document.getElementById("p").innerHTML = d[1];
            document.getElementById("price").innerHTML = price[1];
            document.querySelector(".img").src = image[0];
            // Jawan
        }

        else if (localStorage.getItem('text') == 'Fukrey 3') {
            document.getElementById("p").innerHTML = d[0];
            document.getElementById("price").innerHTML = price[0];
            document.querySelector(".img").src = image[1];
            // Fukrey 3
        }

        else if (localStorage.getItem('text') == 'Saw X') {
            document.getElementById("p").innerHTML = d[4];
            document.getElementById("price").innerHTML = price[4];
            document.querySelector(".img").src = image[2];
            // Saw X
        }

        else if (localStorage.getItem('text') == 'Nun II') {
            document.getElementById("p").innerHTML = d[3];
            document.getElementById("price").innerHTML = price[3];
            document.querySelector(".img").src = image[3];
            // Nun II
        }

        else if (localStorage.getItem('text') == 'Vacine - War') {
            document.getElementById("p").innerHTML = d[2];
            document.getElementById("price").innerHTML = price[2];
            document.querySelector(".img").src = image[4];
            // Vacine - War
        }
    })
})

const d = [
    ['Iss baar hoga chamatkaar, straight from Jamnapaar! The Fukras are back with 3X more fukrapanti.'],
    ['A high-octane action thriller that outlines the emotional journey of a man who is set to rectify the wrongs in society.'],
    ['Brace yourselves as we present to you India`s first-ever Bio-science film, The Vaccine War - A True Story.'],
    ['The sequel to the worldwide smash hit follows Sister Irene as she once again comes face-to-face with Valak, the demon nun.'],
    ['John Kramer (Tobin Bell) is back with the most disturbing installment of the SAW franchise that explores the untold chapter of Jigsaw`s most personal game']
];


const price = [['Fukrey 3'], ['Jawan'], ['The Vacine War'], ['Nun II'], ['Saw X']];

const image = [
    ["https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jawan-et00330424-1693892482.jpg"],
    ["https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/fukrey-3-et00350845-1694780597.jpg"],
    ["https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/saw-x-et00363723-1690895863.jpg"],
    ["https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-nun-ii-et00363916-1696405966.jpg"],
    ["https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-vaccine-war-et00344388-1695970177.jpg"]
];

// document.getElementById("p").innerHTML = d[1]; //About Index[i]
// document.getElementById("price").innerHTML = price[1]; //Title Index[i]

// document.querySelector(".img").src = image[0]; //Image Index[i]