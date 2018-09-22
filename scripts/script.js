let listItemsArr1 = [
  {
    content: "dsfa",
    isComplete: false
  }
];
let listItemsArr2 = [];

Vue.component("list-create", {
  props: ['content'],
  template: '<li class="list-items">{{ content.content }}</li>'
});

const vm = new Vue({
  el: '#v-for-list1',
  data: {
    items: [
      {
        id: 1,
        content: "df",
        isComplete: false
      },
      {
        id: 2,
        content: "dsfa",
        isComplete: false
      } 
    ]
  }
});


//const vm = new Vue({
//  el: '.list-items',
//  data: {
//    listItems1: [],
//    listItems2: [],
//    list1: '',
//    list2: '',
//    clearListContent: '',
//    error: false,
//    visible: false,
//    animateComplete: false
//  },
//  methods: {
//    listAdd: function() {
//      if (this.list1 === '') {
//          alert("Field empty");
//      }else if (this.listItems1) {
//        this.listItems1.push({
//          content: this.list1,
//          completeStatus: false,       
//        });
//        this.list1 = '';
//      }
//    },
//    listCompleteCheck: function(item) {
//      console.log(item.completeStatus);
//      if (!item.completeStatus) {
//        this.listItems1.splice(this.listItems1.indexOf(item),1);
//        this.listItems2.push(item);
//        item.completeStatus = true;
//      } else if (item.completeStatus) {
//        this.listItems2.splice(this.listItems2.indexOf(item),1);
//        this.listItems1.push(item);
//        item.completeStatus = false;
//      }  
//    },
//    hideDone: function() {
//      
//      if (this.visible) {
//        this.visible = false;
//      } else {
//        this.visible = true;
//      }
//    },
//    clearList: function() {
//      let overwrite = [];
//      if (listItemsArr1.length > 0) {
//        let deleteCheck = prompt("Are you sure?");
//        if (deleteCheck == "yes") {
//          this.listItems1 = overwrite;
//        }
//      }
//      console.log(this);
//    },
//    triggerList1 () {
//      
//      let overwrite = [];
//      let array1 = this.$refs.list1Clear;
//
//      if (!array1.firstChild) {
//        alert("There is nothing to clear");
//      } else {
//      while (array1.firstChild) {
//        array1.removeChild(array1.childNodes[1]);
//        }
//      }
//    },
//    triggerList2 () {
//      let overwrite = [];
//      let array2 = this.$refs.list2Clear;
//      
//      if (!array2.firstChild) {
//        alert("There is nothing to clear");
//      } else {
//      while (array2.firstChild) {
//        array2.removeChild(array2.firstChild);
//        }
//      }
//    }
//  }
//});


