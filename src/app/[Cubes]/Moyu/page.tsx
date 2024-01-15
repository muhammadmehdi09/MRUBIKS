import React from 'react'
import { client } from '@/lib/sanietyClient'
import { Image as IImage } from 'sanity'
import { urlForImage } from '../../../../sanity/lib/image'
import Image from "next/image"

const getCubeData = async () => {
  const response = await client.fetch(`*
  [_type=="Moyu" && _id == "22601829-13af-4f4b-a4e1-e9bffc766a8b" || 
   _type=="Moyu" && _id == "463e779d-4117-4ac1-aa56-5441dbacd043" || 
   _type=="Moyu" && _id == "4b19320c-5aa3-4aaa-9974-9e0952cff89f" || 
   _type=="Moyu" && _id == "5aa94616-6c24-4d32-b0dc-f5f07615c279" ||
   _type=="Moyu" && _id == "4f28eca8-6a2a-401a-a321-9410737062a1" ||
   _type=="Moyu" && _id == "80484119-7b3b-492b-8138-7d6e7108d15f" ||
   _type=="Moyu" && _id == "8b6b6090-d8cb-451d-83bd-b6f7ba726d01" ||
   _type=="Moyu" && _id == "ae6dc312-2ec7-4c1d-b05f-d06ac0f66678" ||
   _type=="Moyu" && _id == "90bb0dc3-663d-43a4-9a0f-e9eb174a5a66"
]{
    title,
      price,
      image,
      company
  }`)
  return response
}

interface ICube {
  title: string,
  price: number,
  image: IImage,
  company: {
    title: string,
    image: IImage
  }
}

export default async function Moyu() {

  const data: ICube[] = await getCubeData()

  return (
    <div className=''>
      <div className='grid grid-cols-1 xl:grid-cols-3 justify-center space-x-4 gap-y-5'>
        {data.map((item) => (
          <>
            <div className="">
              <a href="Cube_Page">
                <div className="p-4 text-center items-center border border-gray-300 hover:scale-110 duration-500">
                  <div className="w-350 h-350 inline-flex ">
                    <Image
                      src={urlForImage(item.image).url()}
                      alt="Cube Image"
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
                      <span className="text-orange-400">$</span> {item.price}
                    </h3>
                    <a href="/Cubes/Cube_Page">
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
                        Add to Cart
                      </button>
                    </a>
                  </div>
                </div>
              </a>
            </div>
          </>
        ))}
      </div>
      <br />
    </div>
  )
}