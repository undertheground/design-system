<template>
  <styled-button
    :size="size"
    :kind="kind"
    :isLoading="isLoading"
    :iconMode="iconMode"
    :iconName="iconName"
    @click="click"
    >{{ children }}</styled-button
  >
</template>

<script lang="tsx">
import { reactive } from "vue";
import styled from "vue3-styled-components";
import colors from "@undertheground/color";

const KIND = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  GHOST: "ghost"
};

const SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
};

declare type IconMode =
  | {
      iconMode?: "without-icon";
    }
  | {
      iconMode: "with-icon" | "icon-only";
      iconName: string;
    };

export type ButtonPropsWithoutChildren = {
  id?: string;
  children: String;
  kind?: typeof KIND[keyof typeof KIND];
  size?: typeof SIZES[keyof typeof SIZES];
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  style?: object;
} & IconMode;

// let btnProps: ButtonPropsWithoutChildren = {};

export const StyledButton = styled("button")`
font-size:1rem;
font-family:'Arial';
font-weight:500;
cursor:pointer;
border-radius:0.3rem;
outline:none !important;
transition: all 150ms ease-out;
transform: translate3d(0, 0, 0);

margin: 1rem;
height: 2.625rem;
padding: ${
  props =>
    props.size === SIZES.LARGE
      ? "0 4.063rem"
      : props.size === SIZES.SMALL
      ? "0 2.438rem"
      : "0 3.25rem" // SIZES.MEDIUM (Default value for undefind size)
};


${props => {
  if (!props.isLoading) return ``;

  return `
    background-color: ${colors.grey[0]} !important;
    border:0 !important;
    cursor: progress !important;
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  
    .loading{
      border-radius: 50%;
      width: 1rem;
      height: 1rem;
      border: .18rem solid #303030;
      border-top-color: #FAFAFA;
      animation: spin 1s infinite linear;
    }
    
    `;
}}

${props => {
  if (props.disabled) return ``;

  switch (props.kind) {
    case KIND.SECONDARY:
      return `
        color: ${colors.blue[4]};
        border:0.14rem solid ${colors.blue[4]};
        background-color:transparent;
        
        &:hover{
          background:${colors.blue[5]};
          color: ${colors.grey[1]};
          border:0.14rem solid transparent;
        }
        &:active{
          background:${colors.blue[6]};
          color: ${colors.grey[1]};
          border:0.14rem solid transparent;
        }`;

    case KIND.GHOST:
      return `
        color: ${colors.pink[3]};
        background-color:transparent;
        border:0.14rem solid transparent ;
        
        &:hover{
          background:${colors.grey[0]};
          border:0.14rem solid transparent;
        }
        &:active{
          
          border:0.14rem solid ${colors.pink[5]};
        }`;

    default:
      // props.kind === KIND.PRIMARY (default kind)

      return `
        border:0.14rem solid transparent;
        background-color: ${colors.pink[1]};
        color:${colors.white};
        
        &:hover{
          background: ${colors.pink[5]};
          border:0.14rem solid transparent;
        }
        &:active:{
          background: ${colors.pink[6]};
          border:0.14rem solid transparent;
        }`;
  }
}}


${props => {
  if (!props.disabled) return ``;
  const commonStyleForDisabled = `
        color:${colors.grey[3]};
        cursor: not-allowed;
        &:hover{
          transform: none;
        };
        `;
  switch (props.kind) {
    case KIND.SECONDARY:
      return (
        commonStyleForDisabled +
        `
        border:0.14rem solid ${colors.grey[0]};
        `
      );
    case KIND.GHOST:
      return (
        commonStyleForDisabled +
        `
      border:0.14rem solid transparent;
        background:${colors.white}
      `
      );
    default:
      return (
        commonStyleForDisabled +
        `
        background:${colors.grey[0]};
        border:0.14rem solid ${colors.grey[0]};  
      `
      );
  }
}}

${props => {
  if (props.iconMode === "without-icon" || !props.iconMode) return "";
  if (props.iconMode === "with-icon") {
    return `
    .content{
      display: flex;
      align-items:center;
    }
    .with-icon{
      display:inline-flex;
      padding:0 auto;
      vertical-align: middle;
    }
    .with-icon-${KIND.PRIMARY} {
      padding-right:0.4rem;
    }
  
    .with-icon-${KIND.SECONDARY}{
      padding-right:0.4rem;
    }

    .with-icon-${KIND.GHOST}{
      padding-right:0.4rem;
      
    }

    `;
  }
  if (props.iconMode === "icon-only") {
    return `
    padding:0.4rem !important;
    
    `;
  }
  return ``;
}}
`;

export default {
  name: "button",
  components: {
    "styled-button": StyledButton
  },
  props: {
    size: {
      type: String
      // validator: function(value) {
      //   return ["small", "medium", "large"].indexOf(value) !== -1;
      // }
    },
    children: {
      type: String
    },
    kind: {
      type: String
    },
    isLoading: {
      type: Boolean
    },
    iconMode: {
      type: String
    },
    iconName: {
      type: String
    },
    click: {
      type: Object
    }
  },
  emits: ["click"],
  setup(props: ButtonPropsWithoutChildren, { emit }) {
    // console.log(props.size);
    reactive(props);
    return {
      onClick() {
        emit("click");
      }
    };
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
