import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import Container from "./Container";

const apiKey = "fgL5zwzEG7007DJ375AF2zQdY0tLKDU5"

const convert = (number: any) => {
    const str = `${number}`
    if (str.length === 1) {
        const newStr = `0${str}`
        return newStr
    }
    return number
}

const Header: React.FunctionComponent = () => {
    const [time, setTime] = useState<number>(0)
    const [weather, setWeather] = useState<any>([])
    
    const getWeather = async () => {
        const getCurrentCondition = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/208981?apikey=${apiKey}&language=en-us&details=true`)
        const resCurrentCondition = await getCurrentCondition.json()
        return resCurrentCondition[0]
    }
    
    useEffect(() => {
        const interfal = setInterval(() => setTime(time + 1))
        return () => {
            clearInterval(interfal)
        }
    }, [time])

    useEffect(() => {
        const interfal = setInterval(() => {
            console.log("weather changes")
            getWeather().then((weather) => setWeather(weather))
        }, 60000)
        return () => {
            clearInterval(interfal)
        }
    }, [weather])

    useEffect(() => {
        getWeather().then((weather) => setWeather(weather))
    }, [])
    
    return (
        <Container>
            <div className="flex justify-between pt-[26px]">
                <div className="w-7/12 flex justify-between items-center">
                    <img src="/logo.png" alt="logo-uin" className="w-[119px] h-[167px]" />
                    <div className="w-[1px] bg-black h-[156px]"></div>
                    <div className="font-roboto text-green-primary font-bold">
                        <p className="text-[47px]">Fakultas Sains & Teknologi</p>
                        <p className="text-[35px]">UIN WALISONGO SEMARANG</p>
                        <p className="text-[19px]">Terakreditasi A</p>
                    </div>
                </div>
                <div className="w-5/1 flex justify-end gap-x-[28px]">
                    <div className="w-[207px] h-[130px] bg-white rounded-[30px] p-2 flex justify-center items-center flex-col font-inter text-base font-bold">
                        <p>{`${dayjs(new Date()).format("ddd-DD-MMM-YYYY")}`}</p>
                        <p>{`${dayjs(new Date()).format("hh:mm:ss")}`}</p>
                    </div>
                    <div className="w-[135px] h-[130px] bg-white rounded-[30px] flex items-center justify-center flex-col">
                        <img src={`https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${convert(weather?.WeatherIcon)}-s.png`} alt="weather-icon" width={66} height={64} />
                        <p className="mt-1 font-inter text-xl">{Math.round(weather?.Temperature?.Metric?.Value)}<sup>o</sup></p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Header