import React, { useState } from "react";
import { Button, Grid, Icon, Image, Input, Modal } from "semantic-ui-react";
import cook from "../assets/granny.png";
import kitchenOne from "../assets/kitchen-1.png";
import kitchenTwo from "../assets/kitchen-2.png";
import kitchenThree from "../assets/kitchen-3.png";
import moroccan from "../assets/moroccan.png";
import cherry from "../assets/cherry.png";
import donuts from "../assets/donuts.png";
import cakes from "../assets/cakes.png";
import spanich from "../assets/spanich.png";
import moreInfo from "../assets/more-info.svg";
import share from "../assets/share.svg";
import locate from "../assets/locate.svg";
import "../styles/Home.scss";

const Home = () => {
  const [isActive, setActive] = useState(false);
  const [form, setForm] = useState({});
  const [menus, setMenus] = useState([
    {
      id: 10012,
      name: moroccan,
      description: "Spicy Moroccan shakshuka",
      status: false,
    },
    {
      id: 10013,
      name: cherry,
      description: "Peasant's bean & bean stew",
      status: false,
    },
    {
      id: 10014,
      name: donuts,
      description: "Hearty beef bourguignon",
      status: false,
    },
    {
      id: 10015,
      name: cakes,
      description: "Royal lamb safron rice pilau",
      status: false,
    },
    {
      id: 10016,
      name: spanich,
      description: "Spicy Spanish patatas bravas",
      status: true,
    },
  ]);

  const handleChange = (id) => {
    let menu = menus.find((menu) => menu.id === id);
    menu.status = !menu.status;

    setMenus([...menus]);
    setForm({ ...form, status: menu.status });
  };

  const onViewMenu = (id, name, description, status) => {
    setActive(!isActive);
    setForm({ id, name, description, status });
  };

  return (
    <div className="fress">
      <Grid>
        <Grid.Row className="user-info">
          <Grid.Column className="avatar">
            <Image src={cook} />
          </Grid.Column>
          <Grid.Column className="details">
            <div className="bio">
              <h3>Welcome to Maria's Italian Kitchen</h3>
              <p>
                I was born in Puglia, in the south of italy, and grew up in a
                small village surrounded by old olive groves and vines. My
                mother and I used to spend a lot of time in the kitchen
              </p>
            </div>
            <div className="info">
              <span>Following 27</span>
              <span>Following 16K</span>
              <span>Joined September 2021</span>
              <span>Lives and cooks in London, England</span>
            </div>
          </Grid.Column>
          <Grid.Column className="contact">
            <div className="buttons">
              <Button content="follow @pastanona" color="red" />
              <Button content="share kitchen" color="red" inverted />
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column className='message'>
            <Input icon="comment alternate outline" iconPosition="left" placeholder="Send me a message" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column className="storage">
            <h4>
              <i>My Kitchen</i>
            </h4>
            <div className="kitchen">
              <Image src={kitchenOne} />
              <Image src={kitchenTwo} />
              <Image src={kitchenThree} />
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column className="menu">
            <h4>
              <i>My Food</i>
            </h4>
            <div className="food">
              {menus?.map(
                ({ id, name, description, status, ishighlighted = false }) => (
                  <div
                    className={`food__item ${ishighlighted ? "--active" : ""}`}
                  >
                    <Button type="checkbox" onClick={() => handleChange(id)}>
                      <Icon
                        name={status ? "heart" : "heart outline"}
                        size="large"
                        color={status ? "red" : "black"}
                      />
                    </Button>
                    <Image
                      src={name}
                      onClick={() => onViewMenu(id, name, description, status)}
                    />
                    <div className="overlay">{description}</div>
                  </div>
                )
              )}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Modal
        className="view-menu"
        size="tiny"
        open={isActive}
        onClose={() => setActive(false)}
      >
        <div>
          <Button type="checkbox" onClick={() => handleChange(form?.id)}>
            <Icon
              name={form?.status ? "heart" : "heart outline"}
              size="large"
              color={form?.status ? "red" : "grey"}
            />
          </Button>
          <div className="overlay">
            <div className="details">
              <h2>{form?.description}</h2>
              <div className="info">
                <span>$5 a porion</span>
                <span>No allergens</span>
                <span>Likes 12k</span>
              </div>
            </div>
            <div className="buttons">
              <div className="contact">
                <Image src={moreInfo} />
                <Image src={share} />
                <Image src={locate} />
              </div>
              <Button content="order now" color="red" />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
