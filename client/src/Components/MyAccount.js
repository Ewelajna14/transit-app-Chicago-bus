
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {fetchFavLine} from "../redux/favLineSlice";
import {createFavLine} from "../redux/favLineSlice";
import {deleteFavLine} from "../redux/favLineSlice";
import MyFavLine from "./MyFavLine";
import SearchBar from "./SearchBar";
import {Typography, Grid, Box} from "@mui/material"

function MyAccount({user}){

const dispatch = useDispatch()

  useEffect(()=>{ 
   dispatch(fetchFavLine(user.id)) 
   }, [dispatch])

const favLine = useSelector((state)=> state.favLine.entities)
  
function onAddFavLine(route, name, busId){

const newData ={
    user_id: user.id,
    route,
    name,
    busId,
    liked: "true"
}

const id = user.id
dispatch(createFavLine({id, newData}))
}


function onDelete(user, id){
dispatch(deleteFavLine({user: user, id: id}))
}


    return(
        <Grid container spacing={2}
        sx={{
            margin: "auto",
            marginTop: 5,
            marginLeft: 10
        }}
        >
            <Grid item xs={12}>
            <Typography variant="h4" sx={{fontFamily: 'Varela Round, sans-serif'}}>
                Hello {user? user.first_name: null}
            </Typography>
            <Typography variant="h6" sx={{marginTop: 2, marginBottom: 2, fontFamily: 'Varela Round, sans-serif'}}>
            Search For Favourite Lines: 
            </Typography>
            <SearchBar onAddFavLine={onAddFavLine}/>
            <Typography variant="h5" component="div" sx={{marginTop: 10, marginBottom: 2, fontFamily: 'Varela Round, sans-serif'}}>
                        Your Favourite Lines
            </Typography>
            </Grid>
            <Grid item xs={12}>
            { favLine.length != 0 &&(
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'left',
                '& > *': {
                m: 1,
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
                },
               }}
            >
                {
              favLine.map((fav)=>{
              return(
               <MyFavLine key={fav.id} fav={fav} onDelete={onDelete} user={user}/>
              )
              }) 
             }
              </Box> 
             ) }
             </Grid>

        </Grid>
    )
}

export default MyAccount

            

