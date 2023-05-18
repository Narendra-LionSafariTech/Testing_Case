import React, { useState } from 'react'
import ChangeToPolygon from '../input/ChangeToPolygon'
import Navbar from '../navbar/Navbar'

const ResponsivePage = () => {
    const [open,setOpen]=useState(true)

    const ToggleSidebar=()=>{
        setOpen(!open)
    }
    return (
        <div className='main-layout'>
            <header className='layout-header'>
                <nav className='layout-navbar'>
                    <Navbar/>
                </nav>
                <div className='hero-banner'>
                    Banner
                </div>
            </header>
            <main className='layout-main'>
                <section className={`${open? "sidebar":"sidebar-close"}`}>
                    <div className='sidebar-header'><h2>Sidebar Logo</h2> </div>
                    sidebar
                </section>
                <section className={`${open ?"content":"stretch-content"}`}>
                    <div className='content-header'><h2 onClick={ToggleSidebar}>sidebar Menu Button</h2> </div>

                    <ChangeToPolygon/>
                </section>
            </main>

        </div>
    )
}

export default ResponsivePage
