let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    arr
      .filter((person) => person.profession === "developer")
      .map((developer) => console.log(developer.name));
  }
  
  function PrintDeveloperbyForEach() {
    arr.forEach((person) => {
      if (person.profession === "developer") {
        console.log(person.name);
      }
    });
  }
  
  function addData() {
    const newData = { id: 4, name: "alice", age: "22", profession: "developer" };
    arr.push(newData);
    console.log("Data added:", newData);
  }
  
  function removeAdmin() {
    const filteredArr = arr.filter((person) => person.profession !== "admin");
    console.log("Array with admin removed:", filteredArr);
  }
  
  function concatenateArray() {
    const newArray = [
      { id: 4, name: "alice", age: "22", profession: "developer" },
      { id: 5, name: "bob", age: "21", profession: "designer" },
    ];
  
    const concatenatedArray = arr.concat(newArray);
    console.log("Concatenated Array:", concatenatedArray);
  }
  
  // Usage examples:
  PrintDeveloperbyMap();
  PrintDeveloperbyForEach();
  addData();
  removeAdmin();
  concatenateArray();