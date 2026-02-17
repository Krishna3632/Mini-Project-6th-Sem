import { motion } from "framer-motion";
import SectionTitle from "../components/section-title";
import { CheckCircleIcon, AlertCircleIcon, TrendingUpIcon, TargetIcon } from "lucide-react";

export default function ExampleResult() {
    return (
        <section className="mt-32 relative">
            <SectionTitle
                title="See what you'll get"
                description="Real insights that help you stand out from hundreds of applicants."
            />

            <motion.div className="max-w-3xl mx-auto mt-16 px-4"
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <div className="glass rounded-2xl p-8 space-y-8">
                    {/* Score Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="glass rounded-xl p-6 space-y-3">
                            <div className="flex items-center gap-3">
                                <TargetIcon className="size-6 text-green-400" />
                                <h3 className="text-lg font-medium">Match Score</h3>
                            </div>
                            <div className="flex items-end gap-2">
                                <span className="text-5xl font-bold text-green-400">82</span>
                                <span className="text-2xl text-gray-300 mb-1">%</span>
                            </div>
                            <p className="text-sm text-gray-100">Strong alignment with job requirements</p>
                        </div>

                        <div className="glass rounded-xl p-6 space-y-3">
                            <div className="flex items-center gap-3">
                                <CheckCircleIcon className="size-6 text-blue-400" />
                                <h3 className="text-lg font-medium">ATS Score</h3>
                            </div>
                            <div className="flex items-end gap-2">
                                <span className="text-5xl font-bold text-blue-400">74</span>
                                <span className="text-2xl text-gray-300 mb-1">%</span>
                            </div>
                            <p className="text-sm text-gray-100">Good chance to pass initial screening</p>
                        </div>
                    </div>

                    {/* Missing Skills */}
                    <div className="glass rounded-xl p-6 space-y-4">
                        <div className="flex items-center gap-3">
                            <AlertCircleIcon className="size-6 text-orange-400" />
                            <h3 className="text-lg font-medium">Missing Skills</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1.5 bg-orange-500/20 border border-orange-500/30 rounded-full text-sm">
                                Docker
                            </span>
                            <span className="px-3 py-1.5 bg-orange-500/20 border border-orange-500/30 rounded-full text-sm">
                                AWS
                            </span>
                            <span className="px-3 py-1.5 bg-orange-500/20 border border-orange-500/30 rounded-full text-sm">
                                Kubernetes
                            </span>
                        </div>
                    </div>

                    {/* Suggestions */}
                    <div className="glass rounded-xl p-6 space-y-4">
                        <div className="flex items-center gap-3">
                            <TrendingUpIcon className="size-6 text-purple-400" />
                            <h3 className="text-lg font-medium">Suggestions</h3>
                        </div>
                        <ul className="space-y-3 text-sm text-gray-100">
                            <li className="flex items-start gap-2">
                                <span className="text-purple-400 mt-0.5">•</span>
                                <span>Add quantified achievements (e.g., "Increased efficiency by 40%")</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-400 mt-0.5">•</span>
                                <span>Include Docker and AWS certifications if available</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-400 mt-0.5">•</span>
                                <span>Mention container orchestration experience</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
