import React, { useState , useEffect} from 'react'
import TurkeyMap from 'turkey-map-react';
import Navbar from './Navbar';
import axios from 'axios';

function Map() {
  const [btn, setBtn] = useState()
  const [data, setData] = useState()
  const [name,setName] = useState()

 

  useEffect(() => {
    const api = async (x) => {
      const reponse = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${x}&appid=9ba7359a7717d6be9efd078145cd399f&units=metric&lang=tr`).then((r) => r.data)

      setData(reponse)

    }
    
      api(btn)
   
}, [btn])
  


  return (
    <div className='dd'>
        <Navbar/>
        <div className='row'>
          <div className='col-sm-8'>
            
          <TurkeyMap  hoverable={true}
            onHover={ ({  name }) => setName(name) }  onClick={ ({  name }) => setBtn(name) } />
            { name && <div className='cityName'>{name}</div>}
          </div>
          <div className='col-sm-4'>
              {data ?   <div className="city">
                    <h2 className="city-name">
                        <span>{data.name}</span>
                        <sup>{data.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(data.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description} />
                        <p>{data.weather[0].description}</p>
                    </div>
                </div>:<h1></h1>}
          </div>
        </div>
        
  
      
        
    </div>
  )
}

export default Map