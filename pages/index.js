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
          input {
            
          }
          .container {
            display: flex;
          }
        `}</style>
        {/* <form onSubmit={submitForm} name="signatureForm"> */}
        
        <SignatureForm submitForm={submitForm} />
        {/* <label htmlFor="name">Enter Name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="designation">Enter Designation:</label>
          <input type="text" id="designation" name="designation" />
          <label htmlFor="email" >Enter Email: </label>
          <input type="email" id="email" name="email" />
          <label htmlFor="website" >Enter Web Site:</label>
          <input type="text" id="website" name="website" /> */}
        

        <SignatureDisplay/>
      </div>
    </Layout >
  )
}
