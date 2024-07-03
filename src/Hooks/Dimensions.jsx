import { useEffect, useState } from "react";

export function useDimensions()
{
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleResize()
    {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }

    useEffect(()=>{
        window.addEventListener('resize', handleResize)
    },[])

    return {width, height};
}