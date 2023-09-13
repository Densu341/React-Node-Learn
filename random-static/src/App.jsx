// import { usePointerPosition } from "./components/PointerPosition.jsx";
// import { useDelayedValue } from "./components/DelayValue.jsx";
import PlaceContentCenter from "./components/PlaceContentCenter.jsx";
import Button from "./components/Button.jsx";
import { useState } from "react";
import Counter from "./components/Counter.jsx";

// function Canvas() {
//   const pos1 = usePointerPosition();
//   const pos2 = useDelayedValue(pos1, 100);
//   const pos3 = useDelayedValue(pos2, 200);
//   const pos4 = useDelayedValue(pos3, 100);
//   const pos5 = useDelayedValue(pos4, 50);
//   return (
//     <>
//       <Dot position={pos1} opacity={1} />
//       <Dot position={pos2} opacity={0.8} />
//       <Dot position={pos3} opacity={0.6} />
//       <Dot position={pos4} opacity={0.4} />
//       <Dot position={pos5} opacity={0.2} />
//     </>
//   );
// }

// function Dot({ position, opacity }) {
//   return (
//     <div
//       style={{
//         position: "absolute",
//         backgroundColor: "pink",
//         borderRadius: "50%",
//         opacity,
//         transform: `translate(${position.x}px, ${position.y}px)`,
//         pointerEvents: "none",
//         left: -20,
//         top: -20,
//         width: 40,
//         height: 40,
//       }}
//     />
//   );
// }

export default function App() {
  return (
    <PlaceContentCenter>
      <Counter initialValue={0}></Counter>
    </PlaceContentCenter>
  );
}
