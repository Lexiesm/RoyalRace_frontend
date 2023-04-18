import React from 'react'
import { Toaster } from 'react-hot-toast';
import Routing from './Routing';


function App() {

  return (
    <>
      <Routing />
      <Toaster position='bottom-center' toastOptions={
        {
          style: {
            background: '#191414',
            color: 'white',
            border: '1px solid #2e2c2c'
          }
        }
      }/>
    </>
  )
}

export default App
