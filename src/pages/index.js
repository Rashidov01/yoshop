import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="site-hero hero">
        <div className="hero-wrapper between container">
          <div className="hero-wrapper__container">
            <h1 className="hero__title section-title">
              Use YoShop on any device
            </h1>
            <p className="hero__text section-text">
              YoShop POS is a multifunctional inventory software that allows you
              to fully automate the work of the store
            </p>
            <Link className="hero__link" href="#">
              <a className="hero__link primary-btn">Get Started</a>
            </Link>
          </div>
          <div className="hero-wrapper__img">
            <Image
              src="/assets/images/hero.svg"
              alt="hero image"
              width="854"
              height="596"
            />
          </div>
        </div>
      </div>
      <section className="app">
        <h2 className="app__title text-center">
          Download the mobile app and get 1 month FREE, then ₸ 3 000 for month
        </h2>
        <div className="app-container center">
          <Link href="#">
            <a className="app-container__link">
              <Image
                src="/assets/icons/googleplay.svg"
                width="340"
                height="100"
                alt="google play logo"
              />
            </a>
          </Link>
          <Link href="#">
            <a className="app-container__link">
              <Image
                src="/assets/icons/appstore.svg"
                width="340"
                height="100"
                alt="app store logo"
              />
            </a>
          </Link>
        </div>
      </section>
      <section className="benefit">
        <div className="benefit-container container between">
          <div className="benefit-container__holder">
            <div className="section-head align-center">
              <h3 className="section-title">Benefits with</h3>
              <Image
                src="/assets/icons/logo.svg"
                alt="site logo"
                width="185"
                height="65"
              />
            </div>
            <p className="section-text">
              With a YoShop License, you can use the phone as a Pos terminal
            </p>
            <Link href="#">
              <a className="primary-btn">buy</a>
            </Link>
          </div>
          <div className="benefir-container__holder">
            <Image src="/assets/images/benefit.svg" width="812" height="560" />
          </div>
        </div>
      </section>
      <section className="payment container">
        <h2 className="payment__title section-title">
          All types of payment systems
        </h2>
        <div className="payment-holder">
          <Image
            src="/assets/images/payment-type.svg"
            width="1300"
            height="590"
          />
        </div>
      </section>
    </>
  );
}
