import React, { useState } from "react";
import ImageGallery from "react-image-gallery";

function Galleryy() {
  const imagess = [
    {
      original:
        "https://www.bmw.lk/content/dam/bmw/common/topics/offers-and-services/service-workshop/service-maintenance/bmwaftersales_serviceworkshop_servicemaintenance_2_checkmaintanaince_01.jpg",
      thumbnail:
        "https://www.bmw.lk/content/dam/bmw/common/topics/offers-and-services/service-workshop/service-maintenance/bmwaftersales_serviceworkshop_servicemaintenance_2_checkmaintanaince_01.jpg",
    },
    {
      original:
        "https://www.bmw-lebanon.com/content/dam/bmw/common/topics/offers-and-services/personal-services/ws-vehiclecheck-and-maintenance/bmw-vehicle-checks.jpg",
      thumbnail:
        "https://www.bmw-lebanon.com/content/dam/bmw/common/topics/offers-and-services/personal-services/ws-vehiclecheck-and-maintenance/bmw-vehicle-checks.jpg",
    },
    {
      original:
        "https://i0.wp.com/d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/190/2020/04/29155745/BMW-SafetyAndHealth-Service-CarCare-960x540.jpg?ssl=1",
      thumbnail:
        "https://i0.wp.com/d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/190/2020/04/29155745/BMW-SafetyAndHealth-Service-CarCare-960x540.jpg?ssl=1",
    },
    {
      original:
        "https://i0.wp.com/d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/190/2020/04/29155745/BMW-SafetyAndHealth-Service-CarCare-960x540.jpg?ssl=1",
      thumbnail:
        "https://i0.wp.com/d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/190/2020/04/29155745/BMW-SafetyAndHealth-Service-CarCare-960x540.jpg?ssl=1",
    },
    {
      original:
        "https://i0.wp.com/d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/190/2020/04/29155745/BMW-SafetyAndHealth-Service-CarCare-960x540.jpg?ssl=1",
      thumbnail:
        "https://i0.wp.com/d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/190/2020/04/29155745/BMW-SafetyAndHealth-Service-CarCare-960x540.jpg?ssl=1",
    },
  ];
  const images = [
    {
      src:
        "https://i0.wp.com/d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/190/2020/04/29155745/BMW-SafetyAndHealth-Service-CarCare-960x540.jpg?ssl=",
      // width: 4,
      // height: 3,
    },
    {
      src:
        "https://i0.wp.com/d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/190/2020/04/29155745/BMW-SafetyAndHealth-Service-CarCare-960x540.jpg?ssl=",
      // width: 1,
      // height: 1,
    },
    {
      src:
        "https://i0.wp.com/d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/190/2020/04/29155745/BMW-SafetyAndHealth-Service-CarCare-960x540.jpg?ssl=",
      // width: 4,
      // height: 3,
    },
    {
      src:
        "https://i0.wp.com/d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/190/2020/04/29155745/BMW-SafetyAndHealth-Service-CarCare-960x540.jpg?ssl=",
      // width: 4,
      // height: 3,
    },
    {
      src:
        "https://i0.wp.com/d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/190/2020/04/29155745/BMW-SafetyAndHealth-Service-CarCare-960x540.jpg?ssl=",
      // width: 4,
      // height: 3,
    },
    {
      src:
        "https://i0.wp.com/d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/190/2020/04/29155745/BMW-SafetyAndHealth-Service-CarCare-960x540.jpg?ssl=",
      // width: 4,
      // height: 3,
    },
    {
      src:
        "https://i0.wp.com/d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/190/2020/04/29155745/BMW-SafetyAndHealth-Service-CarCare-960x540.jpg?ssl=",
      // width: 4,
      // height: 3,
    },
    {
      src:
        "https://i0.wp.com/d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/190/2020/04/29155745/BMW-SafetyAndHealth-Service-CarCare-960x540.jpg?ssl=",
      // width: 4,
      // height: 3,
    },
    {
      src:
        "https://i0.wp.com/d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/190/2020/04/29155745/BMW-SafetyAndHealth-Service-CarCare-960x540.jpg?ssl=",
      // width: 4,
      // height: 3,
    },
    {
      src:
        "https://i0.wp.com/d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/190/2020/04/29155745/BMW-SafetyAndHealth-Service-CarCare-960x540.jpg?ssl=",
      // width: 4,
      // height: 3,
    },
    {
      src:
        "https://i0.wp.com/d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/190/2020/04/29155745/BMW-SafetyAndHealth-Service-CarCare-960x540.jpg?ssl=",
      // width: 4,
      // height: 3,
    },
    {
      src:
        "https://i0.wp.com/d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/190/2020/04/29155745/BMW-SafetyAndHealth-Service-CarCare-960x540.jpg?ssl=",
      // width: 4,
      // height: 3,
    },
    {
      src:
        "https://i0.wp.com/d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/190/2020/04/29155745/BMW-SafetyAndHealth-Service-CarCare-960x540.jpg?ssl=",
      // width: 4,
      // height: 3,
    },
    {
      src:
        "https://i0.wp.com/d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/190/2020/04/29155745/BMW-SafetyAndHealth-Service-CarCare-960x540.jpg?ssl=",
      // width: 4,
      // height: 3,
    },
    {
      src:
        "https://i0.wp.com/d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/190/2020/04/29155745/BMW-SafetyAndHealth-Service-CarCare-960x540.jpg?ssl=",
      // width: 4,
      // height: 3,
    },
    {
      src:
        "https://i0.wp.com/d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/190/2020/04/29155745/BMW-SafetyAndHealth-Service-CarCare-960x540.jpg?ssl=",
      // width: 4,
      // height: 3,
    },
    {
      src:
        "https://i0.wp.com/d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/190/2020/04/29155745/BMW-SafetyAndHealth-Service-CarCare-960x540.jpg?ssl=",
      // width: 4,
      // height: 3,
    },
    {
      src:
        "https://i0.wp.com/d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/190/2020/04/29155745/BMW-SafetyAndHealth-Service-CarCare-960x540.jpg?ssl=",
      // width: 4,
      // height: 3,
    },
  ];

  return (
    <div>
      <ImageGallery items={imagess} />
      {/* <ResponsiveGallery images={images} /> */}
    </div>
  );
}

export default Galleryy;
