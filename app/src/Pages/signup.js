import React, { useState } from 'react';
import { InputField } from '../Components/perfabs';
import { Link } from 'react-router-dom';


const Signup = () => {
    const [user, setUser] = useState({ email: null, pwd: null, pwdConf: false });

    function handelChange(e) {
        if (e.target.name === "pwdConf") {
            if (user.pwd === e.target.value) {
                setUser(prev => ({
                    ...prev,
                    [e.target.name]: true
                }))
            }
            else {
                setUser(prev => ({
                    ...prev,
                    [e.target.name]: false
                }))
            }
        }
        else {
            setUser(prev => ({
                ...prev,
                [e.target.name]: e.target.value
            }))
        }

        console.log(user)
    }





    return (
        <div className='auth-section'>
            <form>
                <InputField name="email" string="بريد الالكتروني " type="email" required="true" action={handelChange} />
                <InputField name="pwd" string="كلمة المرور" type="password" required="true" action={handelChange} />
                <InputField name="pwdConf" string="تأكيد كلمة المرور" type="password" required="true" action={handelChange} />

                <button className='btn-cta'>أنشئ حساب</button>

            </form>
            <p> لديك حساب <Link to="/login">تسجيل الدخول</Link></p>
        </div>
    );
}

export default Signup;
