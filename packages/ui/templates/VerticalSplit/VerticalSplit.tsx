import "./VerticalSplit.module.css";

export function VerticalSplit({
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
      <section>
        <article>
          <h3>{title}</h3>
          <p>{subtitle}</p>
          {children}
        </article>
      </section>
    </main>
  );
}
