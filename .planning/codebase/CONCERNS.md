# Concerns

## Technical Debt
- **Large Binary in Repo**: `_public_html.zip` (2GB) is inside the project directory, which will cause performance issues for Git operations if tracked.
- **Fragmentation**: SEO data is spread across multiple XLSX and CSV files, making it hard to maintain a single source of truth.

## Security
- **Backup exposure**: `_public_html.zip` likely contains sensitive configuration files (e.g., `wp-config.php` with database credentials). This should be excluded from version control.

## Project State
- **Missing Source**: The active source code for the site redesign is not yet present. The environment is currently an asset dump.

---
*Last updated: 2026-05-02*
