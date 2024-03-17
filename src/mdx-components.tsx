import type { MDXComponents } from "mdx/types";
import { BoldEmphasis } from "@/ui/blog/BoldEmphasis";
import { SoftEmphasis } from "@/ui/blog/SoftEmphasis";
import { Paragraph } from "@/ui/blog/Paragraph";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    strong: ({ children }) => (<BoldEmphasis>{children}</BoldEmphasis>),
    em: ({ children }) => (<SoftEmphasis>{children}</SoftEmphasis>),
    p: ({ children }) => (<Paragraph>{children}</Paragraph>),
    ...components,
  }
}
