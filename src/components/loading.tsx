import React, { ReactElement } from 'react'
import Image from 'next/image'

interface LoaderProps {
  title: string
}

const LoaderComponent = (props: LoaderProps): ReactElement => {
  const { title } = props
  return (
    <div className="container-fluid loader-wrapper">
      <div className="row">
        <div className="col">
          <div className="loader-content">
            <span className="loader" />
            <Image
              src="https://buyboximages.s3.us-west-1.amazonaws.com/box.png"
              alt="BuyBox"
              width={300}
              height={300}
            />
            <h5 className="text-center mt-3">{title}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LoaderComponent
