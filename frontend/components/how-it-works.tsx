const steps = [
  {
    number: 1,
    title: "Upload Resume",
    description: "Upload your resume in PDF format",
  },
  {
    number: 2,
    title: "Paste Job Description",
    description: "Paste the job description you're targeting",
  },
  {
    number: 3,
    title: "AI Analysis",
    description: "Our AI analyzes and scores your resume",
  },
  {
    number: 4,
    title: "Get Suggestions",
    description: "Improve your resume and boost your score",
  },
];

export default function HowItWorks() {
  return (
<section id="how-it-works" className="bg-white dark:bg-[#020617] py-12 lg:py-16">
      <div className="mx-auto max-w-[1440px] px-8 xl:px-12">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white lg:text-3xl">
            How It Works
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 lg:text-base">
            Get your resume optimized in 4 simple steps
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div
            className="absolute left-0 right-0 top-5 hidden h-0.5 bg-slate-200 dark:bg-slate-700 lg:block"
            style={{ marginLeft: "12.5%", marginRight: "12.5%", width: "75%" }}
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Number Circle */}
                <div className="relative z-10 mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-sm font-semibold text-white">
                  {step.number}
                </div>
                <h3 className="mb-1 text-sm font-semibold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}