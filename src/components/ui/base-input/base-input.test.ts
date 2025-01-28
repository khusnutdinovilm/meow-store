import { describe, expect, it } from "vitest";

import { mount } from "@vue/test-utils";

import BaseInput from "ui/base-input/base-input.vue";
import type { IBaseInputProps } from "ui/base-input/types";

const mountBaseInput = (customProps: IBaseInputProps = {}) => {
  return mount(BaseInput, {
    props: {
      modelValue: "",
      ...customProps,
    },
  });
};

describe("base-input tests", () => {
  describe("renders base-input", () => {
    it("render with default props", () => {
      const wrapper = mountBaseInput();

      expect(wrapper.find(".base-input__field[type='text']").exists()).toBe(true);
      expect(wrapper.attributes("placeholder")).toBeUndefined();
      expect(wrapper.find(".base-input__label").exists()).toBe(false);
      expect(wrapper.classes()).not.toContain("base-input--danger");
      expect(wrapper.find(".base-input__label").exists()).toBe(false);
    });

    it("renders with placeholder", () => {
      const placeholder = "some-placeholder";

      const wrapper = mountBaseInput({ placeholder });

      expect(wrapper.find("input").attributes("placeholder")).toBe(placeholder);
    });

    it("renders with labelText", () => {
      const labelText = "some-label";

      const wrapper = mountBaseInput({ labelText });

      expect(wrapper.find(".base-input__label").exists()).toBe(true);
      expect(wrapper.find(".base-input__label").text()).toBe(labelText);
    });

    it("renders with errorText", () => {
      const errorText = "some-error";

      const wrapper = mountBaseInput({ errorText });

      expect(wrapper.find(".base-input__error-text").exists()).toBe(true);
      expect(wrapper.find(".base-input__error-text").text()).toBe(errorText);
    });

    it("renders with different input type", () => {
      const types = ["text", "number", "textarea"];

      for (const type in types) {
        const wrapper = mountBaseInput({ type });

        const inputField = wrapper.find(`.base-input__field[type="${type}"]`);

        expect(inputField.exists()).toBe(true);
      }
    });

    it("renders with all props", () => {
      const allProps: IBaseInputProps = {
        labelText: "some-label",
        errorText: "some-error",
        placeholder: "some-placeholder",
      };

      const { labelText, errorText, placeholder } = allProps;

      const wrapper = mountBaseInput(allProps);

      expect(wrapper.find(".base-input__label").text()).toBe(labelText);
      expect(wrapper.find(".base-input__error-text").text()).toBe(errorText);
      expect(wrapper.find(".base-input__field").attributes("placeholder")).toBe(placeholder);
    });
  });

  describe("renders with v-model", () => {
    it("modelValue should bu update", async () => {
      const modelValue = "some-text";

      const wrapper = mount(BaseInput, {
        props: {
          "modelValue": "initialValue",
          "onUpdate:modelValue": e => wrapper.setProps({ modelValue: e }),
        },
      });

      await wrapper.find(".base-input__field").setValue(modelValue);
      expect(wrapper.props("modelValue")).toBe(modelValue);
    });
  });
});
