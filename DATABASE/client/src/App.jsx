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
      </div>      
    </>
  )
}

export default App;