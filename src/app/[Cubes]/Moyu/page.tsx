import React from 'react'
import { client } from '@/lib/sanietyClient'
import { Image as IImage } from 'sanity'
import { urlForImage } from '../../../../sanity/lib/image'
import Image from "next/image"

const getCubeData = async () => {
  const response = await client.fetch(`*[_type=="Moyu"]{
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
