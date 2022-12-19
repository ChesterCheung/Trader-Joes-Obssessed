import * as React from "react";
import { useState, useEffect } from "react";
import MyReviewCard from "./MyReviewCard";

const MyReviewList = ({editReview, updatedReview, setUpdatedReview}) => {
  const [myReviews, setMyReviews] = useState([])

  useEffect(() => {
    fetch("/myreviews")
    .then(resp => resp.json())
    .then(data => setMyReviews(data))
  }, [updatedReview])

  const reviews = myReviews.map(review => <ul key={review.id}> <MyReviewCard setUpdatedReview={setUpdatedReview} editReview={editReview} review={review}/> </ul>)

  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '5vh',
    }

  return (
    <div>
      <div style={styles}>
        <h2>Your Reviews</h2>
      </div>
        <div>
        {reviews}
        </div>
    </div>
  )
}

export default MyReviewList

