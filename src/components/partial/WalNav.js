import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import {NavContext} from '../../App';
const WalNav = ()=> {
  const {darki, darkLight} = useContext(NavContext);
  
    <Nav/>
   
    const [acc, setAcc] = useState();

  const ConnectWallet = ()=>{

   if(window.ethereum){

  window.ethereum.request({method:'eth_requestAccounts'}).then(res => setAcc(res));
  window.eth.request('eth_getBalance').then(accountBalance => document.write(accountBalance));

   }else {
    alert("please install metamask in your Browser extention");

   }

  }
   
   const dconnect = ()=>{
    setTimeout(()=>{
        setAcc(null)
    },[300])
   }


   const dl = "-100%"
   const dr = "0%";


   const [dd , setDd] = useState(dl);
   const nbtnc = "none";
   const nbtno = "block";

   const [nbt, setNbt] = useState(nbtnc);
   const [nbt2, setNbt2] = useState();

 
   const navbarBtn = ()=> {
    setDd(dr);
    setNbt(nbtno);
    setNbt2(nbtnc);
   }

   
   const navbarBtnc = ()=> {
    setDd(dl);
    setNbt(nbtnc);
    setNbt2(nbtno);

   }
   const aletim =()=>{
    alert ("only completed UI here is don't have any backend or solidty smart contract Work")
}
    return(
        <>
        <div className="WalNav">
          
      
            
            <div className="wnavMiddle">
            <button id="navbarBtn" style={{display:nbt2}} onClick={()=>navbarBtn()}>
               <i class="fa-solid fa-bars"></i>
               </button>
               <button style={{display:nbt}} onClick={()=>navbarBtnc()}>
               <i class="fa-solid fa-xmark"></i>
               </button>
              
                <button onClick={()=>aletim()}>
                    <img src="images/bnb.png" alt="bnb" style={{width:'25px',borderRadius:'50%', height:'25px'}}/>

                    <span className="bsc">BSC</span>
                <i class="fa-solid fa-arrows-up-down"></i>
                    </button>
   
            </div>
               

            <div className="wnavRigh">
                                
        <button className="connect" onClick={()=> ConnectWallet()}>
             {acc ? <div onClick={()=> dconnect()}>{acc[0].substring(0, 4)+"..."}</div>: 'Connect'}
           
        </button>
  <button onClick={()=> darkLight(darki === 'light'? 'dark':'light')}><i class="fa-solid fa-sun"></i></button>
            </div>
            </div>
        














            <div id="sidinav" className="side_nav" style={{left:dd}}>

<div id="fixNav" style={{left:dd}}>
       <div className="logo_font">
      
       </div>

       <div className="accordion" id="navAccordion">

<div className="accordion-item">
<h2 id="headingThree">
  <Link to="/" style={{fontSize:"17px",color:'#11b1f5' , textAlign:"center",width:"100%"}} type="button" >
  <i className="fa-solid fa-house" ></i> Home <span style={{visibility:"hidden"}}>......................</span>
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
  <i class="fa-solid fa-shield-halved"></i> KYC & Audit <span style={{visibility:"hidden"}}>...............</span>
  </Link>
</h2>

</div>

<div className="accordion-item">
<h2 id="headingThree">
  <Link to="/learn" style={{fontSize:"17px",color:'#11b1f5' , textAlign:"center",width:"100%"}} type="button" >
  <i class="fa-solid fa-laptop-file"></i> Learn <span style={{visibility:"hidden"}}>.......................</span>
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



export default WalNav;