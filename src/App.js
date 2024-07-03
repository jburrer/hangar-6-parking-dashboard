import './App.css';
import { useState } from 'react';

function titleCase(str) {
    return str.toLowerCase().replace("-", " ").split(' ').map(w => w[0].toUpperCase() +
           w.substring(1).toLowerCase()).join(' ');
}

function RampBox({ spots, moveMode, toggleMoveMode }) {
    const rampBoxItems = [];
    spots.forEach((spot) => {
        rampBoxItems.push(
            <RampBoxItem spot={spot} moveMode={moveMode} toggleMoveMode={toggleMoveMode} />
        );
    });
    return (
        <div id="ramp" className="box">
            <div className="box title-box" style={{"fontSize": 1.5+"em"}}>
                Ramp
            </div>
            <table className="table-list" border="1" frame="void" rules="rows">
                <tbody>
                    {rampBoxItems}
                </tbody>
            </table>
        </div>
    );
}

function RampBoxItem({ spot, moveMode, toggleMoveMode }) {
    let upperChar = spot.name.replace("ramp-", "").toUpperCase();
    let plane;
    if (spot.plane) {
        plane = (
            <Plane plane={spot.plane} moveMode={moveMode} onClick={toggleMoveMode} />
        );
    }
    return (
        <tr id={spot.name} className="glowable">
            <td>{upperChar}</td>
            <td className="move-here">
                {plane}
            </td>
        </tr>
    );
}

