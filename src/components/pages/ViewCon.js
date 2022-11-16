import React, {useState} from 'react';
import Nav from '../partial/Nav';
import SecondNav from '../partial/SecondNav';
import WalNav from '../partial/WalNav';
import { Link } from 'react-router-dom';

const ViewCon = ()=> {
    const dn = "none";
    const dop = "flex";
    const[op, setOp] = useState(dop);
    return(
        <>
       <div className="d-flex darkil">
       <Nav />

<section className="home_contents">
    <WalNav/>
   <div className="container mx-auto">
    <SecondNav/>

    <div className="searchBox">
      <form>
<div className="form-group mt-2">
<input type="text"  className="form-control preinput"   placeholder="Search By Token Address"/> 
<select className="optional">
    <option>All Status</option>
    <option>Upcoming</option>
    <option>in progress</option>
    <option>Ended</option>
    <option>cancelled</option>
    <option>KYC</option>
    <option>Audited</option>
</select>


</div>
</form>
<div className="btnWraper">
<button onClick={()=> setOp(dop)}>All Presale</button>
<button  onClick={()=> setOp(dn)}>My Contribution</button>
<button onClick={()=> setOp(dop)}>My Favorites</button>
<button  onClick={()=> setOp(dn)}>My Alert</button>

</div>
      </div>



<div className="cardiWrapi row" style={{display:op}}>
    <div className="col-11 col-md-4 col-lg-4 col-xl-4  mt-3 row mainCard">
        <div className="col-12 subCard">
        <span className="success">completed</span>
        <div className="imgAndTitleWrapper">
            <img src="images/favico.png" alt="dpng"/>
            <div className="priceAndTitle">
                <h4 style={{marginTop:'10px'}}>Solaris Airpad</h4>
            </div>
        </div>
       

<div className="bigWrapi">
<div className="lqBox">
    <span>Winners</span>
    <span>Participants</span>
</div>

<div className="lqBox">
    <span className="sbold" style={{color:'#e15b61'}}>670</span>
    <span className="sbold">70</span>
</div>

</div>

<div className="salFailed">
   Completed
</div>

<div className="heartWrap">
    <div>
    <button className="heartBtn"><i class="fa-solid fa-earth-americas"></i></button>
    <button className="heartBtn " style={{marginLeft:'5px'}}>
        

    <i class="fa-brands fa-telegram"></i>
    
    </button>
    
    
    </div>
    <Link to="/detail">View Pools</Link>
</div>

        </div>

    </div>

</div>




</div>



</section>



</div>
        </>
    )
}

export default ViewCon;