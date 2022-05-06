const calculateHp = (pokemonHp) => {
  const hp = +pokemonHp;
  if (hp >= 0 && hp <= 100) return hp;
  if (hp > 100) return 100;

  return 0;
};

const calculateStrength = (attacks) => {
  if (Array.isArray(attacks)) {
    const strength = attacks.length * 50;
    if (strength >= 0 && strength <= 100) return strength;
  }
  return 0;
};

const calculateWeakness = (weaknesses) => {
  if (Array.isArray(weaknesses)) {
    // Not sure why in example is multiply with 50 ?
    const weakness = weaknesses.length * 100;
    if (weakness >= 0 && weakness <= 100) return weakness;
  }
  return 0;
};

const calculateDamage = (attacks) => {
  if (Array.isArray(attacks)) {
    return attacks.reduce((prev, current) => prev + +current.damage?.replace(/\D/g, ''), 0);
  }
  return 0;
};

const calculateHappiness = (hp, damage, weakness) => {
  const happiness = (hp / 10 + damage / 10 + 10 - weakness / 100) / 5;
  return Math.round(happiness);
};

const mapPokemonStatus = (pokemon) => {
  const { hp, attacks, weaknesses } = pokemon;

  const calcHp = calculateHp(hp);
  const calcStrength = calculateStrength(attacks);
  const calcWeakness = calculateWeakness(weaknesses);
  const calcDamage = calculateDamage(attacks);
  const calcHappiness = calculateHappiness(calcHp, calcDamage, calcWeakness);
  return {
    hp: calcHp,
    strength: calcStrength,
    weakness: calcWeakness,
    happiness: calcHappiness,
    damage: calcDamage,
  };
};

export default mapPokemonStatus;
