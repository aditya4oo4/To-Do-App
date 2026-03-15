let btn = document.querySelector("#Add");
let input = document.querySelector("input");



btn.addEventListener("click", () => {
    let taskes = input.value.trim();
    console.log(taskes);
    if (taskes == "") {
        return;

    }
    let list = document.createElement("li");
    list.innerText = taskes;

    let btn3 = document.createElement("button");
    btn3.id = "done"
    btn3.innerText = "Done";
    let btn2 = document.createElement("button");
    btn2.id = "Delete"
    btn2.innerText = "Delete Task";

    list.appendChild(btn3);
    list.appendChild(btn2);

    let ul = document.querySelector("ul");
    ul.appendChild(list);
    input.value = "";
    btn2.addEventListener("click", () => {
        list.remove();


    });
    btn3 = document.querySelector("#done");
    btn3.addEventListener("click", () => {
        btn3.innerText = "✔️"
    })

});
