<template>
  <div>
    <h1>{{title}}</h1>
    <ul>
      <book-item v-for="book in books" v-bind:key="book.title" v-bind:book="book"></book-item>
    </ul>
    <hr>
    <book-form @addBook="appendBook"></book-form>
    <hr>
    <my-buttons v-on:confirmed="doSomething" v-on:canceled="doSomethingElse"></my-buttons>
  </div>
</template>

<script>
import BookItem from './BookItem';
import BookForm from './BookForm';
import MyButtons from './MyButtons';

export default {
  name: 'BookList',
  components: {
    BookItem,
    BookForm,
    MyButtons
  },
  methods: {
    appendBook (bookTitle, bookAuthor) {
      this.books.push({ title: bookTitle, author: bookAuthor });
    },
    doSomething () {
      console.log('BookList.vue saw the confirmed event from MyButton.vue');
    },
    doSomethingElse () {
      console.log('BookList.vue saw the canceled event from MyButton.vue');
    },
  },
  data () {
    return {
      title: 'All Books',
      books: [
        { title: 'Self-Reliance', author: 'Ralph Waldo Emerson' },
        { title: 'American Gods', author: 'Neil Gaiman' },
        { title: 'Amusing Ourselves to Death', author: 'Neil Postman' }
      ]
    };
  }
};
</script>


<style>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
/* li {
 display: block;
 margin:0 10px;
} */
</style>

