import { makePurchase, User } from "../src/index";

test("Test if user balance is greater than purchase value", () => {
  const user: User = {
    name: "Vitin",
    balance: 420,
  };

  const result = makePurchase(user, 20);

  expect(result).toEqual({
    name: "Vitin",
    balance: 400,
  });
});

test("Test if user balance is equal to purchase value", () => {
  const user: User = {
    name: "Vitin",
    balance: 420,
  };

  const result = makePurchase(user, 420);

  expect(result?.balance).toEqual(0);
});

test("Teste if user balance is lower than purchase value", () => {
  const user: User = {
    name: "Vitin",
    balance: 420,
  };

  const purchase = 500;
  const result = makePurchase(user, purchase);

  expect(result?.balance).toBeUndefined();
});
