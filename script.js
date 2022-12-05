
function createRow(book, index){
    const tableRow = document.createElement('tr')

    const count = document.createElement('th')
    count.textContent = index
    tableRow.appendChild(count)

    const title = document.createElement('td')
    title.textContent = book.title
    tableRow.appendChild(title)

    const tdAauthor = document.createElement('td')
    tdAauthor.textContent = book.author
    tableRow.appendChild(tdAauthor)

    const isbntd = document.createElement('td')
    isbntd.textContent = book.isbn
    tableRow.appendChild(isbntd)

    const type = document.createElement('td')
    type.textContent = book.type
    tableRow.appendChild(type)

    return tableRow

}
function getBookProperties(){
    const bookTitle = document.querySelector('#book-title')
    const author = document.querySelector('#author-name')
    const ISBN = document.querySelector('#isbn')
    const bookType = document.querySelector('select')

    const book = {title:bookTitle.value, 
            author:author.value,
            isbn:ISBN.value, 
            type:bookType.value}
    return book
}

function renderBooks(books){

    const tbody = document.querySelector('tbody')
    tbody.innerHTML = ''
    let index = 1
    books.forEach(book => {
       let row = createRow(book, index)
       index++ 
       tbody.appendChild(row)
    });

    
}
function renderRow(row){
    const table = document.querySelector('tbody')
    table.appendChild(row)
}

function updateBooks(book){
    books.push(book)
    const local = JSON.stringify(books)
    window.localStorage.setItem('local',local)
}
// Listing Begins
let books = []
window.addEventListener('load',(e)=>{
    let local = JSON.parse(window.localStorage.getItem('local')) 
    if(Array.isArray(local)){//Chck books in local storage
        books = local
        renderBooks(books)   
    }
    else{//Create local storage
        local = JSON.stringify(books)
        window.localStorage.setItem('local', local)
    }

})
const form =  document.querySelector('form')
form.addEventListener('submit', (event)=>{
    event.preventDefault()
    const book = getBookProperties()
    updateBooks(book)
    let index = books.indexOf(book) + 1
    const row = createRow(book, index)
    renderRow(row)
})