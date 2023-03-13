import mycontext from "./mycontext";
import { url, key } from '../constants/constant';
import { useState, useEffect } from "react";

let Store = (props) => {
  let [val, setval] = useState(null);
  let [querey, setquerey] = useState("kick");

  async function getdata() {
    let data = await fetch(`${url}${key}&s=${querey}`);
    data = await data.json();
    setval(data);
  }

  useEffect(() => {
    getdata();
  }, [querey]);

  return (
    <mycontext.Provider value={{ val, setquerey }}>
      {props.children}
    </mycontext.Provider>
  ); 
};

export default Store;
