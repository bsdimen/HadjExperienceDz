import React, { useState } from 'react';
import rightIcon from "../Asstes/Icons/right-small.svg"
import { InputField, InputDateField } from '../Components/perfabs';


const Register = () => {

    const [gender, setGender] = useState('');

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };
    return (
        <div className='register-page center-h'>
            <div className='container center-h'>
                <button className='btn-back'> <img src={rightIcon} />عودة</button>

                <div className='register-wrapper'>
                    <div className='register-bar'>
                        <span className='bar'><span className='bar-complete'></span></span>
                        <span className='step' data-step="d">تسجيل الدخول</span>
                        <span className='step' data-step="2">الحالة المدنية</span>
                        <span className='step' data-step="3">معلومات أخرى</span>
                        <span className='step' data-step="4">تأكيد المعلومات</span>

                    </div>
                    <div className='register-info'>
                        <div className='input-section'>
                            <h3>معلومات الحالة المدنية لصاحب الطلب</h3>
                            <div className='inputs'>
                                <InputField name="nom" string="اللقب" type="text" required="true" />
                                <InputField name="nom-fr" string="Nom" type="text" addClass="fr" required="true" />
                                <InputField name="prenom" string="الاسم" type="text" required="true" />
                                <InputField name="prenom-fr" string="Prenom" type="text" addClass="fr" required="true" />

                                <div className='genders'>
                                    <lable className="input-label">الجنس</lable>
                                    <div className='radio-inputs'>
                                        <div className='single'>
                                            <input type='radio' value="male" name="gender"
                                                checked={gender === 'male'}
                                                onChange={handleGenderChange} />
                                            <lable className="input-label">ذكر</lable>
                                        </div>
                                        <div className='single'>
                                            <input type='radio' value="female" name="gender"
                                                checked={gender === 'female'}
                                                onChange={handleGenderChange} />
                                            <lable className="input-label">انثى</lable>
                                        </div>
                                    </div>

                                </div>

                                <InputDateField name="birthDate" string="تاريخ الميلاد" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div >
    );
}

export default Register;
