import './App.css';
import { useState } from 'react';

function TitleBox() {
    return (
        <div id="title" className="box title-box"><h1>Aircraft Locations</h1></div>
    );
}

function RampBox() {
    const rampBoxItems = [];
    for (let i = 0; i < 18; i++) {
        rampBoxItems.push(
            <RampBoxItem n={i} />
        );
    }
    return (
        <div id="ramp" className="box">
            <div className="box title-box" style={{"fontSize": 1.5+"em"}}>Ramp</div>
            <table className="table-list" border="1" frame="void" rules="rows">
                <tbody>
                    {rampBoxItems}
                </tbody>
            </table>
        </div>
    );
}

function RampBoxItem({ n }) {
    let lowerCharStr = "ramp-" + String.fromCharCode(97 + n);
    let upperChar = String.fromCharCode(65 + n);
    return (
        <tr id={lowerCharStr} className="glowable">
            <td>{upperChar}</td>
            <td className="move-here"></td>
        </tr>
    );
}

function DirectionBox() {
    return (
        <div id="direction" className="box">
            <table className="center-table" border="1" frame="void">
                <tbody>
                    <tr>
                        <td id="xc-1" className="glowable" width="75px" height="148px">XC<div className="move-here many vert"></div></td>
                        <td>
                            <table className="center-table" border="1" frame="void">
                                <tbody>
                                    <tr>
                                        <td id="kmcx" className="glowable" colSpan="2" height="70px">KMCX<div className="move-here many"></div></td>
                                    </tr>
                                    <tr>
                                        <td id="northwest" className="glowable" height="70px">Northwest<div className="move-here many"></div></td>
                                        <td id="northeast" className="glowable" height="70px">Northeast<div className="move-here many"></div></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td id="xc-2" className="glowable" width="75px" height="148px">XC<div className="move-here many vert"></div></td>
                    </tr>
                    <tr>
                        <td id="xc-3" className="glowable" width="75px" height="148px">XC<div className="move-here many vert"></div></td>
                        <td>
                            <table className="center-table" border="1" frame="void">
                                <tbody>
                                    <tr>
                                        <td id="southwest" className="glowable" height="70px">Southwest<div className="move-here many"></div></td>
                                        <td id="southeast" className="glowable" height="70px">Southeast<div className="move-here many"></div></td>
                                    </tr>
                                    <tr>
                                        <td id="kcfj" className="glowable" height="70px">KCFJ<div className="move-here many"></div></td>
                                        <td id="kfkr" className="glowable" height="70px">KFKR<div className="move-here many"></div></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td id="xc-4" className="glowable" width="75px" height="148px">XC<div className="move-here many vert"></div></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

function HangarsBox() {
    return (
        <div id="hangars" className="box">
            <table className="center-table" border="1" frame="void">
                <tbody>
                    <tr>
                        <td colSpan="3" className="hangar-header">Hangar 5</td>
                        <td colSpan="3" className="hangar-header">Hangar 6W</td>
                        <td colSpan="3" className="hangar-header">Hangar 6</td>
                    </tr>
                    <tr>
                        <td id="h5-1" className="glowable" width="75px" height="68px"><div className="move-here"></div></td>
                        <td id="h5-2" className="glowable" width="75px" height="68px"><div className="move-here"></div></td>
                        <td id="h5-3" className="glowable" width="75px" height="68px"><div className="move-here"></div></td>
                        <td id="h6w-1" className="glowable" width="75px" height="68px"><div className="move-here"></div></td>
                        <td>
                            <table className="center-table" border="1" frame="void">
                                <tbody>
                                    <tr>
                                        <td id="h6w-7" className="glowable" width="75px" height="34px"><div className="move-here"></div></td>
                                    </tr>
                                    <tr>
                                        <td id="h6w-8" className="glowable" width="75px" height="34px"><div className="move-here"></div></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td id="h6w-4" className="glowable"><div className="move-here"></div></td>
                        <td id="h6-1" className="glowable" width="75px" height="68px"><div className="move-here"></div></td>
                        <td id="h6-2" className="glowable" width="75px" height="68px"><div className="move-here"></div></td>
                        <td id="h6-3" className="glowable" width="75px" height="68px"><div className="move-here"></div></td>
                    </tr>
                    <tr>
                        <td  id="h5-4" className="glowable" width="75px" height="68px"><div className="move-here"></div></td>
                        <td  id="h5-5" className="glowable" width="75px" height="68px"><div className="move-here"></div></td>
                        <td  id="h5-6" className="glowable" width="75px" height="68px"><div className="move-here"></div></td>
                        <td  id="h6w-2" className="glowable"><div className="move-here"></div></td>
                        <td>
                            <table className="center-table" border="1" frame="void">
                                <tbody>
                                    <tr>
                                        <td id="h6w-9" className="glowable" width="75px" height="34px"><div className="move-here"></div></td>
                                    </tr>
                                    <tr>
                                        <td id="h6w-10" className="glowable" width="75px" height="34px"><div className="move-here"></div></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td id="h6w-5" className="glowable" width="75px" height="68px"><div className="move-here"></div></td>
                        <td className="empty"></td>
                        <td id="h6-4" className="glowable" width="75px" height="68px"><div className="move-here"></div></td>
                        <td className="empty"></td>
                    </tr>
                    <tr>
                        <td className="empty"></td>
                        <td id="h5-7" className="glowable" width="75px" height="68px"><div className="move-here"></div></td>
                        <td className="empty"></td>
                        <td id="h6w-3" className="glowable" width="75px" height="68px"><div className="move-here"></div></td>
                        <td>
                            <table className="center-table" border="1" frame="void">
                                <tbody>
                                    <tr>
                                        <td id="h6w-11" className="glowable" width="75px" height="34px"><div className="move-here"></div></td>
                                    </tr>
                                    <tr>
                                        <td id="h6w-12" className="glowable" width="75px" height="34px"><div className="move-here"></div></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td id="h6w-6" className="glowable" width="75px" height="68px"><div className="move-here"></div></td>
                        <td className="empty"></td>
                        <td className="empty"></td>
                        <td className="empty"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

function OtherBox() {
    return (
        <div id="other" className="box">
            <table id="other-table-list" className="table-list" border="1" frame="void" rules="rows">
                <tbody>
                    <tr id="approaches" className="glowable"><td>Approaches</td><td className="move-here many"></td></tr>
                    <tr id="landings" className="glowable"><td>Landings</td><td className="move-here many"></td></tr>
                    <tr id="purdue-aviation" className="glowable"><td>Purdue Aviation</td><td className="move-here many"></td></tr>
                </tbody>
            </table>
        </div>
    );
}

function TDoorBox() {
    const tDoorBoxItems = [];
    for (let i = 1; i <= 10; i++) {
        tDoorBoxItems.push(
            <TDoorBoxItem n={i} />
        );
    }
    return (
        <div id="t-doors" className="box">
            <div className="box title-box" style={{"fontSize": 1.5+"em"}}>T Doors</div>
            <table className="table-list" border="1" frame="void" rules="rows">
                <tbody>
                    {tDoorBoxItems} 
                </tbody>
            </table>
        </div>
    );
}

function TDoorBoxItem({ n }) {
    let tString = "t-" + n;
    return (
        <tr id={tString} className="glowable">
            <td>{n}</td>
            <td className="move-here"></td>
        </tr>
    );
}

function PlaneBox() {

    let planes = require("./planes.json");
    const planeElements = [];
    planes.forEach((plane) => {
        planeElements.push(
            <Plane plane={plane} onPlaneClick={() => toggleMoveMode(plane.tailNumber)} />
        );
    });

    const [moveMode, setMoveMode] = useState(false);

    function toggleMoveMode(name, thisMoveMode = moveMode) {
        let plane = document.getElementById(name);
        if (thisMoveMode) {
            plane.classList.remove("glow");
            let spots = document.querySelectorAll("[class='glowable glow']")
            for (let spot of spots) {
                spot.classList.remove("glow");
                spot.onclick = null;
            }
        } else {
            plane.classList.add("glow");
            let spots = document.querySelectorAll("[class='glowable']")
            for (const spot of spots) {
                let moveHere = spot.querySelector(".move-here");
                if (moveHere.innerHTML === "" || moveHere.classList.contains("many")) {
                    spot.classList.add("glow");
                    spot.onclick = function () {
                        let fragment = document.createDocumentFragment();
                        fragment.appendChild(plane);
                        moveHere.appendChild(fragment);
                        toggleMoveMode(name, true);
                    };
                }
            }
        }
        setMoveMode(!thisMoveMode);
    }

    return (
        <div>
            {planeElements}
        </div>
    );
}

function Plane({ plane, onPlaneClick }) {

    let planeClass = "plane " + plane.type;

    return (
        <span id={plane.tailNumber} className={planeClass} onClick={onPlaneClick}>
            {plane.tailNumber}
        </span>
    );

}

export default function App() {
    return (
        <div>
            <div id="frame">
                <TitleBox /> 
                <RampBox />
                <DirectionBox />
                <HangarsBox />
                <OtherBox />
                <TDoorBox />
            </div>
            <div id="note">
                Made with love by Johnny Burrer :)
                Reach out on GroupMe with any feedback/bug reports!
            </div>
            <PlaneBox /> 
        </div>
    );

}
