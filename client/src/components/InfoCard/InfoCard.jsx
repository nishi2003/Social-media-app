// import React, { useState } from "react";
// import "./InfoCard.css";
// import { UilPen } from "@iconscout/react-unicons";
// import ProfileModel from "../ProfileModel/ProfileModel";


// const InfoCard = () => {
//   const [modelOpened,setModalOpened] = useState(false)
//   return (
//     <div className="InfoCard">
//       <div className="infoHead">
//         <h4>Your Info</h4>
//         <div>
//           <UilPen width="2rem" height="1.2rem" onClick={()=>setModalOpened(true)}/>
//             <ProfileModel modelOpened={modelOpened} setModalOpened={setModalOpened}/>
//         </div>
//       </div>

//       <div className="info">
//         <span>
//           <b>Status </b>
//         </span>
//         <span>in Relationship</span>
//       </div>

//       <div className="info">
//         <span>
//           <b>lives in </b>
//         </span>
//         <span>Ahmedabad</span>
//       </div>

//       <div className="info">
//         <span>
//           <b>works at </b>
//         </span>
//         <span>Byteparity</span>
//       </div>
//       <button className="button logout-button">Logout</button>
//     </div>
//   );
// };

// export default InfoCard;


import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModel/ProfileModel";


const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>in Relationship</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Multan</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Zainkeepscode inst</span>
      </div>

      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;