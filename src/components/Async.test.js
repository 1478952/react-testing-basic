import { render, screen } from "@testing-library/react";
import Async from "./Async";

// 서버의 내용을 변경하는 등 요청을 보내는 테스트는 하면 안됨. 모의작업을 진행할 것.
describe("Async Component", () => {
  test("renders posts if request succeeds", async () => {
    // 내장 fetch함수를 더미 fetch 함수로 뒤집어쓰는 것.
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: async () => [{ id: "p1", title: "First post" }],
      })
    );

    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
