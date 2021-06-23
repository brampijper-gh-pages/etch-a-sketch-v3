import React from 'react'
import './css/layout.module.css'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <>
            <main>
                {children}
            </main>
            <Footer/>  
        </>
    )
}

export default Layout
