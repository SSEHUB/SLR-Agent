# nvm installieren, falls noch nicht vorhanden
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# Shell-Konfiguration neu laden
source ~/.bashrc

#!/bin/bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

nvm install 24
nvm use 24
nvm alias default 24

node --version
npm --version
