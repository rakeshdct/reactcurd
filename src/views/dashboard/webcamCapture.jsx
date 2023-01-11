import React from "react";
import Webcam from "react-webcam";

const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);

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
            <div className="text-center">
                <div className="btn btn-primary btn-sm mr-2" onClick={capture}>Capture photo</div>
                <div className="btn btn-primary btn-sm" onClick={() => setImgSrc(null)}>Retake photo</div>
            </div>
        </>
    );
};

export default WebcamCapture