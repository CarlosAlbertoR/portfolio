/**
 * Hero illustration: a microfrontend topology, the kind of system this
 * portfolio is about. Pure SVG + CSS (no client JS). Lines draw once on
 * load; hovering a remote highlights its connection to the shell.
 */

type Remote = {
  label: string;
  framework: string;
  badge?: string;
  y: number;
};

const remotes: Remote[] = [
  { label: "remote", framework: "Angular", badge: "v22", y: 36 },
  { label: "remote", framework: "React", y: 150 },
  { label: "remote", framework: "Next.js", y: 264 },
];

const shell = { x: 24, y: 150, w: 172, h: 64 };
const remoteBox = { x: 330, w: 168, h: 64 };

function linkPath(targetY: number) {
  const startX = shell.x + shell.w;
  const startY = shell.y + shell.h / 2;
  const endX = remoteBox.x;
  const endY = targetY + remoteBox.h / 2;
  const midX = (startX + endX) / 2;
  return `M${startX} ${startY} C${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;
}

export function ArchitectureDiagram() {
  return (
    <svg
      viewBox="0 0 520 420"
      role="img"
      aria-labelledby="diagram-title diagram-desc"
      className="h-auto w-full max-w-[520px] select-none font-mono"
    >
      <title id="diagram-title">Microfrontend architecture</title>
      <desc id="diagram-desc">
        A shell application composes Angular, React and Next.js remotes at
        runtime and shares one design system and one session.
      </desc>

      {/* Shared design system feeding the shell. */}
      <path
        d={`M${shell.x + shell.w / 2} ${shell.y + shell.h} V352`}
        className="diagram-link fill-none stroke-line"
        strokeWidth={1.5}
        style={{ "--len": 140, "--delay": "250ms" } as React.CSSProperties}
      />
      <g
        className="diagram-node"
        style={{ "--delay": "500ms" } as React.CSSProperties}
      >
        <rect
          x={shell.x}
          y={352}
          width={shell.w}
          height={48}
          rx={10}
          className="fill-paper stroke-line"
          strokeDasharray="4 4"
        />
        <text x={shell.x + 16} y={381} className="fill-muted text-[12px]">
          design system
        </text>
      </g>

      {remotes.map((remote, index) => (
        <g key={remote.framework} className="group/remote cursor-default">
          <path
            d={linkPath(remote.y)}
            className="diagram-link fill-none stroke-line transition-[stroke] duration-200 group-hover/remote:stroke-accent"
            strokeWidth={1.5}
            style={
              {
                "--len": 260,
                "--delay": `${150 + index * 120}ms`,
              } as React.CSSProperties
            }
          />
          <g
            className="diagram-node"
            style={
              { "--delay": `${450 + index * 120}ms` } as React.CSSProperties
            }
          >
            <rect
              x={remoteBox.x}
              y={remote.y}
              width={remoteBox.w}
              height={remoteBox.h}
              rx={10}
              className="fill-surface stroke-line transition-[stroke] duration-200 group-hover/remote:stroke-accent"
            />
            <text
              x={remoteBox.x + 16}
              y={remote.y + 26}
              className="fill-muted text-[11px]"
            >
              {remote.label}
            </text>
            <text
              x={remoteBox.x + 16}
              y={remote.y + 46}
              className="fill-ink font-sans font-semibold text-[16px]"
            >
              {remote.framework}
            </text>
            {remote.badge ? (
              <text
                x={remoteBox.x + remoteBox.w - 16}
                y={remote.y + 26}
                textAnchor="end"
                className="fill-signal text-[11px]"
              >
                {remote.badge}
              </text>
            ) : null}
          </g>
        </g>
      ))}

      {/* Shell drawn last so it sits above the links. */}
      <g className="diagram-node">
        <rect
          x={shell.x}
          y={shell.y}
          width={shell.w}
          height={shell.h}
          rx={12}
          className="fill-accent"
        />
        <text
          x={shell.x + 18}
          y={shell.y + 27}
          className="fill-accent-ink text-[11px] opacity-80"
        >
          shell · session
        </text>
        <text
          x={shell.x + 18}
          y={shell.y + 48}
          className="fill-accent-ink font-sans font-semibold text-[16px]"
        >
          Host application
        </text>
      </g>
    </svg>
  );
}
