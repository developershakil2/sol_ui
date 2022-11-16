import React, {useState, useContext} from'react';
import Nav from '../partial/Nav';
import WalNav from '../partial/WalNav';
import PresaleProgress from '../partial/Presale/ProgressBar';
import PreSecondPage from '../partial/Presale/PreSecodPage';
import PreThirdPage from '../partial/Presale/PreThirdPage';
import PreFourthPage from '../partial/Presale/PreFourthPage';
import PreFive from '../partial/Presale/PreFive';
import { Dat } from '../partial/Presale/PreSecodPage';

const Presale = ()=>{

    
    const colora = "#e15b61";
    const colorb = "rgb(35, 196, 3)";
    const colort = '#fff';
    const colortb = "#111";
    const dnone = 'none';
    const dblock = "flex";

    const [bg , setBg] = useState(colora);
    const [tc , setTc] = useState(colort);
    const [pdn , setPdn] = useState(dblock);

    const colora1 = "rgb(243 231 231)";
    const colorb1 = "rgb(35, 196, 3)";

    const [bg1 , setBg1] = useState(colora1);
    const [tc1 , setTc1] = useState(colortb);

    const [pdn1 , setPdn1] = useState(dnone);
    const [pdn3 , setPdn3] = useState(dnone);
    const [pdn4 , setPdn4] = useState(dnone);

    const pBtn = ()=>{
            setBg(colorb);
            setBg1(colora);
            setPdn(dnone);
            setTc1(colort);
            setPdn1(dblock);
    }

    const colora2 = "rgb(243 231 231)";
    const colorb2 = "rgb(35, 196, 3)";

    const [bg2 , setBg2] = useState(colora2);
    const [tc2 , setTc2] = useState(colortb);
    const pBtn1 =()=>{
        setBg1(colorb);
        setBg2(colora);
        setPdn(dnone);
        setTc2(colort);
        setPdn1(dnone);
        setPdn3(dblock);

    }
    const [bg3 , setBg3] = useState(colora2);
    const [tc3 , setTc3] = useState(colortb);
    const pBtn3 =()=>{
        setBg2(colorb);
        setBg3(colora);
        setTc3(colort);
        setPdn3(dnone);
        setPdn4(dblock);
    }
    const pBtn4 =()=>{
        setBg2(colorb);
        setBg3(colora);
        setTc3(colort);
    }
 const rdata = useContext(Dat);

      console.log(rdata);

const rl = '#e15b61';
const gl = '#766b6b';

      const [redio , setRadio ] = useState(rl);
      const [redio1 , setRadio1 ] = useState(gl);

const radi = ()=> {
    setRadio1(rl);
    setRadio(gl);
}
const radi1 = ()=> {
    setRadio1(gl);
    setRadio(rl);
}







    return(
        <>
          <div className="d-flex">
       <Nav/>

<section className="home_contents">
    <WalNav/>
   <div className="container presaleWrap mx-auto row">
    <div className="col-12 col-md-12 col-lg-4 col-xl-4 row ">
      <PresaleProgress bgcolor1={bg1} bgcolor={bg} textColor1={tc1} textColor={tc} bgcolor2={bg2} textColor2={tc2}  bgcolor3={bg3} textColor3={tc3}/>
  
        <div className="bnbButtonWrapper my-3">
            <div className="prBtn07Wrap">
                
         
          <button className="btn007"  onClick={()=> radi1() }>
            
            <div className="checkB"  style={{background:redio}}></div>  <span style={{ marginLeft:'5px', marginTop:'-3px'}}>Presale</span>
            </button>
            <button className="btn007" onClick={()=> radi() }>
                <div className="checkB" style={{background:redio1}}></div> <span  style={{ marginLeft:'5px', marginTop:'-3px'}}>Fair Launch</span>
            </button>
       
            </div>
            <div className="bnbshowoff">
                Fee 0.50 BNB
            </div>
            
        </div>
    </div>     
        <PreSecondPage pdn={pdn} pBtn={pBtn} />
        <PreThirdPage pdn1={pdn1} pBtn1={()=> pBtn1()}/>
        <PreFourthPage pdn3={pdn3}  pBtn3={()=> pBtn3()} />
        <PreFive pdn4={pdn4} pBtn4={()=> pBtn4()}/>
</div>
    </section>
    </div>
        </>
    )
}


export default Presale;