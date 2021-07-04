  
import React, { useState } from 'react';
//import { FaArrowCircleUp } from 'react-icons/fa';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import './styles.model.css';

const ScrollToTop = () =>
{

    const [ showScroll, setShowScroll ] = useState( false )

    const checkScrollTop = () =>
    {
        if ( !showScroll && window.pageYOffset > 400 )
        {
            setShowScroll( true )
        } else if ( showScroll && window.pageYOffset <= 400 )
        {
            setShowScroll( false )
        }
    };

    const scrollTop = () =>
    {
        window.scrollTo( { top: 0, behavior: 'smooth' } );
    };

    window.addEventListener( 'scroll', checkScrollTop )

    return (
        <div className="scrollTop" onClick={ scrollTop } style={ { display: showScroll ? 'flex' : 'none' } } >
            <KeyboardArrowUpIcon />
        </div>
    );
}

export default ScrollToTop;