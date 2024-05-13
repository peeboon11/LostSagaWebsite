import style from '../../styles/Information.module.css'
import character from '../../public/Furious.png'
import React from 'react';
import wallpaper from '../../public/237.png'
import Logo from '../../public/logow.png'



function Information() {
    return (
        <>
            <link href='https://fonts.googleapis.com/css?family=Aldrich' rel='stylesheet'></link>
            <div className={style.main}>
                <img src={wallpaper.src} alt="" className={style.wallpaper} />
                <div className={style.box}>
                    <div className={style.title}>
                        <div>ยินดีต้อนรับสู่ <br></br> LOST SAGA THAILAND</div>
                        <p className={style.text}>ยินดีต้อนรับสู่ Lost Saga Thailand ที่คืนชีพกลับมาอีกครั้งและขอขอบคุณที่เข้ามาสนับสนุน เพื่อเป็นสนับทีมงานและอื่นที่ทำให้ Server ไปต่อได้</p>
                        <div style={{marginTop:"1rem"}}>
                            <button className={style.defaultbtn}>
                                <div>
                                    JOIN DISCORD FOR NEWS
                                </div>
                            </button>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={Logo.src} alt="" className={style.logo} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Information