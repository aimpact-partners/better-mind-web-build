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

// .beyond/uimport/temp/@firebase/auth.1.10.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmaXJlYmFzZS9hdXRoLjEuMTAuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbW9kZWwvZW51bV9tYXBzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2Vycm9ycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2xvZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2Fzc2VydC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2xvY2F0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvbmF2aWdhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZGVsYXkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9lbXVsYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2ZldGNoX3Byb3ZpZGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvZXJyb3JzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3JlY2FwdGNoYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9hY2NvdW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdGltZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2lkX3Rva2VuX3Jlc3VsdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2ludmFsaWRhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3Byb2FjdGl2ZV9yZWZyZXNoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9tZXRhZGF0YS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3JlbG9hZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdG9rZW5fbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2luc3RhbnRpYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9pbl9tZW1vcnkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcGVyc2lzdGVuY2UvcGVyc2lzdGVuY2VfdXNlcl9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvYnJvd3Nlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3ZlcnNpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9taWRkbGV3YXJlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvcGFzc3dvcmRfcG9saWN5L2dldF9wYXNzd29yZF9wb2xpY3kudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9wYXNzd29yZF9wb2xpY3lfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2F1dGhfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9sb2FkX2pzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfbW9jay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX2VudGVycHJpc2VfdmVyaWZpZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9pbml0aWFsaXplLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvZW11bGF0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvYXV0aF9jcmVkZW50aWFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L2VtYWlsX2FuZF9wYXNzd29yZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2VtYWlsX2FuZF9wYXNzd29yZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2VtYWlsX2xpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvZW1haWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9pZHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvb2F1dGgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9zbXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYWN0aW9uX2NvZGVfdXJsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9lbWFpbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZmVkZXJhdGVkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9vYXV0aC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZmFjZWJvb2sudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2dvb2dsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZ2l0aHViLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL3NhbWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL3NhbWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL3R3aXR0ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9zaWduX3VwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9jcmVkZW50aWFsX2ltcGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9hbm9ueW1vdXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfZXJyb3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9wcm92aWRlcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9saW5rX3VubGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3JlYXV0aGVudGljYXRlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvY3JlZGVudGlhbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2N1c3RvbV90b2tlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2N1c3RvbV90b2tlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9pbmZvLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYWN0aW9uX2NvZGVfc2V0dGluZ3MudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9lbWFpbF9saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vY3JlYXRlX2F1dGhfdXJpLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvcHJvZmlsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2FjY291bnRfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2FkZGl0aW9uYWxfdXNlcl9pbmZvLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX3Nlc3Npb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfcmVzb2x2ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvbWZhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX3VzZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcGVyc2lzdGVuY2UvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2UvYnJvd3Nlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9sb2NhbF9zdG9yYWdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2Nvb2tpZV9zdG9yYWdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL3Nlc3Npb25fc3RvcmFnZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZXNzYWdlY2hhbm5lbC9wcm9taXNlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21lc3NhZ2VjaGFubmVsL3JlY2VpdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZXZlbnRfaWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWVzc2FnZWNoYW5uZWwvc2VuZGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2F1dGhfd2luZG93LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3V0aWwvd29ya2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2luZGV4ZWRfZGIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9tZmEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV9sb2FkZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV92ZXJpZmllci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9zdHJhdGVnaWVzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3Byb3ZpZGVycy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3Jlc29sdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvaWRwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYWJzdHJhY3RfcG9wdXBfcmVkaXJlY3Rfb3BlcmF0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcG9wdXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9yZWRpcmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9zdHJhdGVnaWVzL3JlZGlyZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvYXV0aF9ldmVudF9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvcHJvamVjdF9jb25maWcvZ2V0X3Byb2plY3RfY29uZmlnLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdmFsaWRhdGVfb3JpZ2luLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2lmcmFtZS9nYXBpLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2lmcmFtZS9pZnJhbWUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvdXRpbC9wb3B1cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2hhbmRsZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcG9wdXBfcmVkaXJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfYXNzZXJ0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21mYS9hc3NlcnRpb25zL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvYXNzZXJ0aW9ucy90b3RwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvZmlyZWJhc2VfaW50ZXJuYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9yZWdpc3Rlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9kaXN0L2VzbTIwMTcvaW5kZXguanMiXSwibmFtZXMiOlsiYXV0aF8xXzEwXzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQWN0aW9uQ29kZU9wZXJhdGlvbiIsIkFjdGlvbkNvZGVVUkwiLCJBdXRoQ3JlZGVudGlhbCIsIkF1dGhFcnJvckNvZGVzIiwiQVVUSF9FUlJPUl9DT0RFU19NQVBfRE9fTk9UX1VTRV9JTlRFUk5BTExZIiwiRW1haWxBdXRoQ3JlZGVudGlhbCIsIkVtYWlsQXV0aFByb3ZpZGVyIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJGYWN0b3JJZCIsIkdpdGh1YkF1dGhQcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsIk9BdXRoQ3JlZGVudGlhbCIsIk9BdXRoUHJvdmlkZXIiLCJPcGVyYXRpb25UeXBlIiwiUGhvbmVBdXRoQ3JlZGVudGlhbCIsIlBob25lQXV0aFByb3ZpZGVyIiwiUGhvbmVNdWx0aUZhY3RvckdlbmVyYXRvciIsIlByb3ZpZGVySWQiLCJSZWNhcHRjaGFWZXJpZmllciIsIlNBTUxBdXRoUHJvdmlkZXIiLCJTaWduSW5NZXRob2QiLCJUb3RwTXVsdGlGYWN0b3JHZW5lcmF0b3IiLCJUb3RwU2VjcmV0IiwiVHdpdHRlckF1dGhQcm92aWRlciIsImFwcGx5QWN0aW9uQ29kZSIsImJlZm9yZUF1dGhTdGF0ZUNoYW5nZWQiLCJicm93c2VyQ29va2llUGVyc2lzdGVuY2UiLCJicm93c2VyTG9jYWxQZXJzaXN0ZW5jZSIsImJyb3dzZXJQb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJicm93c2VyU2Vzc2lvblBlcnNpc3RlbmNlIiwiY2hlY2tBY3Rpb25Db2RlIiwiY29uZmlybVBhc3N3b3JkUmVzZXQiLCJjb25uZWN0QXV0aEVtdWxhdG9yIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZGVidWdFcnJvck1hcCIsImRlbGV0ZVVzZXIiLCJmZXRjaFNpZ25Jbk1ldGhvZHNGb3JFbWFpbCIsImdldEFkZGl0aW9uYWxVc2VySW5mbyIsImdldEF1dGgiLCJnZXRJZFRva2VuIiwiZ2V0SWRUb2tlblJlc3VsdCIsImdldE11bHRpRmFjdG9yUmVzb2x2ZXIiLCJnZXRSZWRpcmVjdFJlc3VsdCIsImluTWVtb3J5UGVyc2lzdGVuY2UiLCJpbmRleGVkREJMb2NhbFBlcnNpc3RlbmNlIiwiaW5pdGlhbGl6ZUF1dGgiLCJpbml0aWFsaXplUmVjYXB0Y2hhQ29uZmlnIiwiaXNTaWduSW5XaXRoRW1haWxMaW5rIiwibGlua1dpdGhDcmVkZW50aWFsIiwibGlua1dpdGhQaG9uZU51bWJlciIsImxpbmtXaXRoUG9wdXAiLCJsaW5rV2l0aFJlZGlyZWN0IiwibXVsdGlGYWN0b3IiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJvbklkVG9rZW5DaGFuZ2VkIiwicGFyc2VBY3Rpb25Db2RlVVJMIiwicHJvZEVycm9yTWFwIiwicmVhdXRoZW50aWNhdGVXaXRoQ3JlZGVudGlhbCIsInJlYXV0aGVudGljYXRlV2l0aFBob25lTnVtYmVyIiwicmVhdXRoZW50aWNhdGVXaXRoUG9wdXAiLCJyZWF1dGhlbnRpY2F0ZVdpdGhSZWRpcmVjdCIsInJlbG9hZCIsInJldm9rZUFjY2Vzc1Rva2VuIiwic2VuZEVtYWlsVmVyaWZpY2F0aW9uIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsInNlbmRTaWduSW5MaW5rVG9FbWFpbCIsInNldFBlcnNpc3RlbmNlIiwic2lnbkluQW5vbnltb3VzbHkiLCJzaWduSW5XaXRoQ3JlZGVudGlhbCIsInNpZ25JbldpdGhDdXN0b21Ub2tlbiIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsTGluayIsInNpZ25JbldpdGhQaG9uZU51bWJlciIsInNpZ25JbldpdGhQb3B1cCIsInNpZ25JbldpdGhSZWRpcmVjdCIsInNpZ25PdXQiLCJ1bmxpbmsiLCJ1cGRhdGVDdXJyZW50VXNlciIsInVwZGF0ZUVtYWlsIiwidXBkYXRlUGFzc3dvcmQiLCJ1cGRhdGVQaG9uZU51bWJlciIsInVwZGF0ZVByb2ZpbGUiLCJ1c2VEZXZpY2VMYW5ndWFnZSIsInZhbGlkYXRlUGFzc3dvcmQiLCJ2ZXJpZnlCZWZvcmVVcGRhdGVFbWFpbCIsInZlcmlmeVBhc3N3b3JkUmVzZXRDb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlBIT05FIiwiVE9UUCIsIkZBQ0VCT09LIiwiR0lUSFVCIiwiR09PR0xFIiwiUEFTU1dPUkQiLCJUV0lUVEVSIiwiRU1BSUxfTElOSyIsIkVNQUlMX1BBU1NXT1JEIiwiTElOSyIsIlJFQVVUSEVOVElDQVRFIiwiU0lHTl9JTiIsIkVNQUlMX1NJR05JTiIsIlBBU1NXT1JEX1JFU0VUIiwiUkVDT1ZFUl9FTUFJTCIsIlJFVkVSVF9TRUNPTkRfRkFDVE9SX0FERElUSU9OIiwiVkVSSUZZX0FORF9DSEFOR0VfRU1BSUwiLCJWRVJJRllfRU1BSUwiLCJfZGVidWdFcnJvck1hcCIsIl9wcm9kRXJyb3JNYXAiLCJfREVGQVVMVF9BVVRIX0VSUk9SX0ZBQ1RPUlkiLCJpbXBvcnRfdXRpbCIsIkVycm9yRmFjdG9yeSIsIkFETUlOX09OTFlfT1BFUkFUSU9OIiwiQVJHVU1FTlRfRVJST1IiLCJBUFBfTk9UX0FVVEhPUklaRUQiLCJBUFBfTk9UX0lOU1RBTExFRCIsIkNBUFRDSEFfQ0hFQ0tfRkFJTEVEIiwiQ09ERV9FWFBJUkVEIiwiQ09SRE9WQV9OT1RfUkVBRFkiLCJDT1JTX1VOU1VQUE9SVEVEIiwiQ1JFREVOVElBTF9BTFJFQURZX0lOX1VTRSIsIkNSRURFTlRJQUxfTUlTTUFUQ0giLCJDUkVERU5USUFMX1RPT19PTERfTE9HSU5fQUdBSU4iLCJERVBFTkRFTlRfU0RLX0lOSVRfQkVGT1JFX0FVVEgiLCJEWU5BTUlDX0xJTktfTk9UX0FDVElWQVRFRCIsIkVNQUlMX0NIQU5HRV9ORUVEU19WRVJJRklDQVRJT04iLCJFTUFJTF9FWElTVFMiLCJFTVVMQVRPUl9DT05GSUdfRkFJTEVEIiwiRVhQSVJFRF9PT0JfQ09ERSIsIkVYUElSRURfUE9QVVBfUkVRVUVTVCIsIklOVEVSTkFMX0VSUk9SIiwiSU5WQUxJRF9BUElfS0VZIiwiSU5WQUxJRF9BUFBfQ1JFREVOVElBTCIsIklOVkFMSURfQVBQX0lEIiwiSU5WQUxJRF9BVVRIIiwiSU5WQUxJRF9BVVRIX0VWRU5UIiwiSU5WQUxJRF9DRVJUX0hBU0giLCJJTlZBTElEX0NPREUiLCJJTlZBTElEX0NPTlRJTlVFX1VSSSIsIklOVkFMSURfQ09SRE9WQV9DT05GSUdVUkFUSU9OIiwiSU5WQUxJRF9DVVNUT01fVE9LRU4iLCJJTlZBTElEX0RZTkFNSUNfTElOS19ET01BSU4iLCJJTlZBTElEX0VNQUlMIiwiSU5WQUxJRF9FTVVMQVRPUl9TQ0hFTUUiLCJJTlZBTElEX0lEUF9SRVNQT05TRSIsIklOVkFMSURfTE9HSU5fQ1JFREVOVElBTFMiLCJJTlZBTElEX01FU1NBR0VfUEFZTE9BRCIsIklOVkFMSURfTUZBX1NFU1NJT04iLCJJTlZBTElEX09BVVRIX0NMSUVOVF9JRCIsIklOVkFMSURfT0FVVEhfUFJPVklERVIiLCJJTlZBTElEX09PQl9DT0RFIiwiSU5WQUxJRF9PUklHSU4iLCJJTlZBTElEX1BBU1NXT1JEIiwiSU5WQUxJRF9QRVJTSVNURU5DRSIsIklOVkFMSURfUEhPTkVfTlVNQkVSIiwiSU5WQUxJRF9QUk9WSURFUl9JRCIsIklOVkFMSURfUkVDSVBJRU5UX0VNQUlMIiwiSU5WQUxJRF9TRU5ERVIiLCJJTlZBTElEX1NFU1NJT05fSU5GTyIsIklOVkFMSURfVEVOQU5UX0lEIiwiTUZBX0lORk9fTk9UX0ZPVU5EIiwiTUZBX1JFUVVJUkVEIiwiTUlTU0lOR19BTkRST0lEX1BBQ0tBR0VfTkFNRSIsIk1JU1NJTkdfQVBQX0NSRURFTlRJQUwiLCJNSVNTSU5HX0FVVEhfRE9NQUlOIiwiTUlTU0lOR19DT0RFIiwiTUlTU0lOR19DT05USU5VRV9VUkkiLCJNSVNTSU5HX0lGUkFNRV9TVEFSVCIsIk1JU1NJTkdfSU9TX0JVTkRMRV9JRCIsIk1JU1NJTkdfT1JfSU5WQUxJRF9OT05DRSIsIk1JU1NJTkdfTUZBX0lORk8iLCJNSVNTSU5HX01GQV9TRVNTSU9OIiwiTUlTU0lOR19QSE9ORV9OVU1CRVIiLCJNSVNTSU5HX1NFU1NJT05fSU5GTyIsIk1PRFVMRV9ERVNUUk9ZRUQiLCJORUVEX0NPTkZJUk1BVElPTiIsIk5FVFdPUktfUkVRVUVTVF9GQUlMRUQiLCJOVUxMX1VTRVIiLCJOT19BVVRIX0VWRU5UIiwiTk9fU1VDSF9QUk9WSURFUiIsIk9QRVJBVElPTl9OT1RfQUxMT1dFRCIsIk9QRVJBVElPTl9OT1RfU1VQUE9SVEVEIiwiUE9QVVBfQkxPQ0tFRCIsIlBPUFVQX0NMT1NFRF9CWV9VU0VSIiwiUFJPVklERVJfQUxSRUFEWV9MSU5LRUQiLCJRVU9UQV9FWENFRURFRCIsIlJFRElSRUNUX0NBTkNFTExFRF9CWV9VU0VSIiwiUkVESVJFQ1RfT1BFUkFUSU9OX1BFTkRJTkciLCJSRUpFQ1RFRF9DUkVERU5USUFMIiwiU0VDT05EX0ZBQ1RPUl9BTFJFQURZX0VOUk9MTEVEIiwiU0VDT05EX0ZBQ1RPUl9MSU1JVF9FWENFRURFRCIsIlRFTkFOVF9JRF9NSVNNQVRDSCIsIlRJTUVPVVQiLCJUT0tFTl9FWFBJUkVEIiwiVE9PX01BTllfQVRURU1QVFNfVFJZX0xBVEVSIiwiVU5BVVRIT1JJWkVEX0RPTUFJTiIsIlVOU1VQUE9SVEVEX0ZJUlNUX0ZBQ1RPUiIsIlVOU1VQUE9SVEVEX1BFUlNJU1RFTkNFIiwiVU5TVVBQT1JURURfVEVOQU5UX09QRVJBVElPTiIsIlVOVkVSSUZJRURfRU1BSUwiLCJVU0VSX0NBTkNFTExFRCIsIlVTRVJfREVMRVRFRCIsIlVTRVJfRElTQUJMRUQiLCJVU0VSX01JU01BVENIIiwiVVNFUl9TSUdORURfT1VUIiwiV0VBS19QQVNTV09SRCIsIldFQl9TVE9SQUdFX1VOU1VQUE9SVEVEIiwiQUxSRUFEWV9JTklUSUFMSVpFRCIsIlJFQ0FQVENIQV9OT1RfRU5BQkxFRCIsIk1JU1NJTkdfUkVDQVBUQ0hBX1RPS0VOIiwiSU5WQUxJRF9SRUNBUFRDSEFfVE9LRU4iLCJJTlZBTElEX1JFQ0FQVENIQV9BQ1RJT04iLCJNSVNTSU5HX0NMSUVOVF9UWVBFIiwiTUlTU0lOR19SRUNBUFRDSEFfVkVSU0lPTiIsIklOVkFMSURfUkVDQVBUQ0hBX1ZFUlNJT04iLCJJTlZBTElEX1JFUV9UWVBFIiwiSU5WQUxJRF9IT1NUSU5HX0xJTktfRE9NQUlOIiwibG9nQ2xpZW50IiwiaW1wb3J0X2xvZ2dlciIsIkxvZ2dlciIsIl9sb2dXYXJuIiwibXNnIiwiYXJncyIsImxvZ0xldmVsIiwiTG9nTGV2ZWwiLCJXQVJOIiwid2FybiIsImltcG9ydF9hcHAiLCJTREtfVkVSU0lPTiIsIl9sb2dFcnJvciIsIkVSUk9SIiwiZXJyb3IiLCJfZmFpbCIsImF1dGhPckNvZGUiLCJyZXN0IiwiY3JlYXRlRXJyb3JJbnRlcm5hbCIsIl9jcmVhdGVFcnJvciIsIl9lcnJvcldpdGhDdXN0b21NZXNzYWdlIiwiYXV0aCIsImNvZGUiLCJtZXNzYWdlIiwiZXJyb3JNYXAiLCJPYmplY3QiLCJhc3NpZ24iLCJmYWN0b3J5IiwiY3JlYXRlIiwiYXBwTmFtZSIsIm5hbWUiLCJfc2VydmVyQXBwQ3VycmVudFVzZXJPcGVyYXRpb25Ob3RTdXBwb3J0ZWRFcnJvciIsIl9hc3NlcnRJbnN0YW5jZU9mIiwib2JqZWN0IiwiaW5zdGFuY2UiLCJjb25zdHJ1Y3Rvckluc3RhbmNlIiwiY29uc3RydWN0b3IiLCJmdWxsUGFyYW1zIiwic2xpY2UiLCJfZXJyb3JGYWN0b3J5IiwiX2Fzc2VydCIsImFzc2VydGlvbiIsImRlYnVnRmFpbCIsImZhaWx1cmUiLCJFcnJvciIsImRlYnVnQXNzZXJ0IiwiX2dldEN1cnJlbnRVcmwiLCJzZWxmIiwiX2EiLCJsb2NhdGlvbiIsImhyZWYiLCJfaXNIdHRwT3JIdHRwcyIsIl9nZXRDdXJyZW50U2NoZW1lIiwicHJvdG9jb2wiLCJfaXNPbmxpbmUiLCJuYXZpZ2F0b3IiLCJvbkxpbmUiLCJpc0Jyb3dzZXJFeHRlbnNpb24iLCJfZ2V0VXNlckxhbmd1YWdlIiwibmF2aWdhdG9yTGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJsYW5ndWFnZSIsIkRlbGF5Iiwic2hvcnREZWxheSIsImxvbmdEZWxheSIsImlzTW9iaWxlIiwiaXNNb2JpbGVDb3Jkb3ZhIiwiaXNSZWFjdE5hdGl2ZSIsImdldCIsIk1hdGgiLCJtaW4iLCJfZW11bGF0b3JVcmwiLCJjb25maWciLCJwYXRoIiwiZW11bGF0b3IiLCJ1cmwiLCJzdGFydHNXaXRoIiwiRmV0Y2hQcm92aWRlciIsImluaXRpYWxpemUiLCJmZXRjaEltcGwiLCJoZWFkZXJzSW1wbCIsInJlc3BvbnNlSW1wbCIsImZldGNoIiwiZ2xvYmFsVGhpcyIsImhlYWRlcnMiLCJIZWFkZXJzIiwicmVzcG9uc2UiLCJSZXNwb25zZSIsIlNFUlZFUl9FUlJPUl9NQVAiLCJDb29raWVBdXRoUHJveGllZEVuZHBvaW50cyIsIkRFRkFVTFRfQVBJX1RJTUVPVVRfTVMiLCJfYWRkVGlkSWZOZWNlc3NhcnkiLCJyZXF1ZXN0IiwidGVuYW50SWQiLCJfcGVyZm9ybUFwaVJlcXVlc3QiLCJtZXRob2QiLCJjdXN0b21FcnJvck1hcCIsIl9wZXJmb3JtRmV0Y2hXaXRoRXJyb3JIYW5kbGluZyIsImJvZHkiLCJwYXJhbXMiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJxdWVyeXN0cmluZyIsImtleSIsImFwaUtleSIsIl9nZXRBZGRpdGlvbmFsSGVhZGVycyIsImxhbmd1YWdlQ29kZSIsImZldGNoQXJncyIsImlzQ2xvdWRmbGFyZVdvcmtlciIsInJlZmVycmVyUG9saWN5IiwiX2dldEZpbmFsVGFyZ2V0IiwiYXBpSG9zdCIsImZldGNoRm4iLCJfY2FuSW5pdEVtdWxhdG9yIiwibmV0d29ya1RpbWVvdXQiLCJOZXR3b3JrVGltZW91dCIsIlByb21pc2UiLCJyYWNlIiwicHJvbWlzZSIsImNsZWFyTmV0d29ya1RpbWVvdXQiLCJqc29uIiwiX21ha2VUYWdnZWRFcnJvciIsIm9rIiwiZXJyb3JNZXNzYWdlIiwic2VydmVyRXJyb3JDb2RlIiwic2VydmVyRXJyb3JNZXNzYWdlIiwic3BsaXQiLCJhdXRoRXJyb3IiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJlIiwiRmlyZWJhc2VFcnJvciIsIlN0cmluZyIsIl9wZXJmb3JtU2lnbkluUmVxdWVzdCIsInNlcnZlclJlc3BvbnNlIiwiX3NlcnZlclJlc3BvbnNlIiwiaG9zdCIsImJhc2UiLCJhdXRoSW50ZXJuYWwiLCJmaW5hbFRhcmdldCIsImFwaVNjaGVtZSIsImluY2x1ZGVzIiwiX3BlcnNpc3RlbmNlTWFuYWdlckF2YWlsYWJsZSIsIl9nZXRQZXJzaXN0ZW5jZVR5cGUiLCJjb29raWVQZXJzaXN0ZW5jZSIsIl9nZXRQZXJzaXN0ZW5jZSIsInRvU3RyaW5nIiwiX3BhcnNlRW5mb3JjZW1lbnRTdGF0ZSIsImVuZm9yY2VtZW50U3RhdGVTdHIiLCJjbGVhclRpbWVvdXQiLCJ0aW1lciIsIl8iLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwiZXJyb3JQYXJhbXMiLCJlbWFpbCIsInBob25lTnVtYmVyIiwiY3VzdG9tRGF0YSIsIl90b2tlblJlc3BvbnNlIiwiaXNWMiIsImdyZWNhcHRjaGEiLCJnZXRSZXNwb25zZSIsImlzRW50ZXJwcmlzZSIsImVudGVycHJpc2UiLCJSZWNhcHRjaGFDb25maWciLCJzaXRlS2V5IiwicmVjYXB0Y2hhRW5mb3JjZW1lbnRTdGF0ZSIsInJlY2FwdGNoYUtleSIsImdldFByb3ZpZGVyRW5mb3JjZW1lbnRTdGF0ZSIsInByb3ZpZGVyU3RyIiwibGVuZ3RoIiwicHJvdmlkZXIiLCJlbmZvcmNlbWVudFN0YXRlIiwiaXNQcm92aWRlckVuYWJsZWQiLCJpc0FueVByb3ZpZGVyRW5hYmxlZCIsImdldFJlY2FwdGNoYVBhcmFtcyIsInJlY2FwdGNoYVNpdGVLZXkiLCJnZXRSZWNhcHRjaGFDb25maWciLCJkZWxldGVBY2NvdW50IiwiZGVsZXRlTGlua2VkQWNjb3VudHMiLCJnZXRBY2NvdW50SW5mbyIsInV0Y1RpbWVzdGFtcFRvRGF0ZVN0cmluZyIsInV0Y1RpbWVzdGFtcCIsImRhdGUiLCJEYXRlIiwiTnVtYmVyIiwiaXNOYU4iLCJnZXRUaW1lIiwidG9VVENTdHJpbmciLCJ1c2VyIiwiZm9yY2VSZWZyZXNoIiwiZ2V0TW9kdWxhckluc3RhbmNlIiwidXNlckludGVybmFsIiwidG9rZW4iLCJjbGFpbXMiLCJfcGFyc2VUb2tlbiIsImV4cCIsImF1dGhfdGltZSIsImlhdCIsImZpcmViYXNlIiwic2lnbkluUHJvdmlkZXIiLCJhdXRoVGltZSIsInNlY29uZHNTdHJpbmdUb01pbGxpc2Vjb25kcyIsImlzc3VlZEF0VGltZSIsImV4cGlyYXRpb25UaW1lIiwic2lnbkluU2Vjb25kRmFjdG9yIiwic2Vjb25kcyIsImFsZ29yaXRobSIsInBheWxvYWQiLCJzaWduYXR1cmUiLCJkZWNvZGVkIiwiYmFzZTY0RGVjb2RlIiwicGFyc2UiLCJfdG9rZW5FeHBpcmVzSW4iLCJwYXJzZWRUb2tlbiIsIl9sb2dvdXRJZkludmFsaWRhdGVkIiwiYnlwYXNzQXV0aFN0YXRlIiwiaXNVc2VySW52YWxpZGF0ZWQiLCJjdXJyZW50VXNlciIsIlByb2FjdGl2ZVJlZnJlc2giLCJpc1J1bm5pbmciLCJ0aW1lcklkIiwiZXJyb3JCYWNrb2ZmIiwiX3N0YXJ0Iiwic2NoZWR1bGUiLCJfc3RvcCIsImdldEludGVydmFsIiwid2FzRXJyb3IiLCJpbnRlcnZhbCIsImV4cFRpbWUiLCJzdHNUb2tlbk1hbmFnZXIiLCJub3ciLCJtYXgiLCJpdGVyYXRpb24iLCJVc2VyTWV0YWRhdGEiLCJjcmVhdGVkQXQiLCJsYXN0TG9naW5BdCIsIl9pbml0aWFsaXplVGltZSIsImxhc3RTaWduSW5UaW1lIiwiY3JlYXRpb25UaW1lIiwiX2NvcHkiLCJtZXRhZGF0YSIsInRvSlNPTiIsIl9yZWxvYWRXaXRob3V0U2F2aW5nIiwiaWRUb2tlbiIsInVzZXJzIiwiY29yZUFjY291bnQiLCJfbm90aWZ5UmVsb2FkTGlzdGVuZXIiLCJuZXdQcm92aWRlckRhdGEiLCJwcm92aWRlclVzZXJJbmZvIiwiZXh0cmFjdFByb3ZpZGVyRGF0YSIsInByb3ZpZGVyRGF0YSIsIm1lcmdlUHJvdmlkZXJEYXRhIiwib2xkSXNBbm9ueW1vdXMiLCJpc0Fub255bW91cyIsIm5ld0lzQW5vbnltb3VzIiwicGFzc3dvcmRIYXNoIiwidXBkYXRlcyIsInVpZCIsImxvY2FsSWQiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwicGhvdG9VcmwiLCJlbWFpbFZlcmlmaWVkIiwiX3BlcnNpc3RVc2VySWZDdXJyZW50IiwiX25vdGlmeUxpc3RlbmVyc0lmQ3VycmVudCIsIm9yaWdpbmFsIiwibmV3RGF0YSIsImRlZHVwZWQiLCJmaWx0ZXIiLCJvIiwic29tZSIsIm4iLCJwcm92aWRlcklkIiwicHJvdmlkZXJzIiwibWFwIiwiaW1wb3J0X3RzbGliIiwiX19yZXN0IiwicmF3SWQiLCJyZXF1ZXN0U3RzVG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJ0b2tlbkFwaUhvc3QiLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbiIsImV4cGlyZXNJbiIsImV4cGlyZXNfaW4iLCJyZWZyZXNoX3Rva2VuIiwicmV2b2tlVG9rZW4iLCJTdHNUb2tlbk1hbmFnZXIiLCJfU3RzVG9rZW5NYW5hZ2VyIiwiaXNFeHBpcmVkIiwidXBkYXRlRnJvbVNlcnZlclJlc3BvbnNlIiwidXBkYXRlVG9rZW5zQW5kRXhwaXJhdGlvbiIsInVwZGF0ZUZyb21JZFRva2VuIiwiZ2V0VG9rZW4iLCJyZWZyZXNoIiwiY2xlYXJSZWZyZXNoVG9rZW4iLCJvbGRUb2tlbiIsImV4cGlyZXNJblNlYyIsImZyb21KU09OIiwibWFuYWdlciIsIl9hc3NpZ24iLCJfY2xvbmUiLCJfcGVyZm9ybVJlZnJlc2giLCJhc3NlcnRTdHJpbmdPclVuZGVmaW5lZCIsIlVzZXJJbXBsIiwiX1VzZXJJbXBsIiwib3B0IiwicHJvYWN0aXZlUmVmcmVzaCIsInJlbG9hZFVzZXJJbmZvIiwicmVsb2FkTGlzdGVuZXIiLCJ1c2VySW5mbyIsIm5ld1VzZXIiLCJfb25SZWxvYWQiLCJjYWxsYmFjayIsIl9zdGFydFByb2FjdGl2ZVJlZnJlc2giLCJfc3RvcFByb2FjdGl2ZVJlZnJlc2giLCJfdXBkYXRlVG9rZW5zSWZOZWNlc3NhcnkiLCJyZWxvYWQyIiwidG9rZW5zUmVmcmVzaGVkIiwiZGVsZXRlIiwiX2lzRmlyZWJhc2VTZXJ2ZXJBcHAiLCJhcHAiLCJfcmVkaXJlY3RFdmVudElkIiwiX2Zyb21KU09OIiwiX2IiLCJfYyIsIl9kIiwiX2UiLCJfZiIsIl9nIiwiX2giLCJwbGFpbk9iamVjdFRva2VuTWFuYWdlciIsIkFycmF5IiwiaXNBcnJheSIsIl9mcm9tSWRUb2tlblJlc3BvbnNlIiwiaWRUb2tlblJlc3BvbnNlIiwiX2Zyb21HZXRBY2NvdW50SW5mb1Jlc3BvbnNlIiwiaW5zdGFuY2VDYWNoZSIsIk1hcCIsIl9nZXRJbnN0YW5jZSIsImNscyIsIkZ1bmN0aW9uIiwic2V0IiwiSW5NZW1vcnlQZXJzaXN0ZW5jZSIsInR5cGUiLCJzdG9yYWdlIiwiX2lzQXZhaWxhYmxlIiwiX3NldCIsInZhbHVlIiwiX2dldCIsIl9yZW1vdmUiLCJfYWRkTGlzdGVuZXIiLCJfa2V5IiwiX2xpc3RlbmVyIiwiX3JlbW92ZUxpc3RlbmVyIiwiX3BlcnNpc3RlbmNlS2V5TmFtZSIsIlBlcnNpc3RlbmNlVXNlck1hbmFnZXIiLCJfUGVyc2lzdGVuY2VVc2VyTWFuYWdlciIsInBlcnNpc3RlbmNlIiwidXNlcktleSIsIm5hbWUyIiwiZnVsbFVzZXJLZXkiLCJmdWxsUGVyc2lzdGVuY2VLZXkiLCJib3VuZEV2ZW50SGFuZGxlciIsIl9vblN0b3JhZ2VFdmVudCIsImJpbmQiLCJzZXRDdXJyZW50VXNlciIsImdldEN1cnJlbnRVc2VyIiwiYmxvYiIsImNhdGNoIiwicmVtb3ZlQ3VycmVudFVzZXIiLCJzYXZlUGVyc2lzdGVuY2VGb3JSZWRpcmVjdCIsIm5ld1BlcnNpc3RlbmNlIiwicGVyc2lzdGVuY2VIaWVyYXJjaHkiLCJhdmFpbGFibGVQZXJzaXN0ZW5jZXMiLCJhbGwiLCJzZWxlY3RlZFBlcnNpc3RlbmNlIiwidXNlclRvTWlncmF0ZSIsIm1pZ3JhdGlvbkhpZXJhcmNoeSIsInAiLCJfc2hvdWxkQWxsb3dNaWdyYXRpb24iLCJfZ2V0QnJvd3Nlck5hbWUiLCJ1c2VyQWdlbnQiLCJ1YSIsIl9pc0lFTW9iaWxlIiwiX2lzRmlyZWZveCIsIl9pc0JsYWNrQmVycnkiLCJfaXNXZWJPUyIsIl9pc1NhZmFyaSIsIl9pc0Nocm9tZUlPUyIsIl9pc0FuZHJvaWQiLCJyZSIsIm1hdGNoZXMiLCJtYXRjaCIsImdldFVBIiwidGVzdCIsIl9pc0lPUyIsIl9pc0lPUzdPcjgiLCJfaXNJT1NTdGFuZGFsb25lIiwid2luZG93Iiwic3RhbmRhbG9uZSIsIl9pc0lFMTAiLCJpc0lFIiwiZG9jdW1lbnQiLCJkb2N1bWVudE1vZGUiLCJfaXNNb2JpbGVCcm93c2VyIiwiX2dldENsaWVudFZlcnNpb24iLCJjbGllbnRQbGF0Zm9ybSIsImZyYW1ld29ya3MiLCJyZXBvcnRlZFBsYXRmb3JtIiwicmVwb3J0ZWRGcmFtZXdvcmtzIiwiam9pbiIsIkF1dGhNaWRkbGV3YXJlUXVldWUiLCJxdWV1ZSIsInB1c2hDYWxsYmFjayIsIm9uQWJvcnQiLCJ3cmFwcGVkQ2FsbGJhY2siLCJyZXNvbHZlIiwicmVzdWx0IiwicHVzaCIsImluZGV4IiwicnVuTWlkZGxld2FyZSIsIm5leHRVc2VyIiwib25BYm9ydFN0YWNrIiwiYmVmb3JlU3RhdGVDYWxsYmFjayIsInJldmVyc2UiLCJvcmlnaW5hbE1lc3NhZ2UiLCJfZ2V0UGFzc3dvcmRQb2xpY3kiLCJNSU5JTVVNX01JTl9QQVNTV09SRF9MRU5HVEgiLCJQYXNzd29yZFBvbGljeUltcGwiLCJyZXNwb25zZU9wdGlvbnMiLCJjdXN0b21TdHJlbmd0aE9wdGlvbnMiLCJtaW5QYXNzd29yZExlbmd0aCIsIm1heFBhc3N3b3JkTGVuZ3RoIiwiY29udGFpbnNMb3dlcmNhc2VDaGFyYWN0ZXIiLCJjb250YWluc0xvd2VyY2FzZUxldHRlciIsImNvbnRhaW5zVXBwZXJjYXNlQ2hhcmFjdGVyIiwiY29udGFpbnNVcHBlcmNhc2VMZXR0ZXIiLCJjb250YWluc051bWVyaWNDaGFyYWN0ZXIiLCJjb250YWluc05vbkFscGhhbnVtZXJpY0NoYXJhY3RlciIsImFsbG93ZWROb25BbHBoYW51bWVyaWNDaGFyYWN0ZXJzIiwiZm9yY2VVcGdyYWRlT25TaWduaW4iLCJzY2hlbWFWZXJzaW9uIiwicGFzc3dvcmQiLCJzdGF0dXMiLCJpc1ZhbGlkIiwicGFzc3dvcmRQb2xpY3kiLCJ2YWxpZGF0ZVBhc3N3b3JkTGVuZ3RoT3B0aW9ucyIsInZhbGlkYXRlUGFzc3dvcmRDaGFyYWN0ZXJPcHRpb25zIiwibWVldHNNaW5QYXNzd29yZExlbmd0aCIsIm1lZXRzTWF4UGFzc3dvcmRMZW5ndGgiLCJ1cGRhdGVQYXNzd29yZENoYXJhY3Rlck9wdGlvbnNTdGF0dXNlcyIsInBhc3N3b3JkQ2hhciIsImkiLCJjaGFyQXQiLCJBdXRoSW1wbCIsImhlYXJ0YmVhdFNlcnZpY2VQcm92aWRlciIsImFwcENoZWNrU2VydmljZVByb3ZpZGVyIiwiZW11bGF0b3JDb25maWciLCJvcGVyYXRpb25zIiwiYXV0aFN0YXRlU3Vic2NyaXB0aW9uIiwiU3Vic2NyaXB0aW9uIiwiaWRUb2tlblN1YnNjcmlwdGlvbiIsImJlZm9yZVN0YXRlUXVldWUiLCJyZWRpcmVjdFVzZXIiLCJpc1Byb2FjdGl2ZVJlZnJlc2hFbmFibGVkIiwiRVhQRUNURURfUEFTU1dPUkRfUE9MSUNZX1NDSEVNQV9WRVJTSU9OIiwiX2lzSW5pdGlhbGl6ZWQiLCJfZGVsZXRlZCIsIl9pbml0aWFsaXphdGlvblByb21pc2UiLCJfcG9wdXBSZWRpcmVjdFJlc29sdmVyIiwiX2FnZW50UmVjYXB0Y2hhQ29uZmlnIiwiX3RlbmFudFJlY2FwdGNoYUNvbmZpZ3MiLCJfcHJvamVjdFBhc3N3b3JkUG9saWN5IiwiX3RlbmFudFBhc3N3b3JkUG9saWNpZXMiLCJfcmVzb2x2ZVBlcnNpc3RlbmNlTWFuYWdlckF2YWlsYWJsZSIsImxhc3ROb3RpZmllZFVpZCIsInNldHRpbmdzIiwiYXBwVmVyaWZpY2F0aW9uRGlzYWJsZWRGb3JUZXN0aW5nIiwiY2xpZW50VmVyc2lvbiIsInNka0NsaWVudFZlcnNpb24iLCJfaW5pdGlhbGl6ZVdpdGhQZXJzaXN0ZW5jZSIsInBvcHVwUmVkaXJlY3RSZXNvbHZlciIsInBlcnNpc3RlbmNlTWFuYWdlciIsImNhbGwiLCJfc2hvdWxkSW5pdFByb2FjdGl2ZWx5IiwiX2luaXRpYWxpemUiLCJpbml0aWFsaXplQ3VycmVudFVzZXIiLCJhc3NlcnRlZFBlcnNpc3RlbmNlIiwiX2N1cnJlbnRVc2VyIiwiX3VwZGF0ZUN1cnJlbnRVc2VyIiwiaW5pdGlhbGl6ZUN1cnJlbnRVc2VyRnJvbUlkVG9rZW4iLCJkaXJlY3RseVNldEN1cnJlbnRVc2VyIiwiZXJyIiwiY29uc29sZSIsImF1dGhJZFRva2VuIiwidGhlbiIsInByZXZpb3VzbHlTdG9yZWRVc2VyIiwiZnV0dXJlQ3VycmVudFVzZXIiLCJuZWVkc1RvY2hlY2tNaWRkbGV3YXJlIiwiYXV0aERvbWFpbiIsImdldE9ySW5pdFJlZGlyZWN0UGVyc2lzdGVuY2VNYW5hZ2VyIiwicmVkaXJlY3RVc2VyRXZlbnRJZCIsInN0b3JlZFVzZXJFdmVudElkIiwidHJ5UmVkaXJlY3RTaWduSW4iLCJfb3ZlcnJpZGVSZWRpcmVjdFJlc3VsdCIsInJlbG9hZEFuZFNldEN1cnJlbnRVc2VyT3JDbGVhciIsInJlZGlyZWN0UmVzb2x2ZXIiLCJfY29tcGxldGVSZWRpcmVjdEZuIiwiX3NldFJlZGlyZWN0VXNlciIsIl9kZWxldGUiLCJ1c2VyRXh0ZXJuIiwic2tpcEJlZm9yZVN0YXRlQ2FsbGJhY2tzIiwibm90aWZ5QXV0aExpc3RlbmVycyIsInJlZGlyZWN0UGVyc2lzdGVuY2VNYW5hZ2VyIiwiX2dldFJlY2FwdGNoYUNvbmZpZyIsIl9nZXRQYXNzd29yZFBvbGljeUludGVybmFsIiwiX3VwZGF0ZVBhc3N3b3JkUG9saWN5IiwiX3VwZGF0ZUVycm9yTWFwIiwibmV4dE9yT2JzZXJ2ZXIiLCJjb21wbGV0ZWQiLCJyZWdpc3RlclN0YXRlTGlzdGVuZXIiLCJhdXRoU3RhdGVSZWFkeSIsInVuc3Vic2NyaWJlIiwidG9rZW5UeXBlIiwicmVkaXJlY3RNYW5hZ2VyIiwicmVzb2x2ZXIiLCJfcmVkaXJlY3RQZXJzaXN0ZW5jZSIsIl9yZWRpcmVjdFVzZXJGb3JJZCIsImlkIiwibmV4dCIsImN1cnJlbnRVaWQiLCJzdWJzY3JpcHRpb24iLCJjYiIsImlzVW5zdWJzY3JpYmVkIiwiYWRkT2JzZXJ2ZXIiLCJhY3Rpb24iLCJfbG9nRnJhbWV3b3JrIiwiZnJhbWV3b3JrIiwic29ydCIsIl9nZXRGcmFtZXdvcmtzIiwib3B0aW9ucyIsImFwcElkIiwiaGVhcnRiZWF0c0hlYWRlciIsImdldEltbWVkaWF0ZSIsIm9wdGlvbmFsIiwiZ2V0SGVhcnRiZWF0c0hlYWRlciIsImFwcENoZWNrVG9rZW4iLCJfZ2V0QXBwQ2hlY2tUb2tlbiIsImFwcENoZWNrVG9rZW5SZXN1bHQiLCJfY2FzdEF1dGgiLCJvYnNlcnZlciIsImNyZWF0ZVN1YnNjcmliZSIsImV4dGVybmFsSlNQcm92aWRlciIsImxvYWRKUyIsInJlY2FwdGNoYVYyU2NyaXB0IiwicmVjYXB0Y2hhRW50ZXJwcmlzZVNjcmlwdCIsImdhcGlTY3JpcHQiLCJfc2V0RXh0ZXJuYWxKU1Byb3ZpZGVyIiwiX2xvYWRKUyIsIl9yZWNhcHRjaGFWMlNjcmlwdFVybCIsIl9yZWNhcHRjaGFFbnRlcnByaXNlU2NyaXB0VXJsIiwiX2dhcGlTY3JpcHRVcmwiLCJfZ2VuZXJhdGVDYWxsYmFja05hbWUiLCJwcmVmaXgiLCJmbG9vciIsInJhbmRvbSIsIl9TT0xWRV9USU1FX01TIiwiX0VYUElSQVRJT05fVElNRV9NUyIsIl9XSURHRVRfSURfU1RBUlQiLCJNb2NrUmVDYXB0Y2hhIiwiY291bnRlciIsIl93aWRnZXRzIiwicmVuZGVyIiwiY29udGFpbmVyIiwicGFyYW1ldGVycyIsIk1vY2tXaWRnZXQiLCJyZXNldCIsIm9wdFdpZGdldElkIiwiZXhlY3V0ZSIsIk1vY2tHcmVDQVBUQ0hBVG9wTGV2ZWwiLCJNb2NrR3JlQ0FQVENIQSIsInJlYWR5IiwiX3NpdGVLZXkiLCJfb3B0aW9ucyIsIl9jb250YWluZXIiLCJfcGFyYW1ldGVycyIsImNvbnRhaW5lck9ySWQiLCJkZWxldGVkIiwicmVzcG9uc2VUb2tlbiIsImNsaWNrSGFuZGxlciIsImdldEVsZW1lbnRCeUlkIiwiaXNWaXNpYmxlIiwic2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGVja0lmRGVsZXRlZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZW5lcmF0ZVJhbmRvbUFscGhhTnVtZXJpY1N0cmluZyIsImV4cGlyZWRDYWxsYmFjayIsImxlbiIsImNoYXJzIiwiYWxsb3dlZENoYXJzIiwiUkVDQVBUQ0hBX0VOVEVSUFJJU0VfVkVSSUZJRVJfVFlQRSIsIkZBS0VfVE9LRU4iLCJSZWNhcHRjaGFFbnRlcnByaXNlVmVyaWZpZXIiLCJhdXRoRXh0ZXJuIiwidmVyaWZ5IiwicmV0cmlldmVTaXRlS2V5IiwiY2xpZW50VHlwZSIsInZlcnNpb24iLCJyZXRyaWV2ZVJlY2FwdGNoYVRva2VuIiwibW9ja1JlY2FwdGNoYSIsImluamVjdFJlY2FwdGNoYUZpZWxkcyIsImlzQ2FwdGNoYVJlc3AiLCJpc0Zha2VUb2tlbiIsInZlcmlmaWVyIiwiY2FwdGNoYVJlc3BvbnNlIiwibmV3UmVxdWVzdCIsInBob25lRW5yb2xsbWVudEluZm8iLCJyZWNhcHRjaGFUb2tlbiIsInBob25lU2lnbkluSW5mbyIsImhhbmRsZVJlY2FwdGNoYUZsb3ciLCJhdXRoSW5zdGFuY2UiLCJhY3Rpb25OYW1lIiwiYWN0aW9uTWV0aG9kIiwicmVjYXB0Y2hhQXV0aFByb3ZpZGVyIiwicmVxdWVzdFdpdGhSZWNhcHRjaGEiLCJsb2ciLCJfYTIiLCJyZXF1ZXN0V2l0aFJlY2FwdGNoYUZpZWxkcyIsIl9pbml0aWFsaXplUmVjYXB0Y2hhQ29uZmlnIiwiZGVwcyIsIl9nZXRQcm92aWRlciIsImlzSW5pdGlhbGl6ZWQiLCJhdXRoMiIsImluaXRpYWxPcHRpb25zIiwiZ2V0T3B0aW9ucyIsImRlZXBFcXVhbCIsIl9pbml0aWFsaXplQXV0aEluc3RhbmNlIiwiaGllcmFyY2h5IiwiZGlzYWJsZVdhcm5pbmdzIiwiZXh0cmFjdFByb3RvY29sIiwicG9ydCIsImV4dHJhY3RIb3N0QW5kUG9ydCIsInBvcnRTdHIiLCJmcmVlemUiLCJlbWl0RW11bGF0b3JXYXJuaW5nIiwicHJvdG9jb2xFbmQiLCJpbmRleE9mIiwic3Vic3RyIiwiYXV0aG9yaXR5IiwiZXhlYyIsImhvc3RBbmRQb3J0IiwicG9wIiwiYnJhY2tldGVkSVB2NiIsInBhcnNlUG9ydCIsImF0dGFjaEJhbm5lciIsImVsIiwiY3JlYXRlRWxlbWVudCIsInN0eSIsInN0eWxlIiwiaW5uZXJUZXh0IiwicG9zaXRpb24iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsImNvbG9yIiwiYm90dG9tIiwibGVmdCIsIm1hcmdpbiIsInpJbmRleCIsInRleHRBbGlnbiIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiaW5mbyIsInJlYWR5U3RhdGUiLCJzaWduSW5NZXRob2QiLCJfZ2V0SWRUb2tlblJlc3BvbnNlIiwiX2F1dGgiLCJfbGlua1RvSWRUb2tlbiIsIl9pZFRva2VuIiwiX2dldFJlYXV0aGVudGljYXRpb25SZXNvbHZlciIsInJlc2V0UGFzc3dvcmQiLCJ1cGRhdGVFbWFpbFBhc3N3b3JkIiwibGlua0VtYWlsUGFzc3dvcmQiLCJhcHBseUFjdGlvbkNvZGUkMSIsInNpZ25JbldpdGhQYXNzd29yZCIsInNlbmRPb2JDb2RlIiwic2VuZEVtYWlsVmVyaWZpY2F0aW9uJDEiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsJDEiLCJzZW5kU2lnbkluTGlua1RvRW1haWwkMSIsInZlcmlmeUFuZENoYW5nZUVtYWlsIiwic2lnbkluV2l0aEVtYWlsTGluayQxIiwic2lnbkluV2l0aEVtYWlsTGlua0ZvckxpbmtpbmciLCJfRW1haWxBdXRoQ3JlZGVudGlhbCIsIl9lbWFpbCIsIl9wYXNzd29yZCIsIl90ZW5hbnRJZCIsIl9mcm9tRW1haWxBbmRQYXNzd29yZCIsIl9mcm9tRW1haWxBbmRDb2RlIiwib29iQ29kZSIsIm9iaiIsInJldHVyblNlY3VyZVRva2VuIiwic2lnbkluV2l0aElkcCIsIklEUF9SRVFVRVNUX1VSSSQxIiwiX09BdXRoQ3JlZGVudGlhbCIsInBlbmRpbmdUb2tlbiIsIl9mcm9tUGFyYW1zIiwiY3JlZCIsIm5vbmNlIiwib2F1dGhUb2tlbiIsIm9hdXRoVG9rZW5TZWNyZXQiLCJzZWNyZXQiLCJidWlsZFJlcXVlc3QiLCJhdXRvQ3JlYXRlIiwicmVxdWVzdFVyaSIsInBvc3RCb2R5Iiwic2VuZFBob25lVmVyaWZpY2F0aW9uQ29kZSIsInNpZ25JbldpdGhQaG9uZU51bWJlciQxIiwibGlua1dpdGhQaG9uZU51bWJlciQxIiwidGVtcG9yYXJ5UHJvb2YiLCJWRVJJRllfUEhPTkVfTlVNQkVSX0ZPUl9FWElTVElOR19FUlJPUl9NQVBfIiwidmVyaWZ5UGhvbmVOdW1iZXJGb3JFeGlzdGluZyIsImFwaVJlcXVlc3QiLCJvcGVyYXRpb24iLCJfUGhvbmVBdXRoQ3JlZGVudGlhbCIsIl9mcm9tVmVyaWZpY2F0aW9uIiwidmVyaWZpY2F0aW9uSWQiLCJ2ZXJpZmljYXRpb25Db2RlIiwiX2Zyb21Ub2tlblJlc3BvbnNlIiwiX21ha2VWZXJpZmljYXRpb25SZXF1ZXN0Iiwic2Vzc2lvbkluZm8iLCJwYXJzZU1vZGUiLCJtb2RlIiwicGFyc2VEZWVwTGluayIsImxpbmsiLCJxdWVyeXN0cmluZ0RlY29kZSIsImV4dHJhY3RRdWVyeXN0cmluZyIsImRvdWJsZURlZXBMaW5rIiwiaU9TRGVlcExpbmsiLCJpT1NEb3VibGVEZWVwTGluayIsIl9BY3Rpb25Db2RlVVJMIiwiYWN0aW9uTGluayIsInNlYXJjaFBhcmFtcyIsImNvbnRpbnVlVXJsIiwicGFyc2VMaW5rIiwiX0VtYWlsQXV0aFByb3ZpZGVyIiwiUFJPVklERVJfSUQiLCJjcmVkZW50aWFsIiwiY3JlZGVudGlhbFdpdGhMaW5rIiwiZW1haWxMaW5rIiwiYWN0aW9uQ29kZVVybCIsIkVNQUlMX1BBU1NXT1JEX1NJR05fSU5fTUVUSE9EIiwiRU1BSUxfTElOS19TSUdOX0lOX01FVEhPRCIsIkZlZGVyYXRlZEF1dGhQcm92aWRlciIsImRlZmF1bHRMYW5ndWFnZUNvZGUiLCJjdXN0b21QYXJhbWV0ZXJzIiwic2V0RGVmYXVsdExhbmd1YWdlIiwic2V0Q3VzdG9tUGFyYW1ldGVycyIsImN1c3RvbU9BdXRoUGFyYW1ldGVycyIsImdldEN1c3RvbVBhcmFtZXRlcnMiLCJCYXNlT0F1dGhQcm92aWRlciIsInNjb3BlcyIsImFkZFNjb3BlIiwic2NvcGUiLCJnZXRTY29wZXMiLCJfT0F1dGhQcm92aWRlciIsImNyZWRlbnRpYWxGcm9tSlNPTiIsIl9jcmVkZW50aWFsIiwicmF3Tm9uY2UiLCJjcmVkZW50aWFsRnJvbVJlc3VsdCIsInVzZXJDcmVkZW50aWFsIiwib2F1dGhDcmVkZW50aWFsRnJvbVRhZ2dlZE9iamVjdCIsImNyZWRlbnRpYWxGcm9tRXJyb3IiLCJ0b2tlblJlc3BvbnNlIiwib2F1dGhJZFRva2VuIiwib2F1dGhBY2Nlc3NUb2tlbiIsIl9GYWNlYm9va0F1dGhQcm92aWRlciIsIkZBQ0VCT09LX1NJR05fSU5fTUVUSE9EIiwiY3JlZGVudGlhbEZyb21UYWdnZWRPYmplY3QiLCJfR29vZ2xlQXV0aFByb3ZpZGVyIiwiR09PR0xFX1NJR05fSU5fTUVUSE9EIiwiX0dpdGh1YkF1dGhQcm92aWRlciIsIkdJVEhVQl9TSUdOX0lOX01FVEhPRCIsIklEUF9SRVFVRVNUX1VSSSIsIlNBTUxBdXRoQ3JlZGVudGlhbCIsIl9TQU1MQXV0aENyZWRlbnRpYWwiLCJfY3JlYXRlIiwiU0FNTF9QUk9WSURFUl9QUkVGSVgiLCJfU0FNTEF1dGhQcm92aWRlciIsInNhbWxDcmVkZW50aWFsRnJvbVRhZ2dlZE9iamVjdCIsIl9Ud2l0dGVyQXV0aFByb3ZpZGVyIiwiVFdJVFRFUl9TSUdOX0lOX01FVEhPRCIsInNpZ25VcCIsIlVzZXJDcmVkZW50aWFsSW1wbCIsIl9Vc2VyQ3JlZGVudGlhbEltcGwiLCJvcGVyYXRpb25UeXBlIiwicHJvdmlkZXJJZEZvclJlc3BvbnNlIiwidXNlckNyZWQiLCJfZm9yT3BlcmF0aW9uIiwiTXVsdGlGYWN0b3JFcnJvciIsIl9NdWx0aUZhY3RvckVycm9yIiwic2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJfZnJvbUVycm9yQW5kT3BlcmF0aW9uIiwiX3Byb2Nlc3NDcmVkZW50aWFsU2F2aW5nTWZhQ29udGV4dElmTmVjZXNzYXJ5IiwiaWRUb2tlblByb3ZpZGVyIiwicHJvdmlkZXJEYXRhQXNOYW1lcyIsIlNldCIsInBpZCIsIl9hc3NlcnRMaW5rZWRTdGF0dXMiLCJkZWxldGVQcm92aWRlciIsInByb3ZpZGVyc0xlZnQiLCJwZCIsImhhcyIsIl9saW5rJDEiLCJleHBlY3RlZCIsInByb3ZpZGVySWRzIiwiX3JlYXV0aGVudGljYXRlIiwicGFyc2VkIiwic3ViIiwiX3NpZ25JbldpdGhDcmVkZW50aWFsIiwic2lnbkluV2l0aEN1c3RvbVRva2VuJDEiLCJjdXN0b21Ub2tlbiIsIk11bHRpRmFjdG9ySW5mb0ltcGwiLCJmYWN0b3JJZCIsIm1mYUVucm9sbG1lbnRJZCIsImVucm9sbG1lbnRUaW1lIiwiZW5yb2xsZWRBdCIsIl9mcm9tU2VydmVyUmVzcG9uc2UiLCJlbnJvbGxtZW50IiwiUGhvbmVNdWx0aUZhY3RvckluZm9JbXBsIiwiVG90cE11bHRpRmFjdG9ySW5mb0ltcGwiLCJfUGhvbmVNdWx0aUZhY3RvckluZm9JbXBsIiwicGhvbmVJbmZvIiwiX1RvdHBNdWx0aUZhY3RvckluZm9JbXBsIiwiX3NldEFjdGlvbkNvZGVTZXR0aW5nc09uUmVxdWVzdCIsImFjdGlvbkNvZGVTZXR0aW5ncyIsImR5bmFtaWNMaW5rRG9tYWluIiwibGlua0RvbWFpbiIsImNhbkhhbmRsZUNvZGVJbkFwcCIsImhhbmRsZUNvZGVJbkFwcCIsImlPUyIsImJ1bmRsZUlkIiwiaU9TQnVuZGxlSWQiLCJhbmRyb2lkIiwicGFja2FnZU5hbWUiLCJhbmRyb2lkSW5zdGFsbEFwcCIsImluc3RhbGxBcHAiLCJhbmRyb2lkTWluaW11bVZlcnNpb25Db2RlIiwibWluaW11bVZlcnNpb24iLCJhbmRyb2lkUGFja2FnZU5hbWUiLCJyZWNhY2hlUGFzc3dvcmRQb2xpY3kiLCJyZXF1ZXN0VHlwZSIsIm5ld1Bhc3N3b3JkIiwiYXV0aE1vZHVsYXIiLCJuZXdFbWFpbCIsIm1mYUluZm8iLCJtdWx0aUZhY3RvckluZm8iLCJkYXRhIiwicHJldmlvdXNFbWFpbCIsInNpZ25VcFJlc3BvbnNlIiwic2V0QWN0aW9uQ29kZVNldHRpbmdzIiwicmVxdWVzdDIiLCJhY3Rpb25Db2RlU2V0dGluZ3MyIiwiY3JlYXRlQXV0aFVyaSIsImNvbnRpbnVlVXJpIiwiaWRlbnRpZmllciIsInNpZ25pbk1ldGhvZHMiLCJ1cGRhdGVQcm9maWxlJDEiLCJwcm9maWxlUmVxdWVzdCIsInBhc3N3b3JkUHJvdmlkZXIiLCJmaW5kIiwidXBkYXRlRW1haWxPclBhc3N3b3JkIiwicHJvZmlsZSIsInJhd1VzZXJJbmZvIiwiaXNOZXdVc2VyIiwia2luZCIsImZpbHRlcmVkUHJvdmlkZXJJZCIsIkdlbmVyaWNBZGRpdGlvbmFsVXNlckluZm8iLCJGYWNlYm9va0FkZGl0aW9uYWxVc2VySW5mbyIsIkdpdGh1YkFkZGl0aW9uYWxVc2VySW5mbyIsIkdvb2dsZUFkZGl0aW9uYWxVc2VySW5mbyIsIlR3aXR0ZXJBZGRpdGlvbmFsVXNlckluZm8iLCJzY3JlZW5OYW1lIiwiRmVkZXJhdGVkQWRkaXRpb25hbFVzZXJJbmZvV2l0aFVzZXJuYW1lIiwidXNlcm5hbWUiLCJsb2dpbiIsIk11bHRpRmFjdG9yU2Vzc2lvbkltcGwiLCJfTXVsdGlGYWN0b3JTZXNzaW9uSW1wbCIsIl9mcm9tSWR0b2tlbiIsIl9mcm9tTWZhUGVuZGluZ0NyZWRlbnRpYWwiLCJtZmFQZW5kaW5nQ3JlZGVudGlhbCIsIm11bHRpRmFjdG9yU2Vzc2lvbiIsInBlbmRpbmdDcmVkZW50aWFsIiwiTXVsdGlGYWN0b3JSZXNvbHZlckltcGwiLCJfTXVsdGlGYWN0b3JSZXNvbHZlckltcGwiLCJzZXNzaW9uIiwiaGludHMiLCJzaWduSW5SZXNvbHZlciIsIl9mcm9tRXJyb3IiLCJtZmFSZXNwb25zZSIsIl9wcm9jZXNzIiwicmVzb2x2ZVNpZ25JbiIsImFzc2VydGlvbkV4dGVybiIsImVycm9ySW50ZXJuYWwiLCJzdGFydEVucm9sbFBob25lTWZhIiwiZmluYWxpemVFbnJvbGxQaG9uZU1mYSIsInN0YXJ0RW5yb2xsVG90cE1mYSIsImZpbmFsaXplRW5yb2xsVG90cE1mYSIsIndpdGhkcmF3TWZhIiwiTXVsdGlGYWN0b3JVc2VySW1wbCIsIl9NdWx0aUZhY3RvclVzZXJJbXBsIiwiZW5yb2xsZWRGYWN0b3JzIiwiX2Zyb21Vc2VyIiwiZ2V0U2Vzc2lvbiIsImVucm9sbCIsImZpbmFsaXplTWZhUmVzcG9uc2UiLCJ1bmVucm9sbCIsImluZm9PclVpZCIsIm11bHRpRmFjdG9yVXNlckNhY2hlIiwiV2Vha01hcCIsInVzZXJNb2R1bGFyIiwiU1RPUkFHRV9BVkFJTEFCTEVfS0VZIiwiQnJvd3NlclBlcnNpc3RlbmNlQ2xhc3MiLCJzdG9yYWdlUmV0cmlldmVyIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJnZXRJdGVtIiwiX1BPTExJTkdfSU5URVJWQUxfTVMkMSIsIklFMTBfTE9DQUxfU1RPUkFHRV9TWU5DX0RFTEFZIiwiQnJvd3NlckxvY2FsUGVyc2lzdGVuY2UiLCJsb2NhbFN0b3JhZ2UiLCJldmVudCIsInBvbGwiLCJvblN0b3JhZ2VFdmVudCIsImxpc3RlbmVycyIsImxvY2FsQ2FjaGUiLCJwb2xsVGltZXIiLCJmYWxsYmFja1RvUG9sbGluZyIsImZvckFsbENoYW5nZWRLZXlzIiwia2V5cyIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJrZXkyIiwiX29sZFZhbHVlIiwibm90aWZ5TGlzdGVuZXJzIiwiZGV0YWNoTGlzdGVuZXIiLCJzdG9wUG9sbGluZyIsInRyaWdnZXJMaXN0ZW5lcnMiLCJzdG9yZWRWYWx1ZTIiLCJzdG9yZWRWYWx1ZSIsImxpc3RlbmVyIiwiZnJvbSIsInN0YXJ0UG9sbGluZyIsInNldEludGVydmFsIiwiU3RvcmFnZUV2ZW50IiwiY2xlYXJJbnRlcnZhbCIsImF0dGFjaExpc3RlbmVyIiwiUE9MTElOR19JTlRFUlZBTF9NUyIsImdldERvY3VtZW50Q29va2llIiwiZXNjYXBlZE5hbWUiLCJtYXRjaGVyIiwiUmVnRXhwIiwiY29va2llIiwiZ2V0Q29va2llTmFtZSIsImlzRGV2TW9kZSIsIkNvb2tpZVBlcnNpc3RlbmNlIiwibGlzdGVuZXJVbnN1YnNjcmliZXMiLCJvcmlnaW5hbFVybCIsIlVSTCIsIm9yaWdpbiIsImlzU2VjdXJlQ29udGV4dCIsImNvb2tpZUVuYWJsZWQiLCJfdmFsdWUiLCJjb29raWVTdG9yZSIsImV4aXN0aW5nVmFsdWUiLCJjaGFuZ2VkQ29va2llIiwiY2hhbmdlZCIsImNoYW5nZSIsImRlbGV0ZWRDb29raWUiLCJ1bnN1YnNjcmliZTIiLCJsYXN0VmFsdWUiLCJjdXJyZW50VmFsdWUiLCJCcm93c2VyU2Vzc2lvblBlcnNpc3RlbmNlIiwic2Vzc2lvblN0b3JhZ2UiLCJfYWxsU2V0dGxlZCIsInByb21pc2VzIiwiZnVsZmlsbGVkIiwicmVhc29uIiwiUmVjZWl2ZXIiLCJfUmVjZWl2ZXIiLCJldmVudFRhcmdldCIsImhhbmRsZXJzTWFwIiwiaGFuZGxlRXZlbnQiLCJleGlzdGluZ0luc3RhbmNlIiwicmVjZWl2ZXJzIiwicmVjZWl2ZXIiLCJpc0xpc3RlbmluZ3RvIiwibmV3SW5zdGFuY2UiLCJtZXNzYWdlRXZlbnQiLCJldmVudElkIiwiZXZlbnRUeXBlIiwiaGFuZGxlcnMiLCJwb3J0cyIsInBvc3RNZXNzYWdlIiwiaGFuZGxlciIsIl9zdWJzY3JpYmUiLCJldmVudEhhbmRsZXIiLCJfdW5zdWJzY3JpYmUiLCJfZ2VuZXJhdGVFdmVudElkIiwiZGlnaXRzIiwiU2VuZGVyIiwidGFyZ2V0IiwicmVtb3ZlTWVzc2FnZUhhbmRsZXIiLCJtZXNzYWdlQ2hhbm5lbCIsInBvcnQxIiwib25NZXNzYWdlIiwiY2xvc2UiLCJfc2VuZCIsInRpbWVvdXQiLCJNZXNzYWdlQ2hhbm5lbCIsImNvbXBsZXRpb25UaW1lciIsInN0YXJ0IiwiYWNrVGltZXIiLCJwb3J0MiIsImZpbmFsbHkiLCJfd2luZG93IiwiX3NldFdpbmRvd0xvY2F0aW9uIiwiX2lzV29ya2VyIiwiX2dldEFjdGl2ZVNlcnZpY2VXb3JrZXIiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0cmF0aW9uIiwiYWN0aXZlIiwiX2dldFNlcnZpY2VXb3JrZXJDb250cm9sbGVyIiwiY29udHJvbGxlciIsIl9nZXRXb3JrZXJHbG9iYWxTY29wZSIsIkRCX05BTUUiLCJEQl9WRVJTSU9OIiwiREJfT0JKRUNUU1RPUkVfTkFNRSIsIkRCX0RBVEFfS0VZUEFUSCIsIkRCUHJvbWlzZSIsInRvUHJvbWlzZSIsImdldE9iamVjdFN0b3JlIiwiZGIiLCJpc1JlYWRXcml0ZSIsInRyYW5zYWN0aW9uIiwib2JqZWN0U3RvcmUiLCJfZGVsZXRlRGF0YWJhc2UiLCJpbmRleGVkREIiLCJkZWxldGVEYXRhYmFzZSIsIl9vcGVuRGF0YWJhc2UiLCJvcGVuIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJrZXlQYXRoIiwib2JqZWN0U3RvcmVOYW1lcyIsImNvbnRhaW5zIiwiX3B1dE9iamVjdCIsInB1dCIsImdldE9iamVjdCIsIl9kZWxldGVPYmplY3QiLCJfUE9MTElOR19JTlRFUlZBTF9NUyIsIl9UUkFOU0FDVElPTl9SRVRSWV9DT1VOVCIsIkluZGV4ZWREQkxvY2FsUGVyc2lzdGVuY2UiLCJwZW5kaW5nV3JpdGVzIiwic2VuZGVyIiwic2VydmljZVdvcmtlclJlY2VpdmVyQXZhaWxhYmxlIiwiYWN0aXZlU2VydmljZVdvcmtlciIsIl93b3JrZXJJbml0aWFsaXphdGlvblByb21pc2UiLCJpbml0aWFsaXplU2VydmljZVdvcmtlck1lc3NhZ2luZyIsIl9vcGVuRGIiLCJfd2l0aFJldHJpZXMiLCJvcCIsIm51bUF0dGVtcHRzIiwiaW5pdGlhbGl6ZVJlY2VpdmVyIiwiaW5pdGlhbGl6ZVNlbmRlciIsIl9vcmlnaW4iLCJfcG9sbCIsImtleVByb2Nlc3NlZCIsIl9kYXRhIiwicmVzdWx0cyIsIm5vdGlmeVNlcnZpY2VXb3JrZXIiLCJfd2l0aFBlbmRpbmdXcml0ZSIsIndyaXRlIiwiZ2V0QWxsUmVxdWVzdCIsImdldEFsbCIsImtleXNJblJlc3VsdCIsImZiYXNlX2tleSIsImxvY2FsS2V5Iiwic3RhcnRTaWduSW5QaG9uZU1mYSIsImZpbmFsaXplU2lnbkluUGhvbmVNZmEiLCJmaW5hbGl6ZVNpZ25JblRvdHBNZmEiLCJfSlNMT0FEX0NBTExCQUNLIiwiTkVUV09SS19USU1FT1VUX0RFTEFZIiwiUmVDYXB0Y2hhTG9hZGVySW1wbCIsImhvc3RMYW5ndWFnZSIsImxpYnJhcnlTZXBhcmF0ZWx5TG9hZGVkIiwibG9hZCIsImhsIiwiaXNIb3N0TGFuZ3VhZ2VWYWxpZCIsInNob3VsZFJlc29sdmVJbW1lZGlhdGVseSIsInJlY2FwdGNoYSIsIndpZGdldElkIiwib25sb2FkIiwiY2xlYXJlZE9uZUluc3RhbmNlIiwiTW9ja1JlQ2FwdGNoYUxvYWRlckltcGwiLCJSRUNBUFRDSEFfVkVSSUZJRVJfVFlQRSIsIkRFRkFVTFRfUEFSQU1TIiwidGhlbWUiLCJkZXN0cm95ZWQiLCJ0b2tlbkNoYW5nZUxpc3RlbmVycyIsInJlbmRlclByb21pc2UiLCJpc0ludmlzaWJsZSIsIm1ha2VUb2tlbkNhbGxiYWNrIiwiX3JlY2FwdGNoYUxvYWRlciIsInZhbGlkYXRlU3RhcnRpbmdTdGF0ZSIsImFzc2VydE5vdERlc3Ryb3llZCIsImdldEFzc2VydGVkUmVjYXB0Y2hhIiwidG9rZW5DaGFuZ2UiLCJtYWtlUmVuZGVyUHJvbWlzZSIsIl9yZXNldCIsImNsZWFyIiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJub2RlIiwicmVtb3ZlQ2hpbGQiLCJzaXRla2V5IiwiaGFzQ2hpbGROb2RlcyIsImV4aXN0aW5nIiwiZ2xvYmFsRnVuYyIsImluaXQiLCJndWFyYW50ZWVkRW1wdHkiLCJkb21SZWFkeSIsIkNvbmZpcm1hdGlvblJlc3VsdEltcGwiLCJvbkNvbmZpcm1hdGlvbiIsImNvbmZpcm0iLCJhdXRoQ3JlZGVudGlhbCIsImFwcFZlcmlmaWVyIiwiX3ZlcmlmeVBob25lTnVtYmVyIiwicGhvbmVJbmZvT3B0aW9ucyIsInN0YXJ0UGhvbmVNZmFFbnJvbGxtZW50UmVxdWVzdCIsInN0YXJ0RW5yb2xsUGhvbmVNZmFBY3Rpb25DYWxsYmFjayIsInJlcXVlc3RXaXRoUmVjYXB0Y2hhVjIiLCJpbmplY3RSZWNhcHRjaGFWMlRva2VuIiwic3RhcnRQaG9uZU1mYUVucm9sbG1lbnRSZXNwb25zZSIsInBob25lU2Vzc2lvbkluZm8iLCJtdWx0aUZhY3RvckhpbnQiLCJtdWx0aUZhY3RvclVpZCIsInN0YXJ0UGhvbmVNZmFTaWduSW5SZXF1ZXN0Iiwic3RhcnRTaWduSW5QaG9uZU1mYUFjdGlvbkNhbGxiYWNrIiwic3RhcnRQaG9uZU1mYVNpZ25JblJlc3BvbnNlIiwicGhvbmVSZXNwb25zZUluZm8iLCJzZW5kUGhvbmVWZXJpZmljYXRpb25Db2RlUmVxdWVzdCIsInNlbmRQaG9uZVZlcmlmaWNhdGlvbkNvZGVBY3Rpb25DYWxsYmFjayIsInNlbmRQaG9uZVZlcmlmaWNhdGlvbkNvZGVSZXNwb25zZSIsInJlY2FwdGNoYVYyVmVyaWZpZXIiLCJyZWNhcHRjaGFWMlRva2VuIiwicmVjYXB0Y2hhVmVyc2lvbiIsIl9QaG9uZUF1dGhQcm92aWRlciIsInZlcmlmeVBob25lTnVtYmVyIiwicGhvbmVPcHRpb25zIiwiYXBwbGljYXRpb25WZXJpZmllciIsIlBIT05FX1NJR05fSU5fTUVUSE9EIiwiX3dpdGhEZWZhdWx0UmVzb2x2ZXIiLCJyZXNvbHZlck92ZXJyaWRlIiwiSWRwQ3JlZGVudGlhbCIsIl9idWlsZElkcFJlcXVlc3QiLCJzZXNzaW9uSWQiLCJyZXR1cm5JZHBDcmVkZW50aWFsIiwiX3NpZ25JbiIsIl9yZWF1dGgiLCJfbGluayIsIkFic3RyYWN0UG9wdXBSZWRpcmVjdE9wZXJhdGlvbiIsInBlbmRpbmdQcm9taXNlIiwiZXZlbnRNYW5hZ2VyIiwib25FeGVjdXRpb24iLCJyZWdpc3RlckNvbnN1bWVyIiwib25BdXRoRXZlbnQiLCJ1cmxSZXNwb25zZSIsImdldElkcFRhc2siLCJvbkVycm9yIiwidW5yZWdpc3RlckFuZENsZWFuVXAiLCJ1bnJlZ2lzdGVyQ29uc3VtZXIiLCJjbGVhblVwIiwiX1BPTExfV0lORE9XX0NMT1NFX1RJTUVPVVQiLCJyZXNvbHZlckludGVybmFsIiwiUG9wdXBPcGVyYXRpb24iLCJleGVjdXRlTm90TnVsbCIsIl9Qb3B1cE9wZXJhdGlvbiIsImF1dGhXaW5kb3ciLCJwb2xsSWQiLCJjdXJyZW50UG9wdXBBY3Rpb24iLCJjYW5jZWwiLCJfb3BlblBvcHVwIiwiYXNzb2NpYXRlZEV2ZW50IiwiX29yaWdpblZhbGlkYXRpb24iLCJfaXNJZnJhbWVXZWJTdG9yYWdlU3VwcG9ydGVkIiwiaXNTdXBwb3J0ZWQiLCJwb2xsVXNlckNhbmNlbGxhdGlvbiIsImNsb3NlZCIsIlBFTkRJTkdfUkVESVJFQ1RfS0VZIiwicmVkaXJlY3RPdXRjb21lTWFwIiwiUmVkaXJlY3RBY3Rpb24iLCJyZWFkeU91dGNvbWUiLCJoYXNQZW5kaW5nUmVkaXJlY3QiLCJfZ2V0QW5kQ2xlYXJQZW5kaW5nUmVkaXJlY3RTdGF0dXMiLCJwZW5kaW5nUmVkaXJlY3RLZXkiLCJyZXNvbHZlclBlcnNpc3RlbmNlIiwiX3NldFBlbmRpbmdSZWRpcmVjdFN0YXR1cyIsIl9jbGVhclJlZGlyZWN0T3V0Y29tZXMiLCJfc2lnbkluV2l0aFJlZGlyZWN0IiwiX29wZW5SZWRpcmVjdCIsIl9yZWF1dGhlbnRpY2F0ZVdpdGhSZWRpcmVjdCIsInByZXBhcmVVc2VyRm9yUmVkaXJlY3QiLCJfbGlua1dpdGhSZWRpcmVjdCIsIl9nZXRSZWRpcmVjdFJlc3VsdCIsInJlc29sdmVyRXh0ZXJuIiwiRVZFTlRfRFVQTElDQVRJT05fQ0FDSEVfRFVSQVRJT05fTVMiLCJBdXRoRXZlbnRNYW5hZ2VyIiwiY2FjaGVkRXZlbnRVaWRzIiwiY29uc3VtZXJzIiwicXVldWVkUmVkaXJlY3RFdmVudCIsImhhc0hhbmRsZWRQb3RlbnRpYWxSZWRpcmVjdCIsImxhc3RQcm9jZXNzZWRFdmVudFRpbWUiLCJhdXRoRXZlbnRDb25zdW1lciIsImlzRXZlbnRGb3JDb25zdW1lciIsInNlbmRUb0NvbnN1bWVyIiwic2F2ZUV2ZW50VG9DYWNoZSIsIm9uRXZlbnQiLCJoYXNFdmVudEJlZW5IYW5kbGVkIiwiaGFuZGxlZCIsImNvbnN1bWVyIiwiaXNSZWRpcmVjdEV2ZW50IiwiaXNOdWxsUmVkaXJlY3RFdmVudCIsImV2ZW50SWRNYXRjaGVzIiwiZXZlbnRVaWQiLCJ2IiwiX2dldFByb2plY3RDb25maWciLCJJUF9BRERSRVNTX1JFR0VYIiwiSFRUUF9SRUdFWCIsIl92YWxpZGF0ZU9yaWdpbiIsImF1dGhvcml6ZWREb21haW5zIiwiZG9tYWluIiwibWF0Y2hEb21haW4iLCJjdXJyZW50VXJsIiwiaG9zdG5hbWUiLCJjZVVybCIsImVzY2FwZWREb21haW5QYXR0ZXJuIiwiTkVUV09SS19USU1FT1VUIiwicmVzZXRVbmxvYWRlZEdhcGlNb2R1bGVzIiwiYmVhY29uIiwiX19fanNsIiwiSCIsImhpbnQiLCJyIiwiTCIsIkNQIiwibG9hZEdhcGkiLCJsb2FkR2FwaUlmcmFtZSIsImdhcGkiLCJpZnJhbWVzIiwiZ2V0Q29udGV4dCIsIm9udGltZW91dCIsIklmcmFtZSIsImNiTmFtZSIsImNhY2hlZEdBcGlMb2FkZXIiLCJfbG9hZEdhcGkiLCJQSU5HX1RJTUVPVVQiLCJJRlJBTUVfUEFUSCIsIkVNVUxBVEVEX0lGUkFNRV9QQVRIIiwiSUZSQU1FX0FUVFJJQlVURVMiLCJ0b3AiLCJoZWlnaHQiLCJ0YWJpbmRleCIsIkVJRF9GUk9NX0FQSUhPU1QiLCJnZXRJZnJhbWVVcmwiLCJlaWQiLCJmdyIsIl9vcGVuSWZyYW1lIiwiY29udGV4dCIsImdhcGkyIiwid2hlcmUiLCJtZXNzYWdlSGFuZGxlcnNGaWx0ZXIiLCJDUk9TU19PUklHSU5fSUZSQU1FU19GSUxURVIiLCJhdHRyaWJ1dGVzIiwiZG9udGNsZWFyIiwiaWZyYW1lIiwicmVzdHlsZSIsInNldEhpZGVPbkxlYXZlIiwibmV0d29ya0Vycm9yIiwibmV0d29ya0Vycm9yVGltZXIiLCJjbGVhclRpbWVyQW5kUmVzb2x2ZSIsInBpbmciLCJCQVNFX1BPUFVQX09QVElPTlMiLCJyZXNpemFibGUiLCJzdGF0dXNiYXIiLCJ0b29sYmFyIiwiREVGQVVMVF9XSURUSCIsIkRFRkFVTFRfSEVJR0hUIiwiVEFSR0VUX0JMQU5LIiwiRklSRUZPWF9FTVBUWV9VUkwiLCJBdXRoUG9wdXAiLCJ3aW5kb3cyIiwiX29wZW4iLCJzY3JlZW4iLCJhdmFpbEhlaWdodCIsImF2YWlsV2lkdGgiLCJzY3JvbGxiYXJzIiwib3B0aW9uc1N0cmluZyIsImVudHJpZXMiLCJyZWR1Y2UiLCJhY2N1bSIsIm9wZW5Bc05ld1dpbmRvd0lPUyIsIm5ld1dpbiIsImZvY3VzIiwiY2xpY2siLCJjcmVhdGVFdmVudCIsImluaXRNb3VzZUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIldJREdFVF9QQVRIIiwiRU1VTEFUT1JfV0lER0VUX1BBVEgiLCJGSVJFQkFTRV9BUFBfQ0hFQ0tfRlJBR01FTlRfSUQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfZ2V0UmVkaXJlY3RVcmwiLCJhdXRoVHlwZSIsInJlZGlyZWN0VXJsIiwiYWRkaXRpb25hbFBhcmFtcyIsImlzRW1wdHkiLCJ0aWQiLCJwYXJhbXNEaWN0IiwiYXBwQ2hlY2tUb2tlbkZyYWdtZW50IiwiZ2V0SGFuZGxlckJhc2UiLCJXRUJfU1RPUkFHRV9TVVBQT1JUX0tFWSIsIkJyb3dzZXJQb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJldmVudE1hbmFnZXJzIiwib3JpZ2luVmFsaWRhdGlvblByb21pc2VzIiwicHJvbWlzZTIiLCJpbml0QW5kR2V0TWFuYWdlciIsInJlZ2lzdGVyIiwiaWZyYW1lRXZlbnQiLCJhdXRoRXZlbnQiLCJzZW5kIiwiTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwiX2ZpbmFsaXplRW5yb2xsIiwiX2ZpbmFsaXplU2lnbkluIiwiUGhvbmVNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfUGhvbmVNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfZnJvbUNyZWRlbnRpYWwiLCJwaG9uZVZlcmlmaWNhdGlvbkluZm8iLCJGQUNUT1JfSUQiLCJhc3NlcnRpb25Gb3JFbnJvbGxtZW50Iiwib25lVGltZVBhc3N3b3JkIiwiVG90cE11bHRpRmFjdG9yQXNzZXJ0aW9uSW1wbCIsIl9mcm9tU2VjcmV0IiwiYXNzZXJ0aW9uRm9yU2lnbkluIiwiZW5yb2xsbWVudElkIiwiX2Zyb21FbnJvbGxtZW50SWQiLCJnZW5lcmF0ZVNlY3JldCIsIm1mYVNlc3Npb24iLCJ0b3RwRW5yb2xsbWVudEluZm8iLCJfZnJvbVN0YXJ0VG90cE1mYUVucm9sbG1lbnRSZXNwb25zZSIsIl9Ub3RwTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwib3RwIiwidG90cFZlcmlmaWNhdGlvbkluZm8iLCJfbWFrZVRvdHBWZXJpZmljYXRpb25JbmZvIiwiX1RvdHBTZWNyZXQiLCJzZWNyZXRLZXkiLCJoYXNoaW5nQWxnb3JpdGhtIiwiY29kZUxlbmd0aCIsImNvZGVJbnRlcnZhbFNlY29uZHMiLCJlbnJvbGxtZW50Q29tcGxldGlvbkRlYWRsaW5lIiwidG90cFNlc3Npb25JbmZvIiwic2hhcmVkU2VjcmV0S2V5IiwidmVyaWZpY2F0aW9uQ29kZUxlbmd0aCIsInBlcmlvZFNlYyIsImZpbmFsaXplRW5yb2xsbWVudFRpbWUiLCJnZW5lcmF0ZVFyQ29kZVVybCIsImFjY291bnROYW1lIiwiaXNzdWVyIiwidXNlRGVmYXVsdHMiLCJfaXNFbXB0eVN0cmluZyIsImlucHV0IiwiQXV0aEludGVyb3AiLCJpbnRlcm5hbExpc3RlbmVycyIsImdldFVpZCIsImFzc2VydEF1dGhDb25maWd1cmVkIiwiYWRkQXV0aFRva2VuTGlzdGVuZXIiLCJ1cGRhdGVQcm9hY3RpdmVSZWZyZXNoIiwicmVtb3ZlQXV0aFRva2VuTGlzdGVuZXIiLCJnZXRWZXJzaW9uRm9yUGxhdGZvcm0iLCJyZWdpc3RlckF1dGgiLCJfcmVnaXN0ZXJDb21wb25lbnQiLCJpbXBvcnRfY29tcG9uZW50IiwiQ29tcG9uZW50IiwiZ2V0UHJvdmlkZXIiLCJzZXRJbnN0YW50aWF0aW9uTW9kZSIsInNldEluc3RhbmNlQ3JlYXRlZENhbGxiYWNrIiwiX2luc3RhbmNlSWRlbnRpZmllciIsIl9pbnN0YW5jZSIsImF1dGhJbnRlcm5hbFByb3ZpZGVyIiwicmVnaXN0ZXJWZXJzaW9uIiwiREVGQVVMVF9JRF9UT0tFTl9NQVhfQUdFIiwiYXV0aElkVG9rZW5NYXhBZ2UiLCJnZXRFeHBlcmltZW50YWxTZXR0aW5nIiwibGFzdFBvc3RlZElkVG9rZW4iLCJtaW50Q29va2llRmFjdG9yeSIsImlkVG9rZW5SZXN1bHQiLCJpZFRva2VuQWdlIiwiZ2V0QXBwIiwiYXV0aFRva2VuU3luY1BhdGgiLCJhdXRoVG9rZW5TeW5jVXJsIiwibWludENvb2tpZSIsImF1dGhFbXVsYXRvckhvc3QiLCJnZXREZWZhdWx0RW11bGF0b3JIb3N0IiwiZ2V0U2NyaXB0UGFyZW50RWxlbWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2V0QXR0cmlidXRlIiwib25lcnJvciIsImNoYXJzZXQiLCJpbXBvcnRfYXBwMiIsInJlcXVpcmUiLCJpbXBvcnRfdXRpbDIiLCJpbXBvcnRfbG9nZ2VyMiIsImltcG9ydF90c2xpYjIiLCJpbXBvcnRfY29tcG9uZW50MiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsbUJBQUE7QUFBQUMsUUFBQSxDQUFBRCxtQkFBQTtFQUFBRSxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQywwQ0FBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGtCQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsbUJBQUEsRUFB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QUFBLEVBQUMsT0FBQyxRQUFBc1IsRUFBQSxjQUFBQSxFQUFBLEdBQUkrRSxRQUFBO0FBQ3ZEO0FBRUEySixzQkFBQSxDQUF1QjtFQUNyQkosT0FBT2plLEdBQUEsRUFBVztJQUVoQixPQUFPLElBQUkwQyxPQUFBLENBQVEsQ0FBQzhTLE9BQUEsRUFBUzFRLE1BQUEsS0FBVTtNQUNyQyxNQUFNMGYsRUFBQSxHQUFLOVAsUUFBQSxDQUFTK1AsYUFBQSxDQUFjLFFBQVE7TUFDMUNELEVBQUEsQ0FBR3d2QixZQUFBLENBQWEsT0FBT2gwQyxHQUFHO01BQzFCd2tCLEVBQUEsQ0FBRytiLE1BQUEsR0FBUy9xQixPQUFBO01BQ1pnUCxFQUFBLENBQUd5dkIsT0FBQSxHQUFVendDLENBQUEsSUFBSTtRQUNmLE1BQU1ySCxLQUFBLEdBQVFLLFlBQUEsQ0FBWTswQ0FBQTtRQUMxQkwsS0FBQSxDQUFNZ0osVUFBQSxHQUFhM0IsQ0FBQTtRQUNuQnNCLE1BQUEsQ0FBTzNJLEtBQUs7TUFDZDtNQUNBcW9CLEVBQUEsQ0FBR3pULElBQUEsR0FBTztNQUNWeVQsRUFBQSxDQUFHMHZCLE9BQUEsR0FBVTtNQUNiSixzQkFBQSxDQUFzQixFQUFHcnVCLFdBQUEsQ0FBWWpCLEVBQUU7SUFDekMsQ0FBQzs7RUFHSHBHLFVBQUEsRUFBWTtFQUNaRixpQkFBQSxFQUFtQjtFQUNuQkMseUJBQUEsRUFDRTtBQUNIO0FBRURtMEIsWUFBQSxDQUFZOzRCQUFBOzs7QUNoSlosSUFBQTZCLFdBQUEsR0FBT0MsT0FBQTtBQUNQLElBQUFDLFlBQUEsR0FBT0QsT0FBQTtBQUNQLElBQUFFLGNBQUEsR0FBT0YsT0FBQTtBQUNQLElBQUFHLGFBQUEsR0FBT0gsT0FBQTtBQUNQLElBQUFJLGlCQUFBLEdBQU9KLE9BQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9