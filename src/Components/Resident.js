import { useState,useEffect } from 'react';
import axios from 'axios';

const Resident = ({habitantes}) => {
   

    const [profile, setprofile]=useState({})
   
   
   useEffect(()=>{
        axios.get(habitantes)
            .then(res=> setprofile(res.data))

           

   },[habitantes])
   



const leess=()=>{ if(profile.status==="Alive"){
    return("green")
}
else if(profile.status==="Dead"){
    return("red")
}
else{return("blue")
}}

   
   
   
   
   
    return (
        <div>
            
            <div className='card-datum'>
                <div id='state'>
                    <div>
                        
                            
                            
                            <div id='circle' style={{backgroundColor: leess()}}></div>
                         <div id='tank'>  {profile.status}</div>
                    </div>
                </div>
                 <img src={profile.image} alt="" />
                 <div className='cd'>
                    
                    <div id='name'>{profile.name}</div>
                    <p className='EN'>RACE</p>
                    <div className='date'>{profile.species}</div>
                    <p className='EN'>ORIGIN</p>
                    <div className='date'>{profile.origin?.name}</div>
                    <p className='EN'>EPISODE APPEARANCE</p>
                   
                    <div className='date'>{profile.episode?.length}</div>
                 </div>
            </div>
                 
                
            
            
        </div>
    );
};

export default Resident;