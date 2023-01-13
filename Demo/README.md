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
 
**Step4**

- Create an form which takes in the user and the token id
- This form should be able to send the tokens to the designated owners


**IMPORTANT**

- Make the token non-fungible by including a condition
- This condition should check for existing tokens and if the token already exists the it should throw an error
- If not then it should include it in the tokens array
