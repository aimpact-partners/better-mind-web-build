System.register(["@firebase/util@1.11.0","@firebase/component@0.6.13","@firebase/logger@0.4.4","idb@7.1.1","@firebase/app@0.11.5","tslib@2.8.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/util","1.11.0"],["@firebase/component","0.6.13"],["@firebase/logger","0.4.4"],["idb","7.1.1"],["@firebase/app","0.11.5"],["tslib","2.8.1"],["@firebase/auth","1.10.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@firebase/util@1.11.0', dep), dep => dependencies.set('@firebase/component@0.6.13', dep), dep => dependencies.set('@firebase/logger@0.4.4', dep), dep => dependencies.set('idb@7.1.1', dep), dep => dependencies.set('@firebase/app@0.11.5', dep), dep => dependencies.set('tslib@2.8.1', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all) __defProp(target, name2, {
    get: all[name2],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@firebase/auth.1.10.1.js
var auth_1_10_1_exports = {};
__export(auth_1_10_1_exports, {
  ActionCodeOperation: () => ActionCodeOperation,
  ActionCodeURL: () => ActionCodeURL,
  AuthCredential: () => AuthCredential,
  AuthErrorCodes: () => AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY,
  EmailAuthCredential: () => EmailAuthCredential,
  EmailAuthProvider: () => EmailAuthProvider,
  FacebookAuthProvider: () => FacebookAuthProvider,
  FactorId: () => FactorId,
  GithubAuthProvider: () => GithubAuthProvider,
  GoogleAuthProvider: () => GoogleAuthProvider,
  OAuthCredential: () => OAuthCredential,
  OAuthProvider: () => OAuthProvider,
  OperationType: () => OperationType,
  PhoneAuthCredential: () => PhoneAuthCredential,
  PhoneAuthProvider: () => PhoneAuthProvider,
  PhoneMultiFactorGenerator: () => PhoneMultiFactorGenerator,
  ProviderId: () => ProviderId,
  RecaptchaVerifier: () => RecaptchaVerifier,
  SAMLAuthProvider: () => SAMLAuthProvider,
  SignInMethod: () => SignInMethod,
  TotpMultiFactorGenerator: () => TotpMultiFactorGenerator,
  TotpSecret: () => TotpSecret,
  TwitterAuthProvider: () => TwitterAuthProvider,
  applyActionCode: () => applyActionCode,
  beforeAuthStateChanged: () => beforeAuthStateChanged,
  browserCookiePersistence: () => browserCookiePersistence,
  browserLocalPersistence: () => browserLocalPersistence,
  browserPopupRedirectResolver: () => browserPopupRedirectResolver,
  browserSessionPersistence: () => browserSessionPersistence,
  checkActionCode: () => checkActionCode,
  confirmPasswordReset: () => confirmPasswordReset,
  connectAuthEmulator: () => connectAuthEmulator,
  createUserWithEmailAndPassword: () => createUserWithEmailAndPassword,
  debugErrorMap: () => debugErrorMap,
  deleteUser: () => deleteUser,
  fetchSignInMethodsForEmail: () => fetchSignInMethodsForEmail,
  getAdditionalUserInfo: () => getAdditionalUserInfo,
  getAuth: () => getAuth,
  getIdToken: () => getIdToken,
  getIdTokenResult: () => getIdTokenResult,
  getMultiFactorResolver: () => getMultiFactorResolver,
  getRedirectResult: () => getRedirectResult,
  inMemoryPersistence: () => inMemoryPersistence,
  indexedDBLocalPersistence: () => indexedDBLocalPersistence,
  initializeAuth: () => initializeAuth,
  initializeRecaptchaConfig: () => initializeRecaptchaConfig,
  isSignInWithEmailLink: () => isSignInWithEmailLink,
  linkWithCredential: () => linkWithCredential,
  linkWithPhoneNumber: () => linkWithPhoneNumber,
  linkWithPopup: () => linkWithPopup,
  linkWithRedirect: () => linkWithRedirect,
  multiFactor: () => multiFactor,
  onAuthStateChanged: () => onAuthStateChanged,
  onIdTokenChanged: () => onIdTokenChanged,
  parseActionCodeURL: () => parseActionCodeURL,
  prodErrorMap: () => prodErrorMap,
  reauthenticateWithCredential: () => reauthenticateWithCredential,
  reauthenticateWithPhoneNumber: () => reauthenticateWithPhoneNumber,
  reauthenticateWithPopup: () => reauthenticateWithPopup,
  reauthenticateWithRedirect: () => reauthenticateWithRedirect,
  reload: () => reload,
  revokeAccessToken: () => revokeAccessToken,
  sendEmailVerification: () => sendEmailVerification,
  sendPasswordResetEmail: () => sendPasswordResetEmail,
  sendSignInLinkToEmail: () => sendSignInLinkToEmail,
  setPersistence: () => setPersistence,
  signInAnonymously: () => signInAnonymously,
  signInWithCredential: () => signInWithCredential,
  signInWithCustomToken: () => signInWithCustomToken,
  signInWithEmailAndPassword: () => signInWithEmailAndPassword,
  signInWithEmailLink: () => signInWithEmailLink,
  signInWithPhoneNumber: () => signInWithPhoneNumber,
  signInWithPopup: () => signInWithPopup,
  signInWithRedirect: () => signInWithRedirect,
  signOut: () => signOut,
  unlink: () => unlink,
  updateCurrentUser: () => updateCurrentUser,
  updateEmail: () => updateEmail,
  updatePassword: () => updatePassword,
  updatePhoneNumber: () => updatePhoneNumber,
  updateProfile: () => updateProfile,
  useDeviceLanguage: () => useDeviceLanguage,
  validatePassword: () => validatePassword,
  verifyBeforeUpdateEmail: () => verifyBeforeUpdateEmail,
  verifyPasswordResetCode: () => verifyPasswordResetCode
});
module.exports = __toCommonJS(auth_1_10_1_exports);

// node_modules/@firebase/auth/dist/esm2017/index-9ae71ce3.js
var import_app = require("@firebase/app@0.11.5");
var import_util = require("@firebase/util@1.11.0");
var import_logger = require("@firebase/logger@0.4.4");
var import_tslib = require("tslib@2.8.1");
var import_component = require("@firebase/component@0.6.13");
var FactorId = {
  /** Phone as second factor */
  PHONE: "phone",
  TOTP: "totp"
};
var ProviderId = {
  /** Facebook provider ID */
  FACEBOOK: "facebook.com",
  /** GitHub provider ID */
  GITHUB: "github.com",
  /** Google provider ID */
  GOOGLE: "google.com",
  /** Password provider */
  PASSWORD: "password",
  /** Phone provider */
  PHONE: "phone",
  /** Twitter provider ID */
  TWITTER: "twitter.com"
};
var SignInMethod = {
  /** Email link sign in method */
  EMAIL_LINK: "emailLink",
  /** Email/password sign in method */
  EMAIL_PASSWORD: "password",
  /** Facebook sign in method */
  FACEBOOK: "facebook.com",
  /** GitHub sign in method */
  GITHUB: "github.com",
  /** Google sign in method */
  GOOGLE: "google.com",
  /** Phone sign in method */
  PHONE: "phone",
  /** Twitter sign in method */
  TWITTER: "twitter.com"
};
var OperationType = {
  /** Operation involving linking an additional provider to an already signed-in user. */
  LINK: "link",
  /** Operation involving using a provider to reauthenticate an already signed-in user. */
  REAUTHENTICATE: "reauthenticate",
  /** Operation involving signing in a user. */
  SIGN_IN: "signIn"
};
var ActionCodeOperation = {
  /** The email link sign-in action. */
  EMAIL_SIGNIN: "EMAIL_SIGNIN",
  /** The password reset action. */
  PASSWORD_RESET: "PASSWORD_RESET",
  /** The email revocation action. */
  RECOVER_EMAIL: "RECOVER_EMAIL",
  /** The revert second factor addition email action. */
  REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
  /** The revert second factor addition email action. */
  VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
  /** The email verification action. */
  VERIFY_EMAIL: "VERIFY_EMAIL"
};
function _debugErrorMap() {
  return {
    ["admin-restricted-operation"
    /* AuthErrorCode.ADMIN_ONLY_OPERATION */]: "This operation is restricted to administrators only.",
    ["argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */]: "",
    ["app-not-authorized"
    /* AuthErrorCode.APP_NOT_AUTHORIZED */]: "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
    ["app-not-installed"
    /* AuthErrorCode.APP_NOT_INSTALLED */]: "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
    ["captcha-check-failed"
    /* AuthErrorCode.CAPTCHA_CHECK_FAILED */]: "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
    ["code-expired"
    /* AuthErrorCode.CODE_EXPIRED */]: "The SMS code has expired. Please re-send the verification code to try again.",
    ["cordova-not-ready"
    /* AuthErrorCode.CORDOVA_NOT_READY */]: "Cordova framework is not ready.",
    ["cors-unsupported"
    /* AuthErrorCode.CORS_UNSUPPORTED */]: "This browser is not supported.",
    ["credential-already-in-use"
    /* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */]: "This credential is already associated with a different user account.",
    ["custom-token-mismatch"
    /* AuthErrorCode.CREDENTIAL_MISMATCH */]: "The custom token corresponds to a different audience.",
    ["requires-recent-login"
    /* AuthErrorCode.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */]: "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
    ["dependent-sdk-initialized-before-auth"
    /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
    ["dynamic-link-not-activated"
    /* AuthErrorCode.DYNAMIC_LINK_NOT_ACTIVATED */]: "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
    ["email-change-needs-verification"
    /* AuthErrorCode.EMAIL_CHANGE_NEEDS_VERIFICATION */]: "Multi-factor users must always have a verified email.",
    ["email-already-in-use"
    /* AuthErrorCode.EMAIL_EXISTS */]: "The email address is already in use by another account.",
    ["emulator-config-failed"
    /* AuthErrorCode.EMULATOR_CONFIG_FAILED */]: 'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',
    ["expired-action-code"
    /* AuthErrorCode.EXPIRED_OOB_CODE */]: "The action code has expired.",
    ["cancelled-popup-request"
    /* AuthErrorCode.EXPIRED_POPUP_REQUEST */]: "This operation has been cancelled due to another conflicting popup being opened.",
    ["internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */]: "An internal AuthError has occurred.",
    ["invalid-app-credential"
    /* AuthErrorCode.INVALID_APP_CREDENTIAL */]: "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
    ["invalid-app-id"
    /* AuthErrorCode.INVALID_APP_ID */]: "The mobile app identifier is not registered for the current project.",
    ["invalid-user-token"
    /* AuthErrorCode.INVALID_AUTH */]: "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
    ["invalid-auth-event"
    /* AuthErrorCode.INVALID_AUTH_EVENT */]: "An internal AuthError has occurred.",
    ["invalid-verification-code"
    /* AuthErrorCode.INVALID_CODE */]: "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",
    ["invalid-continue-uri"
    /* AuthErrorCode.INVALID_CONTINUE_URI */]: "The continue URL provided in the request is invalid.",
    ["invalid-cordova-configuration"
    /* AuthErrorCode.INVALID_CORDOVA_CONFIGURATION */]: "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
    ["invalid-custom-token"
    /* AuthErrorCode.INVALID_CUSTOM_TOKEN */]: "The custom token format is incorrect. Please check the documentation.",
    ["invalid-dynamic-link-domain"
    /* AuthErrorCode.INVALID_DYNAMIC_LINK_DOMAIN */]: "The provided dynamic link domain is not configured or authorized for the current project.",
    ["invalid-email"
    /* AuthErrorCode.INVALID_EMAIL */]: "The email address is badly formatted.",
    ["invalid-emulator-scheme"
    /* AuthErrorCode.INVALID_EMULATOR_SCHEME */]: "Emulator URL must start with a valid scheme (http:// or https://).",
    ["invalid-api-key"
    /* AuthErrorCode.INVALID_API_KEY */]: "Your API key is invalid, please check you have copied it correctly.",
    ["invalid-cert-hash"
    /* AuthErrorCode.INVALID_CERT_HASH */]: "The SHA-1 certificate hash provided is invalid.",
    ["invalid-credential"
    /* AuthErrorCode.INVALID_CREDENTIAL */]: "The supplied auth credential is incorrect, malformed or has expired.",
    ["invalid-message-payload"
    /* AuthErrorCode.INVALID_MESSAGE_PAYLOAD */]: "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
    ["invalid-multi-factor-session"
    /* AuthErrorCode.INVALID_MFA_SESSION */]: "The request does not contain a valid proof of first factor successful sign-in.",
    ["invalid-oauth-provider"
    /* AuthErrorCode.INVALID_OAUTH_PROVIDER */]: "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
    ["invalid-oauth-client-id"
    /* AuthErrorCode.INVALID_OAUTH_CLIENT_ID */]: "The OAuth client ID provided is either invalid or does not match the specified API key.",
    ["unauthorized-domain"
    /* AuthErrorCode.INVALID_ORIGIN */]: "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
    ["invalid-action-code"
    /* AuthErrorCode.INVALID_OOB_CODE */]: "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
    ["wrong-password"
    /* AuthErrorCode.INVALID_PASSWORD */]: "The password is invalid or the user does not have a password.",
    ["invalid-persistence-type"
    /* AuthErrorCode.INVALID_PERSISTENCE */]: "The specified persistence type is invalid. It can only be local, session or none.",
    ["invalid-phone-number"
    /* AuthErrorCode.INVALID_PHONE_NUMBER */]: "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
    ["invalid-provider-id"
    /* AuthErrorCode.INVALID_PROVIDER_ID */]: "The specified provider ID is invalid.",
    ["invalid-recipient-email"
    /* AuthErrorCode.INVALID_RECIPIENT_EMAIL */]: "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
    ["invalid-sender"
    /* AuthErrorCode.INVALID_SENDER */]: "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
    ["invalid-verification-id"
    /* AuthErrorCode.INVALID_SESSION_INFO */]: "The verification ID used to create the phone auth credential is invalid.",
    ["invalid-tenant-id"
    /* AuthErrorCode.INVALID_TENANT_ID */]: "The Auth instance's tenant ID is invalid.",
    ["login-blocked"
    /* AuthErrorCode.LOGIN_BLOCKED */]: "Login blocked by user-provided method: {$originalMessage}",
    ["missing-android-pkg-name"
    /* AuthErrorCode.MISSING_ANDROID_PACKAGE_NAME */]: "An Android Package Name must be provided if the Android App is required to be installed.",
    ["auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */]: "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
    ["missing-app-credential"
    /* AuthErrorCode.MISSING_APP_CREDENTIAL */]: "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
    ["missing-verification-code"
    /* AuthErrorCode.MISSING_CODE */]: "The phone auth credential was created with an empty SMS verification code.",
    ["missing-continue-uri"
    /* AuthErrorCode.MISSING_CONTINUE_URI */]: "A continue URL must be provided in the request.",
    ["missing-iframe-start"
    /* AuthErrorCode.MISSING_IFRAME_START */]: "An internal AuthError has occurred.",
    ["missing-ios-bundle-id"
    /* AuthErrorCode.MISSING_IOS_BUNDLE_ID */]: "An iOS Bundle ID must be provided if an App Store ID is provided.",
    ["missing-or-invalid-nonce"
    /* AuthErrorCode.MISSING_OR_INVALID_NONCE */]: "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
    ["missing-password"
    /* AuthErrorCode.MISSING_PASSWORD */]: "A non-empty password must be provided",
    ["missing-multi-factor-info"
    /* AuthErrorCode.MISSING_MFA_INFO */]: "No second factor identifier is provided.",
    ["missing-multi-factor-session"
    /* AuthErrorCode.MISSING_MFA_SESSION */]: "The request is missing proof of first factor successful sign-in.",
    ["missing-phone-number"
    /* AuthErrorCode.MISSING_PHONE_NUMBER */]: "To send verification codes, provide a phone number for the recipient.",
    ["missing-verification-id"
    /* AuthErrorCode.MISSING_SESSION_INFO */]: "The phone auth credential was created with an empty verification ID.",
    ["app-deleted"
    /* AuthErrorCode.MODULE_DESTROYED */]: "This instance of FirebaseApp has been deleted.",
    ["multi-factor-info-not-found"
    /* AuthErrorCode.MFA_INFO_NOT_FOUND */]: "The user does not have a second factor matching the identifier provided.",
    ["multi-factor-auth-required"
    /* AuthErrorCode.MFA_REQUIRED */]: "Proof of ownership of a second factor is required to complete sign-in.",
    ["account-exists-with-different-credential"
    /* AuthErrorCode.NEED_CONFIRMATION */]: "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
    ["network-request-failed"
    /* AuthErrorCode.NETWORK_REQUEST_FAILED */]: "A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",
    ["no-auth-event"
    /* AuthErrorCode.NO_AUTH_EVENT */]: "An internal AuthError has occurred.",
    ["no-such-provider"
    /* AuthErrorCode.NO_SUCH_PROVIDER */]: "User was not linked to an account with the given provider.",
    ["null-user"
    /* AuthErrorCode.NULL_USER */]: "A null user object was provided as the argument for an operation which requires a non-null user object.",
    ["operation-not-allowed"
    /* AuthErrorCode.OPERATION_NOT_ALLOWED */]: "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
    ["operation-not-supported-in-this-environment"
    /* AuthErrorCode.OPERATION_NOT_SUPPORTED */]: 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
    ["popup-blocked"
    /* AuthErrorCode.POPUP_BLOCKED */]: "Unable to establish a connection with the popup. It may have been blocked by the browser.",
    ["popup-closed-by-user"
    /* AuthErrorCode.POPUP_CLOSED_BY_USER */]: "The popup has been closed by the user before finalizing the operation.",
    ["provider-already-linked"
    /* AuthErrorCode.PROVIDER_ALREADY_LINKED */]: "User can only be linked to one identity for the given provider.",
    ["quota-exceeded"
    /* AuthErrorCode.QUOTA_EXCEEDED */]: "The project's quota for this operation has been exceeded.",
    ["redirect-cancelled-by-user"
    /* AuthErrorCode.REDIRECT_CANCELLED_BY_USER */]: "The redirect operation has been cancelled by the user before finalizing.",
    ["redirect-operation-pending"
    /* AuthErrorCode.REDIRECT_OPERATION_PENDING */]: "A redirect sign-in operation is already pending.",
    ["rejected-credential"
    /* AuthErrorCode.REJECTED_CREDENTIAL */]: "The request contains malformed or mismatching credentials.",
    ["second-factor-already-in-use"
    /* AuthErrorCode.SECOND_FACTOR_ALREADY_ENROLLED */]: "The second factor is already enrolled on this account.",
    ["maximum-second-factor-count-exceeded"
    /* AuthErrorCode.SECOND_FACTOR_LIMIT_EXCEEDED */]: "The maximum allowed number of second factors on a user has been exceeded.",
    ["tenant-id-mismatch"
    /* AuthErrorCode.TENANT_ID_MISMATCH */]: "The provided tenant ID does not match the Auth instance's tenant ID",
    ["timeout"
    /* AuthErrorCode.TIMEOUT */]: "The operation has timed out.",
    ["user-token-expired"
    /* AuthErrorCode.TOKEN_EXPIRED */]: "The user's credential is no longer valid. The user must sign in again.",
    ["too-many-requests"
    /* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */]: "We have blocked all requests from this device due to unusual activity. Try again later.",
    ["unauthorized-continue-uri"
    /* AuthErrorCode.UNAUTHORIZED_DOMAIN */]: "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
    ["unsupported-first-factor"
    /* AuthErrorCode.UNSUPPORTED_FIRST_FACTOR */]: "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
    ["unsupported-persistence-type"
    /* AuthErrorCode.UNSUPPORTED_PERSISTENCE */]: "The current environment does not support the specified persistence type.",
    ["unsupported-tenant-operation"
    /* AuthErrorCode.UNSUPPORTED_TENANT_OPERATION */]: "This operation is not supported in a multi-tenant context.",
    ["unverified-email"
    /* AuthErrorCode.UNVERIFIED_EMAIL */]: "The operation requires a verified email.",
    ["user-cancelled"
    /* AuthErrorCode.USER_CANCELLED */]: "The user did not grant your application the permissions it requested.",
    ["user-not-found"
    /* AuthErrorCode.USER_DELETED */]: "There is no user record corresponding to this identifier. The user may have been deleted.",
    ["user-disabled"
    /* AuthErrorCode.USER_DISABLED */]: "The user account has been disabled by an administrator.",
    ["user-mismatch"
    /* AuthErrorCode.USER_MISMATCH */]: "The supplied credentials do not correspond to the previously signed in user.",
    ["user-signed-out"
    /* AuthErrorCode.USER_SIGNED_OUT */]: "",
    ["weak-password"
    /* AuthErrorCode.WEAK_PASSWORD */]: "The password must be 6 characters long or more.",
    ["web-storage-unsupported"
    /* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */]: "This browser is not supported or 3rd party cookies and data may be disabled.",
    ["already-initialized"
    /* AuthErrorCode.ALREADY_INITIALIZED */]: "initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",
    ["missing-recaptcha-token"
    /* AuthErrorCode.MISSING_RECAPTCHA_TOKEN */]: "The reCAPTCHA token is missing when sending request to the backend.",
    ["invalid-recaptcha-token"
    /* AuthErrorCode.INVALID_RECAPTCHA_TOKEN */]: "The reCAPTCHA token is invalid when sending request to the backend.",
    ["invalid-recaptcha-action"
    /* AuthErrorCode.INVALID_RECAPTCHA_ACTION */]: "The reCAPTCHA action is invalid when sending request to the backend.",
    ["recaptcha-not-enabled"
    /* AuthErrorCode.RECAPTCHA_NOT_ENABLED */]: "reCAPTCHA Enterprise integration is not enabled for this project.",
    ["missing-client-type"
    /* AuthErrorCode.MISSING_CLIENT_TYPE */]: "The reCAPTCHA client type is missing when sending request to the backend.",
    ["missing-recaptcha-version"
    /* AuthErrorCode.MISSING_RECAPTCHA_VERSION */]: "The reCAPTCHA version is missing when sending request to the backend.",
    ["invalid-req-type"
    /* AuthErrorCode.INVALID_REQ_TYPE */]: "Invalid request parameters.",
    ["invalid-recaptcha-version"
    /* AuthErrorCode.INVALID_RECAPTCHA_VERSION */]: "The reCAPTCHA version is invalid when sending request to the backend.",
    ["unsupported-password-policy-schema-version"
    /* AuthErrorCode.UNSUPPORTED_PASSWORD_POLICY_SCHEMA_VERSION */]: "The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.",
    ["password-does-not-meet-requirements"
    /* AuthErrorCode.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */]: "The password does not meet the requirements.",
    ["invalid-hosting-link-domain"
    /* AuthErrorCode.INVALID_HOSTING_LINK_DOMAIN */]: "The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."
  };
}
function _prodErrorMap() {
  return {
    ["dependent-sdk-initialized-before-auth"
    /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  };
}
var debugErrorMap = _debugErrorMap;
var prodErrorMap = _prodErrorMap;
var _DEFAULT_AUTH_ERROR_FACTORY = new import_util.ErrorFactory("auth", "Firebase", _prodErrorMap());
var AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY = {
  ADMIN_ONLY_OPERATION: "auth/admin-restricted-operation",
  ARGUMENT_ERROR: "auth/argument-error",
  APP_NOT_AUTHORIZED: "auth/app-not-authorized",
  APP_NOT_INSTALLED: "auth/app-not-installed",
  CAPTCHA_CHECK_FAILED: "auth/captcha-check-failed",
  CODE_EXPIRED: "auth/code-expired",
  CORDOVA_NOT_READY: "auth/cordova-not-ready",
  CORS_UNSUPPORTED: "auth/cors-unsupported",
  CREDENTIAL_ALREADY_IN_USE: "auth/credential-already-in-use",
  CREDENTIAL_MISMATCH: "auth/custom-token-mismatch",
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "auth/requires-recent-login",
  DEPENDENT_SDK_INIT_BEFORE_AUTH: "auth/dependent-sdk-initialized-before-auth",
  DYNAMIC_LINK_NOT_ACTIVATED: "auth/dynamic-link-not-activated",
  EMAIL_CHANGE_NEEDS_VERIFICATION: "auth/email-change-needs-verification",
  EMAIL_EXISTS: "auth/email-already-in-use",
  EMULATOR_CONFIG_FAILED: "auth/emulator-config-failed",
  EXPIRED_OOB_CODE: "auth/expired-action-code",
  EXPIRED_POPUP_REQUEST: "auth/cancelled-popup-request",
  INTERNAL_ERROR: "auth/internal-error",
  INVALID_API_KEY: "auth/invalid-api-key",
  INVALID_APP_CREDENTIAL: "auth/invalid-app-credential",
  INVALID_APP_ID: "auth/invalid-app-id",
  INVALID_AUTH: "auth/invalid-user-token",
  INVALID_AUTH_EVENT: "auth/invalid-auth-event",
  INVALID_CERT_HASH: "auth/invalid-cert-hash",
  INVALID_CODE: "auth/invalid-verification-code",
  INVALID_CONTINUE_URI: "auth/invalid-continue-uri",
  INVALID_CORDOVA_CONFIGURATION: "auth/invalid-cordova-configuration",
  INVALID_CUSTOM_TOKEN: "auth/invalid-custom-token",
  INVALID_DYNAMIC_LINK_DOMAIN: "auth/invalid-dynamic-link-domain",
  INVALID_EMAIL: "auth/invalid-email",
  INVALID_EMULATOR_SCHEME: "auth/invalid-emulator-scheme",
  INVALID_IDP_RESPONSE: "auth/invalid-credential",
  INVALID_LOGIN_CREDENTIALS: "auth/invalid-credential",
  INVALID_MESSAGE_PAYLOAD: "auth/invalid-message-payload",
  INVALID_MFA_SESSION: "auth/invalid-multi-factor-session",
  INVALID_OAUTH_CLIENT_ID: "auth/invalid-oauth-client-id",
  INVALID_OAUTH_PROVIDER: "auth/invalid-oauth-provider",
  INVALID_OOB_CODE: "auth/invalid-action-code",
  INVALID_ORIGIN: "auth/unauthorized-domain",
  INVALID_PASSWORD: "auth/wrong-password",
  INVALID_PERSISTENCE: "auth/invalid-persistence-type",
  INVALID_PHONE_NUMBER: "auth/invalid-phone-number",
  INVALID_PROVIDER_ID: "auth/invalid-provider-id",
  INVALID_RECIPIENT_EMAIL: "auth/invalid-recipient-email",
  INVALID_SENDER: "auth/invalid-sender",
  INVALID_SESSION_INFO: "auth/invalid-verification-id",
  INVALID_TENANT_ID: "auth/invalid-tenant-id",
  MFA_INFO_NOT_FOUND: "auth/multi-factor-info-not-found",
  MFA_REQUIRED: "auth/multi-factor-auth-required",
  MISSING_ANDROID_PACKAGE_NAME: "auth/missing-android-pkg-name",
  MISSING_APP_CREDENTIAL: "auth/missing-app-credential",
  MISSING_AUTH_DOMAIN: "auth/auth-domain-config-required",
  MISSING_CODE: "auth/missing-verification-code",
  MISSING_CONTINUE_URI: "auth/missing-continue-uri",
  MISSING_IFRAME_START: "auth/missing-iframe-start",
  MISSING_IOS_BUNDLE_ID: "auth/missing-ios-bundle-id",
  MISSING_OR_INVALID_NONCE: "auth/missing-or-invalid-nonce",
  MISSING_MFA_INFO: "auth/missing-multi-factor-info",
  MISSING_MFA_SESSION: "auth/missing-multi-factor-session",
  MISSING_PHONE_NUMBER: "auth/missing-phone-number",
  MISSING_SESSION_INFO: "auth/missing-verification-id",
  MODULE_DESTROYED: "auth/app-deleted",
  NEED_CONFIRMATION: "auth/account-exists-with-different-credential",
  NETWORK_REQUEST_FAILED: "auth/network-request-failed",
  NULL_USER: "auth/null-user",
  NO_AUTH_EVENT: "auth/no-auth-event",
  NO_SUCH_PROVIDER: "auth/no-such-provider",
  OPERATION_NOT_ALLOWED: "auth/operation-not-allowed",
  OPERATION_NOT_SUPPORTED: "auth/operation-not-supported-in-this-environment",
  POPUP_BLOCKED: "auth/popup-blocked",
  POPUP_CLOSED_BY_USER: "auth/popup-closed-by-user",
  PROVIDER_ALREADY_LINKED: "auth/provider-already-linked",
  QUOTA_EXCEEDED: "auth/quota-exceeded",
  REDIRECT_CANCELLED_BY_USER: "auth/redirect-cancelled-by-user",
  REDIRECT_OPERATION_PENDING: "auth/redirect-operation-pending",
  REJECTED_CREDENTIAL: "auth/rejected-credential",
  SECOND_FACTOR_ALREADY_ENROLLED: "auth/second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "auth/maximum-second-factor-count-exceeded",
  TENANT_ID_MISMATCH: "auth/tenant-id-mismatch",
  TIMEOUT: "auth/timeout",
  TOKEN_EXPIRED: "auth/user-token-expired",
  TOO_MANY_ATTEMPTS_TRY_LATER: "auth/too-many-requests",
  UNAUTHORIZED_DOMAIN: "auth/unauthorized-continue-uri",
  UNSUPPORTED_FIRST_FACTOR: "auth/unsupported-first-factor",
  UNSUPPORTED_PERSISTENCE: "auth/unsupported-persistence-type",
  UNSUPPORTED_TENANT_OPERATION: "auth/unsupported-tenant-operation",
  UNVERIFIED_EMAIL: "auth/unverified-email",
  USER_CANCELLED: "auth/user-cancelled",
  USER_DELETED: "auth/user-not-found",
  USER_DISABLED: "auth/user-disabled",
  USER_MISMATCH: "auth/user-mismatch",
  USER_SIGNED_OUT: "auth/user-signed-out",
  WEAK_PASSWORD: "auth/weak-password",
  WEB_STORAGE_UNSUPPORTED: "auth/web-storage-unsupported",
  ALREADY_INITIALIZED: "auth/already-initialized",
  RECAPTCHA_NOT_ENABLED: "auth/recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "auth/missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "auth/invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "auth/invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "auth/missing-client-type",
  MISSING_RECAPTCHA_VERSION: "auth/missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "auth/invalid-recaptcha-version",
  INVALID_REQ_TYPE: "auth/invalid-req-type",
  INVALID_HOSTING_LINK_DOMAIN: "auth/invalid-hosting-link-domain"
};
var logClient = new import_logger.Logger("@firebase/auth");
function _logWarn(msg, ...args) {
  if (logClient.logLevel <= import_logger.LogLevel.WARN) {
    logClient.warn(`Auth (${import_app.SDK_VERSION}): ${msg}`, ...args);
  }
}
function _logError(msg, ...args) {
  if (logClient.logLevel <= import_logger.LogLevel.ERROR) {
    logClient.error(`Auth (${import_app.SDK_VERSION}): ${msg}`, ...args);
  }
}
function _fail(authOrCode, ...rest) {
  throw createErrorInternal(authOrCode, ...rest);
}
function _createError(authOrCode, ...rest) {
  return createErrorInternal(authOrCode, ...rest);
}
function _errorWithCustomMessage(auth, code, message) {
  const errorMap = Object.assign(Object.assign({}, prodErrorMap()), {
    [code]: message
  });
  const factory = new import_util.ErrorFactory("auth", "Firebase", errorMap);
  return factory.create(code, {
    appName: auth.name
  });
}
function _serverAppCurrentUserOperationNotSupportedError(auth) {
  return _errorWithCustomMessage(auth, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp");
}
function _assertInstanceOf(auth, object, instance) {
  const constructorInstance = instance;
  if (!(object instanceof constructorInstance)) {
    if (constructorInstance.name !== object.constructor.name) {
      _fail(auth, "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */);
    }
    throw _errorWithCustomMessage(auth, "argument-error", `Type of ${object.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`);
  }
}
function createErrorInternal(authOrCode, ...rest) {
  if (typeof authOrCode !== "string") {
    const code = rest[0];
    const fullParams = [...rest.slice(1)];
    if (fullParams[0]) {
      fullParams[0].appName = authOrCode.name;
    }
    return authOrCode._errorFactory.create(code, ...fullParams);
  }
  return _DEFAULT_AUTH_ERROR_FACTORY.create(authOrCode, ...rest);
}
function _assert(assertion, authOrCode, ...rest) {
  if (!assertion) {
    throw createErrorInternal(authOrCode, ...rest);
  }
}
function debugFail(failure) {
  const message = `INTERNAL ASSERTION FAILED: ` + failure;
  _logError(message);
  throw new Error(message);
}
function debugAssert(assertion, message) {
  if (!assertion) {
    debugFail(message);
  }
}
function _getCurrentUrl() {
  var _a;
  return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.href) || "";
}
function _isHttpOrHttps() {
  return _getCurrentScheme() === "http:" || _getCurrentScheme() === "https:";
}
function _getCurrentScheme() {
  var _a;
  return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.protocol) || null;
}
function _isOnline() {
  if (typeof navigator !== "undefined" && navigator && "onLine" in navigator && typeof navigator.onLine === "boolean" && (
  // Apply only for traditional web apps and Chrome extensions.
  // This is especially true for Cordova apps which have unreliable
  // navigator.onLine behavior unless cordova-plugin-network-information is
  // installed which overwrites the native navigator.onLine value and
  // defines navigator.connection.
  _isHttpOrHttps() || (0, import_util.isBrowserExtension)() || "connection" in navigator)) {
    return navigator.onLine;
  }
  return true;
}
function _getUserLanguage() {
  if (typeof navigator === "undefined") {
    return null;
  }
  const navigatorLanguage = navigator;
  return (
    // Most reliable, but only supported in Chrome/Firefox.
    navigatorLanguage.languages && navigatorLanguage.languages[0] ||
    // Supported in most browsers, but returns the language of the browser
    // UI, not the language set in browser settings.
    navigatorLanguage.language ||
    // Couldn't determine language.
    null
  );
}
var Delay = class {
  constructor(shortDelay, longDelay) {
    this.shortDelay = shortDelay;
    this.longDelay = longDelay;
    debugAssert(longDelay > shortDelay, "Short delay should be less than long delay!");
    this.isMobile = (0, import_util.isMobileCordova)() || (0, import_util.isReactNative)();
  }
  get() {
    if (!_isOnline()) {
      return Math.min(5e3, this.shortDelay);
    }
    return this.isMobile ? this.longDelay : this.shortDelay;
  }
};
function _emulatorUrl(config, path) {
  debugAssert(config.emulator, "Emulator should always be set here");
  const {
    url
  } = config.emulator;
  if (!path) {
    return url;
  }
  return `${url}${path.startsWith("/") ? path.slice(1) : path}`;
}
var FetchProvider = class {
  static initialize(fetchImpl, headersImpl, responseImpl) {
    this.fetchImpl = fetchImpl;
    if (headersImpl) {
      this.headersImpl = headersImpl;
    }
    if (responseImpl) {
      this.responseImpl = responseImpl;
    }
  }
  static fetch() {
    if (this.fetchImpl) {
      return this.fetchImpl;
    }
    if (typeof self !== "undefined" && "fetch" in self) {
      return self.fetch;
    }
    if (typeof globalThis !== "undefined" && globalThis.fetch) {
      return globalThis.fetch;
    }
    if (typeof fetch !== "undefined") {
      return fetch;
    }
    debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static headers() {
    if (this.headersImpl) {
      return this.headersImpl;
    }
    if (typeof self !== "undefined" && "Headers" in self) {
      return self.Headers;
    }
    if (typeof globalThis !== "undefined" && globalThis.Headers) {
      return globalThis.Headers;
    }
    if (typeof Headers !== "undefined") {
      return Headers;
    }
    debugFail("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static response() {
    if (this.responseImpl) {
      return this.responseImpl;
    }
    if (typeof self !== "undefined" && "Response" in self) {
      return self.Response;
    }
    if (typeof globalThis !== "undefined" && globalThis.Response) {
      return globalThis.Response;
    }
    if (typeof Response !== "undefined") {
      return Response;
    }
    debugFail("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
};
var SERVER_ERROR_MAP = {
  // Custom token errors.
  ["CREDENTIAL_MISMATCH"
  /* ServerError.CREDENTIAL_MISMATCH */]: "custom-token-mismatch",
  // This can only happen if the SDK sends a bad request.
  ["MISSING_CUSTOM_TOKEN"
  /* ServerError.MISSING_CUSTOM_TOKEN */]: "internal-error",
  // Create Auth URI errors.
  ["INVALID_IDENTIFIER"
  /* ServerError.INVALID_IDENTIFIER */]: "invalid-email",
  // This can only happen if the SDK sends a bad request.
  ["MISSING_CONTINUE_URI"
  /* ServerError.MISSING_CONTINUE_URI */]: "internal-error",
  // Sign in with email and password errors (some apply to sign up too).
  ["INVALID_PASSWORD"
  /* ServerError.INVALID_PASSWORD */]: "wrong-password",
  // This can only happen if the SDK sends a bad request.
  ["MISSING_PASSWORD"
  /* ServerError.MISSING_PASSWORD */]: "missing-password",
  // Thrown if Email Enumeration Protection is enabled in the project and the email or password is
  // invalid.
  ["INVALID_LOGIN_CREDENTIALS"
  /* ServerError.INVALID_LOGIN_CREDENTIALS */]: "invalid-credential",
  // Sign up with email and password errors.
  ["EMAIL_EXISTS"
  /* ServerError.EMAIL_EXISTS */]: "email-already-in-use",
  ["PASSWORD_LOGIN_DISABLED"
  /* ServerError.PASSWORD_LOGIN_DISABLED */]: "operation-not-allowed",
  // Verify assertion for sign in with credential errors:
  ["INVALID_IDP_RESPONSE"
  /* ServerError.INVALID_IDP_RESPONSE */]: "invalid-credential",
  ["INVALID_PENDING_TOKEN"
  /* ServerError.INVALID_PENDING_TOKEN */]: "invalid-credential",
  ["FEDERATED_USER_ID_ALREADY_LINKED"
  /* ServerError.FEDERATED_USER_ID_ALREADY_LINKED */]: "credential-already-in-use",
  // This can only happen if the SDK sends a bad request.
  ["MISSING_REQ_TYPE"
  /* ServerError.MISSING_REQ_TYPE */]: "internal-error",
  // Send Password reset email errors:
  ["EMAIL_NOT_FOUND"
  /* ServerError.EMAIL_NOT_FOUND */]: "user-not-found",
  ["RESET_PASSWORD_EXCEED_LIMIT"
  /* ServerError.RESET_PASSWORD_EXCEED_LIMIT */]: "too-many-requests",
  ["EXPIRED_OOB_CODE"
  /* ServerError.EXPIRED_OOB_CODE */]: "expired-action-code",
  ["INVALID_OOB_CODE"
  /* ServerError.INVALID_OOB_CODE */]: "invalid-action-code",
  // This can only happen if the SDK sends a bad request.
  ["MISSING_OOB_CODE"
  /* ServerError.MISSING_OOB_CODE */]: "internal-error",
  // Operations that require ID token in request:
  ["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"
  /* ServerError.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */]: "requires-recent-login",
  ["INVALID_ID_TOKEN"
  /* ServerError.INVALID_ID_TOKEN */]: "invalid-user-token",
  ["TOKEN_EXPIRED"
  /* ServerError.TOKEN_EXPIRED */]: "user-token-expired",
  ["USER_NOT_FOUND"
  /* ServerError.USER_NOT_FOUND */]: "user-token-expired",
  // Other errors.
  ["TOO_MANY_ATTEMPTS_TRY_LATER"
  /* ServerError.TOO_MANY_ATTEMPTS_TRY_LATER */]: "too-many-requests",
  ["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"
  /* ServerError.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */]: "password-does-not-meet-requirements",
  // Phone Auth related errors.
  ["INVALID_CODE"
  /* ServerError.INVALID_CODE */]: "invalid-verification-code",
  ["INVALID_SESSION_INFO"
  /* ServerError.INVALID_SESSION_INFO */]: "invalid-verification-id",
  ["INVALID_TEMPORARY_PROOF"
  /* ServerError.INVALID_TEMPORARY_PROOF */]: "invalid-credential",
  ["MISSING_SESSION_INFO"
  /* ServerError.MISSING_SESSION_INFO */]: "missing-verification-id",
  ["SESSION_EXPIRED"
  /* ServerError.SESSION_EXPIRED */]: "code-expired",
  // Other action code errors when additional settings passed.
  // MISSING_CONTINUE_URI is getting mapped to INTERNAL_ERROR above.
  // This is OK as this error will be caught by client side validation.
  ["MISSING_ANDROID_PACKAGE_NAME"
  /* ServerError.MISSING_ANDROID_PACKAGE_NAME */]: "missing-android-pkg-name",
  ["UNAUTHORIZED_DOMAIN"
  /* ServerError.UNAUTHORIZED_DOMAIN */]: "unauthorized-continue-uri",
  // getProjectConfig errors when clientId is passed.
  ["INVALID_OAUTH_CLIENT_ID"
  /* ServerError.INVALID_OAUTH_CLIENT_ID */]: "invalid-oauth-client-id",
  // User actions (sign-up or deletion) disabled errors.
  ["ADMIN_ONLY_OPERATION"
  /* ServerError.ADMIN_ONLY_OPERATION */]: "admin-restricted-operation",
  // Multi factor related errors.
  ["INVALID_MFA_PENDING_CREDENTIAL"
  /* ServerError.INVALID_MFA_PENDING_CREDENTIAL */]: "invalid-multi-factor-session",
  ["MFA_ENROLLMENT_NOT_FOUND"
  /* ServerError.MFA_ENROLLMENT_NOT_FOUND */]: "multi-factor-info-not-found",
  ["MISSING_MFA_ENROLLMENT_ID"
  /* ServerError.MISSING_MFA_ENROLLMENT_ID */]: "missing-multi-factor-info",
  ["MISSING_MFA_PENDING_CREDENTIAL"
  /* ServerError.MISSING_MFA_PENDING_CREDENTIAL */]: "missing-multi-factor-session",
  ["SECOND_FACTOR_EXISTS"
  /* ServerError.SECOND_FACTOR_EXISTS */]: "second-factor-already-in-use",
  ["SECOND_FACTOR_LIMIT_EXCEEDED"
  /* ServerError.SECOND_FACTOR_LIMIT_EXCEEDED */]: "maximum-second-factor-count-exceeded",
  // Blocking functions related errors.
  ["BLOCKING_FUNCTION_ERROR_RESPONSE"
  /* ServerError.BLOCKING_FUNCTION_ERROR_RESPONSE */]: "internal-error",
  // Recaptcha related errors.
  ["RECAPTCHA_NOT_ENABLED"
  /* ServerError.RECAPTCHA_NOT_ENABLED */]: "recaptcha-not-enabled",
  ["MISSING_RECAPTCHA_TOKEN"
  /* ServerError.MISSING_RECAPTCHA_TOKEN */]: "missing-recaptcha-token",
  ["INVALID_RECAPTCHA_TOKEN"
  /* ServerError.INVALID_RECAPTCHA_TOKEN */]: "invalid-recaptcha-token",
  ["INVALID_RECAPTCHA_ACTION"
  /* ServerError.INVALID_RECAPTCHA_ACTION */]: "invalid-recaptcha-action",
  ["MISSING_CLIENT_TYPE"
  /* ServerError.MISSING_CLIENT_TYPE */]: "missing-client-type",
  ["MISSING_RECAPTCHA_VERSION"
  /* ServerError.MISSING_RECAPTCHA_VERSION */]: "missing-recaptcha-version",
  ["INVALID_RECAPTCHA_VERSION"
  /* ServerError.INVALID_RECAPTCHA_VERSION */]: "invalid-recaptcha-version",
  ["INVALID_REQ_TYPE"
  /* ServerError.INVALID_REQ_TYPE */]: "invalid-req-type"
  /* AuthErrorCode.INVALID_REQ_TYPE */
};
var CookieAuthProxiedEndpoints = ["/v1/accounts:signInWithCustomToken", "/v1/accounts:signInWithEmailLink", "/v1/accounts:signInWithIdp", "/v1/accounts:signInWithPassword", "/v1/accounts:signInWithPhoneNumber", "/v1/token"
/* Endpoint.TOKEN */];
var DEFAULT_API_TIMEOUT_MS = new Delay(3e4, 6e4);
function _addTidIfNecessary(auth, request) {
  if (auth.tenantId && !request.tenantId) {
    return Object.assign(Object.assign({}, request), {
      tenantId: auth.tenantId
    });
  }
  return request;
}
async function _performApiRequest(auth, method, path, request, customErrorMap = {}) {
  return _performFetchWithErrorHandling(auth, customErrorMap, async () => {
    let body = {};
    let params = {};
    if (request) {
      if (method === "GET") {
        params = request;
      } else {
        body = {
          body: JSON.stringify(request)
        };
      }
    }
    const query = (0, import_util.querystring)(Object.assign({
      key: auth.config.apiKey
    }, params)).slice(1);
    const headers = await auth._getAdditionalHeaders();
    headers["Content-Type"
    /* HttpHeader.CONTENT_TYPE */] = "application/json";
    if (auth.languageCode) {
      headers["X-Firebase-Locale"
      /* HttpHeader.X_FIREBASE_LOCALE */] = auth.languageCode;
    }
    const fetchArgs = Object.assign({
      method,
      headers
    }, body);
    if (!(0, import_util.isCloudflareWorker)()) {
      fetchArgs.referrerPolicy = "no-referrer";
    }
    return FetchProvider.fetch()(await _getFinalTarget(auth, auth.config.apiHost, path, query), fetchArgs);
  });
}
async function _performFetchWithErrorHandling(auth, customErrorMap, fetchFn) {
  auth._canInitEmulator = false;
  const errorMap = Object.assign(Object.assign({}, SERVER_ERROR_MAP), customErrorMap);
  try {
    const networkTimeout = new NetworkTimeout(auth);
    const response = await Promise.race([fetchFn(), networkTimeout.promise]);
    networkTimeout.clearNetworkTimeout();
    const json = await response.json();
    if ("needConfirmation" in json) {
      throw _makeTaggedError(auth, "account-exists-with-different-credential", json);
    }
    if (response.ok && !("errorMessage" in json)) {
      return json;
    } else {
      const errorMessage = response.ok ? json.errorMessage : json.error.message;
      const [serverErrorCode, serverErrorMessage] = errorMessage.split(" : ");
      if (serverErrorCode === "FEDERATED_USER_ID_ALREADY_LINKED") {
        throw _makeTaggedError(auth, "credential-already-in-use", json);
      } else if (serverErrorCode === "EMAIL_EXISTS") {
        throw _makeTaggedError(auth, "email-already-in-use", json);
      } else if (serverErrorCode === "USER_DISABLED") {
        throw _makeTaggedError(auth, "user-disabled", json);
      }
      const authError = errorMap[serverErrorCode] || serverErrorCode.toLowerCase().replace(/[_\s]+/g, "-");
      if (serverErrorMessage) {
        throw _errorWithCustomMessage(auth, authError, serverErrorMessage);
      } else {
        _fail(auth, authError);
      }
    }
  } catch (e) {
    if (e instanceof import_util.FirebaseError) {
      throw e;
    }
    _fail(auth, "network-request-failed", {
      "message": String(e)
    });
  }
}
async function _performSignInRequest(auth, method, path, request, customErrorMap = {}) {
  const serverResponse = await _performApiRequest(auth, method, path, request, customErrorMap);
  if ("mfaPendingCredential" in serverResponse) {
    _fail(auth, "multi-factor-auth-required", {
      _serverResponse: serverResponse
    });
  }
  return serverResponse;
}
async function _getFinalTarget(auth, host, path, query) {
  const base = `${host}${path}?${query}`;
  const authInternal = auth;
  const finalTarget = authInternal.config.emulator ? _emulatorUrl(auth.config, base) : `${auth.config.apiScheme}://${base}`;
  if (CookieAuthProxiedEndpoints.includes(path)) {
    await authInternal._persistenceManagerAvailable;
    if (authInternal._getPersistenceType() === "COOKIE") {
      const cookiePersistence = authInternal._getPersistence();
      return cookiePersistence._getFinalTarget(finalTarget).toString();
    }
  }
  return finalTarget;
}
function _parseEnforcementState(enforcementStateStr) {
  switch (enforcementStateStr) {
    case "ENFORCE":
      return "ENFORCE";
    case "AUDIT":
      return "AUDIT";
    case "OFF":
      return "OFF";
    default:
      return "ENFORCEMENT_STATE_UNSPECIFIED";
  }
}
var NetworkTimeout = class {
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
  constructor(auth) {
    this.auth = auth;
    this.timer = null;
    this.promise = new Promise((_, reject) => {
      this.timer = setTimeout(() => {
        return reject(_createError(this.auth, "network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */));
      }, DEFAULT_API_TIMEOUT_MS.get());
    });
  }
};
function _makeTaggedError(auth, code, response) {
  const errorParams = {
    appName: auth.name
  };
  if (response.email) {
    errorParams.email = response.email;
  }
  if (response.phoneNumber) {
    errorParams.phoneNumber = response.phoneNumber;
  }
  const error = _createError(auth, code, errorParams);
  error.customData._tokenResponse = response;
  return error;
}
function isV2(grecaptcha) {
  return grecaptcha !== void 0 && grecaptcha.getResponse !== void 0;
}
function isEnterprise(grecaptcha) {
  return grecaptcha !== void 0 && grecaptcha.enterprise !== void 0;
}
var RecaptchaConfig = class {
  constructor(response) {
    this.siteKey = "";
    this.recaptchaEnforcementState = [];
    if (response.recaptchaKey === void 0) {
      throw new Error("recaptchaKey undefined");
    }
    this.siteKey = response.recaptchaKey.split("/")[3];
    this.recaptchaEnforcementState = response.recaptchaEnforcementState;
  }
  /**
   * Returns the reCAPTCHA Enterprise enforcement state for the given provider.
   *
   * @param providerStr - The provider whose enforcement state is to be returned.
   * @returns The reCAPTCHA Enterprise enforcement state for the given provider.
   */
  getProviderEnforcementState(providerStr) {
    if (!this.recaptchaEnforcementState || this.recaptchaEnforcementState.length === 0) {
      return null;
    }
    for (const recaptchaEnforcementState of this.recaptchaEnforcementState) {
      if (recaptchaEnforcementState.provider && recaptchaEnforcementState.provider === providerStr) {
        return _parseEnforcementState(recaptchaEnforcementState.enforcementState);
      }
    }
    return null;
  }
  /**
   * Returns true if the reCAPTCHA Enterprise enforcement state for the provider is set to ENFORCE or AUDIT.
   *
   * @param providerStr - The provider whose enablement state is to be returned.
   * @returns Whether or not reCAPTCHA Enterprise protection is enabled for the given provider.
   */
  isProviderEnabled(providerStr) {
    return this.getProviderEnforcementState(providerStr) === "ENFORCE" || this.getProviderEnforcementState(providerStr) === "AUDIT";
  }
  /**
   * Returns true if reCAPTCHA Enterprise protection is enabled in at least one provider, otherwise
   * returns false.
   *
   * @returns Whether or not reCAPTCHA Enterprise protection is enabled for at least one provider.
   */
  isAnyProviderEnabled() {
    return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"
    /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */) || this.isProviderEnabled("PHONE_PROVIDER"
    /* RecaptchaAuthProvider.PHONE_PROVIDER */);
  }
};
async function getRecaptchaParams(auth) {
  return (await _performApiRequest(auth, "GET", "/v1/recaptchaParams"
  /* Endpoint.GET_RECAPTCHA_PARAM */)).recaptchaSiteKey || "";
}
async function getRecaptchaConfig(auth, request) {
  return _performApiRequest(auth, "GET", "/v2/recaptchaConfig", _addTidIfNecessary(auth, request));
}
async function deleteAccount(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:delete", request);
}
async function deleteLinkedAccounts(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:update", request);
}
async function getAccountInfo(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:lookup", request);
}
function utcTimestampToDateString(utcTimestamp) {
  if (!utcTimestamp) {
    return void 0;
  }
  try {
    const date = new Date(Number(utcTimestamp));
    if (!isNaN(date.getTime())) {
      return date.toUTCString();
    }
  } catch (e) {}
  return void 0;
}
function getIdToken(user, forceRefresh = false) {
  return (0, import_util.getModularInstance)(user).getIdToken(forceRefresh);
}
async function getIdTokenResult(user, forceRefresh = false) {
  const userInternal = (0, import_util.getModularInstance)(user);
  const token = await userInternal.getIdToken(forceRefresh);
  const claims = _parseToken(token);
  _assert(claims && claims.exp && claims.auth_time && claims.iat, userInternal.auth, "internal-error"
  /* AuthErrorCode.INTERNAL_ERROR */);
  const firebase = typeof claims.firebase === "object" ? claims.firebase : void 0;
  const signInProvider = firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_provider"];
  return {
    claims,
    token,
    authTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.auth_time)),
    issuedAtTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.iat)),
    expirationTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.exp)),
    signInProvider: signInProvider || null,
    signInSecondFactor: (firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_second_factor"]) || null
  };
}
function secondsStringToMilliseconds(seconds) {
  return Number(seconds) * 1e3;
}
function _parseToken(token) {
  const [algorithm, payload, signature] = token.split(".");
  if (algorithm === void 0 || payload === void 0 || signature === void 0) {
    _logError("JWT malformed, contained fewer than 3 sections");
    return null;
  }
  try {
    const decoded = (0, import_util.base64Decode)(payload);
    if (!decoded) {
      _logError("Failed to decode base64 JWT payload");
      return null;
    }
    return JSON.parse(decoded);
  } catch (e) {
    _logError("Caught error parsing JWT payload as JSON", e === null || e === void 0 ? void 0 : e.toString());
    return null;
  }
}
function _tokenExpiresIn(token) {
  const parsedToken = _parseToken(token);
  _assert(parsedToken, "internal-error"
  /* AuthErrorCode.INTERNAL_ERROR */);
  _assert(typeof parsedToken.exp !== "undefined", "internal-error"
  /* AuthErrorCode.INTERNAL_ERROR */);
  _assert(typeof parsedToken.iat !== "undefined", "internal-error"
  /* AuthErrorCode.INTERNAL_ERROR */);
  return Number(parsedToken.exp) - Number(parsedToken.iat);
}
async function _logoutIfInvalidated(user, promise, bypassAuthState = false) {
  if (bypassAuthState) {
    return promise;
  }
  try {
    return await promise;
  } catch (e) {
    if (e instanceof import_util.FirebaseError && isUserInvalidated(e)) {
      if (user.auth.currentUser === user) {
        await user.auth.signOut();
      }
    }
    throw e;
  }
}
function isUserInvalidated({
  code
}) {
  return code === `auth/${"user-disabled"}` || code === `auth/${"user-token-expired"}`;
}
var ProactiveRefresh = class {
  constructor(user) {
    this.user = user;
    this.isRunning = false;
    this.timerId = null;
    this.errorBackoff = 3e4;
  }
  _start() {
    if (this.isRunning) {
      return;
    }
    this.isRunning = true;
    this.schedule();
  }
  _stop() {
    if (!this.isRunning) {
      return;
    }
    this.isRunning = false;
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
    }
  }
  getInterval(wasError) {
    var _a;
    if (wasError) {
      const interval = this.errorBackoff;
      this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4
      /* Duration.RETRY_BACKOFF_MAX */);
      return interval;
    } else {
      this.errorBackoff = 3e4;
      const expTime = (_a = this.user.stsTokenManager.expirationTime) !== null && _a !== void 0 ? _a : 0;
      const interval = expTime - Date.now() - 3e5;
      return Math.max(0, interval);
    }
  }
  schedule(wasError = false) {
    if (!this.isRunning) {
      return;
    }
    const interval = this.getInterval(wasError);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, interval);
  }
  async iteration() {
    try {
      await this.user.getIdToken(true);
    } catch (e) {
      if ((e === null || e === void 0 ? void 0 : e.code) === `auth/${"network-request-failed"}`) {
        this.schedule(/* wasError */
        true);
      }
      return;
    }
    this.schedule();
  }
};
var UserMetadata = class {
  constructor(createdAt, lastLoginAt) {
    this.createdAt = createdAt;
    this.lastLoginAt = lastLoginAt;
    this._initializeTime();
  }
  _initializeTime() {
    this.lastSignInTime = utcTimestampToDateString(this.lastLoginAt);
    this.creationTime = utcTimestampToDateString(this.createdAt);
  }
  _copy(metadata) {
    this.createdAt = metadata.createdAt;
    this.lastLoginAt = metadata.lastLoginAt;
    this._initializeTime();
  }
  toJSON() {
    return {
      createdAt: this.createdAt,
      lastLoginAt: this.lastLoginAt
    };
  }
};
async function _reloadWithoutSaving(user) {
  var _a;
  const auth = user.auth;
  const idToken = await user.getIdToken();
  const response = await _logoutIfInvalidated(user, getAccountInfo(auth, {
    idToken
  }));
  _assert(response === null || response === void 0 ? void 0 : response.users.length, auth, "internal-error"
  /* AuthErrorCode.INTERNAL_ERROR */);
  const coreAccount = response.users[0];
  user._notifyReloadListener(coreAccount);
  const newProviderData = ((_a = coreAccount.providerUserInfo) === null || _a === void 0 ? void 0 : _a.length) ? extractProviderData(coreAccount.providerUserInfo) : [];
  const providerData = mergeProviderData(user.providerData, newProviderData);
  const oldIsAnonymous = user.isAnonymous;
  const newIsAnonymous = !(user.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
  const isAnonymous = !oldIsAnonymous ? false : newIsAnonymous;
  const updates = {
    uid: coreAccount.localId,
    displayName: coreAccount.displayName || null,
    photoURL: coreAccount.photoUrl || null,
    email: coreAccount.email || null,
    emailVerified: coreAccount.emailVerified || false,
    phoneNumber: coreAccount.phoneNumber || null,
    tenantId: coreAccount.tenantId || null,
    providerData,
    metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
    isAnonymous
  };
  Object.assign(user, updates);
}
async function reload(user) {
  const userInternal = (0, import_util.getModularInstance)(user);
  await _reloadWithoutSaving(userInternal);
  await userInternal.auth._persistUserIfCurrent(userInternal);
  userInternal.auth._notifyListenersIfCurrent(userInternal);
}
function mergeProviderData(original, newData) {
  const deduped = original.filter(o => !newData.some(n => n.providerId === o.providerId));
  return [...deduped, ...newData];
}
function extractProviderData(providers) {
  return providers.map(_a => {
    var {
        providerId
      } = _a,
      provider = (0, import_tslib.__rest)(_a, ["providerId"]);
    return {
      providerId,
      uid: provider.rawId || "",
      displayName: provider.displayName || null,
      email: provider.email || null,
      phoneNumber: provider.phoneNumber || null,
      photoURL: provider.photoUrl || null
    };
  });
}
async function requestStsToken(auth, refreshToken) {
  const response = await _performFetchWithErrorHandling(auth, {}, async () => {
    const body = (0, import_util.querystring)({
      "grant_type": "refresh_token",
      "refresh_token": refreshToken
    }).slice(1);
    const {
      tokenApiHost,
      apiKey
    } = auth.config;
    const url = await _getFinalTarget(auth, tokenApiHost, "/v1/token", `key=${apiKey}`);
    const headers = await auth._getAdditionalHeaders();
    headers["Content-Type"
    /* HttpHeader.CONTENT_TYPE */] = "application/x-www-form-urlencoded";
    return FetchProvider.fetch()(url, {
      method: "POST",
      headers,
      body
    });
  });
  return {
    accessToken: response.access_token,
    expiresIn: response.expires_in,
    refreshToken: response.refresh_token
  };
}
async function revokeToken(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts:revokeToken", _addTidIfNecessary(auth, request));
}
var StsTokenManager = class _StsTokenManager {
  constructor() {
    this.refreshToken = null;
    this.accessToken = null;
    this.expirationTime = null;
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(response) {
    _assert(response.idToken, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    _assert(typeof response.idToken !== "undefined", "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    _assert(typeof response.refreshToken !== "undefined", "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    const expiresIn = "expiresIn" in response && typeof response.expiresIn !== "undefined" ? Number(response.expiresIn) : _tokenExpiresIn(response.idToken);
    this.updateTokensAndExpiration(response.idToken, response.refreshToken, expiresIn);
  }
  updateFromIdToken(idToken) {
    _assert(idToken.length !== 0, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    const expiresIn = _tokenExpiresIn(idToken);
    this.updateTokensAndExpiration(idToken, null, expiresIn);
  }
  async getToken(auth, forceRefresh = false) {
    if (!forceRefresh && this.accessToken && !this.isExpired) {
      return this.accessToken;
    }
    _assert(this.refreshToken, auth, "user-token-expired"
    /* AuthErrorCode.TOKEN_EXPIRED */);
    if (this.refreshToken) {
      await this.refresh(auth, this.refreshToken);
      return this.accessToken;
    }
    return null;
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(auth, oldToken) {
    const {
      accessToken,
      refreshToken,
      expiresIn
    } = await requestStsToken(auth, oldToken);
    this.updateTokensAndExpiration(accessToken, refreshToken, Number(expiresIn));
  }
  updateTokensAndExpiration(accessToken, refreshToken, expiresInSec) {
    this.refreshToken = refreshToken || null;
    this.accessToken = accessToken || null;
    this.expirationTime = Date.now() + expiresInSec * 1e3;
  }
  static fromJSON(appName, object) {
    const {
      refreshToken,
      accessToken,
      expirationTime
    } = object;
    const manager = new _StsTokenManager();
    if (refreshToken) {
      _assert(typeof refreshToken === "string", "internal-error", {
        appName
      });
      manager.refreshToken = refreshToken;
    }
    if (accessToken) {
      _assert(typeof accessToken === "string", "internal-error", {
        appName
      });
      manager.accessToken = accessToken;
    }
    if (expirationTime) {
      _assert(typeof expirationTime === "number", "internal-error", {
        appName
      });
      manager.expirationTime = expirationTime;
    }
    return manager;
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime
    };
  }
  _assign(stsTokenManager) {
    this.accessToken = stsTokenManager.accessToken;
    this.refreshToken = stsTokenManager.refreshToken;
    this.expirationTime = stsTokenManager.expirationTime;
  }
  _clone() {
    return Object.assign(new _StsTokenManager(), this.toJSON());
  }
  _performRefresh() {
    return debugFail("not implemented");
  }
};
function assertStringOrUndefined(assertion, appName) {
  _assert(typeof assertion === "string" || typeof assertion === "undefined", "internal-error", {
    appName
  });
}
var UserImpl = class _UserImpl {
  constructor(_a) {
    var {
        uid,
        auth,
        stsTokenManager
      } = _a,
      opt = (0, import_tslib.__rest)(_a, ["uid", "auth", "stsTokenManager"]);
    this.providerId = "firebase";
    this.proactiveRefresh = new ProactiveRefresh(this);
    this.reloadUserInfo = null;
    this.reloadListener = null;
    this.uid = uid;
    this.auth = auth;
    this.stsTokenManager = stsTokenManager;
    this.accessToken = stsTokenManager.accessToken;
    this.displayName = opt.displayName || null;
    this.email = opt.email || null;
    this.emailVerified = opt.emailVerified || false;
    this.phoneNumber = opt.phoneNumber || null;
    this.photoURL = opt.photoURL || null;
    this.isAnonymous = opt.isAnonymous || false;
    this.tenantId = opt.tenantId || null;
    this.providerData = opt.providerData ? [...opt.providerData] : [];
    this.metadata = new UserMetadata(opt.createdAt || void 0, opt.lastLoginAt || void 0);
  }
  async getIdToken(forceRefresh) {
    const accessToken = await _logoutIfInvalidated(this, this.stsTokenManager.getToken(this.auth, forceRefresh));
    _assert(accessToken, this.auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    if (this.accessToken !== accessToken) {
      this.accessToken = accessToken;
      await this.auth._persistUserIfCurrent(this);
      this.auth._notifyListenersIfCurrent(this);
    }
    return accessToken;
  }
  getIdTokenResult(forceRefresh) {
    return getIdTokenResult(this, forceRefresh);
  }
  reload() {
    return reload(this);
  }
  _assign(user) {
    if (this === user) {
      return;
    }
    _assert(this.uid === user.uid, this.auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    this.displayName = user.displayName;
    this.photoURL = user.photoURL;
    this.email = user.email;
    this.emailVerified = user.emailVerified;
    this.phoneNumber = user.phoneNumber;
    this.isAnonymous = user.isAnonymous;
    this.tenantId = user.tenantId;
    this.providerData = user.providerData.map(userInfo => Object.assign({}, userInfo));
    this.metadata._copy(user.metadata);
    this.stsTokenManager._assign(user.stsTokenManager);
  }
  _clone(auth) {
    const newUser = new _UserImpl(Object.assign(Object.assign({}, this), {
      auth,
      stsTokenManager: this.stsTokenManager._clone()
    }));
    newUser.metadata._copy(this.metadata);
    return newUser;
  }
  _onReload(callback) {
    _assert(!this.reloadListener, this.auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    this.reloadListener = callback;
    if (this.reloadUserInfo) {
      this._notifyReloadListener(this.reloadUserInfo);
      this.reloadUserInfo = null;
    }
  }
  _notifyReloadListener(userInfo) {
    if (this.reloadListener) {
      this.reloadListener(userInfo);
    } else {
      this.reloadUserInfo = userInfo;
    }
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(response, reload2 = false) {
    let tokensRefreshed = false;
    if (response.idToken && response.idToken !== this.stsTokenManager.accessToken) {
      this.stsTokenManager.updateFromServerResponse(response);
      tokensRefreshed = true;
    }
    if (reload2) {
      await _reloadWithoutSaving(this);
    }
    await this.auth._persistUserIfCurrent(this);
    if (tokensRefreshed) {
      this.auth._notifyListenersIfCurrent(this);
    }
  }
  async delete() {
    if ((0, import_app._isFirebaseServerApp)(this.auth.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this.auth));
    }
    const idToken = await this.getIdToken();
    await _logoutIfInvalidated(this, deleteAccount(this.auth, {
      idToken
    }));
    this.stsTokenManager.clearRefreshToken();
    return this.auth.signOut();
  }
  toJSON() {
    return Object.assign(Object.assign({
      uid: this.uid,
      email: this.email || void 0,
      emailVerified: this.emailVerified,
      displayName: this.displayName || void 0,
      isAnonymous: this.isAnonymous,
      photoURL: this.photoURL || void 0,
      phoneNumber: this.phoneNumber || void 0,
      tenantId: this.tenantId || void 0,
      providerData: this.providerData.map(userInfo => Object.assign({}, userInfo)),
      stsTokenManager: this.stsTokenManager.toJSON(),
      // Redirect event ID must be maintained in case there is a pending
      // redirect event.
      _redirectEventId: this._redirectEventId
    }, this.metadata.toJSON()), {
      // Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
      apiKey: this.auth.config.apiKey,
      appName: this.auth.name
    });
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(auth, object) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const displayName = (_a = object.displayName) !== null && _a !== void 0 ? _a : void 0;
    const email = (_b = object.email) !== null && _b !== void 0 ? _b : void 0;
    const phoneNumber = (_c = object.phoneNumber) !== null && _c !== void 0 ? _c : void 0;
    const photoURL = (_d = object.photoURL) !== null && _d !== void 0 ? _d : void 0;
    const tenantId = (_e = object.tenantId) !== null && _e !== void 0 ? _e : void 0;
    const _redirectEventId = (_f = object._redirectEventId) !== null && _f !== void 0 ? _f : void 0;
    const createdAt = (_g = object.createdAt) !== null && _g !== void 0 ? _g : void 0;
    const lastLoginAt = (_h = object.lastLoginAt) !== null && _h !== void 0 ? _h : void 0;
    const {
      uid,
      emailVerified,
      isAnonymous,
      providerData,
      stsTokenManager: plainObjectTokenManager
    } = object;
    _assert(uid && plainObjectTokenManager, auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    const stsTokenManager = StsTokenManager.fromJSON(this.name, plainObjectTokenManager);
    _assert(typeof uid === "string", auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    assertStringOrUndefined(displayName, auth.name);
    assertStringOrUndefined(email, auth.name);
    _assert(typeof emailVerified === "boolean", auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    _assert(typeof isAnonymous === "boolean", auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    assertStringOrUndefined(phoneNumber, auth.name);
    assertStringOrUndefined(photoURL, auth.name);
    assertStringOrUndefined(tenantId, auth.name);
    assertStringOrUndefined(_redirectEventId, auth.name);
    assertStringOrUndefined(createdAt, auth.name);
    assertStringOrUndefined(lastLoginAt, auth.name);
    const user = new _UserImpl({
      uid,
      auth,
      email,
      emailVerified,
      displayName,
      isAnonymous,
      photoURL,
      phoneNumber,
      tenantId,
      stsTokenManager,
      createdAt,
      lastLoginAt
    });
    if (providerData && Array.isArray(providerData)) {
      user.providerData = providerData.map(userInfo => Object.assign({}, userInfo));
    }
    if (_redirectEventId) {
      user._redirectEventId = _redirectEventId;
    }
    return user;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromIdTokenResponse(auth, idTokenResponse, isAnonymous = false) {
    const stsTokenManager = new StsTokenManager();
    stsTokenManager.updateFromServerResponse(idTokenResponse);
    const user = new _UserImpl({
      uid: idTokenResponse.localId,
      auth,
      stsTokenManager,
      isAnonymous
    });
    await _reloadWithoutSaving(user);
    return user;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromGetAccountInfoResponse(auth, response, idToken) {
    const coreAccount = response.users[0];
    _assert(coreAccount.localId !== void 0, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    const providerData = coreAccount.providerUserInfo !== void 0 ? extractProviderData(coreAccount.providerUserInfo) : [];
    const isAnonymous = !(coreAccount.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
    const stsTokenManager = new StsTokenManager();
    stsTokenManager.updateFromIdToken(idToken);
    const user = new _UserImpl({
      uid: coreAccount.localId,
      auth,
      stsTokenManager,
      isAnonymous
    });
    const updates = {
      uid: coreAccount.localId,
      displayName: coreAccount.displayName || null,
      photoURL: coreAccount.photoUrl || null,
      email: coreAccount.email || null,
      emailVerified: coreAccount.emailVerified || false,
      phoneNumber: coreAccount.phoneNumber || null,
      tenantId: coreAccount.tenantId || null,
      providerData,
      metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
      isAnonymous: !(coreAccount.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length)
    };
    Object.assign(user, updates);
    return user;
  }
};
var instanceCache = /* @__PURE__ */new Map();
function _getInstance(cls) {
  debugAssert(cls instanceof Function, "Expected a class definition");
  let instance = instanceCache.get(cls);
  if (instance) {
    debugAssert(instance instanceof cls, "Instance stored in cache mismatched with class");
    return instance;
  }
  instance = new cls();
  instanceCache.set(cls, instance);
  return instance;
}
var InMemoryPersistence = class {
  constructor() {
    this.type = "NONE";
    this.storage = {};
  }
  async _isAvailable() {
    return true;
  }
  async _set(key, value) {
    this.storage[key] = value;
  }
  async _get(key) {
    const value = this.storage[key];
    return value === void 0 ? null : value;
  }
  async _remove(key) {
    delete this.storage[key];
  }
  _addListener(_key, _listener) {
    return;
  }
  _removeListener(_key, _listener) {
    return;
  }
};
InMemoryPersistence.type = "NONE";
var inMemoryPersistence = InMemoryPersistence;
function _persistenceKeyName(key, apiKey, appName) {
  return `${"firebase"}:${key}:${apiKey}:${appName}`;
}
var PersistenceUserManager = class _PersistenceUserManager {
  constructor(persistence, auth, userKey) {
    this.persistence = persistence;
    this.auth = auth;
    this.userKey = userKey;
    const {
      config,
      name: name2
    } = this.auth;
    this.fullUserKey = _persistenceKeyName(this.userKey, config.apiKey, name2);
    this.fullPersistenceKey = _persistenceKeyName("persistence", config.apiKey, name2);
    this.boundEventHandler = auth._onStorageEvent.bind(auth);
    this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(user) {
    return this.persistence._set(this.fullUserKey, user.toJSON());
  }
  async getCurrentUser() {
    const blob = await this.persistence._get(this.fullUserKey);
    if (!blob) {
      return null;
    }
    if (typeof blob === "string") {
      const response = await getAccountInfo(this.auth, {
        idToken: blob
      }).catch(() => void 0);
      if (!response) {
        return null;
      }
      return UserImpl._fromGetAccountInfoResponse(this.auth, response, blob);
    }
    return UserImpl._fromJSON(this.auth, blob);
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
  }
  async setPersistence(newPersistence) {
    if (this.persistence === newPersistence) {
      return;
    }
    const currentUser = await this.getCurrentUser();
    await this.removeCurrentUser();
    this.persistence = newPersistence;
    if (currentUser) {
      return this.setCurrentUser(currentUser);
    }
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(auth, persistenceHierarchy, userKey = "authUser") {
    if (!persistenceHierarchy.length) {
      return new _PersistenceUserManager(_getInstance(inMemoryPersistence), auth, userKey);
    }
    const availablePersistences = (await Promise.all(persistenceHierarchy.map(async persistence => {
      if (await persistence._isAvailable()) {
        return persistence;
      }
      return void 0;
    }))).filter(persistence => persistence);
    let selectedPersistence = availablePersistences[0] || _getInstance(inMemoryPersistence);
    const key = _persistenceKeyName(userKey, auth.config.apiKey, auth.name);
    let userToMigrate = null;
    for (const persistence of persistenceHierarchy) {
      try {
        const blob = await persistence._get(key);
        if (blob) {
          let user;
          if (typeof blob === "string") {
            const response = await getAccountInfo(auth, {
              idToken: blob
            }).catch(() => void 0);
            if (!response) {
              break;
            }
            user = await UserImpl._fromGetAccountInfoResponse(auth, response, blob);
          } else {
            user = UserImpl._fromJSON(auth, blob);
          }
          if (persistence !== selectedPersistence) {
            userToMigrate = user;
          }
          selectedPersistence = persistence;
          break;
        }
      } catch (_a) {}
    }
    const migrationHierarchy = availablePersistences.filter(p => p._shouldAllowMigration);
    if (!selectedPersistence._shouldAllowMigration || !migrationHierarchy.length) {
      return new _PersistenceUserManager(selectedPersistence, auth, userKey);
    }
    selectedPersistence = migrationHierarchy[0];
    if (userToMigrate) {
      await selectedPersistence._set(key, userToMigrate.toJSON());
    }
    await Promise.all(persistenceHierarchy.map(async persistence => {
      if (persistence !== selectedPersistence) {
        try {
          await persistence._remove(key);
        } catch (_a) {}
      }
    }));
    return new _PersistenceUserManager(selectedPersistence, auth, userKey);
  }
};
function _getBrowserName(userAgent) {
  const ua = userAgent.toLowerCase();
  if (ua.includes("opera/") || ua.includes("opr/") || ua.includes("opios/")) {
    return "Opera";
  } else if (_isIEMobile(ua)) {
    return "IEMobile";
  } else if (ua.includes("msie") || ua.includes("trident/")) {
    return "IE";
  } else if (ua.includes("edge/")) {
    return "Edge";
  } else if (_isFirefox(ua)) {
    return "Firefox";
  } else if (ua.includes("silk/")) {
    return "Silk";
  } else if (_isBlackBerry(ua)) {
    return "Blackberry";
  } else if (_isWebOS(ua)) {
    return "Webos";
  } else if (_isSafari(ua)) {
    return "Safari";
  } else if ((ua.includes("chrome/") || _isChromeIOS(ua)) && !ua.includes("edge/")) {
    return "Chrome";
  } else if (_isAndroid(ua)) {
    return "Android";
  } else {
    const re = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/;
    const matches = userAgent.match(re);
    if ((matches === null || matches === void 0 ? void 0 : matches.length) === 2) {
      return matches[1];
    }
  }
  return "Other";
}
function _isFirefox(ua = (0, import_util.getUA)()) {
  return /firefox\//i.test(ua);
}
function _isSafari(userAgent = (0, import_util.getUA)()) {
  const ua = userAgent.toLowerCase();
  return ua.includes("safari/") && !ua.includes("chrome/") && !ua.includes("crios/") && !ua.includes("android");
}
function _isChromeIOS(ua = (0, import_util.getUA)()) {
  return /crios\//i.test(ua);
}
function _isIEMobile(ua = (0, import_util.getUA)()) {
  return /iemobile/i.test(ua);
}
function _isAndroid(ua = (0, import_util.getUA)()) {
  return /android/i.test(ua);
}
function _isBlackBerry(ua = (0, import_util.getUA)()) {
  return /blackberry/i.test(ua);
}
function _isWebOS(ua = (0, import_util.getUA)()) {
  return /webos/i.test(ua);
}
function _isIOS(ua = (0, import_util.getUA)()) {
  return /iphone|ipad|ipod/i.test(ua) || /macintosh/i.test(ua) && /mobile/i.test(ua);
}
function _isIOS7Or8(ua = (0, import_util.getUA)()) {
  return /(iPad|iPhone|iPod).*OS 7_\d/i.test(ua) || /(iPad|iPhone|iPod).*OS 8_\d/i.test(ua);
}
function _isIOSStandalone(ua = (0, import_util.getUA)()) {
  var _a;
  return _isIOS(ua) && !!((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.standalone);
}
function _isIE10() {
  return (0, import_util.isIE)() && document.documentMode === 10;
}
function _isMobileBrowser(ua = (0, import_util.getUA)()) {
  return _isIOS(ua) || _isAndroid(ua) || _isWebOS(ua) || _isBlackBerry(ua) || /windows phone/i.test(ua) || _isIEMobile(ua);
}
function _getClientVersion(clientPlatform, frameworks = []) {
  let reportedPlatform;
  switch (clientPlatform) {
    case "Browser":
      reportedPlatform = _getBrowserName((0, import_util.getUA)());
      break;
    case "Worker":
      reportedPlatform = `${_getBrowserName((0, import_util.getUA)())}-${clientPlatform}`;
      break;
    default:
      reportedPlatform = clientPlatform;
  }
  const reportedFrameworks = frameworks.length ? frameworks.join(",") : "FirebaseCore-web";
  return `${reportedPlatform}/${"JsCore"}/${import_app.SDK_VERSION}/${reportedFrameworks}`;
}
var AuthMiddlewareQueue = class {
  constructor(auth) {
    this.auth = auth;
    this.queue = [];
  }
  pushCallback(callback, onAbort) {
    const wrappedCallback = user => new Promise((resolve, reject) => {
      try {
        const result = callback(user);
        resolve(result);
      } catch (e) {
        reject(e);
      }
    });
    wrappedCallback.onAbort = onAbort;
    this.queue.push(wrappedCallback);
    const index = this.queue.length - 1;
    return () => {
      this.queue[index] = () => Promise.resolve();
    };
  }
  async runMiddleware(nextUser) {
    if (this.auth.currentUser === nextUser) {
      return;
    }
    const onAbortStack = [];
    try {
      for (const beforeStateCallback of this.queue) {
        await beforeStateCallback(nextUser);
        if (beforeStateCallback.onAbort) {
          onAbortStack.push(beforeStateCallback.onAbort);
        }
      }
    } catch (e) {
      onAbortStack.reverse();
      for (const onAbort of onAbortStack) {
        try {
          onAbort();
        } catch (_) {}
      }
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: e === null || e === void 0 ? void 0 : e.message
      });
    }
  }
};
async function _getPasswordPolicy(auth, request = {}) {
  return _performApiRequest(auth, "GET", "/v2/passwordPolicy", _addTidIfNecessary(auth, request));
}
var MINIMUM_MIN_PASSWORD_LENGTH = 6;
var PasswordPolicyImpl = class {
  constructor(response) {
    var _a, _b, _c, _d;
    const responseOptions = response.customStrengthOptions;
    this.customStrengthOptions = {};
    this.customStrengthOptions.minPasswordLength = (_a = responseOptions.minPasswordLength) !== null && _a !== void 0 ? _a : MINIMUM_MIN_PASSWORD_LENGTH;
    if (responseOptions.maxPasswordLength) {
      this.customStrengthOptions.maxPasswordLength = responseOptions.maxPasswordLength;
    }
    if (responseOptions.containsLowercaseCharacter !== void 0) {
      this.customStrengthOptions.containsLowercaseLetter = responseOptions.containsLowercaseCharacter;
    }
    if (responseOptions.containsUppercaseCharacter !== void 0) {
      this.customStrengthOptions.containsUppercaseLetter = responseOptions.containsUppercaseCharacter;
    }
    if (responseOptions.containsNumericCharacter !== void 0) {
      this.customStrengthOptions.containsNumericCharacter = responseOptions.containsNumericCharacter;
    }
    if (responseOptions.containsNonAlphanumericCharacter !== void 0) {
      this.customStrengthOptions.containsNonAlphanumericCharacter = responseOptions.containsNonAlphanumericCharacter;
    }
    this.enforcementState = response.enforcementState;
    if (this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED") {
      this.enforcementState = "OFF";
    }
    this.allowedNonAlphanumericCharacters = (_c = (_b = response.allowedNonAlphanumericCharacters) === null || _b === void 0 ? void 0 : _b.join("")) !== null && _c !== void 0 ? _c : "";
    this.forceUpgradeOnSignin = (_d = response.forceUpgradeOnSignin) !== null && _d !== void 0 ? _d : false;
    this.schemaVersion = response.schemaVersion;
  }
  validatePassword(password) {
    var _a, _b, _c, _d, _e, _f;
    const status = {
      isValid: true,
      passwordPolicy: this
    };
    this.validatePasswordLengthOptions(password, status);
    this.validatePasswordCharacterOptions(password, status);
    status.isValid && (status.isValid = (_a = status.meetsMinPasswordLength) !== null && _a !== void 0 ? _a : true);
    status.isValid && (status.isValid = (_b = status.meetsMaxPasswordLength) !== null && _b !== void 0 ? _b : true);
    status.isValid && (status.isValid = (_c = status.containsLowercaseLetter) !== null && _c !== void 0 ? _c : true);
    status.isValid && (status.isValid = (_d = status.containsUppercaseLetter) !== null && _d !== void 0 ? _d : true);
    status.isValid && (status.isValid = (_e = status.containsNumericCharacter) !== null && _e !== void 0 ? _e : true);
    status.isValid && (status.isValid = (_f = status.containsNonAlphanumericCharacter) !== null && _f !== void 0 ? _f : true);
    return status;
  }
  /**
   * Validates that the password meets the length options for the policy.
   *
   * @param password Password to validate.
   * @param status Validation status.
   */
  validatePasswordLengthOptions(password, status) {
    const minPasswordLength = this.customStrengthOptions.minPasswordLength;
    const maxPasswordLength = this.customStrengthOptions.maxPasswordLength;
    if (minPasswordLength) {
      status.meetsMinPasswordLength = password.length >= minPasswordLength;
    }
    if (maxPasswordLength) {
      status.meetsMaxPasswordLength = password.length <= maxPasswordLength;
    }
  }
  /**
   * Validates that the password meets the character options for the policy.
   *
   * @param password Password to validate.
   * @param status Validation status.
   */
  validatePasswordCharacterOptions(password, status) {
    this.updatePasswordCharacterOptionsStatuses(status, /* containsLowercaseCharacter= */
    false, /* containsUppercaseCharacter= */
    false, /* containsNumericCharacter= */
    false, /* containsNonAlphanumericCharacter= */
    false);
    let passwordChar;
    for (let i = 0; i < password.length; i++) {
      passwordChar = password.charAt(i);
      this.updatePasswordCharacterOptionsStatuses(status, /* containsLowercaseCharacter= */
      passwordChar >= "a" && passwordChar <= "z", /* containsUppercaseCharacter= */
      passwordChar >= "A" && passwordChar <= "Z", /* containsNumericCharacter= */
      passwordChar >= "0" && passwordChar <= "9", /* containsNonAlphanumericCharacter= */
      this.allowedNonAlphanumericCharacters.includes(passwordChar));
    }
  }
  /**
   * Updates the running validation status with the statuses for the character options.
   * Expected to be called each time a character is processed to update each option status
   * based on the current character.
   *
   * @param status Validation status.
   * @param containsLowercaseCharacter Whether the character is a lowercase letter.
   * @param containsUppercaseCharacter Whether the character is an uppercase letter.
   * @param containsNumericCharacter Whether the character is a numeric character.
   * @param containsNonAlphanumericCharacter Whether the character is a non-alphanumeric character.
   */
  updatePasswordCharacterOptionsStatuses(status, containsLowercaseCharacter, containsUppercaseCharacter, containsNumericCharacter, containsNonAlphanumericCharacter) {
    if (this.customStrengthOptions.containsLowercaseLetter) {
      status.containsLowercaseLetter || (status.containsLowercaseLetter = containsLowercaseCharacter);
    }
    if (this.customStrengthOptions.containsUppercaseLetter) {
      status.containsUppercaseLetter || (status.containsUppercaseLetter = containsUppercaseCharacter);
    }
    if (this.customStrengthOptions.containsNumericCharacter) {
      status.containsNumericCharacter || (status.containsNumericCharacter = containsNumericCharacter);
    }
    if (this.customStrengthOptions.containsNonAlphanumericCharacter) {
      status.containsNonAlphanumericCharacter || (status.containsNonAlphanumericCharacter = containsNonAlphanumericCharacter);
    }
  }
};
var AuthImpl = class {
  constructor(app, heartbeatServiceProvider, appCheckServiceProvider, config) {
    this.app = app;
    this.heartbeatServiceProvider = heartbeatServiceProvider;
    this.appCheckServiceProvider = appCheckServiceProvider;
    this.config = config;
    this.currentUser = null;
    this.emulatorConfig = null;
    this.operations = Promise.resolve();
    this.authStateSubscription = new Subscription(this);
    this.idTokenSubscription = new Subscription(this);
    this.beforeStateQueue = new AuthMiddlewareQueue(this);
    this.redirectUser = null;
    this.isProactiveRefreshEnabled = false;
    this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1;
    this._canInitEmulator = true;
    this._isInitialized = false;
    this._deleted = false;
    this._initializationPromise = null;
    this._popupRedirectResolver = null;
    this._errorFactory = _DEFAULT_AUTH_ERROR_FACTORY;
    this._agentRecaptchaConfig = null;
    this._tenantRecaptchaConfigs = {};
    this._projectPasswordPolicy = null;
    this._tenantPasswordPolicies = {};
    this._resolvePersistenceManagerAvailable = void 0;
    this.lastNotifiedUid = void 0;
    this.languageCode = null;
    this.tenantId = null;
    this.settings = {
      appVerificationDisabledForTesting: false
    };
    this.frameworks = [];
    this.name = app.name;
    this.clientVersion = config.sdkClientVersion;
    this._persistenceManagerAvailable = new Promise(resolve => this._resolvePersistenceManagerAvailable = resolve);
  }
  _initializeWithPersistence(persistenceHierarchy, popupRedirectResolver) {
    if (popupRedirectResolver) {
      this._popupRedirectResolver = _getInstance(popupRedirectResolver);
    }
    this._initializationPromise = this.queue(async () => {
      var _a, _b, _c;
      if (this._deleted) {
        return;
      }
      this.persistenceManager = await PersistenceUserManager.create(this, persistenceHierarchy);
      (_a = this._resolvePersistenceManagerAvailable) === null || _a === void 0 ? void 0 : _a.call(this);
      if (this._deleted) {
        return;
      }
      if ((_b = this._popupRedirectResolver) === null || _b === void 0 ? void 0 : _b._shouldInitProactively) {
        try {
          await this._popupRedirectResolver._initialize(this);
        } catch (e) {}
      }
      await this.initializeCurrentUser(popupRedirectResolver);
      this.lastNotifiedUid = ((_c = this.currentUser) === null || _c === void 0 ? void 0 : _c.uid) || null;
      if (this._deleted) {
        return;
      }
      this._isInitialized = true;
    });
    return this._initializationPromise;
  }
  /**
   * If the persistence is changed in another window, the user manager will let us know
   */
  async _onStorageEvent() {
    if (this._deleted) {
      return;
    }
    const user = await this.assertedPersistence.getCurrentUser();
    if (!this.currentUser && !user) {
      return;
    }
    if (this.currentUser && user && this.currentUser.uid === user.uid) {
      this._currentUser._assign(user);
      await this.currentUser.getIdToken();
      return;
    }
    await this._updateCurrentUser(user, /* skipBeforeStateCallbacks */
    true);
  }
  async initializeCurrentUserFromIdToken(idToken) {
    try {
      const response = await getAccountInfo(this, {
        idToken
      });
      const user = await UserImpl._fromGetAccountInfoResponse(this, response, idToken);
      await this.directlySetCurrentUser(user);
    } catch (err) {
      console.warn("FirebaseServerApp could not login user with provided authIdToken: ", err);
      await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(popupRedirectResolver) {
    var _a;
    if ((0, import_app._isFirebaseServerApp)(this.app)) {
      const idToken = this.app.settings.authIdToken;
      if (idToken) {
        return new Promise(resolve => {
          setTimeout(() => this.initializeCurrentUserFromIdToken(idToken).then(resolve, resolve));
        });
      } else {
        return this.directlySetCurrentUser(null);
      }
    }
    const previouslyStoredUser = await this.assertedPersistence.getCurrentUser();
    let futureCurrentUser = previouslyStoredUser;
    let needsTocheckMiddleware = false;
    if (popupRedirectResolver && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const redirectUserEventId = (_a = this.redirectUser) === null || _a === void 0 ? void 0 : _a._redirectEventId;
      const storedUserEventId = futureCurrentUser === null || futureCurrentUser === void 0 ? void 0 : futureCurrentUser._redirectEventId;
      const result = await this.tryRedirectSignIn(popupRedirectResolver);
      if ((!redirectUserEventId || redirectUserEventId === storedUserEventId) && (result === null || result === void 0 ? void 0 : result.user)) {
        futureCurrentUser = result.user;
        needsTocheckMiddleware = true;
      }
    }
    if (!futureCurrentUser) {
      return this.directlySetCurrentUser(null);
    }
    if (!futureCurrentUser._redirectEventId) {
      if (needsTocheckMiddleware) {
        try {
          await this.beforeStateQueue.runMiddleware(futureCurrentUser);
        } catch (e) {
          futureCurrentUser = previouslyStoredUser;
          this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(e));
        }
      }
      if (futureCurrentUser) {
        return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
      } else {
        return this.directlySetCurrentUser(null);
      }
    }
    _assert(this._popupRedirectResolver, this, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */);
    await this.getOrInitRedirectPersistenceManager();
    if (this.redirectUser && this.redirectUser._redirectEventId === futureCurrentUser._redirectEventId) {
      return this.directlySetCurrentUser(futureCurrentUser);
    }
    return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
  }
  async tryRedirectSignIn(redirectResolver) {
    let result = null;
    try {
      result = await this._popupRedirectResolver._completeRedirectFn(this, redirectResolver, true);
    } catch (e) {
      await this._setRedirectUser(null);
    }
    return result;
  }
  async reloadAndSetCurrentUserOrClear(user) {
    try {
      await _reloadWithoutSaving(user);
    } catch (e) {
      if ((e === null || e === void 0 ? void 0 : e.code) !== `auth/${"network-request-failed"}`) {
        return this.directlySetCurrentUser(null);
      }
    }
    return this.directlySetCurrentUser(user);
  }
  useDeviceLanguage() {
    this.languageCode = _getUserLanguage();
  }
  async _delete() {
    this._deleted = true;
  }
  async updateCurrentUser(userExtern) {
    if ((0, import_app._isFirebaseServerApp)(this.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));
    }
    const user = userExtern ? (0, import_util.getModularInstance)(userExtern) : null;
    if (user) {
      _assert(user.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"
      /* AuthErrorCode.INVALID_AUTH */);
    }
    return this._updateCurrentUser(user && user._clone(this));
  }
  async _updateCurrentUser(user, skipBeforeStateCallbacks = false) {
    if (this._deleted) {
      return;
    }
    if (user) {
      _assert(this.tenantId === user.tenantId, this, "tenant-id-mismatch"
      /* AuthErrorCode.TENANT_ID_MISMATCH */);
    }
    if (!skipBeforeStateCallbacks) {
      await this.beforeStateQueue.runMiddleware(user);
    }
    return this.queue(async () => {
      await this.directlySetCurrentUser(user);
      this.notifyAuthListeners();
    });
  }
  async signOut() {
    if ((0, import_app._isFirebaseServerApp)(this.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));
    }
    await this.beforeStateQueue.runMiddleware(null);
    if (this.redirectPersistenceManager || this._popupRedirectResolver) {
      await this._setRedirectUser(null);
    }
    return this._updateCurrentUser(null, /* skipBeforeStateCallbacks */
    true);
  }
  setPersistence(persistence) {
    if ((0, import_app._isFirebaseServerApp)(this.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));
    }
    return this.queue(async () => {
      await this.assertedPersistence.setPersistence(_getInstance(persistence));
    });
  }
  _getRecaptchaConfig() {
    if (this.tenantId == null) {
      return this._agentRecaptchaConfig;
    } else {
      return this._tenantRecaptchaConfigs[this.tenantId];
    }
  }
  async validatePassword(password) {
    if (!this._getPasswordPolicyInternal()) {
      await this._updatePasswordPolicy();
    }
    const passwordPolicy = this._getPasswordPolicyInternal();
    if (passwordPolicy.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION) {
      return Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {}));
    }
    return passwordPolicy.validatePassword(password);
  }
  _getPasswordPolicyInternal() {
    if (this.tenantId === null) {
      return this._projectPasswordPolicy;
    } else {
      return this._tenantPasswordPolicies[this.tenantId];
    }
  }
  async _updatePasswordPolicy() {
    const response = await _getPasswordPolicy(this);
    const passwordPolicy = new PasswordPolicyImpl(response);
    if (this.tenantId === null) {
      this._projectPasswordPolicy = passwordPolicy;
    } else {
      this._tenantPasswordPolicies[this.tenantId] = passwordPolicy;
    }
  }
  _getPersistenceType() {
    return this.assertedPersistence.persistence.type;
  }
  _getPersistence() {
    return this.assertedPersistence.persistence;
  }
  _updateErrorMap(errorMap) {
    this._errorFactory = new import_util.ErrorFactory("auth", "Firebase", errorMap());
  }
  onAuthStateChanged(nextOrObserver, error, completed) {
    return this.registerStateListener(this.authStateSubscription, nextOrObserver, error, completed);
  }
  beforeAuthStateChanged(callback, onAbort) {
    return this.beforeStateQueue.pushCallback(callback, onAbort);
  }
  onIdTokenChanged(nextOrObserver, error, completed) {
    return this.registerStateListener(this.idTokenSubscription, nextOrObserver, error, completed);
  }
  authStateReady() {
    return new Promise((resolve, reject) => {
      if (this.currentUser) {
        resolve();
      } else {
        const unsubscribe = this.onAuthStateChanged(() => {
          unsubscribe();
          resolve();
        }, reject);
      }
    });
  }
  /**
   * Revokes the given access token. Currently only supports Apple OAuth access tokens.
   */
  async revokeAccessToken(token) {
    if (this.currentUser) {
      const idToken = await this.currentUser.getIdToken();
      const request = {
        providerId: "apple.com",
        tokenType: "ACCESS_TOKEN",
        token,
        idToken
      };
      if (this.tenantId != null) {
        request.tenantId = this.tenantId;
      }
      await revokeToken(this, request);
    }
  }
  toJSON() {
    var _a;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser: (_a = this._currentUser) === null || _a === void 0 ? void 0 : _a.toJSON()
    };
  }
  async _setRedirectUser(user, popupRedirectResolver) {
    const redirectManager = await this.getOrInitRedirectPersistenceManager(popupRedirectResolver);
    return user === null ? redirectManager.removeCurrentUser() : redirectManager.setCurrentUser(user);
  }
  async getOrInitRedirectPersistenceManager(popupRedirectResolver) {
    if (!this.redirectPersistenceManager) {
      const resolver = popupRedirectResolver && _getInstance(popupRedirectResolver) || this._popupRedirectResolver;
      _assert(resolver, this, "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */);
      this.redirectPersistenceManager = await PersistenceUserManager.create(this, [_getInstance(resolver._redirectPersistence)], "redirectUser"
      /* KeyName.REDIRECT_USER */);
      this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(id) {
    var _a, _b;
    if (this._isInitialized) {
      await this.queue(async () => {});
    }
    if (((_a = this._currentUser) === null || _a === void 0 ? void 0 : _a._redirectEventId) === id) {
      return this._currentUser;
    }
    if (((_b = this.redirectUser) === null || _b === void 0 ? void 0 : _b._redirectEventId) === id) {
      return this.redirectUser;
    }
    return null;
  }
  async _persistUserIfCurrent(user) {
    if (user === this.currentUser) {
      return this.queue(async () => this.directlySetCurrentUser(user));
    }
  }
  /** Notifies listeners only if the user is current */
  _notifyListenersIfCurrent(user) {
    if (user === this.currentUser) {
      this.notifyAuthListeners();
    }
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    this.isProactiveRefreshEnabled = true;
    if (this.currentUser) {
      this._currentUser._startProactiveRefresh();
    }
  }
  _stopProactiveRefresh() {
    this.isProactiveRefreshEnabled = false;
    if (this.currentUser) {
      this._currentUser._stopProactiveRefresh();
    }
  }
  /** Returns the current user cast as the internal type */
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var _a, _b;
    if (!this._isInitialized) {
      return;
    }
    this.idTokenSubscription.next(this.currentUser);
    const currentUid = (_b = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.uid) !== null && _b !== void 0 ? _b : null;
    if (this.lastNotifiedUid !== currentUid) {
      this.lastNotifiedUid = currentUid;
      this.authStateSubscription.next(this.currentUser);
    }
  }
  registerStateListener(subscription, nextOrObserver, error, completed) {
    if (this._deleted) {
      return () => {};
    }
    const cb = typeof nextOrObserver === "function" ? nextOrObserver : nextOrObserver.next.bind(nextOrObserver);
    let isUnsubscribed = false;
    const promise = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    _assert(promise, this, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    promise.then(() => {
      if (isUnsubscribed) {
        return;
      }
      cb(this.currentUser);
    });
    if (typeof nextOrObserver === "function") {
      const unsubscribe = subscription.addObserver(nextOrObserver, error, completed);
      return () => {
        isUnsubscribed = true;
        unsubscribe();
      };
    } else {
      const unsubscribe = subscription.addObserver(nextOrObserver);
      return () => {
        isUnsubscribed = true;
        unsubscribe();
      };
    }
  }
  /**
   * Unprotected (from race conditions) method to set the current user. This
   * should only be called from within a queued callback. This is necessary
   * because the queue shouldn't rely on another queued callback.
   */
  async directlySetCurrentUser(user) {
    if (this.currentUser && this.currentUser !== user) {
      this._currentUser._stopProactiveRefresh();
    }
    if (user && this.isProactiveRefreshEnabled) {
      user._startProactiveRefresh();
    }
    this.currentUser = user;
    if (user) {
      await this.assertedPersistence.setCurrentUser(user);
    } else {
      await this.assertedPersistence.removeCurrentUser();
    }
  }
  queue(action) {
    this.operations = this.operations.then(action, action);
    return this.operations;
  }
  get assertedPersistence() {
    _assert(this.persistenceManager, this, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    return this.persistenceManager;
  }
  _logFramework(framework) {
    if (!framework || this.frameworks.includes(framework)) {
      return;
    }
    this.frameworks.push(framework);
    this.frameworks.sort();
    this.clientVersion = _getClientVersion(this.config.clientPlatform, this._getFrameworks());
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var _a;
    const headers = {
      ["X-Client-Version"
      /* HttpHeader.X_CLIENT_VERSION */]: this.clientVersion
    };
    if (this.app.options.appId) {
      headers["X-Firebase-gmpid"
      /* HttpHeader.X_FIREBASE_GMPID */] = this.app.options.appId;
    }
    const heartbeatsHeader = await ((_a = this.heartbeatServiceProvider.getImmediate({
      optional: true
    })) === null || _a === void 0 ? void 0 : _a.getHeartbeatsHeader());
    if (heartbeatsHeader) {
      headers["X-Firebase-Client"
      /* HttpHeader.X_FIREBASE_CLIENT */] = heartbeatsHeader;
    }
    const appCheckToken = await this._getAppCheckToken();
    if (appCheckToken) {
      headers["X-Firebase-AppCheck"
      /* HttpHeader.X_FIREBASE_APP_CHECK */] = appCheckToken;
    }
    return headers;
  }
  async _getAppCheckToken() {
    var _a;
    if ((0, import_app._isFirebaseServerApp)(this.app) && this.app.settings.appCheckToken) {
      return this.app.settings.appCheckToken;
    }
    const appCheckTokenResult = await ((_a = this.appCheckServiceProvider.getImmediate({
      optional: true
    })) === null || _a === void 0 ? void 0 : _a.getToken());
    if (appCheckTokenResult === null || appCheckTokenResult === void 0 ? void 0 : appCheckTokenResult.error) {
      _logWarn(`Error while retrieving App Check token: ${appCheckTokenResult.error}`);
    }
    return appCheckTokenResult === null || appCheckTokenResult === void 0 ? void 0 : appCheckTokenResult.token;
  }
};
function _castAuth(auth) {
  return (0, import_util.getModularInstance)(auth);
}
var Subscription = class {
  constructor(auth) {
    this.auth = auth;
    this.observer = null;
    this.addObserver = (0, import_util.createSubscribe)(observer => this.observer = observer);
  }
  get next() {
    _assert(this.observer, this.auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    return this.observer.next.bind(this.observer);
  }
};
var externalJSProvider = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: ""
};
function _setExternalJSProvider(p) {
  externalJSProvider = p;
}
function _loadJS(url) {
  return externalJSProvider.loadJS(url);
}
function _recaptchaV2ScriptUrl() {
  return externalJSProvider.recaptchaV2Script;
}
function _recaptchaEnterpriseScriptUrl() {
  return externalJSProvider.recaptchaEnterpriseScript;
}
function _gapiScriptUrl() {
  return externalJSProvider.gapiScript;
}
function _generateCallbackName(prefix) {
  return `__${prefix}${Math.floor(Math.random() * 1e6)}`;
}
var _SOLVE_TIME_MS = 500;
var _EXPIRATION_TIME_MS = 6e4;
var _WIDGET_ID_START = 1e12;
var MockReCaptcha = class {
  constructor(auth) {
    this.auth = auth;
    this.counter = _WIDGET_ID_START;
    this._widgets = /* @__PURE__ */new Map();
  }
  render(container, parameters) {
    const id = this.counter;
    this._widgets.set(id, new MockWidget(container, this.auth.name, parameters || {}));
    this.counter++;
    return id;
  }
  reset(optWidgetId) {
    var _a;
    const id = optWidgetId || _WIDGET_ID_START;
    void ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.delete());
    this._widgets.delete(id);
  }
  getResponse(optWidgetId) {
    var _a;
    const id = optWidgetId || _WIDGET_ID_START;
    return ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.getResponse()) || "";
  }
  async execute(optWidgetId) {
    var _a;
    const id = optWidgetId || _WIDGET_ID_START;
    void ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.execute());
    return "";
  }
};
var MockGreCAPTCHATopLevel = class {
  constructor() {
    this.enterprise = new MockGreCAPTCHA();
  }
  ready(callback) {
    callback();
  }
  execute(_siteKey, _options) {
    return Promise.resolve("token");
  }
  render(_container, _parameters) {
    return "";
  }
};
var MockGreCAPTCHA = class {
  ready(callback) {
    callback();
  }
  execute(_siteKey, _options) {
    return Promise.resolve("token");
  }
  render(_container, _parameters) {
    return "";
  }
};
var MockWidget = class {
  constructor(containerOrId, appName, params) {
    this.params = params;
    this.timerId = null;
    this.deleted = false;
    this.responseToken = null;
    this.clickHandler = () => {
      this.execute();
    };
    const container = typeof containerOrId === "string" ? document.getElementById(containerOrId) : containerOrId;
    _assert(container, "argument-error", {
      appName
    });
    this.container = container;
    this.isVisible = this.params.size !== "invisible";
    if (this.isVisible) {
      this.execute();
    } else {
      this.container.addEventListener("click", this.clickHandler);
    }
  }
  getResponse() {
    this.checkIfDeleted();
    return this.responseToken;
  }
  delete() {
    this.checkIfDeleted();
    this.deleted = true;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    this.container.removeEventListener("click", this.clickHandler);
  }
  execute() {
    this.checkIfDeleted();
    if (this.timerId) {
      return;
    }
    this.timerId = window.setTimeout(() => {
      this.responseToken = generateRandomAlphaNumericString(50);
      const {
        callback,
        "expired-callback": expiredCallback
      } = this.params;
      if (callback) {
        try {
          callback(this.responseToken);
        } catch (e) {}
      }
      this.timerId = window.setTimeout(() => {
        this.timerId = null;
        this.responseToken = null;
        if (expiredCallback) {
          try {
            expiredCallback();
          } catch (e) {}
        }
        if (this.isVisible) {
          this.execute();
        }
      }, _EXPIRATION_TIME_MS);
    }, _SOLVE_TIME_MS);
  }
  checkIfDeleted() {
    if (this.deleted) {
      throw new Error("reCAPTCHA mock was already deleted!");
    }
  }
};
function generateRandomAlphaNumericString(len) {
  const chars = [];
  const allowedChars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < len; i++) {
    chars.push(allowedChars.charAt(Math.floor(Math.random() * allowedChars.length)));
  }
  return chars.join("");
}
var RECAPTCHA_ENTERPRISE_VERIFIER_TYPE = "recaptcha-enterprise";
var FAKE_TOKEN = "NO_RECAPTCHA";
var RecaptchaEnterpriseVerifier = class {
  /**
   *
   * @param authExtern - The corresponding Firebase {@link Auth} instance.
   *
   */
  constructor(authExtern) {
    this.type = RECAPTCHA_ENTERPRISE_VERIFIER_TYPE;
    this.auth = _castAuth(authExtern);
  }
  /**
   * Executes the verification process.
   *
   * @returns A Promise for a token that can be used to assert the validity of a request.
   */
  async verify(action = "verify", forceRefresh = false) {
    async function retrieveSiteKey(auth) {
      if (!forceRefresh) {
        if (auth.tenantId == null && auth._agentRecaptchaConfig != null) {
          return auth._agentRecaptchaConfig.siteKey;
        }
        if (auth.tenantId != null && auth._tenantRecaptchaConfigs[auth.tenantId] !== void 0) {
          return auth._tenantRecaptchaConfigs[auth.tenantId].siteKey;
        }
      }
      return new Promise(async (resolve, reject) => {
        getRecaptchaConfig(auth, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE"
          /* RecaptchaVersion.ENTERPRISE */
        }).then(response => {
          if (response.recaptchaKey === void 0) {
            reject(new Error("recaptcha Enterprise site key undefined"));
          } else {
            const config = new RecaptchaConfig(response);
            if (auth.tenantId == null) {
              auth._agentRecaptchaConfig = config;
            } else {
              auth._tenantRecaptchaConfigs[auth.tenantId] = config;
            }
            return resolve(config.siteKey);
          }
        }).catch(error => {
          reject(error);
        });
      });
    }
    function retrieveRecaptchaToken(siteKey, resolve, reject) {
      const grecaptcha = window.grecaptcha;
      if (isEnterprise(grecaptcha)) {
        grecaptcha.enterprise.ready(() => {
          grecaptcha.enterprise.execute(siteKey, {
            action
          }).then(token => {
            resolve(token);
          }).catch(() => {
            resolve(FAKE_TOKEN);
          });
        });
      } else {
        reject(Error("No reCAPTCHA enterprise script loaded."));
      }
    }
    if (this.auth.settings.appVerificationDisabledForTesting) {
      const mockRecaptcha = new MockGreCAPTCHATopLevel();
      return mockRecaptcha.execute("siteKey", {
        action: "verify"
      });
    }
    return new Promise((resolve, reject) => {
      retrieveSiteKey(this.auth).then(siteKey => {
        if (!forceRefresh && isEnterprise(window.grecaptcha)) {
          retrieveRecaptchaToken(siteKey, resolve, reject);
        } else {
          if (typeof window === "undefined") {
            reject(new Error("RecaptchaVerifier is only supported in browser"));
            return;
          }
          let url = _recaptchaEnterpriseScriptUrl();
          if (url.length !== 0) {
            url += siteKey;
          }
          _loadJS(url).then(() => {
            retrieveRecaptchaToken(siteKey, resolve, reject);
          }).catch(error => {
            reject(error);
          });
        }
      }).catch(error => {
        reject(error);
      });
    });
  }
};
async function injectRecaptchaFields(auth, request, action, isCaptchaResp = false, isFakeToken = false) {
  const verifier = new RecaptchaEnterpriseVerifier(auth);
  let captchaResponse;
  if (isFakeToken) {
    captchaResponse = FAKE_TOKEN;
  } else {
    try {
      captchaResponse = await verifier.verify(action);
    } catch (error) {
      captchaResponse = await verifier.verify(action, true);
    }
  }
  const newRequest = Object.assign({}, request);
  if (action === "mfaSmsEnrollment" || action === "mfaSmsSignIn") {
    if ("phoneEnrollmentInfo" in newRequest) {
      const phoneNumber = newRequest.phoneEnrollmentInfo.phoneNumber;
      const recaptchaToken = newRequest.phoneEnrollmentInfo.recaptchaToken;
      Object.assign(newRequest, {
        "phoneEnrollmentInfo": {
          phoneNumber,
          recaptchaToken,
          captchaResponse,
          "clientType": "CLIENT_TYPE_WEB",
          "recaptchaVersion": "RECAPTCHA_ENTERPRISE"
          /* RecaptchaVersion.ENTERPRISE */
        }
      });
    } else if ("phoneSignInInfo" in newRequest) {
      const recaptchaToken = newRequest.phoneSignInInfo.recaptchaToken;
      Object.assign(newRequest, {
        "phoneSignInInfo": {
          recaptchaToken,
          captchaResponse,
          "clientType": "CLIENT_TYPE_WEB",
          "recaptchaVersion": "RECAPTCHA_ENTERPRISE"
          /* RecaptchaVersion.ENTERPRISE */
        }
      });
    }
    return newRequest;
  }
  if (!isCaptchaResp) {
    Object.assign(newRequest, {
      captchaResponse
    });
  } else {
    Object.assign(newRequest, {
      "captchaResp": captchaResponse
    });
  }
  Object.assign(newRequest, {
    "clientType": "CLIENT_TYPE_WEB"
    /* RecaptchaClientType.WEB */
  });
  Object.assign(newRequest, {
    "recaptchaVersion": "RECAPTCHA_ENTERPRISE"
    /* RecaptchaVersion.ENTERPRISE */
  });
  return newRequest;
}
async function handleRecaptchaFlow(authInstance, request, actionName, actionMethod, recaptchaAuthProvider) {
  var _a, _b;
  if (recaptchaAuthProvider === "EMAIL_PASSWORD_PROVIDER") {
    if ((_a = authInstance._getRecaptchaConfig()) === null || _a === void 0 ? void 0 : _a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"
    /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */)) {
      const requestWithRecaptcha = await injectRecaptchaFields(authInstance, request, actionName, actionName === "getOobCode"
      /* RecaptchaActionName.GET_OOB_CODE */);
      return actionMethod(authInstance, requestWithRecaptcha);
    } else {
      return actionMethod(authInstance, request).catch(async error => {
        if (error.code === `auth/${"missing-recaptcha-token"}`) {
          console.log(`${actionName} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);
          const requestWithRecaptcha = await injectRecaptchaFields(authInstance, request, actionName, actionName === "getOobCode"
          /* RecaptchaActionName.GET_OOB_CODE */);
          return actionMethod(authInstance, requestWithRecaptcha);
        } else {
          return Promise.reject(error);
        }
      });
    }
  } else if (recaptchaAuthProvider === "PHONE_PROVIDER") {
    if ((_b = authInstance._getRecaptchaConfig()) === null || _b === void 0 ? void 0 : _b.isProviderEnabled("PHONE_PROVIDER"
    /* RecaptchaAuthProvider.PHONE_PROVIDER */)) {
      const requestWithRecaptcha = await injectRecaptchaFields(authInstance, request, actionName);
      return actionMethod(authInstance, requestWithRecaptcha).catch(async error => {
        var _a2;
        if (((_a2 = authInstance._getRecaptchaConfig()) === null || _a2 === void 0 ? void 0 : _a2.getProviderEnforcementState("PHONE_PROVIDER"
        /* RecaptchaAuthProvider.PHONE_PROVIDER */)) === "AUDIT") {
          if (error.code === `auth/${"missing-recaptcha-token"}` || error.code === `auth/${"invalid-app-credential"}`) {
            console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${actionName} flow.`);
            const requestWithRecaptchaFields = await injectRecaptchaFields(authInstance, request, actionName, false,
            // isCaptchaResp
            true
            // isFakeToken
            );
            return actionMethod(authInstance, requestWithRecaptchaFields);
          }
        }
        return Promise.reject(error);
      });
    } else {
      const requestWithRecaptchaFields = await injectRecaptchaFields(authInstance, request, actionName, false,
      // isCaptchaResp
      true
      // isFakeToken
      );
      return actionMethod(authInstance, requestWithRecaptchaFields);
    }
  } else {
    return Promise.reject(recaptchaAuthProvider + " provider is not supported.");
  }
}
async function _initializeRecaptchaConfig(auth) {
  const authInternal = _castAuth(auth);
  const response = await getRecaptchaConfig(authInternal, {
    clientType: "CLIENT_TYPE_WEB",
    version: "RECAPTCHA_ENTERPRISE"
    /* RecaptchaVersion.ENTERPRISE */
  });
  const config = new RecaptchaConfig(response);
  if (authInternal.tenantId == null) {
    authInternal._agentRecaptchaConfig = config;
  } else {
    authInternal._tenantRecaptchaConfigs[authInternal.tenantId] = config;
  }
  if (config.isAnyProviderEnabled()) {
    const verifier = new RecaptchaEnterpriseVerifier(authInternal);
    void verifier.verify();
  }
}
function initializeAuth(app, deps) {
  const provider = (0, import_app._getProvider)(app, "auth");
  if (provider.isInitialized()) {
    const auth2 = provider.getImmediate();
    const initialOptions = provider.getOptions();
    if ((0, import_util.deepEqual)(initialOptions, deps !== null && deps !== void 0 ? deps : {})) {
      return auth2;
    } else {
      _fail(auth2, "already-initialized"
      /* AuthErrorCode.ALREADY_INITIALIZED */);
    }
  }
  const auth = provider.initialize({
    options: deps
  });
  return auth;
}
function _initializeAuthInstance(auth, deps) {
  const persistence = (deps === null || deps === void 0 ? void 0 : deps.persistence) || [];
  const hierarchy = (Array.isArray(persistence) ? persistence : [persistence]).map(_getInstance);
  if (deps === null || deps === void 0 ? void 0 : deps.errorMap) {
    auth._updateErrorMap(deps.errorMap);
  }
  auth._initializeWithPersistence(hierarchy, deps === null || deps === void 0 ? void 0 : deps.popupRedirectResolver);
}
function connectAuthEmulator(auth, url, options) {
  const authInternal = _castAuth(auth);
  _assert(/^https?:\/\//.test(url), authInternal, "invalid-emulator-scheme"
  /* AuthErrorCode.INVALID_EMULATOR_SCHEME */);
  const disableWarnings = !!(options === null || options === void 0 ? void 0 : options.disableWarnings);
  const protocol = extractProtocol(url);
  const {
    host,
    port
  } = extractHostAndPort(url);
  const portStr = port === null ? "" : `:${port}`;
  const emulator = {
    url: `${protocol}//${host}${portStr}/`
  };
  const emulatorConfig = Object.freeze({
    host,
    port,
    protocol: protocol.replace(":", ""),
    options: Object.freeze({
      disableWarnings
    })
  });
  if (!authInternal._canInitEmulator) {
    _assert(authInternal.config.emulator && authInternal.emulatorConfig, authInternal, "emulator-config-failed"
    /* AuthErrorCode.EMULATOR_CONFIG_FAILED */);
    _assert((0, import_util.deepEqual)(emulator, authInternal.config.emulator) && (0, import_util.deepEqual)(emulatorConfig, authInternal.emulatorConfig), authInternal, "emulator-config-failed"
    /* AuthErrorCode.EMULATOR_CONFIG_FAILED */);
    return;
  }
  authInternal.config.emulator = emulator;
  authInternal.emulatorConfig = emulatorConfig;
  authInternal.settings.appVerificationDisabledForTesting = true;
  if (!disableWarnings) {
    emitEmulatorWarning();
  }
}
function extractProtocol(url) {
  const protocolEnd = url.indexOf(":");
  return protocolEnd < 0 ? "" : url.substr(0, protocolEnd + 1);
}
function extractHostAndPort(url) {
  const protocol = extractProtocol(url);
  const authority = /(\/\/)?([^?#/]+)/.exec(url.substr(protocol.length));
  if (!authority) {
    return {
      host: "",
      port: null
    };
  }
  const hostAndPort = authority[2].split("@").pop() || "";
  const bracketedIPv6 = /^(\[[^\]]+\])(:|$)/.exec(hostAndPort);
  if (bracketedIPv6) {
    const host = bracketedIPv6[1];
    return {
      host,
      port: parsePort(hostAndPort.substr(host.length + 1))
    };
  } else {
    const [host, port] = hostAndPort.split(":");
    return {
      host,
      port: parsePort(port)
    };
  }
}
function parsePort(portStr) {
  if (!portStr) {
    return null;
  }
  const port = Number(portStr);
  if (isNaN(port)) {
    return null;
  }
  return port;
}
function emitEmulatorWarning() {
  function attachBanner() {
    const el = document.createElement("p");
    const sty = el.style;
    el.innerText = "Running in emulator mode. Do not use with production credentials.";
    sty.position = "fixed";
    sty.width = "100%";
    sty.backgroundColor = "#ffffff";
    sty.border = ".1em solid #000000";
    sty.color = "#b50000";
    sty.bottom = "0px";
    sty.left = "0px";
    sty.margin = "0px";
    sty.zIndex = "10000";
    sty.textAlign = "center";
    el.classList.add("firebase-emulator-warning");
    document.body.appendChild(el);
  }
  if (typeof console !== "undefined" && typeof console.info === "function") {
    console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
  }
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    if (document.readyState === "loading") {
      window.addEventListener("DOMContentLoaded", attachBanner);
    } else {
      attachBanner();
    }
  }
}
var AuthCredential = class {
  /** @internal */
  constructor(providerId, signInMethod) {
    this.providerId = providerId;
    this.signInMethod = signInMethod;
  }
  /**
   * Returns a JSON-serializable representation of this object.
   *
   * @returns a JSON-serializable representation of this object.
   */
  toJSON() {
    return debugFail("not implemented");
  }
  /** @internal */
  _getIdTokenResponse(_auth) {
    return debugFail("not implemented");
  }
  /** @internal */
  _linkToIdToken(_auth, _idToken) {
    return debugFail("not implemented");
  }
  /** @internal */
  _getReauthenticationResolver(_auth) {
    return debugFail("not implemented");
  }
};
async function resetPassword(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:resetPassword", _addTidIfNecessary(auth, request));
}
async function updateEmailPassword(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:update", request);
}
async function linkEmailPassword(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:signUp", request);
}
async function applyActionCode$1(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:update", _addTidIfNecessary(auth, request));
}
async function signInWithPassword(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPassword", _addTidIfNecessary(auth, request));
}
async function sendOobCode(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:sendOobCode", _addTidIfNecessary(auth, request));
}
async function sendEmailVerification$1(auth, request) {
  return sendOobCode(auth, request);
}
async function sendPasswordResetEmail$1(auth, request) {
  return sendOobCode(auth, request);
}
async function sendSignInLinkToEmail$1(auth, request) {
  return sendOobCode(auth, request);
}
async function verifyAndChangeEmail(auth, request) {
  return sendOobCode(auth, request);
}
async function signInWithEmailLink$1(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth, request));
}
async function signInWithEmailLinkForLinking(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth, request));
}
var EmailAuthCredential = class _EmailAuthCredential extends AuthCredential {
  /** @internal */
  constructor(_email, _password, signInMethod, _tenantId = null) {
    super("password", signInMethod);
    this._email = _email;
    this._password = _password;
    this._tenantId = _tenantId;
  }
  /** @internal */
  static _fromEmailAndPassword(email, password) {
    return new _EmailAuthCredential(email, password, "password"
    /* SignInMethod.EMAIL_PASSWORD */);
  }
  /** @internal */
  static _fromEmailAndCode(email, oobCode, tenantId = null) {
    return new _EmailAuthCredential(email, oobCode, "emailLink", tenantId);
  }
  /** {@inheritdoc AuthCredential.toJSON} */
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId
    };
  }
  /**
   * Static method to deserialize a JSON representation of an object into an {@link  AuthCredential}.
   *
   * @param json - Either `object` or the stringified representation of the object. When string is
   * provided, `JSON.parse` would be called first.
   *
   * @returns If the JSON input does not represent an {@link AuthCredential}, null is returned.
   */
  static fromJSON(json) {
    const obj = typeof json === "string" ? JSON.parse(json) : json;
    if ((obj === null || obj === void 0 ? void 0 : obj.email) && (obj === null || obj === void 0 ? void 0 : obj.password)) {
      if (obj.signInMethod === "password") {
        return this._fromEmailAndPassword(obj.email, obj.password);
      } else if (obj.signInMethod === "emailLink") {
        return this._fromEmailAndCode(obj.email, obj.password, obj.tenantId);
      }
    }
    return null;
  }
  /** @internal */
  async _getIdTokenResponse(auth) {
    switch (this.signInMethod) {
      case "password":
        const request = {
          returnSecureToken: true,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB"
          /* RecaptchaClientType.WEB */
        };
        return handleRecaptchaFlow(auth, request, "signInWithPassword", signInWithPassword, "EMAIL_PASSWORD_PROVIDER"
        /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */);
      case "emailLink":
        return signInWithEmailLink$1(auth, {
          email: this._email,
          oobCode: this._password
        });
      default:
        _fail(auth, "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */);
    }
  }
  /** @internal */
  async _linkToIdToken(auth, idToken) {
    switch (this.signInMethod) {
      case "password":
        const request = {
          idToken,
          returnSecureToken: true,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB"
          /* RecaptchaClientType.WEB */
        };
        return handleRecaptchaFlow(auth, request, "signUpPassword", linkEmailPassword, "EMAIL_PASSWORD_PROVIDER"
        /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */);
      case "emailLink":
        return signInWithEmailLinkForLinking(auth, {
          idToken,
          email: this._email,
          oobCode: this._password
        });
      default:
        _fail(auth, "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */);
    }
  }
  /** @internal */
  _getReauthenticationResolver(auth) {
    return this._getIdTokenResponse(auth);
  }
};
async function signInWithIdp(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithIdp", _addTidIfNecessary(auth, request));
}
var IDP_REQUEST_URI$1 = "http://localhost";
var OAuthCredential = class _OAuthCredential extends AuthCredential {
  constructor() {
    super(...arguments);
    this.pendingToken = null;
  }
  /** @internal */
  static _fromParams(params) {
    const cred = new _OAuthCredential(params.providerId, params.signInMethod);
    if (params.idToken || params.accessToken) {
      if (params.idToken) {
        cred.idToken = params.idToken;
      }
      if (params.accessToken) {
        cred.accessToken = params.accessToken;
      }
      if (params.nonce && !params.pendingToken) {
        cred.nonce = params.nonce;
      }
      if (params.pendingToken) {
        cred.pendingToken = params.pendingToken;
      }
    } else if (params.oauthToken && params.oauthTokenSecret) {
      cred.accessToken = params.oauthToken;
      cred.secret = params.oauthTokenSecret;
    } else {
      _fail("argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */);
    }
    return cred;
  }
  /** {@inheritdoc AuthCredential.toJSON}  */
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod
    };
  }
  /**
   * Static method to deserialize a JSON representation of an object into an
   * {@link  AuthCredential}.
   *
   * @param json - Input can be either Object or the stringified representation of the object.
   * When string is provided, JSON.parse would be called first.
   *
   * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
   */
  static fromJSON(json) {
    const obj = typeof json === "string" ? JSON.parse(json) : json;
    const {
        providerId,
        signInMethod
      } = obj,
      rest = (0, import_tslib.__rest)(obj, ["providerId", "signInMethod"]);
    if (!providerId || !signInMethod) {
      return null;
    }
    const cred = new _OAuthCredential(providerId, signInMethod);
    cred.idToken = rest.idToken || void 0;
    cred.accessToken = rest.accessToken || void 0;
    cred.secret = rest.secret;
    cred.nonce = rest.nonce;
    cred.pendingToken = rest.pendingToken || null;
    return cred;
  }
  /** @internal */
  _getIdTokenResponse(auth) {
    const request = this.buildRequest();
    return signInWithIdp(auth, request);
  }
  /** @internal */
  _linkToIdToken(auth, idToken) {
    const request = this.buildRequest();
    request.idToken = idToken;
    return signInWithIdp(auth, request);
  }
  /** @internal */
  _getReauthenticationResolver(auth) {
    const request = this.buildRequest();
    request.autoCreate = false;
    return signInWithIdp(auth, request);
  }
  buildRequest() {
    const request = {
      requestUri: IDP_REQUEST_URI$1,
      returnSecureToken: true
    };
    if (this.pendingToken) {
      request.pendingToken = this.pendingToken;
    } else {
      const postBody = {};
      if (this.idToken) {
        postBody["id_token"] = this.idToken;
      }
      if (this.accessToken) {
        postBody["access_token"] = this.accessToken;
      }
      if (this.secret) {
        postBody["oauth_token_secret"] = this.secret;
      }
      postBody["providerId"] = this.providerId;
      if (this.nonce && !this.pendingToken) {
        postBody["nonce"] = this.nonce;
      }
      request.postBody = (0, import_util.querystring)(postBody);
    }
    return request;
  }
};
async function sendPhoneVerificationCode(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:sendVerificationCode", _addTidIfNecessary(auth, request));
}
async function signInWithPhoneNumber$1(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, request));
}
async function linkWithPhoneNumber$1(auth, request) {
  const response = await _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, request));
  if (response.temporaryProof) {
    throw _makeTaggedError(auth, "account-exists-with-different-credential", response);
  }
  return response;
}
var VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_ = {
  ["USER_NOT_FOUND"
  /* ServerError.USER_NOT_FOUND */]: "user-not-found"
  /* AuthErrorCode.USER_DELETED */
};
async function verifyPhoneNumberForExisting(auth, request) {
  const apiRequest = Object.assign(Object.assign({}, request), {
    operation: "REAUTH"
  });
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, apiRequest), VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_);
}
var PhoneAuthCredential = class _PhoneAuthCredential extends AuthCredential {
  constructor(params) {
    super("phone", "phone"
    /* SignInMethod.PHONE */);
    this.params = params;
  }
  /** @internal */
  static _fromVerification(verificationId, verificationCode) {
    return new _PhoneAuthCredential({
      verificationId,
      verificationCode
    });
  }
  /** @internal */
  static _fromTokenResponse(phoneNumber, temporaryProof) {
    return new _PhoneAuthCredential({
      phoneNumber,
      temporaryProof
    });
  }
  /** @internal */
  _getIdTokenResponse(auth) {
    return signInWithPhoneNumber$1(auth, this._makeVerificationRequest());
  }
  /** @internal */
  _linkToIdToken(auth, idToken) {
    return linkWithPhoneNumber$1(auth, Object.assign({
      idToken
    }, this._makeVerificationRequest()));
  }
  /** @internal */
  _getReauthenticationResolver(auth) {
    return verifyPhoneNumberForExisting(auth, this._makeVerificationRequest());
  }
  /** @internal */
  _makeVerificationRequest() {
    const {
      temporaryProof,
      phoneNumber,
      verificationId,
      verificationCode
    } = this.params;
    if (temporaryProof && phoneNumber) {
      return {
        temporaryProof,
        phoneNumber
      };
    }
    return {
      sessionInfo: verificationId,
      code: verificationCode
    };
  }
  /** {@inheritdoc AuthCredential.toJSON} */
  toJSON() {
    const obj = {
      providerId: this.providerId
    };
    if (this.params.phoneNumber) {
      obj.phoneNumber = this.params.phoneNumber;
    }
    if (this.params.temporaryProof) {
      obj.temporaryProof = this.params.temporaryProof;
    }
    if (this.params.verificationCode) {
      obj.verificationCode = this.params.verificationCode;
    }
    if (this.params.verificationId) {
      obj.verificationId = this.params.verificationId;
    }
    return obj;
  }
  /** Generates a phone credential based on a plain object or a JSON string. */
  static fromJSON(json) {
    if (typeof json === "string") {
      json = JSON.parse(json);
    }
    const {
      verificationId,
      verificationCode,
      phoneNumber,
      temporaryProof
    } = json;
    if (!verificationCode && !verificationId && !phoneNumber && !temporaryProof) {
      return null;
    }
    return new _PhoneAuthCredential({
      verificationId,
      verificationCode,
      phoneNumber,
      temporaryProof
    });
  }
};
function parseMode(mode) {
  switch (mode) {
    case "recoverEmail":
      return "RECOVER_EMAIL";
    case "resetPassword":
      return "PASSWORD_RESET";
    case "signIn":
      return "EMAIL_SIGNIN";
    case "verifyEmail":
      return "VERIFY_EMAIL";
    case "verifyAndChangeEmail":
      return "VERIFY_AND_CHANGE_EMAIL";
    case "revertSecondFactorAddition":
      return "REVERT_SECOND_FACTOR_ADDITION";
    default:
      return null;
  }
}
function parseDeepLink(url) {
  const link = (0, import_util.querystringDecode)((0, import_util.extractQuerystring)(url))["link"];
  const doubleDeepLink = link ? (0, import_util.querystringDecode)((0, import_util.extractQuerystring)(link))["deep_link_id"] : null;
  const iOSDeepLink = (0, import_util.querystringDecode)((0, import_util.extractQuerystring)(url))["deep_link_id"];
  const iOSDoubleDeepLink = iOSDeepLink ? (0, import_util.querystringDecode)((0, import_util.extractQuerystring)(iOSDeepLink))["link"] : null;
  return iOSDoubleDeepLink || iOSDeepLink || doubleDeepLink || link || url;
}
var ActionCodeURL = class _ActionCodeURL {
  /**
   * @param actionLink - The link from which to extract the URL.
   * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
   *
   * @internal
   */
  constructor(actionLink) {
    var _a, _b, _c, _d, _e, _f;
    const searchParams = (0, import_util.querystringDecode)((0, import_util.extractQuerystring)(actionLink));
    const apiKey = (_a = searchParams["apiKey"
    /* QueryField.API_KEY */]) !== null && _a !== void 0 ? _a : null;
    const code = (_b = searchParams["oobCode"
    /* QueryField.CODE */]) !== null && _b !== void 0 ? _b : null;
    const operation = parseMode((_c = searchParams["mode"
    /* QueryField.MODE */]) !== null && _c !== void 0 ? _c : null);
    _assert(apiKey && code && operation, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */);
    this.apiKey = apiKey;
    this.operation = operation;
    this.code = code;
    this.continueUrl = (_d = searchParams["continueUrl"
    /* QueryField.CONTINUE_URL */]) !== null && _d !== void 0 ? _d : null;
    this.languageCode = (_e = searchParams["lang"
    /* QueryField.LANGUAGE_CODE */]) !== null && _e !== void 0 ? _e : null;
    this.tenantId = (_f = searchParams["tenantId"
    /* QueryField.TENANT_ID */]) !== null && _f !== void 0 ? _f : null;
  }
  /**
   * Parses the email action link string and returns an {@link ActionCodeURL} if the link is valid,
   * otherwise returns null.
   *
   * @param link  - The email action link string.
   * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
   *
   * @public
   */
  static parseLink(link) {
    const actionLink = parseDeepLink(link);
    try {
      return new _ActionCodeURL(actionLink);
    } catch (_a) {
      return null;
    }
  }
};
function parseActionCodeURL(link) {
  return ActionCodeURL.parseLink(link);
}
var EmailAuthProvider = class _EmailAuthProvider {
  constructor() {
    this.providerId = _EmailAuthProvider.PROVIDER_ID;
  }
  /**
   * Initialize an {@link AuthCredential} using an email and password.
   *
   * @example
   * ```javascript
   * const authCredential = EmailAuthProvider.credential(email, password);
   * const userCredential = await signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * ```javascript
   * const userCredential = await signInWithEmailAndPassword(auth, email, password);
   * ```
   *
   * @param email - Email address.
   * @param password - User account password.
   * @returns The auth provider credential.
   */
  static credential(email, password) {
    return EmailAuthCredential._fromEmailAndPassword(email, password);
  }
  /**
   * Initialize an {@link AuthCredential} using an email and an email link after a sign in with
   * email link operation.
   *
   * @example
   * ```javascript
   * const authCredential = EmailAuthProvider.credentialWithLink(auth, email, emailLink);
   * const userCredential = await signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * ```javascript
   * await sendSignInLinkToEmail(auth, email);
   * // Obtain emailLink from user.
   * const userCredential = await signInWithEmailLink(auth, email, emailLink);
   * ```
   *
   * @param auth - The {@link Auth} instance used to verify the link.
   * @param email - Email address.
   * @param emailLink - Sign-in email link.
   * @returns - The auth provider credential.
   */
  static credentialWithLink(email, emailLink) {
    const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
    _assert(actionCodeUrl, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */);
    return EmailAuthCredential._fromEmailAndCode(email, actionCodeUrl.code, actionCodeUrl.tenantId);
  }
};
EmailAuthProvider.PROVIDER_ID = "password";
EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
var FederatedAuthProvider = class {
  /**
   * Constructor for generic OAuth providers.
   *
   * @param providerId - Provider for which credentials should be generated.
   */
  constructor(providerId) {
    this.providerId = providerId;
    this.defaultLanguageCode = null;
    this.customParameters = {};
  }
  /**
   * Set the language gode.
   *
   * @param languageCode - language code
   */
  setDefaultLanguage(languageCode) {
    this.defaultLanguageCode = languageCode;
  }
  /**
   * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
   * operations.
   *
   * @remarks
   * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
   * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
   *
   * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
   */
  setCustomParameters(customOAuthParameters) {
    this.customParameters = customOAuthParameters;
    return this;
  }
  /**
   * Retrieve the current list of {@link CustomParameters}.
   */
  getCustomParameters() {
    return this.customParameters;
  }
};
var BaseOAuthProvider = class extends FederatedAuthProvider {
  constructor() {
    super(...arguments);
    this.scopes = [];
  }
  /**
   * Add an OAuth scope to the credential.
   *
   * @param scope - Provider OAuth scope to add.
   */
  addScope(scope) {
    if (!this.scopes.includes(scope)) {
      this.scopes.push(scope);
    }
    return this;
  }
  /**
   * Retrieve the current list of OAuth scopes.
   */
  getScopes() {
    return [...this.scopes];
  }
};
var OAuthProvider = class _OAuthProvider extends BaseOAuthProvider {
  /**
   * Creates an {@link OAuthCredential} from a JSON string or a plain object.
   * @param json - A plain object or a JSON string
   */
  static credentialFromJSON(json) {
    const obj = typeof json === "string" ? JSON.parse(json) : json;
    _assert("providerId" in obj && "signInMethod" in obj, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */);
    return OAuthCredential._fromParams(obj);
  }
  /**
   * Creates a {@link OAuthCredential} from a generic OAuth provider's access token or ID token.
   *
   * @remarks
   * The raw nonce is required when an ID token with a nonce field is provided. The SHA-256 hash of
   * the raw nonce must match the nonce field in the ID token.
   *
   * @example
   * ```javascript
   * // `googleUser` from the onsuccess Google Sign In callback.
   * // Initialize a generate OAuth provider with a `google.com` providerId.
   * const provider = new OAuthProvider('google.com');
   * const credential = provider.credential({
   *   idToken: googleUser.getAuthResponse().id_token,
   * });
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param params - Either the options object containing the ID token, access token and raw nonce
   * or the ID token string.
   */
  credential(params) {
    return this._credential(Object.assign(Object.assign({}, params), {
      nonce: params.rawNonce
    }));
  }
  /** An internal credential method that accepts more permissive options */
  _credential(params) {
    _assert(params.idToken || params.accessToken, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */);
    return OAuthCredential._fromParams(Object.assign(Object.assign({}, params), {
      providerId: this.providerId,
      signInMethod: this.providerId
    }));
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(userCredential) {
    return _OAuthProvider.oauthCredentialFromTaggedObject(userCredential);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(error) {
    return _OAuthProvider.oauthCredentialFromTaggedObject(error.customData || {});
  }
  static oauthCredentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse) {
      return null;
    }
    const {
      oauthIdToken,
      oauthAccessToken,
      oauthTokenSecret,
      pendingToken,
      nonce,
      providerId
    } = tokenResponse;
    if (!oauthAccessToken && !oauthTokenSecret && !oauthIdToken && !pendingToken) {
      return null;
    }
    if (!providerId) {
      return null;
    }
    try {
      return new _OAuthProvider(providerId)._credential({
        idToken: oauthIdToken,
        accessToken: oauthAccessToken,
        nonce,
        pendingToken
      });
    } catch (e) {
      return null;
    }
  }
};
var FacebookAuthProvider = class _FacebookAuthProvider extends BaseOAuthProvider {
  constructor() {
    super("facebook.com"
    /* ProviderId.FACEBOOK */);
  }
  /**
   * Creates a credential for Facebook.
   *
   * @example
   * ```javascript
   * // `event` from the Facebook auth.authResponseChange callback.
   * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param accessToken - Facebook access token.
   */
  static credential(accessToken) {
    return OAuthCredential._fromParams({
      providerId: _FacebookAuthProvider.PROVIDER_ID,
      signInMethod: _FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,
      accessToken
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(userCredential) {
    return _FacebookAuthProvider.credentialFromTaggedObject(userCredential);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(error) {
    return _FacebookAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
      return null;
    }
    if (!tokenResponse.oauthAccessToken) {
      return null;
    }
    try {
      return _FacebookAuthProvider.credential(tokenResponse.oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
};
FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
FacebookAuthProvider.PROVIDER_ID = "facebook.com";
var GoogleAuthProvider = class _GoogleAuthProvider extends BaseOAuthProvider {
  constructor() {
    super("google.com"
    /* ProviderId.GOOGLE */);
    this.addScope("profile");
  }
  /**
   * Creates a credential for Google. At least one of ID token and access token is required.
   *
   * @example
   * ```javascript
   * // \`googleUser\` from the onsuccess Google Sign In callback.
   * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param idToken - Google ID token.
   * @param accessToken - Google access token.
   */
  static credential(idToken, accessToken) {
    return OAuthCredential._fromParams({
      providerId: _GoogleAuthProvider.PROVIDER_ID,
      signInMethod: _GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,
      idToken,
      accessToken
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(userCredential) {
    return _GoogleAuthProvider.credentialFromTaggedObject(userCredential);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(error) {
    return _GoogleAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse) {
      return null;
    }
    const {
      oauthIdToken,
      oauthAccessToken
    } = tokenResponse;
    if (!oauthIdToken && !oauthAccessToken) {
      return null;
    }
    try {
      return _GoogleAuthProvider.credential(oauthIdToken, oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
};
GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD = "google.com";
GoogleAuthProvider.PROVIDER_ID = "google.com";
var GithubAuthProvider = class _GithubAuthProvider extends BaseOAuthProvider {
  constructor() {
    super("github.com"
    /* ProviderId.GITHUB */);
  }
  /**
   * Creates a credential for GitHub.
   *
   * @param accessToken - GitHub access token.
   */
  static credential(accessToken) {
    return OAuthCredential._fromParams({
      providerId: _GithubAuthProvider.PROVIDER_ID,
      signInMethod: _GithubAuthProvider.GITHUB_SIGN_IN_METHOD,
      accessToken
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(userCredential) {
    return _GithubAuthProvider.credentialFromTaggedObject(userCredential);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(error) {
    return _GithubAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
      return null;
    }
    if (!tokenResponse.oauthAccessToken) {
      return null;
    }
    try {
      return _GithubAuthProvider.credential(tokenResponse.oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
};
GithubAuthProvider.GITHUB_SIGN_IN_METHOD = "github.com";
GithubAuthProvider.PROVIDER_ID = "github.com";
var IDP_REQUEST_URI = "http://localhost";
var SAMLAuthCredential = class _SAMLAuthCredential extends AuthCredential {
  /** @internal */
  constructor(providerId, pendingToken) {
    super(providerId, providerId);
    this.pendingToken = pendingToken;
  }
  /** @internal */
  _getIdTokenResponse(auth) {
    const request = this.buildRequest();
    return signInWithIdp(auth, request);
  }
  /** @internal */
  _linkToIdToken(auth, idToken) {
    const request = this.buildRequest();
    request.idToken = idToken;
    return signInWithIdp(auth, request);
  }
  /** @internal */
  _getReauthenticationResolver(auth) {
    const request = this.buildRequest();
    request.autoCreate = false;
    return signInWithIdp(auth, request);
  }
  /** {@inheritdoc AuthCredential.toJSON}  */
  toJSON() {
    return {
      signInMethod: this.signInMethod,
      providerId: this.providerId,
      pendingToken: this.pendingToken
    };
  }
  /**
   * Static method to deserialize a JSON representation of an object into an
   * {@link  AuthCredential}.
   *
   * @param json - Input can be either Object or the stringified representation of the object.
   * When string is provided, JSON.parse would be called first.
   *
   * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
   */
  static fromJSON(json) {
    const obj = typeof json === "string" ? JSON.parse(json) : json;
    const {
      providerId,
      signInMethod,
      pendingToken
    } = obj;
    if (!providerId || !signInMethod || !pendingToken || providerId !== signInMethod) {
      return null;
    }
    return new _SAMLAuthCredential(providerId, pendingToken);
  }
  /**
   * Helper static method to avoid exposing the constructor to end users.
   *
   * @internal
   */
  static _create(providerId, pendingToken) {
    return new _SAMLAuthCredential(providerId, pendingToken);
  }
  buildRequest() {
    return {
      requestUri: IDP_REQUEST_URI,
      returnSecureToken: true,
      pendingToken: this.pendingToken
    };
  }
};
var SAML_PROVIDER_PREFIX = "saml.";
var SAMLAuthProvider = class _SAMLAuthProvider extends FederatedAuthProvider {
  /**
   * Constructor. The providerId must start with "saml."
   * @param providerId - SAML provider ID.
   */
  constructor(providerId) {
    _assert(providerId.startsWith(SAML_PROVIDER_PREFIX), "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */);
    super(providerId);
  }
  /**
   * Generates an {@link AuthCredential} from a {@link UserCredential} after a
   * successful SAML flow completes.
   *
   * @remarks
   *
   * For example, to get an {@link AuthCredential}, you could write the
   * following code:
   *
   * ```js
   * const userCredential = await signInWithPopup(auth, samlProvider);
   * const credential = SAMLAuthProvider.credentialFromResult(userCredential);
   * ```
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(userCredential) {
    return _SAMLAuthProvider.samlCredentialFromTaggedObject(userCredential);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(error) {
    return _SAMLAuthProvider.samlCredentialFromTaggedObject(error.customData || {});
  }
  /**
   * Creates an {@link AuthCredential} from a JSON string or a plain object.
   * @param json - A plain object or a JSON string
   */
  static credentialFromJSON(json) {
    const credential = SAMLAuthCredential.fromJSON(json);
    _assert(credential, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */);
    return credential;
  }
  static samlCredentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse) {
      return null;
    }
    const {
      pendingToken,
      providerId
    } = tokenResponse;
    if (!pendingToken || !providerId) {
      return null;
    }
    try {
      return SAMLAuthCredential._create(providerId, pendingToken);
    } catch (e) {
      return null;
    }
  }
};
var TwitterAuthProvider = class _TwitterAuthProvider extends BaseOAuthProvider {
  constructor() {
    super("twitter.com"
    /* ProviderId.TWITTER */);
  }
  /**
   * Creates a credential for Twitter.
   *
   * @param token - Twitter access token.
   * @param secret - Twitter secret.
   */
  static credential(token, secret) {
    return OAuthCredential._fromParams({
      providerId: _TwitterAuthProvider.PROVIDER_ID,
      signInMethod: _TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,
      oauthToken: token,
      oauthTokenSecret: secret
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(userCredential) {
    return _TwitterAuthProvider.credentialFromTaggedObject(userCredential);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(error) {
    return _TwitterAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse) {
      return null;
    }
    const {
      oauthAccessToken,
      oauthTokenSecret
    } = tokenResponse;
    if (!oauthAccessToken || !oauthTokenSecret) {
      return null;
    }
    try {
      return _TwitterAuthProvider.credential(oauthAccessToken, oauthTokenSecret);
    } catch (_a) {
      return null;
    }
  }
};
TwitterAuthProvider.TWITTER_SIGN_IN_METHOD = "twitter.com";
TwitterAuthProvider.PROVIDER_ID = "twitter.com";
async function signUp(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signUp", _addTidIfNecessary(auth, request));
}
var UserCredentialImpl = class _UserCredentialImpl {
  constructor(params) {
    this.user = params.user;
    this.providerId = params.providerId;
    this._tokenResponse = params._tokenResponse;
    this.operationType = params.operationType;
  }
  static async _fromIdTokenResponse(auth, operationType, idTokenResponse, isAnonymous = false) {
    const user = await UserImpl._fromIdTokenResponse(auth, idTokenResponse, isAnonymous);
    const providerId = providerIdForResponse(idTokenResponse);
    const userCred = new _UserCredentialImpl({
      user,
      providerId,
      _tokenResponse: idTokenResponse,
      operationType
    });
    return userCred;
  }
  static async _forOperation(user, operationType, response) {
    await user._updateTokensIfNecessary(response, /* reload */
    true);
    const providerId = providerIdForResponse(response);
    return new _UserCredentialImpl({
      user,
      providerId,
      _tokenResponse: response,
      operationType
    });
  }
};
function providerIdForResponse(response) {
  if (response.providerId) {
    return response.providerId;
  }
  if ("phoneNumber" in response) {
    return "phone";
  }
  return null;
}
async function signInAnonymously(auth) {
  var _a;
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
  const authInternal = _castAuth(auth);
  await authInternal._initializationPromise;
  if ((_a = authInternal.currentUser) === null || _a === void 0 ? void 0 : _a.isAnonymous) {
    return new UserCredentialImpl({
      user: authInternal.currentUser,
      providerId: null,
      operationType: "signIn"
      /* OperationType.SIGN_IN */
    });
  }
  const response = await signUp(authInternal, {
    returnSecureToken: true
  });
  const userCredential = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response, true);
  await authInternal._updateCurrentUser(userCredential.user);
  return userCredential;
}
var MultiFactorError = class _MultiFactorError extends import_util.FirebaseError {
  constructor(auth, error, operationType, user) {
    var _a;
    super(error.code, error.message);
    this.operationType = operationType;
    this.user = user;
    Object.setPrototypeOf(this, _MultiFactorError.prototype);
    this.customData = {
      appName: auth.name,
      tenantId: (_a = auth.tenantId) !== null && _a !== void 0 ? _a : void 0,
      _serverResponse: error.customData._serverResponse,
      operationType
    };
  }
  static _fromErrorAndOperation(auth, error, operationType, user) {
    return new _MultiFactorError(auth, error, operationType, user);
  }
};
function _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user) {
  const idTokenProvider = operationType === "reauthenticate" ? credential._getReauthenticationResolver(auth) : credential._getIdTokenResponse(auth);
  return idTokenProvider.catch(error => {
    if (error.code === `auth/${"multi-factor-auth-required"}`) {
      throw MultiFactorError._fromErrorAndOperation(auth, error, operationType, user);
    }
    throw error;
  });
}
function providerDataAsNames(providerData) {
  return new Set(providerData.map(({
    providerId
  }) => providerId).filter(pid => !!pid));
}
async function unlink(user, providerId) {
  const userInternal = (0, import_util.getModularInstance)(user);
  await _assertLinkedStatus(true, userInternal, providerId);
  const {
    providerUserInfo
  } = await deleteLinkedAccounts(userInternal.auth, {
    idToken: await userInternal.getIdToken(),
    deleteProvider: [providerId]
  });
  const providersLeft = providerDataAsNames(providerUserInfo || []);
  userInternal.providerData = userInternal.providerData.filter(pd => providersLeft.has(pd.providerId));
  if (!providersLeft.has("phone"
  /* ProviderId.PHONE */)) {
    userInternal.phoneNumber = null;
  }
  await userInternal.auth._persistUserIfCurrent(userInternal);
  return userInternal;
}
async function _link$1(user, credential, bypassAuthState = false) {
  const response = await _logoutIfInvalidated(user, credential._linkToIdToken(user.auth, await user.getIdToken()), bypassAuthState);
  return UserCredentialImpl._forOperation(user, "link", response);
}
async function _assertLinkedStatus(expected, user, provider) {
  await _reloadWithoutSaving(user);
  const providerIds = providerDataAsNames(user.providerData);
  const code = expected === false ? "provider-already-linked" : "no-such-provider";
  _assert(providerIds.has(provider) === expected, user.auth, code);
}
async function _reauthenticate(user, credential, bypassAuthState = false) {
  const {
    auth
  } = user;
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
  const operationType = "reauthenticate";
  try {
    const response = await _logoutIfInvalidated(user, _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user), bypassAuthState);
    _assert(response.idToken, auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    const parsed = _parseToken(response.idToken);
    _assert(parsed, auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    const {
      sub: localId
    } = parsed;
    _assert(user.uid === localId, auth, "user-mismatch"
    /* AuthErrorCode.USER_MISMATCH */);
    return UserCredentialImpl._forOperation(user, operationType, response);
  } catch (e) {
    if ((e === null || e === void 0 ? void 0 : e.code) === `auth/${"user-not-found"}`) {
      _fail(auth, "user-mismatch"
      /* AuthErrorCode.USER_MISMATCH */);
    }
    throw e;
  }
}
async function _signInWithCredential(auth, credential, bypassAuthState = false) {
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
  const operationType = "signIn";
  const response = await _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential);
  const userCredential = await UserCredentialImpl._fromIdTokenResponse(auth, operationType, response);
  if (!bypassAuthState) {
    await auth._updateCurrentUser(userCredential.user);
  }
  return userCredential;
}
async function signInWithCredential(auth, credential) {
  return _signInWithCredential(_castAuth(auth), credential);
}
async function linkWithCredential(user, credential) {
  const userInternal = (0, import_util.getModularInstance)(user);
  await _assertLinkedStatus(false, userInternal, credential.providerId);
  return _link$1(userInternal, credential);
}
async function reauthenticateWithCredential(user, credential) {
  return _reauthenticate((0, import_util.getModularInstance)(user), credential);
}
async function signInWithCustomToken$1(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithCustomToken", _addTidIfNecessary(auth, request));
}
async function signInWithCustomToken(auth, customToken) {
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
  const authInternal = _castAuth(auth);
  const response = await signInWithCustomToken$1(authInternal, {
    token: customToken,
    returnSecureToken: true
  });
  const cred = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response);
  await authInternal._updateCurrentUser(cred.user);
  return cred;
}
var MultiFactorInfoImpl = class {
  constructor(factorId, response) {
    this.factorId = factorId;
    this.uid = response.mfaEnrollmentId;
    this.enrollmentTime = new Date(response.enrolledAt).toUTCString();
    this.displayName = response.displayName;
  }
  static _fromServerResponse(auth, enrollment) {
    if ("phoneInfo" in enrollment) {
      return PhoneMultiFactorInfoImpl._fromServerResponse(auth, enrollment);
    } else if ("totpInfo" in enrollment) {
      return TotpMultiFactorInfoImpl._fromServerResponse(auth, enrollment);
    }
    return _fail(auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
  }
};
var PhoneMultiFactorInfoImpl = class _PhoneMultiFactorInfoImpl extends MultiFactorInfoImpl {
  constructor(response) {
    super("phone", response);
    this.phoneNumber = response.phoneInfo;
  }
  static _fromServerResponse(_auth, enrollment) {
    return new _PhoneMultiFactorInfoImpl(enrollment);
  }
};
var TotpMultiFactorInfoImpl = class _TotpMultiFactorInfoImpl extends MultiFactorInfoImpl {
  constructor(response) {
    super("totp", response);
  }
  static _fromServerResponse(_auth, enrollment) {
    return new _TotpMultiFactorInfoImpl(enrollment);
  }
};
function _setActionCodeSettingsOnRequest(auth, request, actionCodeSettings) {
  var _a;
  _assert(((_a = actionCodeSettings.url) === null || _a === void 0 ? void 0 : _a.length) > 0, auth, "invalid-continue-uri"
  /* AuthErrorCode.INVALID_CONTINUE_URI */);
  _assert(typeof actionCodeSettings.dynamicLinkDomain === "undefined" || actionCodeSettings.dynamicLinkDomain.length > 0, auth, "invalid-dynamic-link-domain"
  /* AuthErrorCode.INVALID_DYNAMIC_LINK_DOMAIN */);
  _assert(typeof actionCodeSettings.linkDomain === "undefined" || actionCodeSettings.linkDomain.length > 0, auth, "invalid-hosting-link-domain"
  /* AuthErrorCode.INVALID_HOSTING_LINK_DOMAIN */);
  request.continueUrl = actionCodeSettings.url;
  request.dynamicLinkDomain = actionCodeSettings.dynamicLinkDomain;
  request.linkDomain = actionCodeSettings.linkDomain;
  request.canHandleCodeInApp = actionCodeSettings.handleCodeInApp;
  if (actionCodeSettings.iOS) {
    _assert(actionCodeSettings.iOS.bundleId.length > 0, auth, "missing-ios-bundle-id"
    /* AuthErrorCode.MISSING_IOS_BUNDLE_ID */);
    request.iOSBundleId = actionCodeSettings.iOS.bundleId;
  }
  if (actionCodeSettings.android) {
    _assert(actionCodeSettings.android.packageName.length > 0, auth, "missing-android-pkg-name"
    /* AuthErrorCode.MISSING_ANDROID_PACKAGE_NAME */);
    request.androidInstallApp = actionCodeSettings.android.installApp;
    request.androidMinimumVersionCode = actionCodeSettings.android.minimumVersion;
    request.androidPackageName = actionCodeSettings.android.packageName;
  }
}
async function recachePasswordPolicy(auth) {
  const authInternal = _castAuth(auth);
  if (authInternal._getPasswordPolicyInternal()) {
    await authInternal._updatePasswordPolicy();
  }
}
async function sendPasswordResetEmail(auth, email, actionCodeSettings) {
  const authInternal = _castAuth(auth);
  const request = {
    requestType: "PASSWORD_RESET",
    email,
    clientType: "CLIENT_TYPE_WEB"
    /* RecaptchaClientType.WEB */
  };
  if (actionCodeSettings) {
    _setActionCodeSettingsOnRequest(authInternal, request, actionCodeSettings);
  }
  await handleRecaptchaFlow(authInternal, request, "getOobCode", sendPasswordResetEmail$1, "EMAIL_PASSWORD_PROVIDER"
  /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */);
}
async function confirmPasswordReset(auth, oobCode, newPassword) {
  await resetPassword((0, import_util.getModularInstance)(auth), {
    oobCode,
    newPassword
  }).catch(async error => {
    if (error.code === `auth/${"password-does-not-meet-requirements"}`) {
      void recachePasswordPolicy(auth);
    }
    throw error;
  });
}
async function applyActionCode(auth, oobCode) {
  await applyActionCode$1((0, import_util.getModularInstance)(auth), {
    oobCode
  });
}
async function checkActionCode(auth, oobCode) {
  const authModular = (0, import_util.getModularInstance)(auth);
  const response = await resetPassword(authModular, {
    oobCode
  });
  const operation = response.requestType;
  _assert(operation, authModular, "internal-error"
  /* AuthErrorCode.INTERNAL_ERROR */);
  switch (operation) {
    case "EMAIL_SIGNIN":
      break;
    case "VERIFY_AND_CHANGE_EMAIL":
      _assert(response.newEmail, authModular, "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */);
      break;
    case "REVERT_SECOND_FACTOR_ADDITION":
      _assert(response.mfaInfo, authModular, "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */);
    // fall through
    default:
      _assert(response.email, authModular, "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */);
  }
  let multiFactorInfo = null;
  if (response.mfaInfo) {
    multiFactorInfo = MultiFactorInfoImpl._fromServerResponse(_castAuth(authModular), response.mfaInfo);
  }
  return {
    data: {
      email: (response.requestType === "VERIFY_AND_CHANGE_EMAIL" ? response.newEmail : response.email) || null,
      previousEmail: (response.requestType === "VERIFY_AND_CHANGE_EMAIL" ? response.email : response.newEmail) || null,
      multiFactorInfo
    },
    operation
  };
}
async function verifyPasswordResetCode(auth, code) {
  const {
    data
  } = await checkActionCode((0, import_util.getModularInstance)(auth), code);
  return data.email;
}
async function createUserWithEmailAndPassword(auth, email, password) {
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
  const authInternal = _castAuth(auth);
  const request = {
    returnSecureToken: true,
    email,
    password,
    clientType: "CLIENT_TYPE_WEB"
    /* RecaptchaClientType.WEB */
  };
  const signUpResponse = handleRecaptchaFlow(authInternal, request, "signUpPassword", signUp, "EMAIL_PASSWORD_PROVIDER"
  /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */);
  const response = await signUpResponse.catch(error => {
    if (error.code === `auth/${"password-does-not-meet-requirements"}`) {
      void recachePasswordPolicy(auth);
    }
    throw error;
  });
  const userCredential = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response);
  await authInternal._updateCurrentUser(userCredential.user);
  return userCredential;
}
function signInWithEmailAndPassword(auth, email, password) {
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
  return signInWithCredential((0, import_util.getModularInstance)(auth), EmailAuthProvider.credential(email, password)).catch(async error => {
    if (error.code === `auth/${"password-does-not-meet-requirements"}`) {
      void recachePasswordPolicy(auth);
    }
    throw error;
  });
}
async function sendSignInLinkToEmail(auth, email, actionCodeSettings) {
  const authInternal = _castAuth(auth);
  const request = {
    requestType: "EMAIL_SIGNIN",
    email,
    clientType: "CLIENT_TYPE_WEB"
    /* RecaptchaClientType.WEB */
  };
  function setActionCodeSettings(request2, actionCodeSettings2) {
    _assert(actionCodeSettings2.handleCodeInApp, authInternal, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */);
    if (actionCodeSettings2) {
      _setActionCodeSettingsOnRequest(authInternal, request2, actionCodeSettings2);
    }
  }
  setActionCodeSettings(request, actionCodeSettings);
  await handleRecaptchaFlow(authInternal, request, "getOobCode", sendSignInLinkToEmail$1, "EMAIL_PASSWORD_PROVIDER"
  /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */);
}
function isSignInWithEmailLink(auth, emailLink) {
  const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
  return (actionCodeUrl === null || actionCodeUrl === void 0 ? void 0 : actionCodeUrl.operation) === "EMAIL_SIGNIN";
}
async function signInWithEmailLink(auth, email, emailLink) {
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
  const authModular = (0, import_util.getModularInstance)(auth);
  const credential = EmailAuthProvider.credentialWithLink(email, emailLink || _getCurrentUrl());
  _assert(credential._tenantId === (authModular.tenantId || null), authModular, "tenant-id-mismatch"
  /* AuthErrorCode.TENANT_ID_MISMATCH */);
  return signInWithCredential(authModular, credential);
}
async function createAuthUri(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:createAuthUri", _addTidIfNecessary(auth, request));
}
async function fetchSignInMethodsForEmail(auth, email) {
  const continueUri = _isHttpOrHttps() ? _getCurrentUrl() : "http://localhost";
  const request = {
    identifier: email,
    continueUri
  };
  const {
    signinMethods
  } = await createAuthUri((0, import_util.getModularInstance)(auth), request);
  return signinMethods || [];
}
async function sendEmailVerification(user, actionCodeSettings) {
  const userInternal = (0, import_util.getModularInstance)(user);
  const idToken = await user.getIdToken();
  const request = {
    requestType: "VERIFY_EMAIL",
    idToken
  };
  if (actionCodeSettings) {
    _setActionCodeSettingsOnRequest(userInternal.auth, request, actionCodeSettings);
  }
  const {
    email
  } = await sendEmailVerification$1(userInternal.auth, request);
  if (email !== user.email) {
    await user.reload();
  }
}
async function verifyBeforeUpdateEmail(user, newEmail, actionCodeSettings) {
  const userInternal = (0, import_util.getModularInstance)(user);
  const idToken = await user.getIdToken();
  const request = {
    requestType: "VERIFY_AND_CHANGE_EMAIL",
    idToken,
    newEmail
  };
  if (actionCodeSettings) {
    _setActionCodeSettingsOnRequest(userInternal.auth, request, actionCodeSettings);
  }
  const {
    email
  } = await verifyAndChangeEmail(userInternal.auth, request);
  if (email !== user.email) {
    await user.reload();
  }
}
async function updateProfile$1(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:update", request);
}
async function updateProfile(user, {
  displayName,
  photoURL: photoUrl
}) {
  if (displayName === void 0 && photoUrl === void 0) {
    return;
  }
  const userInternal = (0, import_util.getModularInstance)(user);
  const idToken = await userInternal.getIdToken();
  const profileRequest = {
    idToken,
    displayName,
    photoUrl,
    returnSecureToken: true
  };
  const response = await _logoutIfInvalidated(userInternal, updateProfile$1(userInternal.auth, profileRequest));
  userInternal.displayName = response.displayName || null;
  userInternal.photoURL = response.photoUrl || null;
  const passwordProvider = userInternal.providerData.find(({
    providerId
  }) => providerId === "password"
  /* ProviderId.PASSWORD */);
  if (passwordProvider) {
    passwordProvider.displayName = userInternal.displayName;
    passwordProvider.photoURL = userInternal.photoURL;
  }
  await userInternal._updateTokensIfNecessary(response);
}
function updateEmail(user, newEmail) {
  const userInternal = (0, import_util.getModularInstance)(user);
  if ((0, import_app._isFirebaseServerApp)(userInternal.auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(userInternal.auth));
  }
  return updateEmailOrPassword(userInternal, newEmail, null);
}
function updatePassword(user, newPassword) {
  return updateEmailOrPassword((0, import_util.getModularInstance)(user), null, newPassword);
}
async function updateEmailOrPassword(user, email, password) {
  const {
    auth
  } = user;
  const idToken = await user.getIdToken();
  const request = {
    idToken,
    returnSecureToken: true
  };
  if (email) {
    request.email = email;
  }
  if (password) {
    request.password = password;
  }
  const response = await _logoutIfInvalidated(user, updateEmailPassword(auth, request));
  await user._updateTokensIfNecessary(response, /* reload */
  true);
}
function _fromIdTokenResponse(idTokenResponse) {
  var _a, _b;
  if (!idTokenResponse) {
    return null;
  }
  const {
    providerId
  } = idTokenResponse;
  const profile = idTokenResponse.rawUserInfo ? JSON.parse(idTokenResponse.rawUserInfo) : {};
  const isNewUser = idTokenResponse.isNewUser || idTokenResponse.kind === "identitytoolkit#SignupNewUserResponse";
  if (!providerId && (idTokenResponse === null || idTokenResponse === void 0 ? void 0 : idTokenResponse.idToken)) {
    const signInProvider = (_b = (_a = _parseToken(idTokenResponse.idToken)) === null || _a === void 0 ? void 0 : _a.firebase) === null || _b === void 0 ? void 0 : _b["sign_in_provider"];
    if (signInProvider) {
      const filteredProviderId = signInProvider !== "anonymous" && signInProvider !== "custom" ? signInProvider : null;
      return new GenericAdditionalUserInfo(isNewUser, filteredProviderId);
    }
  }
  if (!providerId) {
    return null;
  }
  switch (providerId) {
    case "facebook.com":
      return new FacebookAdditionalUserInfo(isNewUser, profile);
    case "github.com":
      return new GithubAdditionalUserInfo(isNewUser, profile);
    case "google.com":
      return new GoogleAdditionalUserInfo(isNewUser, profile);
    case "twitter.com":
      return new TwitterAdditionalUserInfo(isNewUser, profile, idTokenResponse.screenName || null);
    case "custom":
    case "anonymous":
      return new GenericAdditionalUserInfo(isNewUser, null);
    default:
      return new GenericAdditionalUserInfo(isNewUser, providerId, profile);
  }
}
var GenericAdditionalUserInfo = class {
  constructor(isNewUser, providerId, profile = {}) {
    this.isNewUser = isNewUser;
    this.providerId = providerId;
    this.profile = profile;
  }
};
var FederatedAdditionalUserInfoWithUsername = class extends GenericAdditionalUserInfo {
  constructor(isNewUser, providerId, profile, username) {
    super(isNewUser, providerId, profile);
    this.username = username;
  }
};
var FacebookAdditionalUserInfo = class extends GenericAdditionalUserInfo {
  constructor(isNewUser, profile) {
    super(isNewUser, "facebook.com", profile);
  }
};
var GithubAdditionalUserInfo = class extends FederatedAdditionalUserInfoWithUsername {
  constructor(isNewUser, profile) {
    super(isNewUser, "github.com", profile, typeof (profile === null || profile === void 0 ? void 0 : profile.login) === "string" ? profile === null || profile === void 0 ? void 0 : profile.login : null);
  }
};
var GoogleAdditionalUserInfo = class extends GenericAdditionalUserInfo {
  constructor(isNewUser, profile) {
    super(isNewUser, "google.com", profile);
  }
};
var TwitterAdditionalUserInfo = class extends FederatedAdditionalUserInfoWithUsername {
  constructor(isNewUser, profile, screenName) {
    super(isNewUser, "twitter.com", profile, screenName);
  }
};
function getAdditionalUserInfo(userCredential) {
  const {
    user,
    _tokenResponse
  } = userCredential;
  if (user.isAnonymous && !_tokenResponse) {
    return {
      providerId: null,
      isNewUser: false,
      profile: null
    };
  }
  return _fromIdTokenResponse(_tokenResponse);
}
function setPersistence(auth, persistence) {
  return (0, import_util.getModularInstance)(auth).setPersistence(persistence);
}
function initializeRecaptchaConfig(auth) {
  return _initializeRecaptchaConfig(auth);
}
async function validatePassword(auth, password) {
  const authInternal = _castAuth(auth);
  return authInternal.validatePassword(password);
}
function onIdTokenChanged(auth, nextOrObserver, error, completed) {
  return (0, import_util.getModularInstance)(auth).onIdTokenChanged(nextOrObserver, error, completed);
}
function beforeAuthStateChanged(auth, callback, onAbort) {
  return (0, import_util.getModularInstance)(auth).beforeAuthStateChanged(callback, onAbort);
}
function onAuthStateChanged(auth, nextOrObserver, error, completed) {
  return (0, import_util.getModularInstance)(auth).onAuthStateChanged(nextOrObserver, error, completed);
}
function useDeviceLanguage(auth) {
  (0, import_util.getModularInstance)(auth).useDeviceLanguage();
}
function updateCurrentUser(auth, user) {
  return (0, import_util.getModularInstance)(auth).updateCurrentUser(user);
}
function signOut(auth) {
  return (0, import_util.getModularInstance)(auth).signOut();
}
function revokeAccessToken(auth, token) {
  const authInternal = _castAuth(auth);
  return authInternal.revokeAccessToken(token);
}
async function deleteUser(user) {
  return (0, import_util.getModularInstance)(user).delete();
}
var MultiFactorSessionImpl = class _MultiFactorSessionImpl {
  constructor(type, credential, user) {
    this.type = type;
    this.credential = credential;
    this.user = user;
  }
  static _fromIdtoken(idToken, user) {
    return new _MultiFactorSessionImpl("enroll", idToken, user);
  }
  static _fromMfaPendingCredential(mfaPendingCredential) {
    return new _MultiFactorSessionImpl("signin", mfaPendingCredential);
  }
  toJSON() {
    const key = this.type === "enroll" ? "idToken" : "pendingCredential";
    return {
      multiFactorSession: {
        [key]: this.credential
      }
    };
  }
  static fromJSON(obj) {
    var _a, _b;
    if (obj === null || obj === void 0 ? void 0 : obj.multiFactorSession) {
      if ((_a = obj.multiFactorSession) === null || _a === void 0 ? void 0 : _a.pendingCredential) {
        return _MultiFactorSessionImpl._fromMfaPendingCredential(obj.multiFactorSession.pendingCredential);
      } else if ((_b = obj.multiFactorSession) === null || _b === void 0 ? void 0 : _b.idToken) {
        return _MultiFactorSessionImpl._fromIdtoken(obj.multiFactorSession.idToken);
      }
    }
    return null;
  }
};
var MultiFactorResolverImpl = class _MultiFactorResolverImpl {
  constructor(session, hints, signInResolver) {
    this.session = session;
    this.hints = hints;
    this.signInResolver = signInResolver;
  }
  /** @internal */
  static _fromError(authExtern, error) {
    const auth = _castAuth(authExtern);
    const serverResponse = error.customData._serverResponse;
    const hints = (serverResponse.mfaInfo || []).map(enrollment => MultiFactorInfoImpl._fromServerResponse(auth, enrollment));
    _assert(serverResponse.mfaPendingCredential, auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    const session = MultiFactorSessionImpl._fromMfaPendingCredential(serverResponse.mfaPendingCredential);
    return new _MultiFactorResolverImpl(session, hints, async assertion => {
      const mfaResponse = await assertion._process(auth, session);
      delete serverResponse.mfaInfo;
      delete serverResponse.mfaPendingCredential;
      const idTokenResponse = Object.assign(Object.assign({}, serverResponse), {
        idToken: mfaResponse.idToken,
        refreshToken: mfaResponse.refreshToken
      });
      switch (error.operationType) {
        case "signIn":
          const userCredential = await UserCredentialImpl._fromIdTokenResponse(auth, error.operationType, idTokenResponse);
          await auth._updateCurrentUser(userCredential.user);
          return userCredential;
        case "reauthenticate":
          _assert(error.user, auth, "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */);
          return UserCredentialImpl._forOperation(error.user, error.operationType, idTokenResponse);
        default:
          _fail(auth, "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */);
      }
    });
  }
  async resolveSignIn(assertionExtern) {
    const assertion = assertionExtern;
    return this.signInResolver(assertion);
  }
};
function getMultiFactorResolver(auth, error) {
  var _a;
  const authModular = (0, import_util.getModularInstance)(auth);
  const errorInternal = error;
  _assert(error.customData.operationType, authModular, "argument-error"
  /* AuthErrorCode.ARGUMENT_ERROR */);
  _assert((_a = errorInternal.customData._serverResponse) === null || _a === void 0 ? void 0 : _a.mfaPendingCredential, authModular, "argument-error"
  /* AuthErrorCode.ARGUMENT_ERROR */);
  return MultiFactorResolverImpl._fromError(authModular, errorInternal);
}
function startEnrollPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:start", _addTidIfNecessary(auth, request));
}
function finalizeEnrollPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:finalize", _addTidIfNecessary(auth, request));
}
function startEnrollTotpMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:start", _addTidIfNecessary(auth, request));
}
function finalizeEnrollTotpMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:finalize", _addTidIfNecessary(auth, request));
}
function withdrawMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:withdraw", _addTidIfNecessary(auth, request));
}
var MultiFactorUserImpl = class _MultiFactorUserImpl {
  constructor(user) {
    this.user = user;
    this.enrolledFactors = [];
    user._onReload(userInfo => {
      if (userInfo.mfaInfo) {
        this.enrolledFactors = userInfo.mfaInfo.map(enrollment => MultiFactorInfoImpl._fromServerResponse(user.auth, enrollment));
      }
    });
  }
  static _fromUser(user) {
    return new _MultiFactorUserImpl(user);
  }
  async getSession() {
    return MultiFactorSessionImpl._fromIdtoken(await this.user.getIdToken(), this.user);
  }
  async enroll(assertionExtern, displayName) {
    const assertion = assertionExtern;
    const session = await this.getSession();
    const finalizeMfaResponse = await _logoutIfInvalidated(this.user, assertion._process(this.user.auth, session, displayName));
    await this.user._updateTokensIfNecessary(finalizeMfaResponse);
    return this.user.reload();
  }
  async unenroll(infoOrUid) {
    const mfaEnrollmentId = typeof infoOrUid === "string" ? infoOrUid : infoOrUid.uid;
    const idToken = await this.user.getIdToken();
    try {
      const idTokenResponse = await _logoutIfInvalidated(this.user, withdrawMfa(this.user.auth, {
        idToken,
        mfaEnrollmentId
      }));
      this.enrolledFactors = this.enrolledFactors.filter(({
        uid
      }) => uid !== mfaEnrollmentId);
      await this.user._updateTokensIfNecessary(idTokenResponse);
      await this.user.reload();
    } catch (e) {
      throw e;
    }
  }
};
var multiFactorUserCache = /* @__PURE__ */new WeakMap();
function multiFactor(user) {
  const userModular = (0, import_util.getModularInstance)(user);
  if (!multiFactorUserCache.has(userModular)) {
    multiFactorUserCache.set(userModular, MultiFactorUserImpl._fromUser(userModular));
  }
  return multiFactorUserCache.get(userModular);
}
var STORAGE_AVAILABLE_KEY = "__sak";
var BrowserPersistenceClass = class {
  constructor(storageRetriever, type) {
    this.storageRetriever = storageRetriever;
    this.type = type;
  }
  _isAvailable() {
    try {
      if (!this.storage) {
        return Promise.resolve(false);
      }
      this.storage.setItem(STORAGE_AVAILABLE_KEY, "1");
      this.storage.removeItem(STORAGE_AVAILABLE_KEY);
      return Promise.resolve(true);
    } catch (_a) {
      return Promise.resolve(false);
    }
  }
  _set(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
    return Promise.resolve();
  }
  _get(key) {
    const json = this.storage.getItem(key);
    return Promise.resolve(json ? JSON.parse(json) : null);
  }
  _remove(key) {
    this.storage.removeItem(key);
    return Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
};
var _POLLING_INTERVAL_MS$1 = 1e3;
var IE10_LOCAL_STORAGE_SYNC_DELAY = 10;
var BrowserLocalPersistence = class extends BrowserPersistenceClass {
  constructor() {
    super(() => window.localStorage, "LOCAL"
    /* PersistenceType.LOCAL */);
    this.boundEventHandler = (event, poll) => this.onStorageEvent(event, poll);
    this.listeners = {};
    this.localCache = {};
    this.pollTimer = null;
    this.fallbackToPolling = _isMobileBrowser();
    this._shouldAllowMigration = true;
  }
  forAllChangedKeys(cb) {
    for (const key of Object.keys(this.listeners)) {
      const newValue = this.storage.getItem(key);
      const oldValue = this.localCache[key];
      if (newValue !== oldValue) {
        cb(key, oldValue, newValue);
      }
    }
  }
  onStorageEvent(event, poll = false) {
    if (!event.key) {
      this.forAllChangedKeys((key2, _oldValue, newValue) => {
        this.notifyListeners(key2, newValue);
      });
      return;
    }
    const key = event.key;
    if (poll) {
      this.detachListener();
    } else {
      this.stopPolling();
    }
    const triggerListeners = () => {
      const storedValue2 = this.storage.getItem(key);
      if (!poll && this.localCache[key] === storedValue2) {
        return;
      }
      this.notifyListeners(key, storedValue2);
    };
    const storedValue = this.storage.getItem(key);
    if (_isIE10() && storedValue !== event.newValue && event.newValue !== event.oldValue) {
      setTimeout(triggerListeners, IE10_LOCAL_STORAGE_SYNC_DELAY);
    } else {
      triggerListeners();
    }
  }
  notifyListeners(key, value) {
    this.localCache[key] = value;
    const listeners = this.listeners[key];
    if (listeners) {
      for (const listener of Array.from(listeners)) {
        listener(value ? JSON.parse(value) : value);
      }
    }
  }
  startPolling() {
    this.stopPolling();
    this.pollTimer = setInterval(() => {
      this.forAllChangedKeys((key, oldValue, newValue) => {
        this.onStorageEvent(new StorageEvent("storage", {
          key,
          oldValue,
          newValue
        }), /* poll */
        true);
      });
    }, _POLLING_INTERVAL_MS$1);
  }
  stopPolling() {
    if (this.pollTimer) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(key, listener) {
    if (Object.keys(this.listeners).length === 0) {
      if (this.fallbackToPolling) {
        this.startPolling();
      } else {
        this.attachListener();
      }
    }
    if (!this.listeners[key]) {
      this.listeners[key] = /* @__PURE__ */new Set();
      this.localCache[key] = this.storage.getItem(key);
    }
    this.listeners[key].add(listener);
  }
  _removeListener(key, listener) {
    if (this.listeners[key]) {
      this.listeners[key].delete(listener);
      if (this.listeners[key].size === 0) {
        delete this.listeners[key];
      }
    }
    if (Object.keys(this.listeners).length === 0) {
      this.detachListener();
      this.stopPolling();
    }
  }
  // Update local cache on base operations:
  async _set(key, value) {
    await super._set(key, value);
    this.localCache[key] = JSON.stringify(value);
  }
  async _get(key) {
    const value = await super._get(key);
    this.localCache[key] = JSON.stringify(value);
    return value;
  }
  async _remove(key) {
    await super._remove(key);
    delete this.localCache[key];
  }
};
BrowserLocalPersistence.type = "LOCAL";
var browserLocalPersistence = BrowserLocalPersistence;
var POLLING_INTERVAL_MS = 1e3;
function getDocumentCookie(name2) {
  var _a, _b;
  const escapedName = name2.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
  const matcher = RegExp(`${escapedName}=([^;]+)`);
  return (_b = (_a = document.cookie.match(matcher)) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : null;
}
function getCookieName(key) {
  const isDevMode = window.location.protocol === "http:";
  return `${isDevMode ? "__dev_" : "__HOST-"}FIREBASE_${key.split(":")[3]}`;
}
var CookiePersistence = class {
  constructor() {
    this.type = "COOKIE";
    this.listenerUnsubscribes = /* @__PURE__ */new Map();
  }
  // used to get the URL to the backend to proxy to
  _getFinalTarget(originalUrl) {
    if (typeof window === void 0) {
      return originalUrl;
    }
    const url = new URL(`${window.location.origin}/__cookies__`);
    url.searchParams.set("finalTarget", originalUrl);
    return url;
  }
  // To be a usable persistence method in a chain browserCookiePersistence ensures that
  // prerequisites have been met, namely that we're in a secureContext, navigator and document are
  // available and cookies are enabled. Not all UAs support these method, so fallback accordingly.
  async _isAvailable() {
    var _a;
    if (typeof isSecureContext === "boolean" && !isSecureContext) {
      return false;
    }
    if (typeof navigator === "undefined" || typeof document === "undefined") {
      return false;
    }
    return (_a = navigator.cookieEnabled) !== null && _a !== void 0 ? _a : true;
  }
  // Set should be a noop as we expect middleware to handle this
  async _set(_key, _value) {
    return;
  }
  // Attempt to get the cookie from cookieStore, fallback to document.cookie
  async _get(key) {
    if (!this._isAvailable()) {
      return null;
    }
    const name2 = getCookieName(key);
    if (window.cookieStore) {
      const cookie = await window.cookieStore.get(name2);
      return cookie === null || cookie === void 0 ? void 0 : cookie.value;
    }
    return getDocumentCookie(name2);
  }
  // Log out by overriding the idToken with a sentinel value of ""
  async _remove(key) {
    if (!this._isAvailable()) {
      return;
    }
    const existingValue = await this._get(key);
    if (!existingValue) {
      return;
    }
    const name2 = getCookieName(key);
    document.cookie = `${name2}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`;
    await fetch(`/__cookies__`, {
      method: "DELETE"
    }).catch(() => void 0);
  }
  // Listen for cookie changes, both cookieStore and fallback to polling document.cookie
  _addListener(key, listener) {
    if (!this._isAvailable()) {
      return;
    }
    const name2 = getCookieName(key);
    if (window.cookieStore) {
      const cb = event => {
        const changedCookie = event.changed.find(change => change.name === name2);
        if (changedCookie) {
          listener(changedCookie.value);
        }
        const deletedCookie = event.deleted.find(change => change.name === name2);
        if (deletedCookie) {
          listener(null);
        }
      };
      const unsubscribe2 = () => window.cookieStore.removeEventListener("change", cb);
      this.listenerUnsubscribes.set(listener, unsubscribe2);
      return window.cookieStore.addEventListener("change", cb);
    }
    let lastValue = getDocumentCookie(name2);
    const interval = setInterval(() => {
      const currentValue = getDocumentCookie(name2);
      if (currentValue !== lastValue) {
        listener(currentValue);
        lastValue = currentValue;
      }
    }, POLLING_INTERVAL_MS);
    const unsubscribe = () => clearInterval(interval);
    this.listenerUnsubscribes.set(listener, unsubscribe);
  }
  _removeListener(_key, listener) {
    const unsubscribe = this.listenerUnsubscribes.get(listener);
    if (!unsubscribe) {
      return;
    }
    unsubscribe();
    this.listenerUnsubscribes.delete(listener);
  }
};
CookiePersistence.type = "COOKIE";
var browserCookiePersistence = CookiePersistence;
var BrowserSessionPersistence = class extends BrowserPersistenceClass {
  constructor() {
    super(() => window.sessionStorage, "SESSION"
    /* PersistenceType.SESSION */);
  }
  _addListener(_key, _listener) {
    return;
  }
  _removeListener(_key, _listener) {
    return;
  }
};
BrowserSessionPersistence.type = "SESSION";
var browserSessionPersistence = BrowserSessionPersistence;
function _allSettled(promises) {
  return Promise.all(promises.map(async promise => {
    try {
      const value = await promise;
      return {
        fulfilled: true,
        value
      };
    } catch (reason) {
      return {
        fulfilled: false,
        reason
      };
    }
  }));
}
var Receiver = class _Receiver {
  constructor(eventTarget) {
    this.eventTarget = eventTarget;
    this.handlersMap = {};
    this.boundEventHandler = this.handleEvent.bind(this);
  }
  /**
   * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
   *
   * @param eventTarget - An event target (such as window or self) through which the underlying
   * messages will be received.
   */
  static _getInstance(eventTarget) {
    const existingInstance = this.receivers.find(receiver => receiver.isListeningto(eventTarget));
    if (existingInstance) {
      return existingInstance;
    }
    const newInstance = new _Receiver(eventTarget);
    this.receivers.push(newInstance);
    return newInstance;
  }
  isListeningto(eventTarget) {
    return this.eventTarget === eventTarget;
  }
  /**
   * Fans out a MessageEvent to the appropriate listeners.
   *
   * @remarks
   * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
   * finished processing.
   *
   * @param event - The MessageEvent.
   *
   */
  async handleEvent(event) {
    const messageEvent = event;
    const {
      eventId,
      eventType,
      data
    } = messageEvent.data;
    const handlers = this.handlersMap[eventType];
    if (!(handlers === null || handlers === void 0 ? void 0 : handlers.size)) {
      return;
    }
    messageEvent.ports[0].postMessage({
      status: "ack",
      eventId,
      eventType
    });
    const promises = Array.from(handlers).map(async handler => handler(messageEvent.origin, data));
    const response = await _allSettled(promises);
    messageEvent.ports[0].postMessage({
      status: "done",
      eventId,
      eventType,
      response
    });
  }
  /**
   * Subscribe an event handler for a particular event.
   *
   * @param eventType - Event name to subscribe to.
   * @param eventHandler - The event handler which should receive the events.
   *
   */
  _subscribe(eventType, eventHandler) {
    if (Object.keys(this.handlersMap).length === 0) {
      this.eventTarget.addEventListener("message", this.boundEventHandler);
    }
    if (!this.handlersMap[eventType]) {
      this.handlersMap[eventType] = /* @__PURE__ */new Set();
    }
    this.handlersMap[eventType].add(eventHandler);
  }
  /**
   * Unsubscribe an event handler from a particular event.
   *
   * @param eventType - Event name to unsubscribe from.
   * @param eventHandler - Optional event handler, if none provided, unsubscribe all handlers on this event.
   *
   */
  _unsubscribe(eventType, eventHandler) {
    if (this.handlersMap[eventType] && eventHandler) {
      this.handlersMap[eventType].delete(eventHandler);
    }
    if (!eventHandler || this.handlersMap[eventType].size === 0) {
      delete this.handlersMap[eventType];
    }
    if (Object.keys(this.handlersMap).length === 0) {
      this.eventTarget.removeEventListener("message", this.boundEventHandler);
    }
  }
};
Receiver.receivers = [];
function _generateEventId(prefix = "", digits = 10) {
  let random = "";
  for (let i = 0; i < digits; i++) {
    random += Math.floor(Math.random() * 10);
  }
  return prefix + random;
}
var Sender = class {
  constructor(target) {
    this.target = target;
    this.handlers = /* @__PURE__ */new Set();
  }
  /**
   * Unsubscribe the handler and remove it from our tracking Set.
   *
   * @param handler - The handler to unsubscribe.
   */
  removeMessageHandler(handler) {
    if (handler.messageChannel) {
      handler.messageChannel.port1.removeEventListener("message", handler.onMessage);
      handler.messageChannel.port1.close();
    }
    this.handlers.delete(handler);
  }
  /**
   * Send a message to the Receiver located at {@link target}.
   *
   * @remarks
   * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
   * receiver has had a chance to fully process the event.
   *
   * @param eventType - Type of event to send.
   * @param data - The payload of the event.
   * @param timeout - Timeout for waiting on an ACK from the receiver.
   *
   * @returns An array of settled promises from all the handlers that were listening on the receiver.
   */
  async _send(eventType, data, timeout = 50) {
    const messageChannel = typeof MessageChannel !== "undefined" ? new MessageChannel() : null;
    if (!messageChannel) {
      throw new Error("connection_unavailable"
      /* _MessageError.CONNECTION_UNAVAILABLE */);
    }
    let completionTimer;
    let handler;
    return new Promise((resolve, reject) => {
      const eventId = _generateEventId("", 20);
      messageChannel.port1.start();
      const ackTimer = setTimeout(() => {
        reject(new Error("unsupported_event"
        /* _MessageError.UNSUPPORTED_EVENT */));
      }, timeout);
      handler = {
        messageChannel,
        onMessage(event) {
          const messageEvent = event;
          if (messageEvent.data.eventId !== eventId) {
            return;
          }
          switch (messageEvent.data.status) {
            case "ack":
              clearTimeout(ackTimer);
              completionTimer = setTimeout(() => {
                reject(new Error("timeout"
                /* _MessageError.TIMEOUT */));
              }, 3e3
              /* _TimeoutDuration.COMPLETION */);
              break;
            case "done":
              clearTimeout(completionTimer);
              resolve(messageEvent.data.response);
              break;
            default:
              clearTimeout(ackTimer);
              clearTimeout(completionTimer);
              reject(new Error("invalid_response"
              /* _MessageError.INVALID_RESPONSE */));
              break;
          }
        }
      };
      this.handlers.add(handler);
      messageChannel.port1.addEventListener("message", handler.onMessage);
      this.target.postMessage({
        eventType,
        eventId,
        data
      }, [messageChannel.port2]);
    }).finally(() => {
      if (handler) {
        this.removeMessageHandler(handler);
      }
    });
  }
};
function _window() {
  return window;
}
function _setWindowLocation(url) {
  _window().location.href = url;
}
function _isWorker() {
  return typeof _window()["WorkerGlobalScope"] !== "undefined" && typeof _window()["importScripts"] === "function";
}
async function _getActiveServiceWorker() {
  if (!(navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker)) {
    return null;
  }
  try {
    const registration = await navigator.serviceWorker.ready;
    return registration.active;
  } catch (_a) {
    return null;
  }
}
function _getServiceWorkerController() {
  var _a;
  return ((_a = navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker) === null || _a === void 0 ? void 0 : _a.controller) || null;
}
function _getWorkerGlobalScope() {
  return _isWorker() ? self : null;
}
var DB_NAME = "firebaseLocalStorageDb";
var DB_VERSION = 1;
var DB_OBJECTSTORE_NAME = "firebaseLocalStorage";
var DB_DATA_KEYPATH = "fbase_key";
var DBPromise = class {
  constructor(request) {
    this.request = request;
  }
  toPromise() {
    return new Promise((resolve, reject) => {
      this.request.addEventListener("success", () => {
        resolve(this.request.result);
      });
      this.request.addEventListener("error", () => {
        reject(this.request.error);
      });
    });
  }
};
function getObjectStore(db, isReadWrite) {
  return db.transaction([DB_OBJECTSTORE_NAME], isReadWrite ? "readwrite" : "readonly").objectStore(DB_OBJECTSTORE_NAME);
}
function _deleteDatabase() {
  const request = indexedDB.deleteDatabase(DB_NAME);
  return new DBPromise(request).toPromise();
}
function _openDatabase() {
  const request = indexedDB.open(DB_NAME, DB_VERSION);
  return new Promise((resolve, reject) => {
    request.addEventListener("error", () => {
      reject(request.error);
    });
    request.addEventListener("upgradeneeded", () => {
      const db = request.result;
      try {
        db.createObjectStore(DB_OBJECTSTORE_NAME, {
          keyPath: DB_DATA_KEYPATH
        });
      } catch (e) {
        reject(e);
      }
    });
    request.addEventListener("success", async () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(DB_OBJECTSTORE_NAME)) {
        db.close();
        await _deleteDatabase();
        resolve(await _openDatabase());
      } else {
        resolve(db);
      }
    });
  });
}
async function _putObject(db, key, value) {
  const request = getObjectStore(db, true).put({
    [DB_DATA_KEYPATH]: key,
    value
  });
  return new DBPromise(request).toPromise();
}
async function getObject(db, key) {
  const request = getObjectStore(db, false).get(key);
  const data = await new DBPromise(request).toPromise();
  return data === void 0 ? null : data.value;
}
function _deleteObject(db, key) {
  const request = getObjectStore(db, true).delete(key);
  return new DBPromise(request).toPromise();
}
var _POLLING_INTERVAL_MS = 800;
var _TRANSACTION_RETRY_COUNT = 3;
var IndexedDBLocalPersistence = class {
  constructor() {
    this.type = "LOCAL";
    this._shouldAllowMigration = true;
    this.listeners = {};
    this.localCache = {};
    this.pollTimer = null;
    this.pendingWrites = 0;
    this.receiver = null;
    this.sender = null;
    this.serviceWorkerReceiverAvailable = false;
    this.activeServiceWorker = null;
    this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {}, () => {});
  }
  async _openDb() {
    if (this.db) {
      return this.db;
    }
    this.db = await _openDatabase();
    return this.db;
  }
  async _withRetries(op) {
    let numAttempts = 0;
    while (true) {
      try {
        const db = await this._openDb();
        return await op(db);
      } catch (e) {
        if (numAttempts++ > _TRANSACTION_RETRY_COUNT) {
          throw e;
        }
        if (this.db) {
          this.db.close();
          this.db = void 0;
        }
      }
    }
  }
  /**
   * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
   * postMessage interface to send these events to the worker ourselves.
   */
  async initializeServiceWorkerMessaging() {
    return _isWorker() ? this.initializeReceiver() : this.initializeSender();
  }
  /**
   * As the worker we should listen to events from the main window.
   */
  async initializeReceiver() {
    this.receiver = Receiver._getInstance(_getWorkerGlobalScope());
    this.receiver._subscribe("keyChanged", async (_origin, data) => {
      const keys = await this._poll();
      return {
        keyProcessed: keys.includes(data.key)
      };
    });
    this.receiver._subscribe("ping", async (_origin, _data) => {
      return ["keyChanged"
      /* _EventType.KEY_CHANGED */];
    });
  }
  /**
   * As the main window, we should let the worker know when keys change (set and remove).
   *
   * @remarks
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
   * may not resolve.
   */
  async initializeSender() {
    var _a, _b;
    this.activeServiceWorker = await _getActiveServiceWorker();
    if (!this.activeServiceWorker) {
      return;
    }
    this.sender = new Sender(this.activeServiceWorker);
    const results = await this.sender._send("ping", {}, 800
    /* _TimeoutDuration.LONG_ACK */);
    if (!results) {
      return;
    }
    if (((_a = results[0]) === null || _a === void 0 ? void 0 : _a.fulfilled) && ((_b = results[0]) === null || _b === void 0 ? void 0 : _b.value.includes("keyChanged"
    /* _EventType.KEY_CHANGED */))) {
      this.serviceWorkerReceiverAvailable = true;
    }
  }
  /**
   * Let the worker know about a changed key, the exact key doesn't technically matter since the
   * worker will just trigger a full sync anyway.
   *
   * @remarks
   * For now, we only support one service worker per page.
   *
   * @param key - Storage key which changed.
   */
  async notifyServiceWorker(key) {
    if (!this.sender || !this.activeServiceWorker || _getServiceWorkerController() !== this.activeServiceWorker) {
      return;
    }
    try {
      await this.sender._send("keyChanged", {
        key
      },
      // Use long timeout if receiver has previously responded to a ping from us.
      this.serviceWorkerReceiverAvailable ? 800 : 50
      /* _TimeoutDuration.ACK */);
    } catch (_a) {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) {
        return false;
      }
      const db = await _openDatabase();
      await _putObject(db, STORAGE_AVAILABLE_KEY, "1");
      await _deleteObject(db, STORAGE_AVAILABLE_KEY);
      return true;
    } catch (_a) {}
    return false;
  }
  async _withPendingWrite(write) {
    this.pendingWrites++;
    try {
      await write();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(key, value) {
    return this._withPendingWrite(async () => {
      await this._withRetries(db => _putObject(db, key, value));
      this.localCache[key] = value;
      return this.notifyServiceWorker(key);
    });
  }
  async _get(key) {
    const obj = await this._withRetries(db => getObject(db, key));
    this.localCache[key] = obj;
    return obj;
  }
  async _remove(key) {
    return this._withPendingWrite(async () => {
      await this._withRetries(db => _deleteObject(db, key));
      delete this.localCache[key];
      return this.notifyServiceWorker(key);
    });
  }
  async _poll() {
    const result = await this._withRetries(db => {
      const getAllRequest = getObjectStore(db, false).getAll();
      return new DBPromise(getAllRequest).toPromise();
    });
    if (!result) {
      return [];
    }
    if (this.pendingWrites !== 0) {
      return [];
    }
    const keys = [];
    const keysInResult = /* @__PURE__ */new Set();
    if (result.length !== 0) {
      for (const {
        fbase_key: key,
        value
      } of result) {
        keysInResult.add(key);
        if (JSON.stringify(this.localCache[key]) !== JSON.stringify(value)) {
          this.notifyListeners(key, value);
          keys.push(key);
        }
      }
    }
    for (const localKey of Object.keys(this.localCache)) {
      if (this.localCache[localKey] && !keysInResult.has(localKey)) {
        this.notifyListeners(localKey, null);
        keys.push(localKey);
      }
    }
    return keys;
  }
  notifyListeners(key, newValue) {
    this.localCache[key] = newValue;
    const listeners = this.listeners[key];
    if (listeners) {
      for (const listener of Array.from(listeners)) {
        listener(newValue);
      }
    }
  }
  startPolling() {
    this.stopPolling();
    this.pollTimer = setInterval(async () => this._poll(), _POLLING_INTERVAL_MS);
  }
  stopPolling() {
    if (this.pollTimer) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
  }
  _addListener(key, listener) {
    if (Object.keys(this.listeners).length === 0) {
      this.startPolling();
    }
    if (!this.listeners[key]) {
      this.listeners[key] = /* @__PURE__ */new Set();
      void this._get(key);
    }
    this.listeners[key].add(listener);
  }
  _removeListener(key, listener) {
    if (this.listeners[key]) {
      this.listeners[key].delete(listener);
      if (this.listeners[key].size === 0) {
        delete this.listeners[key];
      }
    }
    if (Object.keys(this.listeners).length === 0) {
      this.stopPolling();
    }
  }
};
IndexedDBLocalPersistence.type = "LOCAL";
var indexedDBLocalPersistence = IndexedDBLocalPersistence;
function startSignInPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaSignIn:start", _addTidIfNecessary(auth, request));
}
function finalizeSignInPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaSignIn:finalize", _addTidIfNecessary(auth, request));
}
function finalizeSignInTotpMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaSignIn:finalize", _addTidIfNecessary(auth, request));
}
var _JSLOAD_CALLBACK = _generateCallbackName("rcb");
var NETWORK_TIMEOUT_DELAY = new Delay(3e4, 6e4);
var ReCaptchaLoaderImpl = class {
  constructor() {
    var _a;
    this.hostLanguage = "";
    this.counter = 0;
    this.librarySeparatelyLoaded = !!((_a = _window().grecaptcha) === null || _a === void 0 ? void 0 : _a.render);
  }
  load(auth, hl = "") {
    _assert(isHostLanguageValid(hl), auth, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */);
    if (this.shouldResolveImmediately(hl) && isV2(_window().grecaptcha)) {
      return Promise.resolve(_window().grecaptcha);
    }
    return new Promise((resolve, reject) => {
      const networkTimeout = _window().setTimeout(() => {
        reject(_createError(auth, "network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */));
      }, NETWORK_TIMEOUT_DELAY.get());
      _window()[_JSLOAD_CALLBACK] = () => {
        _window().clearTimeout(networkTimeout);
        delete _window()[_JSLOAD_CALLBACK];
        const recaptcha = _window().grecaptcha;
        if (!recaptcha || !isV2(recaptcha)) {
          reject(_createError(auth, "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */));
          return;
        }
        const render = recaptcha.render;
        recaptcha.render = (container, params) => {
          const widgetId = render(container, params);
          this.counter++;
          return widgetId;
        };
        this.hostLanguage = hl;
        resolve(recaptcha);
      };
      const url = `${_recaptchaV2ScriptUrl()}?${(0, import_util.querystring)({
        onload: _JSLOAD_CALLBACK,
        render: "explicit",
        hl
      })}`;
      _loadJS(url).catch(() => {
        clearTimeout(networkTimeout);
        reject(_createError(auth, "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */));
      });
    });
  }
  clearedOneInstance() {
    this.counter--;
  }
  shouldResolveImmediately(hl) {
    var _a;
    return !!((_a = _window().grecaptcha) === null || _a === void 0 ? void 0 : _a.render) && (hl === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded);
  }
};
function isHostLanguageValid(hl) {
  return hl.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(hl);
}
var MockReCaptchaLoaderImpl = class {
  async load(auth) {
    return new MockReCaptcha(auth);
  }
  clearedOneInstance() {}
};
var RECAPTCHA_VERIFIER_TYPE = "recaptcha";
var DEFAULT_PARAMS = {
  theme: "light",
  type: "image"
};
var RecaptchaVerifier = class {
  /**
   * @param authExtern - The corresponding Firebase {@link Auth} instance.
   *
   * @param containerOrId - The reCAPTCHA container parameter.
   *
   * @remarks
   * This has different meaning depending on whether the reCAPTCHA is hidden or visible. For a
   * visible reCAPTCHA the container must be empty. If a string is used, it has to correspond to
   * an element ID. The corresponding element must also must be in the DOM at the time of
   * initialization.
   *
   * @param parameters - The optional reCAPTCHA parameters.
   *
   * @remarks
   * Check the reCAPTCHA docs for a comprehensive list. All parameters are accepted except for
   * the sitekey. Firebase Auth backend provisions a reCAPTCHA for each project and will
   * configure this upon rendering. For an invisible reCAPTCHA, a size key must have the value
   * 'invisible'.
   */
  constructor(authExtern, containerOrId, parameters = Object.assign({}, DEFAULT_PARAMS)) {
    this.parameters = parameters;
    this.type = RECAPTCHA_VERIFIER_TYPE;
    this.destroyed = false;
    this.widgetId = null;
    this.tokenChangeListeners = /* @__PURE__ */new Set();
    this.renderPromise = null;
    this.recaptcha = null;
    this.auth = _castAuth(authExtern);
    this.isInvisible = this.parameters.size === "invisible";
    _assert(typeof document !== "undefined", this.auth, "operation-not-supported-in-this-environment"
    /* AuthErrorCode.OPERATION_NOT_SUPPORTED */);
    const container = typeof containerOrId === "string" ? document.getElementById(containerOrId) : containerOrId;
    _assert(container, this.auth, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */);
    this.container = container;
    this.parameters.callback = this.makeTokenCallback(this.parameters.callback);
    this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new MockReCaptchaLoaderImpl() : new ReCaptchaLoaderImpl();
    this.validateStartingState();
  }
  /**
   * Waits for the user to solve the reCAPTCHA and resolves with the reCAPTCHA token.
   *
   * @returns A Promise for the reCAPTCHA token.
   */
  async verify() {
    this.assertNotDestroyed();
    const id = await this.render();
    const recaptcha = this.getAssertedRecaptcha();
    const response = recaptcha.getResponse(id);
    if (response) {
      return response;
    }
    return new Promise(resolve => {
      const tokenChange = token => {
        if (!token) {
          return;
        }
        this.tokenChangeListeners.delete(tokenChange);
        resolve(token);
      };
      this.tokenChangeListeners.add(tokenChange);
      if (this.isInvisible) {
        recaptcha.execute(id);
      }
    });
  }
  /**
   * Renders the reCAPTCHA widget on the page.
   *
   * @returns A Promise that resolves with the reCAPTCHA widget ID.
   */
  render() {
    try {
      this.assertNotDestroyed();
    } catch (e) {
      return Promise.reject(e);
    }
    if (this.renderPromise) {
      return this.renderPromise;
    }
    this.renderPromise = this.makeRenderPromise().catch(e => {
      this.renderPromise = null;
      throw e;
    });
    return this.renderPromise;
  }
  /** @internal */
  _reset() {
    this.assertNotDestroyed();
    if (this.widgetId !== null) {
      this.getAssertedRecaptcha().reset(this.widgetId);
    }
  }
  /**
   * Clears the reCAPTCHA widget from the page and destroys the instance.
   */
  clear() {
    this.assertNotDestroyed();
    this.destroyed = true;
    this._recaptchaLoader.clearedOneInstance();
    if (!this.isInvisible) {
      this.container.childNodes.forEach(node => {
        this.container.removeChild(node);
      });
    }
  }
  validateStartingState() {
    _assert(!this.parameters.sitekey, this.auth, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */);
    _assert(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */);
    _assert(typeof document !== "undefined", this.auth, "operation-not-supported-in-this-environment"
    /* AuthErrorCode.OPERATION_NOT_SUPPORTED */);
  }
  makeTokenCallback(existing) {
    return token => {
      this.tokenChangeListeners.forEach(listener => listener(token));
      if (typeof existing === "function") {
        existing(token);
      } else if (typeof existing === "string") {
        const globalFunc = _window()[existing];
        if (typeof globalFunc === "function") {
          globalFunc(token);
        }
      }
    };
  }
  assertNotDestroyed() {
    _assert(!this.destroyed, this.auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
  }
  async makeRenderPromise() {
    await this.init();
    if (!this.widgetId) {
      let container = this.container;
      if (!this.isInvisible) {
        const guaranteedEmpty = document.createElement("div");
        container.appendChild(guaranteedEmpty);
        container = guaranteedEmpty;
      }
      this.widgetId = this.getAssertedRecaptcha().render(container, this.parameters);
    }
    return this.widgetId;
  }
  async init() {
    _assert(_isHttpOrHttps() && !_isWorker(), this.auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    await domReady();
    this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
    const siteKey = await getRecaptchaParams(this.auth);
    _assert(siteKey, this.auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    this.parameters.sitekey = siteKey;
  }
  getAssertedRecaptcha() {
    _assert(this.recaptcha, this.auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    return this.recaptcha;
  }
};
function domReady() {
  let resolver = null;
  return new Promise(resolve => {
    if (document.readyState === "complete") {
      resolve();
      return;
    }
    resolver = () => resolve();
    window.addEventListener("load", resolver);
  }).catch(e => {
    if (resolver) {
      window.removeEventListener("load", resolver);
    }
    throw e;
  });
}
var ConfirmationResultImpl = class {
  constructor(verificationId, onConfirmation) {
    this.verificationId = verificationId;
    this.onConfirmation = onConfirmation;
  }
  confirm(verificationCode) {
    const authCredential = PhoneAuthCredential._fromVerification(this.verificationId, verificationCode);
    return this.onConfirmation(authCredential);
  }
};
async function signInWithPhoneNumber(auth, phoneNumber, appVerifier) {
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
  const authInternal = _castAuth(auth);
  const verificationId = await _verifyPhoneNumber(authInternal, phoneNumber, (0, import_util.getModularInstance)(appVerifier));
  return new ConfirmationResultImpl(verificationId, cred => signInWithCredential(authInternal, cred));
}
async function linkWithPhoneNumber(user, phoneNumber, appVerifier) {
  const userInternal = (0, import_util.getModularInstance)(user);
  await _assertLinkedStatus(false, userInternal, "phone"
  /* ProviderId.PHONE */);
  const verificationId = await _verifyPhoneNumber(userInternal.auth, phoneNumber, (0, import_util.getModularInstance)(appVerifier));
  return new ConfirmationResultImpl(verificationId, cred => linkWithCredential(userInternal, cred));
}
async function reauthenticateWithPhoneNumber(user, phoneNumber, appVerifier) {
  const userInternal = (0, import_util.getModularInstance)(user);
  if ((0, import_app._isFirebaseServerApp)(userInternal.auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(userInternal.auth));
  }
  const verificationId = await _verifyPhoneNumber(userInternal.auth, phoneNumber, (0, import_util.getModularInstance)(appVerifier));
  return new ConfirmationResultImpl(verificationId, cred => reauthenticateWithCredential(userInternal, cred));
}
async function _verifyPhoneNumber(auth, options, verifier) {
  var _a;
  if (!auth._getRecaptchaConfig()) {
    try {
      await _initializeRecaptchaConfig(auth);
    } catch (error) {
      console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.");
    }
  }
  try {
    let phoneInfoOptions;
    if (typeof options === "string") {
      phoneInfoOptions = {
        phoneNumber: options
      };
    } else {
      phoneInfoOptions = options;
    }
    if ("session" in phoneInfoOptions) {
      const session = phoneInfoOptions.session;
      if ("phoneNumber" in phoneInfoOptions) {
        _assert(session.type === "enroll", auth, "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */);
        const startPhoneMfaEnrollmentRequest = {
          idToken: session.credential,
          phoneEnrollmentInfo: {
            phoneNumber: phoneInfoOptions.phoneNumber,
            clientType: "CLIENT_TYPE_WEB"
            /* RecaptchaClientType.WEB */
          }
        };
        const startEnrollPhoneMfaActionCallback = async (authInstance, request) => {
          if (request.phoneEnrollmentInfo.captchaResponse === FAKE_TOKEN) {
            _assert((verifier === null || verifier === void 0 ? void 0 : verifier.type) === RECAPTCHA_VERIFIER_TYPE, authInstance, "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */);
            const requestWithRecaptchaV2 = await injectRecaptchaV2Token(authInstance, request, verifier);
            return startEnrollPhoneMfa(authInstance, requestWithRecaptchaV2);
          }
          return startEnrollPhoneMfa(authInstance, request);
        };
        const startPhoneMfaEnrollmentResponse = handleRecaptchaFlow(auth, startPhoneMfaEnrollmentRequest, "mfaSmsEnrollment", startEnrollPhoneMfaActionCallback, "PHONE_PROVIDER"
        /* RecaptchaAuthProvider.PHONE_PROVIDER */);
        const response = await startPhoneMfaEnrollmentResponse.catch(error => {
          return Promise.reject(error);
        });
        return response.phoneSessionInfo.sessionInfo;
      } else {
        _assert(session.type === "signin", auth, "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */);
        const mfaEnrollmentId = ((_a = phoneInfoOptions.multiFactorHint) === null || _a === void 0 ? void 0 : _a.uid) || phoneInfoOptions.multiFactorUid;
        _assert(mfaEnrollmentId, auth, "missing-multi-factor-info"
        /* AuthErrorCode.MISSING_MFA_INFO */);
        const startPhoneMfaSignInRequest = {
          mfaPendingCredential: session.credential,
          mfaEnrollmentId,
          phoneSignInInfo: {
            clientType: "CLIENT_TYPE_WEB"
            /* RecaptchaClientType.WEB */
          }
        };
        const startSignInPhoneMfaActionCallback = async (authInstance, request) => {
          if (request.phoneSignInInfo.captchaResponse === FAKE_TOKEN) {
            _assert((verifier === null || verifier === void 0 ? void 0 : verifier.type) === RECAPTCHA_VERIFIER_TYPE, authInstance, "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */);
            const requestWithRecaptchaV2 = await injectRecaptchaV2Token(authInstance, request, verifier);
            return startSignInPhoneMfa(authInstance, requestWithRecaptchaV2);
          }
          return startSignInPhoneMfa(authInstance, request);
        };
        const startPhoneMfaSignInResponse = handleRecaptchaFlow(auth, startPhoneMfaSignInRequest, "mfaSmsSignIn", startSignInPhoneMfaActionCallback, "PHONE_PROVIDER"
        /* RecaptchaAuthProvider.PHONE_PROVIDER */);
        const response = await startPhoneMfaSignInResponse.catch(error => {
          return Promise.reject(error);
        });
        return response.phoneResponseInfo.sessionInfo;
      }
    } else {
      const sendPhoneVerificationCodeRequest = {
        phoneNumber: phoneInfoOptions.phoneNumber,
        clientType: "CLIENT_TYPE_WEB"
        /* RecaptchaClientType.WEB */
      };
      const sendPhoneVerificationCodeActionCallback = async (authInstance, request) => {
        if (request.captchaResponse === FAKE_TOKEN) {
          _assert((verifier === null || verifier === void 0 ? void 0 : verifier.type) === RECAPTCHA_VERIFIER_TYPE, authInstance, "argument-error"
          /* AuthErrorCode.ARGUMENT_ERROR */);
          const requestWithRecaptchaV2 = await injectRecaptchaV2Token(authInstance, request, verifier);
          return sendPhoneVerificationCode(authInstance, requestWithRecaptchaV2);
        }
        return sendPhoneVerificationCode(authInstance, request);
      };
      const sendPhoneVerificationCodeResponse = handleRecaptchaFlow(auth, sendPhoneVerificationCodeRequest, "sendVerificationCode", sendPhoneVerificationCodeActionCallback, "PHONE_PROVIDER"
      /* RecaptchaAuthProvider.PHONE_PROVIDER */);
      const response = await sendPhoneVerificationCodeResponse.catch(error => {
        return Promise.reject(error);
      });
      return response.sessionInfo;
    }
  } finally {
    verifier === null || verifier === void 0 ? void 0 : verifier._reset();
  }
}
async function updatePhoneNumber(user, credential) {
  const userInternal = (0, import_util.getModularInstance)(user);
  if ((0, import_app._isFirebaseServerApp)(userInternal.auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(userInternal.auth));
  }
  await _link$1(userInternal, credential);
}
async function injectRecaptchaV2Token(auth, request, recaptchaV2Verifier) {
  _assert(recaptchaV2Verifier.type === RECAPTCHA_VERIFIER_TYPE, auth, "argument-error"
  /* AuthErrorCode.ARGUMENT_ERROR */);
  const recaptchaV2Token = await recaptchaV2Verifier.verify();
  _assert(typeof recaptchaV2Token === "string", auth, "argument-error"
  /* AuthErrorCode.ARGUMENT_ERROR */);
  const newRequest = Object.assign({}, request);
  if ("phoneEnrollmentInfo" in newRequest) {
    const phoneNumber = newRequest.phoneEnrollmentInfo.phoneNumber;
    const captchaResponse = newRequest.phoneEnrollmentInfo.captchaResponse;
    const clientType = newRequest.phoneEnrollmentInfo.clientType;
    const recaptchaVersion = newRequest.phoneEnrollmentInfo.recaptchaVersion;
    Object.assign(newRequest, {
      "phoneEnrollmentInfo": {
        phoneNumber,
        recaptchaToken: recaptchaV2Token,
        captchaResponse,
        clientType,
        recaptchaVersion
      }
    });
    return newRequest;
  } else if ("phoneSignInInfo" in newRequest) {
    const captchaResponse = newRequest.phoneSignInInfo.captchaResponse;
    const clientType = newRequest.phoneSignInInfo.clientType;
    const recaptchaVersion = newRequest.phoneSignInInfo.recaptchaVersion;
    Object.assign(newRequest, {
      "phoneSignInInfo": {
        recaptchaToken: recaptchaV2Token,
        captchaResponse,
        clientType,
        recaptchaVersion
      }
    });
    return newRequest;
  } else {
    Object.assign(newRequest, {
      "recaptchaToken": recaptchaV2Token
    });
    return newRequest;
  }
}
var PhoneAuthProvider = class _PhoneAuthProvider {
  /**
   * @param auth - The Firebase {@link Auth} instance in which sign-ins should occur.
   *
   */
  constructor(auth) {
    this.providerId = _PhoneAuthProvider.PROVIDER_ID;
    this.auth = _castAuth(auth);
  }
  /**
   *
   * Starts a phone number authentication flow by sending a verification code to the given phone
   * number.
   *
   * @example
   * ```javascript
   * const provider = new PhoneAuthProvider(auth);
   * const verificationId = await provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
   * // Obtain verificationCode from the user.
   * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
   * const userCredential = await signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * An alternative flow is provided using the `signInWithPhoneNumber` method.
   * ```javascript
   * const confirmationResult = signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
   * // Obtain verificationCode from the user.
   * const userCredential = confirmationResult.confirm(verificationCode);
   * ```
   *
   * @param phoneInfoOptions - The user's {@link PhoneInfoOptions}. The phone number should be in
   * E.164 format (e.g. +16505550101).
   * @param applicationVerifier - An {@link ApplicationVerifier}, which prevents
   * requests from unauthorized clients. This SDK includes an implementation
   * based on reCAPTCHA v2, {@link RecaptchaVerifier}. If you've enabled
   * reCAPTCHA Enterprise bot protection in Enforce mode, this parameter is
   * optional; in all other configurations, the parameter is required.
   *
   * @returns A Promise for a verification ID that can be passed to
   * {@link PhoneAuthProvider.credential} to identify this flow.
   */
  verifyPhoneNumber(phoneOptions, applicationVerifier) {
    return _verifyPhoneNumber(this.auth, phoneOptions, (0, import_util.getModularInstance)(applicationVerifier));
  }
  /**
   * Creates a phone auth credential, given the verification ID from
   * {@link PhoneAuthProvider.verifyPhoneNumber} and the code that was sent to the user's
   * mobile device.
   *
   * @example
   * ```javascript
   * const provider = new PhoneAuthProvider(auth);
   * const verificationId = provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
   * // Obtain verificationCode from the user.
   * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
   * const userCredential = signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * An alternative flow is provided using the `signInWithPhoneNumber` method.
   * ```javascript
   * const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
   * // Obtain verificationCode from the user.
   * const userCredential = await confirmationResult.confirm(verificationCode);
   * ```
   *
   * @param verificationId - The verification ID returned from {@link PhoneAuthProvider.verifyPhoneNumber}.
   * @param verificationCode - The verification code sent to the user's mobile device.
   *
   * @returns The auth provider credential.
   */
  static credential(verificationId, verificationCode) {
    return PhoneAuthCredential._fromVerification(verificationId, verificationCode);
  }
  /**
   * Generates an {@link AuthCredential} from a {@link UserCredential}.
   * @param userCredential - The user credential.
   */
  static credentialFromResult(userCredential) {
    const credential = userCredential;
    return _PhoneAuthProvider.credentialFromTaggedObject(credential);
  }
  /**
   * Returns an {@link AuthCredential} when passed an error.
   *
   * @remarks
   *
   * This method works for errors like
   * `auth/account-exists-with-different-credentials`. This is useful for
   * recovering when attempting to set a user's phone number but the number
   * in question is already tied to another account. For example, the following
   * code tries to update the current user's phone number, and if that
   * fails, links the user with the account associated with that number:
   *
   * ```js
   * const provider = new PhoneAuthProvider(auth);
   * const verificationId = await provider.verifyPhoneNumber(number, verifier);
   * try {
   *   const code = ''; // Prompt the user for the verification code
   *   await updatePhoneNumber(
   *       auth.currentUser,
   *       PhoneAuthProvider.credential(verificationId, code));
   * } catch (e) {
   *   if ((e as FirebaseError)?.code === 'auth/account-exists-with-different-credential') {
   *     const cred = PhoneAuthProvider.credentialFromError(e);
   *     await linkWithCredential(auth.currentUser, cred);
   *   }
   * }
   *
   * // At this point, auth.currentUser.phoneNumber === number.
   * ```
   *
   * @param error - The error to generate a credential from.
   */
  static credentialFromError(error) {
    return _PhoneAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse) {
      return null;
    }
    const {
      phoneNumber,
      temporaryProof
    } = tokenResponse;
    if (phoneNumber && temporaryProof) {
      return PhoneAuthCredential._fromTokenResponse(phoneNumber, temporaryProof);
    }
    return null;
  }
};
PhoneAuthProvider.PROVIDER_ID = "phone";
PhoneAuthProvider.PHONE_SIGN_IN_METHOD = "phone";
function _withDefaultResolver(auth, resolverOverride) {
  if (resolverOverride) {
    return _getInstance(resolverOverride);
  }
  _assert(auth._popupRedirectResolver, auth, "argument-error"
  /* AuthErrorCode.ARGUMENT_ERROR */);
  return auth._popupRedirectResolver;
}
var IdpCredential = class extends AuthCredential {
  constructor(params) {
    super("custom", "custom"
    /* ProviderId.CUSTOM */);
    this.params = params;
  }
  _getIdTokenResponse(auth) {
    return signInWithIdp(auth, this._buildIdpRequest());
  }
  _linkToIdToken(auth, idToken) {
    return signInWithIdp(auth, this._buildIdpRequest(idToken));
  }
  _getReauthenticationResolver(auth) {
    return signInWithIdp(auth, this._buildIdpRequest());
  }
  _buildIdpRequest(idToken) {
    const request = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: true,
      returnIdpCredential: true
    };
    if (idToken) {
      request.idToken = idToken;
    }
    return request;
  }
};
function _signIn(params) {
  return _signInWithCredential(params.auth, new IdpCredential(params), params.bypassAuthState);
}
function _reauth(params) {
  const {
    auth,
    user
  } = params;
  _assert(user, auth, "internal-error"
  /* AuthErrorCode.INTERNAL_ERROR */);
  return _reauthenticate(user, new IdpCredential(params), params.bypassAuthState);
}
async function _link(params) {
  const {
    auth,
    user
  } = params;
  _assert(user, auth, "internal-error"
  /* AuthErrorCode.INTERNAL_ERROR */);
  return _link$1(user, new IdpCredential(params), params.bypassAuthState);
}
var AbstractPopupRedirectOperation = class {
  constructor(auth, filter, resolver, user, bypassAuthState = false) {
    this.auth = auth;
    this.resolver = resolver;
    this.user = user;
    this.bypassAuthState = bypassAuthState;
    this.pendingPromise = null;
    this.eventManager = null;
    this.filter = Array.isArray(filter) ? filter : [filter];
  }
  execute() {
    return new Promise(async (resolve, reject) => {
      this.pendingPromise = {
        resolve,
        reject
      };
      try {
        this.eventManager = await this.resolver._initialize(this.auth);
        await this.onExecution();
        this.eventManager.registerConsumer(this);
      } catch (e) {
        this.reject(e);
      }
    });
  }
  async onAuthEvent(event) {
    const {
      urlResponse,
      sessionId,
      postBody,
      tenantId,
      error,
      type
    } = event;
    if (error) {
      this.reject(error);
      return;
    }
    const params = {
      auth: this.auth,
      requestUri: urlResponse,
      sessionId,
      tenantId: tenantId || void 0,
      postBody: postBody || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState
    };
    try {
      this.resolve(await this.getIdpTask(type)(params));
    } catch (e) {
      this.reject(e);
    }
  }
  onError(error) {
    this.reject(error);
  }
  getIdpTask(type) {
    switch (type) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return _signIn;
      case "linkViaPopup":
      case "linkViaRedirect":
        return _link;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return _reauth;
      default:
        _fail(this.auth, "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */);
    }
  }
  resolve(cred) {
    debugAssert(this.pendingPromise, "Pending promise was never set");
    this.pendingPromise.resolve(cred);
    this.unregisterAndCleanUp();
  }
  reject(error) {
    debugAssert(this.pendingPromise, "Pending promise was never set");
    this.pendingPromise.reject(error);
    this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    if (this.eventManager) {
      this.eventManager.unregisterConsumer(this);
    }
    this.pendingPromise = null;
    this.cleanUp();
  }
};
var _POLL_WINDOW_CLOSE_TIMEOUT = new Delay(2e3, 1e4);
async function signInWithPopup(auth, provider, resolver) {
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_createError(auth, "operation-not-supported-in-this-environment"
    /* AuthErrorCode.OPERATION_NOT_SUPPORTED */));
  }
  const authInternal = _castAuth(auth);
  _assertInstanceOf(auth, provider, FederatedAuthProvider);
  const resolverInternal = _withDefaultResolver(authInternal, resolver);
  const action = new PopupOperation(authInternal, "signInViaPopup", provider, resolverInternal);
  return action.executeNotNull();
}
async function reauthenticateWithPopup(user, provider, resolver) {
  const userInternal = (0, import_util.getModularInstance)(user);
  if ((0, import_app._isFirebaseServerApp)(userInternal.auth.app)) {
    return Promise.reject(_createError(userInternal.auth, "operation-not-supported-in-this-environment"
    /* AuthErrorCode.OPERATION_NOT_SUPPORTED */));
  }
  _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
  const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
  const action = new PopupOperation(userInternal.auth, "reauthViaPopup", provider, resolverInternal, userInternal);
  return action.executeNotNull();
}
async function linkWithPopup(user, provider, resolver) {
  const userInternal = (0, import_util.getModularInstance)(user);
  _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
  const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
  const action = new PopupOperation(userInternal.auth, "linkViaPopup", provider, resolverInternal, userInternal);
  return action.executeNotNull();
}
var PopupOperation = class _PopupOperation extends AbstractPopupRedirectOperation {
  constructor(auth, filter, provider, resolver, user) {
    super(auth, filter, resolver, user);
    this.provider = provider;
    this.authWindow = null;
    this.pollId = null;
    if (_PopupOperation.currentPopupAction) {
      _PopupOperation.currentPopupAction.cancel();
    }
    _PopupOperation.currentPopupAction = this;
  }
  async executeNotNull() {
    const result = await this.execute();
    _assert(result, this.auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    return result;
  }
  async onExecution() {
    debugAssert(this.filter.length === 1, "Popup operations only handle one event");
    const eventId = _generateEventId();
    this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0],
    // There's always one, see constructor
    eventId);
    this.authWindow.associatedEvent = eventId;
    this.resolver._originValidation(this.auth).catch(e => {
      this.reject(e);
    });
    this.resolver._isIframeWebStorageSupported(this.auth, isSupported => {
      if (!isSupported) {
        this.reject(_createError(this.auth, "web-storage-unsupported"
        /* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */));
      }
    });
    this.pollUserCancellation();
  }
  get eventId() {
    var _a;
    return ((_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.associatedEvent) || null;
  }
  cancel() {
    this.reject(_createError(this.auth, "cancelled-popup-request"
    /* AuthErrorCode.EXPIRED_POPUP_REQUEST */));
  }
  cleanUp() {
    if (this.authWindow) {
      this.authWindow.close();
    }
    if (this.pollId) {
      window.clearTimeout(this.pollId);
    }
    this.authWindow = null;
    this.pollId = null;
    _PopupOperation.currentPopupAction = null;
  }
  pollUserCancellation() {
    const poll = () => {
      var _a, _b;
      if ((_b = (_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.window) === null || _b === void 0 ? void 0 : _b.closed) {
        this.pollId = window.setTimeout(() => {
          this.pollId = null;
          this.reject(_createError(this.auth, "popup-closed-by-user"
          /* AuthErrorCode.POPUP_CLOSED_BY_USER */));
        }, 8e3
        /* _Timeout.AUTH_EVENT */);
        return;
      }
      this.pollId = window.setTimeout(poll, _POLL_WINDOW_CLOSE_TIMEOUT.get());
    };
    poll();
  }
};
PopupOperation.currentPopupAction = null;
var PENDING_REDIRECT_KEY = "pendingRedirect";
var redirectOutcomeMap = /* @__PURE__ */new Map();
var RedirectAction = class extends AbstractPopupRedirectOperation {
  constructor(auth, resolver, bypassAuthState = false) {
    super(auth, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"
    /* AuthEventType.UNKNOWN */], resolver, void 0, bypassAuthState);
    this.eventId = null;
  }
  /**
   * Override the execute function; if we already have a redirect result, then
   * just return it.
   */
  async execute() {
    let readyOutcome = redirectOutcomeMap.get(this.auth._key());
    if (!readyOutcome) {
      try {
        const hasPendingRedirect = await _getAndClearPendingRedirectStatus(this.resolver, this.auth);
        const result = hasPendingRedirect ? await super.execute() : null;
        readyOutcome = () => Promise.resolve(result);
      } catch (e) {
        readyOutcome = () => Promise.reject(e);
      }
      redirectOutcomeMap.set(this.auth._key(), readyOutcome);
    }
    if (!this.bypassAuthState) {
      redirectOutcomeMap.set(this.auth._key(), () => Promise.resolve(null));
    }
    return readyOutcome();
  }
  async onAuthEvent(event) {
    if (event.type === "signInViaRedirect") {
      return super.onAuthEvent(event);
    } else if (event.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (event.eventId) {
      const user = await this.auth._redirectUserForId(event.eventId);
      if (user) {
        this.user = user;
        return super.onAuthEvent(event);
      } else {
        this.resolve(null);
      }
    }
  }
  async onExecution() {}
  cleanUp() {}
};
async function _getAndClearPendingRedirectStatus(resolver, auth) {
  const key = pendingRedirectKey(auth);
  const persistence = resolverPersistence(resolver);
  if (!(await persistence._isAvailable())) {
    return false;
  }
  const hasPendingRedirect = (await persistence._get(key)) === "true";
  await persistence._remove(key);
  return hasPendingRedirect;
}
async function _setPendingRedirectStatus(resolver, auth) {
  return resolverPersistence(resolver)._set(pendingRedirectKey(auth), "true");
}
function _clearRedirectOutcomes() {
  redirectOutcomeMap.clear();
}
function _overrideRedirectResult(auth, result) {
  redirectOutcomeMap.set(auth._key(), result);
}
function resolverPersistence(resolver) {
  return _getInstance(resolver._redirectPersistence);
}
function pendingRedirectKey(auth) {
  return _persistenceKeyName(PENDING_REDIRECT_KEY, auth.config.apiKey, auth.name);
}
function signInWithRedirect(auth, provider, resolver) {
  return _signInWithRedirect(auth, provider, resolver);
}
async function _signInWithRedirect(auth, provider, resolver) {
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
  const authInternal = _castAuth(auth);
  _assertInstanceOf(auth, provider, FederatedAuthProvider);
  await authInternal._initializationPromise;
  const resolverInternal = _withDefaultResolver(authInternal, resolver);
  await _setPendingRedirectStatus(resolverInternal, authInternal);
  return resolverInternal._openRedirect(authInternal, provider, "signInViaRedirect"
  /* AuthEventType.SIGN_IN_VIA_REDIRECT */);
}
function reauthenticateWithRedirect(user, provider, resolver) {
  return _reauthenticateWithRedirect(user, provider, resolver);
}
async function _reauthenticateWithRedirect(user, provider, resolver) {
  const userInternal = (0, import_util.getModularInstance)(user);
  _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
  if ((0, import_app._isFirebaseServerApp)(userInternal.auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(userInternal.auth));
  }
  await userInternal.auth._initializationPromise;
  const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
  await _setPendingRedirectStatus(resolverInternal, userInternal.auth);
  const eventId = await prepareUserForRedirect(userInternal);
  return resolverInternal._openRedirect(userInternal.auth, provider, "reauthViaRedirect", eventId);
}
function linkWithRedirect(user, provider, resolver) {
  return _linkWithRedirect(user, provider, resolver);
}
async function _linkWithRedirect(user, provider, resolver) {
  const userInternal = (0, import_util.getModularInstance)(user);
  _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
  await userInternal.auth._initializationPromise;
  const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
  await _assertLinkedStatus(false, userInternal, provider.providerId);
  await _setPendingRedirectStatus(resolverInternal, userInternal.auth);
  const eventId = await prepareUserForRedirect(userInternal);
  return resolverInternal._openRedirect(userInternal.auth, provider, "linkViaRedirect", eventId);
}
async function getRedirectResult(auth, resolver) {
  await _castAuth(auth)._initializationPromise;
  return _getRedirectResult(auth, resolver, false);
}
async function _getRedirectResult(auth, resolverExtern, bypassAuthState = false) {
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
  const authInternal = _castAuth(auth);
  const resolver = _withDefaultResolver(authInternal, resolverExtern);
  const action = new RedirectAction(authInternal, resolver, bypassAuthState);
  const result = await action.execute();
  if (result && !bypassAuthState) {
    delete result.user._redirectEventId;
    await authInternal._persistUserIfCurrent(result.user);
    await authInternal._setRedirectUser(null, resolverExtern);
  }
  return result;
}
async function prepareUserForRedirect(user) {
  const eventId = _generateEventId(`${user.uid}:::`);
  user._redirectEventId = eventId;
  await user.auth._setRedirectUser(user);
  await user.auth._persistUserIfCurrent(user);
  return eventId;
}
var EVENT_DUPLICATION_CACHE_DURATION_MS = 10 * 60 * 1e3;
var AuthEventManager = class {
  constructor(auth) {
    this.auth = auth;
    this.cachedEventUids = /* @__PURE__ */new Set();
    this.consumers = /* @__PURE__ */new Set();
    this.queuedRedirectEvent = null;
    this.hasHandledPotentialRedirect = false;
    this.lastProcessedEventTime = Date.now();
  }
  registerConsumer(authEventConsumer) {
    this.consumers.add(authEventConsumer);
    if (this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, authEventConsumer)) {
      this.sendToConsumer(this.queuedRedirectEvent, authEventConsumer);
      this.saveEventToCache(this.queuedRedirectEvent);
      this.queuedRedirectEvent = null;
    }
  }
  unregisterConsumer(authEventConsumer) {
    this.consumers.delete(authEventConsumer);
  }
  onEvent(event) {
    if (this.hasEventBeenHandled(event)) {
      return false;
    }
    let handled = false;
    this.consumers.forEach(consumer => {
      if (this.isEventForConsumer(event, consumer)) {
        handled = true;
        this.sendToConsumer(event, consumer);
        this.saveEventToCache(event);
      }
    });
    if (this.hasHandledPotentialRedirect || !isRedirectEvent(event)) {
      return handled;
    }
    this.hasHandledPotentialRedirect = true;
    if (!handled) {
      this.queuedRedirectEvent = event;
      handled = true;
    }
    return handled;
  }
  sendToConsumer(event, consumer) {
    var _a;
    if (event.error && !isNullRedirectEvent(event)) {
      const code = ((_a = event.error.code) === null || _a === void 0 ? void 0 : _a.split("auth/")[1]) || "internal-error";
      consumer.onError(_createError(this.auth, code));
    } else {
      consumer.onAuthEvent(event);
    }
  }
  isEventForConsumer(event, consumer) {
    const eventIdMatches = consumer.eventId === null || !!event.eventId && event.eventId === consumer.eventId;
    return consumer.filter.includes(event.type) && eventIdMatches;
  }
  hasEventBeenHandled(event) {
    if (Date.now() - this.lastProcessedEventTime >= EVENT_DUPLICATION_CACHE_DURATION_MS) {
      this.cachedEventUids.clear();
    }
    return this.cachedEventUids.has(eventUid(event));
  }
  saveEventToCache(event) {
    this.cachedEventUids.add(eventUid(event));
    this.lastProcessedEventTime = Date.now();
  }
};
function eventUid(e) {
  return [e.type, e.eventId, e.sessionId, e.tenantId].filter(v => v).join("-");
}
function isNullRedirectEvent({
  type,
  error
}) {
  return type === "unknown" && (error === null || error === void 0 ? void 0 : error.code) === `auth/${"no-auth-event"}`;
}
function isRedirectEvent(event) {
  switch (event.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return true;
    case "unknown":
      return isNullRedirectEvent(event);
    default:
      return false;
  }
}
async function _getProjectConfig(auth, request = {}) {
  return _performApiRequest(auth, "GET", "/v1/projects", request);
}
var IP_ADDRESS_REGEX = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
var HTTP_REGEX = /^https?/;
async function _validateOrigin(auth) {
  if (auth.config.emulator) {
    return;
  }
  const {
    authorizedDomains
  } = await _getProjectConfig(auth);
  for (const domain of authorizedDomains) {
    try {
      if (matchDomain(domain)) {
        return;
      }
    } catch (_a) {}
  }
  _fail(auth, "unauthorized-domain"
  /* AuthErrorCode.INVALID_ORIGIN */);
}
function matchDomain(expected) {
  const currentUrl = _getCurrentUrl();
  const {
    protocol,
    hostname
  } = new URL(currentUrl);
  if (expected.startsWith("chrome-extension://")) {
    const ceUrl = new URL(expected);
    if (ceUrl.hostname === "" && hostname === "") {
      return protocol === "chrome-extension:" && expected.replace("chrome-extension://", "") === currentUrl.replace("chrome-extension://", "");
    }
    return protocol === "chrome-extension:" && ceUrl.hostname === hostname;
  }
  if (!HTTP_REGEX.test(protocol)) {
    return false;
  }
  if (IP_ADDRESS_REGEX.test(expected)) {
    return hostname === expected;
  }
  const escapedDomainPattern = expected.replace(/\./g, "\\.");
  const re = new RegExp("^(.+\\." + escapedDomainPattern + "|" + escapedDomainPattern + ")$", "i");
  return re.test(hostname);
}
var NETWORK_TIMEOUT = new Delay(3e4, 6e4);
function resetUnloadedGapiModules() {
  const beacon = _window().___jsl;
  if (beacon === null || beacon === void 0 ? void 0 : beacon.H) {
    for (const hint of Object.keys(beacon.H)) {
      beacon.H[hint].r = beacon.H[hint].r || [];
      beacon.H[hint].L = beacon.H[hint].L || [];
      beacon.H[hint].r = [...beacon.H[hint].L];
      if (beacon.CP) {
        for (let i = 0; i < beacon.CP.length; i++) {
          beacon.CP[i] = null;
        }
      }
    }
  }
}
function loadGapi(auth) {
  return new Promise((resolve, reject) => {
    var _a, _b, _c;
    function loadGapiIframe() {
      resetUnloadedGapiModules();
      gapi.load("gapi.iframes", {
        callback: () => {
          resolve(gapi.iframes.getContext());
        },
        ontimeout: () => {
          resetUnloadedGapiModules();
          reject(_createError(auth, "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */));
        },
        timeout: NETWORK_TIMEOUT.get()
      });
    }
    if ((_b = (_a = _window().gapi) === null || _a === void 0 ? void 0 : _a.iframes) === null || _b === void 0 ? void 0 : _b.Iframe) {
      resolve(gapi.iframes.getContext());
    } else if (!!((_c = _window().gapi) === null || _c === void 0 ? void 0 : _c.load)) {
      loadGapiIframe();
    } else {
      const cbName = _generateCallbackName("iframefcb");
      _window()[cbName] = () => {
        if (!!gapi.load) {
          loadGapiIframe();
        } else {
          reject(_createError(auth, "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */));
        }
      };
      return _loadJS(`${_gapiScriptUrl()}?onload=${cbName}`).catch(e => reject(e));
    }
  }).catch(error => {
    cachedGApiLoader = null;
    throw error;
  });
}
var cachedGApiLoader = null;
function _loadGapi(auth) {
  cachedGApiLoader = cachedGApiLoader || loadGapi(auth);
  return cachedGApiLoader;
}
var PING_TIMEOUT = new Delay(5e3, 15e3);
var IFRAME_PATH = "__/auth/iframe";
var EMULATED_IFRAME_PATH = "emulator/auth/iframe";
var IFRAME_ATTRIBUTES = {
  style: {
    position: "absolute",
    top: "-100px",
    width: "1px",
    height: "1px"
  },
  "aria-hidden": "true",
  tabindex: "-1"
};
var EID_FROM_APIHOST = /* @__PURE__ */new Map([["identitytoolkit.googleapis.com", "p"],
// production
["staging-identitytoolkit.sandbox.googleapis.com", "s"],
// staging
["test-identitytoolkit.sandbox.googleapis.com", "t"]
// test
]);
function getIframeUrl(auth) {
  const config = auth.config;
  _assert(config.authDomain, auth, "auth-domain-config-required"
  /* AuthErrorCode.MISSING_AUTH_DOMAIN */);
  const url = config.emulator ? _emulatorUrl(config, EMULATED_IFRAME_PATH) : `https://${auth.config.authDomain}/${IFRAME_PATH}`;
  const params = {
    apiKey: config.apiKey,
    appName: auth.name,
    v: import_app.SDK_VERSION
  };
  const eid = EID_FROM_APIHOST.get(auth.config.apiHost);
  if (eid) {
    params.eid = eid;
  }
  const frameworks = auth._getFrameworks();
  if (frameworks.length) {
    params.fw = frameworks.join(",");
  }
  return `${url}?${(0, import_util.querystring)(params).slice(1)}`;
}
async function _openIframe(auth) {
  const context = await _loadGapi(auth);
  const gapi2 = _window().gapi;
  _assert(gapi2, auth, "internal-error"
  /* AuthErrorCode.INTERNAL_ERROR */);
  return context.open({
    where: document.body,
    url: getIframeUrl(auth),
    messageHandlersFilter: gapi2.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: IFRAME_ATTRIBUTES,
    dontclear: true
  }, iframe => new Promise(async (resolve, reject) => {
    await iframe.restyle({
      // Prevent iframe from closing on mouse out.
      setHideOnLeave: false
    });
    const networkError = _createError(auth, "network-request-failed"
    /* AuthErrorCode.NETWORK_REQUEST_FAILED */);
    const networkErrorTimer = _window().setTimeout(() => {
      reject(networkError);
    }, PING_TIMEOUT.get());
    function clearTimerAndResolve() {
      _window().clearTimeout(networkErrorTimer);
      resolve(iframe);
    }
    iframe.ping(clearTimerAndResolve).then(clearTimerAndResolve, () => {
      reject(networkError);
    });
  }));
}
var BASE_POPUP_OPTIONS = {
  location: "yes",
  resizable: "yes",
  statusbar: "yes",
  toolbar: "no"
};
var DEFAULT_WIDTH = 500;
var DEFAULT_HEIGHT = 600;
var TARGET_BLANK = "_blank";
var FIREFOX_EMPTY_URL = "http://localhost";
var AuthPopup = class {
  constructor(window2) {
    this.window = window2;
    this.associatedEvent = null;
  }
  close() {
    if (this.window) {
      try {
        this.window.close();
      } catch (e) {}
    }
  }
};
function _open(auth, url, name2, width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT) {
  const top = Math.max((window.screen.availHeight - height) / 2, 0).toString();
  const left = Math.max((window.screen.availWidth - width) / 2, 0).toString();
  let target = "";
  const options = Object.assign(Object.assign({}, BASE_POPUP_OPTIONS), {
    width: width.toString(),
    height: height.toString(),
    top,
    left
  });
  const ua = (0, import_util.getUA)().toLowerCase();
  if (name2) {
    target = _isChromeIOS(ua) ? TARGET_BLANK : name2;
  }
  if (_isFirefox(ua)) {
    url = url || FIREFOX_EMPTY_URL;
    options.scrollbars = "yes";
  }
  const optionsString = Object.entries(options).reduce((accum, [key, value]) => `${accum}${key}=${value},`, "");
  if (_isIOSStandalone(ua) && target !== "_self") {
    openAsNewWindowIOS(url || "", target);
    return new AuthPopup(null);
  }
  const newWin = window.open(url || "", target, optionsString);
  _assert(newWin, auth, "popup-blocked"
  /* AuthErrorCode.POPUP_BLOCKED */);
  try {
    newWin.focus();
  } catch (e) {}
  return new AuthPopup(newWin);
}
function openAsNewWindowIOS(url, target) {
  const el = document.createElement("a");
  el.href = url;
  el.target = target;
  const click = document.createEvent("MouseEvent");
  click.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 1, null);
  el.dispatchEvent(click);
}
var WIDGET_PATH = "__/auth/handler";
var EMULATOR_WIDGET_PATH = "emulator/auth/handler";
var FIREBASE_APP_CHECK_FRAGMENT_ID = encodeURIComponent("fac");
async function _getRedirectUrl(auth, provider, authType, redirectUrl, eventId, additionalParams) {
  _assert(auth.config.authDomain, auth, "auth-domain-config-required"
  /* AuthErrorCode.MISSING_AUTH_DOMAIN */);
  _assert(auth.config.apiKey, auth, "invalid-api-key"
  /* AuthErrorCode.INVALID_API_KEY */);
  const params = {
    apiKey: auth.config.apiKey,
    appName: auth.name,
    authType,
    redirectUrl,
    v: import_app.SDK_VERSION,
    eventId
  };
  if (provider instanceof FederatedAuthProvider) {
    provider.setDefaultLanguage(auth.languageCode);
    params.providerId = provider.providerId || "";
    if (!(0, import_util.isEmpty)(provider.getCustomParameters())) {
      params.customParameters = JSON.stringify(provider.getCustomParameters());
    }
    for (const [key, value] of Object.entries(additionalParams || {})) {
      params[key] = value;
    }
  }
  if (provider instanceof BaseOAuthProvider) {
    const scopes = provider.getScopes().filter(scope => scope !== "");
    if (scopes.length > 0) {
      params.scopes = scopes.join(",");
    }
  }
  if (auth.tenantId) {
    params.tid = auth.tenantId;
  }
  const paramsDict = params;
  for (const key of Object.keys(paramsDict)) {
    if (paramsDict[key] === void 0) {
      delete paramsDict[key];
    }
  }
  const appCheckToken = await auth._getAppCheckToken();
  const appCheckTokenFragment = appCheckToken ? `#${FIREBASE_APP_CHECK_FRAGMENT_ID}=${encodeURIComponent(appCheckToken)}` : "";
  return `${getHandlerBase(auth)}?${(0, import_util.querystring)(paramsDict).slice(1)}${appCheckTokenFragment}`;
}
function getHandlerBase({
  config
}) {
  if (!config.emulator) {
    return `https://${config.authDomain}/${WIDGET_PATH}`;
  }
  return _emulatorUrl(config, EMULATOR_WIDGET_PATH);
}
var WEB_STORAGE_SUPPORT_KEY = "webStorageSupport";
var BrowserPopupRedirectResolver = class {
  constructor() {
    this.eventManagers = {};
    this.iframes = {};
    this.originValidationPromises = {};
    this._redirectPersistence = browserSessionPersistence;
    this._completeRedirectFn = _getRedirectResult;
    this._overrideRedirectResult = _overrideRedirectResult;
  }
  // Wrapping in async even though we don't await anywhere in order
  // to make sure errors are raised as promise rejections
  async _openPopup(auth, provider, authType, eventId) {
    var _a;
    debugAssert((_a = this.eventManagers[auth._key()]) === null || _a === void 0 ? void 0 : _a.manager, "_initialize() not called before _openPopup()");
    const url = await _getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId);
    return _open(auth, url, _generateEventId());
  }
  async _openRedirect(auth, provider, authType, eventId) {
    await this._originValidation(auth);
    const url = await _getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId);
    _setWindowLocation(url);
    return new Promise(() => {});
  }
  _initialize(auth) {
    const key = auth._key();
    if (this.eventManagers[key]) {
      const {
        manager,
        promise: promise2
      } = this.eventManagers[key];
      if (manager) {
        return Promise.resolve(manager);
      } else {
        debugAssert(promise2, "If manager is not set, promise should be");
        return promise2;
      }
    }
    const promise = this.initAndGetManager(auth);
    this.eventManagers[key] = {
      promise
    };
    promise.catch(() => {
      delete this.eventManagers[key];
    });
    return promise;
  }
  async initAndGetManager(auth) {
    const iframe = await _openIframe(auth);
    const manager = new AuthEventManager(auth);
    iframe.register("authEvent", iframeEvent => {
      _assert(iframeEvent === null || iframeEvent === void 0 ? void 0 : iframeEvent.authEvent, auth, "invalid-auth-event"
      /* AuthErrorCode.INVALID_AUTH_EVENT */);
      const handled = manager.onEvent(iframeEvent.authEvent);
      return {
        status: handled ? "ACK" : "ERROR"
        /* GapiOutcome.ERROR */
      };
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
    this.eventManagers[auth._key()] = {
      manager
    };
    this.iframes[auth._key()] = iframe;
    return manager;
  }
  _isIframeWebStorageSupported(auth, cb) {
    const iframe = this.iframes[auth._key()];
    iframe.send(WEB_STORAGE_SUPPORT_KEY, {
      type: WEB_STORAGE_SUPPORT_KEY
    }, result => {
      var _a;
      const isSupported = (_a = result === null || result === void 0 ? void 0 : result[0]) === null || _a === void 0 ? void 0 : _a[WEB_STORAGE_SUPPORT_KEY];
      if (isSupported !== void 0) {
        cb(!!isSupported);
      }
      _fail(auth, "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */);
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  }
  _originValidation(auth) {
    const key = auth._key();
    if (!this.originValidationPromises[key]) {
      this.originValidationPromises[key] = _validateOrigin(auth);
    }
    return this.originValidationPromises[key];
  }
  get _shouldInitProactively() {
    return _isMobileBrowser() || _isSafari() || _isIOS();
  }
};
var browserPopupRedirectResolver = BrowserPopupRedirectResolver;
var MultiFactorAssertionImpl = class {
  constructor(factorId) {
    this.factorId = factorId;
  }
  _process(auth, session, displayName) {
    switch (session.type) {
      case "enroll":
        return this._finalizeEnroll(auth, session.credential, displayName);
      case "signin":
        return this._finalizeSignIn(auth, session.credential);
      default:
        return debugFail("unexpected MultiFactorSessionType");
    }
  }
};
var PhoneMultiFactorAssertionImpl = class _PhoneMultiFactorAssertionImpl extends MultiFactorAssertionImpl {
  constructor(credential) {
    super("phone"
    /* FactorId.PHONE */);
    this.credential = credential;
  }
  /** @internal */
  static _fromCredential(credential) {
    return new _PhoneMultiFactorAssertionImpl(credential);
  }
  /** @internal */
  _finalizeEnroll(auth, idToken, displayName) {
    return finalizeEnrollPhoneMfa(auth, {
      idToken,
      displayName,
      phoneVerificationInfo: this.credential._makeVerificationRequest()
    });
  }
  /** @internal */
  _finalizeSignIn(auth, mfaPendingCredential) {
    return finalizeSignInPhoneMfa(auth, {
      mfaPendingCredential,
      phoneVerificationInfo: this.credential._makeVerificationRequest()
    });
  }
};
var PhoneMultiFactorGenerator = class {
  constructor() {}
  /**
   * Provides a {@link PhoneMultiFactorAssertion} to confirm ownership of the phone second factor.
   *
   * @remarks
   * This method does not work in a Node.js environment.
   *
   * @param phoneAuthCredential - A credential provided by {@link PhoneAuthProvider.credential}.
   * @returns A {@link PhoneMultiFactorAssertion} which can be used with
   * {@link MultiFactorResolver.resolveSignIn}
   */
  static assertion(credential) {
    return PhoneMultiFactorAssertionImpl._fromCredential(credential);
  }
};
PhoneMultiFactorGenerator.FACTOR_ID = "phone";
var TotpMultiFactorGenerator = class {
  /**
   * Provides a {@link TotpMultiFactorAssertion} to confirm ownership of
   * the TOTP (time-based one-time password) second factor.
   * This assertion is used to complete enrollment in TOTP second factor.
   *
   * @param secret A {@link TotpSecret} containing the shared secret key and other TOTP parameters.
   * @param oneTimePassword One-time password from TOTP App.
   * @returns A {@link TotpMultiFactorAssertion} which can be used with
   * {@link MultiFactorUser.enroll}.
   */
  static assertionForEnrollment(secret, oneTimePassword) {
    return TotpMultiFactorAssertionImpl._fromSecret(secret, oneTimePassword);
  }
  /**
   * Provides a {@link TotpMultiFactorAssertion} to confirm ownership of the TOTP second factor.
   * This assertion is used to complete signIn with TOTP as the second factor.
   *
   * @param enrollmentId identifies the enrolled TOTP second factor.
   * @param oneTimePassword One-time password from TOTP App.
   * @returns A {@link TotpMultiFactorAssertion} which can be used with
   * {@link MultiFactorResolver.resolveSignIn}.
   */
  static assertionForSignIn(enrollmentId, oneTimePassword) {
    return TotpMultiFactorAssertionImpl._fromEnrollmentId(enrollmentId, oneTimePassword);
  }
  /**
   * Returns a promise to {@link TotpSecret} which contains the TOTP shared secret key and other parameters.
   * Creates a TOTP secret as part of enrolling a TOTP second factor.
   * Used for generating a QR code URL or inputting into a TOTP app.
   * This method uses the auth instance corresponding to the user in the multiFactorSession.
   *
   * @param session The {@link MultiFactorSession} that the user is part of.
   * @returns A promise to {@link TotpSecret}.
   */
  static async generateSecret(session) {
    var _a;
    const mfaSession = session;
    _assert(typeof ((_a = mfaSession.user) === null || _a === void 0 ? void 0 : _a.auth) !== "undefined", "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */);
    const response = await startEnrollTotpMfa(mfaSession.user.auth, {
      idToken: mfaSession.credential,
      totpEnrollmentInfo: {}
    });
    return TotpSecret._fromStartTotpMfaEnrollmentResponse(response, mfaSession.user.auth);
  }
};
TotpMultiFactorGenerator.FACTOR_ID = "totp";
var TotpMultiFactorAssertionImpl = class _TotpMultiFactorAssertionImpl extends MultiFactorAssertionImpl {
  constructor(otp, enrollmentId, secret) {
    super("totp"
    /* FactorId.TOTP */);
    this.otp = otp;
    this.enrollmentId = enrollmentId;
    this.secret = secret;
  }
  /** @internal */
  static _fromSecret(secret, otp) {
    return new _TotpMultiFactorAssertionImpl(otp, void 0, secret);
  }
  /** @internal */
  static _fromEnrollmentId(enrollmentId, otp) {
    return new _TotpMultiFactorAssertionImpl(otp, enrollmentId);
  }
  /** @internal */
  async _finalizeEnroll(auth, idToken, displayName) {
    _assert(typeof this.secret !== "undefined", auth, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */);
    return finalizeEnrollTotpMfa(auth, {
      idToken,
      displayName,
      totpVerificationInfo: this.secret._makeTotpVerificationInfo(this.otp)
    });
  }
  /** @internal */
  async _finalizeSignIn(auth, mfaPendingCredential) {
    _assert(this.enrollmentId !== void 0 && this.otp !== void 0, auth, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */);
    const totpVerificationInfo = {
      verificationCode: this.otp
    };
    return finalizeSignInTotpMfa(auth, {
      mfaPendingCredential,
      mfaEnrollmentId: this.enrollmentId,
      totpVerificationInfo
    });
  }
};
var TotpSecret = class _TotpSecret {
  // The public members are declared outside the constructor so the docs can be generated.
  constructor(secretKey, hashingAlgorithm, codeLength, codeIntervalSeconds, enrollmentCompletionDeadline, sessionInfo, auth) {
    this.sessionInfo = sessionInfo;
    this.auth = auth;
    this.secretKey = secretKey;
    this.hashingAlgorithm = hashingAlgorithm;
    this.codeLength = codeLength;
    this.codeIntervalSeconds = codeIntervalSeconds;
    this.enrollmentCompletionDeadline = enrollmentCompletionDeadline;
  }
  /** @internal */
  static _fromStartTotpMfaEnrollmentResponse(response, auth) {
    return new _TotpSecret(response.totpSessionInfo.sharedSecretKey, response.totpSessionInfo.hashingAlgorithm, response.totpSessionInfo.verificationCodeLength, response.totpSessionInfo.periodSec, new Date(response.totpSessionInfo.finalizeEnrollmentTime).toUTCString(), response.totpSessionInfo.sessionInfo, auth);
  }
  /** @internal */
  _makeTotpVerificationInfo(otp) {
    return {
      sessionInfo: this.sessionInfo,
      verificationCode: otp
    };
  }
  /**
   * Returns a QR code URL as described in
   * https://github.com/google/google-authenticator/wiki/Key-Uri-Format
   * This can be displayed to the user as a QR code to be scanned into a TOTP app like Google Authenticator.
   * If the optional parameters are unspecified, an accountName of <userEmail> and issuer of <firebaseAppName> are used.
   *
   * @param accountName the name of the account/app along with a user identifier.
   * @param issuer issuer of the TOTP (likely the app name).
   * @returns A QR code URL string.
   */
  generateQrCodeUrl(accountName, issuer) {
    var _a;
    let useDefaults = false;
    if (_isEmptyString(accountName) || _isEmptyString(issuer)) {
      useDefaults = true;
    }
    if (useDefaults) {
      if (_isEmptyString(accountName)) {
        accountName = ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.email) || "unknownuser";
      }
      if (_isEmptyString(issuer)) {
        issuer = this.auth.name;
      }
    }
    return `otpauth://totp/${issuer}:${accountName}?secret=${this.secretKey}&issuer=${issuer}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`;
  }
};
function _isEmptyString(input) {
  return typeof input === "undefined" || (input === null || input === void 0 ? void 0 : input.length) === 0;
}
var name = "@firebase/auth";
var version = "1.10.1";
var AuthInterop = class {
  constructor(auth) {
    this.auth = auth;
    this.internalListeners = /* @__PURE__ */new Map();
  }
  getUid() {
    var _a;
    this.assertAuthConfigured();
    return ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.uid) || null;
  }
  async getToken(forceRefresh) {
    this.assertAuthConfigured();
    await this.auth._initializationPromise;
    if (!this.auth.currentUser) {
      return null;
    }
    const accessToken = await this.auth.currentUser.getIdToken(forceRefresh);
    return {
      accessToken
    };
  }
  addAuthTokenListener(listener) {
    this.assertAuthConfigured();
    if (this.internalListeners.has(listener)) {
      return;
    }
    const unsubscribe = this.auth.onIdTokenChanged(user => {
      listener((user === null || user === void 0 ? void 0 : user.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(listener, unsubscribe);
    this.updateProactiveRefresh();
  }
  removeAuthTokenListener(listener) {
    this.assertAuthConfigured();
    const unsubscribe = this.internalListeners.get(listener);
    if (!unsubscribe) {
      return;
    }
    this.internalListeners.delete(listener);
    unsubscribe();
    this.updateProactiveRefresh();
  }
  assertAuthConfigured() {
    _assert(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth"
    /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */);
  }
  updateProactiveRefresh() {
    if (this.internalListeners.size > 0) {
      this.auth._startProactiveRefresh();
    } else {
      this.auth._stopProactiveRefresh();
    }
  }
};
function getVersionForPlatform(clientPlatform) {
  switch (clientPlatform) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    case "WebExtension":
      return "web-extension";
    default:
      return void 0;
  }
}
function registerAuth(clientPlatform) {
  (0, import_app._registerComponent)(new import_component.Component("auth", (container, {
    options: deps
  }) => {
    const app = container.getProvider("app").getImmediate();
    const heartbeatServiceProvider = container.getProvider("heartbeat");
    const appCheckServiceProvider = container.getProvider("app-check-internal");
    const {
      apiKey,
      authDomain
    } = app.options;
    _assert(apiKey && !apiKey.includes(":"), "invalid-api-key", {
      appName: app.name
    });
    const config = {
      apiKey,
      authDomain,
      clientPlatform,
      apiHost: "identitytoolkit.googleapis.com",
      tokenApiHost: "securetoken.googleapis.com",
      apiScheme: "https",
      sdkClientVersion: _getClientVersion(clientPlatform)
    };
    const authInstance = new AuthImpl(app, heartbeatServiceProvider, appCheckServiceProvider, config);
    _initializeAuthInstance(authInstance, deps);
    return authInstance;
  }, "PUBLIC"
  /* ComponentType.PUBLIC */).setInstantiationMode("EXPLICIT"
  /* InstantiationMode.EXPLICIT */).setInstanceCreatedCallback((container, _instanceIdentifier, _instance) => {
    const authInternalProvider = container.getProvider("auth-internal"
    /* _ComponentName.AUTH_INTERNAL */);
    authInternalProvider.initialize();
  }));
  (0, import_app._registerComponent)(new import_component.Component("auth-internal", container => {
    const auth = _castAuth(container.getProvider("auth"
    /* _ComponentName.AUTH */).getImmediate());
    return (auth2 => new AuthInterop(auth2))(auth);
  }, "PRIVATE"
  /* ComponentType.PRIVATE */).setInstantiationMode("EXPLICIT"
  /* InstantiationMode.EXPLICIT */));
  (0, import_app.registerVersion)(name, version, getVersionForPlatform(clientPlatform));
  (0, import_app.registerVersion)(name, version, "esm2017");
}
var DEFAULT_ID_TOKEN_MAX_AGE = 5 * 60;
var authIdTokenMaxAge = (0, import_util.getExperimentalSetting)("authIdTokenMaxAge") || DEFAULT_ID_TOKEN_MAX_AGE;
var lastPostedIdToken = null;
var mintCookieFactory = url => async user => {
  const idTokenResult = user && (await user.getIdTokenResult());
  const idTokenAge = idTokenResult && ((/* @__PURE__ */new Date()).getTime() - Date.parse(idTokenResult.issuedAtTime)) / 1e3;
  if (idTokenAge && idTokenAge > authIdTokenMaxAge) {
    return;
  }
  const idToken = idTokenResult === null || idTokenResult === void 0 ? void 0 : idTokenResult.token;
  if (lastPostedIdToken === idToken) {
    return;
  }
  lastPostedIdToken = idToken;
  await fetch(url, {
    method: idToken ? "POST" : "DELETE",
    headers: idToken ? {
      "Authorization": `Bearer ${idToken}`
    } : {}
  });
};
function getAuth(app = (0, import_app.getApp)()) {
  const provider = (0, import_app._getProvider)(app, "auth");
  if (provider.isInitialized()) {
    return provider.getImmediate();
  }
  const auth = initializeAuth(app, {
    popupRedirectResolver: browserPopupRedirectResolver,
    persistence: [indexedDBLocalPersistence, browserLocalPersistence, browserSessionPersistence]
  });
  const authTokenSyncPath = (0, import_util.getExperimentalSetting)("authTokenSyncURL");
  if (authTokenSyncPath && typeof isSecureContext === "boolean" && isSecureContext) {
    const authTokenSyncUrl = new URL(authTokenSyncPath, location.origin);
    if (location.origin === authTokenSyncUrl.origin) {
      const mintCookie = mintCookieFactory(authTokenSyncUrl.toString());
      beforeAuthStateChanged(auth, mintCookie, () => mintCookie(auth.currentUser));
      onIdTokenChanged(auth, user => mintCookie(user));
    }
  }
  const authEmulatorHost = (0, import_util.getDefaultEmulatorHost)("auth");
  if (authEmulatorHost) {
    connectAuthEmulator(auth, `http://${authEmulatorHost}`);
  }
  return auth;
}
function getScriptParentElement() {
  var _a, _b;
  return (_b = (_a = document.getElementsByTagName("head")) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : document;
}
_setExternalJSProvider({
  loadJS(url) {
    return new Promise((resolve, reject) => {
      const el = document.createElement("script");
      el.setAttribute("src", url);
      el.onload = resolve;
      el.onerror = e => {
        const error = _createError("internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */);
        error.customData = e;
        reject(error);
      };
      el.type = "text/javascript";
      el.charset = "UTF-8";
      getScriptParentElement().appendChild(el);
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
});
registerAuth("Browser"
/* ClientPlatform.BROWSER */);

// node_modules/@firebase/auth/dist/esm2017/index.js
var import_app2 = require("@firebase/app@0.11.5");
var import_util2 = require("@firebase/util@1.11.0");
var import_logger2 = require("@firebase/logger@0.4.4");
var import_tslib2 = require("tslib@2.8.1");
var import_component2 = require("@firebase/component@0.6.13");
/*! Bundled license information:

@firebase/auth/dist/esm2017/index-9ae71ce3.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZmlyZWJhc2UvYXV0aC4xLjEwLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21vZGVsL2VudW1fbWFwcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9lcnJvcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9sb2cudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9hc3NlcnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9sb2NhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL25hdmlnYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2RlbGF5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZW11bGF0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9mZXRjaF9wcm92aWRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2Vycm9ycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9yZWNhcHRjaGEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvYWNjb3VudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3RpbWUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9pZF90b2tlbl9yZXN1bHQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9pbnZhbGlkYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9wcm9hY3RpdmVfcmVmcmVzaC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfbWV0YWRhdGEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9yZWxvYWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi90b2tlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3Rva2VuX21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci91c2VyX2ltcGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9pbnN0YW50aWF0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcGVyc2lzdGVuY2UvaW5fbWVtb3J5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3BlcnNpc3RlbmNlL3BlcnNpc3RlbmNlX3VzZXJfbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2Jyb3dzZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC92ZXJzaW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvbWlkZGxld2FyZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL3Bhc3N3b3JkX3BvbGljeS9nZXRfcGFzc3dvcmRfcG9saWN5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvcGFzc3dvcmRfcG9saWN5X2ltcGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9hdXRoX2ltcGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbG9hZF9qcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX21vY2sudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV9lbnRlcnByaXNlX3ZlcmlmaWVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvaW5pdGlhbGl6ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2VtdWxhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL2F1dGhfY3JlZGVudGlhbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9lbWFpbF9saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vaWRwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL29hdXRoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vc21zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2FjdGlvbl9jb2RlX3VybC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZW1haWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2ZlZGVyYXRlZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvb2F1dGgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2ZhY2Vib29rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9nb29nbGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2dpdGh1Yi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9zYW1sLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9zYW1sLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy90d2l0dGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vc2lnbl91cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfY3JlZGVudGlhbF9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYW5vbnltb3VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX2Vycm9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvcHJvdmlkZXJzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvbGlua191bmxpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9yZWF1dGhlbnRpY2F0ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2NyZWRlbnRpYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9jdXN0b21fdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9jdXN0b21fdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2FjdGlvbl9jb2RlX3NldHRpbmdzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWxfYW5kX3Bhc3N3b3JkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWxfbGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2NyZWF0ZV9hdXRoX3VyaS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L3Byb2ZpbGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9hY2NvdW50X2luZm8udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9hZGRpdGlvbmFsX3VzZXJfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9zZXNzaW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX3Jlc29sdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L21mYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV91c2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3BlcnNpc3RlbmNlL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2Jyb3dzZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2UvbG9jYWxfc3RvcmFnZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9jb29raWVfc3RvcmFnZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9zZXNzaW9uX3N0b3JhZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWVzc2FnZWNoYW5uZWwvcHJvbWlzZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZXNzYWdlY2hhbm5lbC9yZWNlaXZlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2V2ZW50X2lkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21lc3NhZ2VjaGFubmVsL3NlbmRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9hdXRoX3dpbmRvdy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci91dGlsL3dvcmtlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9pbmRleGVkX2RiLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vbWZhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfbG9hZGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfdmVyaWZpZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvc3RyYXRlZ2llcy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wcm92aWRlcnMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9yZXNvbHZlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2lkcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2Fic3RyYWN0X3BvcHVwX3JlZGlyZWN0X29wZXJhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9zdHJhdGVnaWVzL3BvcHVwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvcmVkaXJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvc3RyYXRlZ2llcy9yZWRpcmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2F1dGhfZXZlbnRfbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL3Byb2plY3RfY29uZmlnL2dldF9wcm9qZWN0X2NvbmZpZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3ZhbGlkYXRlX29yaWdpbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9pZnJhbWUvZ2FwaS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9pZnJhbWUvaWZyYW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3V0aWwvcG9wdXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9oYW5kbGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BvcHVwX3JlZGlyZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX2Fzc2VydGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZmEvYXNzZXJ0aW9ucy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL2Fzc2VydGlvbnMvdG90cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2ZpcmViYXNlX2ludGVybmFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvcmVnaXN0ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvZGlzdC9lc20yMDE3L2luZGV4LmpzIl0sIm5hbWVzIjpbImF1dGhfMV8xMF8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkFjdGlvbkNvZGVPcGVyYXRpb24iLCJBY3Rpb25Db2RlVVJMIiwiQXV0aENyZWRlbnRpYWwiLCJBdXRoRXJyb3JDb2RlcyIsIkFVVEhfRVJST1JfQ09ERVNfTUFQX0RPX05PVF9VU0VfSU5URVJOQUxMWSIsIkVtYWlsQXV0aENyZWRlbnRpYWwiLCJFbWFpbEF1dGhQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiRmFjdG9ySWQiLCJHaXRodWJBdXRoUHJvdmlkZXIiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJPQXV0aENyZWRlbnRpYWwiLCJPQXV0aFByb3ZpZGVyIiwiT3BlcmF0aW9uVHlwZSIsIlBob25lQXV0aENyZWRlbnRpYWwiLCJQaG9uZUF1dGhQcm92aWRlciIsIlBob25lTXVsdGlGYWN0b3JHZW5lcmF0b3IiLCJQcm92aWRlcklkIiwiUmVjYXB0Y2hhVmVyaWZpZXIiLCJTQU1MQXV0aFByb3ZpZGVyIiwiU2lnbkluTWV0aG9kIiwiVG90cE11bHRpRmFjdG9yR2VuZXJhdG9yIiwiVG90cFNlY3JldCIsIlR3aXR0ZXJBdXRoUHJvdmlkZXIiLCJhcHBseUFjdGlvbkNvZGUiLCJiZWZvcmVBdXRoU3RhdGVDaGFuZ2VkIiwiYnJvd3NlckNvb2tpZVBlcnNpc3RlbmNlIiwiYnJvd3NlckxvY2FsUGVyc2lzdGVuY2UiLCJicm93c2VyUG9wdXBSZWRpcmVjdFJlc29sdmVyIiwiYnJvd3NlclNlc3Npb25QZXJzaXN0ZW5jZSIsImNoZWNrQWN0aW9uQ29kZSIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwiY29ubmVjdEF1dGhFbXVsYXRvciIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImRlYnVnRXJyb3JNYXAiLCJkZWxldGVVc2VyIiwiZmV0Y2hTaWduSW5NZXRob2RzRm9yRW1haWwiLCJnZXRBZGRpdGlvbmFsVXNlckluZm8iLCJnZXRBdXRoIiwiZ2V0SWRUb2tlbiIsImdldElkVG9rZW5SZXN1bHQiLCJnZXRNdWx0aUZhY3RvclJlc29sdmVyIiwiZ2V0UmVkaXJlY3RSZXN1bHQiLCJpbk1lbW9yeVBlcnNpc3RlbmNlIiwiaW5kZXhlZERCTG9jYWxQZXJzaXN0ZW5jZSIsImluaXRpYWxpemVBdXRoIiwiaW5pdGlhbGl6ZVJlY2FwdGNoYUNvbmZpZyIsImlzU2lnbkluV2l0aEVtYWlsTGluayIsImxpbmtXaXRoQ3JlZGVudGlhbCIsImxpbmtXaXRoUGhvbmVOdW1iZXIiLCJsaW5rV2l0aFBvcHVwIiwibGlua1dpdGhSZWRpcmVjdCIsIm11bHRpRmFjdG9yIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwib25JZFRva2VuQ2hhbmdlZCIsInBhcnNlQWN0aW9uQ29kZVVSTCIsInByb2RFcnJvck1hcCIsInJlYXV0aGVudGljYXRlV2l0aENyZWRlbnRpYWwiLCJyZWF1dGhlbnRpY2F0ZVdpdGhQaG9uZU51bWJlciIsInJlYXV0aGVudGljYXRlV2l0aFBvcHVwIiwicmVhdXRoZW50aWNhdGVXaXRoUmVkaXJlY3QiLCJyZWxvYWQiLCJyZXZva2VBY2Nlc3NUb2tlbiIsInNlbmRFbWFpbFZlcmlmaWNhdGlvbiIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJzZW5kU2lnbkluTGlua1RvRW1haWwiLCJzZXRQZXJzaXN0ZW5jZSIsInNpZ25JbkFub255bW91c2x5Iiwic2lnbkluV2l0aENyZWRlbnRpYWwiLCJzaWduSW5XaXRoQ3VzdG9tVG9rZW4iLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbExpbmsiLCJzaWduSW5XaXRoUGhvbmVOdW1iZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJzaWduSW5XaXRoUmVkaXJlY3QiLCJzaWduT3V0IiwidW5saW5rIiwidXBkYXRlQ3VycmVudFVzZXIiLCJ1cGRhdGVFbWFpbCIsInVwZGF0ZVBhc3N3b3JkIiwidXBkYXRlUGhvbmVOdW1iZXIiLCJ1cGRhdGVQcm9maWxlIiwidXNlRGV2aWNlTGFuZ3VhZ2UiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwidmVyaWZ5QmVmb3JlVXBkYXRlRW1haWwiLCJ2ZXJpZnlQYXNzd29yZFJlc2V0Q29kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJQSE9ORSIsIlRPVFAiLCJGQUNFQk9PSyIsIkdJVEhVQiIsIkdPT0dMRSIsIlBBU1NXT1JEIiwiVFdJVFRFUiIsIkVNQUlMX0xJTksiLCJFTUFJTF9QQVNTV09SRCIsIkxJTksiLCJSRUFVVEhFTlRJQ0FURSIsIlNJR05fSU4iLCJFTUFJTF9TSUdOSU4iLCJQQVNTV09SRF9SRVNFVCIsIlJFQ09WRVJfRU1BSUwiLCJSRVZFUlRfU0VDT05EX0ZBQ1RPUl9BRERJVElPTiIsIlZFUklGWV9BTkRfQ0hBTkdFX0VNQUlMIiwiVkVSSUZZX0VNQUlMIiwiX2RlYnVnRXJyb3JNYXAiLCJfcHJvZEVycm9yTWFwIiwiX0RFRkFVTFRfQVVUSF9FUlJPUl9GQUNUT1JZIiwiaW1wb3J0X3V0aWwiLCJFcnJvckZhY3RvcnkiLCJBRE1JTl9PTkxZX09QRVJBVElPTiIsIkFSR1VNRU5UX0VSUk9SIiwiQVBQX05PVF9BVVRIT1JJWkVEIiwiQVBQX05PVF9JTlNUQUxMRUQiLCJDQVBUQ0hBX0NIRUNLX0ZBSUxFRCIsIkNPREVfRVhQSVJFRCIsIkNPUkRPVkFfTk9UX1JFQURZIiwiQ09SU19VTlNVUFBPUlRFRCIsIkNSRURFTlRJQUxfQUxSRUFEWV9JTl9VU0UiLCJDUkVERU5USUFMX01JU01BVENIIiwiQ1JFREVOVElBTF9UT09fT0xEX0xPR0lOX0FHQUlOIiwiREVQRU5ERU5UX1NES19JTklUX0JFRk9SRV9BVVRIIiwiRFlOQU1JQ19MSU5LX05PVF9BQ1RJVkFURUQiLCJFTUFJTF9DSEFOR0VfTkVFRFNfVkVSSUZJQ0FUSU9OIiwiRU1BSUxfRVhJU1RTIiwiRU1VTEFUT1JfQ09ORklHX0ZBSUxFRCIsIkVYUElSRURfT09CX0NPREUiLCJFWFBJUkVEX1BPUFVQX1JFUVVFU1QiLCJJTlRFUk5BTF9FUlJPUiIsIklOVkFMSURfQVBJX0tFWSIsIklOVkFMSURfQVBQX0NSRURFTlRJQUwiLCJJTlZBTElEX0FQUF9JRCIsIklOVkFMSURfQVVUSCIsIklOVkFMSURfQVVUSF9FVkVOVCIsIklOVkFMSURfQ0VSVF9IQVNIIiwiSU5WQUxJRF9DT0RFIiwiSU5WQUxJRF9DT05USU5VRV9VUkkiLCJJTlZBTElEX0NPUkRPVkFfQ09ORklHVVJBVElPTiIsIklOVkFMSURfQ1VTVE9NX1RPS0VOIiwiSU5WQUxJRF9EWU5BTUlDX0xJTktfRE9NQUlOIiwiSU5WQUxJRF9FTUFJTCIsIklOVkFMSURfRU1VTEFUT1JfU0NIRU1FIiwiSU5WQUxJRF9JRFBfUkVTUE9OU0UiLCJJTlZBTElEX0xPR0lOX0NSRURFTlRJQUxTIiwiSU5WQUxJRF9NRVNTQUdFX1BBWUxPQUQiLCJJTlZBTElEX01GQV9TRVNTSU9OIiwiSU5WQUxJRF9PQVVUSF9DTElFTlRfSUQiLCJJTlZBTElEX09BVVRIX1BST1ZJREVSIiwiSU5WQUxJRF9PT0JfQ09ERSIsIklOVkFMSURfT1JJR0lOIiwiSU5WQUxJRF9QQVNTV09SRCIsIklOVkFMSURfUEVSU0lTVEVOQ0UiLCJJTlZBTElEX1BIT05FX05VTUJFUiIsIklOVkFMSURfUFJPVklERVJfSUQiLCJJTlZBTElEX1JFQ0lQSUVOVF9FTUFJTCIsIklOVkFMSURfU0VOREVSIiwiSU5WQUxJRF9TRVNTSU9OX0lORk8iLCJJTlZBTElEX1RFTkFOVF9JRCIsIk1GQV9JTkZPX05PVF9GT1VORCIsIk1GQV9SRVFVSVJFRCIsIk1JU1NJTkdfQU5EUk9JRF9QQUNLQUdFX05BTUUiLCJNSVNTSU5HX0FQUF9DUkVERU5USUFMIiwiTUlTU0lOR19BVVRIX0RPTUFJTiIsIk1JU1NJTkdfQ09ERSIsIk1JU1NJTkdfQ09OVElOVUVfVVJJIiwiTUlTU0lOR19JRlJBTUVfU1RBUlQiLCJNSVNTSU5HX0lPU19CVU5ETEVfSUQiLCJNSVNTSU5HX09SX0lOVkFMSURfTk9OQ0UiLCJNSVNTSU5HX01GQV9JTkZPIiwiTUlTU0lOR19NRkFfU0VTU0lPTiIsIk1JU1NJTkdfUEhPTkVfTlVNQkVSIiwiTUlTU0lOR19TRVNTSU9OX0lORk8iLCJNT0RVTEVfREVTVFJPWUVEIiwiTkVFRF9DT05GSVJNQVRJT04iLCJORVRXT1JLX1JFUVVFU1RfRkFJTEVEIiwiTlVMTF9VU0VSIiwiTk9fQVVUSF9FVkVOVCIsIk5PX1NVQ0hfUFJPVklERVIiLCJPUEVSQVRJT05fTk9UX0FMTE9XRUQiLCJPUEVSQVRJT05fTk9UX1NVUFBPUlRFRCIsIlBPUFVQX0JMT0NLRUQiLCJQT1BVUF9DTE9TRURfQllfVVNFUiIsIlBST1ZJREVSX0FMUkVBRFlfTElOS0VEIiwiUVVPVEFfRVhDRUVERUQiLCJSRURJUkVDVF9DQU5DRUxMRURfQllfVVNFUiIsIlJFRElSRUNUX09QRVJBVElPTl9QRU5ESU5HIiwiUkVKRUNURURfQ1JFREVOVElBTCIsIlNFQ09ORF9GQUNUT1JfQUxSRUFEWV9FTlJPTExFRCIsIlNFQ09ORF9GQUNUT1JfTElNSVRfRVhDRUVERUQiLCJURU5BTlRfSURfTUlTTUFUQ0giLCJUSU1FT1VUIiwiVE9LRU5fRVhQSVJFRCIsIlRPT19NQU5ZX0FUVEVNUFRTX1RSWV9MQVRFUiIsIlVOQVVUSE9SSVpFRF9ET01BSU4iLCJVTlNVUFBPUlRFRF9GSVJTVF9GQUNUT1IiLCJVTlNVUFBPUlRFRF9QRVJTSVNURU5DRSIsIlVOU1VQUE9SVEVEX1RFTkFOVF9PUEVSQVRJT04iLCJVTlZFUklGSUVEX0VNQUlMIiwiVVNFUl9DQU5DRUxMRUQiLCJVU0VSX0RFTEVURUQiLCJVU0VSX0RJU0FCTEVEIiwiVVNFUl9NSVNNQVRDSCIsIlVTRVJfU0lHTkVEX09VVCIsIldFQUtfUEFTU1dPUkQiLCJXRUJfU1RPUkFHRV9VTlNVUFBPUlRFRCIsIkFMUkVBRFlfSU5JVElBTElaRUQiLCJSRUNBUFRDSEFfTk9UX0VOQUJMRUQiLCJNSVNTSU5HX1JFQ0FQVENIQV9UT0tFTiIsIklOVkFMSURfUkVDQVBUQ0hBX1RPS0VOIiwiSU5WQUxJRF9SRUNBUFRDSEFfQUNUSU9OIiwiTUlTU0lOR19DTElFTlRfVFlQRSIsIk1JU1NJTkdfUkVDQVBUQ0hBX1ZFUlNJT04iLCJJTlZBTElEX1JFQ0FQVENIQV9WRVJTSU9OIiwiSU5WQUxJRF9SRVFfVFlQRSIsIklOVkFMSURfSE9TVElOR19MSU5LX0RPTUFJTiIsImxvZ0NsaWVudCIsImltcG9ydF9sb2dnZXIiLCJMb2dnZXIiLCJfbG9nV2FybiIsIm1zZyIsImFyZ3MiLCJsb2dMZXZlbCIsIkxvZ0xldmVsIiwiV0FSTiIsIndhcm4iLCJpbXBvcnRfYXBwIiwiU0RLX1ZFUlNJT04iLCJfbG9nRXJyb3IiLCJFUlJPUiIsImVycm9yIiwiX2ZhaWwiLCJhdXRoT3JDb2RlIiwicmVzdCIsImNyZWF0ZUVycm9ySW50ZXJuYWwiLCJfY3JlYXRlRXJyb3IiLCJfZXJyb3JXaXRoQ3VzdG9tTWVzc2FnZSIsImF1dGgiLCJjb2RlIiwibWVzc2FnZSIsImVycm9yTWFwIiwiT2JqZWN0IiwiYXNzaWduIiwiZmFjdG9yeSIsImNyZWF0ZSIsImFwcE5hbWUiLCJuYW1lIiwiX3NlcnZlckFwcEN1cnJlbnRVc2VyT3BlcmF0aW9uTm90U3VwcG9ydGVkRXJyb3IiLCJfYXNzZXJ0SW5zdGFuY2VPZiIsIm9iamVjdCIsImluc3RhbmNlIiwiY29uc3RydWN0b3JJbnN0YW5jZSIsImNvbnN0cnVjdG9yIiwiZnVsbFBhcmFtcyIsInNsaWNlIiwiX2Vycm9yRmFjdG9yeSIsIl9hc3NlcnQiLCJhc3NlcnRpb24iLCJkZWJ1Z0ZhaWwiLCJmYWlsdXJlIiwiRXJyb3IiLCJkZWJ1Z0Fzc2VydCIsIl9nZXRDdXJyZW50VXJsIiwic2VsZiIsIl9hIiwibG9jYXRpb24iLCJocmVmIiwiX2lzSHR0cE9ySHR0cHMiLCJfZ2V0Q3VycmVudFNjaGVtZSIsInByb3RvY29sIiwiX2lzT25saW5lIiwibmF2aWdhdG9yIiwib25MaW5lIiwiaXNCcm93c2VyRXh0ZW5zaW9uIiwiX2dldFVzZXJMYW5ndWFnZSIsIm5hdmlnYXRvckxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2UiLCJEZWxheSIsInNob3J0RGVsYXkiLCJsb25nRGVsYXkiLCJpc01vYmlsZSIsImlzTW9iaWxlQ29yZG92YSIsImlzUmVhY3ROYXRpdmUiLCJnZXQiLCJNYXRoIiwibWluIiwiX2VtdWxhdG9yVXJsIiwiY29uZmlnIiwicGF0aCIsImVtdWxhdG9yIiwidXJsIiwic3RhcnRzV2l0aCIsIkZldGNoUHJvdmlkZXIiLCJpbml0aWFsaXplIiwiZmV0Y2hJbXBsIiwiaGVhZGVyc0ltcGwiLCJyZXNwb25zZUltcGwiLCJmZXRjaCIsImdsb2JhbFRoaXMiLCJoZWFkZXJzIiwiSGVhZGVycyIsInJlc3BvbnNlIiwiUmVzcG9uc2UiLCJTRVJWRVJfRVJST1JfTUFQIiwiQ29va2llQXV0aFByb3hpZWRFbmRwb2ludHMiLCJERUZBVUxUX0FQSV9USU1FT1VUX01TIiwiX2FkZFRpZElmTmVjZXNzYXJ5IiwicmVxdWVzdCIsInRlbmFudElkIiwiX3BlcmZvcm1BcGlSZXF1ZXN0IiwibWV0aG9kIiwiY3VzdG9tRXJyb3JNYXAiLCJfcGVyZm9ybUZldGNoV2l0aEVycm9ySGFuZGxpbmciLCJib2R5IiwicGFyYW1zIiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5IiwicXVlcnlzdHJpbmciLCJrZXkiLCJhcGlLZXkiLCJfZ2V0QWRkaXRpb25hbEhlYWRlcnMiLCJsYW5ndWFnZUNvZGUiLCJmZXRjaEFyZ3MiLCJpc0Nsb3VkZmxhcmVXb3JrZXIiLCJyZWZlcnJlclBvbGljeSIsIl9nZXRGaW5hbFRhcmdldCIsImFwaUhvc3QiLCJmZXRjaEZuIiwiX2NhbkluaXRFbXVsYXRvciIsIm5ldHdvcmtUaW1lb3V0IiwiTmV0d29ya1RpbWVvdXQiLCJQcm9taXNlIiwicmFjZSIsInByb21pc2UiLCJjbGVhck5ldHdvcmtUaW1lb3V0IiwianNvbiIsIl9tYWtlVGFnZ2VkRXJyb3IiLCJvayIsImVycm9yTWVzc2FnZSIsInNlcnZlckVycm9yQ29kZSIsInNlcnZlckVycm9yTWVzc2FnZSIsInNwbGl0IiwiYXV0aEVycm9yIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwiZSIsIkZpcmViYXNlRXJyb3IiLCJTdHJpbmciLCJfcGVyZm9ybVNpZ25JblJlcXVlc3QiLCJzZXJ2ZXJSZXNwb25zZSIsIl9zZXJ2ZXJSZXNwb25zZSIsImhvc3QiLCJiYXNlIiwiYXV0aEludGVybmFsIiwiZmluYWxUYXJnZXQiLCJhcGlTY2hlbWUiLCJpbmNsdWRlcyIsIl9wZXJzaXN0ZW5jZU1hbmFnZXJBdmFpbGFibGUiLCJfZ2V0UGVyc2lzdGVuY2VUeXBlIiwiY29va2llUGVyc2lzdGVuY2UiLCJfZ2V0UGVyc2lzdGVuY2UiLCJ0b1N0cmluZyIsIl9wYXJzZUVuZm9yY2VtZW50U3RhdGUiLCJlbmZvcmNlbWVudFN0YXRlU3RyIiwiY2xlYXJUaW1lb3V0IiwidGltZXIiLCJfIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImVycm9yUGFyYW1zIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImN1c3RvbURhdGEiLCJfdG9rZW5SZXNwb25zZSIsImlzVjIiLCJncmVjYXB0Y2hhIiwiZ2V0UmVzcG9uc2UiLCJpc0VudGVycHJpc2UiLCJlbnRlcnByaXNlIiwiUmVjYXB0Y2hhQ29uZmlnIiwic2l0ZUtleSIsInJlY2FwdGNoYUVuZm9yY2VtZW50U3RhdGUiLCJyZWNhcHRjaGFLZXkiLCJnZXRQcm92aWRlckVuZm9yY2VtZW50U3RhdGUiLCJwcm92aWRlclN0ciIsImxlbmd0aCIsInByb3ZpZGVyIiwiZW5mb3JjZW1lbnRTdGF0ZSIsImlzUHJvdmlkZXJFbmFibGVkIiwiaXNBbnlQcm92aWRlckVuYWJsZWQiLCJnZXRSZWNhcHRjaGFQYXJhbXMiLCJyZWNhcHRjaGFTaXRlS2V5IiwiZ2V0UmVjYXB0Y2hhQ29uZmlnIiwiZGVsZXRlQWNjb3VudCIsImRlbGV0ZUxpbmtlZEFjY291bnRzIiwiZ2V0QWNjb3VudEluZm8iLCJ1dGNUaW1lc3RhbXBUb0RhdGVTdHJpbmciLCJ1dGNUaW1lc3RhbXAiLCJkYXRlIiwiRGF0ZSIsIk51bWJlciIsImlzTmFOIiwiZ2V0VGltZSIsInRvVVRDU3RyaW5nIiwidXNlciIsImZvcmNlUmVmcmVzaCIsImdldE1vZHVsYXJJbnN0YW5jZSIsInVzZXJJbnRlcm5hbCIsInRva2VuIiwiY2xhaW1zIiwiX3BhcnNlVG9rZW4iLCJleHAiLCJhdXRoX3RpbWUiLCJpYXQiLCJmaXJlYmFzZSIsInNpZ25JblByb3ZpZGVyIiwiYXV0aFRpbWUiLCJzZWNvbmRzU3RyaW5nVG9NaWxsaXNlY29uZHMiLCJpc3N1ZWRBdFRpbWUiLCJleHBpcmF0aW9uVGltZSIsInNpZ25JblNlY29uZEZhY3RvciIsInNlY29uZHMiLCJhbGdvcml0aG0iLCJwYXlsb2FkIiwic2lnbmF0dXJlIiwiZGVjb2RlZCIsImJhc2U2NERlY29kZSIsInBhcnNlIiwiX3Rva2VuRXhwaXJlc0luIiwicGFyc2VkVG9rZW4iLCJfbG9nb3V0SWZJbnZhbGlkYXRlZCIsImJ5cGFzc0F1dGhTdGF0ZSIsImlzVXNlckludmFsaWRhdGVkIiwiY3VycmVudFVzZXIiLCJQcm9hY3RpdmVSZWZyZXNoIiwiaXNSdW5uaW5nIiwidGltZXJJZCIsImVycm9yQmFja29mZiIsIl9zdGFydCIsInNjaGVkdWxlIiwiX3N0b3AiLCJnZXRJbnRlcnZhbCIsIndhc0Vycm9yIiwiaW50ZXJ2YWwiLCJleHBUaW1lIiwic3RzVG9rZW5NYW5hZ2VyIiwibm93IiwibWF4IiwiaXRlcmF0aW9uIiwiVXNlck1ldGFkYXRhIiwiY3JlYXRlZEF0IiwibGFzdExvZ2luQXQiLCJfaW5pdGlhbGl6ZVRpbWUiLCJsYXN0U2lnbkluVGltZSIsImNyZWF0aW9uVGltZSIsIl9jb3B5IiwibWV0YWRhdGEiLCJ0b0pTT04iLCJfcmVsb2FkV2l0aG91dFNhdmluZyIsImlkVG9rZW4iLCJ1c2VycyIsImNvcmVBY2NvdW50IiwiX25vdGlmeVJlbG9hZExpc3RlbmVyIiwibmV3UHJvdmlkZXJEYXRhIiwicHJvdmlkZXJVc2VySW5mbyIsImV4dHJhY3RQcm92aWRlckRhdGEiLCJwcm92aWRlckRhdGEiLCJtZXJnZVByb3ZpZGVyRGF0YSIsIm9sZElzQW5vbnltb3VzIiwiaXNBbm9ueW1vdXMiLCJuZXdJc0Fub255bW91cyIsInBhc3N3b3JkSGFzaCIsInVwZGF0ZXMiLCJ1aWQiLCJsb2NhbElkIiwiZGlzcGxheU5hbWUiLCJwaG90b1VSTCIsInBob3RvVXJsIiwiZW1haWxWZXJpZmllZCIsIl9wZXJzaXN0VXNlcklmQ3VycmVudCIsIl9ub3RpZnlMaXN0ZW5lcnNJZkN1cnJlbnQiLCJvcmlnaW5hbCIsIm5ld0RhdGEiLCJkZWR1cGVkIiwiZmlsdGVyIiwibyIsInNvbWUiLCJuIiwicHJvdmlkZXJJZCIsInByb3ZpZGVycyIsIm1hcCIsImltcG9ydF90c2xpYiIsIl9fcmVzdCIsInJhd0lkIiwicmVxdWVzdFN0c1Rva2VuIiwicmVmcmVzaFRva2VuIiwidG9rZW5BcGlIb3N0IiwiYWNjZXNzVG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJleHBpcmVzSW4iLCJleHBpcmVzX2luIiwicmVmcmVzaF90b2tlbiIsInJldm9rZVRva2VuIiwiU3RzVG9rZW5NYW5hZ2VyIiwiX1N0c1Rva2VuTWFuYWdlciIsImlzRXhwaXJlZCIsInVwZGF0ZUZyb21TZXJ2ZXJSZXNwb25zZSIsInVwZGF0ZVRva2Vuc0FuZEV4cGlyYXRpb24iLCJ1cGRhdGVGcm9tSWRUb2tlbiIsImdldFRva2VuIiwicmVmcmVzaCIsImNsZWFyUmVmcmVzaFRva2VuIiwib2xkVG9rZW4iLCJleHBpcmVzSW5TZWMiLCJmcm9tSlNPTiIsIm1hbmFnZXIiLCJfYXNzaWduIiwiX2Nsb25lIiwiX3BlcmZvcm1SZWZyZXNoIiwiYXNzZXJ0U3RyaW5nT3JVbmRlZmluZWQiLCJVc2VySW1wbCIsIl9Vc2VySW1wbCIsIm9wdCIsInByb2FjdGl2ZVJlZnJlc2giLCJyZWxvYWRVc2VySW5mbyIsInJlbG9hZExpc3RlbmVyIiwidXNlckluZm8iLCJuZXdVc2VyIiwiX29uUmVsb2FkIiwiY2FsbGJhY2siLCJfc3RhcnRQcm9hY3RpdmVSZWZyZXNoIiwiX3N0b3BQcm9hY3RpdmVSZWZyZXNoIiwiX3VwZGF0ZVRva2Vuc0lmTmVjZXNzYXJ5IiwicmVsb2FkMiIsInRva2Vuc1JlZnJlc2hlZCIsImRlbGV0ZSIsIl9pc0ZpcmViYXNlU2VydmVyQXBwIiwiYXBwIiwiX3JlZGlyZWN0RXZlbnRJZCIsIl9mcm9tSlNPTiIsIl9iIiwiX2MiLCJfZCIsIl9lIiwiX2YiLCJfZyIsIl9oIiwicGxhaW5PYmplY3RUb2tlbk1hbmFnZXIiLCJBcnJheSIsImlzQXJyYXkiLCJfZnJvbUlkVG9rZW5SZXNwb25zZSIsImlkVG9rZW5SZXNwb25zZSIsIl9mcm9tR2V0QWNjb3VudEluZm9SZXNwb25zZSIsImluc3RhbmNlQ2FjaGUiLCJNYXAiLCJfZ2V0SW5zdGFuY2UiLCJjbHMiLCJGdW5jdGlvbiIsInNldCIsIkluTWVtb3J5UGVyc2lzdGVuY2UiLCJ0eXBlIiwic3RvcmFnZSIsIl9pc0F2YWlsYWJsZSIsIl9zZXQiLCJ2YWx1ZSIsIl9nZXQiLCJfcmVtb3ZlIiwiX2FkZExpc3RlbmVyIiwiX2tleSIsIl9saXN0ZW5lciIsIl9yZW1vdmVMaXN0ZW5lciIsIl9wZXJzaXN0ZW5jZUtleU5hbWUiLCJQZXJzaXN0ZW5jZVVzZXJNYW5hZ2VyIiwiX1BlcnNpc3RlbmNlVXNlck1hbmFnZXIiLCJwZXJzaXN0ZW5jZSIsInVzZXJLZXkiLCJuYW1lMiIsImZ1bGxVc2VyS2V5IiwiZnVsbFBlcnNpc3RlbmNlS2V5IiwiYm91bmRFdmVudEhhbmRsZXIiLCJfb25TdG9yYWdlRXZlbnQiLCJiaW5kIiwic2V0Q3VycmVudFVzZXIiLCJnZXRDdXJyZW50VXNlciIsImJsb2IiLCJjYXRjaCIsInJlbW92ZUN1cnJlbnRVc2VyIiwic2F2ZVBlcnNpc3RlbmNlRm9yUmVkaXJlY3QiLCJuZXdQZXJzaXN0ZW5jZSIsInBlcnNpc3RlbmNlSGllcmFyY2h5IiwiYXZhaWxhYmxlUGVyc2lzdGVuY2VzIiwiYWxsIiwic2VsZWN0ZWRQZXJzaXN0ZW5jZSIsInVzZXJUb01pZ3JhdGUiLCJtaWdyYXRpb25IaWVyYXJjaHkiLCJwIiwiX3Nob3VsZEFsbG93TWlncmF0aW9uIiwiX2dldEJyb3dzZXJOYW1lIiwidXNlckFnZW50IiwidWEiLCJfaXNJRU1vYmlsZSIsIl9pc0ZpcmVmb3giLCJfaXNCbGFja0JlcnJ5IiwiX2lzV2ViT1MiLCJfaXNTYWZhcmkiLCJfaXNDaHJvbWVJT1MiLCJfaXNBbmRyb2lkIiwicmUiLCJtYXRjaGVzIiwibWF0Y2giLCJnZXRVQSIsInRlc3QiLCJfaXNJT1MiLCJfaXNJT1M3T3I4IiwiX2lzSU9TU3RhbmRhbG9uZSIsIndpbmRvdyIsInN0YW5kYWxvbmUiLCJfaXNJRTEwIiwiaXNJRSIsImRvY3VtZW50IiwiZG9jdW1lbnRNb2RlIiwiX2lzTW9iaWxlQnJvd3NlciIsIl9nZXRDbGllbnRWZXJzaW9uIiwiY2xpZW50UGxhdGZvcm0iLCJmcmFtZXdvcmtzIiwicmVwb3J0ZWRQbGF0Zm9ybSIsInJlcG9ydGVkRnJhbWV3b3JrcyIsImpvaW4iLCJBdXRoTWlkZGxld2FyZVF1ZXVlIiwicXVldWUiLCJwdXNoQ2FsbGJhY2siLCJvbkFib3J0Iiwid3JhcHBlZENhbGxiYWNrIiwicmVzb2x2ZSIsInJlc3VsdCIsInB1c2giLCJpbmRleCIsInJ1bk1pZGRsZXdhcmUiLCJuZXh0VXNlciIsIm9uQWJvcnRTdGFjayIsImJlZm9yZVN0YXRlQ2FsbGJhY2siLCJyZXZlcnNlIiwib3JpZ2luYWxNZXNzYWdlIiwiX2dldFBhc3N3b3JkUG9saWN5IiwiTUlOSU1VTV9NSU5fUEFTU1dPUkRfTEVOR1RIIiwiUGFzc3dvcmRQb2xpY3lJbXBsIiwicmVzcG9uc2VPcHRpb25zIiwiY3VzdG9tU3RyZW5ndGhPcHRpb25zIiwibWluUGFzc3dvcmRMZW5ndGgiLCJtYXhQYXNzd29yZExlbmd0aCIsImNvbnRhaW5zTG93ZXJjYXNlQ2hhcmFjdGVyIiwiY29udGFpbnNMb3dlcmNhc2VMZXR0ZXIiLCJjb250YWluc1VwcGVyY2FzZUNoYXJhY3RlciIsImNvbnRhaW5zVXBwZXJjYXNlTGV0dGVyIiwiY29udGFpbnNOdW1lcmljQ2hhcmFjdGVyIiwiY29udGFpbnNOb25BbHBoYW51bWVyaWNDaGFyYWN0ZXIiLCJhbGxvd2VkTm9uQWxwaGFudW1lcmljQ2hhcmFjdGVycyIsImZvcmNlVXBncmFkZU9uU2lnbmluIiwic2NoZW1hVmVyc2lvbiIsInBhc3N3b3JkIiwic3RhdHVzIiwiaXNWYWxpZCIsInBhc3N3b3JkUG9saWN5IiwidmFsaWRhdGVQYXNzd29yZExlbmd0aE9wdGlvbnMiLCJ2YWxpZGF0ZVBhc3N3b3JkQ2hhcmFjdGVyT3B0aW9ucyIsIm1lZXRzTWluUGFzc3dvcmRMZW5ndGgiLCJtZWV0c01heFBhc3N3b3JkTGVuZ3RoIiwidXBkYXRlUGFzc3dvcmRDaGFyYWN0ZXJPcHRpb25zU3RhdHVzZXMiLCJwYXNzd29yZENoYXIiLCJpIiwiY2hhckF0IiwiQXV0aEltcGwiLCJoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXIiLCJhcHBDaGVja1NlcnZpY2VQcm92aWRlciIsImVtdWxhdG9yQ29uZmlnIiwib3BlcmF0aW9ucyIsImF1dGhTdGF0ZVN1YnNjcmlwdGlvbiIsIlN1YnNjcmlwdGlvbiIsImlkVG9rZW5TdWJzY3JpcHRpb24iLCJiZWZvcmVTdGF0ZVF1ZXVlIiwicmVkaXJlY3RVc2VyIiwiaXNQcm9hY3RpdmVSZWZyZXNoRW5hYmxlZCIsIkVYUEVDVEVEX1BBU1NXT1JEX1BPTElDWV9TQ0hFTUFfVkVSU0lPTiIsIl9pc0luaXRpYWxpemVkIiwiX2RlbGV0ZWQiLCJfaW5pdGlhbGl6YXRpb25Qcm9taXNlIiwiX3BvcHVwUmVkaXJlY3RSZXNvbHZlciIsIl9hZ2VudFJlY2FwdGNoYUNvbmZpZyIsIl90ZW5hbnRSZWNhcHRjaGFDb25maWdzIiwiX3Byb2plY3RQYXNzd29yZFBvbGljeSIsIl90ZW5hbnRQYXNzd29yZFBvbGljaWVzIiwiX3Jlc29sdmVQZXJzaXN0ZW5jZU1hbmFnZXJBdmFpbGFibGUiLCJsYXN0Tm90aWZpZWRVaWQiLCJzZXR0aW5ncyIsImFwcFZlcmlmaWNhdGlvbkRpc2FibGVkRm9yVGVzdGluZyIsImNsaWVudFZlcnNpb24iLCJzZGtDbGllbnRWZXJzaW9uIiwiX2luaXRpYWxpemVXaXRoUGVyc2lzdGVuY2UiLCJwb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJwZXJzaXN0ZW5jZU1hbmFnZXIiLCJjYWxsIiwiX3Nob3VsZEluaXRQcm9hY3RpdmVseSIsIl9pbml0aWFsaXplIiwiaW5pdGlhbGl6ZUN1cnJlbnRVc2VyIiwiYXNzZXJ0ZWRQZXJzaXN0ZW5jZSIsIl9jdXJyZW50VXNlciIsIl91cGRhdGVDdXJyZW50VXNlciIsImluaXRpYWxpemVDdXJyZW50VXNlckZyb21JZFRva2VuIiwiZGlyZWN0bHlTZXRDdXJyZW50VXNlciIsImVyciIsImNvbnNvbGUiLCJhdXRoSWRUb2tlbiIsInRoZW4iLCJwcmV2aW91c2x5U3RvcmVkVXNlciIsImZ1dHVyZUN1cnJlbnRVc2VyIiwibmVlZHNUb2NoZWNrTWlkZGxld2FyZSIsImF1dGhEb21haW4iLCJnZXRPckluaXRSZWRpcmVjdFBlcnNpc3RlbmNlTWFuYWdlciIsInJlZGlyZWN0VXNlckV2ZW50SWQiLCJzdG9yZWRVc2VyRXZlbnRJZCIsInRyeVJlZGlyZWN0U2lnbkluIiwiX292ZXJyaWRlUmVkaXJlY3RSZXN1bHQiLCJyZWxvYWRBbmRTZXRDdXJyZW50VXNlck9yQ2xlYXIiLCJyZWRpcmVjdFJlc29sdmVyIiwiX2NvbXBsZXRlUmVkaXJlY3RGbiIsIl9zZXRSZWRpcmVjdFVzZXIiLCJfZGVsZXRlIiwidXNlckV4dGVybiIsInNraXBCZWZvcmVTdGF0ZUNhbGxiYWNrcyIsIm5vdGlmeUF1dGhMaXN0ZW5lcnMiLCJyZWRpcmVjdFBlcnNpc3RlbmNlTWFuYWdlciIsIl9nZXRSZWNhcHRjaGFDb25maWciLCJfZ2V0UGFzc3dvcmRQb2xpY3lJbnRlcm5hbCIsIl91cGRhdGVQYXNzd29yZFBvbGljeSIsIl91cGRhdGVFcnJvck1hcCIsIm5leHRPck9ic2VydmVyIiwiY29tcGxldGVkIiwicmVnaXN0ZXJTdGF0ZUxpc3RlbmVyIiwiYXV0aFN0YXRlUmVhZHkiLCJ1bnN1YnNjcmliZSIsInRva2VuVHlwZSIsInJlZGlyZWN0TWFuYWdlciIsInJlc29sdmVyIiwiX3JlZGlyZWN0UGVyc2lzdGVuY2UiLCJfcmVkaXJlY3RVc2VyRm9ySWQiLCJpZCIsIm5leHQiLCJjdXJyZW50VWlkIiwic3Vic2NyaXB0aW9uIiwiY2IiLCJpc1Vuc3Vic2NyaWJlZCIsImFkZE9ic2VydmVyIiwiYWN0aW9uIiwiX2xvZ0ZyYW1ld29yayIsImZyYW1ld29yayIsInNvcnQiLCJfZ2V0RnJhbWV3b3JrcyIsIm9wdGlvbnMiLCJhcHBJZCIsImhlYXJ0YmVhdHNIZWFkZXIiLCJnZXRJbW1lZGlhdGUiLCJvcHRpb25hbCIsImdldEhlYXJ0YmVhdHNIZWFkZXIiLCJhcHBDaGVja1Rva2VuIiwiX2dldEFwcENoZWNrVG9rZW4iLCJhcHBDaGVja1Rva2VuUmVzdWx0IiwiX2Nhc3RBdXRoIiwib2JzZXJ2ZXIiLCJjcmVhdGVTdWJzY3JpYmUiLCJleHRlcm5hbEpTUHJvdmlkZXIiLCJsb2FkSlMiLCJyZWNhcHRjaGFWMlNjcmlwdCIsInJlY2FwdGNoYUVudGVycHJpc2VTY3JpcHQiLCJnYXBpU2NyaXB0IiwiX3NldEV4dGVybmFsSlNQcm92aWRlciIsIl9sb2FkSlMiLCJfcmVjYXB0Y2hhVjJTY3JpcHRVcmwiLCJfcmVjYXB0Y2hhRW50ZXJwcmlzZVNjcmlwdFVybCIsIl9nYXBpU2NyaXB0VXJsIiwiX2dlbmVyYXRlQ2FsbGJhY2tOYW1lIiwicHJlZml4IiwiZmxvb3IiLCJyYW5kb20iLCJfU09MVkVfVElNRV9NUyIsIl9FWFBJUkFUSU9OX1RJTUVfTVMiLCJfV0lER0VUX0lEX1NUQVJUIiwiTW9ja1JlQ2FwdGNoYSIsImNvdW50ZXIiLCJfd2lkZ2V0cyIsInJlbmRlciIsImNvbnRhaW5lciIsInBhcmFtZXRlcnMiLCJNb2NrV2lkZ2V0IiwicmVzZXQiLCJvcHRXaWRnZXRJZCIsImV4ZWN1dGUiLCJNb2NrR3JlQ0FQVENIQVRvcExldmVsIiwiTW9ja0dyZUNBUFRDSEEiLCJyZWFkeSIsIl9zaXRlS2V5IiwiX29wdGlvbnMiLCJfY29udGFpbmVyIiwiX3BhcmFtZXRlcnMiLCJjb250YWluZXJPcklkIiwiZGVsZXRlZCIsInJlc3BvbnNlVG9rZW4iLCJjbGlja0hhbmRsZXIiLCJnZXRFbGVtZW50QnlJZCIsImlzVmlzaWJsZSIsInNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hlY2tJZkRlbGV0ZWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2VuZXJhdGVSYW5kb21BbHBoYU51bWVyaWNTdHJpbmciLCJleHBpcmVkQ2FsbGJhY2siLCJsZW4iLCJjaGFycyIsImFsbG93ZWRDaGFycyIsIlJFQ0FQVENIQV9FTlRFUlBSSVNFX1ZFUklGSUVSX1RZUEUiLCJGQUtFX1RPS0VOIiwiUmVjYXB0Y2hhRW50ZXJwcmlzZVZlcmlmaWVyIiwiYXV0aEV4dGVybiIsInZlcmlmeSIsInJldHJpZXZlU2l0ZUtleSIsImNsaWVudFR5cGUiLCJ2ZXJzaW9uIiwicmV0cmlldmVSZWNhcHRjaGFUb2tlbiIsIm1vY2tSZWNhcHRjaGEiLCJpbmplY3RSZWNhcHRjaGFGaWVsZHMiLCJpc0NhcHRjaGFSZXNwIiwiaXNGYWtlVG9rZW4iLCJ2ZXJpZmllciIsImNhcHRjaGFSZXNwb25zZSIsIm5ld1JlcXVlc3QiLCJwaG9uZUVucm9sbG1lbnRJbmZvIiwicmVjYXB0Y2hhVG9rZW4iLCJwaG9uZVNpZ25JbkluZm8iLCJoYW5kbGVSZWNhcHRjaGFGbG93IiwiYXV0aEluc3RhbmNlIiwiYWN0aW9uTmFtZSIsImFjdGlvbk1ldGhvZCIsInJlY2FwdGNoYUF1dGhQcm92aWRlciIsInJlcXVlc3RXaXRoUmVjYXB0Y2hhIiwibG9nIiwiX2EyIiwicmVxdWVzdFdpdGhSZWNhcHRjaGFGaWVsZHMiLCJfaW5pdGlhbGl6ZVJlY2FwdGNoYUNvbmZpZyIsImRlcHMiLCJfZ2V0UHJvdmlkZXIiLCJpc0luaXRpYWxpemVkIiwiYXV0aDIiLCJpbml0aWFsT3B0aW9ucyIsImdldE9wdGlvbnMiLCJkZWVwRXF1YWwiLCJfaW5pdGlhbGl6ZUF1dGhJbnN0YW5jZSIsImhpZXJhcmNoeSIsImRpc2FibGVXYXJuaW5ncyIsImV4dHJhY3RQcm90b2NvbCIsInBvcnQiLCJleHRyYWN0SG9zdEFuZFBvcnQiLCJwb3J0U3RyIiwiZnJlZXplIiwiZW1pdEVtdWxhdG9yV2FybmluZyIsInByb3RvY29sRW5kIiwiaW5kZXhPZiIsInN1YnN0ciIsImF1dGhvcml0eSIsImV4ZWMiLCJob3N0QW5kUG9ydCIsInBvcCIsImJyYWNrZXRlZElQdjYiLCJwYXJzZVBvcnQiLCJhdHRhY2hCYW5uZXIiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJzdHkiLCJzdHlsZSIsImlubmVyVGV4dCIsInBvc2l0aW9uIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJjb2xvciIsImJvdHRvbSIsImxlZnQiLCJtYXJnaW4iLCJ6SW5kZXgiLCJ0ZXh0QWxpZ24iLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImluZm8iLCJyZWFkeVN0YXRlIiwic2lnbkluTWV0aG9kIiwiX2dldElkVG9rZW5SZXNwb25zZSIsIl9hdXRoIiwiX2xpbmtUb0lkVG9rZW4iLCJfaWRUb2tlbiIsIl9nZXRSZWF1dGhlbnRpY2F0aW9uUmVzb2x2ZXIiLCJyZXNldFBhc3N3b3JkIiwidXBkYXRlRW1haWxQYXNzd29yZCIsImxpbmtFbWFpbFBhc3N3b3JkIiwiYXBwbHlBY3Rpb25Db2RlJDEiLCJzaWduSW5XaXRoUGFzc3dvcmQiLCJzZW5kT29iQ29kZSIsInNlbmRFbWFpbFZlcmlmaWNhdGlvbiQxIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCQxIiwic2VuZFNpZ25JbkxpbmtUb0VtYWlsJDEiLCJ2ZXJpZnlBbmRDaGFuZ2VFbWFpbCIsInNpZ25JbldpdGhFbWFpbExpbmskMSIsInNpZ25JbldpdGhFbWFpbExpbmtGb3JMaW5raW5nIiwiX0VtYWlsQXV0aENyZWRlbnRpYWwiLCJfZW1haWwiLCJfcGFzc3dvcmQiLCJfdGVuYW50SWQiLCJfZnJvbUVtYWlsQW5kUGFzc3dvcmQiLCJfZnJvbUVtYWlsQW5kQ29kZSIsIm9vYkNvZGUiLCJvYmoiLCJyZXR1cm5TZWN1cmVUb2tlbiIsInNpZ25JbldpdGhJZHAiLCJJRFBfUkVRVUVTVF9VUkkkMSIsIl9PQXV0aENyZWRlbnRpYWwiLCJwZW5kaW5nVG9rZW4iLCJfZnJvbVBhcmFtcyIsImNyZWQiLCJub25jZSIsIm9hdXRoVG9rZW4iLCJvYXV0aFRva2VuU2VjcmV0Iiwic2VjcmV0IiwiYnVpbGRSZXF1ZXN0IiwiYXV0b0NyZWF0ZSIsInJlcXVlc3RVcmkiLCJwb3N0Qm9keSIsInNlbmRQaG9uZVZlcmlmaWNhdGlvbkNvZGUiLCJzaWduSW5XaXRoUGhvbmVOdW1iZXIkMSIsImxpbmtXaXRoUGhvbmVOdW1iZXIkMSIsInRlbXBvcmFyeVByb29mIiwiVkVSSUZZX1BIT05FX05VTUJFUl9GT1JfRVhJU1RJTkdfRVJST1JfTUFQXyIsInZlcmlmeVBob25lTnVtYmVyRm9yRXhpc3RpbmciLCJhcGlSZXF1ZXN0Iiwib3BlcmF0aW9uIiwiX1Bob25lQXV0aENyZWRlbnRpYWwiLCJfZnJvbVZlcmlmaWNhdGlvbiIsInZlcmlmaWNhdGlvbklkIiwidmVyaWZpY2F0aW9uQ29kZSIsIl9mcm9tVG9rZW5SZXNwb25zZSIsIl9tYWtlVmVyaWZpY2F0aW9uUmVxdWVzdCIsInNlc3Npb25JbmZvIiwicGFyc2VNb2RlIiwibW9kZSIsInBhcnNlRGVlcExpbmsiLCJsaW5rIiwicXVlcnlzdHJpbmdEZWNvZGUiLCJleHRyYWN0UXVlcnlzdHJpbmciLCJkb3VibGVEZWVwTGluayIsImlPU0RlZXBMaW5rIiwiaU9TRG91YmxlRGVlcExpbmsiLCJfQWN0aW9uQ29kZVVSTCIsImFjdGlvbkxpbmsiLCJzZWFyY2hQYXJhbXMiLCJjb250aW51ZVVybCIsInBhcnNlTGluayIsIl9FbWFpbEF1dGhQcm92aWRlciIsIlBST1ZJREVSX0lEIiwiY3JlZGVudGlhbCIsImNyZWRlbnRpYWxXaXRoTGluayIsImVtYWlsTGluayIsImFjdGlvbkNvZGVVcmwiLCJFTUFJTF9QQVNTV09SRF9TSUdOX0lOX01FVEhPRCIsIkVNQUlMX0xJTktfU0lHTl9JTl9NRVRIT0QiLCJGZWRlcmF0ZWRBdXRoUHJvdmlkZXIiLCJkZWZhdWx0TGFuZ3VhZ2VDb2RlIiwiY3VzdG9tUGFyYW1ldGVycyIsInNldERlZmF1bHRMYW5ndWFnZSIsInNldEN1c3RvbVBhcmFtZXRlcnMiLCJjdXN0b21PQXV0aFBhcmFtZXRlcnMiLCJnZXRDdXN0b21QYXJhbWV0ZXJzIiwiQmFzZU9BdXRoUHJvdmlkZXIiLCJzY29wZXMiLCJhZGRTY29wZSIsInNjb3BlIiwiZ2V0U2NvcGVzIiwiX09BdXRoUHJvdmlkZXIiLCJjcmVkZW50aWFsRnJvbUpTT04iLCJfY3JlZGVudGlhbCIsInJhd05vbmNlIiwiY3JlZGVudGlhbEZyb21SZXN1bHQiLCJ1c2VyQ3JlZGVudGlhbCIsIm9hdXRoQ3JlZGVudGlhbEZyb21UYWdnZWRPYmplY3QiLCJjcmVkZW50aWFsRnJvbUVycm9yIiwidG9rZW5SZXNwb25zZSIsIm9hdXRoSWRUb2tlbiIsIm9hdXRoQWNjZXNzVG9rZW4iLCJfRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJGQUNFQk9PS19TSUdOX0lOX01FVEhPRCIsImNyZWRlbnRpYWxGcm9tVGFnZ2VkT2JqZWN0IiwiX0dvb2dsZUF1dGhQcm92aWRlciIsIkdPT0dMRV9TSUdOX0lOX01FVEhPRCIsIl9HaXRodWJBdXRoUHJvdmlkZXIiLCJHSVRIVUJfU0lHTl9JTl9NRVRIT0QiLCJJRFBfUkVRVUVTVF9VUkkiLCJTQU1MQXV0aENyZWRlbnRpYWwiLCJfU0FNTEF1dGhDcmVkZW50aWFsIiwiX2NyZWF0ZSIsIlNBTUxfUFJPVklERVJfUFJFRklYIiwiX1NBTUxBdXRoUHJvdmlkZXIiLCJzYW1sQ3JlZGVudGlhbEZyb21UYWdnZWRPYmplY3QiLCJfVHdpdHRlckF1dGhQcm92aWRlciIsIlRXSVRURVJfU0lHTl9JTl9NRVRIT0QiLCJzaWduVXAiLCJVc2VyQ3JlZGVudGlhbEltcGwiLCJfVXNlckNyZWRlbnRpYWxJbXBsIiwib3BlcmF0aW9uVHlwZSIsInByb3ZpZGVySWRGb3JSZXNwb25zZSIsInVzZXJDcmVkIiwiX2Zvck9wZXJhdGlvbiIsIk11bHRpRmFjdG9yRXJyb3IiLCJfTXVsdGlGYWN0b3JFcnJvciIsInNldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiX2Zyb21FcnJvckFuZE9wZXJhdGlvbiIsIl9wcm9jZXNzQ3JlZGVudGlhbFNhdmluZ01mYUNvbnRleHRJZk5lY2Vzc2FyeSIsImlkVG9rZW5Qcm92aWRlciIsInByb3ZpZGVyRGF0YUFzTmFtZXMiLCJTZXQiLCJwaWQiLCJfYXNzZXJ0TGlua2VkU3RhdHVzIiwiZGVsZXRlUHJvdmlkZXIiLCJwcm92aWRlcnNMZWZ0IiwicGQiLCJoYXMiLCJfbGluayQxIiwiZXhwZWN0ZWQiLCJwcm92aWRlcklkcyIsIl9yZWF1dGhlbnRpY2F0ZSIsInBhcnNlZCIsInN1YiIsIl9zaWduSW5XaXRoQ3JlZGVudGlhbCIsInNpZ25JbldpdGhDdXN0b21Ub2tlbiQxIiwiY3VzdG9tVG9rZW4iLCJNdWx0aUZhY3RvckluZm9JbXBsIiwiZmFjdG9ySWQiLCJtZmFFbnJvbGxtZW50SWQiLCJlbnJvbGxtZW50VGltZSIsImVucm9sbGVkQXQiLCJfZnJvbVNlcnZlclJlc3BvbnNlIiwiZW5yb2xsbWVudCIsIlBob25lTXVsdGlGYWN0b3JJbmZvSW1wbCIsIlRvdHBNdWx0aUZhY3RvckluZm9JbXBsIiwiX1Bob25lTXVsdGlGYWN0b3JJbmZvSW1wbCIsInBob25lSW5mbyIsIl9Ub3RwTXVsdGlGYWN0b3JJbmZvSW1wbCIsIl9zZXRBY3Rpb25Db2RlU2V0dGluZ3NPblJlcXVlc3QiLCJhY3Rpb25Db2RlU2V0dGluZ3MiLCJkeW5hbWljTGlua0RvbWFpbiIsImxpbmtEb21haW4iLCJjYW5IYW5kbGVDb2RlSW5BcHAiLCJoYW5kbGVDb2RlSW5BcHAiLCJpT1MiLCJidW5kbGVJZCIsImlPU0J1bmRsZUlkIiwiYW5kcm9pZCIsInBhY2thZ2VOYW1lIiwiYW5kcm9pZEluc3RhbGxBcHAiLCJpbnN0YWxsQXBwIiwiYW5kcm9pZE1pbmltdW1WZXJzaW9uQ29kZSIsIm1pbmltdW1WZXJzaW9uIiwiYW5kcm9pZFBhY2thZ2VOYW1lIiwicmVjYWNoZVBhc3N3b3JkUG9saWN5IiwicmVxdWVzdFR5cGUiLCJuZXdQYXNzd29yZCIsImF1dGhNb2R1bGFyIiwibmV3RW1haWwiLCJtZmFJbmZvIiwibXVsdGlGYWN0b3JJbmZvIiwiZGF0YSIsInByZXZpb3VzRW1haWwiLCJzaWduVXBSZXNwb25zZSIsInNldEFjdGlvbkNvZGVTZXR0aW5ncyIsInJlcXVlc3QyIiwiYWN0aW9uQ29kZVNldHRpbmdzMiIsImNyZWF0ZUF1dGhVcmkiLCJjb250aW51ZVVyaSIsImlkZW50aWZpZXIiLCJzaWduaW5NZXRob2RzIiwidXBkYXRlUHJvZmlsZSQxIiwicHJvZmlsZVJlcXVlc3QiLCJwYXNzd29yZFByb3ZpZGVyIiwiZmluZCIsInVwZGF0ZUVtYWlsT3JQYXNzd29yZCIsInByb2ZpbGUiLCJyYXdVc2VySW5mbyIsImlzTmV3VXNlciIsImtpbmQiLCJmaWx0ZXJlZFByb3ZpZGVySWQiLCJHZW5lcmljQWRkaXRpb25hbFVzZXJJbmZvIiwiRmFjZWJvb2tBZGRpdGlvbmFsVXNlckluZm8iLCJHaXRodWJBZGRpdGlvbmFsVXNlckluZm8iLCJHb29nbGVBZGRpdGlvbmFsVXNlckluZm8iLCJUd2l0dGVyQWRkaXRpb25hbFVzZXJJbmZvIiwic2NyZWVuTmFtZSIsIkZlZGVyYXRlZEFkZGl0aW9uYWxVc2VySW5mb1dpdGhVc2VybmFtZSIsInVzZXJuYW1lIiwibG9naW4iLCJNdWx0aUZhY3RvclNlc3Npb25JbXBsIiwiX011bHRpRmFjdG9yU2Vzc2lvbkltcGwiLCJfZnJvbUlkdG9rZW4iLCJfZnJvbU1mYVBlbmRpbmdDcmVkZW50aWFsIiwibWZhUGVuZGluZ0NyZWRlbnRpYWwiLCJtdWx0aUZhY3RvclNlc3Npb24iLCJwZW5kaW5nQ3JlZGVudGlhbCIsIk11bHRpRmFjdG9yUmVzb2x2ZXJJbXBsIiwiX011bHRpRmFjdG9yUmVzb2x2ZXJJbXBsIiwic2Vzc2lvbiIsImhpbnRzIiwic2lnbkluUmVzb2x2ZXIiLCJfZnJvbUVycm9yIiwibWZhUmVzcG9uc2UiLCJfcHJvY2VzcyIsInJlc29sdmVTaWduSW4iLCJhc3NlcnRpb25FeHRlcm4iLCJlcnJvckludGVybmFsIiwic3RhcnRFbnJvbGxQaG9uZU1mYSIsImZpbmFsaXplRW5yb2xsUGhvbmVNZmEiLCJzdGFydEVucm9sbFRvdHBNZmEiLCJmaW5hbGl6ZUVucm9sbFRvdHBNZmEiLCJ3aXRoZHJhd01mYSIsIk11bHRpRmFjdG9yVXNlckltcGwiLCJfTXVsdGlGYWN0b3JVc2VySW1wbCIsImVucm9sbGVkRmFjdG9ycyIsIl9mcm9tVXNlciIsImdldFNlc3Npb24iLCJlbnJvbGwiLCJmaW5hbGl6ZU1mYVJlc3BvbnNlIiwidW5lbnJvbGwiLCJpbmZvT3JVaWQiLCJtdWx0aUZhY3RvclVzZXJDYWNoZSIsIldlYWtNYXAiLCJ1c2VyTW9kdWxhciIsIlNUT1JBR0VfQVZBSUxBQkxFX0tFWSIsIkJyb3dzZXJQZXJzaXN0ZW5jZUNsYXNzIiwic3RvcmFnZVJldHJpZXZlciIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiZ2V0SXRlbSIsIl9QT0xMSU5HX0lOVEVSVkFMX01TJDEiLCJJRTEwX0xPQ0FMX1NUT1JBR0VfU1lOQ19ERUxBWSIsIkJyb3dzZXJMb2NhbFBlcnNpc3RlbmNlIiwibG9jYWxTdG9yYWdlIiwiZXZlbnQiLCJwb2xsIiwib25TdG9yYWdlRXZlbnQiLCJsaXN0ZW5lcnMiLCJsb2NhbENhY2hlIiwicG9sbFRpbWVyIiwiZmFsbGJhY2tUb1BvbGxpbmciLCJmb3JBbGxDaGFuZ2VkS2V5cyIsImtleXMiLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwia2V5MiIsIl9vbGRWYWx1ZSIsIm5vdGlmeUxpc3RlbmVycyIsImRldGFjaExpc3RlbmVyIiwic3RvcFBvbGxpbmciLCJ0cmlnZ2VyTGlzdGVuZXJzIiwic3RvcmVkVmFsdWUyIiwic3RvcmVkVmFsdWUiLCJsaXN0ZW5lciIsImZyb20iLCJzdGFydFBvbGxpbmciLCJzZXRJbnRlcnZhbCIsIlN0b3JhZ2VFdmVudCIsImNsZWFySW50ZXJ2YWwiLCJhdHRhY2hMaXN0ZW5lciIsIlBPTExJTkdfSU5URVJWQUxfTVMiLCJnZXREb2N1bWVudENvb2tpZSIsImVzY2FwZWROYW1lIiwibWF0Y2hlciIsIlJlZ0V4cCIsImNvb2tpZSIsImdldENvb2tpZU5hbWUiLCJpc0Rldk1vZGUiLCJDb29raWVQZXJzaXN0ZW5jZSIsImxpc3RlbmVyVW5zdWJzY3JpYmVzIiwib3JpZ2luYWxVcmwiLCJVUkwiLCJvcmlnaW4iLCJpc1NlY3VyZUNvbnRleHQiLCJjb29raWVFbmFibGVkIiwiX3ZhbHVlIiwiY29va2llU3RvcmUiLCJleGlzdGluZ1ZhbHVlIiwiY2hhbmdlZENvb2tpZSIsImNoYW5nZWQiLCJjaGFuZ2UiLCJkZWxldGVkQ29va2llIiwidW5zdWJzY3JpYmUyIiwibGFzdFZhbHVlIiwiY3VycmVudFZhbHVlIiwiQnJvd3NlclNlc3Npb25QZXJzaXN0ZW5jZSIsInNlc3Npb25TdG9yYWdlIiwiX2FsbFNldHRsZWQiLCJwcm9taXNlcyIsImZ1bGZpbGxlZCIsInJlYXNvbiIsIlJlY2VpdmVyIiwiX1JlY2VpdmVyIiwiZXZlbnRUYXJnZXQiLCJoYW5kbGVyc01hcCIsImhhbmRsZUV2ZW50IiwiZXhpc3RpbmdJbnN0YW5jZSIsInJlY2VpdmVycyIsInJlY2VpdmVyIiwiaXNMaXN0ZW5pbmd0byIsIm5ld0luc3RhbmNlIiwibWVzc2FnZUV2ZW50IiwiZXZlbnRJZCIsImV2ZW50VHlwZSIsImhhbmRsZXJzIiwicG9ydHMiLCJwb3N0TWVzc2FnZSIsImhhbmRsZXIiLCJfc3Vic2NyaWJlIiwiZXZlbnRIYW5kbGVyIiwiX3Vuc3Vic2NyaWJlIiwiX2dlbmVyYXRlRXZlbnRJZCIsImRpZ2l0cyIsIlNlbmRlciIsInRhcmdldCIsInJlbW92ZU1lc3NhZ2VIYW5kbGVyIiwibWVzc2FnZUNoYW5uZWwiLCJwb3J0MSIsIm9uTWVzc2FnZSIsImNsb3NlIiwiX3NlbmQiLCJ0aW1lb3V0IiwiTWVzc2FnZUNoYW5uZWwiLCJjb21wbGV0aW9uVGltZXIiLCJzdGFydCIsImFja1RpbWVyIiwicG9ydDIiLCJmaW5hbGx5IiwiX3dpbmRvdyIsIl9zZXRXaW5kb3dMb2NhdGlvbiIsIl9pc1dvcmtlciIsIl9nZXRBY3RpdmVTZXJ2aWNlV29ya2VyIiwic2VydmljZVdvcmtlciIsInJlZ2lzdHJhdGlvbiIsImFjdGl2ZSIsIl9nZXRTZXJ2aWNlV29ya2VyQ29udHJvbGxlciIsImNvbnRyb2xsZXIiLCJfZ2V0V29ya2VyR2xvYmFsU2NvcGUiLCJEQl9OQU1FIiwiREJfVkVSU0lPTiIsIkRCX09CSkVDVFNUT1JFX05BTUUiLCJEQl9EQVRBX0tFWVBBVEgiLCJEQlByb21pc2UiLCJ0b1Byb21pc2UiLCJnZXRPYmplY3RTdG9yZSIsImRiIiwiaXNSZWFkV3JpdGUiLCJ0cmFuc2FjdGlvbiIsIm9iamVjdFN0b3JlIiwiX2RlbGV0ZURhdGFiYXNlIiwiaW5kZXhlZERCIiwiZGVsZXRlRGF0YWJhc2UiLCJfb3BlbkRhdGFiYXNlIiwib3BlbiIsImNyZWF0ZU9iamVjdFN0b3JlIiwia2V5UGF0aCIsIm9iamVjdFN0b3JlTmFtZXMiLCJjb250YWlucyIsIl9wdXRPYmplY3QiLCJwdXQiLCJnZXRPYmplY3QiLCJfZGVsZXRlT2JqZWN0IiwiX1BPTExJTkdfSU5URVJWQUxfTVMiLCJfVFJBTlNBQ1RJT05fUkVUUllfQ09VTlQiLCJJbmRleGVkREJMb2NhbFBlcnNpc3RlbmNlIiwicGVuZGluZ1dyaXRlcyIsInNlbmRlciIsInNlcnZpY2VXb3JrZXJSZWNlaXZlckF2YWlsYWJsZSIsImFjdGl2ZVNlcnZpY2VXb3JrZXIiLCJfd29ya2VySW5pdGlhbGl6YXRpb25Qcm9taXNlIiwiaW5pdGlhbGl6ZVNlcnZpY2VXb3JrZXJNZXNzYWdpbmciLCJfb3BlbkRiIiwiX3dpdGhSZXRyaWVzIiwib3AiLCJudW1BdHRlbXB0cyIsImluaXRpYWxpemVSZWNlaXZlciIsImluaXRpYWxpemVTZW5kZXIiLCJfb3JpZ2luIiwiX3BvbGwiLCJrZXlQcm9jZXNzZWQiLCJfZGF0YSIsInJlc3VsdHMiLCJub3RpZnlTZXJ2aWNlV29ya2VyIiwiX3dpdGhQZW5kaW5nV3JpdGUiLCJ3cml0ZSIsImdldEFsbFJlcXVlc3QiLCJnZXRBbGwiLCJrZXlzSW5SZXN1bHQiLCJmYmFzZV9rZXkiLCJsb2NhbEtleSIsInN0YXJ0U2lnbkluUGhvbmVNZmEiLCJmaW5hbGl6ZVNpZ25JblBob25lTWZhIiwiZmluYWxpemVTaWduSW5Ub3RwTWZhIiwiX0pTTE9BRF9DQUxMQkFDSyIsIk5FVFdPUktfVElNRU9VVF9ERUxBWSIsIlJlQ2FwdGNoYUxvYWRlckltcGwiLCJob3N0TGFuZ3VhZ2UiLCJsaWJyYXJ5U2VwYXJhdGVseUxvYWRlZCIsImxvYWQiLCJobCIsImlzSG9zdExhbmd1YWdlVmFsaWQiLCJzaG91bGRSZXNvbHZlSW1tZWRpYXRlbHkiLCJyZWNhcHRjaGEiLCJ3aWRnZXRJZCIsIm9ubG9hZCIsImNsZWFyZWRPbmVJbnN0YW5jZSIsIk1vY2tSZUNhcHRjaGFMb2FkZXJJbXBsIiwiUkVDQVBUQ0hBX1ZFUklGSUVSX1RZUEUiLCJERUZBVUxUX1BBUkFNUyIsInRoZW1lIiwiZGVzdHJveWVkIiwidG9rZW5DaGFuZ2VMaXN0ZW5lcnMiLCJyZW5kZXJQcm9taXNlIiwiaXNJbnZpc2libGUiLCJtYWtlVG9rZW5DYWxsYmFjayIsIl9yZWNhcHRjaGFMb2FkZXIiLCJ2YWxpZGF0ZVN0YXJ0aW5nU3RhdGUiLCJhc3NlcnROb3REZXN0cm95ZWQiLCJnZXRBc3NlcnRlZFJlY2FwdGNoYSIsInRva2VuQ2hhbmdlIiwibWFrZVJlbmRlclByb21pc2UiLCJfcmVzZXQiLCJjbGVhciIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwibm9kZSIsInJlbW92ZUNoaWxkIiwic2l0ZWtleSIsImhhc0NoaWxkTm9kZXMiLCJleGlzdGluZyIsImdsb2JhbEZ1bmMiLCJpbml0IiwiZ3VhcmFudGVlZEVtcHR5IiwiZG9tUmVhZHkiLCJDb25maXJtYXRpb25SZXN1bHRJbXBsIiwib25Db25maXJtYXRpb24iLCJjb25maXJtIiwiYXV0aENyZWRlbnRpYWwiLCJhcHBWZXJpZmllciIsIl92ZXJpZnlQaG9uZU51bWJlciIsInBob25lSW5mb09wdGlvbnMiLCJzdGFydFBob25lTWZhRW5yb2xsbWVudFJlcXVlc3QiLCJzdGFydEVucm9sbFBob25lTWZhQWN0aW9uQ2FsbGJhY2siLCJyZXF1ZXN0V2l0aFJlY2FwdGNoYVYyIiwiaW5qZWN0UmVjYXB0Y2hhVjJUb2tlbiIsInN0YXJ0UGhvbmVNZmFFbnJvbGxtZW50UmVzcG9uc2UiLCJwaG9uZVNlc3Npb25JbmZvIiwibXVsdGlGYWN0b3JIaW50IiwibXVsdGlGYWN0b3JVaWQiLCJzdGFydFBob25lTWZhU2lnbkluUmVxdWVzdCIsInN0YXJ0U2lnbkluUGhvbmVNZmFBY3Rpb25DYWxsYmFjayIsInN0YXJ0UGhvbmVNZmFTaWduSW5SZXNwb25zZSIsInBob25lUmVzcG9uc2VJbmZvIiwic2VuZFBob25lVmVyaWZpY2F0aW9uQ29kZVJlcXVlc3QiLCJzZW5kUGhvbmVWZXJpZmljYXRpb25Db2RlQWN0aW9uQ2FsbGJhY2siLCJzZW5kUGhvbmVWZXJpZmljYXRpb25Db2RlUmVzcG9uc2UiLCJyZWNhcHRjaGFWMlZlcmlmaWVyIiwicmVjYXB0Y2hhVjJUb2tlbiIsInJlY2FwdGNoYVZlcnNpb24iLCJfUGhvbmVBdXRoUHJvdmlkZXIiLCJ2ZXJpZnlQaG9uZU51bWJlciIsInBob25lT3B0aW9ucyIsImFwcGxpY2F0aW9uVmVyaWZpZXIiLCJQSE9ORV9TSUdOX0lOX01FVEhPRCIsIl93aXRoRGVmYXVsdFJlc29sdmVyIiwicmVzb2x2ZXJPdmVycmlkZSIsIklkcENyZWRlbnRpYWwiLCJfYnVpbGRJZHBSZXF1ZXN0Iiwic2Vzc2lvbklkIiwicmV0dXJuSWRwQ3JlZGVudGlhbCIsIl9zaWduSW4iLCJfcmVhdXRoIiwiX2xpbmsiLCJBYnN0cmFjdFBvcHVwUmVkaXJlY3RPcGVyYXRpb24iLCJwZW5kaW5nUHJvbWlzZSIsImV2ZW50TWFuYWdlciIsIm9uRXhlY3V0aW9uIiwicmVnaXN0ZXJDb25zdW1lciIsIm9uQXV0aEV2ZW50IiwidXJsUmVzcG9uc2UiLCJnZXRJZHBUYXNrIiwib25FcnJvciIsInVucmVnaXN0ZXJBbmRDbGVhblVwIiwidW5yZWdpc3RlckNvbnN1bWVyIiwiY2xlYW5VcCIsIl9QT0xMX1dJTkRPV19DTE9TRV9USU1FT1VUIiwicmVzb2x2ZXJJbnRlcm5hbCIsIlBvcHVwT3BlcmF0aW9uIiwiZXhlY3V0ZU5vdE51bGwiLCJfUG9wdXBPcGVyYXRpb24iLCJhdXRoV2luZG93IiwicG9sbElkIiwiY3VycmVudFBvcHVwQWN0aW9uIiwiY2FuY2VsIiwiX29wZW5Qb3B1cCIsImFzc29jaWF0ZWRFdmVudCIsIl9vcmlnaW5WYWxpZGF0aW9uIiwiX2lzSWZyYW1lV2ViU3RvcmFnZVN1cHBvcnRlZCIsImlzU3VwcG9ydGVkIiwicG9sbFVzZXJDYW5jZWxsYXRpb24iLCJjbG9zZWQiLCJQRU5ESU5HX1JFRElSRUNUX0tFWSIsInJlZGlyZWN0T3V0Y29tZU1hcCIsIlJlZGlyZWN0QWN0aW9uIiwicmVhZHlPdXRjb21lIiwiaGFzUGVuZGluZ1JlZGlyZWN0IiwiX2dldEFuZENsZWFyUGVuZGluZ1JlZGlyZWN0U3RhdHVzIiwicGVuZGluZ1JlZGlyZWN0S2V5IiwicmVzb2x2ZXJQZXJzaXN0ZW5jZSIsIl9zZXRQZW5kaW5nUmVkaXJlY3RTdGF0dXMiLCJfY2xlYXJSZWRpcmVjdE91dGNvbWVzIiwiX3NpZ25JbldpdGhSZWRpcmVjdCIsIl9vcGVuUmVkaXJlY3QiLCJfcmVhdXRoZW50aWNhdGVXaXRoUmVkaXJlY3QiLCJwcmVwYXJlVXNlckZvclJlZGlyZWN0IiwiX2xpbmtXaXRoUmVkaXJlY3QiLCJfZ2V0UmVkaXJlY3RSZXN1bHQiLCJyZXNvbHZlckV4dGVybiIsIkVWRU5UX0RVUExJQ0FUSU9OX0NBQ0hFX0RVUkFUSU9OX01TIiwiQXV0aEV2ZW50TWFuYWdlciIsImNhY2hlZEV2ZW50VWlkcyIsImNvbnN1bWVycyIsInF1ZXVlZFJlZGlyZWN0RXZlbnQiLCJoYXNIYW5kbGVkUG90ZW50aWFsUmVkaXJlY3QiLCJsYXN0UHJvY2Vzc2VkRXZlbnRUaW1lIiwiYXV0aEV2ZW50Q29uc3VtZXIiLCJpc0V2ZW50Rm9yQ29uc3VtZXIiLCJzZW5kVG9Db25zdW1lciIsInNhdmVFdmVudFRvQ2FjaGUiLCJvbkV2ZW50IiwiaGFzRXZlbnRCZWVuSGFuZGxlZCIsImhhbmRsZWQiLCJjb25zdW1lciIsImlzUmVkaXJlY3RFdmVudCIsImlzTnVsbFJlZGlyZWN0RXZlbnQiLCJldmVudElkTWF0Y2hlcyIsImV2ZW50VWlkIiwidiIsIl9nZXRQcm9qZWN0Q29uZmlnIiwiSVBfQUREUkVTU19SRUdFWCIsIkhUVFBfUkVHRVgiLCJfdmFsaWRhdGVPcmlnaW4iLCJhdXRob3JpemVkRG9tYWlucyIsImRvbWFpbiIsIm1hdGNoRG9tYWluIiwiY3VycmVudFVybCIsImhvc3RuYW1lIiwiY2VVcmwiLCJlc2NhcGVkRG9tYWluUGF0dGVybiIsIk5FVFdPUktfVElNRU9VVCIsInJlc2V0VW5sb2FkZWRHYXBpTW9kdWxlcyIsImJlYWNvbiIsIl9fX2pzbCIsIkgiLCJoaW50IiwiciIsIkwiLCJDUCIsImxvYWRHYXBpIiwibG9hZEdhcGlJZnJhbWUiLCJnYXBpIiwiaWZyYW1lcyIsImdldENvbnRleHQiLCJvbnRpbWVvdXQiLCJJZnJhbWUiLCJjYk5hbWUiLCJjYWNoZWRHQXBpTG9hZGVyIiwiX2xvYWRHYXBpIiwiUElOR19USU1FT1VUIiwiSUZSQU1FX1BBVEgiLCJFTVVMQVRFRF9JRlJBTUVfUEFUSCIsIklGUkFNRV9BVFRSSUJVVEVTIiwidG9wIiwiaGVpZ2h0IiwidGFiaW5kZXgiLCJFSURfRlJPTV9BUElIT1NUIiwiZ2V0SWZyYW1lVXJsIiwiZWlkIiwiZnciLCJfb3BlbklmcmFtZSIsImNvbnRleHQiLCJnYXBpMiIsIndoZXJlIiwibWVzc2FnZUhhbmRsZXJzRmlsdGVyIiwiQ1JPU1NfT1JJR0lOX0lGUkFNRVNfRklMVEVSIiwiYXR0cmlidXRlcyIsImRvbnRjbGVhciIsImlmcmFtZSIsInJlc3R5bGUiLCJzZXRIaWRlT25MZWF2ZSIsIm5ldHdvcmtFcnJvciIsIm5ldHdvcmtFcnJvclRpbWVyIiwiY2xlYXJUaW1lckFuZFJlc29sdmUiLCJwaW5nIiwiQkFTRV9QT1BVUF9PUFRJT05TIiwicmVzaXphYmxlIiwic3RhdHVzYmFyIiwidG9vbGJhciIsIkRFRkFVTFRfV0lEVEgiLCJERUZBVUxUX0hFSUdIVCIsIlRBUkdFVF9CTEFOSyIsIkZJUkVGT1hfRU1QVFlfVVJMIiwiQXV0aFBvcHVwIiwid2luZG93MiIsIl9vcGVuIiwic2NyZWVuIiwiYXZhaWxIZWlnaHQiLCJhdmFpbFdpZHRoIiwic2Nyb2xsYmFycyIsIm9wdGlvbnNTdHJpbmciLCJlbnRyaWVzIiwicmVkdWNlIiwiYWNjdW0iLCJvcGVuQXNOZXdXaW5kb3dJT1MiLCJuZXdXaW4iLCJmb2N1cyIsImNsaWNrIiwiY3JlYXRlRXZlbnQiLCJpbml0TW91c2VFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJXSURHRVRfUEFUSCIsIkVNVUxBVE9SX1dJREdFVF9QQVRIIiwiRklSRUJBU0VfQVBQX0NIRUNLX0ZSQUdNRU5UX0lEIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiX2dldFJlZGlyZWN0VXJsIiwiYXV0aFR5cGUiLCJyZWRpcmVjdFVybCIsImFkZGl0aW9uYWxQYXJhbXMiLCJpc0VtcHR5IiwidGlkIiwicGFyYW1zRGljdCIsImFwcENoZWNrVG9rZW5GcmFnbWVudCIsImdldEhhbmRsZXJCYXNlIiwiV0VCX1NUT1JBR0VfU1VQUE9SVF9LRVkiLCJCcm93c2VyUG9wdXBSZWRpcmVjdFJlc29sdmVyIiwiZXZlbnRNYW5hZ2VycyIsIm9yaWdpblZhbGlkYXRpb25Qcm9taXNlcyIsInByb21pc2UyIiwiaW5pdEFuZEdldE1hbmFnZXIiLCJyZWdpc3RlciIsImlmcmFtZUV2ZW50IiwiYXV0aEV2ZW50Iiwic2VuZCIsIk11bHRpRmFjdG9yQXNzZXJ0aW9uSW1wbCIsIl9maW5hbGl6ZUVucm9sbCIsIl9maW5hbGl6ZVNpZ25JbiIsIlBob25lTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwiX1Bob25lTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwiX2Zyb21DcmVkZW50aWFsIiwicGhvbmVWZXJpZmljYXRpb25JbmZvIiwiRkFDVE9SX0lEIiwiYXNzZXJ0aW9uRm9yRW5yb2xsbWVudCIsIm9uZVRpbWVQYXNzd29yZCIsIlRvdHBNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfZnJvbVNlY3JldCIsImFzc2VydGlvbkZvclNpZ25JbiIsImVucm9sbG1lbnRJZCIsIl9mcm9tRW5yb2xsbWVudElkIiwiZ2VuZXJhdGVTZWNyZXQiLCJtZmFTZXNzaW9uIiwidG90cEVucm9sbG1lbnRJbmZvIiwiX2Zyb21TdGFydFRvdHBNZmFFbnJvbGxtZW50UmVzcG9uc2UiLCJfVG90cE11bHRpRmFjdG9yQXNzZXJ0aW9uSW1wbCIsIm90cCIsInRvdHBWZXJpZmljYXRpb25JbmZvIiwiX21ha2VUb3RwVmVyaWZpY2F0aW9uSW5mbyIsIl9Ub3RwU2VjcmV0Iiwic2VjcmV0S2V5IiwiaGFzaGluZ0FsZ29yaXRobSIsImNvZGVMZW5ndGgiLCJjb2RlSW50ZXJ2YWxTZWNvbmRzIiwiZW5yb2xsbWVudENvbXBsZXRpb25EZWFkbGluZSIsInRvdHBTZXNzaW9uSW5mbyIsInNoYXJlZFNlY3JldEtleSIsInZlcmlmaWNhdGlvbkNvZGVMZW5ndGgiLCJwZXJpb2RTZWMiLCJmaW5hbGl6ZUVucm9sbG1lbnRUaW1lIiwiZ2VuZXJhdGVRckNvZGVVcmwiLCJhY2NvdW50TmFtZSIsImlzc3VlciIsInVzZURlZmF1bHRzIiwiX2lzRW1wdHlTdHJpbmciLCJpbnB1dCIsIkF1dGhJbnRlcm9wIiwiaW50ZXJuYWxMaXN0ZW5lcnMiLCJnZXRVaWQiLCJhc3NlcnRBdXRoQ29uZmlndXJlZCIsImFkZEF1dGhUb2tlbkxpc3RlbmVyIiwidXBkYXRlUHJvYWN0aXZlUmVmcmVzaCIsInJlbW92ZUF1dGhUb2tlbkxpc3RlbmVyIiwiZ2V0VmVyc2lvbkZvclBsYXRmb3JtIiwicmVnaXN0ZXJBdXRoIiwiX3JlZ2lzdGVyQ29tcG9uZW50IiwiaW1wb3J0X2NvbXBvbmVudCIsIkNvbXBvbmVudCIsImdldFByb3ZpZGVyIiwic2V0SW5zdGFudGlhdGlvbk1vZGUiLCJzZXRJbnN0YW5jZUNyZWF0ZWRDYWxsYmFjayIsIl9pbnN0YW5jZUlkZW50aWZpZXIiLCJfaW5zdGFuY2UiLCJhdXRoSW50ZXJuYWxQcm92aWRlciIsInJlZ2lzdGVyVmVyc2lvbiIsIkRFRkFVTFRfSURfVE9LRU5fTUFYX0FHRSIsImF1dGhJZFRva2VuTWF4QWdlIiwiZ2V0RXhwZXJpbWVudGFsU2V0dGluZyIsImxhc3RQb3N0ZWRJZFRva2VuIiwibWludENvb2tpZUZhY3RvcnkiLCJpZFRva2VuUmVzdWx0IiwiaWRUb2tlbkFnZSIsImdldEFwcCIsImF1dGhUb2tlblN5bmNQYXRoIiwiYXV0aFRva2VuU3luY1VybCIsIm1pbnRDb29raWUiLCJhdXRoRW11bGF0b3JIb3N0IiwiZ2V0RGVmYXVsdEVtdWxhdG9ySG9zdCIsImdldFNjcmlwdFBhcmVudEVsZW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNldEF0dHJpYnV0ZSIsIm9uZXJyb3IiLCJjaGFyc2V0IiwiaW1wb3J0X2FwcDIiLCJyZXF1aXJlIiwiaW1wb3J0X3V0aWwyIiwiaW1wb3J0X2xvZ2dlcjIiLCJpbXBvcnRfdHNsaWIyIiwiaW1wb3J0X2NvbXBvbmVudDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG1CQUFBO0FBQUFDLFFBQUEsQ0FBQUQsbUJBQUE7RUFBQUUsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUMsMENBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLG9CQUFBLEVBQUFBLENBQUEsS0FBQUEsb0JBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGtCQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENB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QUFDLE9BQUMsUUFBQXNSLEVBQUEsY0FBQUEsRUFBQSxHQUFJK0UsUUFBQTtBQUN2RDtBQUVBMkosc0JBQUEsQ0FBdUI7RUFDckJKLE9BQU9qZSxHQUFBLEVBQVc7SUFFaEIsT0FBTyxJQUFJMEMsT0FBQSxDQUFRLENBQUM4UyxPQUFBLEVBQVMxUSxNQUFBLEtBQVU7TUFDckMsTUFBTTBmLEVBQUEsR0FBSzlQLFFBQUEsQ0FBUytQLGFBQUEsQ0FBYyxRQUFRO01BQzFDRCxFQUFBLENBQUd3dkIsWUFBQSxDQUFhLE9BQU9oMEMsR0FBRztNQUMxQndrQixFQUFBLENBQUcrYixNQUFBLEdBQVMvcUIsT0FBQTtNQUNaZ1AsRUFBQSxDQUFHeXZCLE9BQUEsR0FBVXp3QyxDQUFBLElBQUk7UUFDZixNQUFNckgsS0FBQSxHQUFRSyxZQUFBLENBQVk7MENBQUE7UUFDMUJMLEtBQUEsQ0FBTWdKLFVBQUEsR0FBYTNCLENBQUE7UUFDbkJzQixNQUFBLENBQU8zSSxLQUFLO01BQ2Q7TUFDQXFvQixFQUFBLENBQUd6VCxJQUFBLEdBQU87TUFDVnlULEVBQUEsQ0FBRzB2QixPQUFBLEdBQVU7TUFDYkosc0JBQUEsQ0FBc0IsRUFBR3J1QixXQUFBLENBQVlqQixFQUFFO0lBQ3pDLENBQUM7O0VBR0hwRyxVQUFBLEVBQVk7RUFDWkYsaUJBQUEsRUFBbUI7RUFDbkJDLHlCQUFBLEVBQ0U7QUFDSDtBQUVEbTBCLFlBQUEsQ0FBWTs0QkFBQTs7O0FDaEpaLElBQUE2QixXQUFBLEdBQU9DLE9BQUE7QUFDUCxJQUFBQyxZQUFBLEdBQU9ELE9BQUE7QUFDUCxJQUFBRSxjQUFBLEdBQU9GLE9BQUE7QUFDUCxJQUFBRyxhQUFBLEdBQU9ILE9BQUE7QUFDUCxJQUFBSSxpQkFBQSxHQUFPSixPQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==