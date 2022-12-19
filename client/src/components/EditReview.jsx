import React, {useState} from 'react'
import RatingOption from './RatingOption'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";

const EditReview = ({review, editReview, setEdit}) => {
    const [updatedComment, setUpdatedComment] = useState("")
    const [updatedRating, setUpdatedRating] = useState("")
    
    const handleEditForm = (e) => {
        e.preventDefault()
          fetch("/reviews/" + review.id, {
              method: "PATCH",
              headers:{
                  "Content-Type": "application/json",
          },
          body: JSON.stringify({comments: updatedComment,
            rating: updatedRating})
          })
          .then(resp => resp.json())
          .then(data => editReview(data))
          setEdit(false)
      }

    const handleChange = (event) => {
    setUpdatedRating(event.target.value);
    };

  return (
    <>
      <Box sx={{ flexGrow: 3 }}>
        <Grid >
          <Grid item xs={12}>
            <form onSubmit={handleEditForm} align="center" >
                <Box align="center" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}noValidate autoComplete="off">
                    <h2>Edit Review</h2>
                    <TextField
                    id="editReview"
                    label="Edit Review"
                    onChange={e => setUpdatedComment(e.target.value)}
                    value={updatedComment}
                    />
                    <RatingOption rating={updatedRating} handleChange={handleChange} />
                </Box>
                <input type="submit" value="Submit Changes"></input>
            </form>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default EditReview