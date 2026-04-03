// create a grid
// Hover effect where the divs change color

alert("Welcome to my etch the sketch project")

const divCreation = document.querySelector('.container');
const divShape = document.querySelectorAll('newdiv');
let currentColor = "red";
let number = 100;
let pixelWidth = (720)/number ;
let pixelHeight = (720)/number;
for(let i = 1; i <= number * number;i++)
    {
        const createDiv = document.createElement("div");
        createDiv.classList.add('newdiv');
        createDiv.style.flexBasis = pixelWidth +'px';
        createDiv.style.height = pixelHeight + 'px';
        divCreation.appendChild(createDiv);  
    }        


// Add a button to the top screen that will send the user a pop up asking for the number of squares per side
let prompter = document.querySelector('.prompter')
prompter.addEventListener('click',userInput)

function toCreateDiv(size)
    {
        divCreation.innerHTML = "";
        divCreation.style.backgroundColor = "";   
        number = size;
        pixelWidth = (720)/number ;
        pixelHeight = (720)/number;
        for(let i = 1; i <= number * number;i++)
        {
            const createDiv = document.createElement("div");
            createDiv.classList.add('newdiv');
            createDiv.style.flexBasis = pixelWidth +'px';
            createDiv.style.height = pixelHeight + 'px';
            divCreation.appendChild(createDiv);
             
        }        
    }

function userInput()
    {
        let user = Number(prompt("How many boxes?"))
        if ( user <= 100 && user >=16)
            {
                toCreateDiv(user);
            }

        else
            {
                alert('Please the highest should be 100 and the lowest should be 16')
            }   
    }

// Store user's hover
divCreation.addEventListener('mouseover',ink)

function ink(e)
    {
        if(e.target.classList.contains('newdiv'))
            {
                e.target.style.backgroundColor = currentColor; 
            }
    }

let color = document.querySelector('.color');
color.addEventListener('click',colorType)
function colorType()
    {
        color = prompt("What color would you like to try?")
        currentColor = color
        
    }

let clear = document.querySelector('.clear');
clear.addEventListener('click',() => {toCreateDiv(number)})