/**
 * Coming Soon Landing Page - Launching January 1st, 2027
 * Clean, plain contact & phone test interface without provider name or location.
 * Phone: (203) 249-4478
 * Email: info@camchildpyschology.com
 * Includes Google Sites Embed code exporter for easy 1-click copying.
 */

import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MessageSquare,
  CheckCircle2,
  Copy,
  Check,
  Send,
  Calendar,
  Sparkles,
  ArrowRight,
  RotateCcw,
  ExternalLink,
  Code2,
  X
} from 'lucide-react';
import { BrighthouseLogo } from './components/BrighthouseLogo.tsx';
import { PRACTICE_CONTACT_CONFIG } from './config/practiceContact.ts';

// Self-contained HTML code snippet ready to paste into Google Sites (Embed > Embed code)
const GOOGLE_SITES_STANDALONE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Coming Soon · January 1st, 2027</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Outfit:wght@500;600;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; }
    h1, h2, h3, .font-display { font-family: 'Outfit', -apple-system, sans-serif; }
  </style>
</head>
<body class="bg-[#FAFCFD] text-[#1B2A4A] min-h-screen flex flex-col p-4 sm:p-8">
  <!-- Minimal Header -->
  <div class="max-w-3xl w-full mx-auto bg-white border border-[#E8EEF3] rounded-2xl p-4 sm:p-6 mb-8 flex flex-wrap items-center justify-between gap-4 shadow-xs">
    <div class="flex items-center gap-2.5">
      <div class="w-8 h-8 rounded-full bg-[#1B2A4A] text-white flex items-center justify-center font-bold text-xs tracking-wider">
        CAM
      </div>
      <div class="border-l border-[#7A9A8B]/60 pl-2.5">
        <div class="text-xs font-extrabold uppercase tracking-wider text-[#1B2A4A] leading-tight">Child &amp; Family</div>
        <div class="text-xs font-extrabold uppercase tracking-wider text-[#1B2A4A] leading-tight">Psychology</div>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <a href="tel:+12032494478" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#F1F5F8] text-[#1B2A4A] hover:bg-[#E2ECF5] transition">
        <span>📞</span> (203) 249-4478
      </a>
      <a href="mailto:info@camchildpyschology.com" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#1B2A4A] text-white hover:bg-[#253961] transition">
        <span>✉️</span> Email Us
      </a>
    </div>
  </div>

  <!-- Announcement -->
  <div class="max-w-2xl w-full mx-auto text-center mb-8">
    <div class="inline-block px-3.5 py-1.5 rounded-full bg-[#FAF3E0] border border-[#E9D9AB] text-[#8C6D1F] text-xs font-semibold tracking-wide uppercase mb-3">
      📅 Launching January 1st, 2027
    </div>
    <h1 class="text-3xl sm:text-4xl font-bold tracking-tight text-[#1B2A4A]">Coming Soon</h1>
    <p class="mt-3 text-base text-[#486581]">
      Our new practice website is currently under preparation and will launch on <strong>January 1st, 2027</strong>.
    </p>
    <p class="mt-1 text-xs text-[#627D98]">
      Please use the verified contact channels below to test phone routing and messages.
    </p>
  </div>

  <!-- Direct Contact Cards -->
  <div class="max-w-3xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
    <!-- Phone Card -->
    <div class="bg-white border border-[#E8EEF3] rounded-2xl p-5 shadow-xs">
      <div class="text-xs font-bold uppercase tracking-wider text-[#627D98]">Practice Phone Number</div>
      <div class="text-2xl font-bold text-[#1B2A4A] mt-1">(203) 249-4478</div>
      <p class="text-xs text-[#627D98] mt-1.5">Direct phone line for inquiries and consultation testing.</p>
      <div class="mt-4 flex gap-2">
        <a href="tel:+12032494478" class="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-[#1B2A4A] text-white hover:bg-[#253961]">Call Now</a>
        <a href="sms:+12032494478?body=Hello,%20I%20would%20like%20to%20inquire%20about%20services." class="px-3.5 py-1.5 text-xs font-medium rounded-lg border border-[#D5E0EA] bg-white text-[#1B2A4A] hover:bg-[#F8FAFB]">SMS</a>
      </div>
    </div>
    <!-- Email Card -->
    <div class="bg-white border border-[#E8EEF3] rounded-2xl p-5 shadow-xs">
      <div class="text-xs font-bold uppercase tracking-wider text-[#627D98]">Inquiry Email Address</div>
      <div class="text-xl font-bold text-[#1B2A4A] mt-1 break-all">info@camchildpyschology.com</div>
      <p class="text-xs text-[#627D98] mt-1.5">All electronic test inquiries route to this address.</p>
      <div class="mt-4">
        <a href="mailto:info@camchildpyschology.com" class="inline-block px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-[#1B2A4A] text-white hover:bg-[#253961]">Send Email</a>
      </div>
    </div>
  </div>

  <!-- Interactive Contact Test Form -->
  <div class="max-w-3xl w-full mx-auto bg-white border border-[#E8EEF3] rounded-2xl p-6 sm:p-8 shadow-xs">
    <div class="flex justify-between items-center mb-5 pb-4 border-b border-[#F0F4F8]">
      <div>
        <h2 class="text-xl font-bold text-[#1B2A4A]">Practice Contact Page</h2>
        <p class="text-xs text-[#627D98]">Test message submission and verification</p>
      </div>
      <button onclick="fillSampleData()" type="button" class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#FAF3E0] text-[#8C6D1F] hover:bg-[#F4E9C8] transition">
        Fill Sample Data
      </button>
    </div>

    <form id="contactForm" onsubmit="handleFormSubmit(event)" class="space-y-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-semibold text-[#1B2A4A] mb-1">Your Name *</label>
          <input type="text" id="nameInput" required placeholder="Full Name" class="w-full px-3 py-2 text-sm rounded-lg border border-[#D5E0EA] bg-white">
        </div>
        <div>
          <label class="block text-xs font-semibold text-[#1B2A4A] mb-1">Email Address *</label>
          <input type="email" id="emailInput" required placeholder="name@example.com" class="w-full px-3 py-2 text-sm rounded-lg border border-[#D5E0EA] bg-white">
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-semibold text-[#1B2A4A] mb-1">Phone Number *</label>
          <input type="tel" id="phoneInput" required placeholder="(203) 000-0000" class="w-full px-3 py-2 text-sm rounded-lg border border-[#D5E0EA] bg-white">
        </div>
        <div>
          <label class="block text-xs font-semibold text-[#1B2A4A] mb-1">Inquiry Topic</label>
          <select id="topicInput" class="w-full px-3 py-2 text-sm rounded-lg border border-[#D5E0EA] bg-white">
            <option>General Practice Inquiry</option>
            <option>Child Assessment / Evaluation</option>
            <option>Therapy Consultation</option>
            <option>School Support & Advocacy</option>
            <option>Scheduling / Other</option>
          </select>
        </div>
      </div>
      <div>
        <label class="block text-xs font-semibold text-[#1B2A4A] mb-1">Message *</label>
        <textarea id="messageInput" required rows="3" placeholder="How can we assist you?" class="w-full px-3 py-2 text-sm rounded-lg border border-[#D5E0EA] bg-white"></textarea>
      </div>
      <div class="flex items-center justify-between pt-2">
        <button type="submit" class="px-5 py-2.5 text-xs font-semibold rounded-xl bg-[#1B2A4A] text-white hover:bg-[#253961] transition">
          Submit Test Inquiry
        </button>
        <span class="text-[11px] text-[#627D98]">Routes to info@camchildpyschology.com</span>
      </div>
    </form>

    <!-- Success Message Card (Hidden initially) -->
    <div id="successCard" class="hidden text-center py-6">
      <div class="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">✓</div>
      <h3 class="text-lg font-bold text-[#1B2A4A]">Test Message Received Successfully</h3>
      <p class="text-xs text-[#627D98] mt-1 mb-4">All fields validated and processed.</p>
      <div id="summaryDetails" class="p-4 bg-[#F8FAFB] border border-[#E8EEF3] rounded-xl text-left text-xs space-y-1 mb-5"></div>
      <div class="flex justify-center gap-3">
        <a id="mailClientLink" href="#" class="px-4 py-2 text-xs font-semibold rounded-lg bg-[#1B2A4A] text-white hover:bg-[#253961]">Send via Mail Client</a>
        <button type="button" onclick="resetForm()" class="px-4 py-2 text-xs font-medium rounded-lg border border-[#D5E0EA] bg-white text-[#1B2A4A]">Submit Another</button>
      </div>
    </div>
  </div>

  <footer class="mt-8 text-center text-xs text-[#627D98]">
    © 2027 CAM Child &amp; Family Psychology · Phone: (203) 249-4478 · Email: info@camchildpyschology.com
  </footer>

  <script>
    function fillSampleData() {
      document.getElementById('nameInput').value = 'Jordan Taylor';
      document.getElementById('emailInput').value = 'jordan.taylor@example.com';
      document.getElementById('phoneInput').value = '(203) 555-9876';
      document.getElementById('topicInput').value = 'General Practice Inquiry';
      document.getElementById('messageInput').value = 'Hello, this is a test inquiry to verify the contact form for the coming soon website.';
    }

    function handleFormSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('nameInput').value;
      const email = document.getElementById('emailInput').value;
      const phone = document.getElementById('phoneInput').value;
      const topic = document.getElementById('topicInput').value;
      const message = document.getElementById('messageInput').value;

      document.getElementById('contactForm').classList.add('hidden');
      document.getElementById('successCard').classList.remove('hidden');

      document.getElementById('summaryDetails').innerHTML = 
        '<div><strong>Name:</strong> ' + name + '</div>' +
        '<div><strong>Email:</strong> ' + email + '</div>' +
        '<div><strong>Phone:</strong> ' + phone + '</div>' +
        '<div><strong>Topic:</strong> ' + topic + '</div>' +
        '<div class="pt-1 italic">"' + message + '"</div>';

      const subject = encodeURIComponent('[Inquiry] ' + topic + ' from ' + name);
      const body = encodeURIComponent('Name: ' + name + '\\nEmail: ' + email + '\\nPhone: ' + phone + '\\nTopic: ' + topic + '\\n\\nMessage:\\n' + message);
      document.getElementById('mailClientLink').href = 'mailto:info@camchildpyschology.com?subject=' + subject + '&body=' + body;
    }

    function resetForm() {
      document.getElementById('contactForm').reset();
      document.getElementById('contactForm').classList.remove('hidden');
      document.getElementById('successCard').classList.add('hidden');
    }
  </script>
