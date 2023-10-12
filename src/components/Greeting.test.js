import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

// 여러 테스트를 감싼 Test Suites가 됨.
describe("Greeting Component", () => {
  test("renders Hello World as a text", () => {
    // 준비
    render(<Greeting />);

    // 테스트
    // 여긴 없음

    // 단언
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("rendes good to see you if th button was NOT clicked", () => {
    render(<Greeting />);

    const goodToSeeYouElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(goodToSeeYouElement).toBeInTheDocument();
  });

  test("rendes Changed! if th button was clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.getByText("Changed!", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render good to see you if the button was clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});

// 1. 준비 테스트하고하는 컴포넌트를 렌더링
// 2. 테스트 버튼클릭과같은 테스트를 실행
// 3. 단언 브라우저상에 보이는 아웃풋 검토
