import React from 'react';
import {Link } from 'react-router-dom';
import SlideImg from './partial/SlideImg';
import Nav from './partial/Nav';
import SecondNav from './partial/SecondNav';
import WalNav from './partial/WalNav';
const Home = ({darkLight, darki})=>{
    return (
        <>
       <div className="d-flex darkil">
       <Nav darkLight={darkLight}/>

<section className="home_contents">
    <WalNav darkLight={darkLight} darki={darki}/>
   <div className="container mx-auto">
    <SecondNav/>
            <div className="homeTitleWrap">
              <div className="homeTititleWrapFirstChild">
                <img src="images/favico.png" alt="favico"/>
              </div>
              <div className="homeTitleWrapSecondChild">
              <h1 className="hhome">
              Innovating the EVM ecosystem through the AIO DeFi Launchpad
                </h1>
                 <p>
                 By virtue of its efficient and user-friendly interface, Solarissale enables projects to create tokens and presales in a matter of seconds.
                  </p>
              </div>

              <div className="homeTitleWrapThirdChild">
                <Link to="/presale">Create</Link>
              </div>
            </div>
<div>
    
<div className="home_second_wrap  row">

<div className="col-12 col-md-4 col-lg-4 col-xl-4 row">
<div className="col-11 col-md-11 col-lg-11 col-xl-11  home_s_box m-auto">
<h5 style={{marginBottom:"10px"}} className="icond">  
<i className="fa-solid fa-rocket"  style={{marginRight:"5px",marginTop:'5px'}}></i> Latast Pools</h5>

<Link to="/detail" className="homeLinki "> 
<div className="subWrap">
<img src="images/cake.png" alt="token logo"/>
<div className="swrapb">
<p>PancakeSwap <br/><span style={{color:'grey'}}>CAKE</span></p>

</div>
<div className="nbl" style={{padding:'2px 7px',borderRadius:"10px", background:"rgb(255 238 41 / 52%)", fontWeight:'bold'}}>
BSC
</div>
</div>
</Link>
<Link to="/detail" className="homeLinki "> 
<div className="subWrap">
<img src="images/tinytesla.png" alt="token logo"/>
<div className="swrapb">
<p>TinyTesla..... <br/><span style={{color:'grey'}}>TINT</span></p>

</div>
<div className="nbl" style={{padding:'2px 7px',borderRadius:"10px", background:"rgb(255 238 41 / 52%)", fontWeight:'bold'}}>
BSC
</div>
</div>
</Link>
<Link to="/detail" className="homeLinki "> 
<div className="subWrap">
<img src="images/elonpetc.png" alt="token logo"/>
<div className="swrapb">
<p>ElonPetCoin <br/><span style={{color:'grey'}}>ELONPETC</span></p>

</div>
<div className="nbl" style={{padding:'2px 7px',borderRadius:"10px", background:"rgb(255 238 41 / 52%)", fontWeight:'bold'}}>
BSC
</div>
</div>
</Link>



</div>
</div>

<div className="col-12 col-md-4 col-lg-4 col-xl-4 row">
<div className="col-11 col-md-11 col-lg-11 col-xl-11  home_s_box m-auto">
<h5 style={{marginBottom:"10px"}}  className="icond">  <i className="fa-solid fa-fire-flame-curved" ></i>  Hot Contest</h5>

<Link to="/detail" className="homeLinki " style={{marginTop:"10px"}}> 
<div className="subWrap">
<img src="images/favico.png" alt="token logo"/>
<div className="swrapb">
<p>SolarisSale .........<br/><span style={{color:'grey'}}>SolarisSale</span></p>

</div>
<div className="nbl" style={{padding:'2px 7px',borderRadius:"10px", background:"rgb(255 238 41 / 52%)", fontWeight:'bold'}}>
BSC
</div>
</div>
</Link>

</div>
</div>
<div className="col-12 col-md-4 col-lg-4 col-xl-4 row">
<div className="col-11 col-md-11 col-lg-11 col-xl-11  home_s_box m-auto">
    
<h5 style={{marginBottom:"10px"}}  className="icond"> <i className="fa-solid fa-database"></i>  New Tokens</h5>
<Link to="/detail" className="homeLinki " style={{marginTop:"10px"}}> 
<div className="subWrap">
<img src="images/doggy.png" alt="token logo"/>
<div className="swrapb">
<p>BABYDOGGY <br/><span style={{color:'grey'}}>BABYDOGGY</span></p>

</div>
<div className="nbl" style={{padding:'2px 7px',borderRadius:"10px", background:"rgb(255 238 41 / 52%)", fontWeight:'bold'}}>
BSC
</div>
</div>
</Link>

<Link to="/detail" className="homeLinki " style={{marginTop:"10px"}}> 
<div className="subWrap">
<img src="images/cake.png" alt="token logo"/>
<div className="swrapb">
<p>PancakeSwap <br/><span style={{color:'grey'}}>Cake</span></p>

</div>
<div className="nbl" style={{padding:'2px 7px',borderRadius:"10px", background:"rgb(255 238 41 / 52%)", fontWeight:'bold'}}>
BSC
</div>
</div>
</Link>


<Link to="/detail" className="homeLinki " style={{marginTop:"10px"}}> 
<div className="subWrap">
<img src="images/elonpetc.png" alt="token logo"/>
<div className="swrapb">
<p>ElonPetCoin <br/><span style={{color:'grey'}}>ELONPETC</span></p>

</div>
<div className="nbl" style={{padding:'2px 7px',borderRadius:"10px", background:"rgb(255 238 41 / 52%)", fontWeight:'bold'}}>
BSC
</div>
</div>
</Link>

</div>
</div>



</div>

</div>




  <div className="home_contributaion">
                
  <div id="contr01" className="contribution_wrap">
                    <div className="contribution_icon">
                    <i class="fa-sharp fa-solid fa-share-nodes"></i>
                    </div>
                    <div className='contribution_content'>
                      <h4>Projects <span className="pdot">..........</span></h4>
                      <h3>110+</h3>
                    </div>
                </div>

                <div className="contribution_wrap">
                    <div className="contribution_icon">
                    <i class="fa-solid fa-users"></i>
                    </div>
                    <div className='contribution_content'>
                      <h4>Happy People</h4>
                      <h3>3450+</h3>
                    </div>
                </div>

                <div className="contribution_wrap">
                    <div className="contribution_icon">
                    <i className="fa-solid fa-hand-holding-dollar"></i>
                    </div>
                    <div className='contribution_content'>
                      <h4>Total funding</h4>
                      <h3>$142,392</h3>
                    </div>
                </div>
               


              
           </div>



           <div className="slide_show">
    <span className="ptnr">Partners</span>
<marquee>
 
  <SlideImg/>

 
</marquee>
</div>
<p style={{textAlign:'center', fontSize:"12px",marginTop:'20px'}}>
Disclaimer: The content of any material provided or published by Solarissale does not represent, in any way, financial advice and is not an investment recommendation. We are not responsible and do not accept liability for any loss of assets to any person or persons acting upon information present in any material associated with Solarissale.
</p>


     </div>


</section>

       </div>
        
        </>
    )
}


export default Home;