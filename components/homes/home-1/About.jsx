"use client";
import Image from "next/image";

export default function About() {
    return (
        <div className='row wow fadeInUp' data-wow-delay='0.5s'>
            <div className='col-lg-6 mb-md-60'>
                <div className='position-relative'>
                    {/* Image */}
                    <div className='position-relative overflow-hidden'>
                        <Image width={600} height={200} src='/assets/images/bg.png' className='image-fullwidth relative' alt='Image Description' />
                    </div>
                    {/* End Image */}
                    {/* Decorative Waves */}
                    <div className='decoration-1 d-none d-sm-block' data-rellax-y='' data-rellax-speed={1} data-rellax-percentage='0.1'>
                        <Image width='159' height='74' src='/assets/images/decoration-1.svg' className='svg-shape' alt='' />
                    </div>
                    {/* End Decorative Waves */}
                </div>
            </div>
            <div className='col-lg-6 col-xl-5 offset-xl-1'>
                {/* <h4 className="h5">Our Mission</h4> */}
                <p className='lead text-gray'>
                    Modern Rainwear is India’s leading manufacturer and wholesale supplier of rainwear. With a focus on delivering top-quality,
                    lightweight, and waterproof products, we cater exclusively to businesses and bulk buyers.
                </p>
                {/* <h4 className='h5'>Our Vision</h4> */}
                <p className='text-gray'>
                    Whether you’re looking for custom raincoat designs or ready-to-ship wholesale solutions, we’re here to meet your needs with
                    professionalism and precision. Our extensive product range and commitment to quality make us the go-to rainwear partner for
                    businesses across the nation.
                </p>
            </div>
        </div>
    );
}
