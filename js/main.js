const operations = document.querySelector(".operations");
const divs = operations.querySelectorAll("div");

for (var i = 0; i < divs.length; i++) {
  divs[i].classList.add("item");
}

const keys = Array.from(document.querySelectorAll(".item"));

keys.forEach(key => {
    key.addEventListener('click', () => {
        console.log('Radi');
    })
});