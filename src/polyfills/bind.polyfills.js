function printName() {
  // console.log("THIS = ", this);
  // console.log(`${this.name}, ${this.city}, ${this.state}, ${this.country}`);
}

const obj = {
  name: "Faiz",
  city: "New Delhi",
  state: "Delhi",
  country: "India",
};

const printMyName = printName.bind(obj);

Function.prototype.myBind = function (...args) {
  const obj = this;

  return function () {
    obj.apply(...args);
  };
};

const printMyName2 = printName.myBind(obj);
printMyName();
printMyName2();
