import React, { useState } from 'react';
import leftIcon from "../Asstes/Icons/arrow-left.svg"
import leftUpIcon from "../Asstes/Icons/left-small-up.svg"
import { motion } from "framer-motion";
import g_01 from "../Asstes/Imgs/g-01.jpg";
import g_02 from "../Asstes/Imgs/g-02.jpg";
import g_03 from "../Asstes/Imgs/g-03.jpg";



const Home = () => {

    return (
        <div className='home '>
            <div className='hero-section center-h'>
                <div className='container'>
                    <div className='hero-content'>
                        <h1>الموقع الرسمي للتسجيل في موسم الحج لسنة 2025 م / 1446 هـ</h1>
                        <p>مرحبا بكم في هذا الموقع الإلكتروني لوزارة الداخلية والجماعات المحلية والتهيئة العمرانية، الذي يقدم لكم خدمة جديدة تمكنكم من ملء استمارة التسجيل لموسم الحج لسنة 2025 م / 1446 هـ  مباشرة عبر الأنترنت.</p>
                    </div>
                    <div className='hero-details'>
                        <button className='btn-cta'>سجل الآن<img src={leftIcon} /></button>
                        <h6>تبقى 12 يوم لنهاية فترة التسجيلات</h6>
                    </div>
                </div>
            </div>
            <RegisterConditions />
            <RegisterSteps />
            <HadjGuide />
        </div>
    );
}

const RegisterConditions = () => {
    const conditions = ["التمتع بالجنسية الجزائرية.",
        "بلوغ سن تسعة عشر (19) سنة كاملة يوم التسجيل.",
        "عدم الحج خلال السبع (07) سنوات السابقة يبدأ إحتسابها من سنة 2018، بإستثناء المحرم لإمرأة لم يسبق لها الحج خلال السبع سنوات السابقة.",
        "ملء وإرسال استمارة المعلومات الموضوعة تحت تصرف المترشح.",
        "إجبارية المحرم الشرعي للمرأة البالغ سنها أقل من 45 سنة، أما المرأة البالغ سنها أكثر من 45 سنة فيمكنها التسجيل مع محرمها الشرعي أو لوحدها.",
        "بالنسبة للمرأة المسجلة مع محرمها فلا يمكن أن تسجل إلا بعد أن يسجل المحرم أولا ثم تقوم هي بالتسجيل بعده. وفي حالة وجود اختلاف في مقر إقامة المرأة عن مقر إقامة المحرم، يتم التسجيل في بلدية مقر إقامته.",
        "عدم إمكانية التسجيل في أكثر من بلدية."]

    const [isLinkHovered, setIsLinkHovered] = useState(false)
    const transition = { duration: 0.3, ease: "easeIn" }

    return <div className='registeration-conditions center-h'>
        <div className='container'>
            <h3 className='main-heading'>شروط التسجيل</h3>
            <div className='conditions'>
                {conditions.map((c) => <div className='condition'><p>{c}</p></div>)}
                <motion.div className='condition guide'>
                    <motion.span
                        onMouseEnter={() => setIsLinkHovered(true)}
                        onMouseLeave={() => setIsLinkHovered(false)}
                        initial={{ rotateX: "0deg" }}
                        transition={transition}
                    >الدليل التفاعلي
                    </motion.span>
                    <div className='icon'>
                        <img src={leftUpIcon} />
                    </div>
                </motion.div>
            </div>

        </div>
    </div >
}

const RegisterSteps = () => {
    return <div className='register-steps-section center-h'>
        <div className='container register-steps-container'>
            <div className='register-details'>
                <h3 className='main-heading right'>طريقة التسجيل</h3>
                <p>للقيام بملء إستمارة التسجيل للحج ، يجب إتباع الخطوات التالية :</p>
                <p className='remark'>ملاحظة: يمكنك القيام بعدة طلبات مختلفة للأهل والأقارب بنفس الحساب .</p>
                <ul className='important-remarks'>أهم المعلومات التي ستحتاجها:
                    <li>معلومات جواز السفر البيومتري </li>
                    <li>رقم التعريف الوطني</li>
                    <li>رقم تسجيل المحرم بالنسبة للنساء</li>
                </ul>
            </div>
            <div className='register-steps'>
                <div className='steps'>
                    <div className='step' data-step="1">
                        <p>إنشاء حساب في المنصة.</p>
                    </div>
                    <div className='step' data-step="2">
                        <p>تسجيل الدخول لحسابك.</p>
                    </div>
                    <div className='step' data-step="3">
                        <p>التحقق جيدا من المعلومات المسجلة و ذلك بمطابقتها مع معلومات عقد الميلاد، الدفتر العائلي أو بطاقة الهوية.</p>
                    </div>
                    <div className='step' data-step="4">
                        <p>إضغط على الزر تسجيل الطلب لتثبيت الطلب.</p>
                    </div>
                    <div className='step' data-step="5">
                        <p>مباشرة بعد تسجيل الطلب سوف يظهر لك رقم تسجيل الطلب، كما يتم كذلك إرسال رسالة نصية إلى بريدك الإلكتروني تحمل نفس الرقم مرفوقة بوصل التسجيل.</p>
                    </div>


                    <div className='step' >
                        <p>شرح طريقة التسجيل في موسم الحج خطوة بخطوة</p>
                    </div>
                </div>
                <div className='register-btn'>
                    <button className='btn-cta'>سجل الآن<img src={leftIcon} /></button>

                </div>
            </div>
        </div>
    </div>
}

const HadjGuide = () => {
    return <div className='hadj-guide-section center-h'>
        <div className='container'>
            <div className='hadj-guide-heading'>
                <h3 className='main-heading'>دليل الحاج</h3>
            </div>
            <div className='hadj-guides'>
                <div className='hadj-guide'>
                    <span>أركان الحج</span>
                    <img className="main-img " src={g_01} />
                    <div className='hovered-icon'>
                        <img src={leftUpIcon} />
                    </div>
                </div>
                <div className='hadj-guide'>
                    <span>رحلة الحج</span>
                    <img className="main-img" src={g_03} />
                    <div className='hovered-icon'>
                        <img src={leftUpIcon} />
                    </div>

                </div>
                <div className='hadj-guide'>
                    <span>سنن ومستحبات الحج</span>
                    <img className="main-img" src={g_02} />
                    <div className='hovered-icon'>
                        <img src={leftUpIcon} />
                    </div>

                </div>

            </div>

            <button className='btn-inline'>الملف التفاعلي</button>

        </div>
    </div>
}
export default Home;
