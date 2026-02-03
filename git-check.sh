#!/bin/bash

# --- Git Identity ---
echo "🔹 Git commit identity:"
git config user.name
git config user.email
echo ""

# --- Remote URL ---
echo "🔹 Git remote(s):"
git remote -v
echo ""

# --- Determine SSH host alias from origin ---
ORIGIN_URL=$(git remote get-url origin)
# Extract host alias (between git@ and : )
HOST_ALIAS=$(echo "$ORIGIN_URL" | sed -E 's/git@([^:]+):.*/\1/')
# For standard host aliases like github-big, github-videsigns
echo "🔹 SSH test:"
ssh -T $HOST_ALIAS


