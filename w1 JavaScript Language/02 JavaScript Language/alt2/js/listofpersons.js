var manager = {};

manager.domain = {};
manager.domain.Person = function (name, address) {
    this.name = name;
    this.address = address;
}

manager.domain.Person.prototype.toString = function () {
    return this.name + " (" + this.address + ")";
}


manager.gui = (function () {
    function update() {
        var personsElement = document.getElementById("persons");
        clear(personsElement);

        populate(personsElement);
    }

    function clear(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    function populate(element) {
        var persons = manager.data.list();
        for (var i = 0; i < persons.length; i++) {
            addPersonToElement(element, persons[i]);
        }
    }

    function addPersonToElement(element, person) {
        var textElement = document.createElement("p");
        var textNode = document.createTextNode(person.toString());
        textElement.appendChild(textNode);

        element.appendChild(textElement);
    }

    function buttonPressed() {
        // toteuta tänne toiminnallisuus, jossa haet dokumentissa olevasta
        // lomakkeesta nimen ja osoitteen, luot niistä uuden henkilön, 
        // ja lopulta kutsut manager.data.add -funktiota, jolle annat parametrina
        // henkilön

        var personName = document.getElementById('name').value;
        var personAddress = document.getElementById('address').value;
        var person = new manager.domain.Person(personName, personAddress);
        manager.data.add(person);
    }

    return {
        buttonPressed: buttonPressed,
        update: update
    };
})();

manager.data = (function (updateHook) {
    var persons = new Array();

    // toteuta tähän funktio addPerson, joka saa parametrina Person-olion.
    // Metodissa addPerson Person-olio lisätään persons-muuttujaan, jonka
    // jälkeen kutsutaan funktiota updateHook
    function addPerson(person) {
        persons.push(person);
        updateHook();
      }


    // toteuta tähän funktio list, joka palauttaa persons-muuttujan, eli listan
    function list() {
        return persons;
      }


    // palauta tässä funktiot addPerson siten, että sen julkinen nimi on add, ja
    // list siten, että sen julkinen nimi on list
   
      return {
        add: addPerson,
        list
    };


})(manager.gui.update);

function init() {
    var addPersonButton = document.getElementById("add-person");
    addPersonButton.addEventListener("click", manager.gui.buttonPressed, false);
}

