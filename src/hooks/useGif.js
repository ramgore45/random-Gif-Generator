import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = 'slkcDTCEmTdd8sLxnmQ7UguSdDxiy576'
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;



const useGif = (tag) => {

    const [gif, setGif] = useState('')
    const [loading, setLoading] = useState(false)

    console.log('Start Fetching')
    async function fetchData(tag){
        setLoading(true)
        const {data} = await axios.get(tag? `${url}&tag=${tag}`: url) 
        const imagesrc = data.data.images.downsized_large.url
        setGif(imagesrc)
        setLoading(false)
    }
    
    useEffect(()=>{
        fetchData('cat')
    },[])

    return{gif, loading, fetchData}
};

export default useGif;
