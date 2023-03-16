import NextLink from "next/link"
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from "@chakra-ui/react"
import {HamburgerIcon} from "@chakra-ui/icons"
import ThemeToggleButton from "../components/layouts/theme-toggle-button.js"
import Logo from "./logo.js"
import { IoLogoGithub, IoLogoLinkedin, IoHome } from 'react-icons/io5'

const LinkItem = ({href, path, target, children, ...props}) => {
    const active = path===href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return(
        <NextLink href={href} passHref scroll={false}>
            <Link p={2} bg={active ? 'glassTeal':undefined} color={active ? '#202023':inactiveColor} target={target} {...props}>
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const {path} = props
    
    return(
        <Box 
        position="fixed" 
        as="nav" 
        w="100%" 
        bg={useColorModeValue("#ffffff", '#202023')} 
        style={{backdropFilter:"blur(10px)"}}
        zIndex={1} 
        {...props}
        >
            <Container 
            display="flex" 
            p={2} 
            maxW="container.md" 
            wrap="wrap" 
            align="center" 
            justify="space-between"
            >
                <Flex
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                    align="left"
                >
                    <NextLink
                        href="/"
                        pl={2}
                        passHref
                    >
                        <IoHome size="30px"/>
                    </NextLink>

                    <LinkItem
                        target="_blank"
                        href="https://github.com/anandk1999"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        style={{ gap: 4 }}
                        pl={2}
                    >
                        <IoLogoGithub size="30px"/>
                    </LinkItem>

                    <LinkItem
                        target="_blank"
                        href="https://www.linkedin.com/in/sai-kuchibhatla-a379401a5/"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        style={{ gap: 4 }}
                        pl={1}
                    >
                        <IoLogoLinkedin size="30px"/>
                    </LinkItem>
                </Flex>
                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{base: "inline-block", md:"10px"}}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="solid" aria-label="Options" />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>Home</MenuItem>
                                </NextLink>

                                <NextLink href="/projects" passHref>
                                    <MenuItem as={Link}>Projects</MenuItem>
                                </NextLink>

                                <NextLink href="/music" passHref>
                                    <MenuItem as={Link}>Music</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar