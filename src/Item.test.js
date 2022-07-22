import React from "react";
import Item from "./Components/Item";

describe("Item shows image correctly", () => {
    it("renders correctly", () => {
        <Item image="https://via.placeholder.com/150" />;
    }
    );
}
);

describe("Item shows text", () => {
    it("renders correctly", () => {
        <Item text="Test" />;
    }
    );
}
);