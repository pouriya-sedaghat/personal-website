type State = string;
type ToggleThemeHandler = () => void;

export interface ThemeContext {
  state: State;
  toggleThemeHandler: ToggleThemeHandler;
}
