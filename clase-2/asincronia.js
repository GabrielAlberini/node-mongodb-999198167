// console.log("Haciendo tarea 1")
// setTimeout(() => console.log("Haciendo tarea 2, se puede resolver pasado tiempo"), 10000)
// console.log("Haciendo tarea 3")

const state = document.querySelector(".state")

const fetchingData = async () => {
  // URL - Method
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    if (response.ok) {

      const data = await response.json()

      const users = document.querySelector(".users")

      users.innerHTML = data.map(u => {
        return `
      <div class="user">
        <h3>${u.name}</h3>
        <p>${u.email}</p>
        <div class="extra">
          <p><strong>Tel:</strong> ${u.phone}</p>
          <p><strong>Ciudad:</strong> ${u.address.city}</p>
          <p><strong>Empresa:</strong> ${u.company.name}</p>
        </div>
      </div>
    `
      }).join("")

      const userList = document.querySelectorAll(".user")

      userList.forEach(user => {
        user.addEventListener("click", () => {
          const extra = user.querySelector(".extra")
          extra.style.display = extra.style.display === "block" ? "none" : "block";
        })
      });

    } else {
      state.textContent = "No se encuentra el recurso buscado"
    }
  } catch (error) {
    state.textContent = "Error al intentar hacer el fetching de datos, mala url"
  }
}

fetchingData()