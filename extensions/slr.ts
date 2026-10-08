import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Box, Text } from "@earendil-works/pi-tui";

export default function slrExtension(pi: ExtensionAPI) {
	pi.registerMessageRenderer("slr-phase", (message, { outputPad }, theme) => {
		const details = message.details as { phase: number } | undefined;
		const header = theme.fg("accent", theme.bold(`Phase: ${details?.phase ?? 0}`));
		const box = new Box(outputPad, 1, (text) => theme.bg("customMessageBg", text));
		box.addChild(new Text(`${header}\n${message.content}`, 0, 0));
		return box;
	});

    pi.on("session_start", async (_event, ctx) => {
        if (ctx.hasUI) {
            ctx.ui.notify("Hello world!", "info");
            ctx.ui.notify("start-slr", "info");
        }
    });

	pi.registerCommand("hello", {
		description: "Prints Hello world",
		handler: async () => {
			pi.sendMessage({
				customType: "hello-world",
				content: "Hello world!",
				display: true,
			});
		},
	});

    pi.registerCommand("start-slr", {
		description: "Starts a guided Systematic Literature Review (SLR).",
		handler: async (args, ctx) => {
			if (!ctx.isIdle()) {
				ctx.ui.notify("The agent is currently busy. Please start the SLR afterwards.", "warning");
				return;
			}

			const context = args.trim();
			pi.sendMessage({
				customType: "slr-phase",
				content: "Define the scope of your SLR. I will guide you through the required details.",
				display: true,
				details: { phase: 1 },
			});
			pi.sendUserMessage(
				`/skill:slr-workflow${context ? ` ${context}` : ""}`,
			);
		},
	});
}
