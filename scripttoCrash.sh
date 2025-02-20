#!/bin/bash

# Name of the Python script to run
PYTHON_SCRIPT="cpuUsage.py"

# Infinite loop to run the Python script
while true; do
    python3 "$PYTHON_SCRIPT"
    # You can add a delay if needed to avoid excessive resource usage
    # For example, to wait 2 seconds between runs: sleep 2
done
