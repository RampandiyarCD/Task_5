let currPage = 1;
let date = [];
let itemsPerPage = 10;
let sortOrder = 'asc';
//fetching json
async function getData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonData = await response.json();
        data = jsonData;
        updateTable();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

//to updatetable when need like sorting and filtering
function updateTable() {
    let searchText = document.getElementById('search').value.toLowerCase();
    let filteredData = data;
    //according to the given string all the similar data will come
    if (searchText) {
        filteredData = data.filter(function(item) {
            return String(item.id).includes(searchText) || 
            item.title.toLowerCase().includes(searchText) || 
            item.body.toLowerCase().includes(searchText) || 
            String(item.userId).includes(searchText);
        });
    }
    // for asc and desc sorting using id
    filteredData.sort(function(a, b) {
        if (sortOrder === 'asc') {
            return a.id - b.id;  
        } else {
            return b.id - a.id;  
        }
    });
    //pagination cal
    //where to start
    let startIndex = (currPage - 1) * itemsPerPage;
    //how many data in a page
    let pageData = filteredData.slice(startIndex, startIndex + itemsPerPage);
    //to create and insert the dynamic table to the html
    let tableBody = document.getElementById('tb_body');
    tableBody.innerHTML = '';
    
    pageData.forEach(function(item) {
        let row = document.createElement('tr');
        row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.body}</td>
        <td>${item.userId}</td>
        `;
        tableBody.appendChild(row);
    });
    
    showPageButtons(filteredData.length);
}

//pagination button creating and inserting
function showPageButtons(totalItems) {
    let totalPages = Math.ceil(totalItems / itemsPerPage);
    let pageControls = document.getElementById('pgnation');
    pageControls.innerHTML = '';
    
    for (let i = 1; i <= totalPages; i++) {
        let button = document.createElement('button');
        button.textContent = i;
        if (i === currPage) {
            button.className = 'active-page';
        }
        button.onclick = function() {
            currPage = parseInt(this.textContent);
            updateTable();
        };
        pageControls.appendChild(button);
    }
}

//dynamic searching as i trigger a event
document.getElementById('search').addEventListener('input', function() {
    currPage = 1;
    updateTable();
});

//when i click even changes
document.getElementById('tb_head').addEventListener('click', function() {
    if (sortOrder === 'asc') {
        sortOrder = 'desc';
    } else {
        sortOrder = 'asc';
    }
    updateTable();
});

getData();
