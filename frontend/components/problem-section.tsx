import { FileSearch, FileX, CircleDot, EyeOff } from "lucide-react"

const problems = [
  {
    icon: FileSearch,
    title: "Missing Keywords",
    description: "Your resume lacks important keywords from job descriptions",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: FileX,
    title: "Poor Formatting",
    description: "ATS can't read complex layouts and designs",
    color: "text-gray-500",
    bgColor: "bg-gray-100",
  },
  {
    icon: CircleDot,
    title: "Low Match Score",
    description: "Low compatibility means your resume gets ignored",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    icon: EyeOff,
    title: "No Visibility",
    description: "Recruiters never see resumes that fail ATS",
    color: "text-red-400",
    bgColor: "bg-red-50",
  },
]

export default function ProblemSection() {
  return (
    <section className="bg-white dark:bg-[#020617] py-12 lg:py-16">
      <div className="mx-auto max-w-[1440px] px-8 xl:px-12">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white lg:text-3xl">
            Most Resumes Don&apos;t Pass ATS Filters
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 lg:text-base">
            ATS systems scan resumes before humans ever see them. We make sure yours gets noticed.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0F172A] p-5 shadow-sm"
            >
              <div
                className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg ${problem.bgColor}`}
              >
                <problem.icon className={`h-5 w-5 ${problem.color}`} strokeWidth={1.5} />
              </div>
              <h3 className="mb-1.5 text-sm font-semibold text-slate-900 dark:text-white">{problem.title}</h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}