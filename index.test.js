const ct = require("./ct.js");
// border style
test("border style", () => {
  expect(ct("border-solid", "border-dotted")).toBe("border-dotted");
});
test("border style", () => {
  expect(ct("border-solid", "border-dotted yash")).toBe("border-dotted yash");
});
test("border style", () => {
  expect(
    ct("border-solid border-gray-400", "border-gray-500 border-dotted yash")
  ).toBe("border-gray-500 border-dotted yash");
});
test("border style", () => {
  expect(
    ct(
      "border-solid border-gray-400 border-black",
      "border-gray-500 border-dotted yash"
    )
  ).toBe("border-gray-500 border-dotted yash");
});
test("border style", () => {
  expect(
    ct("border-solid border-black", "border-white border-dotted yash")
  ).toBe("border-white border-dotted yash");
});
// border collapse
test("border style", () => {
  expect(
    ct(
      "border-solid border-collapse",
      "border-seperate border-white border-dotted yash"
    )
  ).toBe("border-seperate border-white border-dotted yash");
});
// border width
test("border width", () => {
  expect(ct("border border-collapse", "border-seperate border-0")).toBe(
    "border-seperate border-0"
  );
});
test("border width", () => {
  expect(ct("border-0 border-collapse", "border-seperate border-2")).toBe(
    "border-seperate border-2"
  );
});
test("border width", () => {
  expect(ct("border-collapse", "border-seperate border")).toBe(
    "border-seperate border"
  );
});
// border individual width
test("border width", () => {
  expect(ct("border-t-0 border-collapse", "border-seperate border-t")).toBe(
    "border-seperate border-t"
  );
});
test("border width", () => {
  expect(
    ct(
      "border-t-0  border-b-0 border-collapse",
      "border-seperate border-t border-b-0"
    )
  ).toBe("border-seperate border-t border-b-0");
});
test("border width", () => {
  expect(
    ct(
      "border-t-0  border-b-2 border-collapse",
      "border-seperate border-t border-b-2"
    )
  ).toBe("border-seperate border-t border-b-2");
});
test("border width", () => {
  expect(
    ct(
      "border-t-0  border-b-2 border-collapse",
      "border-seperate border-t border-b"
    )
  ).toBe("border-seperate border-t border-b");
});
// border radius

test("border radiuses", () => {
  expect(ct("rounded", "rounded-sm")).toBe("rounded-sm");
});
test("border radiuses", () => {
  expect(ct("rounded-none", "rounded-sm")).toBe("rounded-sm");
});
test("border radiuses", () => {
  expect(ct("rounded-none", "rounded-sm rounded-yash")).toBe(
    "rounded-sm rounded-yash"
  );
});
//
test("border individual radiuses", () => {
  expect(ct("rounded-t-none", "rounded-yash rounded-t-sm")).toBe(
    "rounded-yash rounded-t-sm"
  );
});
test("border individual radiuses", () => {
  expect(ct("rounded-t-sm", "rounded-yash rounded-t-md rounded-b-md")).toBe(
    "rounded-yash rounded-t-md rounded-b-md"
  );
});
test("border individual radiuses", () => {
  expect(
    ct(
      "rounded-t-none rounded-b-sm rounded",
      "rounded-yash rounded-t-none rounded-b-sm"
    )
  ).toBe("rounded rounded-yash rounded-t-none rounded-b-sm");
});
//
test("flex align items", () => {
  expect(ct("items-center", "items-start")).toBe("items-start");
});
test("flex align items", () => {
  expect(ct("items-center", "items-baseline items-yash")).toBe(
    "items-baseline items-yash"
  );
});
// justify
test("flex justify items", () => {
  expect(ct("justify-center", "justify-start")).toBe("justify-start");
});
test("flex justify items", () => {
  expect(ct("justify-center", "justify-around")).toBe("justify-around");
});
// tex align
test("text align", () => {
  expect(ct("align-middle", "align-bottom")).toBe("align-bottom");
});
test("text align", () => {
  expect(ct("align-middle", "align-text-top")).toBe("align-text-top");
});
//backgroundd
test("bg postion", () => {
  expect(ct("bg-fixed", "bg-local")).toBe("bg-local");
});
test("bg postion", () => {
  expect(ct("bg-fixed bg-yash", "bg-local")).toBe("bg-yash bg-local");
});
test("bg color", () => {
  expect(ct("bg-fixed bg-yash bg-white", "bg-local bg-black")).toBe(
    "bg-yash bg-local bg-black"
  );
});
test("bg color", () => {
  expect(ct("bg-fixed bg-yash bg-white", "bg-local")).toBe(
    "bg-yash bg-white bg-local"
  );
});
test("bg color", () => {
  expect(ct("bg-fixed bg-yash bg-white-1", "bg-local")).toBe(
    "bg-yash bg-white-1 bg-local"
  );
});
test("bg color", () => {
  expect(ct("bg-fixed bg-yash bg-white", "bg-local bg-transparent")).toBe(
    "bg-yash bg-local bg-transparent"
  );
});
test("bg color", () => {
  expect(ct("bg-fixed bg-yash bg-white", "bg-local bg-current")).toBe(
    "bg-yash bg-local bg-current"
  );
});
test("bg color", () => {
  expect(ct("bg-fixed bg-yash bg-white bg", "bg-local bg-current")).toBe(
    "bg-yash bg bg-local bg-current"
  );
});
test("bg color with random class starting with bg", () => {
  expect(ct("bg-fixed bg-yash bg-white bg-a", "bg-local bg-b bg-current")).toBe(
    "bg-yash bg-a bg-local bg-b bg-current"
  );
});
test("bg color", () => {
  expect(
    ct("bg-fixed bg-yash bg-white bg-gray-100", "bg-local bg-b bg-gray-200")
  ).toBe("bg-yash bg-local bg-b bg-gray-200");
});

