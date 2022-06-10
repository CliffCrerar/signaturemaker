import { useState } from 'react';
import { SignatureDisplay, SignatureForm } from '../components';
import { formControls } from '../config';
import Layout from '../layout'
import {Signature} from '../models';


export default function Home() {

  const [signatureDetail, displaySignature] = useState('');

  function submitForm(event) {

    event.preventDefault()
    event.persist();

    const data = new FormData(event.target)
    const formData = {};

    formControls.forEach(control => {
      formData[control.name] = data.get(control.name);
    });
    
    const signature = new Signature(data);
    
    console.log('signature: ', signature);

    formData.imgFile.arrayBuffer()
      .then(buf => {
        const bts = Buffer.from(buf).toString('base64');
        displaySignature('data:image/png;base64,' + bts);
      });
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
        `}</style>
        {/* <form onSubmit={submitForm} name="signatureForm"> */}
        
        <SignatureForm submitForm={submitForm} />   
        <div className="horizontal-seperator"></div> 
        <SignatureDisplay/>
      </div>
    </Layout >
  )
}
