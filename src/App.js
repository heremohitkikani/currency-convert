import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Task1 from './Task1';
import { useState } from 'react';

function App() {
  let [val, setval] = useState('');
  let [val1, setval1] = useState('');
  let [left, setleft] = useState('');
  let [right, setright] = useState('');
  const func1 = (e) => {
    if (e == 'usd') {
      setleft('usd');
    }
    else if (e == 'eur') {
      setleft('eur');
    } else if (e == 'inr') {
      setleft('inr');
    }
    else if (e == 'Pkr') {
      setleft('pkr');
    }
    else if (e == 'npr') {
      setleft('npr');
    }
    else if (e == 'cad') {
      setleft('cad');
    }


  }
  const func2 = (e) => {

    if (e == 'usd') {
      setright('usd');
    } else if (e == 'eur') {
      setright('eur');
    } else if (e == 'inr') {
      setright('inr');
    }
    else if (e == 'Pkr') {
      setright('pkr');
    }
    else if (e == 'npr') {
      setright('npr');
    }
    else if (e == 'cad') {
      setright('cad');
    }

  }
  const confirm = () => {
    if (left == right) {
      setval1(val)
    }
    else if (left == 'usd' && right == 'eur') {
      setval1(Number(val) * 0.85)
    } else if (left == 'usd' && right == 'inr') {
      setval1(Number(val) * 74.71)
    }
    else if (left == 'usd' && right == 'pkr') {
      setval1(Number(val) * 292.75)
    }
    else if (left == 'usd' && right == 'npr') {
      setval1(Number(val) * 119.53)
    } else if (left == 'usd' && right == 'cad') {
      setval1(Number(val) * 1.26)
    }

    else if (left == 'eur' && right == 'usd') {
      setval1(Number(val) * 1.20)
    } else if (left == 'eur' && right == 'inr') {
      setval1(Number(val) * 90.71)
    }
    else if (left == 'eur' && right == 'pkr') {
      setval1(Number(val) * 305.72)
    }
    else if (left == 'eur' && right == 'npr') {
      setval1(Number(val) * 145.15)
    } else if (left == 'eur' && right == 'cad') {
      setval1(Number(val) * 1.46)
    }
    // }else if(left=='usd' && right=='eur')
    // }


  }
  return (

    <>
      ENTER USD : -<input type='text' onChange={(e) => { setval(e.target.value) }} value={val} placeholder='enter usd'></input><br></br><br></br>
      <select onChange={(e) => { func1(e.target.value) }}>
        <option>select</option>
        <option value='usd'>usd</option>
        <option value='eur'>EUR</option>
        <option value='inr'>INR</option>
        <option value='Pkr'>PKR</option>
        <option value='npr'>NPR</option>
        <option value='cad'>CAD</option>
      </select>
      <select select onChange={(e) => { func2(e.target.value) }}>
        <option>select</option>
        <option value='usd'>usd</option>
        <option value='eur'>EUR</option>
        <option value='inr'>INR</option>
        <option value='Pkr'>PKR</option>
        <option value='npr'>NPR</option>
        <option value='cad'>CAD</option>
      </select>
      <button onClick={confirm}>covert</button>

      <br></br><br></br>
      <input type='text' value={val1}></input>

    </>
  );
}

export default App;
