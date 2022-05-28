import {TextField, InputAdornment} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import { fetchBuses } from "../redux/busesSlice";
import  "../App.css"

function SearchBar({onAddFavLine}){

    const [filteredData, setFilteredData] = useState([])

    const [inputWord, setInputWord] = useState("")
   
    const dispatch = useDispatch()

    useEffect(()=>{
    dispatch(fetchBuses())
    }, [])

   const buses = useSelector((state)=> state.persisted.buses.entities)

   function handleFilter(event){
     const search = event.target.value
     setInputWord(search)
     const newFilter = buses.filter((value)=>{
       return  value.route.includes(search)
     })
     if(search === ""){
         setFilteredData([])
     } else{

        setFilteredData(newFilter)
     }
   }

   function handleAddToFav(event){
    const route =  event.target.innerText
    const name= event.target.value
    const busId = event.target.id
    onAddFavLine(route, name, busId)
   }

   function handleClearSearch(){
       setFilteredData([])
       setInputWord("")
   }
  

    return(
        <div>
            <TextField
            value={inputWord}
            sx={{
                width: '20%',
            }}
            onChange={handleFilter}
            InputProps={{
            endAdornment: (
            <InputAdornment position="end">
               {filteredData.length == 0? <SearchIcon/> : <CloseIcon  onClick={handleClearSearch}/>}
            </InputAdornment>
            )
            }}
            />
            { filteredData.length != 0 && (
            <p className="dataResults">
                {filteredData.map((bus, key)=>{
                    return <button style={{backgroundColor:'transparent'}} key ={bus.id} className="dataItem" id={bus.id} value={bus.name} onClick={handleAddToFav}>{bus.route}</button>
                })}
            </p>
             )}

        </div>
    )
}

export default SearchBar