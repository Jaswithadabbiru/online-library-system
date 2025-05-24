import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    // Fiction
    {
      id: 1,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      category: "Fiction",
      rating: 5,
      description: "A young wizard discovers his magical heritage and embarks on an adventure.",
      image: "https://m.media-amazon.com/images/I/81YOuOGFCJL.jpg"
    },
    {
      id: 2,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      category: "Fiction",
      rating: 5,
      description: "Bilbo Baggins embarks on a journey to reclaim a lost kingdom.",
      image: "https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg"
    },
    {
      id: 3,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      category: "Fiction",
      rating: 4,
      description: "A classic romance novel exploring themes of love and social status.",
      image: "https://m.media-amazon.com/images/W/MEDIAX_1215821-T1/images/I/91jCfChW-JL._SY522_.jpg"
    },

    // Mystery
    {
      id: 4,
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      category: "Mystery",
      rating: 5,
      description: "A journalist and hacker uncover a dark family secret.",
      image: "https://m.media-amazon.com/images/W/MEDIAX_1215821-T1/images/I/81YW99XIpJL._SY522_.jpg"
    },
    {
      id: 5,
      title: "Gone Girl",
      author: "Gillian Flynn",
      category: "Mystery",
      rating: 5,
      description: "A psychological thriller about a missing wife and hidden secrets.",
      image: "https://m.media-amazon.com/images/W/MEDIAX_1215821-T1/images/I/41+e4AprelL._SY445_SX342_.jpg"
    },
    {
      id: 6,
      title: "Sherlock Holmes: The Complete Novels and Stories",
      author: "Arthur Conan Doyle",
      category: "Mystery",
      rating: 5,
      description: "Classic detective stories featuring Sherlock Holmes.",
      image: "https://m.media-amazon.com/images/W/MEDIAX_1215821-T1/images/I/41kmTfzOUiL._SY445_SX342_.jpg"
    },

    // Science Fiction
    {
      id: 7,
      title: "Dune",
      author: "Frank Herbert",
      category: "Science Fiction",
      rating: 5,
      description: "A sci-fi epic about politics, power, and survival on a desert planet.",
      image: "https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg"
    },
    {
      id: 8,
      title: "The Martian",
      author: "Andy Weir",
      category: "Science Fiction",
      rating: 5,
      description: "A stranded astronaut fights for survival on Mars.",
      image: "https://m.media-amazon.com/images/I/81YOuOGFCJL.jpg"
    },
    {
      id: 9,
      title: "Neuromancer",
      author: "William Gibson",
      category: "Science Fiction",
      rating: 4,
      description: "A cyberpunk classic exploring AI and virtual reality.",
      image: "https://m.media-amazon.com/images/W/MEDIAX_1215821-T1/images/I/51nWyRYC9qL._SY445_SX342_.jpg"
    }
    
  ]
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push({
        ...action.payload,
        id: Date.now() // Auto-generate ID
      });
    }
  }
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;