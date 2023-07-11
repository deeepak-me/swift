"use client"

import Image from 'next/image'
import React from 'react'

import earPhone from "public/earphone.png";
import { styled } from 'styled-components';

const Card = styled.div`
    background: url({earPhone}), lightgray 0px 0px / 100% 100% no-repeat;
`

const Imagecard = () => {
  return (
    <Card>
        <Image src={earPhone} />
    </Card>
  )
}

export default Imagecard