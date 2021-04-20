import { Character, performAttack } from "../src";

test("Should perform Attack", () => {
  const validatorSuccess = jest.fn(() => {
    return true;
  });

  const attacker: Character = {
    name: "Thomas",
    health: 420,
    strength: 220,
    defense: 200,
  };

  const defender: Character = {
    name: "Fox",
    health: 420,
    strength: 420,
    defense: 20,
  };

  performAttack(attacker, defender, validatorSuccess as any);

  expect(defender.health).toEqual(220);
  expect(validatorSuccess).toHaveBeenCalled();
  expect(validatorSuccess).toHaveBeenCalledTimes(2);
  expect(validatorSuccess).toHaveReturnedTimes(2);
});

test("Perform Attack Fail", () => {
  expect.assertions(4);
  const validatorFail = jest.fn(() => {
    return false;
  });

  const attacker: Character = {
    name: "Thomas",
    health: 0,
    strength: 220,
    defense: 200,
  };

  const defender: Character = {
    name: "Fox",
    health: 420,
    strength: 420,
    defense: 200,
  };

  try {
    performAttack(attacker, defender, validatorFail as any);
  } catch (err) {
    expect(err.message).toBe("Invalid Character");
    expect(validatorFail).toHaveBeenCalled();
    expect(validatorFail).toHaveBeenCalledTimes(1);
    expect(validatorFail).toHaveReturnedTimes(1);
  }
});
