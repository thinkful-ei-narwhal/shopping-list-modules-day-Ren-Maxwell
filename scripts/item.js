/* eslint disable */


//Function to validate name
function validateName(name){
    if(name === ''){
    //throws an error if the user doesn't type anything. 
    throw new TypeError("Name must not be blank, peasant");
    }
    else{
        
    }
}

//Function to create new list item
function create(name){
    let item = {
      id: cuid(),
      name: name,
      checked:false
 };
  return item;
}
export default {
    validateName,
    create
};

