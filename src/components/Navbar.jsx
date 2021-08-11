import { createMedia } from "@artsy/fresnel";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Icon, Menu, Sidebar } from "semantic-ui-react";
import logo from "../assets/logo.svg";
import "../styles/Navbar.scss";
import Home from "./Home";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    sm: 0,
    lg: 768,
  },
});

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { push } = useHistory();

  const handleChange = (e, { name }) => push(name);

  const onPusher = () => {
    if (visible) return setVisible(false);
  };
  const onToggle = () => {
    setVisible(!visible);
  };
  return (
    <MediaContextProvider>
      <Media at="sm">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            vertical
            visible={visible}
          >
            <Menu.Item
              name="cook"
              content="Become a Cook"
              onClick={handleChange}
            />
            <Menu.Item
              name="foodie"
              content="Join as Foodie"
              onClick={handleChange}
            />
          </Sidebar>
          <Sidebar.Pusher
            dimmed={visible}
            onClick={onPusher}
            className="mobile"
          >
            <Menu pointing secondary>
              <Menu.Item
                className="item--red"
                color="red"
                onClick={handleChange}
              >
                <img src={logo} alt="" />
              </Menu.Item>
              <Menu.Item position="right" onClick={onToggle}>
                <Icon name="sidebar" />
              </Menu.Item>
              <Menu.Item name="login" onClick={handleChange} />
            </Menu>
            <Home />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
      <Media greaterThan="sm">
        <Menu pointing secondary>
          <Menu.Item className="item--red" color="red" onClick={handleChange}>
            <img src={logo} alt="" />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              className="item--red"
              name="cook"
              content="Become a Cook"
              color="red"
              onClick={handleChange}
            />
            <Menu.Item
              className="item--red"
              name="foodie"
              content="Join as Foodie"
              color="red"
              onClick={handleChange}
            />
            <Menu.Item name="login" onClick={handleChange} />
          </Menu.Menu>
        </Menu>
        <Home />
      </Media>
    </MediaContextProvider>
  );
};

export default Navbar;
