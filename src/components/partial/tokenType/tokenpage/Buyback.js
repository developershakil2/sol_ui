import React, {useState} from 'react';
import Nav from '../../Nav';
import WalNav from '../../WalNav';
import Buyba from '../Buyba';
import { Link } from 'react-router-dom';
const Buyback = ()=> {

 
    const dto = 'none';
    const dop = 'block';

    const [dtoken, setDtoken] = useState(dto);
    
    const genToken = ()=>{
        setDtoken(dop);
    }



    const doff = 'none';
    const dopp = 'block';
       const lighter = 'lightgrey';
       const  redi = '#e15b61';
    const [po, setPo] = useState(lighter)
    const [def, setDef] = useState(doff);

    const poi = ()=> {
        setPo(redi);
        setDef(dopp);
    }

    return(
        <>
 <div className="d-flex">
       <Nav/>

<section className="home_contents">

    <WalNav/>
   <div className="container presaleWrap mx-auto row">
    <div className="col-12 col-md-4">
    <div className="bnbButtonWrapper my-3">

    <label for="exampleInputEmail1 my-2">Token Type <span style={{color:"red"}}>*</span></label>
           <ul className="tokengen">
            <li><Link onClick={()=> genToken()}>Buyback Baby Token</Link>
            <ul className="subtoken" style={{display:dtoken}}>
            <li><Link to="/tokenbuilder">Standard Token</Link></li>
            <li><Link to='/gentoken'>Liquidity Genaretor Token</Link></li>
            <li><Link to="/babytoken">Baby Token</Link></li>
            </ul>
            </li>
              
           </ul>
                 
                 <div className="radWrap">
                    <div className="rad" style={{background:po}} onClick={()=> poi()}></div>
                    <span>Eneble Anti-Bot</span>
                 </div>
                 <p style={{display:def}}>
                 Go to <span ><a style={{color:'#e15b61'}} href="https://solaris.sale/antibot">https://solaris.sale/antibot</a> </span>to configure Solaris Anti-Bot after minting token
                 </p>
           <div className="bnbshowoff" >
               Fee 0.50 BNB
           </div>
           
       </div>
    </div>
 


    
  <Buyba />


      



    </div>

    </section>

    </div>
        
        </>
    )
}

export default Buyback;