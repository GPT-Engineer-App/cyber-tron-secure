import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from "@chakra-ui/react";
import { FaChevronDown, FaLock } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="black" minH="100vh" color="white">
      <Container maxW="container.lg">
        <Flex as="nav" align="center" justify="space-between" py={4}>
          <Heading as="h1" size="lg" letterSpacing="wider">
            CyberTron
          </Heading>
          <Flex align="center">
            <Menu>
              <MenuButton as={Button} rightIcon={<FaChevronDown />} mr={4}>
                Services
              </MenuButton>
              <MenuList bg="black" borderColor="blue.500">
                <MenuItem>Penetration Testing</MenuItem>
                <MenuItem>Vulnerability Assessment</MenuItem>
                <MenuItem>Security Auditing</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton as={Button} rightIcon={<FaChevronDown />} mr={4}>
                Solutions
              </MenuButton>
              <MenuList bg="black" borderColor="blue.500">
                <MenuItem>Cloud Security</MenuItem>
                <MenuItem>Network Security</MenuItem>
                <MenuItem>Endpoint Protection</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton as={Button} rightIcon={<FaChevronDown />} mr={4}>
                Resources
              </MenuButton>
              <MenuList bg="black" borderColor="blue.500">
                <MenuItem>Whitepapers</MenuItem>
                <MenuItem>Case Studies</MenuItem>
                <MenuItem>Security Blog</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton as={Button} rightIcon={<FaChevronDown />} mr={4}>
                Company
              </MenuButton>
              <MenuList bg="black" borderColor="blue.500">
                <MenuItem>About Us</MenuItem>
                <MenuItem>Careers</MenuItem>
                <MenuItem>Contact</MenuItem>
              </MenuList>
            </Menu>
            <Button leftIcon={<FaLock />} colorScheme="blue">
              Login
            </Button>
          </Flex>
        </Flex>

        <Stack as="main" spacing={8} justifyContent="center" alignItems="flex-start" m="0 auto 4rem auto" maxWidth="700px">
          <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="700px">
            <Heading mb={2}>Secure Your Digital Frontier</Heading>
            <Text fontSize="xl" color="gray.400">
              Cutting-edge cybersecurity solutions for the digital age. Protect your assets with CyberTron.
            </Text>
          </Flex>

          <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="700px">
            <Image src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY3liZXIlMjBzZWN1cml0eSUyMGRpZ2l0YWwlMjBsb2NrfGVufDB8fHx8MTcxMTY1MjM5M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Cyber Security" borderRadius="lg" mb={8} />
            <Button colorScheme="blue" size="lg">
              Get Started
            </Button>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default Index;
