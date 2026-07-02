import React from "react";

interface LogoProps {
  className?: string;
  size?: number; // max-width in px
  showBackground?: boolean;
  style?: React.CSSProperties;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = 300,
  showBackground = false,
  style,
}) => {
  // Brand color (beautiful royal purple from the logo)
  const purpleColor = "#5E17EB";

  return (
    <div
      className={`logo-container ${className}`}
      dir="ltr"
      style={{
        width: "100%",
        maxWidth: size ? `${size}px` : "300px",
        aspectRatio: "1/1",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "visible",
        direction: "ltr",
        ...style,
      }}
    >
      <svg
        viewBox="-30 0 460 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="select-none"
        dir="ltr"
        style={{
          width: "100%",
          height: "100%",
          maxHeight: "100%",
          objectFit: "contain",
          display: "block",
          margin: "0 auto",
          overflow: "visible",
          direction: "ltr",
        }}
      >
        {/* Heart Part 1: Entire Left Side & Bottom-Right curve rising up */}
        <path
          d="M 0 -30 C -15 -55 -45 -70 -70 -70 C -110 -70 -140 -40 -140 0 C -140 50 -80 100 0 150 C 40 130 70 105 85 75"
          transform="translate(160, 210) rotate(-13) scale(0.88)"
          stroke={purpleColor}
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Heart Part 2: Top-Right lobe curving down and ending before the text gap */}
        <path
          d="M 0 -30 C 15 -55 45 -70 70 -70 C 100 -70 125 -45 125 -10"
          transform="translate(160, 210) rotate(-13) scale(0.88)"
          stroke={purpleColor}
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Texts "RISE & GLOW" and "WITH RANIA" in premium high-contrast display typography */}
        {/* RISE & GLOW */}
        <text
          x="152"
          y="215"
          fill={purpleColor}
          fontSize="30"
          fontWeight="900"
          letterSpacing="0.05em"
          fontFamily="'Montserrat', 'Space Grotesk', 'Cairo', 'Tajawal', sans-serif"
          textAnchor="start"
          style={{ direction: "ltr", unicodeBidi: "bidi-override" }}
        >
          RISE & GLOW
        </text>

        {/* WITH RANIA */}
        <text
          x="208"
          y="255"
          fill={purpleColor}
          fontSize="20"
          fontWeight="800"
          letterSpacing="0.05em"
          fontFamily="'Montserrat', 'Space Grotesk', 'Cairo', 'Tajawal', sans-serif"
          textAnchor="start"
          style={{ direction: "ltr", unicodeBidi: "bidi-override" }}
        >
          WITH RANIA
        </text>

        {/* Magical Sparkle Constellation */}
        {/* 1. Sparkle at the bottom-right cusp gap */}
        <path
          d="M 195 255 Q 195 261 201 261 Q 195 261 195 267 Q 195 261 189 261 Q 195 261 195 255 Z"
          fill={purpleColor}
        />

        {/* 2. Sparkle Top Right (Large) */}
        <path
          d="M 310 110 Q 310 126 326 126 Q 310 126 310 142 Q 310 126 294 126 Q 310 126 310 110 Z"
          fill={purpleColor}
        />

        {/* 3. Sparkle Top Right (Medium-Left) */}
        <path
          d="M 275 140 Q 275 148 283 148 Q 275 148 275 156 Q 275 148 267 148 Q 275 148 275 140 Z"
          fill={purpleColor}
        />

        {/* 4. Sparkle Top Right (Small-Right) */}
        <path
          d="M 350 145 Q 350 151 356 151 Q 350 151 350 157 Q 350 151 344 151 Q 350 151 350 145 Z"
          fill={purpleColor}
        />
      </svg>
    </div>
  );
};
