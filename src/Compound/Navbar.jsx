// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom"; 
import { Box, Flex } from "@chakra-ui/react";

function Navbar() {
  return (
    <Box 
      position="fixed"
      top="0"
      left="0"
      right="0"
      p={{ base: "2", md: "4" }}
      zIndex={1}  
      bg="white"
      borderBottom="1px"
      borderColor="blue.500" 
      boxShadow="sm"
    >
      <Flex 
        w="100%"
        maxW="1200px"
        mx="auto"
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems="center"
        flexWrap="wrap"
        gap={{ base: "4", md: "10" }}
      >
        <Link to="/" mb={{ base: "2", md: "0" }}>Chart</Link>
        <Link to="/simple-box-plot" mb={{ base: "2", md: "0" }}>Simple Box Plot</Link>
        <Link to="/waterfall" mb={{ base: "2", md: "0" }}>Waterfall</Link>
        <Link to="/HorizontalBoxPlot" mb={{ base: "2", md: "0" }}>Horizontal Box Plot</Link>
        <Link to="/MultipleBoxPlots" mb={{ base: "2", md: "0" }}>Multiple Box Plots</Link>
      </Flex>
    </Box>
  );
}

export default Navbar;
