export const SunIcon = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
      viewBox="0 0 400 560"
      preserveAspectRatio="xMidYMid slice"
    >
      <circle
        className="stroke-primary-strong"
        cx="200"
        cy="300"
        r="190"
        fill="none"
        strokeWidth="2"
      />
      <circle
        className="stroke-primary-strong"
        cx="200"
        cy="300"
        r="140"
        fill="none"
        strokeWidth="2"
        opacity=".7"
      />
      <path className="fill-accent" d="M60 360 A140 140 0 0 1 340 360 Z" />
      <rect className="fill-primary" x="0" y="360" width="400" height="200" />
      <path
        className="stroke-accent"
        d="M0 372 Q25 356 50 372 T100 372 T150 372 T200 372 T250 372 T300 372 T350 372 T400 372"
        fill="none"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        className="stroke-primary-strong"
        d="M0 400 Q25 384 50 400 T100 400 T150 400 T200 400 T250 400 T300 400 T350 400 T400 400"
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        className="stroke-primary-strong"
        d="M0 428 Q25 412 50 428 T100 428 T150 428 T200 428 T250 428 T300 428 T350 428 T400 428"
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
        opacity=".7"
      />
    </svg>
  );
};
