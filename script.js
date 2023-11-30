let item = document.querySelector("#item")
let toDoBox = document.querySelector("#to-do-list")

item.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Enter") {
            addToDo(this.value)
            this.value = ""
        }
        if(event.value==""){
            alert("please enter data")
        }
    }
)

const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
 ${item}
<i class="fas fa-times"></i>
`;

    listItem.addEventListener(
        "click",
        function () {
            this.classList.toggle("done");
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function () {
            listItem.remove()
        }
    )
    toDoBox.appendChild(listItem)
}
