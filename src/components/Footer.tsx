import React, { useEffect, useState } from 'react';
import "../App.css"

const combineTextNews = (arr: any) => {
    let result = ""
    arr.forEach((element: any) => {
        result = `${result} --${element?.attributes?.item}`
    });
    return result.trimStart()
}
const Footer: React.FunctionComponent = () => {
    const [news, setNews] = useState<any>([])

    const getNews =async () => {
        const request = await fetch("http://localhost:1337/api/beritas")
        const response = await request.json()
        return response
    }

    useEffect(() => {
        getNews().then((item) => {
            setNews(item.data)
        })
    }, [])
    
    return (
        <div className="h-[69px] bg-[#F5F5F5] mt-11 mb-7 flex items-center overflow-hidden whitespace-nowrap">
            <div id="scroll-text">{combineTextNews(news)}</div>
        </div>
    )
}

export default Footer