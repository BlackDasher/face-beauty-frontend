import * as React from "react";
import {
    Dialog,
    DialogTrigger,
    DialogSurface,
    DialogTitle,
    DialogContent,
    DialogBody,
    DialogActions,
    Button,
    Divider,

    TableBody,
    TableCell,
    TableRow,
    Table,
    TableHeader,
    TableHeaderCell,
    TableCellLayout,
    PresenceBadgeStatus,
    Avatar,
    Image
} from "@fluentui/react-components";
import { UserContext } from "../pages/home";
import { useContext, useState, useEffect } from "react";

import 'react-circular-progressbar/dist/styles.css';

const ReportTableHeader = () => {
    return (
        <div style={{ display: "flex", width: "100%", textAlign: "center" }}>
            <div style={{ width: "10%" }}>Image</div>
            <div style={{ width: "10%" }}>Measurement Name</div>
            <div style={{ width: "5%" }}>Value</div>
            <div style={{ width: "5%" }}>Score</div>
            <div style={{ width: "5%" }}>Range</div>
            <div style={{ width: "35%" }}>Your Measurement's Meaning</div>
            <div style={{ width: "30%" }}>Improvement Advice (if applicable)</div>
        </div>
    );
};

const ReportTableRow = (props) => {
    const advice = props.advice; // Assuming props.advice contains the paragraphs

    const paragraphs = advice.split('\n');
    return (
        <div>
            <div style={{ display: "flex", width: "100%", alignItems: "center", marginTop: "5px", textAlign: "center" }}>
                <div style={{ width: "10%" }}><Image shape="circular" src={"./images/report/" + props.source + ".jpg"} width={70} style={{ border: "2px solid purple" }}></Image></div>
                <div style={{ width: "10%" }}>{props.measurement}</div>
                <div style={{ width: "5%" }}>
                    {typeof props.value === "number" && Number.isInteger(props.value)
                        ? props.value
                        : typeof props.value === "number"
                            ? props.value.toFixed(2)
                            : typeof props.value === "string"
                                ? props.value.charAt(0).toUpperCase() + props.value.slice(1)
                                : Array.isArray(props.value)
                                    ? props.value.map((item) => typeof item === "number" ? item.toFixed(2) : item).join(" : ")
                                    : ""}
                </div>
                <div style={{ width: "5%" }}>{props.score}</div>
                <div style={{ width: "5%" }}>
                    {Array.isArray(props.range) ? props.range.map((item, index) => (
                        <React.Fragment key={index}>
                            {item}
                            {index !== props.range.length - 1 && "-"}
                        </React.Fragment>
                    )) : props.range}
                </div>
                <div style={{ width: "25%", textAlign: "left", paddingLeft: "5px", height: "80px", overflowY: "auto" }}>{props.note}</div>
                <div style={{ width: "40%", textAlign: "left", paddingLeft: "5px", height: "80px", overflowY: "auto"}}>
                    {paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph.trim()}</p>
                    ))}
                </div>
            </div>
            <Divider></Divider>
        </div>
    );
};

export const ViewReportDialog = () => {

    const { gender } = useContext(UserContext);
    const { reportNotes, setReportNotes } = useContext(UserContext);
    const { reportScores, setReportScores } = useContext(UserContext);
    const { reportMaxScores, setReportMaxScores } = useContext(UserContext);
    const { reportRanges, setReportRanges } = useContext(UserContext);
    const { reportCurrentValues, setReportCurrentValues } = useContext(UserContext);
    const { reportMeasurementNames, setReportMeasurementNames } = useContext(UserContext);
    const { reportAdvices, setReportAdvices } = useContext(UserContext);

    useEffect(() => {
        console.log(reportNotes, reportScores, reportMaxScores);
    }, [reportNotes]);

    const reportTableRowList = reportNotes.map((note, index) => {
        console.log(note, reportMeasurementNames[index])
        return <ReportTableRow key={index} measurement={reportMeasurementNames[index]} value={reportCurrentValues[index]} score={reportScores[index]} range={reportRanges[index]} note={note} advice={reportAdvices[index]} source={index + 1} />
    });

    return (
        <Dialog modalType="alert">
            <DialogTrigger disableButtonEnhancement>
                <Button shape="square" style={{ width: "200px", margin: "5px" }}>View Report</Button>
            </DialogTrigger>
            <DialogSurface style={{ width: "90vw", maxWidth: "1920px", height: "90vh" }}>
                <DialogBody>
                    <DialogTitle>
                        <div style={{ display: "flex", alignContent: "center", justifyContent: "center", alignItems: "baseline" }}>
                            <h1>Harmony </h1>
                            <h4>&nbsp;by creatingattractive</h4>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
                            <div style={{ color: "purple", }}>68% Facial harmony</div>
                        </div>
                    </DialogTitle>
                    <DialogContent style={{}}>
                        <div>
                            <div style={{ display: "flex", flexDirection:"column" }}>
                                <div>{"Harmony report "}</div>
                                <div>&nbsp;{" male, caucasian"}</div>
                            </div>
                            <div>
                                Welcome to Harmony’s full facial analysis. Below you will find a list of over 45 facial assessments, what they indicate about your face, and any potential improvements associated with each measurement. We hope this information is insightful and helps you on your journey to looking your best!
                            </div>
                        </div>
                        <Divider style={{ padding: "20px" }}></Divider>
                        <ReportTableHeader />
                        <Divider></Divider>
                        <div className="custom-scroll" style={{ height: "500px" }}>{reportTableRowList}</div>
                    </DialogContent>
                    <DialogActions>
                        <DialogTrigger disableButtonEnhancement>
                            <Button shape="square" appearance="secondary">Close</Button>
                        </DialogTrigger>
                    </DialogActions>
                </DialogBody>
            </DialogSurface>
        </Dialog>
    );
};