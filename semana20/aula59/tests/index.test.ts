import { Character, validateCharacter } from "../src/index";

// Exercício 2
// a.
test("Should verify if character name is empty.", () => {
  const flefs: Character = {
    name: "",
    health: 50,
    strength: 9,
    defense: 3,
  };

  const result: boolean = validateCharacter(flefs);

  expect(result).toBe(false);
});

// b.
test("Should verify if character health >= 0.", () => {
  const result = validateCharacter({
    name: "flefs",
    health: 0,
    strength: 9,
    defense: 3,
  });

  expect(result).toBe(false);
});

// c.
test("Should verify if character strength >= 0.", () => {
  const result = validateCharacter({
    name: "flefs",
    health: 50,
    strength: 0,
    defense: 3,
  });

  expect(result).toBe(false);
});
// d.
test("Should verify if character defense >= 0.", () => {
  const result = validateCharacter({
    name: "flefs",
    health: 50,
    strength: 9,
    defense: 0,
  });

  expect(result).toBe(false);
});

// e.
test("Should verify if any of character stats < 0.", () => {
  const result = validateCharacter({
    name: "flefs",
    health: 13,
    strength: 9,
    defense: 3,
  });

  expect(result).toBe(true);
});

// f.
test("Should verify if a character is valid.", () => {
  const result = validateCharacter({
    name: "flefs",
    health: 50,
    strength: 9,
    defense: 3,
  });

  expect(result).toBe(true);
});
