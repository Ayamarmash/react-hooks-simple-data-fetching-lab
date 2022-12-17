import {React , useEffect , useState } from "react";


function App(){
    const[img , setImg] = useState(null)
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(data => data.json())
        .then(jData => setImg(jData.message))
    },[])

    const loadingDisplay = (<p>Loading ... </p>)
    const dogDisplay = (<img src={img} alt={"A Random Dog"}></img>)

    if(img) return dogDisplay
    return loadingDisplay
}
export default App