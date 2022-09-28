import React from "react";
import Image from "next/image";
import Link from "next/link";
import Btn from "../components/Btn";
import Box from "../components/Box";
import SiteAccordion from "../components/Accordion";

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
            <Btn text="Get started" />
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
            <Btn text="buy" />
          </div>
          <div className="benefir-container__holder">
            <Image
              src="/assets/images/benefit.png"
              width="812"
              height="560"
              alt="benefit image"
            />
          </div>
        </div>
      </section>
      <section className="suit">
        <div className="suit-inner container">
          <h2 className="suit__title section-title">
            YoShop suits many types of business
          </h2>
          <div className="site-box between">
            <Box image="home" text="shops" />
            <Box image="ambulance" text="Pharmacies" />
            <Box image="food" text="HoReCa" />
            <Box image="clinic" text="Medical centers" />
            <Box image="repair" text="Auto parts" />
            <Box image="cleaning" text="Сleaning companies" />
            <Box image="salon" text="Beauty salon" />
            <Box image="moto" text="Curier companys" />
            <Box image="gym" text=" Gym" />
            <Box image="parking" text="Parking" />
          </div>
        </div>
      </section>
      <section className="payment">
        <div className="payment-inner container">
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
        </div>
      </section>
      <section className="business">
        <div className="business-inner between container">
          <div className="business-inner__wrapper">
            <h2
              className="business__title section-title"
              style={{ marginBottom: "44px" }}
            >
              Make your business comfortoble with YoShop
            </h2>
            <p
              className="business__text section-text"
              style={{ maxWidth: "100%" }}
            >
              DocuSign uses Dlex to track key metrics to improve customer
              experience, resulting in more conversions, onboarding completions,
              and paid upgrades.
            </p>
          </div>
          <div className="business-inner__wrapper">
            <Image
              src="/assets/images/business.svg"
              width="660"
              height="400"
              alt="business image"
            />
          </div>
        </div>
      </section>
      <section className="reason">
        <div className="reason-inner container between">
          <div className="reason-inner__container">
            <h2 className="reason__title section-title">
              Why we should choose YoShop?
            </h2>
            <SiteAccordion />
          </div>
          <div className="reason-inner__container">
            <img
              className="reason-inner__image"
              src="/assets/images/reason.png"
              alt="reason image"
              width="650"
              height="610"
            />
          </div>
        </div>
      </section>
      <section className="support">
        <div className="support-inner container">
          <h2
            className="support__title section-title"
            style={{ marginBottom: "44px" }}
          >
            YoShop has full Support
          </h2>
          <div className="support-inner__container">
            <div className="support-inner__box support-box">
              <Image
                src="/assets/icons/safety.svg"
                alt="safety logo"
                width="85"
                height="55"
              />
              <h4 className="support-box__title">Safety and legal</h4>
              <p className="support-box__text">
                You will be able to get complete information about YoShop
              </p>
            </div>
            <div className="support-inner__box support-box">
              <Image
                src="/assets/icons/call.svg"
                alt="call logo"
                width="85"
                height="55"
              />
              <h4 className="support-box__title">Call-Center</h4>
              <p className="support-box__text">
                We are ready to tell you in detail about all the possibilities
                of the terminal and answer all your questions, consult
              </p>
            </div>
            <div className="support-inner__box support-box">
              <Image
                src="/assets/icons/edu.svg"
                alt="education logo"
                width="85"
                height="55"
              />
              <h4 className="support-box__title">education</h4>
              <p className="support-box__text">
                Full support from IT-specialists. They train you and your
                employees how to use the program
              </p>
            </div>
            <div className="support-inner__box support-box">
              <Image
                src="/assets/icons/customer.svg"
                alt="customer logo"
                width="85"
                height="55"
              />
              <h4 className="support-box__title">Customer support</h4>
              <p className="support-box__text">
                Our IT specialists will connect and configure the terminals. If
                problems arise, any problems will be identified and corrected.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="partners">
        <div className="partners-inner container">
          <h2
            className="partners__title section-title"
            style={{ marginBottom: "44px" }}
          >
            YoShop Partners
          </h2>
          <div className="partners-inner__container between">
            <div className="partner-inner__box partners-box">
              <div className="partner-box__head">
                <Image
                  src={`/assets/icons/halyk.svg`}
                  width="80"
                  height="80"
                  alt="halyk logo"
                />
              </div>
              <span className="partners-box__text">Halyk bank</span>
            </div>
            <div className="partner-inner__box partners-box">
              <div className="partner-box__head">
                <Image
                  src={`/assets/icons/tele.svg`}
                  width="80"
                  height="80"
                  alt="tele logo"
                />
              </div>
              <span className="partners-box__text">Tele 2</span>
            </div>
            <div className="partner-inner__box partners-box">
              <div className="partner-box__head">
                <Image
                  src={`/assets/icons/webkassa.svg`}
                  width="80"
                  height="80"
                  alt="webkassa logo"
                />
              </div>
              <span className="partners-box__text">Webkassa</span>
            </div>
            <div className="partner-inner__box partners-box">
              <div className="partner-box__head">
                <Image
                  src={`/assets/icons/openway.svg`}
                  width="130"
                  height="45"
                  alt="openway logo"
                />
              </div>
              <span className="partners-box__text">Openway</span>
            </div>
            <div className="partner-inner__box partners-box">
              <div className="partner-box__head">
                <Image
                  src={`/assets/icons/beeline.svg`}
                  width="150"
                  height="65"
                  alt="beeline logo"
                />
              </div>
              <span className="partners-box__text">Beeline</span>
            </div>
            <div className="partner-inner__box partners-box">
              <div className="partner-box__head">
                <Image
                  src={`/assets/icons/myshop.svg`}
                  width="80"
                  height="75"
                  alt="halyk logo"
                />
              </div>
              <span className="partners-box__text">my shop</span>
            </div>
            <div className="partner-inner__box partners-box">
              <div className="partner-box__head">
                <Image
                  src={`/assets/icons/telecom.svg`}
                  width="100"
                  height="100"
                  alt="halyk logo"
                />
              </div>
              <span className="partners-box__text">Kazakhtelecom</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
