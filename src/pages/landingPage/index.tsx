import React from 'react'
import Image from 'next/image'

export default function LandingPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 text-center">
          <h3>Admin</h3>
          <Image
            src="https://buyboximages.s3.us-west-1.amazonaws.com/admin.jpg"
            alt="Image 1"
            width={300}
            height={200}
          />
        </div>
        <div className="col-lg-6 text-center">
          <h3>User</h3>
          <Image
            src="https://buyboximages.s3.us-west-1.amazonaws.com/user.png"
            alt="Image 2"
            width={300}
            height={200}
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-6 text-center">
          <h3>Shop</h3>
          <Image
            src="https://buyboximages.s3.us-west-1.amazonaws.com/shop.jpg"
            alt="Image 2"
            width={300}
            height={200}
          />
        </div>
        <div className="col-lg-6 text-center">
          <h3>Delivery</h3>
          <Image
            src="https://buyboximages.s3.us-west-1.amazonaws.com/delivery.png"
            alt="Image 2"
            width={300}
            height={200}
          />
        </div>
      </div>
    </div>
  )
}
