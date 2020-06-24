import { bookService } from "../services/book-service.js";
export default {
    props: [],
    template: `
  
    <section class="book-add">
  
    <input type="text" class="search"  placeholder="Search for a book" v-model="strName" @input="search"/>
    
      <ul v-for="book in this.booksFromApi" :key="book.id">
       {{ book.volumeInfo.title }} <button class="bookAdder" @click="addBook(book.volumeInfo.title )"> + </button>
    </ul>
      
    </section>
   
      `,

    data() {
        return {
            strName: "",
            booksFromApi: [],
        };
    },
    methods: {
        search() {
            console.log(this.strName);

            axios
                .get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${this.strName}`)
                .then((response) => {
                    console.log(response.data.items);
                    this.booksFromApi = response.data.items;
                });
        },
        addBook(bookTitle) {
            const foundBook = this.booksFromApi.find(book => book.volumeInfo.title === bookTitle)
            console.log('yesssss', bookTitle);
            bookService.addGoogleBook(foundBook)
        },

    },
    components: {},
};