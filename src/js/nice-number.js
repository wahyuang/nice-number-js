class NiceNumber {
  constructor(element, options) {
    this.element = element;
    this.options = {
      className: ``,
      ...options,
    };

    const parentElement = element.parentNode;

    const div = this.createUI(element);
    parentElement.appendChild(div);
  }

  createUI(element) {
    const wrapper = this.createWrapper();
    const buttonPlus = this.createButtonPlus();
    const buttonMin = this.createButtonMin();

    wrapper.append(buttonMin, element, buttonPlus);
    document.body.appendChild(wrapper);

    return wrapper;
  }

  createWrapper() {
    const { className } = this.options;

    const defaultCn = "pxcookie-spinner";
    const fullCn = className ? defaultCn.concat(" ", className) : defaultCn;

    const wrapper = document.createElement("div");
    wrapper.className = fullCn;

    return wrapper;
  }

  createButtonPlus() {
    const buttonPlus = document.createElement("button");
    buttonPlus.className = "pxcookie-button plus";
    buttonPlus.textContent = "+";
    buttonPlus.type = "button";

    buttonPlus.addEventListener("click", (btn) => {
      btn.target.parentNode.querySelector("input[type=number]").stepUp();
    });

    return buttonPlus;
  }

  createButtonMin() {
    const buttonMin = document.createElement("button");
    buttonMin.className = "pxcookie-button min";
    buttonMin.textContent = "-";
    buttonMin.type = "button";

    buttonMin.addEventListener("click", (btn) => {
      btn.target.parentNode.querySelector("input[type=number]").stepDown();
    });

    return buttonMin;
  }
}

export default NiceNumber;
