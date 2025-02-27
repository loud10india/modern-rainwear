"use client";
import { contactItems } from "@/data/contact";
import React from "react";

export default function Contact() {
    return (
        <div className='container position-relative'>
            <div className='row wow fadeInUp'>
                {/* Left Column */}
                <div className='col-lg-4 mb-md-50 mb-sm-30 position-relative z-index-1'>
                    {contactItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <hr className='mt-0 mb-40 mb-sm-20' />
                            <div className={`contact-item mb-40 mb-sm-20`}>
                                <div
                                    className='ci-icon'
                                    style={{
                                        backgroundColor: "#F5B9B4 !important",
                                        color: "#ff0000",
                                        display: "inline - flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "50%",
                                        height: "20px",
                                        width: "20px",
                                    }}
                                >
                                    <i
                                        className={item.iconClass}
                                        style={{ backgroundColor: "#F5B9B4", padding: "12px", borderRadius: "50%", marginTop: "27px" }}
                                    />
                                </div>
                                <h4 className='ci-title'>{item.title}</h4>
                                <div className='ci-text' style={{ fontSize: "16px" }}>
                                    {item.text}
                                </div>
                                {/* <div className='ci-link'>
                                    <a href={item.link.url} target={item.link.target} rel={item.link.rel}>
                                        {item.link.text}
                                    </a>
                                </div> */}
                            </div>{" "}
                        </React.Fragment>
                    ))}
                    {/* End Phone */}
                    <hr className='mt-0 mb-0' />
                </div>
                {/* End Left Column */}
                {/* Right Column */}
                <div className='col-lg-8 col-xl-7 offset-xl-1 d-flex align-items-strech'>
                    <div className=' round overflow-hidden w-100 px-4 py-5 p-sm-5' style={{ backgroundColor: "#F5B9B4" }}>
                        <div className='row'>
                            <div className='   '>
                                <p className='fw-semibold text-black mt-n10 mb-30 pt-10 pt-md-5  text-left'>
                                    At Modern Rainwear, we specialize in wholesale and B2B orders, ensuring bulk buyers and businesses get the best
                                    rainwear solutions. For all your bulk ordering needs, reach out to us through the options below:
                                </p>
                            </div>
                        </div>
                        {/* Contact Form */}
                        <form onSubmit={(e) => e.preventDefault()} className='form contact-form' id='contact_form'>
                            <div className=''>
                                <div>
                                    {/* Name */}
                                    <div className='form-group'>
                                        <label htmlFor='name'>Name</label>
                                        <div className=' round' style={{ backgroundColor: "#FF0000" }}>
                                            <input
                                                type='text'
                                                name='name'
                                                id='name'
                                                className='input-md  round form-control'
                                                placeholder='Enter your name'
                                                pattern='.{3,100}'
                                                required
                                                aria-required='true'
                                            />
                                        </div>
                                    </div>
                                    {/* End Name */}
                                </div>
                                <div className='row '>
                                    <div className='col-md-6'>
                                        {/* Email */}
                                        <div className='form-group'>
                                            <label htmlFor='email'>Email</label>
                                            <div className='round' style={{ backgroundColor: "#FF0000" }}>
                                                <input
                                                    type='email'
                                                    name='email'
                                                    id='email'
                                                    className='input-md  round form-control'
                                                    placeholder='Enter your email'
                                                    pattern='.{5,100}'
                                                    required
                                                    aria-required='true'
                                                />
                                            </div>
                                        </div>
                                        {/* End Email */}
                                    </div>
                                    <div className='col-md-6'>
                                        {/* Email */}
                                        <div className='form-group'>
                                            <label htmlFor='mobile'>Phone</label>
                                            <div className=' round' style={{ backgroundColor: "#FF0000" }}>
                                                <input
                                                    type='tel'
                                                    name='mobile'
                                                    id='mobile'
                                                    className='input-md  round form-control'
                                                    placeholder='Enter your phone number'
                                                    pattern='.{5,100}'
                                                    required
                                                    aria-required='true'
                                                />
                                            </div>
                                        </div>
                                        {/* End Email */}
                                    </div>
                                </div>
                            </div>
                            {/* Message */}
                            <div className='form-group'>
                                <label htmlFor='message'>Message</label>
                                <div className=' round' style={{ backgroundColor: "#FF0000" }}>
                                    <textarea
                                        name='message'
                                        id='message'
                                        className='input-md  round form-control'
                                        style={{ height: 101 }}
                                        placeholder='Enter your message'
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6 col-xl-7 d-flex align-items-center'>
                                    {/* Inform Tip */}
                                    <div className='form-tip w-100 pt-3'>
                                        <i className='icon-info size-16' />
                                        All the fields are required. By sending the form you agree to the <a href='#'>
                                            Terms &amp; Conditions
                                        </a> and <a href='#'>Privacy Policy</a>.
                                    </div>
                                    {/* End Inform Tip */}
                                </div>
                                <div className='col-md-6 col-xl-5 mt-sm-20'>
                                    {/* Send Button */}
                                    <div className='pt-3 text-md-end'>
                                        <button
                                            className='submit_btn btn-mod btn-medium  btn-round'
                                            data-btn-animate='y'
                                            id='submit_btn'
                                            aria-controls='result'
                                            style={{ backgroundColor: "#ff4d4d", color: "white" }}
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                    {/* End Send Button */}
                                </div>
                            </div>
                            <div id='result' role='region' aria-live='polite' aria-atomic='true' />
                        </form>
                        {/* End Contact Form */}
                    </div>
                </div>
                {/* End Right Column */}
            </div>
        </div>
    );
}
