import React, { useEffect, useState } from 'react'

export default function Scroll() {


    const [scroll, setScroll] = useState(0)

    document.addEventListener('scroll', () => {
        setScroll(Math.round(window.scrollY * 100 / (window.innerHeight - document.body.clientHeight)));
    })

    return (
        <div className="scroll-bar" style={{ width: `${-scroll}%` }}>
            {/* <div className="scroll-prograss"></div> */}
        </div>
    )
}
