const attendees = document.querySelector("#attendees")

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((res) => {
    let html = "";
    res.forEach((element) => {
      html += `<div class="card">
        <h1>${element.name}</h1>
        <div>${element.email}</div>
      </div>`
    })
    attendees.innerHTML = html;
  })
