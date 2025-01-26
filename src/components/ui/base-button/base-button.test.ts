import { describe, expect, it } from "vitest";

import { mount } from "@vue/test-utils";

import BaseButton from "ui/base-button/base-button.vue";
import { BUTTON_TYPES } from "ui/base-button/types";

describe("base-button tests", () => {
  it("renders with default props", () => {
    const wrapper = mount(BaseButton);

    expect(wrapper.classes()).toContain("base-button");
    expect(wrapper.classes()).toContain("base-button--primary");
    expect(wrapper.find(".base-button__content").text()).toBe("");
  });

  it("renders with labelText", () => {
    const labelText = "Click me!";
    const wrapper = mount(BaseButton, {
      props: {
        labelText,
      },
    });

    expect(wrapper.find(".base-button__content").text()).toBe(labelText);
  });

  describe("renders with btnType props", () => {
    it("renders primary button", () => {
      const wrapperPrimary = mount(BaseButton, {
        props: {
          btnType: BUTTON_TYPES.PRIMARY,
        },
      });

      expect(wrapperPrimary.classes()).toContain("base-button--primary");
    });

    it("renders secondary button", () => {
      const wrapperPrimary = mount(BaseButton, {
        props: {
          btnType: BUTTON_TYPES.SECONDARY,
        },
      });

      expect(wrapperPrimary.classes()).toContain("base-button--secondary");
    });

    it("renders terciary button", () => {
      const wrapperPrimary = mount(BaseButton, {
        props: {
          btnType: BUTTON_TYPES.TERCIARY,
        },
      });

      expect(wrapperPrimary.classes()).toContain("base-button--terciary");
    });
  });

  describe("renders with slots", () => {
    const labelText = "Click me!";

    const slots = {
      prepend: "prepend-slot",
      default: "default-slot",
      append: "append-slot",
    };

    it("renders prepend slot", () => {
      const wrapperWithPrepend = mount(BaseButton, {
        slots: {
          prepend: `<span class="prepend-slot">${slots.prepend}</span>`,
        },
      });

      const prependSlot = wrapperWithPrepend.find(".base-button__prepend");

      expect(prependSlot.exists()).toBe(true);
      expect(prependSlot.html()).toContain(slots.prepend);
    });

    it("renders default slot", () => {
      const labelText = "Click me!";
      const wrapperWithDefault = mount(BaseButton, {
        props: {
          labelText,
        },
        slots: {
          default: `<span class="default-slot">${slots.default}</span>`,
        },
      });

      const defaultSlot = wrapperWithDefault.find(".base-button__content");

      expect(defaultSlot.exists()).toBe(true);
      expect(defaultSlot.html()).toContain(slots.default);
      expect(defaultSlot.text()).not.toContain(labelText);
    });

    it("renders append slot", () => {
      const wrapperWithAppend = mount(BaseButton, {
        slots: {
          append: `<span class="append-slot">${slots.append}</span>`,
        },
      });

      const appendSlot = wrapperWithAppend.find(".base-button__append");

      expect(appendSlot.exists()).toBe(true);
      expect(appendSlot.html()).toContain(slots.append);
    });

    it("renders with all slots together", () => {
      const wrapperWithAllSlots = mount(BaseButton, {
        props: {
          labelText,
        },
        slots: {
          prepend: `<span class="prepend-slot">${slots.prepend}</span>`,
          default: `<span class="default-slot">${slots.default}</span>`,
          append: `<span class="append-slot">${slots.append}</span>`,
        },
      });

      expect(wrapperWithAllSlots.find(".base-button__prepend").exists()).toBe(true);
      expect(wrapperWithAllSlots.find(".base-button__prepend").html()).toContain(slots.prepend);

      expect(wrapperWithAllSlots.find(".base-button__content").exists()).toBe(true);
      expect(wrapperWithAllSlots.find(".base-button__content").html()).toContain(slots.default);
      expect(wrapperWithAllSlots.find(".base-button__content").text()).not.toContain(labelText);

      expect(wrapperWithAllSlots.find(".base-button__append").exists()).toBe(true);
      expect(wrapperWithAllSlots.find(".base-button__append").html()).toContain(slots.append);
    });
  });
});
