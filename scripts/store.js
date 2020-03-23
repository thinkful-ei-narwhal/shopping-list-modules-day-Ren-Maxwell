let items = [];
let hideCheckedItems = false;

//findAndDelete
function findAndDelete(id){
    findByID(id);
    this.items.filter((number) => number === id);
  }
//findAndUpdateName
function findAndUpdateName(id, newName){
    try {
      item.validateName(newName);
      findByID(id);
      render();
      }
     catch (error) {
      console.log(`Cannot update name: ${error.message}`);
    }
  }
//findAndToggleChecked
function findAndToggleChecked(id){
    //this will become a cuid kajlshdkjsdfhasdf thing
    this.findByID(id);
    return store.hideCheckedItems = true;
}
//addItem function
function addItem(name){
    try {
      item.validateName(name);
      this.items.push(item.create(name));
      console.log(store.items);
      //render();
    } catch (error) {
      console.log("I sure love when instructions are specific.");
    }
  }
  
//findByID function 
function findByID(id){
    let text = store.items.find(function(){
      if(id === store.items.id){
        return id;
      }
    });
}
export default
{
items,
hideCheckedItems,
findByID,
findAndToggleChecked,
addItem,
findAndUpdateName,
findAndDelete
}
