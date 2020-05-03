import React from "react";
import Fade from "react-reveal/Fade";

import Header from "parts/Header";
import Clients from "parts/Clients";
import Feature from "parts/Feature";
import Footer from "parts/Footer";

import Section from "components/Section";
import Card from "components/Card";
import Lists from "components/Lists";
import Button from "components/Button";

import HeroImage from "assets/images/hero-image.png";
import FeatureTile01 from "assets/images/feature-tile-icon-01.svg";
import FeatureTile02 from "assets/images/feature-tile-icon-02.svg";
import FeatureTile03 from "assets/images/feature-tile-icon-03.svg";

export default function Homepage() {
  const features = [
    {
      imgSrc: FeatureTile01,
      imgAlt: "Feature tile 01",
      title: "Join The System",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
    },
    {
      imgSrc: FeatureTile02,
      imgAlt: "Feature tile 02",
      title: "Join The System",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
    },
    {
      imgSrc: FeatureTile03,
      imgAlt: "Feature tile 03",
      title: "Join The System",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
    }
  ];

  const listPricing = [
    {
      price: 27,
      currencySymbol: "$",
      description: "Lorem ipsum is a common text",
      features: [
        { isChecked: true, content: "Excepteur sint occaecat apalah" },
        { isChecked: true, content: "Excepteur sint occaecat apalah" },
        { isChecked: true, content: "Excepteur sint occaecat apalah" },
        { isChecked: false, content: "Excepteur sint occaecat apalah" },
        { isChecked: false, content: "Excepteur sint occaecat apalah" }
      ]
    },
    {
      price: 47,
      currencySymbol: "$",
      description: "Lorem ipsum is a common text",
      features: [
        { isChecked: true, content: "Excepteur sint occaecat apalah" },
        { isChecked: true, content: "Excepteur sint occaecat apalah" },
        { isChecked: true, content: "Excepteur sint occaecat apalah" },
        { isChecked: true, content: "Excepteur sint occaecat apalah" },
        { isChecked: false, content: "Excepteur sint occaecat apalah" }
      ]
    },
    {
      price: 67,
      currencySymbol: "$",
      description: "Lorem ipsum is a common text",
      features: [
        { isChecked: true, content: "Excepteur sint occaecat apalah" },
        { isChecked: true, content: "Excepteur sint occaecat apalah" },
        { isChecked: true, content: "Excepteur sint occaecat apalah" },
        { isChecked: true, content: "Excepteur sint occaecat apalah" },
        { isChecked: true, content: "Excepteur sint occaecat apalah" }
      ]
    }
  ];

  return (
    <div className="body-wrap">
      {/* header */}
      <Header />
      <main className="site-content">
        <Section className="hero illustration-section-01" isCenteredContent>
          <div className="container-sm">
            <div className="hero-inner section-inner">
              <div className="hero-content">
                <Fade bottom delay={500}>
                  <h1 className="mt-0 mb-16" data-reveal-delay="200">
                    Landing template for startups
                  </h1>
                </Fade>
                <div className="container-xs">
                  <Fade bottom delay={1000}>
                    <p className="mt-0 mb-32" data-reveal-delay="400">
                      Our landing page template works on all devices, so you
                      only have to set it up once, and get beautiful results
                      forever.
                    </p>
                  </Fade>
                </div>
              </div>
              <div
                className="hero-figure illustration-element-01"
                data-reveal-value="20px"
                data-reveal-delay="800"
              >
                <Fade bottom delay={1500}>
                  <img
                    className="has-shadow"
                    src={HeroImage}
                    alt="Hero image"
                    width="896"
                    height="504"
                  />
                </Fade>
              </div>
            </div>
          </div>
        </Section>

        {/* clients section */}
        <Clients />

        {/* features lists section */}
        <Section className="features-tiles">
          <div class="container">
            <div class="features-tiles-inner section-inner">
              <div class="tiles-wrap">
                {features.map((feature, i) => (
                  <Feature key={i} delayInMs={i * 500} data={feature} />
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* pricing section */}
        <Section className="pricing">
          <Fade bottom delay={2500}>
            <div className="container">
              <div className="pricing-inner section-inner has-top-divider">
                <div className="section-header center-content">
                  <div className="container-xs">
                    <h2 className="mt-0 mb-16">Simple, transarent pricing</h2>
                    <p className="m-0">
                      Lorem ipsum is common placeholder text used to demonstrate
                      the graphic elements of a document or visual presentation.
                    </p>
                  </div>
                </div>
                <div className="tiles-wrap">
                  {listPricing.map((list, i) => (
                    <Card>
                      <div class="pricing-item-content">
                        <div class="pricing-item-header pb-24 mb-24">
                          <div class="pricing-item-price mb-4">
                            <span class="pricing-item-price-currency h2">
                              {list.currencySymbol}
                            </span>
                            <span
                              class="pricing-item-price-amount h1 pricing-switchable"
                              data-pricing-monthly="54"
                              data-pricing-yearly="47"
                            >
                              {list.price}
                            </span>
                          </div>
                          <div class="text-xs text-color-low">
                            {list.description}
                          </div>
                        </div>
                        <div class="pricing-item-features mb-40">
                          <div class="pricing-item-features-title h6 text-xs text-color-high mb-24">
                            What’s included
                          </div>
                          <Lists
                            data={list.features}
                            isSmall
                            className="pricing-item-features-list mb-32"
                          />
                        </div>
                      </div>

                      <div class="pricing-item-cta mb-8" align="center">
                        <Button isPrimary isBlock>
                          Start free trial
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </Fade>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
