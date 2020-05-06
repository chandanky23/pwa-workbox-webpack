const attendees = document.querySelector("#attendees")
const installContainer = document.getElementById('installContainer')
const btnInstall = document.getElementById('btnInstall')
const btnCancel = document.getElementById('btnCancel')

// window.onload()
setTimeout(() => {
  installContainer.style.display = 'block'
}, 5000)

btnCancel.addEventListener("click", () => {
  installContainer.style.display = 'none';
})

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((res) => {
    let html = ""
    res.forEach((element) => {
      html += `<div class="card">
        <h1>${element.name}</h1>
        <div>${element.email}</div>
      </div>`
    })
    attendees.innerHTML = html
  })
