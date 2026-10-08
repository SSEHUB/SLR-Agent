docker run --rm -it \
  -v "$PWD:/workspace" \
  -v pi-agent-home:/root/.pi/agent \
  -v "$PWD/models.json:/root/.pi/agent/models.json:ro" \
  pi-sandbox \
  -e ./extensions \
  --model "local/unsloth/Qwen3.8-Flash-Next-GGUF:UD-Q4_K_XL"
