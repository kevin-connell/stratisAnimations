import React, { useEffect, useRef, useState } from 'react';
import iphone from './iphone-539x1024.png'
import "./Temperature.css"

const Temperature = () => {

    const [degree, setDegree] = useState(15);
    const [smooth, setSmooth] = useState(true);
    const [dialSeen, setDialSeen] = useState(false);
    const [dialWaiting, setDialWaiting] = useState(false);

    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setDialSeen(true);
                setTimeout(() => { setDialWaiting(true); }, 750);
                setDegree(75);
                observer.unobserve(domRef.current);
            };
        });
        observer.observe(domRef.current);
    }, []);

    const handleDegree = (data) => {
        console.log(data)
        if (data > 10 && data < 260) {
            setDegree(data);
        }
    }

    const handleDrag = (event) => {
        setSmooth(false)
        setDialWaiting(false)
        let center_x = event.target.parentNode.previousSibling.getBoundingClientRect().left + 135;
        let center_y = event.target.parentNode.previousSibling.getBoundingClientRect().top + 135;

        let changingMouse = (event) => {
            let radians = Math.atan2(event.clientX - center_x, event.clientY - center_y);
            let degrees = Math.round((radians * (180 / Math.PI) * -1) + 100);

            handleDegree(degrees > 145 ? degrees - 145 : degrees + 216)
        }

        let removeBoth = (event) => {
            document.removeEventListener('mousemove', changingMouse);
            document.removeEventListener('mouseup', removeBoth);

            setSmooth(true)
        }
        document.addEventListener('mousemove', changingMouse);
        document.addEventListener('mouseup', removeBoth);
    }

    let incrementTemp = (event) => {

        setDialWaiting(false)

        if (event.currentTarget.getAttribute("data-pos") == "true") {
            handleDegree(((Math.round(65 + degree / 30) + .5) - 65) * 30)
        } else {
            handleDegree(((Math.round(65 + degree / 30) - 1.5) - 65) * 30)
        }

    }

    return (
                <div className="tempContainer">
                    <img className="iphone" src={iphone} alt="iphone" />
                    <div className="thermaContainer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="270" height="270" viewBox="0 0 270 270">
                            <path style={{ fill: "none", stroke: "#68c9fc", strokeWidth: "34px", fillRule: "evenodd" }} d="M51.936,218.812a118,118,0,1,1,166.673-.544">
                            </path>
                        </svg>
                        <div className={dialWaiting ? "controlContainer idleBlink" : "controlContainer"} ref={domRef}>
                            <div onClick={incrementTemp} data-pos={false} className={dialSeen ? "controlBtn" : "controlBtn larger"}>
                                <div style={{ paddingBottom: "5px" }}>–</div>
                            </div>
                            <div onClick={incrementTemp} data-pos={true} className={dialSeen ? "controlBtn" : "controlBtn larger"}>
                                <div style={{ paddingBottom: "2px" }}>+</div>
                            </div>
                        </div>
                        <div className="degreeNumContainer">
                            <span className="degreeNum">{Math.round(65 + degree / 30)}</span>
                        </div>
                    </div>
                    <div className={smooth ? "sliderContainer smoothMove" : "sliderContainer"} style={{ transform: ('rotate(' + (degree + 45) + 'deg)') }}>
                        <figure onMouseDown={handleDrag} className="sliderDot" />
                    </div>
                </div>
    );
}

export default Temperature;