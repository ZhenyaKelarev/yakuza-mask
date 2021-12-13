/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ChakraProvider, Box } from "@chakra-ui/react"
import theme from "./theme"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }: any) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <ChakraProvider theme={theme}>
          <Box bg="white">
            <Header siteTitle={data.site.siteMetadata.title} />
            <div>
              <main>{children}</main>
            </div>
            <Footer />
          </Box>
        </ChakraProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
