import dynamic from "next/dynamic";
import CodeSnippet from "@/components/CodeSnippet";
import { Blockquote, Code, H1, H2, H3, P } from "@/components/CustomMDX";

// const CustomComponent = dynamic(() => import("@/components/CustomComponent"));

const CUSTOM_MDX_COMPONENTS = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  code: Code,
  pre: CodeSnippet,
  blockquote: Blockquote,
};

export default CUSTOM_MDX_COMPONENTS;
