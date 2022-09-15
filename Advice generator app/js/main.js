let btn = document.querySelector(".container button"),
    header = document.querySelector(".header"),
    advice = document.querySelector(".advice"),
    ico = document.querySelector(".container button img");
function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then((repo) => repo.json())
        .then((repo) => {
            header.innerHTML = `Advice #${repo.slip.id}`;
            advice.innerHTML = `"${repo.slip.advice}"`;
        });
}
getAdvice();
let i = 1;
btn.addEventListener("click", () => {
    getAdvice();
    ico.style.transform = `rotate(${i++}turn)`;
});
