import "@ryangjchandler/spruce";
import "alpinejs";

if ("serviceWorker" in navigator) {
  new Worker(new URL("./service-worker.js", import.meta.url), {
    name: "my-worker",
    type: "module",
  });
}
