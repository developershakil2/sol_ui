import {Routes, Route  } from 'react-router-dom';
import Home from './components/Home';
import React, {useState, createContext} from 'react';
import Learn from './components/pages/Learn';
import Presale from './components/pages/Presale';
import Privatesale from './components/pages/PrivateSale';
import Contest from './components/pages/Contest';
import Locker from './components/pages/Locker';
import Token from './components/pages/Token';
import Innerinfo from './components/partial/Token/InnerInfo';
import Liqudity from './components/pages/Liqudity';
import TokenBuilder from './components/pages/TokenBuilder';
import Antibot from './components/pages/Antibot';
import Kyc from './components/pages/Kyc';
import Detail from './components/pages/Details';
import Discover from './components/pages/Discover';
import ViewPrivate from './components/pages/ViewPivate';
import ViewCon from './components/pages/ViewCon';
import GenToken from './components/partial/tokenType/tokenpage/GenToken';
import Bob from './components/partial/tokenType/tokenpage/Bab';
import Buyback from './components/partial/tokenType/tokenpage/Buyback';
export const NavContext = createContext();
function App() {
  const light = "light";
  const dark = "dark";
 const [darki, darkLight] = useState(light);

  return (

    <>
    <div id="darkit" className={darki}>
      <NavContext.Provider value={{darki, darkLight}}>
      <Routes>
          <Route path='/' element={<Home />}/>
        <Route path="/Learn" element={<Learn/>}/>
        <Route path="/presale" element={<Presale/>}/>
        <Route path="/privatesale" element={<Privatesale/>}/>
        <Route path="/contest" element={<Contest/>}/>
        <Route path="/locker" element={<Locker/>}/>
        <Route path="/Token" element={<Token/>}/>
        <Route path="/innerinfo" element={<Innerinfo/>}/>
        <Route path="/liqudity" element={<Liqudity/>}/>
        <Route path="/tokenbuilder" element={<TokenBuilder/>}/>
        <Route path="/antibot" element={<Antibot/>}/>
        <Route path="/kyc" element={<Kyc/>}/>
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/viewpools" element={<Discover/>}/>
        <Route path="/viewprivate" element={<ViewPrivate/>}/>
        <Route path="/viewcon" element={<ViewCon/>}/>
        <Route path="/gentoken" element={<GenToken/>}/>
        <Route path='/babytoken'  element={<Bob/>}/>
        <Route path="/buybacktoken" element={<Buyback/>}/>
      </Routes>
      </NavContext.Provider>



    </div>
 

      
    </>
  );
}

export default App;
