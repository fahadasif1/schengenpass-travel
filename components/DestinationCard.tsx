import Link from 'next/link';
import {ArrowUpRight,MapPin} from 'lucide-react';
import {Destination} from '@/lib/data';
import {FavouriteButton} from './Favourites';
import {imageStyles} from '@/lib/utils';
export function DestinationCard({destination:d,index=0,variant='default'}:{destination:Destination;index?:number;variant?:'default'|'tall'}){return <article className={`destination-card ${variant==='tall'?'card-tall':''}`} style={{animationDelay:`${Math.min(index,7)*50}ms`}}><Link href={`/destinations/${d.slug}`} className="destination-photo" style={imageStyles(d.image)} aria-label={`Discover ${d.name}`}><span className="photo-gradient"/><span className="destination-topline"><span className="destination-tag">{d.country}</span></span><span className="photo-label"><span><small>{d.mood[0]} escape</small><b>{d.name}</b></span><span className="photo-arrow"><ArrowUpRight size={18}/></span></span></Link><div className="card-save"><FavouriteButton slug={d.slug}/></div><div className="destination-info"><span><MapPin size={14}/>{d.country} <i>·</i> {d.duration}</span><p>{d.short}</p></div></article>}
