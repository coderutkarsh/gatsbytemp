import React,{ useState, useEffect } from "react"
import { Link } from "gatsby"
import algoliasearch from 'algoliasearch';

import { rhythm, scale } from "../utils/typography"

const algoliaResource = {
  appId:`X89O3S3OTK`,
  apiKey:`109786d34bd9069f1dbda1e84e9ccd64`,
  index:'sample_data'
}

const sampleDataToAdd = [
   {objectID:"sampleObjId",productName:"jjhvidfjv",category:"nkdfjge",pid:'knfdlgn'},
   {objectID:"sampleObjId2",productName:"jjhvidfjv",category:"nkdfjge",pid:'knfdlgn_2'},{objectID:"sampleObjId3",productName:"jjhvidfjv",category:"nkdfjge",pid:'knfdlgn_3'},
   {objectID:"sampleObjId4",productName:"jjhvidfjv",category:"nkdfjge",pid:'knfdlgn_4'},
   {objectID:"sampleObjId5",productName:"jjhvidfjv",category:"nkdfjge",pid:'knfdlgn_4'}
]

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  useEffect(()=>{
       const client = algoliasearch(algoliaResource.appId, algoliaResource.apiKey,{protocol: 'https:'});
       const index =client.initIndex(algoliaResource.index);
       if(index){
         index.saveObjects(sampleDataToAdd)
       }  
  },[])

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }


  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby temp</a>
      </footer>
    </div>
  )
}

export default Layout
