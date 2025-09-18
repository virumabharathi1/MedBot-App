export function Card({ children, ...props }) {
  return (
    <div {...props} className="border rounded shadow p-4 bg-white">
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return <div className="mb-2 font-bold">{children}</div>;
}

export function CardTitle({ children }) {
  return <h3 className="text-lg font-semibold">{children}</h3>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
