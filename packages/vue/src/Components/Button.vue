<template>
  <styled-button>{{ children }}</styled-button>
</template>

<script lang="tsx">
import { reactive, computed } from "vue";
import styled from "vue3-styled-components";

const StyledButton = styled.button`
  font-size: 1rem;
  font-family: "Arial";
  font-weight: 500;
  cursor: pointer;
  border-radius: 0.3rem;
  outline: none !important;
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);
  background-color: #38a2f3 !important;
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
