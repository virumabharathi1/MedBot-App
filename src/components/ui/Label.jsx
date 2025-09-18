export function Label({ children, ...props }) {
  return (
    <label {...props} className="block mb-1 font-medium">
      {children}
    </label>
  );
}