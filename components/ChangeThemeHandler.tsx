import { ThemeContext } from "@/interface/ThemeContext";

function ChangeThemeHandler({
  btnColor,
  values: { state, toggleThemeHandler },
}: {
  btnColor: string;
  values: ThemeContext;
}) {
  return (
    <div className="btn-group">
      <button
        className={`btn ${btnColor} text-capitalize`}
        onClick={() => toggleThemeHandler()}
      >
        {state} mode
      </button>
    </div>
  );
}

export default ChangeThemeHandler;
