/** Storage key shared by the inline script and the toggle. */
export const THEME_STORAGE_KEY = "theme";

/**
 * Runs before first paint. Applies a stored explicit choice; with no choice,
 * leaves the attribute off so CSS follows the OS preference.
 */
export const themeScript = `(()=>{try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}})()`;
