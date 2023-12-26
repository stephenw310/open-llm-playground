import { cn } from "@/lib/utils";
import { ExternalLink } from "@/components/external-link";

const Footer = ({ className, ...props }: React.ComponentProps<"p">) => {
  return (
    <p
      className={cn(
        "border-t py-2 text-center text-sm font-light leading-normal text-muted-foreground",
        className,
      )}
      {...props}
    >
      Made with ❤️ by{" "}
      <ExternalLink href="https://twitter.com/chaobuilds">Chao</ExternalLink>
    </p>
  );
};

export default Footer;
