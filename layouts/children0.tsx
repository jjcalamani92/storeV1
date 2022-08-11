import { useRouter } from "next/router";
import { createElement, FC } from "react"
import ReactMarkdown from "react-markdown";
import { Site } from "../interfaces/siteV1";
// import { getChildren0, getPathsC0 } from "../utils/functionV3";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import rehypeRaw from "rehype-raw";
import 'katex/dist/katex.min.css'
import { dark, dracula, synthwave84, xonokai, materialLight, prism, solarizedlight, vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Hero } from "../components/hero";
import { Home } from "./pages/home";
import { Blog } from "./pages/blog";
import { capitalizar, capitalizar0, getChildren0, getChildren1 } from "../utils/function";

interface Props {
  sites: Site[]
}
const MyParagraph: FC<any> = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);
const str = '# Heck Yes\n\nThis is great!'
const md = `
# Hello world
`;
const id = "cart";
const cdnDomain = "cdn.blabla.com";
const sectionId = "1";
const snippet = `App.recommendationContext = { type: "CART", data: ["SKU123"] };`;

const example = `
<script type="text/javascript">
  window.App = window.App || {};
  ${snippet} // in this example - a ${id} page
</script>
<script src="//${cdnDomain}/api/${sectionId}/api_dynamic.js" type="text"></script>
<script src="//${cdnDomain}/api/${sectionId}/api_static.js" type="text"></script>
  `.trim()
export const Children0: FC<Props> = ({ sites }) => {
  const { asPath, query } = useRouter()
  const children0 = getChildren0(sites, query)!
  console.log(capitalizar0('hola ámigos él'));

  
  switch (asPath) {
    case '/':
      return <Hero />
    case '/blog':
      return <Blog children0={children0} />
      
    // case getPathsC0(sites, asPath):
    //   return (
    //     <>
    //       <ReactMarkdown rehypePlugins={[rehypeRaw]}>
    //         {children0.body.title}
    //       </ReactMarkdown>
    //     </>
    //   )
    default:
      return null;
  }
}
