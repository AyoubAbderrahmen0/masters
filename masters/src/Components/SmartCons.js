import React, { useState } from 'react'
import { Button} from 'react-bootstrap';
import Chat from './Chat';
import Image0 from './Image0';

function SmartCons() {
    const [show2, setShow2] = useState("0");
    
  return (
    <div>
          <div className='card p-2 ms-3 mt-1'>
      {show2==="0" && (
      <div>
        <h2 className='text-center'>Start your Consultation</h2>
<div className='d-flex justify-content-center my-4'>
<Button
              className='rounded-start-pill'
              variant="success"
              onClick={() => setShow2("Image")}
            >
              Image Consultation
            </Button>
            <Button
              className='rounded-end-pill'
              variant="primary"
              onClick={() => setShow2("Chat")}
            >
              Chat Consultation
            </Button>
</div>
      </div>
      )
      }
      {show2 === "Image" &&
      (<Image0 setShow2={setShow2}/>)
      }
      {show2 === "Chat" &&
      (<Chat setShow2={setShow2}/>)
      }
    </div>
    </div>
  )
}

export default SmartCons
