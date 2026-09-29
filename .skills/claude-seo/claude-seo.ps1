param(
    [Parameter(ValueFromRemainingArguments=$true)]
    [string[]]$ScriptArgs
)

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
if (-not $env:CLAUDE_SEO_DATA_DIR) {
    $env:CLAUDE_SEO_DATA_DIR = $scriptDir
}

$runtime = Join-Path $scriptDir "runtime.py"
if (-not (Test-Path $runtime)) {
    $runtime = Join-Path $scriptDir "scripts\runtime.py"
}

if (-not (Test-Path $runtime)) {
    Write-Error "runtime.py not found in $scriptDir or $scriptDir\scripts"
    exit 1
}

# Try py -3.12, then py -3, then python
$pyCmd = Get-Command "py" -ErrorAction SilentlyContinue
if ($null -ne $pyCmd) {
    & py -3.12 $runtime @ScriptArgs
} else {
    & python $runtime @ScriptArgs
}
