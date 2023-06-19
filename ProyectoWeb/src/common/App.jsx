import React from 'react'
import Routing from './Routing';
import AuthProvider from '../auth/AuthProvider';


export default function App() {

  return (
    <>
    <AuthProvider>
      <Routing />
    </AuthProvider>
    </>
  )
}
