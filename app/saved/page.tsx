import type {Metadata} from 'next';
import {PageBanner} from '@/components/SiteShell';
import {SavedDestinations} from '@/components/SavedDestinations';
export const metadata:Metadata={title:'Your Saved Places',robots:{index:false,follow:true}};
export default function Saved(){return <><PageBanner eyebrow="YOUR PERSONAL WISHLIST" title={<>Places you've <em>fallen for.</em></>} description="Keep your favourite destinations in one little corner of the internet. Saved locally on your device."/><section className="section"><div className="container"><SavedDestinations/></div></section></>}
