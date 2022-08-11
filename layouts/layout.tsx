import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import { Main } from "../components/component";
import { Footer } from "../components/footer";
import { Header } from "../components/headerPages";
import { Data, HeadV1 } from "../src/interfaces/siteV1";

interface Layout {
	head: HeadV1;
	children?: React.ReactNode;
	data?: Data
}

export const Layout: FC<Layout> = ({
	head,
	children,
	data
}) => {
	const router = useRouter()
  const { pathname, asPath } = router
	// console.log(sites);
	// const site = sites.find((site: { _id: string; }) => site._id === process.env.API_SITE)
	// const hero = site?.route[0].content.body
	// const header = site?.route .filter((data: { href: string}) => data.href !== 'home')
	
	
	
	return (
		<>
			<Head>
				<title>{head.name}</title>
				<meta name="keywords" />
				<meta name="description" content={head.description} />
				<meta property="og:title" content={head.name} />
				<meta property="og:description" content={head.description} />
				<meta property="og:type" content="og:product" />
				{head.image && <meta property="og:image" content={head.image.src} />}
				<link rel="icon" href={"https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644875469/React-jj/lvsgwhadou1vkgmoscqu.png"} />
			</Head>
      <Header data={data}  />
			<Main>
				{children}
			</Main>
			<Footer />
			</>
	);
};
