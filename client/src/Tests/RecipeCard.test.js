import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import RecipeCard from "../Components/Visual/Home/Card/RecipeCard";

describe("<RecipeCard/>", () => {
  describe("default", () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <RecipeCard name="it title" img='a' id='3'/>
        </MemoryRouter>
      );
    });
    it("renders title given", () => {
      screen.getByText("it title");
    });
    it("renders no diets by default", () => {
      screen.getByText("no diets associated");
    });
    it("renders 0 as score by default", () => {
      screen.getByText("0");
    });
    
  });


  describe("on detail", () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <RecipeCard name="it title" score='75' diets={["dairy free", "vegan"]} img='a' id='3'/>
        </MemoryRouter>
      );
    });

    it('renders score correctly', () => {
      screen.getByText("75");
    });
    it('renders diets correctly', () => {
      screen.getByText("• dairy free • vegan");
    });
  })
});
