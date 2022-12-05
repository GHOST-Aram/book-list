function addToTable(index,title,author,isbn,dtype){
    const tableRow = document.createElement('tr')

    const count = document.createElement('th')
    count.textContent = index
    tableRow.appendChild(count)

    const tdTitle = document.createElement('td')
    tdTitle.textContent = title.value
    tableRow.appendChild(tdTitle)

    const tdAauthor = document.createElement('td')
    tdAauthor.textContent = author.value
    tableRow.appendChild(tdAauthor)

    const isbntd = document.createElement('td')
    isbntd.textContent = isbn.value
    tableRow.appendChild(isbntd)

    const type = document.createElement('td')
    type.textContent = dtype.value
    tableRow.appendChild(type)

    return tableRow

}

const form =  document.querySelector('form')
const bookTitle = document.querySelector('#book-title')
const author = document.querySelector('#author-name')
const ISBN = document.querySelector('#isbn')
const documentType = document.querySelector('select')
const table = document.querySelector('tbody')

console.log(form)

let index = '#'

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    const row = addToTable(index,bookTitle,author,ISBN,documentType)
    table.appendChild(row)
})