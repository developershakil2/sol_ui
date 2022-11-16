import React, {useState, useContext} from'react';
import Nav from '../partial/Nav';
import WalNav from '../partial/WalNav';
import { Link } from 'react-router-dom';
import { Dat } from '../partial/Presale/PreSecodPage';
import Countdown from 'react-countdown';

const Detail = ()=>{

  setInterval(()=>{
    setSecond(new Date().getSeconds());
  },1000);
    
   const [seconds, setSecond] = useState(new Date().getSeconds());
  const days = new Date().getDay();
  const hours = new Date().getHours();
  const minutes  = new Date().getMinutes();
 
  
 const rdata = useContext(Dat);

      console.log(rdata);

    return(
        <>
          <div className="d-flex">
       <Nav/>

<section className="home_contents">
    <WalNav/>
   <div className="container presaleWrap mx-auto row">
   <div id="detailWrapi" className="col-12 col-md-12 col-lg-7 col-xl-7  rightPresale">
      <div className="banner">
        <img src="images/bn.png" alt="bng"/>

        <div className="bnSub">
            <div className="subLogo">
                <img src="images/bnlogo.png"alt="logos" style={{width:"50px" ,height:"50px" , borderRadius:"50%"}}/>
                <div className="wrapLog">
                    <span className="ss">live</span>
                    <h5>Solaris Sale Private Sale</h5>
                    <div className="socialMedd">
                        <Link to="/"><i class="fa-solid fa-earth-americas"></i></Link>
                        <Link to="/"><i class="fa-brands fa-twitter"></i></Link>
                        <Link to="/"><i class="fa-brands fa-github"></i></Link>
                        <Link to="/"><i class="fa-brands fa-telegram"></i></Link>
                        <Link to="/"><i class="fa-brands fa-instagram"></i></Link>
                    </div>
                </div>
            </div>

            <p className="mt-4">
            Enlightened ecosystem with DeFi, NFTs and Web3.
           
           
            </p>
        </div>
      </div>
 



<div className="wrn01">

<div className="dataWrap">
            <span>Fairlaunch address</span>
            <span ><a href="/" style={{color:'red'}}>0xD1B69676907Bb62762Ce2948c8F961D9a75b5BAD</a>
              <p className="bnb_address_text">Do not send BNB to this address</p>
            </span>
            
          </div>
         

          <div className="dataWrap">
            <span>Token address</span>
            <span><a href="/" style={{color:'red'}}> <img src="images/tik.png" style={{width:'22px', height:'22px'}} alt="tik"/> 0xD1B69676907Bb62762Ce2948c8F961D9a75b5BAD</a></span>
          </div>

          <div className="dataWrap">
            <span>Category</span>
            <span><p  style={{padding:'3px 7px ', borderRadius:'10px', background:'rgb(107 70 155 / 31%)', color:'6B469B', marginBottom:'0px'}}>Launchpad</p></span>
          </div>
           
         
          <div className="dataWrap">
            <span>Token name</span>
            <span>SolarisTest</span>
          </div>

          <div className="dataWrap">
            <span>Token Symbol</span>
            <span>SolarisTest</span>
          </div>


       



          <div className="dataWrap">
            <span>Token Decimals</span>
            <span>8</span>
          </div>
          <div className="dataWrap">
            <span>Total Supply</span>
            <span>10,000,000,000 SOLARTEST</span>
          </div>
          <div className="dataWrap">
            <span>Tokens for Presale</span>
            <span>Tokens for Presale</span>
          </div>

          <div className="dataWrap">
            <span>Tokens for Liquidity</span>
            <span>268,125,000 SOLARTEST</span>
          </div>  <div className="dataWrap">
            <span>Soft Cap</span>
            <span>10 BNB</span>
          </div>
          <div className="dataWrap">
            <span>Listing On</span>
            <span style={{color:'red'}}>PancakeSwap Testnet</span>
          </div>
          
</div>







 
   </div>
    <div className="col-12 col-md-12 col-lg-5 col-xl-5 row " style={{padding:"0px 33px"}}>
    <div className="cwrapper">
    <div className="countDownWrapper">
        <h3 className="text-start" style={{fontSize:'15px'}}>Presale Ends In</h3>
        <div className="timerWrap">
         <div className="timerR">
          <div className="theTimer">
            <span>{days}</span>
            <span className="timerText">Days</span>
          </div>
         
         </div>

         <div className="timerR">
          <div className="theTimer">
            <span>{hours}</span>
            <span className="timerText">Hours</span>
          </div>
         
         </div>

         <div className="timerR">
          <div className="theTimer">
            <span>{minutes}</span>
            <span className="timerText">Minutes</span>
          </div>
         
         </div>

         <div className="timerR">
          <div className="theTimer">
            <span>
         {seconds}
            </span>
            <span className="timerText">Seconds</span>
          </div>
         
         </div>
        </div>
     {/* <Countdown date={Date.now() + 900000002} /> */}
     </div>

     <div className="progressWrapi1">
    <div className="progressLabel1">
        <span>Progress:</span>
        <span>0.29%</span>
    </div>
     <div className="progressMain1">
        <div className="progressSub1">
            
        </div>
     </div>
    <div className="progressLabel1">
        <span>0.30 BNB</span>
        <span>40 BNB</span>
    </div>
</div>

    <div className="contributionAmmount mt-5">
    Contribute Amount
    <input type="text" placeholder="max BNB 10 "/>



    <button style={{borderRadius:"15px",  marginTop:"20px" , padding:'10px 5px', background:"#e15b61", color:'#fff', border:'none', fontSize:'14px'}} className="cb">Buy BNB</button>
    </div>
    </div>



    <div className="cwrapper mt-4">

     <div className="statusRow">
        <span>Status</span>
        <span className="ss">live</span>
     </div>
     <div className="statusRow">
        <span>Current Rate</span>
        <span className="right_statas">
        1 BNB = 25,000,000,000.0 <br/> SOLARTEST
        </span>
     </div>
     <div className="statusRow">
        <span>My Contribution	</span>
        <span className="right_statas">0.0 BNB</span>
     </div>
     <div className="statusRow">
        <span>Total Contributors</span>
        <span className="right_statas">1</span>
     </div>
    </div>
    </div>     
     
</div>
    </section>
    </div>
        </>
    )
}


export default Detail;