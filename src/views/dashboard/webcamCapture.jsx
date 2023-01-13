import React, { useEffect } from 'react'
import Webcam from "react-webcam";
import { useSelector } from 'react-redux';
import { approvalDataSelector } from "./approvalTable-dux";

const WebcamCapture = (props) => {
    const { editCurrentProfile } = useSelector(approvalDataSelector);
    const webcamRef = React.useRef(props.image);
    const [imgSrc, setImgSrc] = React.useState(props.image);
    useEffect(() => {
        setImgSrc(props.image)
    }, [props.image]);

    const capture = React.useCallback((e) => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
        if (imgSrc !== null) {
            const fileInput = document.getElementById('myFile');
            fileInput.dataTransfer.files = imgSrc;
        }

    }, [webcamRef, setImgSrc, imgSrc]);
    return (
        <>
            <div className={imgSrc === null ? 'photoWrap mb-4' : 'hide photoWrap mb-4'} >
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                />
                {imgSrc && (
                    <img
                        src={imgSrc} alt=""
                    />
                )}
                {imgSrc != null &&
                    <input type="hidden" id="photo" value={imgSrc} />}

            </div>
            {
                editCurrentProfile === "" && <div className="text-center">
                    <div className="btn btn-primary btn-sm mr-2" onClick={capture}>Capture photo</div>
                    <div className="btn btn-primary btn-sm" onClick={() => setImgSrc(null)}>Retake photo</div>
                </div>
            }

        </>
    );
};

export default WebcamCapture