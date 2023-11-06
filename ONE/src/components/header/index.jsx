import Navigation from './nav';
import { useState } from 'react';

const Header = () => {
    let [keywords,setKeywords] = useState('');

    const onChangeHandler = (event) => {
        setKeywords(event.target.value);
    }

    return(
        <header>
            <div 
                className="logo"
            >Awesome News</div>
            <input
                onChange={onChangeHandler}
            />
            the Keyword is: {keywords}
            <Navigation/>
        </header>
    )
}
    
export default Header;