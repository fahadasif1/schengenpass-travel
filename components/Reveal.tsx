'use client';
import {useEffect,useRef,useState} from 'react';
export function Reveal({children,className=''}:{children:React.ReactNode;className?:string}){
 const element=useRef<HTMLDivElement>(null);const [visible,setVisible]=useState(false);
 useEffect(()=>{if(typeof IntersectionObserver==='undefined'){setVisible(true);return;}const obs=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setVisible(true);obs.disconnect();}},{threshold:0.08});if(element.current)obs.observe(element.current);return()=>obs.disconnect();},[]);
 return <div ref={element} className={`reveal ${visible?'revealed':''} ${className}`}>{children}</div>;
}
