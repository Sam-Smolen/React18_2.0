import { useState } from 'react';
import { CSSTransition } from 'react-transition-group'

const CssTr = () => {
  let [show,setShow] = useState(false)

  const showDiv = () =>{
    setShow(!show);
  }

  return (
    <>
      <CSSTransition
        in={show}
        timeout={5000}
        classNames="cssSq"
      >
        <div className="cssSq">
            Hello
        </div>
      </CSSTransition>
      <hr/>
      <button className='btn btn-primary' onClick={showDiv}>Show</button>
    </>
  )
};
  
export default CssTr;