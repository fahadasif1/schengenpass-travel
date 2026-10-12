import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {PageBanner,CTASection,SectionEyebrow} from '@/components/SiteShell';
import {styles} from '@/lib/data';
import {imageStyles} from '@/lib/utils';
export const metadata:Metadata={title:'Travel Experiences',description:'Explore coastal holidays, romantic retreats, city breaks and nature journeys.'};
export default function Experiences(){return <><PageBanner eyebrow="TRAVEL YOUR WAY" title={<>Every feeling has <em>a destination.</em></>} description="There's no one way to see the world. Find experiences that speak to your curiosity, pace and personal style."/><section className="section"><div className="container"><div className="experience-list">{styles.map((s,i)=><Link key={s.slug} href={`/destinations?style=${encodeURIComponent(s.slug)}`} className="experience-feature"><div className="experience-feature-image" style={imageStyles(s.image)}><span className="exp-number">{String(i+1).padStart(2,'0')}</span></div><div className="experience-feature-copy"><SectionEyebrow>{s.caption.toUpperCase()}</SectionEyebrow><h2>{s.name}</h2><p>{s.description}</p><span className="underlined-link">Find your destinations <ArrowUpRight size={17}/></span></div></Link>)}</div></div></section><CTASection/></>}
