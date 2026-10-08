# Lokale Pi-Erweiterungen

Aus dem Repository-Verzeichnis starten:

```bash
./run_local.sh -e ./extensions
```

Beim interaktiven Start erscheint `Hello world!`. Mit `/hello` wird dieselbe
Meldung im Gespräch angezeigt, ohne eine Modellanfrage auszulösen.

Nur die einzelne Erweiterung laden:

```bash
./run_local.sh -e ./extensions/hello.ts
```

## Erweitern

- **Tools:** In `hello.ts` mit `pi.registerTool(...)` registrieren. Ein Beispiel
  steht in `../packages/coding-agent/examples/extensions/hello.ts`.
- **Befehle:** Weitere `pi.registerCommand(...)`-Aufrufe ergänzen.
- **Ereignisse:** Mit `pi.on(...)` auf Sitzungs- oder Tool-Ereignisse reagieren.
- **Module:** Größere Implementierungen in weitere TypeScript-Dateien auslagern
  und in `hello.ts` importieren. Unabhängige Erweiterungen zusätzlich unter
  `pi.extensions` in `package.json` eintragen.
- **Skills:** `skills/<name>/SKILL.md` anlegen, mit YAML-Frontmatter für `name`
  und `description` sowie den Anweisungen darunter.
- **Prompt-Vorlagen:** Markdown-Dateien unter `prompts/` anlegen.
- **Themes:** JSON-Dateien unter `themes/` anlegen.

Die Ressourcenordner müssen erst angelegt werden, wenn sie gebraucht werden.
Mit `-e ./extensions` lädt Pi alle im Paket angegebenen Ressourcen; mit
`-e ./extensions/hello.ts` nur die Erweiterung.

Nach Änderungen `/reload` ausführen. Eine separate Kompilierung ist nicht nötig.

API-Dokumentation: [Extensions](../packages/coding-agent/docs/extensions.md),
[Skills](../packages/coding-agent/docs/skills.md),
[Pi-Pakete](../packages/coding-agent/docs/packages.md).
