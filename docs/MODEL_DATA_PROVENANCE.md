# Offline model data provenance

The GitHub warning reported for `assets/model-local.js` in commit
`5e924c4e2f54d09f955bced1b95d026de209b2f9` labels a substring as a Tencent Cloud
International Access Token. This file is generated exclusively from the lossless
compressed campus model. It contains no service configuration or API calls.

## Verification

- Parsing the historical assignment and Base64-decoding its value produces the
  current `assets/campus-model.bin` byte for byte (37,954,902 bytes).
- The binary SHA-256 is
  `85a1007afcd475794db41208cd715ea27a69bf391a17db6f77ae2159a6d5409f`.
- The only Tencent-style identifier candidate occurs inside the encoded binary
  text. Its text does not occur in the decompressed model container or the source
  CAD file. No candidate value is reproduced in this document or test output.
- Restoring the binary yields the original 3DS SHA-256:
  `0da23d80650b2a75263a724ff38e55f95240efce00eae14353af04cb7fb53767`.
- The packer reads CAD mesh data and deterministic codec code; it does not read
  cloud credentials. No Tencent configuration or API usage was found in project
  source files.

These findings identify a pattern collision in encoded compressed model bytes,
not an application credential. The authenticated alert details were unavailable
during the investigation because the browser was signed out of GitHub.

## Packaging and regression check

`package_viewer.py` now writes the local classic script as a JavaScript string
with 32 Base64 characters per physical line. Standard JavaScript line
continuations preserve the exact string value, with no array joins, extra decode
buffers, scanner exclusions or changes to the HTTP model. The model geometry,
CAD archives and incremental decoder remain unchanged.

Run `node scripts/check_model_data.mjs` to parse the generated script in an
isolated JavaScript context and verify HTTP, local classic-script and standalone
payloads, full CAD restoration and loader error paths.

The historical GitHub alert must be reviewed and closed as **False positive** in
the repository's Secret scanning page. A new commit does not automatically close
an existing alert. No published history was rewritten and no security scanning
settings were disabled.
