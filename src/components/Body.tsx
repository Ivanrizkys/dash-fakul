import React, { useEffect, useState } from "react";
import Container from "./Container";
import DosenItem from "./DosenItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';


const Body: React.FunctionComponent = () => {
  const [dosens, setDosens] = useState<any>([])
  const [url, setUrl] = useState<string>("")
  const [image, setImage] = useState<any>([])
  
  const getDosens = async () => {
    const request = await fetch("http://localhost:1337/api/dosens");
    const response = await request.json();
    return response;
  };

  const getContets = async () => {
    const request = await fetch("http://localhost:1337/api/contents");
    const response = await request.json();
    return response;
  };

  const getImage =async () => {
    const request = await fetch("http://localhost:1337/api/prestasis?populate=*")
    const response = await request.json()
    return response
  }
  
  useEffect(() => {
    getDosens().then((dosens) => setDosens(dosens.data));
  }, []);

  useEffect(() => {
    getContets().then((contents) => {
      setUrl(contents.data[0].attributes.url)
    })
  }, [])

  useEffect(() => {
    getImage().then((image) => {
      setImage(image.data)
    })
  }, [])

  return (
    <Container className="flex justify-between mt-[62px]">
      <div className="">
        <div className="w-[344px] h-[175px]">
          <Swiper autoplay={{delay: 2500, disableOnInteraction: false}} modules={[Autoplay]}>
            {image.map((items: any) => (
              <SwiperSlide>
                <img key={Math.random()} src={`http://localhost:1337${items?.attributes?.image?.data?.attributes?.url}`} alt="winner-uin" className="w-[344px] h-[175px]" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-[344px] h-[426px] bg-[#D6F4E1] flex flex-col items-center mt-7">
          <h4 className="font-bold text-xl text-center w-7/12">
            Informasi Ketersediaan Dosen
          </h4> 
          <DosenItem fontSize="text-[13px]" className="mt-3 mb-5 bg-[#6FF27C]">
            {dosens[0]?.attributes?.Dosen}
          </DosenItem>
          <div className="flex flex-wrap gap-y-3 gap-x-4 justify-center">
            {dosens.slice(1).map((dosen: any) => (
              <DosenItem key={Math.random()} fontSize="text-[10.5px]" className={`mt-3 mb-5 ${dosen?.attributes?.Tersedia ? "bg-[#6FF27C]" : "bg-[#E75C3D]"}`}>{dosen?.attributes?.Dosen}</DosenItem>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[979px] h-[629px] bg-[#D6F4E1]">
        <iframe
          width="976"
          height="629"
          src={url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  );
};

export default Body;
