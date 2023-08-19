// added to create a uuidfor each item
const uuidv4 = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};

//render the list
const renderList = () => {
  const shoppingList = document.getElementById("shoppingList");
  shoppingList.innerHTML = "";

  shoppingData.forEach((item) => {
    console.log(item);
    const shoppingItem = document.createElement("li");
    const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");
    const content = document.createElement("div");
    const actions = document.createElement("div");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    input.type = "checkbox";
    input.checked = item.done;
    span.classList.add("dot");
    content.classList.add("content");
    actions.classList.add("actions");
    editBtn.classList.add("edit");
    deleteBtn.classList.add("delete");
    content.innerHTML = `<input type="text" value="${item.content}" readonly />`;
    editBtn.innerHTML = "Edit";
    deleteBtn.innerHTML = "Delete";

    //build the item
    label.appendChild(input);
    label.appendChild(span);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    shoppingItem.appendChild(label);
    shoppingItem.appendChild(content);
    shoppingItem.appendChild(actions);

    shoppingList.appendChild(shoppingItem);

    //add class of done to item if checked to display line through
    if (item.done) {
      shoppingItem.classList.add("done");
    }

    input.addEventListener("click", (e) => {
      item.done = e.target.checked;
      localStorage.setItem("shoppingData", JSON.stringify(shoppingData));
      if (item.done) {
        span.classList.add("done");
      } else {
        span.classList.remove("done");
      }
      renderList();
    });

    //edit item from list
    editBtn.addEventListener("click", (e) => {
      const input = content.querySelector("input");

      input.readOnly = !input.readOnly;
      if (!input.readOnly) {
        input.focus();
        input.addEventListener("blur", (e) => {
          input.setAttribute("readonly", true);
          item.content = e.target.value;
          localStorage.setItem("shoppingData", JSON.stringify(shoppingData));
          renderList();
        });
      }
    });

    //delete item from list
    deleteBtn.addEventListener("click", (e) => {
      shoppingData = shoppingData.filter(
        (shoppingItem) => shoppingItem.id !== item.id
      );
      localStorage.setItem("shoppingData", JSON.stringify(shoppingData));
      renderList();
    });
  });
};

window.addEventListener("load", () => {
  shoppingData = JSON.parse(localStorage.getItem("shoppingData")) || [];
  const form = document.getElementById("myForm");
  const input = document.getElementById("item");
  renderList();

  // test is empty is submitted before adding to list
  const validateItem = (text) => {
    if (text !== "") {
      itemToBeAdded = { content: text, id: uuidv4(), done: false };
      shoppingData.push(itemToBeAdded);
    }
  };
try {
  //submit for the form to add item to list
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateItem(input.value);

    shoppingData.sort((a, b) => {
      const itemA = a.content.toUpperCase();
      const itemB = b.content.toUpperCase();
      if (itemA < itemB) {
        return -1;
      }
      if (itemA > itemB) {
        return 1;
      }
      return 0;
    });

    localStorage.setItem("shoppingData", JSON.stringify(shoppingData));
    e.target.reset();
    renderList();
  });
} catch (error) {
  console.log(error);
}
 
});
