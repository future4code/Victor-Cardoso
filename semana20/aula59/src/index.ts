export interface Character {
  name: string;
  health: number;
  strength: number;
  defense: number;
}

export const validateCharacter = (character: Character): boolean => {
  if (
    !character.name ||
    character.health === undefined ||
    character.strength === undefined ||
    character.defense === undefined
  ) {
    return false;
  }
  if (
    character.health <= 0 ||
    character.strength <= 0 ||
    character.defense <= 0
  ) {
    return false;
  }
  return true;
};

// a.
// export const performAttack = (attacker: Character, defender: Character) => {
//   if (!validateCharacter(attacker) || !validateCharacter(defender)) {
//     throw new Error("Invalid Character");
//   }
//   if (attacker.strength > defender.defense) {
//     defender.health -= attacker.strength - defender.defense;
//   }
// };

// b.
export const performAttack = (
  attacker: Character,
  defender: Character,
  validator: (character: Character) => boolean
) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid Character");
  }

  console.log(`${attacker.name} hp: (${attacker.health})`);
  console.log(`${defender.name} hp: (${defender.health})`);

  if (attacker.strength > defender.defense) {
    defender.health -= attacker.strength - defender.defense;
  }

  console.log(
    `${attacker.name} attacked ${defender.name} for ${attacker.strength} hit points.`
  );
  console.log(
    `${defender.name} received ${attacker.strength} damage from ${attacker.name}.`
  );

  console.log(`${defender.name}'s health is now ${defender.health}`);
};
