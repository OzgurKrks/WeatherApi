import React, { useEffect, useState } from 'react'
import CityName from '../CityName.json'
import axios from 'axios'
import Navbar from './Navbar'


function List() {
  
  const [name, SetName] = useState(CityName)
  const [btn, setBtn] = useState("ankara")
  const [data, setData] = useState()
  useEffect(() => {
    const api = async (x) => {
      const reponse = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${x}&appid=9ba7359a7717d6be9efd078145cd399f&units=metric&lang=tr`).then((r) => r.data)

      setData(reponse)

    }
    
      api(btn)
   
  },[btn])


const onClick = (e) => {

    setBtn(e.target.value)



  }

  const onChange = (e) => {
    let a = e.target.value
    let b = a.toUpperCase()
    SetName(name.filter((m) => m.name.includes(b)))

    if (a === "") {
      SetName(CityName)
    }
  }








  return (
    <>
      <Navbar />
      <div className='wrapper'>
      <div className='container'>
        <div className='container d-flex justify-content-center'>
          <input className='search' type="text" placeholder='Search City' onChange={onChange} />
        </div>
        <div className='buttons'>
        <div className='row'>
          { name.map((m) => (
            <div className='col-lg'>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#sa" onClick={onClick} style={{ "width": "250px", "margin": "10px" }} value={m.name} >{m.name}</button>
            </div>
          ))}
        </div>
        </div>
       {data ?  <div class="modal fade" id="sa" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <div className="city">
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
                </div>
                    </div>
                   
                  </div>
                </div>
              </div>:<h1></h1>}

      </div>
      </div>
    </>
  )
}

export default List