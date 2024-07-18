import { useEffect } from "react";

export default function useKey(action, keypress) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === keypress.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, keypress]
  );
}
