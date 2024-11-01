import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './ReviewList.css';
import { StoreContext } from '../../StoreContextComponent/storeContext';

const ReviewList = ({ productId }) => {
  const { url } = useContext(StoreContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!productId) {
      console.error("ProductID is undefined");
      return;
    }

    const fetchReviews = async () => {
      try {
        console.log("Fetching reviews from URL:", `${url}/api/reviews/${productId}`);
        const response = await axios.get(`${url}/api/reviews/${productId}`);
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error.message);
        if (error.response) {
          console.error('Response status:', error.response.status);
          console.error('Response data:', error.response.data);
        }
      }
    };

    fetchReviews();
  }, [productId, url]);

  return (
    <div className="review-list">
      <div className="reviewHeading">
        <h2>Reviews</h2>
      </div>
      {reviews.length > 0 ? (
        reviews.map(({ _id, userId, rating, comment }) => (
          <div key={_id} className="review-item">
            <p>Rating: {rating}</p>
            <p>{comment}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default ReviewList;
