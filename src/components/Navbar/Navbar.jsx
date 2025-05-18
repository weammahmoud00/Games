import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/home.css";

export default function Header() {
  const [activeCategory, setActiveCategory] = useState("mmorpg");
  const categories = ["mmorpg", "shooter", "sailing", "permadeath", "pixel"];
  const navigate = useNavigate();
  return (
    <>
      <Navbar
        className="w-75 mx-auto rounded-4 p-2 sticky-navbar"
        style={{ backgroundColor: "#3a497b" }}
      >
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            className="d-flex align-items-center"
          >
            <img
              width={40}
              src="https://routeegy.github.io/GameOOP/assets/images/logo-sm.png"
              alt="logo"
              className="me-2"
            />
            <span className="fw-bold text-light">Game Reviews</span>
          </Navbar.Brand>
          <Nav className="me-2">
            {categories.map((cat) => (
              <Nav.Link
                as={Link}
                to={cat === "shooter" ? "/shooter" : `/${cat}`}
                key={cat}
                className={`text-light ${
                  activeCategory === cat ? "active" : ""
                }`}
                onClick={() => setActiveCategory(cat)}
                style={{ textTransform: "capitalize" }}
              >
                {cat}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
