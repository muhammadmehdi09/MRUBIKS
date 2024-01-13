import React from 'react'
import Image from 'next/image'
import { BiCubeAlt } from 'react-icons/bi'
import Logo from '../../public/Images/Logo.png'


let ST = 1499.99

export default function Home() {
  return (
    <div className=''>
      <div className="navbar bg-cyan-500 mb-[100px]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <a href=""><li> <Image src={Logo} alt='Logo' width={100} height={100} className='block lg:hidden place-self-center' /></li></a>
              <li><a href='/Cubes/Moyu'>Moyu</a></li>
              <li><a href='/Cubes/Qiyi'>Qiyi</a></li>
              <li><a href='/Cubes/Gan'>Gan</a></li>
              <li><a href='/Cubes/All_Cubes'>All Cubes</a></li>
            </ul>
          </div>
          <a href='http://localhost:3000/'>
            <Image src={Logo} alt='Logo' width={75} height={75}  className='hidden lg:block' />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a href='/Cubes/Moyu' className='text-white hover:text-orange-600 duration-300'>Moyu</a></li>
              <li><a href='/Cubes/Qiyi' className='text-white hover:text-orange-600 duration-300'>Qiyi</a></li>
              <li><a href='/Cubes/Gan' className='text-white hover:text-orange-600 duration-300'>Gan</a></li>
              <li><a href='/Cubes/All_Cubes' className='text-white hover:text-orange-600 duration-300'>All Cubes</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-end mr-10">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="group">
            <div className="indicator ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:text-orange-500 duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span className="badge badge-sm indicator-item bg-orange-400">1</span>
          </div>
            </label>
            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg text-orange-400">1 Items</span>
                <span className="text-info">Subtotal: <span className='text-cyan-700'>$</span>{Intl.NumberFormat('en-US').format(ST)}</span>
                <div className="card-actions">
                  <a href="/Cart">
                  <button className="btn btn-primary btn-block bg-cyan-400 text-white hover:text-black hover:bg-orange-400">View cart</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero min-h-[80vh] bg-img1 mt-4 bg-fixed bg-center">
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content text-center text-neutral-content ">
        <div className="max-w-md">
          <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white">Buy a Cube Now!</h1>
          <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight text-white">Choose a Cube and buy it instantly at cheap prices at Cube Zone </p>
          <a href="Cubes/All_Cubes">
            <button className='bg-black flex py-3 px-5 m-auto text-white hover:bg-white hover:text-black rounded-xl duration-700'>
              <BiCubeAlt className="mr-2 mt-1 h-5 w-5 " /> Get a Cube
            </button></a>
        </div>
      </div>
    </div>
    <div className='mb-[100px] mt-[50px]'>
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl title-font text-cyan-500 mb-4 font-bold">
          Our Promotions
        </h1>
        <div className="flex mt-4 justify-center">
          <div className="w-40 h-1 rounded-full bg-indigo-500 inline-flex" />
        </div>
      </div>
      <div className='flex-none lg:flex space-x-8 place-content-center mr-14 sm:mr-28 sm:ml-14 xl:ml-0 xl:mr-0 '>
        <div className="hero min-h-[500px] bg-img-3 ml-8 xl:ml-0 hover:scale-[1.10] duration-500">
          <div className="rounded-2xl hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-4xl font-bold text-cyan-500">Get discount on any cube!</h1>
              <p className="mb-5 text-orange-400 font-semibold">It is our 10th anniversery on <span className=' text-blue-600'>4 December 2023 </span>, Buy a cube on that day and get 20% off on any cube</p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="hero min-h-[500px] bg-img-2 hover:scale-[1.10] duration-500" >
          <div className="rounded-2xl hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content place-self-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-4xl font-bold text-cyan-500">Use a Promo Code!</h1>
              <p className="mb-5 text-orange-400 font-semibold">Use Promo code <span className=' text-blue-600'>MRUBIKS2023 </span> and get upto 15% discount on all BMW cube </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

// import React from 'react'
// import { client } from '@/lib/sanietyClient'
// import { Image as IImage } from 'sanity'
// import { urlForImage } from '../../sanity/lib/image'
// import Image from "next/image"

// const getcubeData = async () => {
//   const response = await client.fetch(`*
//   [_type=="Moyu" && _id == "5c920eea-d38f-40d8-814e-a7d3e17b26e2" || 
//   _type=="Gan" && _id == "85a25401-4ced-4752-9cb1-bac16a090336" || 
//   _type=="Qiyi" && _id =="eb10eb54-c38d-4e38-8bf1-087c93bacdb8"]{
//     title,
//       price,
//       image,
//       company
//   }`)
//   return response
// }

// interface Icube {
//   title: string,
//   price: number,
//   image: IImage,
//   company: {
//     title: string,
//     image: IImage
//   }
// }


// export default async function BestSelling() {
//   const data: Icube[] = await getcubeData()

//   return (

//     <div className='mt-[100px] mb-[100px]'>
//       <div className="text-center mb-20">
//         <h1 className="sm:text-3xl text-2xl title-font text-cyan-500 mb-4 font-bold">
//           Best-Selling Cubes
//         </h1>
//         <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s text-orange-500 font-semibold">
//           The Best-Selling and Most Trending Cubes
//         </p>
//         <div className="flex mt-4 justify-center">
//           <div className="w-40 h-1 rounded-full bg-indigo-500 inline-flex" />
//         </div>
//       </div>

//       <div className='grid grid-cols-1 xl:grid-cols-3 justify-center space-x-4 gap-y-5'>
//         {data.map((item) => (
//           <>
//             <div className="">
//               <a href="cubes/cube_Page">
//                 <div className="p-4 text-center items-center border border-gray-300 hover:scale-110 duration-500">
//                   <div className="w-350 h-350 inline-flex ">
//                     <Image
//                       src={urlForImage(item.image).url()}
//                       alt="cube Image"
//                       width={500}
//                       height={500}
//                       className=""
//                     />
//                   </div>
//                   <div className="flex-grow">
//                     <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
//                       {item.title}
//                     </h2>
//                     <h3 className="text-gray-900 text-lg title-font font-medium mb-3">
//                       <span className="text-orange-400">PKR</span> {item.price}
//                     </h3>
//                     <a href="/cubes/cube_Page">
//                       <button className="bg-orange-400 flex py-3 px-5 lg:px-10 2xl:px-16 m-auto text-black hover:bg-cyan-400 hover:text-white rounded-xl duration-200">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-5 w-5 mr-2"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                           />
//                         </svg>
//                         Add to cart
//                       </button>
//                     </a>
//                   </div>
//                 </div>
//               </a>
//             </div>
//           </>
//         ))}
//       </div>
//     </div>
//   )
// }
