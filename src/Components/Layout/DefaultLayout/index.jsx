import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
const DefaultLayout = ({children}) => {
  return (
    <div>
        <Header/>
        <div className='container'>
            <Sidebar/>
            <div className='content'>
                <h1>{children}</h1>
            </div>
        </div>
    </div>
  )
}

export default DefaultLayout