import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/bookSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: 0
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      ...formData,
      id: Date.now()
    };
    dispatch(addBook(newBook));
    navigate('/browse');
  };

  return (
    <form onSubmit={handleSubmit} className="add-book-form">
      <h2>Add New Book</h2>
      {/* Form fields here */}
      <button type="submit" className="btn-primary">Add Book</button>
    </form>
  );
};

export default AddBook;