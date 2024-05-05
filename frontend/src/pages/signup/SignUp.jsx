import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-blue-500 pb-4">
          SignUp 
          <span className="text-blue-500 p-2">ChatEase</span>
        </h1>

        <form action="">
            <div>
                <label className="label p-2">
                    <span className="text-base label-text text-black">Full Name:-</span>
                </label>
                <input type="text" placeholder="Enter Full Name" className="w-full input input-bordered h-10" />
            </div>

            <div>
                <label className="label p-2">
                    <span className="text-base label-text text-black">Username:-</span>
                </label>
                <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
            </div>
            
            <div>
                <label className="label">
                    <span className="text-base label-text text-black">Password:-</span>
                </label>
                <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
            </div>

            <div>
                <label className="label">
                    <span className="text-base label-text text-black">Confirm Password:-</span>
                </label>
                <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10 mb-2" />
            </div>

            {/* Gender checkbox goes here */}
            <GenderCheckbox/>

            <div className='text-center'>
                <a href="#" className="text-base hover:underline font-medium hover:text-blue-600 mt-1 inline-block text-black">
                    Already have an account?
                </a>
            </div>

            <div>
                <button className="btn btn-block btn-sm mt-2">Sign-Up</button>
            </div>

        </form>
      </div>
    </div>
  )
}

export default SignUp


//starter code for this file

// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-blue-500 pb-4">
//           SignUp 
//           <span className="text-blue-500 p-2">ChatEase</span>
//         </h1>

//         <form action="">
//             <div>
//                 <label className="label p-2">
//                     <span className="text-base label-text text-black">Full Name:-</span>
//                 </label>
//                 <input type="text" placeholder="Enter Full Name" className="w-full input input-bordered h-10" />
//             </div>

//             <div>
//                 <label className="label p-2">
//                     <span className="text-base label-text text-black">Username:-</span>
//                 </label>
//                 <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
//             </div>
            
//             <div>
//                 <label className="label">
//                     <span className="text-base label-text text-black">Password:-</span>
//                 </label>
//                 <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
//             </div>

//             <div>
//                 <label className="label">
//                     <span className="text-base label-text text-black">Confirm Password:-</span>
//                 </label>
//                 <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10 mb-2" />
//             </div>

//             {/* Gender checkbox goes here */}
//             <GenderCheckbox/>

//            <div className='text-center'>
//                <a href="#" className="text-base hover:underline font-medium hover:text-blue-600 mt-1 inline-block text-black">
//                    Already have an account?
//                </a>
//            </div>

//             <div>
//                 <button className="btn btn-block btn-sm mt-2">Sign-Up</button>
//             </div>

//         </form>
//       </div>
//     </div>
//   )
// }

// export default SignUp