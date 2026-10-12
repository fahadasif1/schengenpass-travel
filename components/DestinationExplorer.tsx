'use client';
import {useMemo,useState} from 'react';
import {useSearchParams} from 'next/navigation';
import {Search,SlidersHorizontal,X,ArrowRight} from 'lucide-react';
import {destinations,regions,TravelStyle} from '@/lib/data';
import {DestinationCard} from './DestinationCard';
export function DestinationExplorer(){const params=useSearchParams();const [query,setQuery]=useState(params.get('q')||'');const [region,setRegion]=useState(params.get('region')||'All destinations');const [style,setStyle]=useState(params.get('style')||'All styles');
 const matches=useMemo(()=>destinations.filter(d=>(region==='All destinations'||d.region===region)&&(style==='All styles'||d.mood.includes(style as TravelStyle))&&(`${d.name} ${d.country} ${d.region} ${d.description} ${d.mood.join(' ')}`).toLowerCase().includes(query.toLowerCase().trim())),[region,style,query]);
 return <div className="explorer"><div className="explorer-controls"><div className="explorer-search"><Search size={19}/><input aria-label="Search destinations" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search a place, country or feeling..."/>{query&&<button aria-label="Clear search" onClick={()=>setQuery('')}><X size={16}/></button>}</div><div className="explorer-select"><SlidersHorizontal size={17}/><select aria-label="Filter by travel style" value={style} onChange={e=>setStyle(e.target.value)}>{['All styles','Coastal','Nature','City breaks','Culture','Romantic','Adventure'].map(s=><option key={s}>{s}</option>)}</select></div></div>
 <div className="region-tabs" role="group" aria-label="Filter by region">{regions.map(r=><button type="button" key={r} className={region===r?'selected':''} onClick={()=>setRegion(r)}>{r}</button>)}</div><div className="results-count">Showing <b>{matches.length}</b> {matches.length===1?'destination':'destinations'} <span> / Explore what moves you</span></div>
 {matches.length?<div className="listing-grid">{matches.map((d,i)=><DestinationCard key={d.slug} destination={d} index={i}/>)}</div>:<div className="empty-state"><span className="empty-symbol">✳</span><h3>No matches this time.</h3><p>Try another place, region or style. There is plenty more to explore.</p><button className="btn btn-dark" onClick={()=>{setQuery('');setRegion('All destinations');setStyle('All styles')}}>Clear all filters <ArrowRight size={16}/></button></div>}
 </div>}
