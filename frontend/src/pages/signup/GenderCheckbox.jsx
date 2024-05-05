import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="flex">

      <div className="form-control">
        <label className="cursor-pointer label">
          <span className="label-text text-black font-bold px-2">Male:</span>
          <input type="checkbox" className="checkbox checkbox-info"/>
        </label>
      </div>

      <div className="form-control">
        <label className="cursor-pointer label">
          <span className="label-text text-black font-bold px-2">Female:</span>
          <input type="checkbox" className="checkbox checkbox-secondary"/>
        </label>
      </div>

    </div>
  );
};

export default GenderCheckbox;





// starter code for this File

// import React from "react";

// const GenderCheckbox = () => {
//   return (
//     <div className="flex">

//       <div className="form-control">
//         <label className="cursor-pointer label">
//           <span className="label-text text-black font-bold px-2">Male:</span>
//           <input type="checkbox" className="checkbox checkbox-info"/>
//         </label>
//       </div>

//       <div className="form-control">
//         <label className="cursor-pointer label">
//           <span className="label-text text-black font-bold px-2">Female:</span>
//           <input type="checkbox" className="checkbox checkbox-secondary"/>
//         </label>
//       </div>

//     </div>
//   );
// };

// export default GenderCheckbox;
