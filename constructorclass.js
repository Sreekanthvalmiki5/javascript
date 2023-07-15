class person {
    personname;
    personage;
    designity;
    constructor(name, age, designity) {
        this.personname = name;
        this.personage = age;
        this.designity = designity;
    }
};
console.log(new person("sree", 20, "student"));
console.log(new person("leelavathi", 45, "worker"));