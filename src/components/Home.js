import React, { useEffect, useState } from "react";
import { homeCall } from "../API_CALLS/home_axios";

function PersonList() {
  const [data, setdata] = useState([]);

  useEffect(async () => {
    setdata(await homeCall);
  }, []);

  return (
    <>
      <h1>React Axios Example</h1>
      <div>
        {" "}
        <ul>
          {data.map((val, index) => (
            <li key={index}>{val.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default PersonList;
