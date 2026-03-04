'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Briefcase, GraduationCap, Code, Cpu } from 'lucide-react';

const experiences = [
	{
		date: '2023 - present',
		title: 'Epic-Bot Developer',
		company: 'Self-employed',
		description: 'Building a free Discord bot full of features.',
		type: 'work',
		icon: <Briefcase className="w-6 h-6" />,
	},
	{
		date: '2023 - present',
		title: 'Hardware & IoT Projects',
		company: undefined,
		description: 'Experimenting with ESP32, Raspberry Pi, and modules.',
		type: 'hardware',
		icon: <Cpu className="w-6 h-6" />,
	},
	{
		date: '2024 - present',
		title: 'Sokora & Robo.js Contributor',
		company: 'SokoraDesu/Chiissu & WavePlay',
		description: 'Active developer for Sokora and contributed features to Robo.js framework.',
		type: 'contribution',
		icon: <Code className="w-6 h-6" />,
	},
	{
		date: '2025 - present',
		title: 'TagBot Developer',
		company: 'Self-employed',
		description: 'Developing a Discord bot for tag management and moderation.',
		type: 'work',
		icon: <Briefcase className="w-6 h-6" />,
	},
	{
		date: 'Currently',
		title: 'KMod/Kalze Developer',
		company: 'Self-employed',
		description: 'Developing a simple Minecraft mod.',
		type: 'work',
		icon: <Briefcase className="w-6 h-6" />,
	},
	{
		date: 'Currently',
		title: 'ACS',
		company: 'Self-employed',
		description: 'Testing anti-cheat solutions for Minecraft.',
		type: 'work',
		icon: <Briefcase className="w-6 h-6" />,
	},
	{
		date: 'Currently',
		title: 'Student',
		company: undefined,
		description: 'Studying... a lot... good grades!',
		type: 'education',
		icon: <GraduationCap className="w-6 h-6" />,
	},
];

const total = experiences.length;
// each slide occupies 1/total of the scroll range
const slotSize = 1 / total;

function Slide({
	exp,
	index,
	scrollYProgress,
}: {
	exp: (typeof experiences)[0];
	index: number;
	scrollYProgress: MotionValue<number>;
}) {
	// the center of this slide's scroll slot
	const center = (index + 0.5) / total;
	const half = slotSize * 0.5;

	// fade + move: invisible outside the slot, fully visible at the center
	const opacity = useTransform(
		scrollYProgress,
		[center - half, center - half * 0.3, center + half * 0.3, center + half],
		[0, 1, 1, 0],
	);
	const y = useTransform(
		scrollYProgress,
		[center - half, center - half * 0.3, center + half * 0.3, center + half],
		[48, 0, 0, -48],
	);
	const scale = useTransform(
		scrollYProgress,
		[center - half, center - half * 0.3, center + half * 0.3, center + half],
		[0.94, 1, 1, 0.94],
	);

	// animated line fills when the slide is active
	const lineScale = useTransform(
		scrollYProgress,
		[center - half * 0.5, center + half * 0.5],
		[0, 1],
	);

	return (
		<motion.div
			style={{ opacity, y, scale }}
			className="absolute inset-0 flex items-center justify-center px-6 pointer-events-none"
		>
			<div className="w-full max-w-lg pointer-events-auto">
				{/* counter + line */}
				<div className="flex items-center gap-3 mb-6">
					<span className="text-[#e8b4d0] font-mono text-xs font-bold uppercase tracking-[0.2em]">
						{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
					</span>
					<div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800 overflow-hidden rounded-full">
						<motion.div
							style={{ scaleX: lineScale, originX: 0 }}
							className="h-full bg-[#e8b4d0]"
						/>
					</div>
				</div>

				{/* icon + date */}
				<div className="flex items-center gap-4 mb-4">
					<div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#e8b4d0]/10 dark:bg-[#e8b4d0]/5 border border-[#e8b4d0]/30 text-[#e8b4d0] shrink-0">
						{exp.icon}
					</div>
					<span className="font-mono text-xs font-bold uppercase tracking-widest text-[#e8b4d0]">
						{exp.date}
					</span>
				</div>

				{/* title */}
				<h3 className="text-3xl md:text-4xl font-black text-black dark:text-zinc-50 uppercase tracking-tight leading-none mb-3">
					{exp.title}
				</h3>

				{/* company */}
				{exp.company && (
					<p className="font-mono text-sm text-zinc-500 dark:text-zinc-400 italic mb-4">{exp.company}</p>
				)}

				{/* description */}
				<p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-sm">
					{exp.description}
				</p>
			</div>
		</motion.div>
	);
}

const Timeline = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	// track scroll through the whole tall container
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end end'],
	});

	return (
		// tall scroll track — each experience gets ~80vh of scroll travel
		<div
			ref={containerRef}
			className="relative w-full font-mono -mx-6 md:-mx-16"
			style={{ height: `${total * 80}vh` }}
		>
			{/* sticky viewport — stays locked while you scroll through the tall track */}
			<div className="sticky top-0 h-screen overflow-hidden">
				{experiences.map((exp, index) => (
					<Slide key={index} exp={exp} index={index} scrollYProgress={scrollYProgress} />
				))}
			</div>
		</div>
	);
};

export default Timeline;
