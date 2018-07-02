import _ from "lodash";
import "./style.css";

function component() {
    var element = document.createElement("div");
    element.innerHTML = _.join(["hello", "we1bpack"], " ");
    element.classList.add("hello");
    return element;
}
document.body.appendChild(component());