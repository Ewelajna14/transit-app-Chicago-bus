
import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {fetchFavLine} from "../redux/favLineSlice";
import {createFavLine} from "../redux/favLineSlice";
import {deleteFavLine} from "../redux/favLineSlice";
import MyFavLine from "./MyFavLine";
import SearchBar from "./SearchBar";
import {Typography, Grid, Box, Button, TextField} from "@mui/material"

function MyAccount({user, setUser}){

const [show, setShow] = useState(false)

const [fname, setFname] = useState(user.first_name)
const [lname, setLname] = useState(user.last_name)
const [uname, setUname] = useState(user.username)
const [email, setEmail] = useState(user.email)



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

function handleUpdateButton(){
    setShow(!show)
}

function handleUpdateUser(e){
    e.preventDefault()
    const updatedUser ={
    first_name: fname,
    last_name: lname,
    username: uname,
    email: email
    }

    fetch(`/users/${user.id}`, {
        method: "PATCH",
        headers:{
        "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
    })
    .then((r)=> r.json())
    .then((data) => setUser(data))
    setShow(false)
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
                Hello {user? user.first_name: null} <Button onClick={handleUpdateButton} 
                sx={{color: '#64748B', marginRight: 1, border: '1px solid #959BBF', '&:hover': { backgroundColor: '#959BBF',
                    transition: '0.7s',color: 'white'}}}>{show?'Close':'Update'}</Button>
            </Typography>
            { show?
            <form onSubmit ={handleUpdateUser}>
            <Grid container spacing={2} sx={{marginTop:2}}>
                <Grid item xs={12}>
                <TextField variant="standard" label="First Name" placeholder={user.first_name} value={fname} onChange={(e)=>setFname(e.target.value)}/>
                </Grid>
                <Grid item xs={12}>
                <TextField variant="standard" label="Last Name" placeholder={user.last_name} value={lname} onChange={(e)=>setLname(e.target.value)}/>
                </Grid>
                <Grid item xs={12}>
                <TextField variant="standard" label="Username" placeholder={user.username} value={uname} onChange={(e)=>setUname(e.target.value)}/>
                </Grid>
                <Grid item xs={12}>
                <TextField variant="standard" label="Email" placeholder={user.email} value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </Grid>
                <Button type="submit" sx={{color: '#64748B', marginTop: 1, marginLeft: 2, border: '1px solid #959BBF', '&:hover': { backgroundColor: '#959BBF',
                        transition: '0.7s',color: 'white'}}}>
                    Submit
                </Button>
            </Grid>
            </form>
             :null}
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

            

