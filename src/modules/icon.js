import myIcon from "../assets/images/icon.svg";

const link = document.createElement("link");
link.rel = "icon";
link.href = `${myIcon}`;
document.head.appendChild(link);
