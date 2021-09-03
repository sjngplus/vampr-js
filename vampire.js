class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let currentVampire = this;
    let count = 0;
    while(currentVampire.creator) {
      currentVampire = currentVampire.creator;
      count++;
    }
    return count;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    const thisVampCount = this.numberOfVampiresFromOriginal;
    const otherVampCount = vampire.numberOfVampiresFromOriginal;
    return thisVampCount < otherVampCount;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    const currentVampCount = this.numberOfVampiresFromOriginal;
    const otherVampCount = vampire.numberOfVampiresFromOriginal;
    if (currentVampCount < otherVampCount) {
      let currentVampire = vampire;
      while(currentVampire.creator) {
        if (currentVampire.boss === this) return this.name;
        currentVampire = currentVampire.creator;
      }
    }



    if (currentVampCount > otherVampCount) {

    }
    // console.log("test:", currentVampCount, otherVampCount);
  }
}

const rootVampire = new Vampire("root");
const offspring1 = new Vampire("a");
const offspring2 = new Vampire("b");
const offspring3 = new Vampire("c");
const offspring4 = new Vampire("d");
const offspring5 = new Vampire("e");
const offspring6 = new Vampire("f");
const offspring7 = new Vampire("g");
const offspring8 = new Vampire("h");

rootVampire.addOffspring(offspring1);
rootVampire.addOffspring(offspring2);
rootVampire.addOffspring(offspring3);
offspring3.addOffspring(offspring4);
offspring3.addOffspring(offspring5);
offspring5.addOffspring(offspring6);
offspring6.addOffspring(offspring7);
offspring2.addOffspring(offspring8);

offspring5.closestCommonAncestor(offspring6);

module.exports = Vampire;