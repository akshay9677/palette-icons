function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary-1": withOpacityValue("--brand-primary-1"),
        "brand-primary-2": withOpacityValue("--brand-primary-2"),
        "container-primary": withOpacityValue("--container-primary"),
        "container-secondary": withOpacityValue("--container-secondary"),
        "content-primary": withOpacityValue("--content-primary"),
        "content-secondary": withOpacityValue("--content-secondary"),
        "content-tertiary": withOpacityValue("--content-tertiary"),
        "border-primary": withOpacityValue("--border-primary"),
        "border-secondary": withOpacityValue("--border-secondary"),
      },

      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(8px)" },
          "100%": { transform: "translateY(0px)" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-13px)" },
          "100%": { transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "slide-up": "slide-up 0.1s ease-in-out forwards",
        "slide-down": "fade-in 0.1s ease-in-out forwards",
        "fade-in": "fade-in 0.2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
