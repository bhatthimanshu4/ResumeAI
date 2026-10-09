import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-white dark:bg-[#020617] py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between rounded-xl bg-gradient-to-r from-emerald-950 to-green-700 gap-4 sm:gap-6 px-5 sm:px-8 py-6 sm:h-[104px]">
          <div className="text-center sm:text-left space-y-1 sm:space-y-2">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              Ready to Get More Interviews?
            </h2>
            <p className="text-xs sm:text-sm text-emerald-200">
              Join 25,000+ job seekers who improved their resumes
            </p>
          </div>
          <button
            className="
  flex items-center gap-2
  h-10 sm:h-12
  px-5 sm:px-8
  rounded-lg
  bg-[#005A32]
  hover:bg-[#004A29]
  text-white
  font-semibold
  text-xs sm:text-sm
  transition-all duration-200
  whitespace-nowrap
  "
          >
            Start Free Analysis
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}