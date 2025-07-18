import { createRoot } from "react-dom/client";
import CustomCarousel from "./Carousel.jsx";

class Carousel extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const mountPoint = document.createElement("div");
    mountPoint.id = "custom-element";

    this.shadow.innerHTML = `<style>
            .carousel {
                display: flex;
                width: 98vw;
                height: 400px;
                overflow-x: scroll;
                overflow-y: hidden;
                padding: 15px;
                border: 1px solid black;
                box-sizing: border-box;
            }
        </style>`;
    this.shadow.appendChild(mountPoint);
    const root = createRoot(mountPoint);
    root.render(<CustomCarousel />);
  }
}

customElements.define("ai-carousel", Carousel);
