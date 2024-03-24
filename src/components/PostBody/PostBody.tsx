import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

import CUSTOM_MDX_COMPONENTS from "@/helpers/mdx-components";

function PostBody({ content }: { content: string }) {
  return (
    <section>
      <MDXRemote
        source={content}
        components={CUSTOM_MDX_COMPONENTS}
      />
    </section>
  );
}

export default PostBody;


