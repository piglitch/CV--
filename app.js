const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')){
        document.getElementById('h1-1').style.color = "white";
        document.getElementById('cvForm').style.backgroundColor = "black";
        document.getElementById('cvForm').style.color = "white";
    }
    if(body.classList.contains('dark-mode') == 0) {
        document.getElementById('h1-1').style.color = "black";
        document.getElementById('cvForm').style.backgroundColor = "white";
        document.getElementById('cvForm').style.color = "black";
        
    }

    themeToggle.innerText = body.classList.contains('dark-mode') ? 'Lights off' : 'Lights on';

});

const cvForm = document.getElementById('cvForm');
const cvOutput = document.getElementById('cvOutput');

cvForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Process the form data and generate the CV output
    // This part requires backend logic and is not included in this example
    
    // Display the generated CV output
    cvOutput.innerHTML = 'Generated CV will be displayed here.';
});



