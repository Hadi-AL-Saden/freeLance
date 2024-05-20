'use client'
import React from "react";
import {db} from "@/lib/prisma"
export default function CreateRecord() {

const CreateRecord =async()=>{
    db.product.create({
        data:{
            name:'asd',
            description: 'test',
            price : 99.9,
            quantity : 69,
            status :'Empty'
        }
    })
}

  return (
    <>
            <button type="button" onClick={CreateRecord} >Submit</button>
    </>
  )
}
