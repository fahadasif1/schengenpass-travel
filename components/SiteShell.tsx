'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowRight, Compass, Heart, Instagram, Mail, Menu, Phone, X, ArrowUpRight } from 'lucide-react';
import { brand } from '@/lib/data';
const links = [
  {label:'Destinations',href:'/destinations'}, {label:'Experiences',href:'/experiences'},
  {label:'Trip planner',href:'/plan'}, {label:'Journal',href:'/journal'}, {label:'About',href:'/about'}
];
export function Header() {
  const [opened,setOpened]=useState(false); const [savedCount,setSavedCount]=useState(0);
  const path=usePathname();
  useEffect(()=>setOpened(false),[path]);
  useEffect(()=>{
    const sync=()=>{ try {setSavedCount(JSON.parse(localStorage.getItem('sp-favourites')||'[]').length);}catch{setSavedCount(0);} };
    sync(); window.addEventListener('sp:favourites',sync); window.addEventListener('storage',sync);
    return ()=>{window.removeEventListener('sp:favourites',sync);window.removeEventListener('storage',sync);};
  },[]);
  return <>
    <div className="topline"><div className="container top-inner"><span>Curious about somewhere new? <Link href="/plan">Start dreaming <ArrowUpRight size={12}/></Link></span><span>Independent travel inspiration · United Kingdom</span></div></div>
    <header className="site-header"><div className="container header-inner">
      <Link className="brand" href="/" aria-label="SchengenPass Travel home"><span className="brand-mark"><Compass size={22} strokeWidth={1.7}/></span><span className="brand-word">SCHENGENPASS <small>TRAVEL & JOURNEYS</small></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(l=><Link key={l.href} className={path===l.href||path.startsWith(l.href+'/')?'active':''} href={l.href}>{l.label}</Link>)}</nav>
      <div className="header-actions"><Link className="save-link" href="/saved" aria-label={`Saved destinations ${savedCount}`}><Heart size={18}/>{savedCount>0&&<span className="saved-bubble">{savedCount}</span>}</Link><Link className="btn btn-dark header-cta" href="/contact">Let's talk <ArrowUpRight size={16}/></Link><button className="menu-button" aria-expanded={opened} aria-label={opened?'Close menu':'Open menu'} onClick={()=>setOpened(!opened)}>{opened?<X/>:<Menu/>}</button></div>
    </div></header>
    {opened&&<div className="mobile-navigation"><nav aria-label="Mobile navigation">{links.map(l=><Link href={l.href} key={l.href}>{l.label}<ArrowUpRight size={16}/></Link>)}<Link href="/saved">Saved places <Heart size={17}/></Link><Link href="/contact">Get in touch <ArrowUpRight size={16}/></Link></nav></div>}
  </>;
}
export function Footer() { return <footer className="site-footer">
  <div className="container"><div className="footer-top"><div className="footer-story"><Link className="brand footer-brand" href="/"><span className="brand-mark"><Compass size={22}/></span><span className="brand-word">SCHENGENPASS <small>TRAVEL & JOURNEYS</small></span></Link><h2>Make room for<br/><em>somewhere new.</em></h2><p>Discover beautiful destinations, find your travel style and start planning experiences worth remembering.</p><Link href="/plan" className="btn btn-cream">Start planning <ArrowUpRight size={17}/></Link></div>
  <div className="footer-links"><div><b>Explore</b><Link href="/destinations">Destinations</Link><Link href="/experiences">Experiences</Link><Link href="/plan">Plan a trip</Link><Link href="/saved">Saved places</Link></div><div><b>Company</b><Link href="/about">Our story</Link><Link href="/journal">Travel journal</Link><Link href="/faq">FAQs</Link><Link href="/contact">Contact us</Link></div><div><b>Get in touch</b><a href={`mailto:${brand.email}`}><Mail size={14}/> {brand.email}</a><a href={`tel:${brand.phone.replace(/\s/g,'')}`}><Phone size={14}/> {brand.phone}</a><span>United Kingdom</span></div></div></div>
  <div className="footer-bottom"><span>© {new Date().getFullYear()} SchengenPass Travel. A travel discovery and enquiry website.</span><span><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/faq">FAQs</Link></span></div><p className="footer-disclaimer">This website does not take payments, issue tickets or confirm travel bookings. Destination content is inspirational and subject to change. Legal trading details require confirmation before launch.</p></div>
</footer> }
export function SectionEyebrow({children,light=false}:{children:React.ReactNode;light?:boolean}) {return <div className={`section-eyebrow ${light?'eyebrow-light':''}`}><span className="eyebrow-line"/>{children}</div>}
export function SectionHeading({eyebrow,title,description,light=false}:{eyebrow:string;title:React.ReactNode;description?:string;light?:boolean}) {return <div className={`section-heading ${light?'text-light':''}`}><div><SectionEyebrow light={light}>{eyebrow}</SectionEyebrow><h2>{title}</h2></div>{description&&<p>{description}</p>}</div>}
export function PageBanner({eyebrow,title,description}:{eyebrow:string;title:React.ReactNode;description:string}) {return <section className="page-banner"><div className="container"><SectionEyebrow>{eyebrow}</SectionEyebrow><h1>{title}</h1><p>{description}</p></div><span className="banner-orb"/></section>}
export function CTASection(){return <section className="cta-section"><div className="container cta-inner"><div><SectionEyebrow light>THE WORLD IS WAITING</SectionEyebrow><h2>The next great story<br/>starts <em>somewhere.</em></h2><p>Tell us the kind of journey you are dreaming about, and we will help you turn your ideas into a thoughtful travel brief.</p><Link href="/plan" className="btn btn-cream">Plan my journey <ArrowRight size={17}/></Link></div><div className="cta-decoration"><span className="cta-circle"><Compass size={94} strokeWidth={.55}/></span><span className="tiny-star star-one">✳</span><span className="tiny-star star-two">✳</span></div></div></section>}
