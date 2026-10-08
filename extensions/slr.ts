import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export default function slrExtension(pi: ExtensionAPI) {
	pi.registerCommand("start-slr", {
		description: "Starts a guided Systematic Literature Review (SLR).",
		handler: async (args, ctx) => {
			if (!ctx.isIdle()) {
				ctx.ui.notify("The agent is currently busy. Please start the SLR afterwards.", "warning");
				return;
			}

			const context = args.trim();
			pi.sendUserMessage(
				`/skill:slr-workflow${context ? ` ${context}` : ""}`,
			);
		},
	});
}