// bg repeat
test("bg repeat", () => {
  expect(ct("bg-repeat", "bg-no-repeat")).toBe("bg-no-repeat");
});
test("bg size", () => {
  expect(
    ct(
      "bg-fixed bg-yash bg-white bg-gray-100 bg-repeat",
      "bg-local bg-b bg-gray-200 bg-no-repeat"
    )
  ).toBe("bg-yash bg-local bg-b bg-gray-200 bg-no-repeat");
});
// bg size
test("bg size", () => {
  expect(ct("bg-auto", "bg-contain")).toBe("bg-contain");
});
test("bg size", () => {
  expect(
    ct(
      "bg-fixed bg-yash bg-white bg-gray-100 bg-repeat bg-auto",
      "bg-local bg-b bg-gray-200 bg-no-repeat bg-contain"
    )
  ).toBe("bg-yash bg-local bg-b bg-gray-200 bg-no-repeat bg-contain");
});
//
test("shadow", () => {
  expect(ct("shadow-sm", "shadow-lg")).toBe("shadow-lg");
});
//display
test("display with random single words", () => {
  expect(ct("flex yash", "block")).toBe("yash block");
});
test("display with random single words", () => {
  expect(ct("flex yash", "inline-block")).toBe("yash inline-block");
});
test("display with random single words", () => {
  expect(ct("flex flexy", "inline-flex")).toBe("flexy inline-flex");
});
// table-header-group
test("display with random single words", () => {
  expect(ct("flex flexy", "table-header-group")).toBe(
    "flexy table-header-group"
  );
});
test("display", () => {
  expect(ct("table-header-group flexy", "flex")).toBe("flexy flex");
});
test("display", () => {
  expect(ct("table-header-group flexy", "table")).toBe("flexy table");
});
test("display", () => {
  expect(ct("table-header-group1", "flow-root")).toBe(
    "table-header-group1 flow-root"
  );
});
test("display", () => {
  expect(ct("table-header-group flexy", "flow-root")).toBe("flexy flow-root");
});
// flex
test("flex", () => {
  expect(ct("flex flex-1", "flex-auto")).toBe("flex flex-auto");
});
test("flex", () => {
  expect(ct("flex flex-1 flex-grow", "flex-auto flex-grow-0")).toBe(
    "flex flex-auto flex-grow-0"
  );
});
test("height", () => {
  expect(ct("hi h-auto", "h-full")).toBe("hi h-full");
});
test("height", () => {
  expect(ct("h-auto", "h-full hi")).toBe("h-full hi");
});
test("height", () => {
  expect(ct("h-auto", "h-32 hi")).toBe("h-32 hi");
});

test("sr accessibility", () => {
  expect(ct("sr-only", "not-sr-only")).toBe("not-sr-only");
});
test("sr accessibility", () => {
  expect(ct("not-sr-only", "sr-only")).toBe("sr-only");
});
// resize
test("resize", () => {
  expect(ct("resize-x", "resize-y")).toBe("resize-y");
});
test("resize", () => {
  expect(ct("resize-x", "resize-none")).toBe("resize-none");
});
test("skew", () => {
  expect(ct("skew-x-4", "skew-x-6")).toBe("skew-x-6");
});
test("scale", () => {
  expect(ct("scale-x-4", "scale-x-6 scale-y-0")).toBe("scale-x-6 scale-y-0");
});
test("scale", () => {
  expect(ct("scale-0 scale-x-4", "scale-x-6 scale-y-0")).toBe(
    "scale-0 scale-x-6 scale-y-0"
  );
});
test("scale", () => {
  expect(ct("scale-0 scale-x-4", "scale-50 scale-x-6 scale-y-0")).toBe(
    "scale-50 scale-x-6 scale-y-0"
  );
});
test("space", () => {
  expect(ct("space-x-4", "space-x-px space-y-0")).toBe("space-x-px space-y-0");
});
test("divide", () => {
  expect(ct("divide-x", "divide-x-0")).toBe("divide-x-0");
});
test("negetive prefixed classes", () => {
  expect(ct("skew-x-3", "-skew-x-3")).toBe("-skew-x-3");
});
