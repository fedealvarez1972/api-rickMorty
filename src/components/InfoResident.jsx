import axios from "axios";
import {useState, useEffect} from "react";


const InfoResident = ({fedeyenny}) => {
const [tipitos, setTipitos] = useState({})

useEffect(()=>{
axios
.get(fedeyenny)
    .then (resp => setTipitos(resp.data))
    .catch (error => console.error(error))

},[])

  return (
    <div className="card">
    <li >
        <div className="card-container">
        <img className="img-card" src={tipitos.image} alt="" />
        <h2 className="nomber-card">{tipitos.name}</h2>
        <div className="card-info">
        <p className="card-info-p">Status: {tipitos.status}</p>
                <p className="card-info-p">Origen: {tipitos.origin?.name}</p>
                <p className="card-info-p">Especie: {tipitos.species}</p>
                <p className="card-info-p">Apariciones: {tipitos.episode?.length}</p>
            </div>
            
            </div>           
        </li>
       </div>
  )
}

export default InfoResident