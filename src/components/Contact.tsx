import React, { useState } from 'react';
import { Link } from './ui/Link';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
  AlertTriangle,
  MessageCircle,
  Apple as WhatsApp,
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields');
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setFormState('submitting');
    setErrorMessage(null);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || 'New Contact Message',
      message: formData.message,
    };

    try {
      await emailjs.send(
        'service_qc1p2pt',
        'template_53hpq6q',
        templateParams,
        'mbmLoBDpEaQrfihRS'
      );

      setFormState('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setFormState('idle');
      }, 5000);
    } catch (error) {
      console.error(error);
      setFormState('error');
      setErrorMessage('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-600">
            Have a project in mind or want to discuss how I can help with your tech needs? Reach out and let's start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-slate-50 rounded-2xl p-8 order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Your Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Subject of your message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Tell me about your project or inquiry..."
                  required
                ></textarea>
              </div>

              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-start">
                  <AlertTriangle size={18} className="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-red-600">{errorMessage}</p>
                </div>
              )}

              {formState === 'success' && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-green-600">Your message has been sent successfully. I'll get back to you soon!</p>
                </div>
              )}

              <button
                type="submit"
                disabled={formState === 'submitting'}
                className={`w-full py-3 px-6 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center
                ${formState === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {formState === 'submitting' ? (
                  <>
                    <Loader2 size={18} className="mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="order-1 lg:order-2">
            <div className="bg-slate-900 text-white rounded-2xl p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

              <div className="space-y-6 mb-8">
                <ContactInfoItem
                  icon={<Phone size={20} />}
                  title="Phone"
                  details={['+255(0) 762 145 307', '+255(0) 699 145 307']}
                  link="tel:+255762145307"
                />

                <ContactInfoItem
                  icon={<Mail size={20} />}
                  title="Email"
                  details={['mbagiratech47@gmail.com']}
                  link="mailto:mbagiratech47@gmail.com"
                />

                <ContactInfoItem
                  icon={<MapPin size={20} />}
                  title="Location"
                  details={['Tanzania, East Africa']}
                  link="https://www.openstreetmap.org/"
                />

                <ContactInfoItem
                  icon={<WhatsApp size={20} />}
                  title="WhatsApp"
                  details={['Chat directly on WhatsApp']}
                  link="https://wa.me/255699145309"
                />
              </div>

              <div className="mt-auto">
                <div className="p-4 bg-blue-800/40 rounded-lg">
                  <div className="flex items-start">
                    <MessageCircle size={40} className="text-blue-400 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg text-blue-100 mb-1">Quick Response</h4>
                      <p className="text-blue-200 text-sm">
                        I typically respond to all inquiries within 24 hours. For urgent matters, please consider using phone or WhatsApp.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
  link: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, title, details, link }) => {
  return (
    <div className="flex items-start">
      <div className="p-3 bg-blue-800/50 rounded-lg text-blue-300 mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-medium text-blue-100 mb-1">{title}</h4>
        <div className="space-y-1">
          {details.map((detail, index) => (
            <p key={index} className="text-blue-200">{detail}</p>
          ))}
        </div>
        <Link to={link} className="text-blue-400 hover:text-blue-300 inline-block mt-2 text-sm">
          Contact via {title}
        </Link>
      </div>
    </div>
  );
};

export default Contact;
