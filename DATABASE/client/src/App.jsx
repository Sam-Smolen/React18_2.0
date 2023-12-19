import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {

  let [cars,setCars] = useState([]);

useEffect(()=>{
  axios.get('/api/getcars')
  .then(response => {
    setCars(response.data)
  })
},[])

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
      </div>      
    </>
  )
}

export default App;