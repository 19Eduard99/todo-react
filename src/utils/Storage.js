class Storage {
  #dbName = "TODO";

  getItems() {
    return JSON.parse(localStorage.getItem(this.#dbName));
  }

  setItem(value) {
    if (typeof value !== "object")
      throw new Error("Should be an Object data type");

    localStorage.setItem(this.#dbName, JSON.stringify(value));

    return value;
  }
}

export default new Storage();
