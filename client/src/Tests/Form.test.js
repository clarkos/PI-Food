import React from "react";
import { fireEvent, render, screen , within} from "@testing-library/react";
import { MemoryRouter } from "react-router";
import FormContainer from "../Components/Visual/Form/FormContainer";
import '@testing-library/jest-dom/extend-expect'

const action = () => {
  console.log("click");
};

const submission = {
  name: "",
  summary: "",
  score: 0,
  healthScore: 0,
  steps: ["", []],
  diets: [],
};

const stepModel = ["", ""];
const diets = [
  { ID: "6d2a0ea0-e807-11eb-93d4-31d429479d97", name: "ketogenic" },
  { ID: "6d2aaae1-e807-11eb-93d4-31d429479d97", name: "ovo vegetarian" },
];
const dietList = {};

diets.forEach((diet) => {
  dietList[diet.name] = false;
});

describe("<Form/>", () => {
  describe("default", () => {
    beforeEach(() => {
      const handleClick = jest.fn();
      render(
        <MemoryRouter>
          <FormContainer
            submission={submission}
            dietsLoaded={diets}
            part={["", [[...stepModel]]]}
            handleSubmit={handleClick}
            handleSubmissionChange={action}
            handleCheckboxChange={action}
            handleInstrucctions={action}
            addStep={action}
            removeStep={action}
            danger={false}
            submission={submission}
          />
        </MemoryRouter>
      );
    });
    it("renders title", () => {
      screen.getByText("Submit your own recipe!");
    });
    it("maps checkbox for each diet", () => {
      const keto = screen.getByLabelText("ketogenic");
      const ov = screen.getByLabelText("ovo vegetarian");
      expect(keto).toBeInTheDocument();
      expect(ov).toBeInTheDocument();
    });
    it("renders Inputs with default placeholder correctly", () => {
      const title = screen.getByPlaceholderText("Title *");
      const sum = screen.getByPlaceholderText("Summary *");
      expect(title).toBeInTheDocument();
      expect(sum).toBeInTheDocument();
    });
    it('should show  1 step inputs ', () => {
        const input0 = screen.queryByPlaceholderText(/step 0/);
        const input1 = screen.queryByPlaceholderText(/step 1/);
        const input2 = screen.queryByPlaceholderText(/step 2/);
        const input3 = screen.queryByPlaceholderText(/step 3/);
        expect(input0).not.toBeInTheDocument();
        expect(input1).toBeInTheDocument();
        expect(input2).not.toBeInTheDocument();
        expect(input3).not.toBeInTheDocument();
    })
    it('should render checkboxes for the amount of diets passed', () => {
        const CBs = screen.getAllByRole('checkbox')
        expect(CBs).toHaveLength(2)
    })

    it('should render 4 text inputs', () => {
        const inputs = screen.getAllByRole('textbox')
        expect(inputs).toHaveLength(4)
    })
    it('should render 2 num inputs', () => {
        const inputs = screen.getAllByRole('spinbutton')
        expect(inputs).toHaveLength(2)
    })
  });

  describe('buttons', () => {
    it("submits successfully ", () => {
        const handleClick = jest.fn().mockImplementation((e) => e.preventDefault());
        render(
          <MemoryRouter>
            <FormContainer
              submission={submission}
              dietsLoaded={diets}
              part={["", [[...stepModel]]]}
              handleSubmit={handleClick}
              handleSubmissionChange={action}
              handleCheckboxChange={action}
              handleInstrucctions={action}
              addStep={action}
              removeStep={action}
              danger={false}
              submission={submission}
            />
          </MemoryRouter>
        );
      fireEvent.click(screen.getByText(/Submit/, { selector: "button" }));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('changes title and summary placeholder if danger is true', () => {
        render(
            <MemoryRouter>
              <FormContainer
                submission={submission}
                dietsLoaded={diets}
                part={["", [[...stepModel]]]}
                handleSubmit={action}
                handleSubmissionChange={action}
                handleCheckboxChange={action}
                handleInstrucctions={action}
                addStep={action}
                removeStep={action}
                danger={true}
                submission={submission}
              />
            </MemoryRouter>
          );
            const title = screen.getByPlaceholderText("A title is required");
            const sum = screen.getByPlaceholderText("A summary is required");
            expect(title).toBeInTheDocument();
            expect(sum).toBeInTheDocument();
    })
  })
});
