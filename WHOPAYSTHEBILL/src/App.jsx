import { useContext } from 'react';
import {MyContext} from './context/index.jsx';
import Stage1 from './components/stage_1.jsx';
import Stage2 from './components/stage_2.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/app.css'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const context = useContext(MyContext)
  

  return(
    <div className='wrapper'>
      <div className='center-wrapper'>
        <h1>Who pays the bill ?</h1>
        { context.stage === 1 ? 
          <Stage1/>
        :
          <Stage2/>
        }
      </div>
    </div>
  )

}

export default App;