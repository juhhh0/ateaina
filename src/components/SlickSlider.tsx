"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";

// @ts-ignore
import Slider from "react-slick";
import { getStrapiURL } from "@/lib/utils";
import { PictureType } from "@/lib/types";

export default function Slick({data}: {data: PictureType[]}) {
  const strapiUrl = getStrapiURL();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <Slider {...settings} className="max-width">
      {data?.map((picture: PictureType, i: number) => (
        <div key={i}>
          <img className="aspect-video object-cover" src={strapiUrl + picture.url} alt="" />
        </div>
      ))}
    </Slider>
  );
}
