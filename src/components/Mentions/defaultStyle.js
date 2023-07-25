export default {
  control: {
    backgroundColor: "#e5e7eb",
    fontSize: 14,
    fontWeight: "normal",
    borderRadius: "1.5rem",
    border: "2px solid transparent",
  },
  "&multiLine": {
    control: {
      fontSize: 16,
      minHeight: 300,
    },
    highlighter: {
      padding: 9,
      border: "1px solid transparent",
    },
    input: {
      padding: 30,
      height: "auto",
      overflowY: "auto",
    },
  },
  "&singleLine": {
    display: "inline-block",
    width: 200,
    highlighter: {
      padding: 1,
      border: "2px solid transparent",
    },
    input: {
      padding: 1,
    },
  },
  suggestions: {
    list: {
      backgroundColor: "white",
      border: "1px solid rgba(0,0,0,0.15)",
      fontSize: 14,
    },
    item: {
      padding: "5px 15px",
      borderBottom: "1px solid rgba(0,0,0,0.15)",
      "&focused": {
        backgroundColor: "#cee4e5",
      },
    },
  },
};
