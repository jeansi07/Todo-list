import react, { useEffect } from 'react' 


const GetCats = () =>{
const url = 'https://catfact.ninja/docs'

const fetchApi = async () => {
    const response = await fetch(url)
    console.log(response.status);
}

useEffect (() => {
    fetchApi ()
}, [])

}