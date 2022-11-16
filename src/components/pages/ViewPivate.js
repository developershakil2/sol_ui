import React, {useState} from 'react';
import Nav from '../partial/Nav';
import SecondNav from '../partial/SecondNav';
import WalNav from '../partial/WalNav';
import { Link } from 'react-router-dom';

const ViewPrivate = ()=> {
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
        <span className="success">success</span>
        <div className="imgAndTitleWrapper">
            <img src="images/doggy.png" alt="dpng"/>
            <div className="priceAndTitle">
                <h4>DOGGY Coin</h4>
                <h5>1 BNB = 2500000 Sol</h5>
            </div>
        </div>
        <div className="subPriceTitle">
       <span> Soft / Hard Cap</span>
          <p>20 / 40 BNB</p>
        </div>
<div className="progressWrapi">
    <div className="progressLabel">
        <span>Progress:</span>
        <span>0.00%</span>
    </div>
     <div className="progressMain">
        <div style={{width:"80%"}} className="progressSub">
            
        </div>
     </div>
    <div className="progressLabel">
        <span>1.09 BNB</span>
        <span>200 BNB</span>
    </div>
</div>

<div className="bigWrapi">
<div className="lqBox">
    <span>Liquidity</span>
    <span>Lock Time</span>
</div>

<div className="lqBox">
    <span className="sbold">95%</span>
    <span className="sbold">145 days</span>
</div>

</div>

<div className="salFailed">
    Sale success
</div>

<div className="heartWrap">
    <button className="heartBtn"><i class="fa-regular fa-heart"></i></button>
    <Link to="/detail">View Pools</Link>
</div>

        </div>

    </div>




    <div className="col-11 col-md-4 col-lg-4 col-xl-4  mt-3 row mainCard">
        <div className="col-12 subCard">
        <span className="success">success</span>
        <div className="imgAndTitleWrapper">
            <img src="images/favico.png" alt="dpng"/>
            <div className="priceAndTitle">
                <h4>solaris Club</h4>
                <h5>1 BNB = 2500000 Sol</h5>
            </div>
        </div>
        <div className="subPriceTitle">
       <span> Soft / Hard Cap</span>
          <p>20 / 40 BNB</p>
        </div>
<div className="progressWrapi">
    <div className="progressLabel ">
        <span>Progress:</span>
        <span>0.50%</span>
    </div>
     <div className="progressMain">
        <div className="progressSub fifty">
            
        </div>
     </div>
    <div className="progressLabel">
        <span>0.40 BNB</span>
        <span>100 BNB</span>
    </div>
</div>

<div className="bigWrapi">
<div className="lqBox">
    <span>Liquidity</span>
    <span>Lock Time</span>
</div>

<div className="lqBox">
    <span className="sbold">95%</span>
    <span className="sbold">950 days</span>
</div>

</div>

<div className="salFailed">
    success
</div>

<div className="heartWrap">
    <button className="heartBtn"><i class="fa-regular fa-heart"></i></button>
    <Link to="/detail">View Pools</Link>
</div>

        </div>

    </div>




    <div className="col-11 col-md-4 col-lg-4 col-xl-4  mt-3 row mainCard">
        <div className="col-12 subCard">
        <span className="fail">failed</span>
        <div className="imgAndTitleWrapper">
            <img src="images/d.png" alt="dpng"/>
            <div className="priceAndTitle">
                <h4>solaris Club</h4>
                <h5>1 BNB = 2500000 Sol</h5>
            </div>
        </div>
        <div className="subPriceTitle">
       <span> Soft / Hard Cap</span>
          <p>20 / 40 BNB</p>
        </div>
<div className="progressWrapi">
    <div className="progressLabel">
        <span>Progress:</span>
        <span>0.00%</span>
    </div>
     <div className="progressMain">
        <div className="progressSub">
            
        </div>
     </div>
    <div className="progressLabel">
        <span>0.0 BNB</span>
        <span>40 BNB</span>
    </div>
</div>

<div className="bigWrapi">
<div className="lqBox">
    <span>Liquidity</span>
    <span>Lock Time</span>
</div>

<div className="lqBox">
    <span className="sbold">95%</span>
    <span className="sbold">1825 days</span>
</div>

</div>

<div className="salFailed">
    Sale Failed
</div>

<div className="heartWrap">
    <button className="heartBtn"><i class="fa-regular fa-heart"></i></button>
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

export default ViewPrivate;