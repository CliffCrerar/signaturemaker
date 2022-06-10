import { useState } from 'react';
import { SignatureDisplay, SignatureForm } from '../components';
import { formControls } from '../config';
import Layout from '../layout'
import { Signature } from '../models';


export default function Home() {

  const [displaySignature, activateSignature] = useState(false);
  const [signature, setSignature] = useState({});
  

  function submitForm(event) {

    event.preventDefault()
    event.persist();

    const data = new FormData(event.target)
    // const formData = {};

    // formControls.forEach(control => {
    //   formData[control.name] = data.get(control.name);
    // });
    const sig = new Signature(data).catch(err=>console.error(err));
    sig.then(res=>{
      setSignature(res)
      activateSignature(true)
      console.log('signature: ', signature);
    })

    
    
  }

  return (
    <Layout>

      <div className="container">
        <style jsx>{`
          .container {
            display: flex;
          }
          .horizontal-seperator{
            border: 0.5px solid rgba(0, 0, 0, 0.2);
            margin-right: 20px;
          }
        `}
        </style>
        <SignatureForm submitForm={submitForm} />
        <div className="horizontal-seperator"></div>
        {
          displaySignature && <SignatureDisplay signature={signature}/>
        }
        
      </div>

    </Layout >
  )
}
