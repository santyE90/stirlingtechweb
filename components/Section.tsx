import Container from "@/components/Container";

export default function Section({
  children,
  className = "",
  innerClassName = "",
  dividerTop = false,
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  dividerTop?: boolean;
}) {
  return (
    <section className={`py-20 ${dividerTop ? "border-t border-black/5" : ""} ${className}`}>
      <Container className={innerClassName}>{children}</Container>
    </section>
  );
}
