import React from 'react'
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";


const ProductReviewCard = ({review, allUsers}) => {


// const assignReviewer = (currentReviewer) =>{
//   const user = allUsers.map(user => {
//     if (user.id === review.user_id){
//       return currentReviewer
//     } else {
//       return user
//     }
//   })
//   setAuthor(user)
// }

const user = allUsers.filter(user => {
  if (review.user_id === user.id){
    return user
  } else {
    return null
  }
})

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#eee",
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary
  }));

  return (
    <>
    <Box sx={{ flexGrow: 3 }}>
        <Grid >
          <Grid item xs={12}>
            <Item>{review.comments} | Rating:{review.rating}/5 | -{user[0].username}</Item>
          </Grid>
        
        </Grid>
      </Box>
      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>{review.comments}</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Rating:{review.rating}/5</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>-{user[0].username}</Item>
          </Grid>
        </Grid>
      </Box> */}
    </>
  )
}

export default ProductReviewCard





    