import style from '../../styles/Information.module.css'
import character from '../../public/Furious.png'
import React from 'react';
import wallpaper from '../../public/237.png'


function Information() {
    return (
        <>
            <div className={style.main}>
                <img src={wallpaper.src} alt="" className={style.wallpaper} />
            </div>
        </>
    )
}

export default Information