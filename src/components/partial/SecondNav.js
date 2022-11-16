import React from 'react';
import { Link } from 'react-router-dom';

const SecondNav = ()=> {
    return(
        <>
         <div className="sNav">
         <Link to="/detail" style={{color:"#11b1F5"}}><i className="fa-solid fa-fire-flame-curved" ></i> Trending</Link>

         <Link to="/detail" style={{color:"#111"}}>#1 BABY</Link>
         <Link to="/detail" style={{color:"#111"}}>#2 CAKE</Link>
         <Link to="/detail" style={{color:"#111"}}>#3 TINT</Link>

      </div>
        </>
    )
}

export default SecondNav;