type LogoProps = {
  className?: string;
  withText?: boolean;
  tone?: "brand" | "light";
};

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      role="img"
      aria-label="Logo Cireng Abidzar"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#DC2626" />
        </linearGradient>
      </defs>
      <rect x="16" y="16" width="480" height="480" rx="120" fill="url(#logoGrad)" />
      <ellipse cx="256" cy="300" rx="140" ry="86" fill="#FCE3A6" />
      <ellipse
        cx="256"
        cy="300"
        rx="140"
        ry="86"
        fill="none"
        stroke="#C77E22"
        strokeWidth="14"
      />
      <ellipse cx="216" cy="268" rx="52" ry="30" fill="#FFF3CE" opacity="0.7" />
      <circle cx="316" cy="320" r="12" fill="#C77E22" opacity="0.5" />
      <circle cx="244" cy="336" r="9" fill="#C77E22" opacity="0.5" />
      <circle cx="286" cy="272" r="8" fill="#C77E22" opacity="0.5" />
      <path
        d="M300 150 C 330 170 330 214 306 236"
        stroke="#FFF7E6"
        strokeWidth="18"
        fill="none"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M356 168 C 380 190 380 226 360 244"
        stroke="#FFF7E6"
        strokeWidth="16"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

export default function Logo({
  className = "",
  withText = true,
  tone = "brand",
}: LogoProps) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-10 w-10 shrink-0 drop-shadow-sm" />
      {withText && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display text-lg font-extrabold tracking-tight ${
              tone === "light" ? "text-cream" : "text-ink"
            }`}
          >
            Cireng <span className="text-brand">Abidzar</span>
          </span>
          <span
            className={`text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${
              tone === "light" ? "text-cream-300" : "text-ink-soft/70"
            }`}
          >
            Cireng Isi • Dimsum
          </span>
        </span>
      )}
    </span>
  );
}
