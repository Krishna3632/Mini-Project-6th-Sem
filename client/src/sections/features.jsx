import SectionTitle from "../components/section-title";
import { FileTextIcon, TargetIcon, AlertCircleIcon, CheckCircleIcon, KeyIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Features() {

    const refs = useRef([]);

    const featuresData = [
        {
            icon: FileTextIcon,
            title: "Resume Parsing",
            description: "Extract skills, experience and tools from PDF/DOCX resumes.",
        },
        {
            icon: TargetIcon,
            title: "Job Match Score",
            description: "Compare resume with job description using semantic similarity.",
        },
        {
            icon: AlertCircleIcon,
            title: "Missing Skills Detection",
            description: "Identify what recruiters expect but your resume lacks.",
        },
        {
            icon: CheckCircleIcon,
            title: "ATS Compatibility Score",
            description: "Estimate how likely your resume passes automated screening.",
        },
        {
            icon: KeyIcon,
            title: "Keyword Optimization",
            description: "Suggest keywords to increase shortlisting chances.",
        }
    ];

    return (
        <section className="mt-32">
            <SectionTitle
                title="Everything you need to pass ATS"
                description="AI-powered analysis that gives you insights recruiters see — before you submit your application."
            />

            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 px-6">
                {featuresData.map((feature, index) => (
                    <motion.div
                        key={index}
                        ref={(el) => (refs.current[index] = el)}
                        className="hover:-translate-y-0.5 p-6 rounded-xl space-y-4 glass max-w-80 w-full"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.15,
                            type: "spring",
                            stiffness: 320,
                            damping: 70,
                            mass: 1
                        }}
                        onAnimationComplete={() => {
                            const card = refs.current[index];
                            if (card) {
                                card.classList.add("transition", "duration-300");
                            }
                        }}
                    >
                        <feature.icon className="size-8.5" />
                        <h3 className="text-base font-medium text-white">
                            {feature.title}
                        </h3>
                        <p className="text-gray-100 line-clamp-2 pb-2">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
