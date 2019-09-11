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
<button onclick = "addToCart('${session['Title']}')">Sign Up</button>
<p>${session['Grade']}</p>
<p>${session['Building']}</p>
<p>${session['Area of Focus']}</p>
<p>${session['Description']}</p>

</div>`
                                  ).join('')
document.querySelector('article')
    .append(container)
}
 
function addToCart(sessionName){
    let item = document.creatleElement()
    item.innerHTML = sessionName
    document.querySelector('ul#cart')
        .append()
}











