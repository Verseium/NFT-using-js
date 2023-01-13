# Creating an NFT using vanilla javascript

## Our approach

**Step1**
- Create a list of all token holders
- This should be an array containing objects
- Each object should be having name and tokensOwned keys

```
 let tokenHolders = [{name:"V",tokensOwned:[]},
                     {name:"S",tokensOwned:[]},
                     {name:"P",tokensOwned:[]},
                     .....
                     ]
                     
 ```
 
 **Step2**
 - Create an array of tokens
 
 ```
 
 let tokens = ["https://..../1","https://..../2",.......]
 
 ```
 
 **Step3**
 
 - Create an input filed using a form
 - This form should be able to take in a link
 - This link should be saved in the **tokens** array
 
 ```
 
 <form onsubmit="urlAdded">
  <input type="text" name="tokenURL" required/>
  <input type="submit"/>
 <form/> 
 
 // Function to handle the submitted URL
 
 function urlAdded(event){
    const urlEntered = event.target.tokenURL.name;
    tokens.push(urlEntered);
    }
    
```    
