// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { followUser, unfollowUser, unFollowUser } from "../../actions/userAction";

// const User = ({ person }) => {
//     const dispatch = useDispatch()
//   const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
//   const { user } = useSelector((state) => state.authReducer.authData);
//   const [following,setFollowing] = useState(person.following.includes(user._id))
// // const [following, setFollowing] = useState(
// //     person.following && person.following.includes(user._id)
// //   );
//   const handleFollow = ()=>{
//     following? 
//     dispatch(unfollowUser(person._id,user)): dispatch(followUser(person._id,user))
//   }
// //  const handleFollow = () => {
// //     if (person.following && person.following.includes(user._id)) {
// //       dispatch(unfollowUser(person._id, user));
// //     } else {
// //       dispatch(followUser(person._id, user));
// //     }
// //   };
//   return (
//     <div>
//       <div className="follower">
//         <div>
//           <img
//             src={
//               person.coverPicture
//                 ? serverPublic + person.coverPicture
//                 : serverPublic + "defaultProfile.png"
//             }
//             alt=""
//             className="followerImg"
//           />
//           <div className="name">
//             <span>{person.firstname}</span>
//             <span>{person.username}</span>
//           </div>
//         </div>
//         <button className="button fc-button" onClick={handleFollow}>
//           {following? "Unfollow": "Follow"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default User;


import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../../actions/userAction";


const User = ({ person }) => {
  const dispatch = useDispatch();
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.authReducer.authData);
  

  const [following, setFollowing] = useState(
    // Array.isArray(person.followers) ? person.followers.includes(user._id) : false
    person.followers.includes(user._id)
  );

  const handleFollow = () => {
    // if (following) {
    //   dispatch(unfollowUser(person._id, user));
    // } else {
    //   dispatch(followUser(person._id, user));
    // }
    // setFollowing(!following); 
    following?
    dispatch(unfollowUser(person._id,user)):dispatch(followUser(person._id,user))

    setFollowing((prev)=>!prev)
  };

  useEffect(() => {
    setFollowing(Array.isArray(person.following) && person.following.includes(user._id));
  }, [person, user._id]); 

  return (
    <div>
      <div className="follower">
        <div>
          <img
            src={
              person.coverPicture
                ? serverPublic + person.profilePicture
                : serverPublic + "defaultProfile.png"
            }
            alt=""
            className="followerImg"
          />
          <div className="name">
            <span>{person.firstname}</span>
            <span>{person.username}</span>
          </div>
        </div>
        <button className={following? "button fc-button UnfollowButton": "button fc-button "} onClick={handleFollow}>
          {following ? "Unfollow" : "Follow"}
        </button>
      </div>
    </div>
  );
};

export default User;
