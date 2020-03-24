import item from './item.js';

let items = [];
let hideCheckedItems = false;

//findAndDelete
function findAndDelete(id){
    this.findByID(id);
    const index = this.items.findIndex(item => item.id === id);
    items.splice(index, 1);
    this.items = this.items.filter((filteredID) => filteredID.id !== id);
  }
//findAndUpdateName
function findAndUpdateName(id, newName){
    try {
      const item = this.findByID(id);
      return item.name = newName;
      }
     catch (error) {
      console.log(`Cannot update name: ${error.message}`);
    }
  }
//findAndToggleChecked
function findAndToggleChecked(id){
    //this will become a cuid kajlshdkjsdfhasdf thing
    let foundItem = this.findByID(id);
    return foundItem.checked = !foundItem.checked; 
}
function toggleCheckedFilter(){
  return this.hideCheckedItems = !this.hideCheckedItems;
}
//addItem function
function addItem(name){
    try {
      item.validateName(name);
      this.items.push(item.create(name));
    } catch (error) {
      console.log(error);
    }
  }
  
//findByID function finds the object in the array
function findByID(id){
    return items.find((idnumber) => idnumber.id === id);
}
export default
{
items,
hideCheckedItems,
findByID,
findAndToggleChecked,
addItem,
findAndUpdateName,
findAndDelete,
toggleCheckedFilter
}