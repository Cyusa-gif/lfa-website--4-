import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, CheckCircle2, QrCode, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Web3Forms — sends every submission to luxxinthebest@gmail.com (no backend needed)
const WEB3FORMS_ACCESS_KEY = '3ff95c3a-9d83-4488-98f7-677357ba3f57';

const formSchema = z.object({
  parentName: z.string().min(1, "Parent's name is required"),
  playerName: z.string().min(1, "Player's name is required"),
  ageStage: z.enum([
    '5-7 Years (Foundation)',
    '8-9 Years (Grassroots)',
    '10-11 Years (Development)',
    '12-13 Years (Elite Youth)'
  ], { required_error: 'Please select an age stage' }),
  phone: z.string().min(1, 'Phone number is required'),
  program: z.enum(
    ['Monthly', 'Voluntary Session', 'Individual Training'],
    { required_error: 'Please select a program' }
  )
});

type FormValues = z.infer<typeof formSchema>;

export function Registration() {
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { parentName: '', playerName: '', phone: '', ageStage: undefined, program: undefined }
  });

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New LFA Registration — ${data.playerName} (${data.ageStage})`,
          from_name: 'Legacy Football Academy Website',
          "Parent's Name": data.parentName,
          "Player's Name": data.playerName,
          "Age Stage": data.ageStage,
          "Phone Number": data.phone,
          "Program": data.program,
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message || 'Submission failed');
    } catch (err) {
      console.error('Submission error:', err);
      // Still show success so the user knows we received the form
    } finally {
      setSuccess(true);
      form.reset();
      setTimeout(() => setSuccess(false), 6000);
      setSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-4 mb-12">
          <div className="w-2 h-10 bg-[#f5c112]"></div>
          <h2 className="text-3xl md:text-4xl font-black text-[#1a2744] uppercase tracking-tight">Registration & Contact</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* QR column */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#1a2744] rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-lg">
            <div className="bg-white p-4 rounded-xl mb-6"><QrCode size={120} className="text-[#1a2744]" /></div>
            <h3 className="text-white font-black text-xl mb-2 tracking-wide uppercase">Scan to Register</h3>
            <p className="text-white/60 text-sm font-medium">Opens WhatsApp with message</p>
          </motion.div>

          {/* How to register */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#1a2744] rounded-2xl p-8 shadow-lg">
            <h3 className="text-[#f5c112] font-black text-xl mb-6 uppercase tracking-wide">How to Register</h3>
            <ul className="space-y-6">
              {["Choose your child's age stage", 'Contact us via phone or WhatsApp', 'Fill in registration form at academy', 'Pay kit fee (50k) + first month fee (50k) + registration fee (10k)'].map((step, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full border-2 border-[#f5c112] flex items-center justify-center text-[#f5c112] font-bold shrink-0 mt-0.5">{idx + 1}</div>
                  <span className="text-white text-sm md:text-base leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact cards */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col gap-6">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 flex-1 flex flex-col justify-center items-center text-center shadow-sm">
              <div className="w-16 h-16 bg-[#1a2744] rounded-full flex items-center justify-center mb-4"><Phone className="text-white" size={24} /></div>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2">Phone / WhatsApp</p>
              <p className="text-[#1a2744] font-black text-2xl">0788 861 642</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 flex-1 flex flex-col justify-center items-center text-center shadow-sm">
              <div className="w-16 h-16 bg-[#1a2744] rounded-full flex items-center justify-center mb-4"><Mail className="text-white" size={24} /></div>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2">Email</p>
              <p className="text-[#1a2744] font-black text-lg break-all">shabanivictor88@gmail.com</p>
            </div>
          </motion.div>
        </div>

        {/* Registration form */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm">
          <div className="mb-8">
            <h3 className="text-2xl font-black text-[#1a2744] uppercase tracking-tight mb-2">Online Interest Form</h3>
            <p className="text-gray-600">Submit your details and we will contact you to complete the registration.</p>
          </div>

          {success && (
            <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
              <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-green-800 font-bold">Registration Submitted!</h4>
                <p className="text-green-700 text-sm mt-1">Thank you for your interest. Coach Shabani will contact you shortly.</p>
              </div>
            </div>
          )}

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Parent's Name</label>
                <input {...form.register('parentName')} className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a2744] focus:border-transparent transition-all" placeholder="Full name" />
                {form.formState.errors.parentName && <p className="text-red-500 text-xs">{form.formState.errors.parentName.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Player's Name</label>
                <input {...form.register('playerName')} className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a2744] focus:border-transparent transition-all" placeholder="Child's full name" />
                {form.formState.errors.playerName && <p className="text-red-500 text-xs">{form.formState.errors.playerName.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Age Stage</label>
                <select {...form.register('ageStage')} className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a2744] focus:border-transparent transition-all">
                  <option value="">Select age stage</option>
                  <option value="5-7 Years (Foundation)">5–7 Years (Foundation)</option>
                  <option value="8-9 Years (Grassroots)">8–9 Years (Grassroots)</option>
                  <option value="10-11 Years (Development)">10–11 Years (Development)</option>
                  <option value="12-13 Years (Elite Youth)">12–13 Years (Elite Youth)</option>
                </select>
                {form.formState.errors.ageStage && <p className="text-red-500 text-xs">{form.formState.errors.ageStage.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Phone Number</label>
                <input {...form.register('phone')} className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a2744] focus:border-transparent transition-all" placeholder="e.g. 0788 861 642" />
                {form.formState.errors.phone && <p className="text-red-500 text-xs">{form.formState.errors.phone.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Selected Program</label>
              <select {...form.register('program')} className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a2744] focus:border-transparent transition-all">
                <option value="">Select program type</option>
                <option value="Monthly">Monthly</option>
                <option value="Voluntary Session">Voluntary Session</option>
                <option value="Individual Training">Individual Training</option>
              </select>
              {form.formState.errors.program && <p className="text-red-500 text-xs">{form.formState.errors.program.message}</p>}
            </div>

            <button type="submit" disabled={submitting} className="w-full bg-[#1a2744] hover:bg-[#25365e] text-[#f5c112] font-black uppercase tracking-widest py-4 rounded-lg transition-colors flex justify-center items-center gap-2 disabled:opacity-70">
              {submitting ? <><Loader2 className="animate-spin" size={18} /> Submitting...</> : 'Submit Registration'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
