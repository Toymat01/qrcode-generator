import QRCODE from 'qrcode'
import { useState } from "react";


function App() {
const [qrcode,  setQrcode] = useState('');
const [ url, setUrl] = useState('')

const qrGen = (e) =>{
  e.preventDefault()
  QRCODE.toDataURL(url, {
    width:800,
    margin:2,
    color:{
      light:'#708d81',
      dark: '#001427'
    }
  },
     (err, url) =>{
    if(err) return console.log(err)

    console.log(url)
    setQrcode(url)
  })

}

  return (
    <div className="App">
      <h1>QR-CODE GENERATOR</h1>
      <form >
        <input 
          type="text"
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder = "Enter your address"
         />
         <button onClick={qrGen}> Generate</button>
      </form>
     {qrcode && <>
        <img src={qrcode} alt="qr" />
        <a href={qrcode} download = "qrcode.jpg" >Download</a>
     </> }
    </div>
  );
}

export default App;

 