import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import {act, Simulate} from 'react-dom/test-utils'
import {BrowserRouter} from 'react-router-dom'

let container = null;

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});


import {Home}  from '../../src/client/modules'
describe("Home", () => {
  beforeEach(async () => {
      await act(async () => {
          render(<BrowserRouter>
              <Home />
          </BrowserRouter>, container)
      })
  })
  
  it("list all quiz games", ()=> {
      // expect(document.querySelectorAll(".game").map(e => e.textContent)).totoEqual()
      expect(document.querySelector('h1').textContent).toEqual("Home")
  })

  // test("answers quiz incorrectly", () => {
  //     act(() => {
  //         Simulate.click(document.querySelector(".alternative"));
  //     })
  //     expect(document.querySelector("h1").textContent).toEqual("You lost!")
  // })

  // test("answers quiz correctly", () => {
  //     act(() => {
  //         Simulate.click(document.querySelectorAll(".alternative")[2])
  //     })
  //     expect(document.querySelector("h1").textContent).toEqual("You won!")
  // })
})