</body>
</html>`;

export default function App() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);

  // Google Sites Code Export Modal state
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [copiedSnippetType, setCopiedSnippetType] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'General Inquiry',
    preferredContact: 'Email',
    message: '',
  });

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PRACTICE_CONTACT_CONFIG.phone.display);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PRACTICE_CONTACT_CONFIG.email.display);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFillTestData = () => {
    setFormData({
      fullName: 'Jordan Taylor',
      email: 'jordan.taylor@example.com',
      phone: '(203) 555-9876',
      inquiryType: 'General Inquiry',
      preferredContact: 'Phone',
      message: 'Hello, this is a test inquiry to verify the contact form and messaging workflow for the coming soon website.',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setSubmittedData({
        ...formData,
        timestamp: new Date().toLocaleString(),
      });
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 450);
  };

  const handleReset = () => {
    setFormSubmitted(false);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      inquiryType: 'General Inquiry',
      preferredContact: 'Email',
      message: '',
    });
  };

  const mailtoUrl = submittedData
    ? `mailto:${PRACTICE_CONTACT_CONFIG.email.display}?subject=${encodeURIComponent(
        `[Test Inquiry] ${submittedData.inquiryType} from ${submittedData.fullName}`
      )}&body=${encodeURIComponent(
        `Name: ${submittedData.fullName}\nEmail: ${submittedData.email}\nPhone: ${submittedData.phone}\nPreferred Contact: ${submittedData.preferredContact}\nDate: ${submittedData.timestamp}\n\nMessage:\n${submittedData.message}`
      )}`
    : `mailto:${PRACTICE_CONTACT_CONFIG.email.display}?subject=${encodeURIComponent(
        'Practice Inquiry'
      )}`;

  // Live App URL for iframe embedding
  const liveAppUrl = window.location.origin || 'https://ais-pre-bexwqpcl5joqw32qbezrff-523732603069.us-west1.run.app';

  const iframeSnippet = `<iframe 
  src="${liveAppUrl}" 
  width="100%" 
  height="900" 
  style="border: none; width: 100%; min-height: 850px; border-radius: 12px; overflow: auto;" 
  allow="clipboard-write">
