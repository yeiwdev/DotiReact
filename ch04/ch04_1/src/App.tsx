// import { useEffect, useRef } from "react";
// import Clock from "./pages/Clock";

// export default function App() {
//   let today = useRef(new Date());
//   useEffect(() => {
//     console.log(`useEffect called`);
//     const duration = 1000;
//     const id = setInterval(() => {
//       today.current = new Date();
//       console.log(`today`, today.current.toLocaleTimeString());
//     }, duration);

//     return () => {
//       clearInterval(id);
//     };
//   }, []);
//   return <Clock today={today.current} />;
// }

// import { useEffect, useState } from "react";
// import Clock from "./pages/Clock";

// export default function App() {
//   const [today, setToday] = useState(new Date());
//   // let today = useRef(new Date());
//   useEffect(() => {
//     console.log(`useEffect called`);
//     const duration = 1000;
//     const id = setInterval(() => {
//       setToday(new Date());
//       console.log(`today`, today);
//     }, duration);

//     return () => {
//       clearInterval(id);
//     };
//   }, []);
//   return <Clock today={today} />;
// }

import { useClock } from "./hooks";
import Clock from "./pages/Clock";

export default function App() {
  const today = useClock();
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Clock today={today} />
    </div>
  );
}

// import { useEffect, useState } from "react";

// export default function App() {
//   const [x, setX] = useState(0);
//   const [y, setY] = useState(0);

//   useEffect(() => {}, []);
//   useEffect(() => {}, []);
// }
