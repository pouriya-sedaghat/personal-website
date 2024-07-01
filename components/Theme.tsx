import { Theme as T } from "@/interface/Theme";

function Theme({
  children,
  theme: { color, bgColor },
}: {
  children: React.ReactNode;
  theme: T;
}) {
  return (
    <div
      className={`d-flex flex-column justify-content-between ${color} ${bgColor} min-vh-100`}
    >
      {children}
    </div>
  );
}

export default Theme;
