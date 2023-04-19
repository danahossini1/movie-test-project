import React, { useEffect } from 'react'
// import './Register.css'
import Header from '../../Components/Header'
import Scroll from '../../Components/Scroll'
import Aside from '../../Components/Aside'
import Footer from '../../Components/Footer'
import ReCAPTCHA from 'react-google-recaptcha';
import Input from '../../Components/Input/Input'
import useForm from '../../Components/Hooks/useForm'
import { maxValidate, minValidate, emailValidate, numberValidate } from '../../Components/validation/roules';
import { Link, useNavigate } from 'react-router-dom'


export default function Register() {


    useEffect(() => {
        window.scroll('0', '0')
    }, [])


    const navigate = useNavigate()

    const [formState, onInputHandler] = useForm({

        name: {
            value: '',
            isValid: false
        },
        email: {
            value: '',
            isValid: false
        },
        number: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    }, false)


    const login = (e) => {
        e.preventDefault()
        let user = {
            name: formState.input.name.value,
            email: formState.input.email.value,
            number: formState.input.number.value,
            password: formState.input.password.value,
        }
        localStorage.setItem('userlogin', JSON.stringify(user))
        navigate('/')
    }


    return (
        <div>
            <div className="container-fluid px-0 ">
                <Scroll />
                {/* Header */}
                <Header />
                {/* Header */}
                <main className="container d-flex gap-3 flex-column flex-md-row align-items-start">
                    <section className="col-12 col-lg-8 mt-5">
                        <section className="border rounded-sm py-2 px-4 ">
                            <form action="" className="text-right ">
                                <div className="mt-2">
                                    <label for="email" className="h4">نام کاربری</label>
                                    <Input
                                        className={`inputes ${formState.input.name.isValid ? 'input-true' : 'input-false'}`}
                                        type="text"
                                        id="name"
                                        elem='input'
                                        validation={[
                                            minValidate(4),
                                            maxValidate(24)
                                        ]}
                                        onInputHandler={onInputHandler}
                                    />
                                </div>
                                <div className="mt-2">
                                    <label for="number-phone" className="h4">ایمیل</label>
                                    <Input
                                        type="text"
                                        className={`inputes ${formState.input.email.isValid ? 'input-true' : 'input-false'}`}
                                        id='email'
                                        elem='input'
                                        validation={[
                                            emailValidate(),
                                        ]}
                                        onInputHandler={onInputHandler}
                                    />
                                </div>
                                <div className="mt-2">
                                    <label for="pass" className="h4">شماره تماس</label>
                                    <Input
                                        type="text"
                                        className={`inputes ${formState.input.number.isValid ? 'input-true' : 'input-false'}`}
                                        id='number'
                                        elem='input'
                                        validation={[
                                            numberValidate(),

                                        ]}
                                        onInputHandler={onInputHandler}
                                    />

                                </div>
                                <div className="mt-2">
                                    <label for="repeat-pass" className="h4">رمز عبور</label>
                                    <Input
                                        type="text"
                                        className={`inputes ${formState.input.password.isValid ? 'input-true' : 'input-false'}`}
                                        id='password'
                                        elem='input'
                                        validation={[
                                            maxValidate(24),
                                            minValidate(8)
                                        ]}
                                        onInputHandler={onInputHandler}
                                    />

                                </div>
                                <div className='mt-5'>

                                    <ReCAPTCHA
                                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"

                                        style={{ zIndex: 999 }}
                                    />
                                </div>
                                <div className="d-flex flex-wrap align-items-center justify-content-between mt-4">

                                    <div className=" w-25 mt-4 ">
                                        <button onClick={e => login(e)} disabled={!formState.isValid} className={`btn btn-success w-100 `}  >ثبت نام</button>
                                    </div>

                                </div>
                            </form>
                        </section>
                    </section>
                    {/* Aside */}
                    <Aside />
                    {/* Aside */}
                </main>
                <Footer />
            </div>
        </div >
    )
}
