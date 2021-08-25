<template>
  <styled-button size="large">{{ children }}</styled-button>
</template>

<script lang="tsx">
import { reactive } from "vue";
import styled from "vue3-styled-components";

declare interface Button {
  size?: "small" | "medium" | "large";
}

const btnProps = {
  size: String
};

const SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
};

export const StyledButton = styled("button", btnProps)`
  font-size: 1rem;
  font-family: "Arial";
  font-weight: 500;
  cursor: pointer;
  border-radius: 0.3rem;
  outline: none !important;
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);
  background-color: #38a2f3 !important;
  ${props =>
    props.size === SIZES.LARGE
      ? "padding: 1rem 4.86rem"
      : props.size === SIZES.SMALL
      ? "padding: 0.6rem 1.8rem"
      : "padding:0.8rem 3.2rem"}; // SIZES.MEDIUM (Default value for undefind size)
`;

export default {
  name: "button",
  components: {
    "styled-button": StyledButton
  },
  props: {
    children: {
      type: String,
      required: true
    },
    size: {
      type: String,
      validator: function(value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      }
    },
    backgroundColor: {
      type: String
    }
  },
  setup(props) {
    // console.log(props.size);
    reactive(props);
  }
};
// name: "my-button",
// props: {
//   label: {
//     type: String,
//     required: true
//   },
//   primary: {
//     type: Boolean,
//     default: false
//   },
//   size: {
//     type: String,
//     validator: function(value) {
//       return ["small", "medium", "large"].indexOf(value) !== -1;
//     }
//   },
//   backgroundColor: {
//     type: String
//   }
// },
// emits: ["click"],
// setup(props, { emit }) {
//   props = reactive(props);
//   return {
//     classes: computed(() => ({
//       "storybook-button": true,
//       "storybook-button--primary": props.primary,
//       "storybook-button--secondary": !props.primary,
//       [`storybook-button--${props.size || "medium"}`]: true
//     })),
//     style: computed(() => ({
//       backgroundColor: props.backgroundColor
//     })),
//     onClick() {
//       emit("click");
//     }
//   };
// }
</script>
