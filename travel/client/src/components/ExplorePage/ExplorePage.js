import React from 'react';
import { Link } from 'react-router-dom'
import './styles.model.css';
import Typical from 'react-typical';

const ExplorePage = () => {
  return (
    <div className="startpage">
      <header className="start-header">
        <Link to="/home">
          <button id="explore-btn" >
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "EXPLORE", 1000,
                "      ",1000
              ]}
            />

          </button>
        </Link>
      </header>
    </div>
  );
}

export default ExplorePage;