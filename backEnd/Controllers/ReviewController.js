import ReviewModel from '../Models/ReviewModel.js';

// Controller to add a new review
export const addReview = async (req, res) => {
  const { productId, userId, rating, comment } = req.body;
  const review = new ReviewModel({ productId, userId, rating, comment });

  try {
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller to get reviews for a specific product
export const getReviewsByProductId = async (req, res) => {
  try {
    const reviews = await ReviewModel.find({ productId: req.params.productId });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Get Error");
  }
};


