import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {PageBanner,CTASection} from '@/components/SiteShell';
import {guides} from '@/lib/data';
import {imageStyles} from '@/lib/utils';
export const metadata:Metadata={title:'Travel Journal',description:'Travel inspiration, destination notes and ideas for thoughtful adventures.'};
export default function Journal(){return <><PageBanner eyebrow="STORIES FROM THE ROAD" title={<>A little inspiration for <em>the journey.</em></>} description="Places, feelings and ideas to help you see the world a little differently."/><section className="section"><div className="container"><div className="journal-grid listing-journal">{guides.map((g,i)=><Link className="journal-card" key={g.slug} href={`/journal/${g.slug}`}><div className="journal-image" style={imageStyles(g.image)}><span>0{i+1}</span></div><div className="journal-meta">{g.category} <span>·</span> {g.date}</div><h3>{g.title}</h3><p>{g.intro}</p><span className="journal-link">Read story <ArrowUpRight size={16}/></span></Link>)}</div></div></section><CTASection/></>}
