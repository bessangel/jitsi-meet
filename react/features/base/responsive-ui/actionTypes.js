/**
 * The type of (redux) action which sets the aspect ratio of the app's user
 * interface.
 *
 * {
 *     type: SET_ASPECT_RATIO,
 *     aspectRatio: Symbol
 * }
 */
export const SET_ASPECT_RATIO = Symbol('SET_ASPECT_RATIO');

/**
 * The type of redux action which signals that the reduces UI mode was enabled
 * or disabled.
 *
 * {
 *     type: SET_REDUCED_UI,
 *     reducedUI: boolean
 * }
 *
 * @public
 */
export const SET_REDUCED_UI = Symbol('SET_REDUCED_UI');
