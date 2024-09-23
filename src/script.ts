const openModalBtn = document.getElementById('openModalBtn') as HTMLButtonElement;
const closeModalBtn = document.getElementById('closeModalBtn') as HTMLSpanElement;
const modal = document.getElementById('myModal') as HTMLDivElement;

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Fetch data from API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        // Do something with the data
        console.log(data);
    });