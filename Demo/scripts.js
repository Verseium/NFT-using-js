'use strict';

// Arrays
let tokenHolders = [{name:"v",tokens:[]},
                    {name:"s",tokens:[]},
                    {name:"p",tokens:[]}];


let tokens=[];

// Logic to handle the submitted URL

const form = document.getElementById('tokenURLForm');

function urlAdded(event){

    event.preventDefault();

    const urlEntered = event.target.tokenURL.value;

    // if the url exists then try to throw an error
    const isTokenExists = tokens.includes(urlEntered);

    if(isTokenExists){
        alert("URL already exists")
    }
    else{
        tokens.push(urlEntered);
    }

    console.log(tokens); 
    
    }

form.addEventListener('submit',urlAdded);    



// Logic to handle the transfer functionality

const transferForm = document.getElementById('transferTokenForm');

function transferToken(event){

    event.preventDefault();

    const tokenOwner = event.target.tokenOwner.value;
    const tokenID = event.target.tokenID.value;

    for(let i = 0; i<tokenHolders.length;i++){
        if(tokenHolders[i].name === tokenOwner){
            tokenHolders[i].tokens.push(tokenID);
        }
    }

    console.log(tokenHolders);
    
    }

transferForm.addEventListener('submit',transferToken); 