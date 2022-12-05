let books = []

function addToBooks(book){
    books.push(book)
}

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
    const table = document.querySelector('tbody')
    let index = 1
    books.forEach(book => {
       let row = createRow(book, index)
       index++ 
       table.appendChild(row)
    });

    
}
function renderRow(row){
    const table = document.querySelector('tbody')
    table.appendChild(row)
}

const form =  document.querySelector('form')
// const bookTitle = document.querySelector('#book-title')
// const author = document.querySelector('#author-name')
// const ISBN = document.querySelector('#isbn')
// const documentType = document.querySelector('select')

console.log(form)

let index = '#'

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    const book = getBookProperties()
    addToBooks(book)
    const row = createRow(book, index)
    renderRow(row)

})