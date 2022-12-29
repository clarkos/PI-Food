import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import DetailsContainer from "../Components/Visual/Details/DetailsContainer";

// bool, click, name, summary, score, healthScore, diets, dishTypes, image, steps
let bool = false;

const click = () => {
  bool = !bool;
};

let diets = ["vegan", "dairy free"];

let dishTypes = ["free food"];

describe("<RecipeCard/>", () => {
  describe("default", () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <DetailsContainer
            name="TITLE"
            bool={false}
            diets={diets}
            dishTypes={dishTypes}
            click={click}
            summary="summary"
            score="3"
            healthScore="4"
            image="asd"
            steps={[["", [["1", "paso uno"],["2", 'paso dos']]]]}
          />
        </MemoryRouter>
      );
    });

    it("renders title and summary correctly", () => {
      screen.getByText("TITLE");
      screen.getByText("summary");
    });
    it("renders score and healthScore correctly", () => {
      screen.getByText("User score: 3");
      screen.getByText("Health score: 4");
    });
    it("renders show instructions by default", () => {
      let show = screen.queryByText("show instructions");
      let hide = screen.queryByText("Hide");
      expect(hide).not.toBeInTheDocument();
      expect(show).toBeInTheDocument();
    });
    it('doesnt render steps by default', () => {
      let step1 = screen.queryByText('1 paso uno')
      let step2 = screen.queryByText('2 paso dos')
      expect(step1).toBe(null)
      expect(step2).toBe(null)
    })
    it('renders diets correctly', () => {
      screen.getByText('• vegan')
      screen.getByText('• dairy free')
    })
    it('renders dish types correctly', () => {
      screen.getByText('free food •')
    })
  });
  describe('instructions', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <DetailsContainer
            name="TITLE"
            bool={true}
            diets={diets}
            dishTypes={dishTypes}
            click={click}
            summary="summary"
            score="3"
            healthScore="4"
            image="asd"
            steps={[["", [["1", "paso uno"],["2", 'paso dos']]]]}
          />
        </MemoryRouter>
      );
    });
    it('shows Hide button', () => {
      
      let show = screen.queryByText("show instructions");
      let hide = screen.queryByText("Hide");
      expect(hide).toBeInTheDocument();
      expect(show).not.toBeInTheDocument();
    })
    it('shows instructions as title if none was give', () => {
      screen.getByText('instructions')
    })
    it('shows every step', () => {
      screen.getByText('1 paso uno')
      screen.getByText('2 paso dos')
    })
  })
});
