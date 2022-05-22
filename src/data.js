const animals = [
  {
    name: "cat",
    sound: "meow",
    feedings: {
      food: 2,
      water: 3
    }
  },
  { name: "dog", sound: "woof" }
];

function useAnimals(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    }
  ];
}
export { useAnimals };
export default animals;
