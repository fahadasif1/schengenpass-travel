import type {Metadata} from 'next';
import {PageBanner} from '@/components/SiteShell';
import {TripPlanner} from '@/components/TripPlanner';
export const metadata:Metadata={title:'Plan Your Journey',description:'Build your personal travel canvas. Explore destinations, choose your style and create a travel enquiry.'};
export default function Plan(){return <><PageBanner eyebrow="MADE FOR YOUR KIND OF JOURNEY" title={<>Let's dream up <em>your next escape.</em></>} description="A little inspiration, a few choices and all the possibilities. Build your travel brief in four easy steps."/><section className="section planner-section"><div className="container"><TripPlanner/></div></section></>}
