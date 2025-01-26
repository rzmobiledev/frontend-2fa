import React, { Suspense } from 'react'

export default function page() {
  return (
    <Suspense fallback="Loading...">
      <div>Logging Out....</div>
    </Suspense>
  )
}
