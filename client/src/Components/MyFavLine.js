import {Button, Card, CardContent, Typography} from "@mui/material"
import {useDispatch} from "react-redux"
import {fetchLine} from "../redux/lineSlice"
import {useNavigate} from "react-router-dom";



function MyFavLine({user, fav, onDelete}){

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleDelete(event){
        onDelete(user.id, event.target.id)
    }

    function handleRedirect(event){
        const id = event.target.id
        console.log(id)
        dispatch(fetchLine(id))
        navigate("/details")
    }

    
    return(
            <Card elevation={10} sx={{ width: '20%', marginBottom: 5}}>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ mb: 1.5, fontFamily: 'Varela Round, sans-serif' }} color="text.secondary">
                     Bus:  {fav.route}
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ mb: 1.5, fontFamily: 'Varela Round, sans-serif'}} color="text.secondary">
                      Route: {fav.name}
                    </Typography>
                     <Button id = {fav.id} sx={{color: '#64748B', marginRight: 1, border: '1px solid #959BBF', '&:hover': { backgroundColor: '#959BBF',
                                        transition: '0.7s',color: 'white'}}}  onClick={handleDelete}>Delete</Button>
                     <Button id = {fav.busId} sx={{color: '#64748B', marginRight: 1, border: '1px solid #959BBF', '&:hover': { backgroundColor: '#959BBF',
                                        transition: '0.7s',color: 'white'}}}  onClick={handleRedirect}> Show Line</Button>
                </CardContent>
            </Card>
        
    )
}

export default MyFavLine