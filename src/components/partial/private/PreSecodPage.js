import React, {useReducer,useState, createContext} from 'react';


export const Dat = createContext();
const PreSecondPage = ({pdn, pBtn  })=>{
        const  vali = document.getElementById('valinput');

const [datas , setDatas] = useState({
  text01:'',
  
});

const texting = (e)=>{
   const {name, value} = e.target;
    setDatas({
      ...datas,
      [name]: value
    })



}

    return(
        <>
        
         <div className="col-12 col-md-12 col-lg-8 col-xl-8  rightPresale" style={{display:pdn}}>
         <p>{"(*)"} is required field.</p>
         <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Nmae <span style={{color:"red"}}>*</span></label>
    <input type="text" className="form-control preinput" id="valinput"name="text01" onChange={texting}  placeholder="Ex Solaris Sale"/>
  </div>
    <div className="form-group mt-5" >
    <label for="currency">Currency</label>
  <select className="form-select  preinput" aria-label="Default select example">
  <option selected>BNB</option>
  <option value="1">BUSD</option>
</select>
    </div>
</form>
<p className="mt-3">Users will pay with BNB for your token</p>
<h6>Fee: 2% BNB raised</h6>
 <button onClick={()=> pBtn()} className="nextBtn" >Next</button>


    </div>
   
   
        </>
    )
}

export default PreSecondPage;
