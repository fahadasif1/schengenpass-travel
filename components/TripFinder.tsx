'use client';
import {useRouter} from 'next/navigation';
import {useState,FormEvent} from 'react';
import {MapPin,Compass,ArrowRight} from 'lucide-react';
export function TripFinder(){const router=useRouter();const [place,setPlace]=useState('');const [mood,setMood]=useState('All experiences');
 function find(e:FormEvent){e.preventDefault();const params=new URLSearchParams();if(place.trim())params.set('q',place.trim());if(mood!=='All experiences')params.set('style',mood);router.push(`/destinations${params.size?'?'+params.toString():''}`);}
 return <form className="trip-finder" onSubmit={find}><div className="finder-lead"><MapPin size={20}/><div><small>WHERE TO?</small><input value={place} onChange={e=>setPlace(e.target.value)} placeholder="City, country or region" aria-label="Destination search"/></div></div><div className="finder-divider"/><div className="finder-lead finder-mood"><Compass size={20}/><div><small>YOUR KIND OF TRIP</small><select value={mood} onChange={e=>setMood(e.target.value)} aria-label="Travel style"><option>All experiences</option><option>Coastal</option><option>Nature</option><option>City breaks</option><option>Culture</option><option>Romantic</option><option>Adventure</option></select></div></div><button className="finder-button" type="submit">Explore trips <ArrowRight size={18}/></button></form>
}
