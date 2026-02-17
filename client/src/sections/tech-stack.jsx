import { motion } from "framer-motion";
import SectionTitle from "../components/section-title";

export default function TechStack() {
    const technologies = [
        { name: "Python", color: "#3776AB" },
        { name: "NLP", color: "#FF6B6B" },
        { name: "Flask", color: "#000000" },
        { name: "React", color: "#61DAFB" },
        { name: "spaCy", color: "#09A3D5" },
        { name: "scikit-learn", color: "#F7931E" },
    ];

    return (
        <section className="mt-32">
            <SectionTitle
                title="Built with modern tech"
                description="Powered by cutting-edge NLP and machine learning frameworks."
            />

            <motion.div className="flex flex-wrap items-center justify-center gap-4 mt-12 px-4"
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                {technologies.map((tech, index) => (
                    <motion.div
                        key={index}
                        className="glass rounded-full px-6 py-3 text-sm font-medium hover:-translate-y-1 transition-transform cursor-default"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 320,
                            damping: 20,
                            mass: 1
                        }}
                        style={{
                            borderColor: `${tech.color}40`,
                        }}
                    >
                        {tech.name}
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
