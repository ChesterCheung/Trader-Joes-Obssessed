import * as React from "react";
import ProductReviewCard from './ProductReviewCard';
import Box from '@mui/material/Box';
import { useState } from "react";
import ReviewForm from "./ReviewForm";

const ProductReviewList = ({product, allUsers, addReview}) => {
    const productReviews = product.reviews?.map(review => <ul key={review.id}> <ProductReviewCard allUsers={allUsers} review={review}/> </ul>)
    const [reviewForm, setReviewForm] = useState(false)

    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '15vh',
        }
        

  return (
    <div >
        <div style={styles}>
            <h2>Reviews</h2>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button onClick={() => setReviewForm(rev => !rev)} > {reviewForm ? "Hide" : "Write a Review"} </button>
        </div>
        <div>
            {reviewForm ? <ReviewForm addReview={addReview} /> : null}
        </div>
        <div >
            <div>
                <Box sx={{ width: '100%' }}>
                       {productReviews}
                </Box>
            </div>
        </div>
    </div>
  )
}

export default ProductReviewList