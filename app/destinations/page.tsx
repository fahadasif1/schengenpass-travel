import type {Metadata} from 'next';
import {Suspense} from 'react';
import {PageBanner} from '@/components/SiteShell';
import {DestinationExplorer} from '@/components/DestinationExplorer';
export const metadata:Metadata={title:'Explore Destinations',description:'Discover inspiring destinations across Europe, the UK, North America, Türkiye and Oceania.'};
export default function Destinations(){return <><PageBanner eyebrow="THE DESTINATION EDIT" title={<>The world is <em>yours to explore.</em></>} description="From familiar favourites to distant horizons, find the place that feels like your next story."/><section className="section listing-section"><div className="container"><Suspense fallback={<p>Loading destinations…</p>}><DestinationExplorer/></Suspense></div></section></>}
