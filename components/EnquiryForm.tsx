'use client';

import {FormEvent, useState} from 'react';
import {ArrowRight, Copy, Mail, ShieldCheck} from 'lucide-react';
import Link from 'next/link';
import {brand} from '@/lib/data';

export type EnquiryPayload = {
  name: string;
  email: string;
  phone?: string;
  destination: string;
  dates?: string;
  travellers?: string;
  budget?: string;
  message: string;
  consent: boolean;
};

export function EnquiryForm({initialDestination = '', initialMessage = '', compact = false}: {
  initialDestination?: string;
  initialMessage?: string;
  compact?: boolean;
}) {
  const [form, setForm] = useState<EnquiryPayload>({
    name: '', email: '', phone: '', destination: initialDestination,
    dates: '', travellers: '', budget: '', message: initialMessage, consent: false
  });
  const [openedEmail, setOpenedEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  function set<K extends keyof EnquiryPayload>(key: K, value: EnquiryPayload[K]) {
    setForm(current => ({...current, [key]: value}));
  }

  function compose() {
    return `Travel enquiry — SchengenPass Travel\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'Not supplied'}\nDestination: ${form.destination || 'Open to ideas'}\nTravel dates: ${form.dates || 'Flexible'}\nTravellers: ${form.travellers || 'Not specified'}\nBudget: ${form.budget || 'Not specified'}\n\n${form.message}`;
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Travel enquiry: ${form.destination || 'New journey'}`);
    const body = encodeURIComponent(compose());
    setOpenedEmail(true);
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
  }

  async function copyDetails() {
    try {
      await navigator.clipboard.writeText(compose());
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return <div className={`enquiry-panel ${compact ? 'enquiry-compact' : ''}`}>
    <form onSubmit={submit}>
      <div className="form-intro"><span className="form-icon"><Mail size={19}/></span><div><h3>Tell us about your journey</h3><p>No commitment. No booking or payment at this stage.</p></div></div>
      <div className="form-grid">
        <label>Full name <span>*</span><input required minLength={2} maxLength={100} value={form.name} onChange={e => set('name', e.target.value)} placeholder="Your full name" autoComplete="name"/></label>
        <label>Email address <span>*</span><input required type="email" maxLength={200} value={form.email} onChange={e => set('email', e.target.value)} placeholder="you@example.com" autoComplete="email"/></label>
        <label>Phone (optional)<input type="tel" maxLength={50} value={form.phone || ''} onChange={e => set('phone', e.target.value)} placeholder="+44 ..." autoComplete="tel"/></label>
        <label>Where would you like to go?<input maxLength={150} value={form.destination} onChange={e => set('destination', e.target.value)} placeholder="A country, city or open to ideas"/></label>
        {!compact && <>
          <label>When are you thinking?<input maxLength={100} value={form.dates || ''} onChange={e => set('dates', e.target.value)} placeholder="e.g. Spring next year"/></label>
          <label>People travelling<input maxLength={50} value={form.travellers || ''} onChange={e => set('travellers', e.target.value)} placeholder="e.g. 2 adults"/></label>
        </>}
      </div>
      <label className="form-full">Tell us more <span>*</span><textarea required minLength={10} maxLength={4000} rows={5} value={form.message} onChange={e => set('message', e.target.value)} placeholder="What sort of places, experiences and pace would make this trip special?"/></label>
      <label className="consent-check"><input type="checkbox" checked={form.consent} onChange={e => set('consent', e.target.checked)} required/><span>I agree to my details being used to respond to this travel enquiry. I have read the <Link href="/privacy" target="_blank">Privacy information</Link>.</span></label>
      <button className="btn btn-dark full-submit" type="submit">Open email app <ArrowRight size={17}/></button>
      <div className="form-privacy"><ShieldCheck size={16}/> Your email app will open with the enquiry filled in. Review it and press Send there.</div>
      {openedEmail && <div className="form-fallback" role="status"><strong>Email draft opened.</strong><p>If no email app opened, copy the details and email them to <a href={`mailto:${brand.email}`}>{brand.email}</a>. Your enquiry has not been sent from this page.</p><div className="form-fallback-actions"><button className="btn btn-soft" type="button" onClick={copyDetails}>{copied ? 'Copied details' : 'Copy details'} <Copy size={15}/></button></div></div>}
    </form>
  </div>;
}
