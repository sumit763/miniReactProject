import React, { useState } from "react";
import data from "./data";
import "./style.css";
function Accordian() {
  {
    /* commments */
  }
  const [selection, setselection] = useState(null);
  const [EnableMulti, setEnableMulti] = useState(false);
  const [multiple, setmultiple] = useState([]);

  // single selection
  function handlesingleselection(getCurrentId) {
    setselection(getCurrentId === selection ? null : getCurrentId);
  }

  // multi selection
  function handlemultiselection(getCurrentId) {
    // Copy all the values
    let copyMultiple = [...multiple];

    // Find index of current ID in the copied array
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1)
      copyMultiple.push(getCurrentId); // If not found, add it
    else copyMultiple.splice(findIndexOfCurrentId, 1); // If found, remove it

    // Update the state with the modified array
    setmultiple(copyMultiple);
  }

  console.log(selection, multiple);

  return (
    <>
      <div className="wapper">
        <button onClick={() => setEnableMulti(!EnableMulti)}>
          Enable multi Selection
        </button>

        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item">
                <div
                  onClick={
                    EnableMulti
                      ? () => handlemultiselection(dataItem.id)
                      : () => handlesingleselection(dataItem.id)
                  }
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  {/* commments */}
                  <span>
                    {selection === dataItem.id ||
                    multiple.indexOf(dataItem.id) !== -1
                      ? "-"
                      : "+"}
                  </span>
                  {/* commments */}
                </div>
                {EnableMulti
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="content">{dataItem.answer}</div>
                    )
                  : selection === dataItem.id && (
                      <div className="content">{dataItem.answer}</div>
                    )}

                {/* commments */}
                {/* {selection === dataItem.id ||
                mutiple.indexOf(dataItem.id) !== -1 ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null} */}
                {/* commments */}
              </div>
            ))
          ) : (
            <div>Data not found</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Accordian;
