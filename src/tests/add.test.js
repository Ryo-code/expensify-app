const add = (a, b) => a + b;

test("should add two numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
  
  // This is basically what's under the hood of assertion libraries:
  // if (result !== 7) {
  //   throw new Error(`You added 4 & 3. The result was ${result}. Expect 7`)
  // }
});

test("should be a number", () => {
  const result = add(3, 4);
  expect(typeof result).toBe("number");

})

const generateGreeting = (name = "Anonymous") => `Hello ${name}!`;

test("should generate a greeting, using their name", () => {
  expect(generateGreeting("Mike")).toBe("Hello Mike!")
})

test("should generate greeting for no name", () => {
  const result = generateGreeting();
  expect(result).toBe("Hello Anonymous!");
})

