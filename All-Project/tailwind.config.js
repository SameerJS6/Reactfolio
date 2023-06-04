/** @type {import('tailwindcss').Config} */

function withOpacity(VariableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${VariableName}) / ${opacityValue})`;
    }
    return `rgb(var(${VariableName}))`;
  };
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: withOpacity("--primary"),
        onPrimary: withOpacity("--on-primary"),
        primaryContainer: withOpacity("--primary-container"),
        onPrimaryContainer: withOpacity("--on-primary-container"),

        secondary: withOpacity("--secondary"),
        onSecondary: withOpacity("--on-secondary"),
        secondaryContainer: withOpacity("--secondary-container"),
        onSecondaryContainer: withOpacity("--on-secondary-container"),

        tertiary: withOpacity("--tertiary"),
        onTertiary: withOpacity("--on-tertiary"),
        tertiaryContainer: withOpacity("--tertiary-container"),
        ontertiaryContainer: withOpacity("--on-tertiary-container"),

        error: withOpacity("--error"),
        onError: withOpacity("--on-error"),
        errorContainer: withOpacity("--error-container"),
        onErrorContainer: withOpacity("--on-error-container"),

        onBackground: withOpacity('--on-background'),

        surface: withOpacity("--surface"),
        onSurface: withOpacity("--on-surface"),

        surfaceVariant: withOpacity("--surface-variant"),
        onSurfaceVariant: withOpacity("--on-surface-variant"),
      },
    },
  },
  plugins: [],
};
