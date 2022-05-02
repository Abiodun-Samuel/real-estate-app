import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => (
  <Flex
    p="2"
    borderBottom="1px"
    borderColor="gray.100"
    alignItems="center"
    justifyContent={"space-between"}
    boxShadow="2xl"
  >
    <Box fontSize="3xl" color="#F5B041" fontWeight="bold">
      <Link href="/" paddingLeft="2">
        Real-Villa
      </Link>
    </Box>
    <Box>
      <Box
        gap={5}
        display={[
          "none", // 0-48em
          "none", // 48em-80em,
          "flex", // 80em+
        ]}
      >
        <Link href="/" passHref>
          <a className="nav-link">Home</a>
        </Link>
        <Link href="/search" passHref>
          <a className="nav-link">Search</a>
        </Link>
        <Link href="/search?purpose=for-sale" passHref>
          <a className="nav-link">Buy Property</a>
        </Link>
        <Link href="/search?purpose=for-rent" passHref>
          <a className="nav-link">Rent Property</a>
        </Link>
      </Box>

      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FcMenu />}
          backgroundColor="#F5B041"
          display={[
            "flex", // 0-48em
            "flex", // 48em-80em,
            "none", // 80em+
          ]}
        />
        <MenuList>
          <Link href="/" passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href="/search" passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;
