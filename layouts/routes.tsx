import { useRouter } from 'next/router';
import { FC } from "react"
import { Hero } from '../components/hero';
import { Page404 } from '../components/404';
import { Brand } from '../components/brands';
import { getContentPage, getSiteByVne } from '../utils/getSiteByVne';

import useSWR from 'swr';
import { SITES } from '../graphql';
import { getPathsC0, getPathsC1, getPathsC2, getPathsChildren1, getPathsChildrens0, getPathsChildrens1, getPathsChildrens2, site } from '../utils/functionV3';
import { Site } from '../interfaces/siteV1';
import { Children0 } from './children0';
import { Children1 } from './children1';
import { Children2 } from './children2';
import { getChildren1, getChildren2, getChildren3, getChildrens0, getChildrens1, getChildrens2, getChildrens3, slug } from '../utils/function';

interface Routes {
  sites: Site[]
}
export const Routes: FC<Routes> = ({ sites }) => {
  const { asPath, query } = useRouter()
  const { data, isValidating, error } = useSWR(SITES)

  // console.log(getChildrens0(sites));
  console.log(getChildrens1(sites));
  // console.log(getChildrens2(sites));
  
  // console.log(getChildrens2(sites));
  // console.log(getChildrens3(sites));
  // console.log(query.slug);
  
  // console.log(childrens1(sites));
  // console.log(childrens2(sites));
  // console.log(childrens3(sites));
  
  switch (asPath) {
    case getChildrens0(sites)!.find(data => data === asPath):
      return <Children0 sites={sites}/>
    case getChildrens1(sites)!.find(data => data === asPath):
      return <Children1 sites={sites}/>
    case getChildrens2(sites)!.find(data => data === asPath):
      return <Children2 sites={sites}/>
    // case getPathsC2(sites, asPath):
    //   return <Children2 sites={sites}/>
    default:
      return <Page404 />

  }
}