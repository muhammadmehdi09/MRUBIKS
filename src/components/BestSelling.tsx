import React from 'react'
import { client } from '@/lib/sanietyClient'
import { Image as IImage } from 'sanity'
import { urlForImage } from '../../sanity/lib/image'
import Image from "next/image"

const getcubeData = async () => {
  const response = await client.fetch(`*
  [_type=="Moyu" && _id == "5c920eea-d38f-40d8-814e-a7d3e17b26e2" || 
  _type=="Gan" && _id == "85a25401-4ced-4752-9cb1-bac16a090336" || 
  _type=="Qiyi" && _id =="eb10eb54-c38d-4e38-8bf1-087c93bacdb8"]{
    title,
      price,
      image,
      company
  }`)
  return response
}

interface Icube {
  title: string,
  price: number,
  image: IImage,
  company: {
    title: string,
    image: IImage
  }
}


export default async function BestSelling() {
  const data: Icube[] = await getcubeData()

  return (

    <div className='mt-[100px] mb-[100px]'>
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl title-font text-cyan-500 mb-4 font-bold">
          Best-Selling Cubes
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s text-orange-500 font-semibold">
          The Best-Selling and Most Trending Cubes
        </p>
        <div className="flex mt-4 justify-center">
          <div className="w-40 h-1 rounded-full bg-indigo-500 inline-flex" />
        </div>
      </div>

      <div className='grid grid-cols-1 xl:grid-cols-3 justify-center space-x-4 gap-y-5'>
        {data.map((item) => (
          <>
            <div className="">
              <a href="cubes/cube_Page">
                <div className="p-4 text-center items-center border border-gray-300 hover:scale-110 duration-500">
                  <div className="w-350 h-350 inline-flex ">
                    <Image
                      src={urlForImage(item.image).url()}
                      alt="cube Image"
                      width={500}
                      height={500}
                      className=""
                    />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      {item.title}
                    </h2>
                    <h3 className="text-gray-900 text-lg title-font font-medium mb-3">
                      <span className="text-orange-400">PKR</span> {item.price}
                    </h3>
                    <a href="/cubes/cube_Page">
                      <button className="bg-orange-400 flex py-3 px-5 lg:px-10 2xl:px-16 m-auto text-black hover:bg-cyan-400 hover:text-white rounded-xl duration-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        Add to cart
                      </button>
                    </a>
                  </div>
                </div>
              </a>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}