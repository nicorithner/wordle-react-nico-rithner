import { useEffect, useRef } from "react";
import "./WordleLogo.css";
import { WordleLogoProps } from "../../types/types";

export default function WordleLogo({ animate = true }: WordleLogoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const letterRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (animate) {
      letterRefs.current.forEach((ref, index) => {
        if (ref) {
          setTimeout(() => {
            ref.classList.add("animate");

            setTimeout(() => {
              ref.classList.remove("animate");
            }, 500);
          }, index * 100);
        }
      });
    }
  }, [animate]);

  return (
    <div ref={containerRef} className={`wordle-logo`}>
      <div
        ref={(el) => {
          letterRefs.current[0] = el;
        }}
        className="logo-letter w-letter"
      >
        W
      </div>
      <div
        ref={(el) => {
          letterRefs.current[1] = el;
        }}
        className="logo-letter"
      >
        O
      </div>
      <div
        ref={(el) => {
          letterRefs.current[2] = el;
        }}
        className="logo-letter r-letter"
      >
        R
      </div>
      <div
        ref={(el) => {
          letterRefs.current[3] = el;
        }}
        className="logo-letter"
      >
        D
      </div>
      <div
        ref={(el) => {
          letterRefs.current[4] = el;
        }}
        className="logo-letter"
      >
        L
      </div>
      <div
        ref={(el) => {
          letterRefs.current[5] = el;
        }}
        className="logo-letter"
      >
        E
      </div>
    </div>
  );
}
