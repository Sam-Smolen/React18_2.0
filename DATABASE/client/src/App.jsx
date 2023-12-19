import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {

  let [cars,setCars] = useState([]);

useEffect(()=>{
  getCars()
},[])

const getCars = () => {
  axios.get('/api/getcars')
  .then(response => {
    setCars(response.data)
  })
}

const onCarRemove = () => {
  axios.post('/api/removecar',{
    brand: 'Audi'
  })
  .then(response => {
    console.log(response.data)
    getCars()
  })
}

  const onCarSubmit = () => {
    axios.post('/api/addcar',{
      brand:'Ford',
      model:'F-150',
      year:2020,
      avail:true
    })
    .then( response => {
      console.log(response.data);
    })
  }

  const onCarUpdate = () => {
    axios.post('/api/updatecar',{
      id:'6580dcfa5c14505a79de7a88',
      brand:'Lexuss'
    })
    .then( response =>{
      getCars();
    })
  }


  return(
    <>
      <div className='App'>
        <h1>Add car</h1>
        <button
          onClick={()=> onCarSubmit()}
        >
            Add car to DB
        </button>
        <hr />
        {
        cars.map(car => (
          <div key={car._id}>{car.brand}</div>
        ))}
        <hr />
        <h1>Delete A Car</h1>
        <button onClick={()=> onCarRemove()}>Delete</button>
        <hr/>
        <h2>Update elements</h2>
        <button onClick={()=> onCarUpdate()}>Update !!!</button>
      </div>      
    </>
  )
}

export default App;