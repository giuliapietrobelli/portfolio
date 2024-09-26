"use client";
import { Mail } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [submitted, setSubmitted] = useState(false); // Stato per tracciare se il form è stato inviato
  const [isSubmitting, setIsSubmitting] = useState(false); // Stato per evitare invii multipli

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Evita invii multipli
    if (isSubmitting) return;
    setIsSubmitting(true);
    setStatus('Invio in corso...');

    const submissionData = {
      ...formData,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData), // Invia i dati con la data
      });

      if (response.ok) {
        const result = await response.json();
        setStatus('Form inviato con successo!');
        setFormData({ name: '', email: '', message: '', }); // Pulisci il form
        setSubmitted(true); // Indica che il form è stato inviato
      } else {
        const errorResult = await response.json();
        setStatus(errorResult.error);
      }
    } catch (error) {
      setStatus('Errore durante l\'invio del form.');
    } finally {
      setIsSubmitting(false); // Riabilita il pulsante dopo l'invio
    }
  };

const handleClick = () => {
  setSubmitted(false); // Nascondi il messaggio di conferma quando si fa clic
};

  return (
    <div className="container flex flex-col items-center gap-6 md:gap-10 py-60">
      <h2 className="text-center font-medium text-3xl">let&apos;s get in touch!</h2>
      {submitted && (
        <p className="text-sm text-green-600">
        Your message has been successfully submitted!
        </p>
      )}
      <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-center min-w-80 max-w-2xl">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onClick={handleClick}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onClick={handleClick} 
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onClick={handleClick} 
            required
            className="mt-1 block w-full min-h-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="py-5 px-8 text-sm bg-zinc-700 hover:bg-zinc-600 transition-all border-0 text-white m-8"
            disabled={isSubmitting} // Disabilita il pulsante durante l'invio
          >
            {isSubmitting ? 'Submitting...' : 'Send your message'}
          </button>
        </div>
      </form>
    </div>
  );
}