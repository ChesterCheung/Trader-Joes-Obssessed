import * as React from "react";
import ProductReviewCard from './ProductReviewCard'

const ProductReviewList = ({product, allUsers}) => {
    const productReviews = product.reviews?.map(review => <ul key={review.id}> <ProductReviewCard allUsers={allUsers} review={review}/> </ul>)

    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '5vh',
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
    </div>
  )
}

export default ProductReviewList