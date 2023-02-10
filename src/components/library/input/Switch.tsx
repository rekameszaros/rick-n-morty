import "./Switch.css";

interface SwitchProps {
  primary?: boolean;
  backgroundColor?: string;
  onClick?: () => void;
}

export const Switch = ({
  primary = false,
  backgroundColor,
  ...props
}: SwitchProps) => {
  return (
    <label className="switch">
      <input type="checkbox"></input>
      <span
        className={[
          "slider round",
          // `storybook-button--${size}`,
          // mode,
        ].join(" ")}
        style={{ backgroundColor }}
        {...props}
      >
        <svg
          className="check"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </span>
    </label>
  );
};
