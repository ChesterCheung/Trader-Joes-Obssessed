import React, {useState} from 'react'
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import EditReview from './EditReview';

const MyReviewCard = ({review, editReview, setUpdatedReview}) => {
  const [edit, setEdit] = useState(false)  

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#eee",
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary
  }));

  const onDelete = () => {
    fetch(`/reviews/${review.id}`, {
      method: "DELETE",
    })
    .then(data => setUpdatedReview(data))
  }

  return (
    <>
      <Box sx={{ flexGrow: 3 }}>
        <Grid >
          {edit ? <EditReview setEdit={setEdit} editReview={editReview} review={review}/> : 
                <>
                    <Grid item xs={12}>
                        <Item>{review.product.name} | {review.comments} | Rating:{review.rating}/5 </Item>
                    </Grid>
                    <Grid>
                        <Item><button onClick={() =>setEdit((isEditing) => !isEditing)}>Edit</button> <button onClick={onDelete}>Delete</button></Item>
                    </Grid>
                </>
            }
        </Grid>
      </Box>
    </>
  )
}

export default MyReviewCard

