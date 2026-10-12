'use client';
import Link from 'next/link';
import {ArrowRight,Heart} from 'lucide-react';
import {destinations} from '@/lib/data';
import {DestinationCard} from './DestinationCard';
import {useFavourites} from './Favourites';
export function SavedDestinations(){const {favourites}=useFavourites();const saved=destinations.filter(d=>favourites.includes(d.slug));return saved.length?<div><div className="results-count">You have <strong>{saved.length}</strong> saved {saved.length===1?'place':'places'}.</div><div className="listing-grid">{saved.map(d=><DestinationCard key={d.slug} destination={d}/>)}</div><div className="center-link"><Link href="/plan" className="btn btn-dark">Turn inspiration into a plan <ArrowRight size={17}/></Link></div></div>:<div className="empty-state"><span className="empty-symbol"><Heart size={37}/></span><h3>Your wishlist starts here.</h3><p>Tap the heart on any destination you love. Your picks will be saved on this device for later.</p><Link href="/destinations" className="btn btn-dark">Find somewhere lovely <ArrowRight size={17}/></Link></div>}