</iframe>`;

  const copyCodeToClipboard = (code: string, type: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippetType(type);
    setTimeout(() => setCopiedSnippetType(null), 2500);
  };

  return (
    <div className="min-h-screen bg-[#FAFCFD] text-[#1B2A4A] flex flex-col font-sans selection:bg-[#E2ECF5] selection:text-[#1B2A4A]">
      {/* Minimal Plain Header */}
      <header className="w-full bg-white border-b border-[#E8EEF3] sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3">
          <BrighthouseLogo size="default" />

          {/* Quick Header Contacts & Google Sites Code Action */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setShowCodeModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-lg border border-[#D5E0EA] bg-white text-[#1B2A4A] hover:bg-[#F8FAFB] transition-colors cursor-pointer"
              title="Get HTML code for Google Sites"
            >
              <Code2 size={14} className="text-[#C59B27]" />
              <span className="hidden md:inline">Google Sites Code</span>
              <span className="md:hidden">HTML</span>
            </button>

            <a
              href={`tel:${PRACTICE_CONTACT_CONFIG.phone.raw}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-lg bg-[#F1F5F8] text-[#1B2A4A] hover:bg-[#E2ECF5] transition-colors"
            >
              <Phone size={14} className="text-[#C59B27]" />
              <span className="hidden sm:inline">{PRACTICE_CONTACT_CONFIG.phone.display}</span>
              <span className="sm:hidden">Call</span>
            </a>

            <a
              href={`mailto:${PRACTICE_CONTACT_CONFIG.email.display}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-lg bg-[#1B2A4A] text-white hover:bg-[#253961] transition-colors"
            >
              <Mail size={14} />
              <span className="hidden sm:inline">Email Us</span>
              <span className="sm:hidden">Email</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Banner with Google Sites Helper Callout */}
        <div className="mb-8 p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-[#FAF3E0] to-[#F1F5F8] border border-[#E9D9AB] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#8C6D1F]">
            <Code2 size={16} className="text-[#C59B27] shrink-0" />
            <span className="font-medium text-[#1B2A4A]">
              Need to paste this into <strong>sites.google.com</strong>? Click to copy the ready-to-paste embed code.
            </span>
          </div>
          <button
            type="button"
            onClick={() => setShowCodeModal(true)}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#1B2A4A] text-white rounded-lg font-semibold hover:bg-[#253961] transition-colors shrink-0 cursor-pointer"
          >
            <Copy size={12} />
            <span>Get Google Sites Code</span>
          </button>
        </div>

        {/* Coming Soon Notice */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF3E0] border border-[#E9D9AB] text-[#8C6D1F] text-xs font-semibold tracking-wide uppercase mb-4">
            <Calendar size={13} className="text-[#C59B27]" />
            <span>Launching {PRACTICE_CONTACT_CONFIG.launchDateFull}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1B2A4A] font-display">
            Coming Soon
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#486581] leading-relaxed">
            Our new practice website is currently under preparation and will launch on{' '}
            <span className="font-semibold text-[#1B2A4A]">{PRACTICE_CONTACT_CONFIG.launchDateFull}</span>.
          </p>

          <p className="mt-2 text-sm text-[#627D98]">
            For testing contact channels, phone routing, or inquiries, please use the verified channels below.
          </p>
        </div>

        {/* Primary Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {/* Phone Card */}
          <div className="bg-white border border-[#E8EEF3] rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#FAF3E0] text-[#C59B27] flex items-center justify-center mb-4">
                <Phone size={20} />
              </div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#627D98]">
                Practice Phone Number
              </h2>
              <p className="mt-1 text-2xl font-bold text-[#1B2A4A] tracking-tight">
                {PRACTICE_CONTACT_CONFIG.phone.display}
              </p>
              <p className="mt-2 text-xs text-[#627D98] leading-relaxed">
                Click below to test direct call dialing, mobile SMS routing, or copy to clipboard.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-[#F0F4F8]">
              <a
                href={`tel:${PRACTICE_CONTACT_CONFIG.phone.raw}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-[#1B2A4A] text-white hover:bg-[#253961] transition-colors"
              >
                <Phone size={13} />
                <span>Call Now</span>
              </a>

              <a
                href={`sms:${PRACTICE_CONTACT_CONFIG.phone.raw}?body=${encodeURIComponent(
                  PRACTICE_CONTACT_CONFIG.phone.smsPrefill
                )}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg border border-[#D5E0EA] bg-white text-[#1B2A4A] hover:bg-[#F8FAFB] transition-colors"
              >
                <MessageSquare size={13} />
                <span>SMS</span>
              </a>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg text-[#486581] hover:text-[#1B2A4A] hover:bg-[#F1F5F8] transition-colors cursor-pointer"
                title="Copy phone number"
              >
                {copiedPhone ? (
                  <>
                    <Check size={13} className="text-emerald-600" />
                    <span className="text-emerald-600 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white border border-[#E8EEF3] rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EEF4F0] text-[#7A9A8B] flex items-center justify-center mb-4">
                <Mail size={20} />
              </div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#627D98]">
                Inquiry Email Address
              </h2>
              <p className="mt-1 text-xl sm:text-2xl font-bold text-[#1B2A4A] tracking-tight break-all">
                {PRACTICE_CONTACT_CONFIG.email.display}
              </p>
              <p className="mt-2 text-xs text-[#627D98] leading-relaxed">
                Direct inquiries and message testing route to this mailbox.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-[#F0F4F8]">
              <a
                href={`mailto:${PRACTICE_CONTACT_CONFIG.email.display}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-[#1B2A4A] text-white hover:bg-[#253961] transition-colors"
              >
                <Mail size={13} />
                <span>Send Email</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg text-[#486581] hover:text-[#1B2A4A] hover:bg-[#F1F5F8] transition-colors cursor-pointer"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check size={13} className="text-emerald-600" />
                    <span className="text-emerald-600 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Contact Page / Form Testing Section */}
        <div id="contact-form-section" className="bg-white border border-[#E8EEF3] rounded-2xl p-6 sm:p-10 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#F0F4F8]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C59B27]">
                Contact Testing
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1B2A4A] font-display mt-0.5">
                Practice Contact Page
              </h2>
              <p className="text-xs sm:text-sm text-[#486581] mt-1">
                Fill out and test the message delivery workflow.
              </p>
            </div>

            {!formSubmitted && (
              <button
                type="button"
                onClick={handleFillTestData}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-[#FAF3E0] text-[#8C6D1F] hover:bg-[#F4E9C8] transition-colors self-start sm:self-auto cursor-pointer"
              >
                <Sparkles size={13} />
                <span>Fill Sample Test Data</span>
              </button>
            )}
          </div>

          {formSubmitted ? (
            /* Successful Submission Confirmation Card */
            <div className="py-8 sm:py-10 text-center max-w-xl mx-auto">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                <CheckCircle2 size={32} />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#1B2A4A]">
                Test Message Received Successfully
              </h3>

              <p className="mt-2 text-sm text-[#486581]">
                The contact form submitted without errors. Below are the recorded details:
              </p>

              {/* Submitted Details Review Box */}
              <div className="mt-6 p-5 rounded-xl bg-[#F8FAFB] border border-[#E8EEF3] text-left text-xs sm:text-sm space-y-2.5">
                <div className="flex justify-between border-b border-[#E8EEF3] pb-2">
                  <span className="text-[#627D98] font-medium">Recipient Mailbox:</span>
                  <span className="font-semibold text-[#1B2A4A]">{PRACTICE_CONTACT_CONFIG.email.display}</span>
                </div>
                <div className="flex justify-between border-b border-[#E8EEF3] pb-2">
                  <span className="text-[#627D98] font-medium">Practice Phone:</span>
                  <span className="font-semibold text-[#1B2A4A]">{PRACTICE_CONTACT_CONFIG.phone.display}</span>
                </div>
                <div className="flex justify-between border-b border-[#E8EEF3] pb-2">
                  <span className="text-[#627D98] font-medium">Sender Name:</span>
                  <span className="font-semibold text-[#1B2A4A]">{submittedData?.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-[#E8EEF3] pb-2">
                  <span className="text-[#627D98] font-medium">Sender Email:</span>
                  <span className="font-semibold text-[#1B2A4A]">{submittedData?.email}</span>
                </div>
                <div className="flex justify-between border-b border-[#E8EEF3] pb-2">
                  <span className="text-[#627D98] font-medium">Sender Phone:</span>
                  <span className="font-semibold text-[#1B2A4A]">{submittedData?.phone}</span>
                </div>
                <div className="flex justify-between border-b border-[#E8EEF3] pb-2">
                  <span className="text-[#627D98] font-medium">Inquiry Type:</span>
                  <span className="font-semibold text-[#1B2A4A]">{submittedData?.inquiryType}</span>
                </div>
                <div className="flex justify-between border-b border-[#E8EEF3] pb-2">
                  <span className="text-[#627D98] font-medium">Preferred Contact:</span>
                  <span className="font-semibold text-[#1B2A4A]">{submittedData?.preferredContact}</span>
                </div>
                <div className="pt-1">
                  <span className="text-[#627D98] font-medium block mb-1">Message Content:</span>
                  <p className="p-3 rounded-lg bg-white border border-[#E8EEF3] text-[#2C4B68] text-xs leading-relaxed italic">
                    "{submittedData?.message}"
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={mailtoUrl}
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-[#1B2A4A] text-white hover:bg-[#253961] transition-colors"
                >
                  <Mail size={14} />
                  <span>Send via Mail Client</span>
                  <ExternalLink size={12} />
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium rounded-xl border border-[#D5E0EA] bg-white text-[#1B2A4A] hover:bg-[#F8FAFB] transition-colors cursor-pointer"
                >
                  <RotateCcw size={14} />
                  <span>Submit Another Test</span>
                </button>
              </div>
            </div>
          ) : (
            /* Active Form */
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-[#1B2A4A] mb-1.5">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Full name"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5E0EA] bg-white text-[#1B2A4A] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#1B2A4A]/20 focus:border-[#1B2A4A] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[#1B2A4A] mb-1.5">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5E0EA] bg-white text-[#1B2A4A] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#1B2A4A]/20 focus:border-[#1B2A4A] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-[#1B2A4A] mb-1.5">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(203) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5E0EA] bg-white text-[#1B2A4A] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#1B2A4A]/20 focus:border-[#1B2A4A] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-xs font-semibold text-[#1B2A4A] mb-1.5">
                    Inquiry Topic
                  </label>
                  <select
                    id="inquiryType"
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5E0EA] bg-white text-[#1B2A4A] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#1B2A4A]/20 focus:border-[#1B2A4A] transition-all"
                  >
                    <option value="General Inquiry">General Practice Inquiry</option>
                    <option value="Child Assessment">Child Assessment / Evaluation</option>
                    <option value="Therapy Consultation">Therapy Consultation</option>
                    <option value="School Support & Advocacy">School Support & Advocacy</option>
                    <option value="Scheduling / Other">Scheduling / Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1B2A4A] mb-1.5">
                  Preferred Contact Method
                </label>
                <div className="flex flex-wrap items-center gap-3">
                  {['Email', 'Phone', 'Text Message'].map((method) => (
                    <label
                      key={method}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border text-xs font-medium cursor-pointer transition-all ${
                        formData.preferredContact === method
                          ? 'border-[#1B2A4A] bg-[#1B2A4A] text-white shadow-2xs'
                          : 'border-[#D5E0EA] bg-white text-[#486581] hover:bg-[#F8FAFB]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="preferredContact"
                        value={method}
                        checked={formData.preferredContact === method}
                        onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                        className="sr-only"
                      />
                      <span>{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-[#1B2A4A] mb-1.5">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we assist you?"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5E0EA] bg-white text-[#1B2A4A] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#1B2A4A]/20 focus:border-[#1B2A4A] transition-all resize-y"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex justify-center items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold rounded-xl bg-[#1B2A4A] text-white hover:bg-[#253961] disabled:opacity-50 shadow-xs transition-colors cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Submit Test Inquiry</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-[#627D98] text-center sm:text-right">
                  Submissions are routed to {PRACTICE_CONTACT_CONFIG.email.display}
                </p>
              </div>
            </form>
          )}
        </div>
      </main>

      {/* Minimal Plain Footer */}
      <footer className="w-full border-t border-[#E8EEF3] bg-white py-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#627D98]">
          <div className="flex items-center gap-3">
            <span>© 2027 CAM Child &amp; Family Psychology</span>
            <span>·</span>
            <span>Launching {PRACTICE_CONTACT_CONFIG.launchDateFull}</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${PRACTICE_CONTACT_CONFIG.phone.raw}`}
              className="hover:text-[#1B2A4A] transition-colors"
            >
              {PRACTICE_CONTACT_CONFIG.phone.display}
            </a>
            <span>·</span>
            <a
              href={`mailto:${PRACTICE_CONTACT_CONFIG.email.display}`}
              className="hover:text-[#1B2A4A] transition-colors"
            >
              {PRACTICE_CONTACT_CONFIG.email.display}
            </a>
          </div>
        </div>
      </footer>

      {/* Google Sites Code Export Modal */}
      {showCodeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-2xl max-h-[90vh] bg-white border border-[#E8EEF3] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-[#1B2A4A]">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-[#E8EEF3] bg-[#F8FAFB] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code2 size={20} className="text-[#C59B27]" />
                <div>
                  <h3 className="text-base font-bold text-[#1B2A4A] font-display">
                    Google Sites (sites.google.com) Embed Code
                  </h3>
                  <p className="text-xs text-[#627D98]">Choose either option below to paste into Google Sites</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowCodeModal(false)}
                className="p-1 rounded-lg text-[#627D98] hover:text-[#1B2A4A] hover:bg-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Option 1: Standalone HTML (Recommended for Google Sites) */}
              <div className="p-4 rounded-xl border border-[#D5E0EA] bg-[#F8FAFB]">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#FAF3E0] text-[#8C6D1F] mr-2">
                      Option 1 · Recommended
                    </span>
                    <strong className="text-sm text-[#1B2A4A]">Standalone HTML (Embed Code Tab)</strong>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyCodeToClipboard(GOOGLE_SITES_STANDALONE_HTML, 'standalone')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#1B2A4A] text-white hover:bg-[#253961] transition-colors cursor-pointer"
                  >
                    {copiedSnippetType === 'standalone' ? (
                      <>
                        <Check size={12} className="text-emerald-400" />
                        <span>Copied HTML!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy Full HTML</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs text-[#627D98] mb-3">
                  In Google Sites: Click <strong>Insert</strong> &gt; <strong>Embed</strong> &gt; <strong>Embed code</strong> &gt; Paste this code &gt; Click <strong>Next</strong> &gt; <strong>Insert</strong>.
                </p>
                <div className="p-3 bg-white rounded-lg border border-[#E8EEF3] max-h-36 overflow-y-auto font-mono text-[11px] text-[#486581]">
                  <code>{GOOGLE_SITES_STANDALONE_HTML.slice(0, 450)}... [complete self-contained file]</code>
                </div>
              </div>

              {/* Option 2: iFrame Embed */}
              <div className="p-4 rounded-xl border border-[#D5E0EA] bg-[#F8FAFB]">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#E2ECF5] text-[#2C4B68] mr-2">
                      Option 2
                    </span>
                    <strong className="text-sm text-[#1B2A4A]">iFrame Snippet (Embed Code or By URL)</strong>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyCodeToClipboard(iframeSnippet, 'iframe')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#1B2A4A] text-white hover:bg-[#253961] transition-colors cursor-pointer"
                  >
                    {copiedSnippetType === 'iframe' ? (
                      <>
                        <Check size={12} className="text-emerald-400" />
                        <span>Copied iFrame!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy iFrame</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs text-[#627D98] mb-3">
                  Or paste this URL directly into the <strong>"By URL"</strong> tab: <code className="bg-white px-1.5 py-0.5 rounded border border-[#E8EEF3] text-[#1B2A4A]">{liveAppUrl}</code>
                </p>
                <div className="p-3 bg-white rounded-lg border border-[#E8EEF3] font-mono text-xs text-[#1B2A4A]">
                  <code>{iframeSnippet}</code>
                </div>
              </div>

              {/* Google Sites 3-Step Guide */}
              <div className="p-4 rounded-xl bg-white border border-[#E8EEF3] text-xs space-y-2 text-[#486581]">
                <div className="font-bold text-[#1B2A4A] text-sm">3 Quick Steps in Google Sites:</div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#FAF3E0] text-[#8C6D1F] font-bold flex items-center justify-center shrink-0">1</span>
                  <span>In your Google Sites editor, look at the right sidebar and click <strong>"Insert"</strong> &gt; <strong>"Embed"</strong>.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#FAF3E0] text-[#8C6D1F] font-bold flex items-center justify-center shrink-0">2</span>
                  <span>Choose <strong>"Embed code"</strong> and paste the copied HTML, or choose <strong>"By URL"</strong> and paste your app URL.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#FAF3E0] text-[#8C6D1F] font-bold flex items-center justify-center shrink-0">3</span>
                  <span>Click <strong>"Next"</strong> and then <strong>"Insert"</strong>, then drag the corner handles in Google Sites to make it full width.</span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-[#E8EEF3] bg-[#F8FAFB] flex justify-end">
              <button
                type="button"
                onClick={() => setShowCodeModal(false)}
                className="px-4 py-2 bg-[#1B2A4A] text-white text-xs font-semibold rounded-lg hover:bg-[#253961] transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
