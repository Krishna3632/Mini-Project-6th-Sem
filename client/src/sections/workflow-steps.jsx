import { motion } from "framer-motion";
import SectionTitle from "../components/section-title";
import { UploadIcon, FileTextIcon, BrainIcon, TargetIcon, TrendingUpIcon } from "lucide-react";

const steps = [
    {
        id: 1,
        icon: UploadIcon,
        title: "Upload Resume",
        description: "Upload your resume in PDF or DOCX format. Our system securely processes your document and extracts all relevant information.",
    },
    {
        id: 2,
        icon: FileTextIcon,
        title: "Paste Job Description",
        description: "Copy and paste the job description you're applying for. Include requirements, responsibilities, and desired qualifications.",
    },
    {
        id: 3,
        icon: BrainIcon,
        title: "AI Analysis",
        description: "Our NLP engine analyzes both documents, comparing skills, experience, and keywords to identify gaps and opportunities.",
    },
    {
        id: 4,
        icon: TargetIcon,
        title: "Get Score",
        description: "Receive your match score and ATS compatibility rating. See exactly how well your resume aligns with the job requirements.",
    },
    {
        id: 5,
        icon: TrendingUpIcon,
        title: "Improve Resume",
        description: "Get actionable suggestions to improve your resume. Add missing keywords, quantify achievements, and optimize formatting.",
    },
];

export default function WorkflowSteps() {
    return (
        <section className="mt-32 relative">
            <SectionTitle
                title="How It Works"
                description="From upload to optimization in just 5 simple steps."
            />

            <motion.div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-16 max-w-6xl mx-auto px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center text-center space-y-4"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 320,
                            damping: 70,
                            mass: 1
                        }}
                    >
                        <div className="glass rounded-full p-5">
                            <step.icon className="size-8 text-white" />
                        </div>
                        <h3 className="text-base font-medium text-white">
                            {step.title}
                        </h3>
                        <p className="text-gray-100 text-sm/6">
                            {step.description}
                        </p>
                        {index < steps.length - 1 && (
                            <div className="hidden md:block absolute top-14 w-20 h-0.5 bg-linear-to-r from-white/50 to-transparent"
                                style={{ left: `${(index + 1) * 20 - 5}%` }}
                            />
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
