import { describe, expect, it } from "vitest";

import { mount } from "@vue/test-utils";

import ToggleWrapper from "ui/toggle-wrapper/toggle-wrapper.vue";

describe("toggle-wrapper tests", () => {
  it("renders slots", () => {
    const hello = "hello";

    const wrapper = mount(ToggleWrapper, {
      props: {
        "modelValue": false,
        "onUpdate:modelValue": e => wrapper.setProps({ modelValue: e }),
      },
      slots: {
        default: `<div class="some-class">${hello}</div>`,
      },
    });

    expect(wrapper.html()).toContain(hello);
  });

  it("renders scoped slots", () => {
    const wrapper = mount(ToggleWrapper, {
      props: {
        "modelValue": false,
        "onUpdate:modelValue": e => wrapper.setProps({ modelValue: e }),
      },
      slots: {
        default: `
          <div class="some-class">{{ params.isActive }}</div>
        `,
      },
    });

    expect(wrapper.html()).toContain("false");
  });

  it("update v-model when clicked", async () => {
    const wrapper = mount(ToggleWrapper, {
      props: {
        "modelValue": false,
        "onUpdate:modelValue": e => wrapper.setProps({ modelValue: e }),
      },
      slots: {
        default: `
          <div class="some-class">{{ params.isActive }}</div>
        `,
      },
    });

    await wrapper.trigger("click");

    expect(wrapper.props("modelValue")).toBe(true);
    expect(wrapper.html()).toContain("true");

    await wrapper.trigger("click");
    expect(wrapper.props("modelValue")).toBe(false);
    expect(wrapper.html()).toContain("false");
  });
});
