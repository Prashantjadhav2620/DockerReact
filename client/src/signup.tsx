// import React from 'react'
// import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';


// const signup : React.FC = () => {
//   return (
//     <MDBContainer fluid className="p-3 my-5 h-custom">

//       <MDBRow>

//         <MDBCol col='10' md='6'>
//           <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
//         </MDBCol>

//         <MDBCol col='4' md='6'>

//           <div className="d-flex flex-row align-items-center justify-content-center">

//             <p className="lead fw-normal mb-0 me-3">Registration with</p>

//             <MDBBtn floating size='md' tag='a' className='me-2'>
//               <MDBIcon fab icon='facebook-f' />
//             </MDBBtn>

//             <MDBBtn floating size='md' tag='a' className='me-2'>
//               <MDBIcon fab icon='twitter' />
//             </MDBBtn>

//             <MDBBtn floating size='md' tag='a' className='me-2'>
//               <MDBIcon fab icon='linkedin-in' />
//             </MDBBtn>

//           </div>

//           <div className="divider d-flex align-items-center my-4">
//             <p className="text-center fw-bold mx-3 mb-0">Or</p>
//           </div>

//           <MDBInput wrapperClass='mb-4' label='User Name' id='formControlLg' type='username' size="lg" />
//           <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" />
//           <MDBInput wrapperClass='mb-4' label='Phone' id='formControlLg' type='phone' size="lg" />
//           <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" />

//           <div className="d-flex justify-content-between mb-4">
//             <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
//             <a href="!#">Forgot password?</a>
//           </div>

//           <div className='text-center text-md-start mt-4 pt-2'>
//             <MDBBtn className="mb-0 px-5" size='lg'>Register</MDBBtn>
//             <p className="small fw-bold mt-2 pt-1 mb-2">You have an account? <a href="/login" className="link-danger">Login</a></p>
//           </div>

//         </MDBCol>

//       </MDBRow>

//       <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

//         <div className="text-white mb-3 mb-md-0">
//           Copyright © 2020. All rights reserved.
//         </div>

//         <div>

//           <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
//             <MDBIcon fab icon='facebook-f' size="md" />
//           </MDBBtn>

//           <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
//             <MDBIcon fab icon='twitter' size="md" />
//           </MDBBtn>

//           <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
//             <MDBIcon fab icon='google' size="md" />
//           </MDBBtn>

//           <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
//             <MDBIcon fab icon='linkedin-in' size="md" />
//           </MDBBtn>

//         </div>

//       </div>

//     </MDBContainer>
//   );
// }
// export default signup



import React, { useState } from 'react';
import axios from 'axios'; // Import axios library
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRegistration = () => {
    // Perform axios request here with formData

    console.log("formData",formData);

    axios.post('http://localhost:5000/api/auth/register', formData)
      .then(response => {
        // Handle success response
        console.log('Registration successful:', response.data);
      })
      .catch(error => {
        // Handle error
        console.error('Registration failed:', error);
      });
  };

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>
        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
        </MDBCol>
        <MDBCol col='4' md='6'>
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">Registration with</p>
            <MDBBtn floating size='md' tag='a' className='me-2'>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>
            <MDBBtn floating size='md' tag='a' className='me-2'>
              <MDBIcon fab icon='twitter' />
            </MDBBtn>
            <MDBBtn floating size='md' tag='a' className='me-2'>
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>
          </div>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>
          <MDBInput 
            wrapperClass='mb-4' 
            label='User Name' 
            id='username' 
            type='text' 
            size="lg" 
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
          />
          <MDBInput 
            wrapperClass='mb-4' 
            label='Email address' 
            id='email' 
            type='email' 
            size="lg" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
          <MDBInput 
            wrapperClass='mb-4' 
            label='Phone' 
            id='phone' 
            type='tel' 
            size="lg" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
          />
          <MDBInput 
            wrapperClass='mb-4' 
            label='Password' 
            id='password' 
            type='password' 
            size="lg" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
          />
          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>
          <div className='text-center text-md-start mt-4 pt-2'>
            {/* Attach handleRegistration function to onClick event of the button */}
            <MDBBtn onClick={handleRegistration} className="mb-0 px-5" size='lg'>Register</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">You have an account? <a href="/login" className="link-danger">Login</a></p>
          </div>
        </MDBCol>
      </MDBRow>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>
        <div>
          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='facebook-f' size="md" />
          </MDBBtn>
          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='twitter' size="md" />
          </MDBBtn>
          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='google' size="md" />
          </MDBBtn>
          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='linkedin-in' size="md" />
          </MDBBtn>
        </div>
      </div>
    </MDBContainer>
  );
}

export default Signup;
