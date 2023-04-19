import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Aside() {


    const [popularMove, setPopularMove] = useState([])
    const [ganers, setGaners] = useState([])

    useEffect(() => {
        fetch('https://moviesapi.ir/api/v1/movies?page=5')
            .then(res => res.json()).then(res => setPopularMove(res.data.sort(() => 0.5 - Math.random())))

        fetch('https://moviesapi.ir/api/v1/genres')
            .then(res => res.json())
            .then(res => setGaners(res.sort(() => 0.5 - Math.random()).slice(1, 5)))
    }, [])


    return (
        <aside className="">
            <div className="aside col-12">
                <div className="d-flex align-items-center">
                    <i className="fa fa-folder "></i>
                    <h6 className="">ژانر</h6>
                </div>
                <ul className="">
                    {ganers.map((item, index) =>
                        <li key={index}>
                            <i className="fa fa-angle-left"></i>
                            <Link to={`/ganer/${item.id}/${item.name}`} className="category-link">{item.name}</Link>
                            <div className="badge-custom">
                                <span className="">{item.id}</span>
                            </div>
                        </li>
                    )}


                </ul>
            </div>
            <div className="aside-visited col-12">
                <div className="d-flex align-items-center visiteed-header">
                    <i className="fa fa-star fa-2x "></i>
                    <h6 className="">پر بازدید ترین فیلم سریال ها</h6>
                </div>
                <ul className="hidden">
                    {popularMove.map((item, index) =>
                        <li key={index}>
                            <div className="visited-right">
                                <img src={item.poster} alt="" className="" width="75" height="60" />
                            </div>
                            <div className="visited-details">
                                <Link to={`/singlemove/${item.id}`} className="m-0">{item.title}</Link>
                                <div className="">
                                    <p className="">انتشار :</p>
                                    <p className="">{item.year}</p>
                                </div>
                            </div>
                        </li>
                    )}


                </ul>
            </div>
        </aside>
    )
}
