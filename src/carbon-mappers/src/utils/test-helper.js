/**
 * Create container:
 *
 * <div >
 * </div>
 *
 * @returns {Element}
 */
export function createContainer() {
  const container = document.createElement('div');
  document.body.appendChild(container);
  return container;
}
