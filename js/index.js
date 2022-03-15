const book_URL = "http://localhost:3000/books"

document.addEventListener("DOMContentLoaded", () => {
    getBooks()
});
 



function getBooks(){
    fetch(book_URL)
    .then(resp => resp.json())
    .then(data => data.forEach(book => addBookToDom(book)))
}


function addBookToDom(book){
    const listUL = document.getElementById('list')
    const li = document.createElement('li')
    li.id = book.id
    li.textContent = book.title
    li.addEventListener('click', (e) => showBookDetail(e,book))
    listUL.append(li)
}

//how does line 22 work exactly? when i remove the argument e within the showBookDetail function


function showBookDetail(e, book){
    e.preventDefault()

    const {description, img_url, title} = book

    const showPanel = document.getElementById('show-panel')
    showPanel.innerHTML = ""

    //how and why does the innerHTML that set to an empty string work? 

    const img = document.createElement('img')
    img.src = img_url

    const h1 = document.createElement("h1")
    h1.textContent = title

    const p = document.createElement('p')
    p.textContent = description

    const userUL = document.createElement('ul')

    book.users.forEach(user => {
        const userLI = document.createElement('li')
        userLI.textContent = user.username
        userUL.append(userLI)
    })

    showPanel.append(img, h1, p, userUL)


}

