import React from "react";
import {
  Container,
  LogoContainer,
  Menu,
  MenuItem,
  Wrapper,
  MenuItemLink,
  // SubMenu,
  // SubMenuCategoryItem,
  // SubMenuCategoryLink,
} from "./NavBar.elements.jsx";
import CartWidget from "../CartWidget/CartWidget.jsx";
import { FaEvernote } from "react-icons/fa";
import { IconContext } from "react-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <IconContext.Provider
          value={{ color: "#82E0AA", style: { fontSize: "2em" } }}
        >
          <LogoContainer>
            <FaEvernote />
            <p>Samaland</p>
          </LogoContainer>
        </IconContext.Provider>
        <Menu>
          <MenuItem>
            <MenuItemLink>Home</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>Categories</MenuItemLink>
            {/* <SubMenu>
              <SubMenuCategoryItem>
                <SubMenuCategoryLink>Categories 1</SubMenuCategoryLink>
              </SubMenuCategoryItem>
              <SubMenuCategoryItem>
                <SubMenuCategoryLink>Categories 2</SubMenuCategoryLink>
              </SubMenuCategoryItem>
            </SubMenu> */}
          </MenuItem>
          <MenuItem>
            <IconContext.Provider value={{ style: { fontSize: "25px" } }}>
              <MenuItemLink>
                <CartWidget />
              </MenuItemLink>
            </IconContext.Provider>
          </MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
