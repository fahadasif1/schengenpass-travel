import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {PageBanner} from '@/components/SiteShell';
import {faqs} from '@/lib/data';
export const metadata:Metadata={title:'Frequently Asked Questions',description:'Answers about the SchengenPass Travel website, planning enquiries and how the site works.'};
export default function FAQ(){return <><PageBanner eyebrow="GOOD QUESTIONS" title={<>A little clarity <em>goes a long way.</em></>} description="The things you may want to know before getting in touch or planning a journey."/><section className="section"><div className="container faq-layout"><div className="faq-intro"><h2>Wondering about <em>something?</em></h2><p>We're keeping things simple and transparent as this travel experience takes shape.</p><Link href="/contact" className="underlined-link">Ask us directly <ArrowUpRight size={17}/></Link></div><div className="faq-accordion">{faqs.map((item,i)=><details key={item.q} open={i===0}><summary><span>{String(i+1).padStart(2,'0')}</span>{item.q}<b>+</b></summary><div className="faq-answer">{item.a}</div></details>)}</div></div></section></>}
