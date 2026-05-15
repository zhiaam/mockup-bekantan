/**
 * Framer Motion animation variants for the Pulau Kembang website.
 *
 * Usage:
 *   import { fadeIn } from "@/lib/variants";
 *   <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" />
 */

/**
 * Generates a fade-in animation variant.
 * @param {"up" | "down" | "left" | "right"} direction - Slide-in direction.
 * @param {number} delay - Animation delay in seconds.
 * @returns {{ hidden: object, show: object }} Framer Motion variant object.
 */
export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
