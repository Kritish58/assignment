import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
   const [row, setRow] = useState(3);
   const [column, setColumn] = useState(3);

   const [activeValue, setActiveValue] = useState(0);
   const [mainArr, setMainArr] = useState([]);
   const [maxVal, setMaxVal] = useState(8);

   useEffect(() => {
      handleCreate();
      return () => {};
   }, []);

   const handleCreate = () => {
      let rowsArr = [];
      let h = 0;
      for (let i = 0; i < row; i++) {
         let columnsArr = [];

         for (let j = 0; j < column; j++) {
            columnsArr[j] = h++;
         }
         rowsArr[i] = columnsArr;
      }

      setMainArr(rowsArr);
      const lastRow = rowsArr[rowsArr.length - 1];
      const max = lastRow[lastRow.length - 1];
      setMaxVal(max);
   };

   const handleRightClicked = () => {
      if (activeValue < maxVal) {
         setActiveValue((prev) => prev + 1);
      }
   };

   const handleUpClicked = () => {
      let rowlen = mainArr[0].length;
      if (activeValue - rowlen < 0) {
         return;
      }
      setActiveValue((prev) => prev - rowlen);
   };

   const handleLeftClicked = () => {
      if (activeValue > 0) {
         setActiveValue((prev) => prev - 1);
      }
   };

   const handleDownClicked = () => {
      let rowlen = mainArr[0].length;
      if (activeValue + rowlen > maxVal) {
         return;
      }
      setActiveValue((prev) => rowlen + prev);
   };

   return (
      <>
         <div className="App">
            {/* title */}
            <h1 style={{ width: '100%', textAlign: 'center', fontWeight: 300, marginTop: 4 }}>Assignment</h1>
            {/* body */}
            <main className="p-4 my-3 row m-0">
               <div className="col-6 col-md-2">
                  <section className="d-flex flex-column">
                     <label htmlFor="row">Row</label>
                     <input
                        type="number"
                        value={row}
                        onChange={(e) => {
                           setRow(e.target.value);
                        }}
                        id="row"
                     />
                     <label htmlFor="column">Column</label>
                     <input
                        type="number"
                        id="column"
                        value={column}
                        onChange={(e) => {
                           setColumn(e.target.value);
                        }}
                     />
                     <button
                        type="button"
                        onClick={() => {
                           handleCreate();
                        }}
                        className="my-3"
                        style={{ borderWidth: 1 }}>
                        create
                     </button>
                  </section>
               </div>
               <div className="col-6 col-md-3 p-4">
                  <section className="text-center p-2">
                     <i
                        className="fas fa-arrow-up"
                        onClick={() => {
                           handleUpClicked();
                        }}></i>
                  </section>
                  <section className=" p-2 d-flex justify-content-around">
                     <i
                        className="fas fa-arrow-left"
                        onClick={() => {
                           handleLeftClicked();
                        }}></i>
                     <i
                        className="fas fa-arrow-right"
                        onClick={() => {
                           handleRightClicked();
                        }}></i>
                  </section>
                  <section className="p-2 text-center">
                     <i
                        className="fas fa-arrow-down"
                        onClick={() => {
                           handleDownClicked();
                        }}></i>
                  </section>
               </div>
               <div className="col-12 col-sm-7 p-4">
                  <div style={{ border: 'solid 1px #666', width: 'fit-content' }}>
                     {mainArr.map((aRow, index) => {
                        return (
                           <section key={index} className="d-flex">
                              {aRow.map((value) => {
                                 return (
                                    <div key={value} className={`p-1 box ${value === activeValue ? 'highlight' : ''}`}>
                                       {value}
                                    </div>
                                 );
                              })}
                           </section>
                        );
                     })}
                  </div>
               </div>
            </main>
         </div>
         <div
            style={{
               position: 'absolute',
               bottom: 10,
               width: '100%',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
            }}>
            <a
               href="https://github.com/Kritish58"
               target="_blank"
               rel="noreferrer noopener"
               style={{ marginLeft: 10, textDecoration: 'none' }}>
               <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  height="30"
                  width="30"
                  alt=""
               />
               <span> martian moon</span>
            </a>
         </div>
      </>
   );
}

export default App;
