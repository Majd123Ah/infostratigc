import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

const Footer =() =>{
  return (
    <MDBFooter className='bg-dark text-center text-white'  id='Footer'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-1'>
          <MDBBtn outline color="blue" floating className='m-1' href='https://www.facebook.com/Infostrategic' target='new' role='button'>
          <MDBIcon  fab icon="facebook"  />
          </MDBBtn>
          <MDBBtn outline color="blue" floating className='m-1' href='https://twitter.com/InfoStrategicae' role='button' >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="blue" floating className='m-1' href='mailto:info@infostrategic.com' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color="blue" floating className='m-1' href='https://www.instagram.com/infostrategic/' target='new' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="blue" floating className='m-1' href='https://www.linkedin.com/company/13222992' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://infostrategic.com/'>
         infostrategic.com
        </a>
      </div>
    </MDBFooter>
  );
}
export default Footer