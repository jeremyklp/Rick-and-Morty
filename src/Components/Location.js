import { useState,useEffect } from 'react';
import axios from 'axios';
import Resident from "../Components/Resident"
const Location = () => {
    const[location, setlocation]=useState({})
   const [random] =useState (Math.floor(Math.random()*126)+1)
   
    const[text, settex]=useState("");
    

    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
            .then(res=>setlocation(res.data));

           
    
    
    },[random])
    
    
    const changelocation= ()=>{
       
        axios.get(`https://rickandmortyapi.com/api/location/${text}`)
        .then(res => setlocation(res.data))
    }


    
    return (
        <div>
            
            <div>
                <input  
                type="number" 
                placeholder='Enter #id max 126'
                value={text}
                onChange={e => settex(e.target.value)}
                />
                <button onClick={changelocation}>search</button>
            </div>
           <div className='spacecard'>
                <div className='card-menu'>
                    <div className='ger'>Name: <div className='result'>{location.name}</div> </div>
                    <div className='ger'>Type: <div className='result'>{location.type}</div></div>
                    <div className='ger'>Dimension: <div className='result'>{location.dimension}</div></div>
                    <div className='ger'>Residents: <div className='result'>{location.residents?.length}</div></div>
                </div>
            </div>
            
            <div className='fff'>
                
                {location.residents?.map(e=>(
                    <Resident habitantes={e} key={e}/>
                ))}
            </div>

            <div id="footerrr"><footer>thanks to Academlo</footer></div>

        </div>
        
    );
};

export default Location;

