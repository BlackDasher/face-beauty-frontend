import * as React from "react";
import { Switch, Radio, RadioGroup, Label } from "@fluentui/react-components";
import { Input, Badge, Button, Card } from "@fluentui/react-components";
import { Image, Divider, Tooltip, CompoundButton } from "@fluentui/react-components";
import { ArrowUploadFilled, Connected20Filled } from "@fluentui/react-icons";
import { useEffect, useState, useRef, createContext } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "./home.css";

import { FrontProfileMappingModal, SideProfileMappingModal } from "../components/MappingModal";
import { ScoreAlert } from "../components/MarkShowDialog";

export const UserContext = createContext();

const wrapperStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#6e2a65",
    color: "white",
};

function Home({ }) {
    const [selectedFrontImage, setSelectedFrontImage] = useState(null);
    const [selectedSideImage, setSelectedSideImage] = useState(null);
    const [lock, setLock] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const [gender, setGender] = useState(0);

    const [frontProfileMark, setFrontProfileMark] = useState(0.0);
    const [sideProfileMark, setSideProfileMark] = useState(0.0);

    /**************************FRONT PROFILE***************************************/
    const [eyeSeparationRatio, setEyeSeparationRatio] = useState(0.0);
    const [facialThirds, setFacialThirds] = useState([0.0, 0.0, 0.0]);
    const [lateralCanthalTilt, setLateralCanthalTilt] = useState(0.0);
    const [facialWHRatio, setFacialWHRatio] = useState(0.0);
    const [jawFrontalAngle, setJawFrontalAngle] = useState(0.0);
    const [cheekBoneHeight, setCheekBoneHeight] = useState(0.0);
    const [totalFacialWHRatio, setTotalFacialWHRatio] = useState(0.0);
    const [bigonialWidth, setBigonialWidth] = useState(0.0);
    const [chin2PhiltrumRatio, setChin2PhiltrumRatio] = useState(0.0);
    const [neckWidth, setNeckWidth] = useState(0.0);
    const [mouthWidth2NoseWidthRatio, setMouseWidth2NoseWidthRatio] = useState(0.0);
    const [midFaceRatio, setMidFaceRatio] = useState(0.0);
    const [eyebrowPositionRatio, setEyebrowPositionRatio] = useState(0.0);
    const [eyeSpacingRatio, setEyeSpacingRatio] = useState(0.0);
    const [eyeAspectRatio, setEyeAspectRatio] = useState(0.0);
    const [lowerLip2UpperLipRatio, setLowerLip2UpperLipRatio] = useState(0.0);
    const [ipsilateralAlarAngle, setIpsilateralAlarAngle] = useState(0.0);
    const [deviationOfJFA2IAA, setDeviationOfJFA2IAA] = useState(0.0);
    const [eyebrowTilt, setEyebrowTilt] = useState(0.0);
    const [bitemporalWidth, setBitemporalWidth] = useState(0.0);
    const [lowerThirdProporation, setLowerThirdProporation] = useState(0.0);
    const [medialCanthalAngle, setMedialCanthalAngle] = useState(0.0);

    /**************************SIDE PROFILE***************************************/
    const [gonialAngle, setGonialAngle] = useState(0.0);
    const [nasofrontalAngle, setNasofrontalAngle] = useState(0.0);
    const [mandibularPlaneAngle, setMandibularPlaneAngle] = useState(0.0);
    const [ramus2MandibleRatio, setRamus2MandibleRatio] = useState(0.0);
    const [facialConvexityGlabella, setFacialConvexityGlabella] = useState(0.0);
    const [submentalCervicalAngle, setSubmentalCervicalAngle] = useState(0.0);
    const [nasofacialAngle, setNasofacialAngle] = useState(0.0);
    const [nasolabialAngle, setNasolabialAngle] = useState(0.0);
    const [orbitalVector, setOrbitalVector] = useState("positive");
    const [totalFacialConvexity, setTotalFacialConvexity] = useState(0.0);
    const [mentolabialAngle, setMentolabialAngle] = useState(0.0);
    const [facialConvexityNasion, setFacialConvexityNasion] = useState(0.0);
    const [nasalProjection, setNasalProjection] = useState(0.0);
    const [nasalW2HRatio, setNasalW2HRatio] = useState(0.0);
    const [rickettsELine, setRickettsELine] = useState("ideal");
    const [holdawayHLine, setHoldawayHLine] = useState("ideal");
    const [steinerSLine, setSteiinerSLine] = useState("ideal");
    const [burstoneLine, setBurstoneLine] = useState("ideal");
    const [nasomentalAngle, setNasomentalAngle] = useState(0.0);
    const [gonion2MouthRelationship, setGonion2MouthRelationship] = useState("below");
    const [recessionRelative2FrankfortPlane, setRecessionRelative2FrankfortPlane] = useState("none");
    const [browridgeInclinationAngle, setBrowridgeInclinationAngle] = useState(0.0);
    const [nasalTipAngle, setNasalTipAngle] = useState(0.0);

    const [markPoints, setMarkPoints] = React.useState([
        [{ x: 0, y: 0 }, { x: 0, y: 0 }],
        [{ x: 375, y: 164 }, { x: 375, y: 164 }], //1
        [{ x: 253, y: 220 }, { x: 484, y: 223 }], //2
        [{ x: 272, y: 270 }, { x: 464, y: 272 }], //3
        [{ x: 272, y: 280 }, { x: 464, y: 282 }], //4
        [{ x: 368, y: 284 }, { x: 368, y: 284 }], //5
        [{ x: 368, y: 304 }, { x: 368, y: 304 }], //6
        [{ x: 335, y: 294 }, { x: 398, y: 294 }], //7
        [{ x: 335, y: 309 }, { x: 398, y: 309 }], //8
        [{ x: 270, y: 324 }, { x: 471, y: 325 }], //9
        [{ x: 293, y: 316 }, { x: 446, y: 318 }], //10
        [{ x: 275, y: 329 }, { x: 466, y: 330 }], //11
        [{ x: 303, y: 326 }, { x: 436, y: 327 }], //12
        [{ x: 325, y: 326 }, { x: 415, y: 327 }], //13
        [{ x: 293, y: 339 }, { x: 446, y: 340 }], //14
        [{ x: 313, y: 339 }, { x: 426, y: 340 }], //15
        [{ x: 333, y: 339 }, { x: 406, y: 340 }], //16
        [{ x: 225, y: 349 }, { x: 530, y: 351 }], //17
        [{ x: 333, y: 419 }, { x: 406, y: 422 }], //18
        [{ x: 370, y: 450 }, { x: 370, y: 450 }], //19
        [{ x: 380, y: 440 }, { x: 380, y: 440 }], //20
        [{ x: 380, y: 470 }, { x: 380, y: 470 }], //21
        [{ x: 252, y: 472 }, { x: 505, y: 475 }], //22
        [{ x: 318, y: 482 }, { x: 430, y: 482 }], //23
        [{ x: 371, y: 484 }, { x: 371, y: 484 }], //24
        [{ x: 371, y: 504 }, { x: 371, y: 504 }], //25
        [{ x: 270, y: 494 }, { x: 495, y: 494 }], //26
        [{ x: 275, y: 514 }, { x: 493, y: 524 }], //27
        [{ x: 328, y: 557 }, { x: 420, y: 557 }], //28
        [{ x: 370, y: 565 }, { x: 370, y: 565 }], //29
        [{ x: 244, y: 190 }], //30
        [{ x: 225, y: 226 }], //31
        [{ x: 215, y: 292 }], //32
        [{ x: 235, y: 327 }], //33
        [{ x: 225, y: 332 }], //34
        [{ x: 218, y: 334 }], //35
        [{ x: 190, y: 375 }], //36
        [{ x: 260, y: 375 }], //37
        [{ x: 400, y: 375 }], //38
        [{ x: 170, y: 400 }], //39
        [{ x: 168, y: 405 }], //40
        [{ x: 175, y: 422 }], //41
        [{ x: 225, y: 417 }], //42
        [{ x: 195, y: 435 }], //43
        [{ x: 200, y: 440 }], //44
        [{ x: 200, y: 460 }], //45
        [{ x: 237, y: 472 }], //46
        [{ x: 210, y: 484 }], //47
        [{ x: 220, y: 500 }], //48
        [{ x: 385, y: 484 }], //49
        [{ x: 220, y: 530 }], //50
        [{ x: 240, y: 552 }], //51
        [{ x: 258, y: 554 }], //52
        [{ x: 320, y: 560 }], //53
        [{ x: 220, y: 570 }], //54
        [{ x: 352, y: 655 }], //55
        [{ x: 168, y: 327 }], //56
        [{ x: 235, y: 352 }], //57
        [{ x: 210, y: 494 }], //58
    ]);

    const handleGenderChange = React.useCallback(
        (ev) => {
            if(ev.currentTarget.checked === true){
                setGender(1);
            }
            else{
                setGender(0);
            }
        },
        [setGender]
    );

    const unavailableAreaInHandle = () => {
        setLock(true);
    };
    const unavailableAreaOutHandle = () => {
        setLock(false);
    };
    const showDiv = () => {
        setIsVisible(true);
    };

    const hideDiv = () => {
        setIsVisible(false);
    };

    const lockStyle = {
        display: "none",
    };

    const visibleDivStyle = {
        display: isVisible ? "block" : "none",
    };

    const frontfileInput = useRef(null);
    const sidefileInput = useRef(null);
    const handleFrontImageSelect = (event) => {
        setSelectedFrontImage(event.target.files[0]);
        console.log(selectedFrontImage);
    };

    const handleSideImageSelect = (event) => {
        setSelectedSideImage(event.target.files[0]);
        console.log(selectedFrontImage);
    };

    const handleFrontUploadButtonClick = () => {
        frontfileInput.current.click();
    };

    const handleSideUploadButtonClick = () => {
        sidefileInput.current.click();
    };

    function startMarquee1() {
        const marqueeContent = document.querySelectorAll('.marquee-content')[0];
        marqueeContent.classList.add('marquee');
    }

    function stopMarquee1() {
        const marqueeContent = document.querySelectorAll('.marquee-content')[0];
        marqueeContent.classList.remove('marquee');
    }

    function startMarquee2() {
        const marqueeContent = document.querySelectorAll('.marquee-content')[1];
        marqueeContent.classList.add('marquee');
    }

    function stopMarquee2() {
        const marqueeContent = document.querySelectorAll('.marquee-content')[1];
        marqueeContent.classList.remove('marquee');
    }

    return (
        <UserContext.Provider value={{
            eyeSeparationRatio, facialThirds, lateralCanthalTilt, facialWHRatio, jawFrontalAngle, cheekBoneHeight,
            totalFacialWHRatio, bigonialWidth, chin2PhiltrumRatio, neckWidth, mouthWidth2NoseWidthRatio, midFaceRatio,
            eyebrowPositionRatio, eyeSpacingRatio, eyeAspectRatio, lowerLip2UpperLipRatio, ipsilateralAlarAngle, deviationOfJFA2IAA,
            eyebrowTilt, bitemporalWidth, lowerThirdProporation, medialCanthalAngle, setEyeSeparationRatio, setFacialThirds,
            setLateralCanthalTilt, setFacialWHRatio, setJawFrontalAngle, setCheekBoneHeight, setTotalFacialWHRatio,
            setBigonialWidth, setChin2PhiltrumRatio, setNeckWidth, setMouseWidth2NoseWidthRatio, setMidFaceRatio,
            setEyebrowPositionRatio, setEyeSpacingRatio, setEyeAspectRatio, setLowerLip2UpperLipRatio, setIpsilateralAlarAngle,
            setDeviationOfJFA2IAA, setEyebrowTilt, setBitemporalWidth, setLowerThirdProporation, setMedialCanthalAngle,

            gonialAngle, nasofrontalAngle, mandibularPlaneAngle, ramus2MandibleRatio, facialConvexityGlabella, submentalCervicalAngle,
            nasofacialAngle, nasolabialAngle, orbitalVector, totalFacialConvexity, mentolabialAngle, facialConvexityNasion, nasalProjection,
            nasalW2HRatio, rickettsELine, holdawayHLine, steinerSLine, burstoneLine, nasomentalAngle, gonion2MouthRelationship,
            recessionRelative2FrankfortPlane, browridgeInclinationAngle, nasalTipAngle, setGonialAngle, setNasofrontalAngle,
            setMandibularPlaneAngle, setRamus2MandibleRatio, setFacialConvexityGlabella, setSubmentalCervicalAngle,
            setNasofacialAngle, setNasolabialAngle, setOrbitalVector, setTotalFacialConvexity, setMentolabialAngle,
            setFacialConvexityNasion, setNasalProjection, setNasalW2HRatio, setRickettsELine, setHoldawayHLine, setSteiinerSLine,
            setBurstoneLine, setNasomentalAngle, setGonion2MouthRelationship, setRecessionRelative2FrankfortPlane, setBrowridgeInclinationAngle,
            setNasalTipAngle,
            markPoints, setMarkPoints, selectedFrontImage, selectedSideImage, frontProfileMark, setFrontProfileMark, sideProfileMark, setSideProfileMark, gender
        }}>
            <div style={wrapperStyle}>
                <Image src="images/left.jpg" height={100}></Image>
                <Image src="images/middle.jpg" height={100}></Image>
                <Image src="images/right.jpg" height={100}></Image>
            </div>
            <div className="main_parent" style={{ display: "flex", position: "relative", justifyContent: "space-evenly" }}>
                <div className="main_child m_setting" style={{ width: "15%", top: "0%", left: "0%", color: "purple", backgroundColor: "white", minWidth: "260px", zIndex: "100" }}>
                    <div style={{ height: "30px", backgroundColor: "#4e224a", color: "#d8b5d5", fontSize: "16px", display: "flex", alignItems: "center", paddingLeft: "10px" }}>Setting</div>
                    <div className="custom-scroll" style={{ padding: "7px", color: "purple" }}>
                        <Divider style={{ padding: "8px", color: "purple" }}>Gender</Divider>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            Female
                            <Switch onChange={handleGenderChange}></Switch>
                            Male
                        </div>
                        <Divider style={{ padding: "8px", color: "purple" }}>Ethnicities / Racial</Divider>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <RadioGroup style={{ display: "contents" }}>
                                <Radio value="Caucasian" label="Caucasian" />
                                <Radio value="African" label="African" />
                                <Radio value="East Asian" label="East Asian" />
                                <Radio value="South Asian" label="South Asian" />
                                <Radio value="Indigenous" label="Indigenous" />
                                <Radio value="Mixed" label="Mixed" />
                                <Radio value="Hispanic" label="Hispanic" />
                                <Radio value="Middle eastern" label="Middle eastern" />
                                <Radio value="other" label="Other" />
                            </RadioGroup>
                        </div>
                        <Divider style={{ padding: "8px", color: "purple" }}>Mode</Divider>
                        <div>
                            <RadioGroup>
                                {/* <Radio value="manual" label="Input your own measurements." /> */}
                                <Radio value="map" label="Manually map facial landmarks." />
                                <Radio value="auto" label="Auto-map and analyze with AI." />
                            </RadioGroup>
                        </div>
                        <Divider style={{ padding: "8px", color: "purple" }}>Calculate</Divider>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <ScoreAlert title="Total"></ScoreAlert>
                            <ScoreAlert title="Front"></ScoreAlert>
                            <ScoreAlert title="Side"></ScoreAlert>
                        </div>
                        <Divider style={{ padding: "8px", color: "purple" }}>Report</Divider>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Button shape="square" style={{ width: "200px", margin: "5px" }} >View Report</Button>
                        </div>
                    </div>
                </div>
                <div className="main_child m_profile" style={{ backgroundColor: "#ebd9e9", justifyContent: "space-between", display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", width: "100%" }}>
                        <div className="front_profile">
                            {/* <div style={{ border: "solid 1px purple", width: "300px" }}>
                                <div style={{ height: "30px", backgroundColor: "#7e3777", color: "#d8b5d5", fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    Front Profile
                                </div>
                                <div className="custom-scroll" style={{ padding: "7px", color: "purple" }}>
                                    <div className="measurement-div">
                                        <i class="fa-solid fa-percent"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Eye Separation Ratio :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;%
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-percent"></i>
                                        <div className="measurement-name" style={{ width: "130px" }}>&nbsp;&nbsp;Facial Thirds :&nbsp;</div>
                                        <input type="text" class="badge-input" />&nbsp;
                                        <input type="text" class="badge-input" />&nbsp;
                                        <input type="text" class="badge-input" />
                                        &nbsp;%
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-percent"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Cheekbone height:&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;%
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-percent"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Bigonial width :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;%
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-percent"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Neck width :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;%
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-percent"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Bitemporal width :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;%
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-percent"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Lower third proporation :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;%
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-rotate-right"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Deviation of IAA & JFA :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;&deg;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-rotate-right"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Eyebrow tilt :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;&deg;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-rotate-right"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Ipsilateral alar angle :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;&deg;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-rotate-right"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Medial canthal angle :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;&deg;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-rotate-right"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Lateral Canthal Tilt :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;&deg;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-rotate-right"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Jaw frontal angle :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;&deg;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-compass-drafting"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Facial W-H ratio :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-compass-drafting"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Total facial W-H ratio :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-compass-drafting"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Chin to Philtrum ratio :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-compass-drafting"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;MouthW - NoseW ratio :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-compass-drafting"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Midface ratio :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-compass-drafting"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Eyebrow position ratio :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-compass-drafting"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Eye spacing ratio :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-compass-drafting"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Eye aspect ratio :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-compass-drafting"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;LowerLip - UpperLip ratio :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;
                                    </div>


                                </div>
                                <Button shape="square" appearance="secondary" style={{ color: "purple", width: "100%" }}>Start Calculate</Button>
                            </div> */}
                            <div className="front_photo_area">
                                <div className="photo_div example">
                                    <Image width={365} height={365} style={{ margin: "5px" }} src="./images/front.jpg"></Image>
                                </div>
                                <div className="photo_div upload">
                                    <input type="file" ref={frontfileInput} accept="image/*" onChange={handleFrontImageSelect} style={{ display: 'none' }} />
                                    <CompoundButton icon={<ArrowUploadFilled />} style={{
                                        position: "absolute",
                                        top: "1%",
                                        right: "1%",
                                        color: "purple",
                                    }} onClick={handleFrontUploadButtonClick}>
                                    </CompoundButton>
                                    <div className={`lock-div ${lock ? 'show' : 'show'}`} style={{ top: "1%", left: "1%", color: "purple", height: "50px", width: "50px", border: "dashed 2px purple" }}>
                                        <div style={{ borderRadius: "0px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <FrontProfileMappingModal />
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#6d546a" }}>
                                        {selectedFrontImage && (<Image height={365} style={{ margin: "5px" }} src={URL.createObjectURL(selectedFrontImage)}></Image>)}
                                        {!selectedFrontImage && (<Image width={365} height={365} style={{ margin: "5px" }} src={"./images/front_blank.jpg"}></Image>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="side_profile" onMouseOver={unavailableAreaInHandle} onMouseOut={unavailableAreaOutHandle}>
                            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
                                <div style={{ position: "relative", width: "375px", height: "375px", margin: "5px", border: "solid 1px purple" }}>
                                    <Image width={365} height={365} style={{ margin: "5px" }} src="./images/side.jpg"></Image>
                                </div>
                                <div style={{ position: "relative", width: "375px", height: "375px", margin: "5px", border: "solid 1px purple" }}>
                                    <input type="file" ref={sidefileInput} accept="image/*" onChange={handleSideImageSelect} style={{ display: 'none' }} />
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#6d546a" }}>
                                        {selectedSideImage && (<Image height={365} style={{ margin: "5px" }} src={URL.createObjectURL(selectedSideImage)}></Image>)}
                                        {!selectedSideImage && (<Image width={365} height={365} style={{ margin: "5px" }} src={"./images/side_blank.jpg"}></Image>)}
                                    </div>
                                    <CompoundButton icon={<ArrowUploadFilled />} style={{
                                        position: "absolute",
                                        top: "1%",
                                        right: "1%",
                                        color: "purple",
                                    }} onClick={handleSideUploadButtonClick}>
                                    </CompoundButton>
                                    <div className={`lock-div ${lock ? 'show' : 'show'}`} style={{ top: "1%", left: "1%", color: "purple", height: "50px", width: "50px", border: "dashed 2px purple" }}>
                                        <div style={{ borderRadius: "0px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <SideProfileMappingModal />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div style={{ border: "solid 1px purple", width: "300px" }}>
                                <div style={{ height: "30px", backgroundColor: "#7e3777", color: "#d8b5d5", fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>Side Profile</div>
                                <div className="custom-scroll" style={{ padding: "7px", color: "purple" }}>
                                    <div className="measurement-div">
                                        <i class="fa-solid fa-rotate-right"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Gonial angle :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;&deg;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-rotate-right"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Nasofrontal angle :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;&deg;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-rotate-right"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Mandibular plane angle :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;&deg;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-rotate-right"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Facial convexity ( glabella ) :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;&deg;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-rotate-right"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Submental cervical angle :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;&deg;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-rotate-right"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Nasofacial angle :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;&deg;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-rotate-right"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Nasolabial angle :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;&deg;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-rotate-right"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Total facial convexity :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;&deg;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-rotate-right"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Mentolabial angle :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;&deg;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-rotate-right"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Facial convexity ( nasion ) :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;&deg;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-rotate-right"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Nasomental angle :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;&deg;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-rotate-right"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Browridge inclination angle :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;&deg;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-rotate-right"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Nasal tip angle :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;&deg;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-compass-drafting"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Ramus to Mandible ratio :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-compass-drafting"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Nasal projection :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-compass-drafting"></i>
                                        <div className="measurement-name">&nbsp;&nbsp;Nasal W-H ratio :&nbsp;</div>
                                        <input type="text" class="badge-input" />
                                        &nbsp;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-bezier-curve"></i>
                                        <div className="measurement-name" style={{ width: "150px" }}>&nbsp;&nbsp;Orbital vector :&nbsp;</div>
                                        <div class="badge-dropdown">
                                            <select>
                                                <option value="option1">Positive</option>
                                                <option value="option2">Slightly Positive</option>
                                                <option value="option3">Neutral</option>
                                                <option value="option4">Slightly Negative</option>
                                                <option value="option5">Negative</option>
                                            </select>
                                        </div>
                                        &nbsp;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-bezier-curve"></i>
                                        <div className="measurement-name" style={{ width: "150px" }}>&nbsp;&nbsp;Ricketts' E line :&nbsp;</div>
                                        <div class="badge-dropdown">
                                            <select>
                                                <option value="option1">Ideal</option>
                                                <option value="option2">Near ideal</option>
                                                <option value="option3">Unideal</option>
                                            </select>
                                        </div>
                                        &nbsp;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-bezier-curve"></i>
                                        <div className="measurement-name" style={{ width: "150px" }}>&nbsp;&nbsp;Holdaway H line :&nbsp;</div>
                                        <div class="badge-dropdown">
                                            <select>
                                                <option value="option1">Ideal</option>
                                                <option value="option2">Near ideal</option>
                                                <option value="option3">Unideal</option>
                                            </select>
                                        </div>
                                        &nbsp;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-bezier-curve"></i>
                                        <div className="measurement-name" style={{ width: "150px" }}>&nbsp;&nbsp;Steiner S line :&nbsp;</div>
                                        <div class="badge-dropdown">
                                            <select>
                                                <option value="option1">Ideal</option>
                                                <option value="option2">Near ideal</option>
                                                <option value="option3">Unideal</option>
                                            </select>
                                        </div>
                                        &nbsp;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-bezier-curve"></i>
                                        <div className="measurement-name" style={{ width: "150px" }}>&nbsp;&nbsp;Burstone line :&nbsp;</div>
                                        <div class="badge-dropdown">
                                            <select>
                                                <option value="option1">Ideal</option>
                                                <option value="option2">Near ideal</option>
                                                <option value="option3">Unideal</option>
                                            </select>
                                        </div>
                                        &nbsp;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-bezier-curve"></i>
                                        &nbsp;&nbsp;
                                        <div class="marquee-container" onMouseOver={startMarquee1} onMouseOut={stopMarquee1}>
                                            <div class="marquee-content">
                                                Gonion to mouth relationship
                                            </div>
                                        </div>
                                        &nbsp;:&nbsp;
                                        <div class="badge-dropdown" style={{ width: "100px" }}>
                                            <select>
                                                <option value="option1">Below</option>
                                                <option value="option2">In line</option>
                                                <option value="option3">Above</option>
                                                <option value="option4">Notably above</option>
                                            </select>
                                        </div>
                                        &nbsp;
                                    </div>

                                    <div className="measurement-div">
                                        <i class="fa-solid fa-bezier-curve"></i>
                                        &nbsp;&nbsp;
                                        <div class="marquee-container" onMouseOver={startMarquee2} onMouseOut={stopMarquee2}>
                                            <div class="marquee-content">
                                                Recession relative to frankfort plane
                                            </div>
                                        </div>
                                        &nbsp;:&nbsp;
                                        <div class="badge-dropdown" style={{ width: "100px" }}>
                                            <select>
                                                <option value="option1">None</option>
                                                <option value="option2">Slight</option>
                                                <option value="option3">Moderate</option>
                                                <option value="option4">Extreme</option>
                                            </select>
                                        </div>
                                        &nbsp;
                                    </div>
                                </div>
                                <Button shape="square" appearance="secondary" style={{ color: "purple", width: "100%" }}>Start Calculate</Button>
                            </div> */}
                            {/* {lock && (<div className="lock-div" style={{ position: "absolute", top: "0%", right: "0%", color: "purple", height: "100%" }}>
                                <div style={{ margin: "10px", border: "dashed 2px purple", height: "630px", borderRadius: "0px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Image src="./images/lock.png"></Image>
                                </div>
                            </div>
                            )} */}
                            {/* <div className={`lock-div ${lock ? 'show' : ''}`} style={{ top: "0%", right: "0%", color: "purple", height: "100%" }}>
                                <div style={{ margin: "10px", border: "dashed 2px purple", height: "630px", borderRadius: "0px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Image src="./images/lock.png"></Image>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="main_child m_reference" style={{ width: "15%", top: "0%", right: "0%", color: "purple", backgroundColor: "white", minWidth: "260px", zIndex: "100" }}>
                    <div style={{ height: "30px", backgroundColor: "#b16aaa", color: "#4f234b", fontSize: "16px", display: "flex", alignItems: "center", paddingLeft: "10px", justifyContent: "space-between", paddingRight: "10px" }}>
                        Reference
                    </div>
                    <div className="custom-scroll" style={{ padding: "7px", color: "purple" }}>
                        <Tooltip relationship="label" content="Follow the photo instructions carefully as it will impact the accuracy of your score.">
                            <Divider style={{ padding: "8px", color: "purple" }}>Photo Requirements</Divider>
                        </Tooltip>
                        <div style={{ paddingLeft: "10px" }}>
                            <Label size="small" style={{ color: "purple" }}>Follow the photo instructions carefully.</Label>
                            <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                <div>
                                    <i className="fa-solid fa-check" style={{ color: "purple", paddingRight: "10px" }}> </i>
                                    <Label size="small" style={{ color: "purple" }}>Generally no selfies to ensure maximal accuracy. </Label>
                                </div>
                                <div>
                                    <i className="fa-solid fa-check" style={{ color: "purple", paddingRight: "10px" }}> </i>
                                    <Label size="small" style={{ color: "purple" }}>Lens distortion will warp your facial features if the camera lens is too close.</Label>
                                </div>
                                <div>
                                    <i className="fa-solid fa-check" style={{ color: "purple", paddingRight: "10px" }}> </i>
                                    <Label size="small" style={{ color: "purple" }}>Hair should not be covering the forehead or sides of the face.</Label>
                                </div>
                                <div>
                                    <i className="fa-solid fa-check" style={{ color: "purple", paddingRight: "10px" }}> </i>
                                    <Label size="small" style={{ color: "purple" }}>Photo should be well lit and good quality for AI to detect landmarks accurately.</Label>
                                </div>
                                <div>
                                    <i className="fa-solid fa-check" style={{ color: "purple", paddingRight: "10px" }}> </i>
                                    <Label size="small" style={{ color: "purple" }}>Face should be turned completely to the front and side for each respective photo.</Label>
                                </div>
                                <div>
                                    <i className="fa-solid fa-check" style={{ color: "purple", paddingRight: "10px" }}> </i>
                                    <Label size="small" style={{ color: "purple" }}>Face should have a neutral expression (no smiling or excessive grinning).</Label>
                                </div>
                            </div>
                        </div>
                        <Divider style={{ padding: "8px", color: "purple" }}><i className="fa-solid fa-circle-exclamation fa-lg" style={{ color: "purple" }} /></Divider>
                        <div style={{ paddingLeft: "10px" }}>
                            <Label size="medium" style={{ color: "purple" }}>
                                <i class="fa-regular fa-clipboard" style={{ color: "purple", paddingRight: "10px" }} />
                                Note:
                            </Label>
                            <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                <div>
                                    <Label size="small" style={{ color: "purple" }}>
                                        Harmony only assesses your facial proportions, angles, and the relative positioning of features.
                                        &nbsp;&nbsp;It does not factor in features like hair color, skin color, eye color, skin health, and eye contrast, which can all play a role in facial attractiveness. <br />
                                        <br /> You can adjust your score accordingly based on those other factors.
                                        &nbsp;&nbsp;For example, if you have severe acne, your overall beauty score may be lower than your harmony score.
                                        &nbsp;&nbsp;Though, for the most part your harmony score should represent the majority of criteria that factor into beauty.
                                        &nbsp;&nbsp;Think of facial harmony as the foundation of beauty and the rest of your features sit on that foundation.
                                    </Label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UserContext.Provider>
    );
}

export default Home;