import Container from "@/components/ui/Container";
import { cn } from "@/lib/helpers";

export default function SectionContainer({
  as: Component = "section",
  className,
  containerClassName,
  id,
  children,
}) {
  return (
    <Component id={id} className={cn("relative", className)}>
      <Container className={containerClassName}>{children}</Container>
    </Component>
  );
}
