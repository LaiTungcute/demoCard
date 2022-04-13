import {exportComponentAsPNG} from 'react-component-export-image'
import './App.css';
import Main from './component/Main';
import avatar from './img/gai nhat.jpg';
import qr from './img/277615513_1017995155781160_4551408283521559491_n.png';
import { useRef } from 'react';

const user = {
  avt: avatar,
  name: 'Lai Hoang Tung',
  class_name: 'CNTT6-k15',
  qrCode: qr
}

function App() {
  const componentRef = useRef();

  return (
    <div className="App">
      <Main 
        ref={componentRef}
        avt={user.avt}
        name={user.name}
        class_name = {user.class_name}
        qrCode={user.qrCode}
      />
      <button onClick={() => exportComponentAsPNG(componentRef)}>download</button>
    </div>
  );
}

export default App;