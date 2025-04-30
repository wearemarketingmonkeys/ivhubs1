import React from "react";
import { Routes, Route } from "react-router-dom";
import Page from "../components/Page";

// Pages
import Home from "../pages/Home";
import MeetOurDoctors from "../pages/explore-us/MeetOurDoctors";
import Offers from "../pages/explore-us/Offers";
import IvPackages from "../pages/explore-us/IvPackages";
import Aesthetic from "../pages/aesthetic/Aesthetic";
import WellnessDrips from "../pages/iv-therapy/WellnessDrips";
import EnergyBooster from "../pages/iv-therapy/EnergyBooster";
import Blogs from "../pages/Blogs";
import ContactUs from "../pages/ContactUs";
import About from "../pages/explore-us/About";
import NotFound from "../pages/NotFound";
import AestheticServiceDetails from "../pages/aesthetic/AestheticServiceDetails";
import DripsDetails from "../pages/iv-therapy/DripsDetails";
import BoostersDetails from "../pages/iv-therapy/BoostersDetails";
import LaserHairRemoval from "../pages/LaserHairRemoval";
import Morpheus8 from "../pages/Morpheus8";
import Booking from "../pages/Booking";
import BlogDetails from "../pages/BlogDetails";
import CancellationPolicy from "../pages/CancellationPolicy";
import TermsConditions from "../pages/TermsConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";


const Router = () => {
  return (
    <Routes>
      {/* Home */}
      <Route
        path="/"
        element={
          <Page>
            <Home />
          </Page>
        }
      />

      <Route
        path="/explore-us/meet-our-doctors"
        element={
          <Page>
            <MeetOurDoctors />
          </Page>
        }
      />
      <Route
        path="/about-us"
        element={
          <Page>
            <About />
          </Page>
        }
      />
      <Route
        path="/explore-us/offers"
        element={
          <Page>
            <Offers />
          </Page>
        }
      />
      <Route
        path="/packages"
        element={
          <Page>
            <IvPackages />
          </Page>
        }
      />

      {/* Aesthetic */}
      <Route
        path="/aesthetic"
        element={
          <Page>
            <Aesthetic />
          </Page>
        }
      />
      <Route
        path="/aesthetic/:serviceName"
        element={
          <Page>
            <AestheticServiceDetails />
          </Page>
        }
      />

      {/* IV Therapy */}
      <Route
        path="/iv-therapy/drips"
        element={
          <Page>
            <WellnessDrips />
          </Page>
        }
      />
      <Route
        path="/iv-therapy/drips/:dripsName"
        element={
          <Page>
            <DripsDetails />
          </Page>
        }
      />
      <Route
        path="/iv-therapy/boosters"
        element={
          <Page>
            <EnergyBooster />
          </Page>
        }
      />
      <Route
        path="/iv-therapy/boosters/:boostersName"
        element={
          <Page>
            <BoostersDetails />
          </Page>
        }
      />

      {/* Laser Hair Removal */}
      <Route
        path="/laser-hair-removal"
        element={
          <Page>
            <LaserHairRemoval />
          </Page>
        }
      />

      {/* Morpheus8 */}
      <Route
        path="/morpheus"
        element={
          <Page>
            <Morpheus8 />
          </Page>
        }
      />

      {/* Blogs */}
      <Route
        path="/blogs"
        element={
          <Page>
            <Blogs />
          </Page>
        }
      />
      <Route
        path="/blogs/:blogTitle"
        element={
          <Page>
            <BlogDetails />
          </Page>
        }
      />

      {/* Contact */}
      <Route
        path="/contact-us"
        element={
          <Page>
            <ContactUs />
          </Page>
        }
      />

{/* Booking */}
<Route
  path="/booking"
  element={
    <Page>
      <Booking />
    </Page>
  }
/>

<Route
  path="/cancellation-policy"
  element={
    <Page>
      <CancellationPolicy />
    </Page>
  }
/>

<Route
  path="/terms-conditions"
  element={
    <Page>
      <TermsConditions />
    </Page>
  }
/>

<Route
  path="/privacy-policy"
  element={
    <Page>
      <PrivacyPolicy />
    </Page>
  }
/>

      {/* Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
