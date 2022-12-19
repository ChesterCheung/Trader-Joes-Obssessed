import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import RatingOption from './RatingOption'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const ReviewForm = ({addReview}) => {
    const [comment, setComment] = useState("")
    const [rating, setRating] = useState("")
    const { id } = useParams()
  

      const handleChange = (event) => {
        setRating(event.target.value);
      };

    const formSubmit = (e) => {
        e.preventDefault()
          fetch("/reviews", {
              method:"POST",
              headers: {"Content-Type": "application/json",},
              body: JSON.stringify({
                comments: comment,
                rating: rating,
                product_id: id
                }),
          })
          .then((r) => r.json())
          .then((data)=> addReview(data))
      }

    return (
    <div>
        <form align="center" onSubmit={formSubmit}>
          <Box align="center" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}noValidate autoComplete="off">
              <h2>Add Review</h2>
              <TextField
              id="productReview"
              label="Your Review"
              onChange={e => setComment(e.target.value)}
              value={comment}
              />
              <RatingOption rating={rating} handleChange={handleChange} />
          </Box>
        <input type="submit" value="Add"></input>
        </form>
    </div>
    )
}

export default ReviewForm


