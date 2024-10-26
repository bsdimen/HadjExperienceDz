import React from 'react';
import { InputField } from '../Components/perfabs';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='auth-section'>
            <form>
                <InputField name="email" string="بريد الالكتروني " type="email" required="true" />
                <InputField name="password" string="كلمة المرور" type="password" required="true" />
                <button className='btn-cta'>تسجيل الدخول</button>

            </form>
            <p>ليس لديك حساب <Link to="/signup"> أنشئ حسابا الآن</Link></p>

        </div>
    );
}

export default Login;
