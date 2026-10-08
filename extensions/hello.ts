import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export default function helloExtension(pi: ExtensionAPI) {
	pi.on("session_start", async (_event, ctx) => {
		if (ctx.hasUI) {
			ctx.ui.notify("Hello world!", "info");
		}
	});

	pi.registerCommand("hello", {
		description: "Gibt Hello world aus",
		handler: async () => {
			pi.sendMessage({
				customType: "hello-world",
				content: "Hello world!",
				display: true,
			});
		},
	});

	// Weitere Befehle, Tools und Event-Handler hier registrieren.
}
