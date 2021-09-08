import React, {useState, useEffect} from "react";

function App(){
    const [pic, setPic] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() =>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then(data => {
            setPic(data.message)
            setIsLoaded(true)
        })
    }, [])
    
    if(!isLoaded) return <p>Loading...</p>

    return(
        <div>
            <img src={pic} alt="A Random Dog" />
        </div>
    )
}

export default App