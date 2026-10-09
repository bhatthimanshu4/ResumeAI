"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "How does AI scoring work?",
    answer:
      "Our AI analyzes your resume against the job description, checking for keyword matches, formatting compatibility, and relevance of your experience to provide an accurate ATS score.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we use enterprise-grade encryption to protect your data. Your resume and personal information are never shared with third parties.",
  },
  {
    question: "What file formats are supported?",
    answer:
      "We currently support PDF format for resume uploads. This ensures the best compatibility with our AI analysis system.",
  },
  {
    question: "Can I use this for multiple jobs?",
    answer:
      "You can analyze your resume against multiple job descriptions. Free users get 3 analyses, while premium users get unlimited analyses.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
<section className="bg-white dark:bg-[#020617] py-12 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-8 xl:px-12">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 dark:text-white lg:text-3xl">
            Frequently Asked Questions
          </h2>

          <div className="grid gap-3 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0F172A]"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between p-4 text-left"
                >
                  <span className="text-sm font-medium text-slate-900 dark:text-white">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="h-4 w-4 flex-shrink-0 text-slate-400" />
                  ) : (
                    <Plus className="h-4 w-4 flex-shrink-0 text-slate-400" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4">
                    <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
        </div>
     </div>
    </section>
  )
}