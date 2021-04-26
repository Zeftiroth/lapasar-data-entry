import React, { useState } from "react";
import Display from "./Display";

function Entry() {
  //   let n = 0;
  const [gTotal, setGTotal] = useState(0);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  //   const [count, setCount] = useState("");
  //   const counter = () => {
  //     let nn = n + 1;
  //     setCount(nn);
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    const total = parseInt(qty * price);
    const ngtotal = gTotal + total;
    setGTotal(ngtotal);
    console.log(gTotal);
    const table = document.getElementById("table-1");
    const row = table.insertRow(1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    cell1.innerHTML = name;
    cell2.innerHTML = address;
    cell3.innerHTML = price;
    cell4.innerHTML = qty;
    cell5.innerHTML = total;
    // let ans = [JSON.parse(localStorage.getItem("data"))];
    // console.log(ans);

    // let ls1 = { name: name, address: address, price: price, qty: qty };
    // setList(ls1);
    // let nans = ans.push(ls1);
    // console.log(ls1);
    // let d = [JSON.parse(localStorage.getItem("data"))];
    // let ls2 = d.push(ls1);
    // localStorage.setItem("data", JSON.stringify(nans));

    // localStorage.setItem(address, ls2);
    // counter();
  };

  return (
    <div>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <div>Name</div>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <div>Address</div>
              <input
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <div>Price</div>
              <input
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <div>Qty</div>
              <input
                onChange={(e) => {
                  setQty(e.target.value);
                }}
              ></input>
            </div>

            <div>
              <button type="submit" class="my-1">
                Save
              </button>
            </div>
          </form>
        </div>
        <div>
          <div className="col-12 ">Data</div>
          <table id="table-1">
            <tr>
              <th> Name</th>
              <th> Address</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
          </table>
          <div>Grand Total:{gTotal}</div>
        </div>
      </div>
    </div>
  );
}

export default Entry;
