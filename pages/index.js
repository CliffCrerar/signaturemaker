import { useState } from 'react';
import Layout from '../layout'


export default function Home() {

  const [signatureDetail, displaySignature] = useState('');

  const formControls = [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'designation',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'website',
      type: 'text',
    },
    {
      name: 'img',
      type: 'file'
    }
  ]


  const SignatureForm = () => (
    <form name="signatureForm" onSubmit={submitForm}>
      {formControls.map(control => (
        <div key={control.name}>
          <label htmlFor={control.name}>Enter {control.name}:</label>
          <input id={control.name} name={control.name} type={control.type} />
        </div>
      ))}
      <br />
      <input type="submit" name="generate" value="Generate Signature" />
    </form>
  )

  function submitForm(event) {
    console.log(event);
    event.preventDefault()
    event.persist();
    const data = new FormData(event.target)
    console.log('data: ', data.SignatureForm);
    const formData = {};

    formControls.forEach(control => {
      formData[control.name] = data.get(control.name);
    })

    formData.img.arrayBuffer().then(buf => {
      const bts = Buffer.from(buf).toString('base64');
      console.log('bts: ', bts);
      displaySignature('data:image/png;base64,' + bts);
      console.log('img: ', img);
    });


  }

  return (
    <Layout>

      <div className="container">
        <style>{`
          input {
            width: 50%;
          }
        `}</style>
        {/* <form onSubmit={submitForm} name="signatureForm"> */}
        <SignatureForm />
        {/* <label htmlFor="name">Enter Name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="designation">Enter Designation:</label>
          <input type="text" id="designation" name="designation" />
          <label htmlFor="email" >Enter Email: </label>
          <input type="email" id="email" name="email" />
          <label htmlFor="website" >Enter Web Site:</label>
          <input type="text" id="website" name="website" /> */}
        <br />

        <div>

        <img src={signatureDetail} alt="signature-img" />
        </div>

      </div>
    </Layout >
  )
}
