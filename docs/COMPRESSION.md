# Web model delivery

Interactive browsing starts with a **16.66 MB** regional overview. It does not restore the entire source CAD at startup. Nearby full-detail packets are requested within explicit geometry budgets and disposed when they leave the working area. Repeated components use shared templates and instancing; distant facades and tree crowns use a simplified browsing derivative.

The lossless full-CAD web stream is 39.33 MB for the current 158.60 MB 3DS, but it is separate from initial regional browsing. Full CAD downloads use the unchanged metric source archived as `.3ds.gz`; the standalone edition uses the adjacent archive. Regional geometry is a visual derivative, while original CAD archive/codec restoration is byte-exact. See `docs/REGIONAL_RENDERING.md`, `output/streaming_model_report.json` and `output/web_model_report.json` for scope, limits, exact sizes and digests.

HTTP uses binary assets. Local double-click editions load classic-script assets; standalone HTML embeds its compressed browsing data. Parsing/decompression is cooperative or worker-based where appropriate. Geometry, framebuffers and browser storage remain additional memory costs.
