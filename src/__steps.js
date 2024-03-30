/**           -----------
 *          (INITIAL SET UP)
 *     - ------------------------
 * 1 . visit: console.firebase.google.com
 * 2 . create a projects (no / skip google analytics)
 * 3 . Register app (create config)
 * 4 . install firebase : npm install firebase
 * 5 . add config file to my projects
 * 6 . Danger : do not publish or make firebase config to public by pushing those to github
 *              -----------
 *             INTERAGATION'
 *         ----------------------------
 * 7 . visit : go to docs > build > authentication > web >get stared
 * 8 . export app from firebase.config.js file
 * 9 .login.jsx . import { getAuth } from "firebase/auth";
 *       -----------------
 *        (AUTH SETUP) 
 * ------------------------
 * 10 . create : const auth = getAuth(app)
 *  11 . create > const provider = new GoogleAuthProvider()
 * 12 . USED singInWithPopUp and pass auth , provider;
 * 13 . activate sing in method (google, facebook , github) enable korta hbe
 * 14 . VITE (LOCAL HOST A DKHA JI)
 * 
 *   more auth provider 
 *  ------------------------
 * 1 . activate the auth provider (create app , provided redirrect url, client id , client secrete)
 */
 