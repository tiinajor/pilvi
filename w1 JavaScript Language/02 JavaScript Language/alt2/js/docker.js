class Stuff {
    constructor(name, weight) {
      this.name = name;
      this.weight = weight;
    }
    getWeight(){
      return this.weight;
    }
  }
  
  class HandlingUnit {
    constructor(maxWeight) {
      this.maxWeight = maxWeight;
      this.items = [];
    }
    add(item) {
      if (this.validItem === item.constructor.name) {
        if (this.items.indexOf(item) === -1) {
          console.log(item.weight)
          if (this.maxWeight >= (this.getWeight() + item.getWeight())){
            this.items.push(item);
            return `${item.name || item.constructor.name} lisätty!`
          } else {
            throw new Error(`Liikaa painoa ${this.name}`);
          }
        } else {
          throw new Error(`${item.name} on jo!`);
        }
      } else {
        throw new Error(`${item.name} ei kuulu tänne!`);
      }
    }
  }
  
  class Bag extends HandlingUnit {
    constructor(maxWeight) {
      super(maxWeight);
      this.name = 'Bägi';
      this.validItem = 'Tavaraa';
    }
    getWeight(){
      let weight = 0
      this.items.forEach(el => {
        weight += Number(el.weight)
      });
      return weight;
    };
  }
  
  class Cargo extends HandlingUnit {
    constructor(maxWeight) {
      super(maxWeight);
      this.name = 'Cargo';
      this.validItem = 'Bägi';
    }
    getWeight(){
      let weight = 0
      this.items.forEach(el => {
        el.items.forEach(el => {
          weight += Number(el.weight)
        });
      });
      return weight;
    };
  }
  
  var stone = new Stuff('kivi', 3);
  var book = new Stuff('kirja', 7);
  var cotton = new Stuff('pumpuli', 0.001);
  var bag = new Bag(10);
  var vuitton = new Bag(3);
  var schenker = new Cargo(15);
  
  describe("Lisää kivi bägiin", function () {
    it("kivi lisätty!", function () {
      expect(bag.add(stone)).toBe(`${stone.name} lisätty!`);
    });
    it("Bägin pitäis painaa 3", function () {
      expect(bag.getWeight()).toBe(3);
    });
  });
  describe("Lisää taas kivi bägiin", function () {
    it("Throws errror: kivi on jo sisällä!", function () {
      expect(function () {
        bag.add(stone);
      }).toThrow(new Error("kivi on jo sisällä!"));
    })
  });
  
  describe("Lisää kirja bägiin", function () {
    it("Kirja lisätty", function () {
      expect(bag.add(book)).toBe(`${book.name} lisätty!`);
    })
    it("Bägin pitäis painaa 10", function () {
      expect(bag.getWeight()).toBe(10);
    });
  });
  
  describe("Lisää pumpulia bägiin", function () {
    it("Throws error: Liikaa painoa bägissä!", function () {
      expect(function () {
        bag.add(cotton);
      }).toThrow(new Error(`Liikaa painoa ${bag.name}`));
    })
  });
  
  describe("Lisää schenkeriin", function () {
    it("Bägi lisätty!", function () {
      expect(schenker.add(bag)).toBe(`${bag.constructor.name} lisätty!`);
    });
    it("Throws errror: Pumpuli ei kuulu tänne!", function () {
      expect(function () {
        schenker.add(cotton);
      }).toThrow(new Error(`${cotton.name} ei kuulu tänne!`));
    })
    it("Schenkerin painon pitäisi olla 10", function () {
      expect(schenker.getWeight()).toBe(10);
    });
  });
  
  describe("Lisää pumpulia Vuittoniin", function () {
    it("Pumpuli lisätty!", function () {
      expect(vuitton.add(cotton)).toBe(`${cotton.name} lisätty!`);
    });
  });
  
  describe("Lisää schenkeriin", function () {
    it("Vuitton lisätty!", function () {
      expect(schenker.add(vuitton)).toBe(`${vuitton.constructor.name} lisätty!`);
    });
    it("Schenker painon pitäisi olla 10.001", function () {
      expect(schenker.getWeight()).toBe(10.001);
    });
  });
  
  describe("Aseta pumpulin paino 300", function () {
    it("Schenker painon pitäisi olla 310", function () {
      cotton.weight = 300;
      expect(schenker.getWeight()).toBe(310);
    });
  });