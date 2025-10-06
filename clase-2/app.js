const title = document.querySelector("h1")
const buttom = document.querySelector("button")

const changeTitle = () => {
  title.textContent = "Soy un nuevo titulo desde Javascript"
}

document.addEventListener("keydown", (event) => {
  if (event.key === "g") {
    changeTitle()
  }
})