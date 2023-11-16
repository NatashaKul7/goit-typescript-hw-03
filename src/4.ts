class Key {
  constructor(private signature: string = Math.random().toString()) {}

  getSignature(): string {
    return this.signature;
  }
}
class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  public door: boolean = false;
  public key: Key;
  public tenants: Person[] = [];

  comeIn(person: Person) {
    if (this.door === true) {
      this.tenants.push(person);
    }
  }

  public abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  public openDoor(key: Key): boolean {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      return true;
    } else {
      return false;
    }
  }
}

const key = new Key();
const person = new Person(key);

const house = new MyHouse();

house.openDoor(person.getKey());

house.comeIn(person);

export {};
