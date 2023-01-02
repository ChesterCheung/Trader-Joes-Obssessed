import * as React from "react";
import ProductReviewCard from './ProductReviewCard'
import { useState } from "react";
import ReviewForm from "./ReviewForm";

const ProductReviewList = ({product, allUsers, addReview}) => {
    const productReviews = product.reviews?.map(review => <ul key={review.id}> <ProductReviewCard allUsers={allUsers} review={review}/> </ul>)
    const [reviewForm, setReviewForm] = useState(false)

    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40vh',
        }

  return (
    <div >
        <div style={styles}>
            <h2>Reviews</h2>
        </div>
        <div >
            <div>
                {productReviews}
            </div>
        </div>
        <button onClick={() => setReviewForm(rev => !rev)} > {reviewForm ? "Hide" : "Write a Review"} </button>
        {reviewForm ? <ReviewForm addReview={addReview} /> : null}
    </div>
  )
}

export default ProductReviewList