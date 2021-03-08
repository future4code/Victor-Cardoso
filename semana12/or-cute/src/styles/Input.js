const Input = {
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    bgColor: "green",
  },
  sizes: {
    sm: {
      fontSize: "12px",
      padding: "16px",
      margin: "2",
    },
    md: {
      fontSize: "16px",
      padding: "24px",
      margin: "2",
    },
  },
  variants: {
    solid: {
      border: "2px solid",
      borderColor: "green.500",
      color: "green.500",
    },
  },
  defaultProps: {
    size: "md",
    variant: "solid",
  },
};

export default Input;
