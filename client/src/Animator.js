import { createElement, wait } from "./utils.js";

/**
 * Animates the width and height of a container depending on its content. */
export class Animator {
  /** Creates an inner container if one's not already there. */
  constructor(target, settings) {
    this.outer = target; // outer container.
    this.settings = settings;
    // set outer's content to inner
    this.inner = createElement("div", "class=animator-inner");
    this.outer.replaceChildren(this.inner);
  }
  /** Change inner's content and animate outer's width and height to fit it. */
  async animateTo(newHTML, transitionDuration = 0) {
    // get dimensions
    const dimensions = this.getHTMLDimensions(newHTML);

    this.outer.style.width = `${Math.max(
      dimensions.width,
      this.settings.minWidth || 0
    )}px`;
    this.outer.style.height = `${dimensions.height}px`;
    // Wait a bit
    if (transitionDuration) await wait(transitionDuration);
    // then replace the content and unhide
    this.outer.replaceChildren(newHTML);
    this.inner = newHTML;

    return newHTML;
  }

  async animateAppend(newElement) {
    const elementDimensions = this.getHTMLDimensions(newElement),
      boxDimensions = this.getHTMLDimensions(this.inner);

    this.outer.style.width = `${Math.max(
      elementDimensions.width -
        elementDimensions.x +
        (boxDimensions.width - boxDimensions.x),
      this.settings.minWidth || 0
    )}px`;
    this.outer.style.height = `${
      elementDimensions.height +
      boxDimensions.height +
      (this.settings.padding ?? 0)
    }px`;
    console.log(newElement.children);
    this.inner.append(...newElement.children);
  }

  async setInner(newHTML) {
    await this.animateTo(newHTML, this.settings.transitionDuration || 0);
  }

  /**
   * Helper function to measure the dimensions of an element. We're usually measuring Inner.
   * @returns The dimensions of the element, in a DOMRect.
   */
  getHTMLDimensions(html) {
    // Clone the node & measure it, basically
    let cloned;
    if (html instanceof Element) cloned = html.cloneNode(true);
    else {
      cloned = createElement("div");
      cloned.append(
        ...[...html.children].map((child) => child.cloneNode(true))
      );
    }
    cloned.classList.add("invisible");
    document.body.append(cloned);
    const size = cloned.getBoundingClientRect();
    cloned.classList.remove("invisible");
    cloned.remove();
    return size;
  }
}
