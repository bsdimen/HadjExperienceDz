import React from 'react';
import leftIcon from "../Asstes/Icons/arrow-left.svg"
import leftUpIcon from "../Asstes/Icons/left-small-up.svg"


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


    return <div className='regiteration-conditions center-h'>
        <div className='container'>
            <h3>شروط التسجيل</h3>
            <div className='conditions'>
                {conditions.map((c) => <div className='condition'><p>{c}</p></div>)}
                <div className='condition guide'>
                    <span>الدليل التفاعلي</span><div className='icon'><img src={leftUpIcon} /></div>
                </div>
            </div>

        </div>
    </div>
}
export default Home;
