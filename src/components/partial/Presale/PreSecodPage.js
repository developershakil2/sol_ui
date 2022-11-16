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

console.log(datas)


    return(
        <>
        <Dat.Provider value={datas}>
         <div className="col-12 col-md-12 col-lg-8 col-xl-8  rightPresale" style={{display:pdn}}>
         <p>{"(*)"} is required field</p>
         <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Token Address <span style={{color:"red"}}>*</span></label>
    <input type="text" className="form-control preinput" id="valinput"name="text01" onChange={texting}  placeholder="Ex 0X..."/>
  </div>
    <div className="form-group mt-5" >
    <label for="currency">Currency</label>
  <select className="form-select  preinput" aria-label="Default select example">
  <option selected>BNB</option>
  <option value="1">BUSD</option>
</select>
    </div>
</form>
<p className="mt-4 text07">
Users will pay with BNB for your token
</p>
<label className="mt-3 mb-3">Fee Option</label>
<h6 style={{display:"flex", alignItems:'center'}}><input style={{marginLeft:'8px'}} type="radio"/>  2.5% BSC raised only</h6>
 
<h6 style={{display:"flex", alignItems:'center'}}><input style={{marginLeft:'8px'}} type="radio"/>  1.5% BSC raised + 1.5% token raised</h6>
 
 <p className="mt-3" style={{color:'#e15b61',fontSize:'13px' ,marginBottom:'0px'}}>
 Make sure the token has 'Exclude transfer fee' function if it has transfer fees.
  </p>
 
 <button onClick={()=> pBtn()} className="nextBtn" style={{width:'150px'}}>Approve Spend</button>


    </div>
    </Dat.Provider>
   
        </>
    )
}

export default PreSecondPage;
