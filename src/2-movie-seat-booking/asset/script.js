const optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".sBtn-text"),
    button = document.querySelector("button");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption; //Selected, option
        // console.log(sBtn_text.innerHTML);

        localStorage.setItem('platinum', sBtn_text.innerHTML);
        // console.log(localStorage.getItem('platinum'));

        optionMenu.classList.remove("active");
        button.style.display = "block";
    })
})