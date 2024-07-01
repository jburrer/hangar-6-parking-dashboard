import './App.css';
import { useState } from 'react';

function Plane({ name, onPlaneClick }) {

    let planeType;
    if (/^N86[5-7]PU$/.test(name)) {
        planeType = "ap-archer";
    } else if (/^N8[5-6][0-9]PU$/.test(name)) {
        planeType = "archer";
    } else if (/^N65[1-4]PA$/.test(name) || name === "N665CS") {
        planeType = "cessna";
    } else if (/^N54[0-3]PU$/.test(name)) {
        planeType = "arrow";
    } else if (/^N57[0-1]PU$/.test(name)) {
        planeType = "seminole";
    } else {
        planeType = "sky-arrow";
    }

    let planeClass = "plane " + planeType;

    return (
         <span id={name} className={planeClass} onClick={onPlaneClick}>{name}</span>
    );

}

export default function App() {

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
            <div id="frame">
                <div id="title" className="box title-box"><h1>Aircraft Locations</h1></div>
                <div id="ramp" className="box">
                    <div className="box title-box" style={{"fontSize": 1.5+"em"}}>Ramp</div>
                    <table className="table-list" border="1" frame="void" rules="rows">
                        <tbody>
                            <tr id="ramp-a" className="glowable"><td>A</td><td className="move-here"></td></tr>
                            <tr id="ramp-b" className="glowable"><td>B</td><td className="move-here"></td></tr>
                            <tr id="ramp-c" className="glowable"><td>C</td><td className="move-here"></td></tr>
                            <tr id="ramp-d" className="glowable"><td>D</td><td className="move-here"></td></tr>
                            <tr id="ramp-e" className="glowable"><td>E</td><td className="move-here"></td></tr>
                            <tr id="ramp-f" className="glowable"><td>F</td><td className="move-here"></td></tr>
                            <tr id="ramp-g" className="glowable"><td>G</td><td className="move-here"></td></tr>
                            <tr id="ramp-h" className="glowable"><td>H</td><td className="move-here"></td></tr>
                            <tr id="ramp-i" className="glowable"><td>I</td><td className="move-here"></td></tr>
                            <tr id="ramp-j" className="glowable"><td>J</td><td className="move-here"></td></tr>
                            <tr id="ramp-k" className="glowable"><td>K</td><td className="move-here"></td></tr>
                            <tr id="ramp-l" className="glowable"><td>L</td><td className="move-here"></td></tr>
                            <tr id="ramp-m" className="glowable"><td>M</td><td className="move-here"></td></tr>
                            <tr id="ramp-n" className="glowable"><td>N</td><td className="move-here"></td></tr>
                            <tr id="ramp-o" className="glowable"><td>O</td><td className="move-here"></td></tr>
                            <tr id="ramp-p" className="glowable"><td>P</td><td className="move-here"></td></tr>
                            <tr id="ramp-q" className="glowable"><td>Q</td><td className="move-here"></td></tr>
                            <tr id="ramp-r" className="glowable"><td>R</td><td className="move-here"></td></tr>
                        </tbody>
                    </table>
                </div>
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
                <div id="other" className="box">
                    <table id="other-table-list" className="table-list" border="1" frame="void" rules="rows">
                        <tbody>
                            <tr id="approaches" className="glowable"><td>Approaches</td><td className="move-here many"></td></tr>
                            <tr id="landings" className="glowable"><td>Landings</td><td className="move-here many"></td></tr>
                            <tr id="purdue-aviation" className="glowable"><td>Purdue Aviation</td><td className="move-here many"></td></tr>
                        </tbody>
                    </table>
                </div>
                <div id="t-doors" className="box">
                    <div className="box title-box" style={{"fontSize": 1.5+"em"}}>T Doors</div>
                    <table className="table-list" border="1" frame="void" rules="rows">
                        <tbody>
                            <tr id="t-1" className="glowable"><td>1</td><td className="move-here"></td></tr>
                            <tr id="t-2" className="glowable"><td>2</td><td className="move-here"></td></tr>
                            <tr id="t-3" className="glowable"><td>3</td><td className="move-here"></td></tr>
                            <tr id="t-4" className="glowable"><td>4</td><td className="move-here"></td></tr>
                            <tr id="t-5" className="glowable"><td>5</td><td className="move-here"></td></tr>
                            <tr id="t-6" className="glowable"><td>6</td><td className="move-here"></td></tr>
                            <tr id="t-7" className="glowable"><td>7</td><td className="move-here"></td></tr>
                            <tr id="t-8" className="glowable"><td>8</td><td className="move-here"></td></tr>
                            <tr id="t-9" className="glowable"><td>9</td><td className="move-here"></td></tr>
                            <tr id="t-10" className="glowable"><td>10</td><td className="move-here"></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div id="note">Made with love by Johnny Burrer :) Reach out on GroupMe with any feedback/bug reports!</div>
            <div>
                <Plane name="N850PU" onPlaneClick={() => toggleMoveMode("N850PU")} />
                <Plane name="N851PU" onPlaneClick={() => toggleMoveMode("N851PU")} />
                <Plane name="N852PU" onPlaneClick={() => toggleMoveMode("N852PU")} />
                <Plane name="N853PU" onPlaneClick={() => toggleMoveMode("N853PU")} />
                <Plane name="N854PU" onPlaneClick={() => toggleMoveMode("N854PU")} />
                <Plane name="N855PU" onPlaneClick={() => toggleMoveMode("N855PU")} />
                <Plane name="N856PU" onPlaneClick={() => toggleMoveMode("N856PU")} />
                <Plane name="N857PU" onPlaneClick={() => toggleMoveMode("N857PU")} />
                <Plane name="N858PU" onPlaneClick={() => toggleMoveMode("N858PU")} />
                <Plane name="N859PU" onPlaneClick={() => toggleMoveMode("N859PU")} />
                <Plane name="N860PU" onPlaneClick={() => toggleMoveMode("N860PU")} />
                <Plane name="N861PU" onPlaneClick={() => toggleMoveMode("N861PU")} />
                <Plane name="N862PU" onPlaneClick={() => toggleMoveMode("N862PU")} />
                <Plane name="N863PU" onPlaneClick={() => toggleMoveMode("N863PU")} />
                <Plane name="N864PU" onPlaneClick={() => toggleMoveMode("N864PU")} />
                <Plane name="N865PU" onPlaneClick={() => toggleMoveMode("N865PU")} />
                <Plane name="N866PU" onPlaneClick={() => toggleMoveMode("N866PU")} />
                <Plane name="N867PU" onPlaneClick={() => toggleMoveMode("N867PU")} />
                <Plane name="N651PA" onPlaneClick={() => toggleMoveMode("N651PA")} />
                <Plane name="N652PA" onPlaneClick={() => toggleMoveMode("N652PA")} />
                <Plane name="N653PA" onPlaneClick={() => toggleMoveMode("N653PA")} />
                <Plane name="N654PA" onPlaneClick={() => toggleMoveMode("N654PA")} />
                <Plane name="N665CS" onPlaneClick={() => toggleMoveMode("N665CS")} />
                <Plane name="N540PU" onPlaneClick={() => toggleMoveMode("N540PU")} />
                <Plane name="N541PU" onPlaneClick={() => toggleMoveMode("N541PU")} />
                <Plane name="N542PU" onPlaneClick={() => toggleMoveMode("N542PU")} />
                <Plane name="N543PU" onPlaneClick={() => toggleMoveMode("N543PU")} />
                <Plane name="N570PU" onPlaneClick={() => toggleMoveMode("N570PU")} />
                <Plane name="N571PU" onPlaneClick={() => toggleMoveMode("N571PU")} />
                <Plane name="N455SA" onPlaneClick={() => toggleMoveMode("N455SA")} />
                <Plane name="N458SA" onPlaneClick={() => toggleMoveMode("N458SA")} />
                <Plane name="N600PU" onPlaneClick={() => toggleMoveMode("N600PU")} />
            </div>
        </div>
    );

}
