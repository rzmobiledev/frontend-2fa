import React from 'react'
import { NextResponse } from 'next/server'
import Sessions from '../_components/Sessions'

const Page = (res: NextResponse) => {
  return <Sessions res={res} />
}

export default Page
