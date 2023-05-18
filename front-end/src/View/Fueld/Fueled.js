import React, { useEffect, useState } from 'react'
import './home.css'

const Fueld = () => {
    const [scrollProgress,setScrollProgress]=useState(0)
    const scroll = scrollProgress

    const onScroll=()=>{
        const winScroll=document.documentElement.scrollTop
        const height=document.documentElement.scrollHeight-document.documentElement.clientHeight

        const scrolled=(winScroll/height*100)
        setScrollProgress(scrolled)
    }
    useEffect(()=>{
        window.addEventListener("scroll",onScroll)
        return ()=>window.removeEventListener("scroll",onScroll)
    },[])

    return (
        <div className='home-main'>
            <div className='home-section'>
                <div className='hero-section'>
                    <div className={`${scroll <25? "home-projects__square" : "hero"}`}></div>
                    <h1 className={`${scroll < 25 ? "home-project__text" : "hero"}`}>Lion Safari Tech</h1>

                </div>

                <div className='hero-section'>
                    {console.log(scrollProgress)}
                    <div className={`${scroll >= 25 && scroll <50? "home-projects__square" : "hero"}`} style={{ backgroundImage: `url("https://fdc.fueled.engineering/assets/media/sq-wire.cf29d6fb3.png")` }}></div>
                    <h1 className={`${scroll >= 25 && scroll <50 ? "home-project__text" : "hero"}`}>Red <span style={{color:"red"}}>ANT_EduTech</span></h1>


                </div>
                <div className='hero-section'>
                    <div className={`${scroll >= 50 && scroll <75? "home-projects__square" : "hero"}`}></div>
                    <h1 className={`${scroll >= 50 && scroll <75 ? "home-project__text" : "hero"}`}>Red Square</h1>

                </div>
                <div className='hero-section'>
                    {console.log(scrollProgress)}
                    <div className={`${scroll >= 75 && scroll <=105? "home-projects__square" : "hero"}`} style={{ backgroundImage: `url("https://fdc.fueled.engineering/assets/media/sq-wire.cf29d6fb3.png")` }}></div>
                    <h1 className={`${scroll >= 75 && scroll <=105 ? "home-project__text" : "hero"}`}>Z-<span style={{color:"red"}}>Shoping Store</span></h1>


                </div>
            </div>

            <div className='home-scroller'>
                <div className='scroller'>
                    <div className='scroll-tracker'>

                    </div>
                    <div className='scroll-bar' style={{height:`${scrollProgress}%`}}>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Fueld
