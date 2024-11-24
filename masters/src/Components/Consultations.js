import React, { useState } from 'react'
import { Button} from 'react-bootstrap';
import FastCons from './FastCons';
import DirectCons from './DirectCons';
import SmartCons from './SmartCons';

function Consultations() {
    const [show, setShow] = useState("0");
    
  return (
    <div>
          <div className='card p-2 ms-3 mt-1'>
      {show==="0" && (
      <div>
        <h2 className='text-center'>Start your Consultation</h2>
<div className='d-flex justify-content-center my-4'>
<Button
              className='rounded-start-pill'
              variant="success"
              onClick={() => setShow("Fast")}
            >
              Text Consultation
            </Button>
            <Button
              className='rounded-0'
              variant="danger"
              onClick={() => setShow("Smart")}
            >
              Smart Consultation
            </Button>
            <Button
              className='rounded-end-pill'
              variant="primary"
              onClick={() => setShow("Direct")}
            >
              Direct Consultation
            </Button>
</div>
      </div>
      )
      }
      {show === "Fast" &&
      (<FastCons setShow={setShow}/>)
      }
      {show === "Smart" &&
      (<SmartCons setShow={setShow}/>)
      }
      {show === "Direct" &&
      (<DirectCons setShow={setShow}/>)
      }
    </div>
    </div>
  )
}

export default Consultations
