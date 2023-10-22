import { motion, AnimatePresence } from "framer-motion";

type Props = {
	toggled: boolean;
};

const Overlay: React.FC<Props> = ({ toggled }) => {
	return (
		<AnimatePresence>
			{toggled && (
				<motion.div
					className="w-[100dvw] absolute pointer-events-none -z-10 top-0 left-0 h-[100dvh] bg-Black"
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.75 }}
					exit={{ opacity: 0 }}
				></motion.div>
			)}
		</AnimatePresence>
	);
};

export default Overlay;
