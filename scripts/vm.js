const vm = new Vue({
  el: '.to-do-app',
  data: {
    items: {
      toDo: [],//Array for storing list items in list1
      complete: [],//Array for storing list items in list2
      list1: '',//Input field is set to model list1. list1 is used to update the toDo array above and add items to the list.
      list2: '',//Currently unused.
    },
    visible: false,
    animateComplete: false
  },
  methods: {
    listAdd: function() {//Checks for input field value, if value exists add to list1.
      console.log(this);
      if (this.items.list1 === '') {
          alert("Field empty! All prompts and alerts are placeholder.");
      }else if (this.items.toDo) {
        let content = this.items.list1;
        console.log(content);
        this.items.toDo.push({//pushes the contents from input field to toDo array in Vue instance and sets two properties, content, and completeStatus.
          content: content,
          completeStatus: false,//Utilized in listCompleteCheck() to select the list item will be moved to.       
        });     
        this.items.list1 = '';//Sets list1 back to an empty string to reset input field.
      }
    },
    listCompleteCheck: function(item) {//Checks the value of the completeStatus property for the item clicked and moves the item to the appropriate array.
      let toDoItem = this.items.toDo;
      let completeItem = this.items.complete;
      
      if (!item.completeStatus) {
        toDoItem.splice(toDoItem.indexOf(item),1);
        this.items.complete.push(item);
        item.completeStatus = true;
      } else if (item.completeStatus) {
        completeItem.splice(completeItem.indexOf(item),1);
        this.items.toDo.push(item);
        item.completeStatus = false;
      }  
    },
    hideDone: function() {//Checks boolean value for the visible property in Vue instance. Bound to the COMPLETED/list2 list and sets display value to show or hide element.
      if (this.visible) {
        this.visible = false;
      } else {
        this.visible = true;
      }
    },
    triggerList1 () {//Checks for existence of child nodes on <ul> for list1. If they exist will get confirmation from user to delete all childnodes/clear the list.
      let array1 = this.$refs.list1Clear;
      if (array1.childNodes.length === 0) {
        alert("There is nothing to clear. All prompts and alerts are placeholder.");
      } else {
        let confirmation = prompt("This will delete the entire list. Type 'yes' if you want to clear this list. All prompts and alerts are placeholder.");
        if (confirmation === "yes") {
          while (array1.childNodes.length > 0) {
            array1.removeChild(array1.firstChild);
          }
        }
        }
    },
    triggerList2 () {//Checks for existence of child nodes on <ul> for list1. If they exist will get confirmation from user to delete all childnodes/clear the list.
      let array2 = this.$refs.list2Clear;
      if (array2.childNodes.length === 0) {
        alert("There is nothing to clear. All prompts and alerts are placeholder.");
      } else {
        let confirmation = prompt("This will delete the entire list. Type 'yes' if you want to clear this list. All prompts and alerts are placeholder.");
        if (confirmation === "yes") {
          while (array2.childNodes.length > 0) {
            array2.removeChild(array2.firstChild);
          }
        }
        }
    }
  }
});


