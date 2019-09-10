//create global variable
let sessions

function loadPage() {
fetch("sessions.json")
    .then(response => response.json())
    .then(json => {console.log(json)
                  sessions = json
                  createCards()})
    .catch(err => console.error(err))
//createCards()
}
function createCards() {
let container = document.createElement('div')
container.innerHTML = sessions.map(session =>
`<div>
<h3>${session.Title}</h3>
<p>${session['Presenter(s)']}</p>
<button id="login" class="btn btn-primary">Details</button>
<p>${session['Grade']}</p>
<p>${session['Building']}</p>
<p>${session['Area of Focus']}</p>
<p>${session['Description']}</p>

</div>`
                                  ).join('')
document.querySelector('article')
    .append(container)
}