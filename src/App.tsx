
import { Suspense } from 'react';
import './App.css'

import Nav from './components/Nav';
import Banner from './components/Banner';

function App() {

  const CarddPromise = async() => {
    const res = await fetch("/data.json")
    const data = await res.json()
    return data;
  }
  
  return (

    <>
      <Nav />
      <Banner />

      {/* <Suspense fallback={
        <div className="flex justify-center items-center min-h-[200px]">
            <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          </div>}>
      }>
      
      </Suspense> */}

    </>
  )
}

export default App
