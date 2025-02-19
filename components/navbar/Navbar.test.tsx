import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe("Navbar", () => {});
