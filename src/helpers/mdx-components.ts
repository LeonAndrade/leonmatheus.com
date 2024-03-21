import dynamic from "next/dynamic";
import CodeSnippet from "@/components/CodeSnippet";

// const CustomComponent = dynamic(() => import("@/components/CustomComponent"));

const CUSTOM_MDX_COMPONENTS = {
  pre: CodeSnippet,
};

export default CUSTOM_MDX_COMPONENTS;
