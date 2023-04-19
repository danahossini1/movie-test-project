import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {


    const [allProduct, setAllProduct] = useState([])
    const [searcheProduct, setSearcheProduct] = useState([])
    const [ganers, setGaners] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [isLogin, setIsLogin] = useState(false)

    const date = new Date()

    const option = {
        year: "numeric",
        month: "long",
        weekday: "long",
        day: "numeric"
    }



    useEffect(() => {
        [
            fetch('https://moviesapi.ir/api/v1/movies?page=2'),
            fetch('https://moviesapi.ir/api/v1/movies?page=8'),
            fetch('https://moviesapi.ir/api/v1/movies?page=4'),
            fetch('https://moviesapi.ir/api/v1/movies?page=5'),
            fetch('https://moviesapi.ir/api/v1/movies?page=6'),
            fetch('https://moviesapi.ir/api/v1/movies?page=10'),
        ].map(item => { item.then(res => res.json()).then(res => { setAllProduct(product => [...product, ...res.data]) }) })

        fetch('https://moviesapi.ir/api/v1/genres')
            .then(res => res.json())
            .then(res => setGaners(res.sort(() => 0.5 - Math.random()).slice(0, 7)))

        let local = JSON.parse(localStorage.getItem('userlogin'))
        local && setIsLogin(true)

    }, [])

    useEffect(() => {

        let serchMove = allProduct.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        let searchprod = serchMove.filter((obj, index) => index === serchMove.findIndex(o => o.id === obj.id))

        searchValue.length < 3 ? setSearcheProduct([]) : searchprod.length < 6 && setSearcheProduct(searchprod)

        // const GlobalSearch = e => {
        // setSearchValue(e.target.value)
        // }
    }, [searchValue])

    useCallback(() => {
    }, [])

    return (
        <header className="justify-content-center">
            <section className="">
                <div className="top-nav col-12  justify-content-between align-items-center">
                    <div className="container h-100 d-flex">
                        <div className="top-nav-right col-md-4 col-sm-4 col-sm-5 col-4 ">
                            <Link to='/'>
                                <i className="fa fa-home"></i>
                            </Link>

                        </div>
                        <div className="top-nav-left col-md-8 col-sm-8 col-sm-7 col-8 h-100">
                            <p className="m-0 sm-respons">تاریخ امروز : </p>
                            <p className="m-0 sm-respons">{date.toLocaleDateString('fa-IR', option)}</p>
                        </div>
                    </div>
                </div>
                <div className=" container px-0 ">
                    <div className="center-nav col-12 ">
                        <div className="center-nav-right col-12 col-md-8 col-lg-6">
                            <div className="">
                                <img src="./public/img/logo.png" alt="" />
                            </div>
                            <div className=" ">
                                <h4 className="">سایت فیلم و سریال </h4>
                                <p className=" ">پایگاه نمایش فیلم و سریال های خانگی</p>
                            </div>
                        </div>
                        <div className="center-nav-left col-12 col-md-4 col-lg-4 ">
                            <input type="search" value={searchValue} onChange={e => { setSearchValue(e.target.value) }} placeholder="جستجو کنید ..." />
                            <div className="">
                                <i className="fa-solid fa-cart-arrow-down"></i>
                            </div>

                        </div>
                        <div style={{ position: 'absolute', background: 'white', border: `${searcheProduct.length && '5px solid blue'} `, left: 90, top: 120, width: 440 }} className='absolute'>
                            {searcheProduct.map((item, index) =>
                                <div key={index} className="d-flex flex-row-reverse align-items-center">
                                    <div className="top-left-slider col-6">
                                        <Link to={`/singlemove/${item.id}`} className="pt-2 Links" id="titleSlider">{item.title}</Link>

                                        <div className="data pb-2">
                                            <i className="fa fa-calendar"></i>
                                            <div className="">
                                                <p className="m-0">انتشار :</p>
                                                <p className="m-0" id="dataSlider">{item.year}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="top-right-slider col-6">
                                        <img src={item.poster} alt="" className="w-50" height='150px' id="imgSlider" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <section className="">
                <div className="navbar-main col-12 mt-2 mt-lg-0">
                    <ul className="container ">
                        <li><Link to={'/'} href="index.html" className="px-4 h5 md-respons">صفحه اصلی</Link></li>
                        <li><Link to={'/archive'} href="register.html" className="px-4 h5 md-respons">آرشیو</Link></li>
                        {!isLogin && <li><Link to={'/register'} href="register.html" className="px-4 h5 md-respons">ثبت نام</Link></li>}
                        <li className="dropdown-nav h5 md-respons">
                            <a className="">
                                دسته بندی
                                <i className="fa fa-arrow-down mr-5"></i>
                            </a>
                            <ul className="dropdown-group ">
                                {ganers.map((item, index) =>
                                    <Link className='w-100' key={index} to={`/ganer/${item.id}/${item.name}`}>
                                        <li>
                                            <i className="fa fa-angle-left"></i>
                                            <p className="">{item.name}</p>
                                        </li>
                                    </Link>
                                )}


                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
        </header>
    )
}
