/* eslint disable */

function validateName(name){
    if(!name){
    throw new TypeError("Name must not be blank, peasant");
    console.log('sup Im working');
    }
}
function create(name){
    let item = {
      id: cuid(),
      name: name,
      checked:false
 };
  console.log(item);
}
export default {
    validateName,
    create
};

