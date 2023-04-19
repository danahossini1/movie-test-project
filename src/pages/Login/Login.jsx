import React from 'react'
import Aside from '../../Components/Aside'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Scroll from '../../Components/Scroll'
import ReCAPTCHA from 'react-google-recaptcha';
import Input from '../../Components/Input/Input'
import useForm from '../../Components/Hooks/useForm'
import { maxValidate, minValidate } from '../../Components/validation/roules';


// import './Login.css'

export default function Login() {


    const [formState, onInputHandler] = useForm({

        email: {
            value: '',
            isValid: false
        },

        password: {
            value: '',
            isValid: false
        },

    }, false)

    console.log(formState);

    return (
        <div className='minH' >
            <div className="container-fluid px-0 ">
                <Scroll />
                {/* Header */}
                <Header />
                {/* Header */}
                <main className="minH container d-flex gap-3 flex-column flex-md-row align-items-start">
                    <section className="col-12 col-lg-8 mt-5">
                        <section className="border rounded-sm py-2 px-4 ">
                            <form action="" className="text-right ">
                                <div className="mt-2">
                                    <label for="email" className="">نام کاربری</label>
                                    <Input
                                        className="form-control"
                                        type="text"
                                        id="email"
                                        elem='input'
                                        validation={[
                                            maxValidate(24),
                                            minValidate(4)
                                        ]}
                                        onInputHandler={onInputHandler}
                                    />
                                </div>
                                <div className="mt-2">
                                    <label for="pass" className="">رمز عبور</label>
                                    <Input
                                        type="text"
                                        className='form-control'
                                        id='password'
                                        elem='input'
                                        validation={[
                                            minValidate(8),
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
                                    <div className=" w-25 mt-4">
                                        <button className="btn btn-success w-100">ورود به سایت</button>
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
        </div>
    )
}
