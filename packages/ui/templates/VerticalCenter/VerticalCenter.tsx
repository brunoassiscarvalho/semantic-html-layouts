import "./VerticalCenter.module.css";
export function VerticalCenter({
  title,
  subtitle,
  children,
}: Readonly<{
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}>) {
  return (
    <main>
      <section>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        {children}
      </section>
    </main>
  );
}
