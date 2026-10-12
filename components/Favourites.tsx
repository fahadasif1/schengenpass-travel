'use client';
import {useEffect,useState} from 'react';
import {Heart} from 'lucide-react';
const STORAGE = 'sp-favourites';
export function readFavourites():string[]{if(typeof window==='undefined')return [];try{const v=JSON.parse(localStorage.getItem(STORAGE)||'[]');return Array.isArray(v)?v.filter((x):x is string=>typeof x==='string'):[]}catch{return []}}
export function useFavourites(){const [favourites,setFavourites]=useState<string[]>([]);
 useEffect(()=>{const sync=()=>setFavourites(readFavourites());sync();window.addEventListener('sp:favourites',sync);window.addEventListener('storage',sync);return()=>{window.removeEventListener('sp:favourites',sync);window.removeEventListener('storage',sync)}},[]);
 const toggle=(slug:string)=>{const current=readFavourites(),next=current.includes(slug)?current.filter(x=>x!==slug):[...current,slug];localStorage.setItem(STORAGE,JSON.stringify(next));setFavourites(next);window.dispatchEvent(new Event('sp:favourites'))};
 return {favourites,toggle};
}
export function FavouriteButton({slug,light=false}:{slug:string;light?:boolean}){const {favourites,toggle}=useFavourites();const selected=favourites.includes(slug);return <button type="button" className={`favourite-button ${light?'fav-light':''} ${selected?'is-saved':''}`} aria-label={selected?'Remove from saved places':'Save destination'} aria-pressed={selected} title={selected?'Remove from saved places':'Save destination'} onClick={e=>{e.preventDefault();e.stopPropagation();toggle(slug)}}><Heart size={17} fill={selected?'currentColor':'none'} strokeWidth={1.8}/></button>}
