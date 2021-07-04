import React from 'react';
import loadingText from '../../assets/loadingtext1.svg';
import cycle from '../../assets/bicycle1.gif';
const Loader=()=>{
    return(
        <div>
            <div>
            <img src={cycle} alt="bicycle" width="200px"></img>
            <img src={loadingText} alt="Loading..."></img>
            </div>
        </div>
    );
}

export default Loader;