import React, {createContext, useState} from 'react';
import { Link } from 'react-router-dom';




const Nav = ()=>{

   
      
    return(
        <>

    <div id="navi22" className="side_nav">

    <div id="fixNav">
           <div className="logo_font">
           <div className="wnavLeft">
                <h2><Link  className="text-dark " style={{textDecoration:'none'}} to="/"><img className="logo" src="images/logo.png"alt="logo"/></Link></h2>
            </div>
           </div>




           <div className="accordion" id="navAccordion">

  <div className="accordion-item">
    <h2 id="headingThree">
      <Link to="/" style={{fontSize:"17px", color:'#11b1f5', textAlign:"center",width:"100%"}} type="button" >
      <i className="fa-solid fa-house" ></i> Home <span style={{visibility:"hidden"}}>..........................</span>
      </Link>
    </h2>
 
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">

      <i className="fa-solid fa-rocket"  style={{marginRight:"10px", color:'#11b1F5'}}></i>Launchpad
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
          <ul className="navSubLink">
            <li><Link to="/presale">Create Presale</Link></li>
            <li><Link to="/viewpools">View Pools</Link></li>

          </ul>
      
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree">

      <i className="fa-solid fa-lock"style={{marginRight:"10px", color:'#11b1F5'}}></i> Private Sale
      </button>
    </h2>
    <div id="collapseThree1" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      
      <ul className="navSubLink">
      <li><Link to="/privatesale">Create Private sale</Link></li>
      <li><Link to="/viewprivate">View Private sale</Link></li>

          </ul>
      
      
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree">

      <i class="fa-solid fa-list"style={{marginRight:"10px", color:'#11b1F5'}}></i> Contest
      </button>
    </h2>
    <div id="collapseThree2" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <ul className="navSubLink">
            <li><Link to="/contest">Create Contest</Link></li>
            <li><Link to="/viewcon">View Contest</Link></li>


          </ul>
      
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree">

      <i className="fa-solid fa-key"style={{marginRight:"10px", color:'#11b1F5'}}></i>  Locker
      </button>
    </h2>
    <div id="collapseThree3" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <ul className="navSubLink">
            <li><Link to="/locker">Create Lock</Link></li>
            <li><Link to="/token">Token </Link></li>
            <li><Link to="/liqudity">Liqudity Lock</Link></li>

          </ul>
      

      
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree4" aria-expanded="false" aria-controls="collapseThree">

      <i className="fa-solid fa-briefcase"style={{marginRight:"10px", color:'#11b1F5'}}></i>  ToolBox
      </button>
    </h2>
    <div id="collapseThree4" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <ul className="navSubLink">
            <li><Link to="/tokenbuilder">Token Builder</Link></li>
            <li><Link to="/antibot">Anti-Bot </Link></li>

          </ul>
      
      

      
      </div>
    </div>
  </div>
 
<div className="accordion-item">
<h2 id="headingThree">
  <Link to="/kyc" style={{fontSize:"17px",color:'#11b1f5' , textAlign:"center",width:"100%"}} type="button" >
  <i class="fa-solid fa-shield-halved"></i> KYC & Audit <span style={{visibility:"hidden"}}>..................</span>
  </Link>
</h2>

</div>

<div className="accordion-item">
<h2 id="headingThree">
  <Link to="/learn" style={{fontSize:"17px",color:'#11b1f5' , textAlign:"center",width:"100%"}} type="button" >
  <i class="fa-solid fa-laptop-file"></i> Learn <span style={{visibility:"hidden"}}>.............................</span>
  </Link>
</h2>

</div>

<div className="wnavRight socialss mt-5" style={{display:'block'}}>
           <div className="mainSocial">
           <Link to="/"><img src="images/tw.png"alt="twiterr"/></Link>
                <Link to="/"><img src="images/t.png"alt="twiterr"/></Link>
           </div>
           <div className="beta">Beta</div>
            </div>





</div>
        

        </div>
        
    </div>
   
        </>
    )
}


export default Nav;