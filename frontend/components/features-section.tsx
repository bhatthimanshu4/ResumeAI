import { FileCheck, Network, FilePenLine, BrainCircuit, Target, Download } from "lucide-react"

const features = [
  {
    icon: FileCheck,
    title: "AI ATS Scoring",
    description: "Get accurate ATS score based on real algorithms",
  },
  {
    icon: Network,
    title: "Keyword Gap Analysis",
    description: "Find missing keywords and important skills",
  },
  {
    icon: FilePenLine,
    title: "Resume Rewrite",
    description: "Get AI suggestions to rewrite and optimize",
  },
  {
    icon: BrainCircuit,
    title: "Smart Suggestions",
    description: "AI-powered suggestions to improve the job",
  },
  {
    icon: Target,
    title: "Job Match Insights",
    description: "See how well your resume matches and optimize",
  },
  {
    icon: Download,
    title: "Download Reports",
    description: "Download detailed reports in PDF",
  },
]

export default function FeaturesSection() {
  return (
<section id="features" className="bg-white dark:bg-[#020617] py-12 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-8 xl:px-12">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white lg:text-3xl">
              Powerful Features to Boost Your Career
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.slice(0, 4).map((feature, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0F172A] p-5 shadow-sm"
              >
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50">
                  <feature.icon className="h-4 w-4 text-emerald-600" strokeWidth={2} />
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">{feature.description}</p>
              </div>
            ))}
        </div>

<div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.slice(4).map((feature, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0F172A] p-5 shadow-sm"
              >
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50">
                  <feature.icon className="h-4 w-4 text-emerald-600" strokeWidth={2} />
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">{feature.description}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}