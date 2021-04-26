import React, { useState, useEffect } from "react";
import _ from "lodash";

function Display(list) {
  useEffect(() => {
    let temp = list;
    setNList(temp);
    // let items = JSON.parse(localStorage);
    //   const data = { ...items };
    console.log(nList);
    // setList(items);
  }, []);
  const [nList, setNList] = useState("");
  //   console.log(list.test);
  return (
    <div>
      <div>
        <div></div>
      </div>
    </div>
  );
}

export default Display;
