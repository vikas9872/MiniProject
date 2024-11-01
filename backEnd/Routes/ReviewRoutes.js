import express from 'express';
import { addReview, getReviewsByProductId } from '../Controllers/ReviewController.js';

const router = express.Router();

// Add a new review
router.post('/', addReview);

// Get reviews for a specific product
router.get('/:productId', getReviewsByProductId);

export default router;
