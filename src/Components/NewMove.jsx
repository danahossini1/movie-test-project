import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export default function NewMove({ setIsLoading }) {


    const [newMovie, setNewMpvie] = useState([])

    useEffect(() => {
        fetch('https://moviesapi.ir/api/v1/movies?page=2')
            .then(res => res.json()).then(res => setNewMpvie(res.data.sort(() => 0.5 - Math.random()).slice(0, 8)))

    }, [])

    return (
        <section className="border rounded-sm mt-4">
            <div className="archive d-flex flex-column justify-content-center align-items-lg-start">
                <div
                    className="top-archive border-bottom w-100 d-flex align-items-center justify-content-lg-start py-2 px-4">
                    <i className="fa fa-sticky-note-o fa-2x"></i>
                    <p className="m-0 mr-2">آرشیو جدید ترین فیلم ها</p>
                </div>
            </div>
            <div className="">
                <div className="bottom-archive px-2 py-2 border-bottom">
                    {newMovie.map((item, index) =>
                        <div key={index} className="film-item d-flex my-4 align-items-center justify-content-between col-12 p-0">
                            <div className=" rounded-sm col-4 p-0 overflow-hidden mr-2 d-none d-md-block">
                                <img src={item.poster} onLoad={()=>setIsLoading(true)} alt="" width="80%" height="220px" className="" />
                            </div>
                            <div className="film-item-details d-flex flex-column align-items-start justify-content-center px-1 px-md-4 col-12 col-md-8">
                                <div className="film-item-title d-flex align-items-center justify-content-between w-100">
                                    <h6 className="mt-2"><Link to={`singlemove/${item.id}`} className='Links' >{item.title}</Link></h6>
                                    <div className="film-item-date d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <i className="fa fa-calendar"></i>
                                            <p className="m-0">تاریخ انتشار :</p>
                                        </div>
                                        <p className="m-0">{item.year}</p>
                                    </div>
                                </div>
                                <div className="">
                                    <p className="m-0 text-right text-muted">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis unde reprehenderit libero similique, odio eaque autem perferendis repellat ipsa, molestiae suscipit quam rem dolor? Deleniti minima debitis quo illo quis!
                                    </p>
                                </div>
                                <div className="align-self-end ">
                                    <button className="btn btn-warning btn-sm text-dark "><Link className='Links h5' to={`singlemove/${item.id}`}>See and Buy</Link></button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>

            </div>
        </section>
    )
}
