/** Keep the farthest view tied to campus size, even after fitting a tiny landmark. */
export function updateCampusZoomLimit(camera, controls, campusDiagonal) {
  const shortSide = Math.min(camera.right - camera.left, camera.top - camera.bottom);
  // Four campus diagonals also cover the site when orbiting around an edge building.
  const widestSpan = 4 * Math.max(campusDiagonal, 1);
  controls.minZoom = Math.max(Number.EPSILON, Math.min(1, shortSide / widestSpan));
}