function DirectionBox({ spots }) {
    return (
        <div id="direction" className="box">
            <table className="center-table" border="1" frame="void">
                <tbody>
                    <tr>
                        <DirectionElement name="xc-1" />
                        <td>
                            <table className="center-table" border="1" frame="void">
                                <tbody>
                                    <tr>
                                        <DirectionElement name="kmcx" />
                                    </tr>
                                    <tr>
                                        <DirectionElement name="northwest" />
                                        <DirectionElement name="northeast" />
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <DirectionElement name="xc-2" />
                    </tr>
                    <tr>
                        <DirectionElement name="xc-3" />
                        <td>
                            <table className="center-table" border="1" frame="void">
                                <tbody>
                                    <tr>
                                        <DirectionElement name="southwest" />
                                        <DirectionElement name="southeast" />
                                    </tr>
                                    <tr>
                                        <DirectionElement name="kcfj" />
                                        <DirectionElement name="kfkr" />
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <DirectionElement name="xc-4" />
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

function DirectionElement({ name }) {
    let classNameVal = "move-here many";
    let colSpanVal = 1;
    let displayName;
    let widthVal;
    let heightVal;
    if (name.length === 4) {
        displayName = name.toUpperCase();
    } else {
        displayName = titleCase(name);
    }
    if (name.includes("xc")) {
        displayName = "XC";
        classNameVal += " vert";
        widthVal = "75px";
        heightVal = "148px";
    } else {
        heightVal = "70px";
    }
    if (name === "kmcx") {
        colSpanVal = 2;
    }
    return (
        <td id={name} className="glowable" width={widthVal} height={heightVal} colSpan={colSpanVal}>
            {displayName}
            <div className={classNameVal}></div>
        </td>
    );
}

function HangarsBox({ spots }) {
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
                        <HangarsElement spotID="h5-1" spotType="full" />
                        <HangarsElement spotID="h5-2" spotType="full" />
                        <HangarsElement spotID="h5-3" spotType="full" />
                        <HangarsElement spotID="h6w-1" spotType="full" />
                        <td>
                            <table className="center-table" border="1" frame="void">
                                <tbody>
                                    <tr>
                                        <HangarsElement spotID="h6w-7" spotType="half" />
                                    </tr>
                                    <tr>
                                        <HangarsElement spotID="h6w-8" spotType="half" />
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <HangarsElement spotID="h6w-4" spotType="full" />
                        <HangarsElement spotID="h6-1" spotType="full" />
                        <HangarsElement spotID="h6-2" spotType="full" />
                        <HangarsElement spotID="h6-3" spotType="full" />
                    </tr>
                    <tr>
                        <HangarsElement spotID="h5-4" spotType="full" />
                        <HangarsElement spotID="h5-5" spotType="full" />
                        <HangarsElement spotID="h5-6" spotType="full" />
                        <HangarsElement spotID="h6w-2" spotType="full" />
                        <td>
                            <table className="center-table" border="1" frame="void">
                                <tbody>
                                    <tr>
                                        <HangarsElement spotID="h6w-9" spotType="half" />
                                    </tr>
                                    <tr>
                                        <HangarsElement spotID="h6w-10" spotType="half" />
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <HangarsElement spotID="h6w-5" spotType="full" />
                        <td className="empty"></td>
                        <HangarsElement spotID="h6-4" spotType="full" />
                        <td className="empty"></td>
                    </tr>
                    <tr>
                        <td className="empty"></td>
                        <HangarsElement spotID="h5-7" spotType="full" />
                        <td className="empty"></td>
                        <HangarsElement spotID="h6w-3" spotType="full" />
                        <td>
                            <table className="center-table" border="1" frame="void">
                                <tbody>
                                    <tr>
                                        <HangarsElement spotID="h6w-11" spotType="half" />
                                    </tr>
                                    <tr>
                                        <HangarsElement spotID="h6w-12" spotType="half" />
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <HangarsElement spotID="h6w-6" spotType="full" />
                        <td className="empty"></td>
                        <td className="empty"></td>
                        <td className="empty"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

function HangarsElement({ spotID, spotType }) {
    let heightVal = "68px";
    if (spotType === "half") {
        heightVal = "34px";
    }
    return (
       <td id={spotID} className="glowable" width="75px" height={heightVal}>
           <div className="move-here"></div>
       </td>
    );
}

function OtherBox({ spots }) {
    const otherBoxItems = [];
    Object.keys(spots).forEach((spot) => {
        otherBoxItems.push(
            <OtherBoxItem name={spot} />
        );
    });
    return (
        <div id="other" className="box">
            <table id="other-table-list" className="table-list"
                   border="1" frame="void" rules="rows">
                <tbody>
                    {otherBoxItems}
                </tbody>
            </table>
        </div>
    );
}

function OtherBoxItem({ name }) {
    let displayName = titleCase(name);
    return (
        <tr id={name} className="glowable">
            <td>{displayName}</td>
            <td className="move-here many"></td>
        </tr>
    );
}

function TDoorsBox({ spots }) {
    const tDoorsBoxItems = [];
    Object.keys(spots).forEach((spot) => {
        tDoorsBoxItems.push(
            <TDoorsBoxItem name={spot} />
        );
    });
    return (
        <div id="t-doors" className="box">
            <div className="box title-box" style={{"fontSize": 1.5+"em"}}>T Doors</div>
            <table className="table-list" border="1" frame="void" rules="rows">
                <tbody>
                    {tDoorsBoxItems} 
                </tbody>
            </table>
        </div>
    );
}

function TDoorsBoxItem({ name }) {
    let n = name.replace("t-", "");
    return (
        <tr id={name} className="glowable">
            <td>{n}</td>
            <td className="move-here"></td>
        </tr>
    );
}

function PlaneBox({ planes }) {
    const planeElements = [];
    planes.forEach((plane) => {
        planeElements.push(
            <Plane plane={plane} />
        );
    });
    return (
        <div>
            {planeElements}
        </div>
    );
}

function Plane({ plane, moveMode, toggleMoveMode }) {
    let planeClass = "plane " + plane.type;
    return (
        <span id={plane.tailNumber} className={planeClass}
              onClick={() => toggleMoveMode(plane.tailNumber)}>
            {plane.tailNumber}
        </span>
    );
}

export default function App() {

    // state
    const [data, updateData] = useState(require("./data.json"));
    const [moveMode, setMoveMode] = useState(false);

    // function to toggle mode for moving planes
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
            <div id="frame">
                <div id="title" className="box title-box">
                    <h1>Aircraft Locations</h1>
                </div>
                <RampBox spots={data.spots.ramp}
                    moveMode={moveMode}
                    toggleMoveMode={toggleMoveMode} />
                <DirectionBox spots={data.spots.direction}
                    moveMode={moveMode}
                    toggleMoveMode={toggleMoveMode} />
                <HangarsBox spots={data.spots.hangars}
                    moveMode={moveMode}
                    toggleMoveMode={toggleMoveMode} />
                <OtherBox spots={data.spots.other}
                    moveMode={moveMode}
                    toggleMoveMode={toggleMoveMode} />
                <TDoorsBox spots={data.spots.tdoors}
                    moveMode={moveMode}
                    toggleMoveMode={toggleMoveMode} />
            </div>
            <div id="note">
                Made with love by Johnny Burrer :)
                Reach out on GroupMe with any feedback/bug reports!
            </div>
            <PlaneBox planes={data.planes} moveMode={moveMode} /> 
        </div>
    );
}
