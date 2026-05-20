export function Ticker({ items }: { items: readonly string[] }) {
  const Seq = () => (
    <span style={{ display: "inline-flex", gap: 56 }}>
      {items.map((it, i) => (
        <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 16 }}>
          <span className="marker">◆</span> {it}
        </span>
      ))}
    </span>
  );
  return (
    <div className="ticker-wrap" aria-hidden="true">
      <div className="ticker">
        <Seq />
        <Seq />
        <Seq />
      </div>
    </div>
  );
}
