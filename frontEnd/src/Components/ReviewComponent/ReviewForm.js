import React, { useContext, useState } from 'react';
import axios from 'axios';
import { StoreContext } from '../../StoreContextComponent/storeContext';
import './ReviewForm.css'
import { toast, ToastContainer } from 'react-toastify';

const ReviewForm = ({ productId, userId }) => {
  const { url } = useContext(StoreContext);
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${url}/api/reviews`, {
        productId,
        userId: localStorage.user,
        rating: Number(rating),
        comment,
      });
      setRating(1);
      setComment('');
      toast.success("Review is posted!",{
        theme: "colored",
      })
    } catch (error) {
      console.error('Error submitting review:', error.response ? error.response.data : error.message);
    }
  };
  return (
    <>
    <div className="formBox">
      <form onSubmit={handleSubmit} className='formMainBox'>
        <label htmlFor="rating">Rating</label>
        <div className="rateNum">
          <input type="number" value={rating} min="1" max="5" className='rating' onChange={(e) => setRating(Number(e.target.value))} />
        </div>
        <label htmlFor="comment">Comment</label>
        <div className="commentBox">
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
        </div>
        <button type="submit" className='reviewsubmitbtn'>Submit Review</button>
      </form>
    </div>
    <ToastContainer/>
    </>
  );
};

export default ReviewForm;
