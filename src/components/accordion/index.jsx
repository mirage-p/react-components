import { useEffect, useState } from "react";
import data from "./data";
import './style.css';

export default function Accordion() {

    const [selected, setSelected] = useState(null);
    const [multiSelectionEnabled, setmultiSelectionEnabled] = useState(false);
    const [multiple, setMultiple] = useState([]);

    useEffect(() => {
        if (multiSelectionEnabled) {
            setSelected(null);
        } else {
            setMultiple([]);
        }
    }, [multiSelectionEnabled])

    function handleMultiSelection(getCurrentId) {
        let cpyMultiple = [...multiple];
        const findIndex = cpyMultiple.indexOf(getCurrentId)

        console.log(findIndex)

        if (findIndex === -1) cpyMultiple.push(getCurrentId)
        else cpyMultiple.splice(findIndex, 1)

        setMultiple(cpyMultiple)
    }

    function handleClick(getCurrentId) {
        if (multiSelectionEnabled) {
            handleMultiSelection(getCurrentId)
        } else {
            setSelected(getCurrentId === selected ? null : getCurrentId);
        }
    }

    console.log(selected, multiple)

    return <div className="wrapper">

        <button onClick={() => setmultiSelectionEnabled(!multiSelectionEnabled)}>Enable multi selection</button>

        <div className="accordion">
            {
                data && data.length > 0 ? (
                    data.map((dataItem) =>
                    (
                        <div className="item" key={dataItem.id}>
                            <div onClick={() => handleClick(dataItem.id)}
                                className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                multiple.indexOf(dataItem.id) !== -1 || selected === dataItem.id ? (
                                    <div className="content">{dataItem.answer}</div>
                                ) : (null)
                            }
                        </div>
                    ))
                ) : (<div>No data found</div>)
            }
        </div>
    </div>;
}