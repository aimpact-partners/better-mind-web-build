System.register(["@firebase/util@1.11.0","@firebase/component@0.6.13","@firebase/logger@0.4.4","idb@7.1.1","@firebase/app@0.11.4","tslib@2.8.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/util","1.11.0"],["@firebase/component","0.6.13"],["@firebase/logger","0.4.4"],["idb","7.1.1"],["@firebase/app","0.11.4"],["tslib","2.8.1"],["@firebase/auth","1.10.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@firebase/util@1.11.0', dep), dep => dependencies.set('@firebase/component@0.6.13', dep), dep => dependencies.set('@firebase/logger@0.4.4', dep), dep => dependencies.set('idb@7.1.1', dep), dep => dependencies.set('@firebase/app@0.11.4', dep), dep => dependencies.set('tslib@2.8.1', dep)],
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

// .beyond/uimport/temp/@firebase/auth.1.10.0.js
var auth_1_10_0_exports = {};
__export(auth_1_10_0_exports, {
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
module.exports = __toCommonJS(auth_1_10_0_exports);

// node_modules/@firebase/auth/dist/esm2017/index-c92d61ad.js
var import_app = require("@firebase/app@0.11.4");
var import_util = require("@firebase/util@1.11.0");
var import_logger = require("@firebase/logger@0.4.4");
var import_tslib = require("tslib@2.8.1");
var import_component = require("@firebase/component@0.6.13");
var FactorId = {
  PHONE: "phone",
  TOTP: "totp"
};
var ProviderId = {
  FACEBOOK: "facebook.com",
  GITHUB: "github.com",
  GOOGLE: "google.com",
  PASSWORD: "password",
  PHONE: "phone",
  TWITTER: "twitter.com"
};
var SignInMethod = {
  EMAIL_LINK: "emailLink",
  EMAIL_PASSWORD: "password",
  FACEBOOK: "facebook.com",
  GITHUB: "github.com",
  GOOGLE: "google.com",
  PHONE: "phone",
  TWITTER: "twitter.com"
};
var OperationType = {
  LINK: "link",
  REAUTHENTICATE: "reauthenticate",
  SIGN_IN: "signIn"
};
var ActionCodeOperation = {
  EMAIL_SIGNIN: "EMAIL_SIGNIN",
  PASSWORD_RESET: "PASSWORD_RESET",
  RECOVER_EMAIL: "RECOVER_EMAIL",
  REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
  VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
  VERIFY_EMAIL: "VERIFY_EMAIL"
};
function _debugErrorMap() {
  return {
    ["admin-restricted-operation"]: "This operation is restricted to administrators only.",
    ["argument-error"]: "",
    ["app-not-authorized"]: "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
    ["app-not-installed"]: "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
    ["captcha-check-failed"]: "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
    ["code-expired"]: "The SMS code has expired. Please re-send the verification code to try again.",
    ["cordova-not-ready"]: "Cordova framework is not ready.",
    ["cors-unsupported"]: "This browser is not supported.",
    ["credential-already-in-use"]: "This credential is already associated with a different user account.",
    ["custom-token-mismatch"]: "The custom token corresponds to a different audience.",
    ["requires-recent-login"]: "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
    ["dependent-sdk-initialized-before-auth"]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
    ["dynamic-link-not-activated"]: "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
    ["email-change-needs-verification"]: "Multi-factor users must always have a verified email.",
    ["email-already-in-use"]: "The email address is already in use by another account.",
    ["emulator-config-failed"]: 'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',
    ["expired-action-code"]: "The action code has expired.",
    ["cancelled-popup-request"]: "This operation has been cancelled due to another conflicting popup being opened.",
    ["internal-error"]: "An internal AuthError has occurred.",
    ["invalid-app-credential"]: "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
    ["invalid-app-id"]: "The mobile app identifier is not registered for the current project.",
    ["invalid-user-token"]: "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
    ["invalid-auth-event"]: "An internal AuthError has occurred.",
    ["invalid-verification-code"]: "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",
    ["invalid-continue-uri"]: "The continue URL provided in the request is invalid.",
    ["invalid-cordova-configuration"]: "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
    ["invalid-custom-token"]: "The custom token format is incorrect. Please check the documentation.",
    ["invalid-dynamic-link-domain"]: "The provided dynamic link domain is not configured or authorized for the current project.",
    ["invalid-email"]: "The email address is badly formatted.",
    ["invalid-emulator-scheme"]: "Emulator URL must start with a valid scheme (http:// or https://).",
    ["invalid-api-key"]: "Your API key is invalid, please check you have copied it correctly.",
    ["invalid-cert-hash"]: "The SHA-1 certificate hash provided is invalid.",
    ["invalid-credential"]: "The supplied auth credential is incorrect, malformed or has expired.",
    ["invalid-message-payload"]: "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
    ["invalid-multi-factor-session"]: "The request does not contain a valid proof of first factor successful sign-in.",
    ["invalid-oauth-provider"]: "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
    ["invalid-oauth-client-id"]: "The OAuth client ID provided is either invalid or does not match the specified API key.",
    ["unauthorized-domain"]: "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
    ["invalid-action-code"]: "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
    ["wrong-password"]: "The password is invalid or the user does not have a password.",
    ["invalid-persistence-type"]: "The specified persistence type is invalid. It can only be local, session or none.",
    ["invalid-phone-number"]: "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
    ["invalid-provider-id"]: "The specified provider ID is invalid.",
    ["invalid-recipient-email"]: "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
    ["invalid-sender"]: "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
    ["invalid-verification-id"]: "The verification ID used to create the phone auth credential is invalid.",
    ["invalid-tenant-id"]: "The Auth instance's tenant ID is invalid.",
    ["login-blocked"]: "Login blocked by user-provided method: {$originalMessage}",
    ["missing-android-pkg-name"]: "An Android Package Name must be provided if the Android App is required to be installed.",
    ["auth-domain-config-required"]: "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
    ["missing-app-credential"]: "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
    ["missing-verification-code"]: "The phone auth credential was created with an empty SMS verification code.",
    ["missing-continue-uri"]: "A continue URL must be provided in the request.",
    ["missing-iframe-start"]: "An internal AuthError has occurred.",
    ["missing-ios-bundle-id"]: "An iOS Bundle ID must be provided if an App Store ID is provided.",
    ["missing-or-invalid-nonce"]: "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
    ["missing-password"]: "A non-empty password must be provided",
    ["missing-multi-factor-info"]: "No second factor identifier is provided.",
    ["missing-multi-factor-session"]: "The request is missing proof of first factor successful sign-in.",
    ["missing-phone-number"]: "To send verification codes, provide a phone number for the recipient.",
    ["missing-verification-id"]: "The phone auth credential was created with an empty verification ID.",
    ["app-deleted"]: "This instance of FirebaseApp has been deleted.",
    ["multi-factor-info-not-found"]: "The user does not have a second factor matching the identifier provided.",
    ["multi-factor-auth-required"]: "Proof of ownership of a second factor is required to complete sign-in.",
    ["account-exists-with-different-credential"]: "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
    ["network-request-failed"]: "A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",
    ["no-auth-event"]: "An internal AuthError has occurred.",
    ["no-such-provider"]: "User was not linked to an account with the given provider.",
    ["null-user"]: "A null user object was provided as the argument for an operation which requires a non-null user object.",
    ["operation-not-allowed"]: "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
    ["operation-not-supported-in-this-environment"]: 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
    ["popup-blocked"]: "Unable to establish a connection with the popup. It may have been blocked by the browser.",
    ["popup-closed-by-user"]: "The popup has been closed by the user before finalizing the operation.",
    ["provider-already-linked"]: "User can only be linked to one identity for the given provider.",
    ["quota-exceeded"]: "The project's quota for this operation has been exceeded.",
    ["redirect-cancelled-by-user"]: "The redirect operation has been cancelled by the user before finalizing.",
    ["redirect-operation-pending"]: "A redirect sign-in operation is already pending.",
    ["rejected-credential"]: "The request contains malformed or mismatching credentials.",
    ["second-factor-already-in-use"]: "The second factor is already enrolled on this account.",
    ["maximum-second-factor-count-exceeded"]: "The maximum allowed number of second factors on a user has been exceeded.",
    ["tenant-id-mismatch"]: "The provided tenant ID does not match the Auth instance's tenant ID",
    ["timeout"]: "The operation has timed out.",
    ["user-token-expired"]: "The user's credential is no longer valid. The user must sign in again.",
    ["too-many-requests"]: "We have blocked all requests from this device due to unusual activity. Try again later.",
    ["unauthorized-continue-uri"]: "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
    ["unsupported-first-factor"]: "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
    ["unsupported-persistence-type"]: "The current environment does not support the specified persistence type.",
    ["unsupported-tenant-operation"]: "This operation is not supported in a multi-tenant context.",
    ["unverified-email"]: "The operation requires a verified email.",
    ["user-cancelled"]: "The user did not grant your application the permissions it requested.",
    ["user-not-found"]: "There is no user record corresponding to this identifier. The user may have been deleted.",
    ["user-disabled"]: "The user account has been disabled by an administrator.",
    ["user-mismatch"]: "The supplied credentials do not correspond to the previously signed in user.",
    ["user-signed-out"]: "",
    ["weak-password"]: "The password must be 6 characters long or more.",
    ["web-storage-unsupported"]: "This browser is not supported or 3rd party cookies and data may be disabled.",
    ["already-initialized"]: "initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",
    ["missing-recaptcha-token"]: "The reCAPTCHA token is missing when sending request to the backend.",
    ["invalid-recaptcha-token"]: "The reCAPTCHA token is invalid when sending request to the backend.",
    ["invalid-recaptcha-action"]: "The reCAPTCHA action is invalid when sending request to the backend.",
    ["recaptcha-not-enabled"]: "reCAPTCHA Enterprise integration is not enabled for this project.",
    ["missing-client-type"]: "The reCAPTCHA client type is missing when sending request to the backend.",
    ["missing-recaptcha-version"]: "The reCAPTCHA version is missing when sending request to the backend.",
    ["invalid-req-type"]: "Invalid request parameters.",
    ["invalid-recaptcha-version"]: "The reCAPTCHA version is invalid when sending request to the backend.",
    ["unsupported-password-policy-schema-version"]: "The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.",
    ["password-does-not-meet-requirements"]: "The password does not meet the requirements.",
    ["invalid-hosting-link-domain"]: "The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."
  };
}
function _prodErrorMap() {
  return {
    ["dependent-sdk-initialized-before-auth"]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
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
      _fail(auth, "argument-error");
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
  if (typeof navigator !== "undefined" && navigator && "onLine" in navigator && typeof navigator.onLine === "boolean" && (_isHttpOrHttps() || (0, import_util.isBrowserExtension)() || "connection" in navigator)) {
    return navigator.onLine;
  }
  return true;
}
function _getUserLanguage() {
  if (typeof navigator === "undefined") {
    return null;
  }
  const navigatorLanguage = navigator;
  return navigatorLanguage.languages && navigatorLanguage.languages[0] || navigatorLanguage.language || null;
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
  ["CREDENTIAL_MISMATCH"]: "custom-token-mismatch",
  ["MISSING_CUSTOM_TOKEN"]: "internal-error",
  ["INVALID_IDENTIFIER"]: "invalid-email",
  ["MISSING_CONTINUE_URI"]: "internal-error",
  ["INVALID_PASSWORD"]: "wrong-password",
  ["MISSING_PASSWORD"]: "missing-password",
  ["INVALID_LOGIN_CREDENTIALS"]: "invalid-credential",
  ["EMAIL_EXISTS"]: "email-already-in-use",
  ["PASSWORD_LOGIN_DISABLED"]: "operation-not-allowed",
  ["INVALID_IDP_RESPONSE"]: "invalid-credential",
  ["INVALID_PENDING_TOKEN"]: "invalid-credential",
  ["FEDERATED_USER_ID_ALREADY_LINKED"]: "credential-already-in-use",
  ["MISSING_REQ_TYPE"]: "internal-error",
  ["EMAIL_NOT_FOUND"]: "user-not-found",
  ["RESET_PASSWORD_EXCEED_LIMIT"]: "too-many-requests",
  ["EXPIRED_OOB_CODE"]: "expired-action-code",
  ["INVALID_OOB_CODE"]: "invalid-action-code",
  ["MISSING_OOB_CODE"]: "internal-error",
  ["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]: "requires-recent-login",
  ["INVALID_ID_TOKEN"]: "invalid-user-token",
  ["TOKEN_EXPIRED"]: "user-token-expired",
  ["USER_NOT_FOUND"]: "user-token-expired",
  ["TOO_MANY_ATTEMPTS_TRY_LATER"]: "too-many-requests",
  ["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]: "password-does-not-meet-requirements",
  ["INVALID_CODE"]: "invalid-verification-code",
  ["INVALID_SESSION_INFO"]: "invalid-verification-id",
  ["INVALID_TEMPORARY_PROOF"]: "invalid-credential",
  ["MISSING_SESSION_INFO"]: "missing-verification-id",
  ["SESSION_EXPIRED"]: "code-expired",
  ["MISSING_ANDROID_PACKAGE_NAME"]: "missing-android-pkg-name",
  ["UNAUTHORIZED_DOMAIN"]: "unauthorized-continue-uri",
  ["INVALID_OAUTH_CLIENT_ID"]: "invalid-oauth-client-id",
  ["ADMIN_ONLY_OPERATION"]: "admin-restricted-operation",
  ["INVALID_MFA_PENDING_CREDENTIAL"]: "invalid-multi-factor-session",
  ["MFA_ENROLLMENT_NOT_FOUND"]: "multi-factor-info-not-found",
  ["MISSING_MFA_ENROLLMENT_ID"]: "missing-multi-factor-info",
  ["MISSING_MFA_PENDING_CREDENTIAL"]: "missing-multi-factor-session",
  ["SECOND_FACTOR_EXISTS"]: "second-factor-already-in-use",
  ["SECOND_FACTOR_LIMIT_EXCEEDED"]: "maximum-second-factor-count-exceeded",
  ["BLOCKING_FUNCTION_ERROR_RESPONSE"]: "internal-error",
  ["RECAPTCHA_NOT_ENABLED"]: "recaptcha-not-enabled",
  ["MISSING_RECAPTCHA_TOKEN"]: "missing-recaptcha-token",
  ["INVALID_RECAPTCHA_TOKEN"]: "invalid-recaptcha-token",
  ["INVALID_RECAPTCHA_ACTION"]: "invalid-recaptcha-action",
  ["MISSING_CLIENT_TYPE"]: "missing-client-type",
  ["MISSING_RECAPTCHA_VERSION"]: "missing-recaptcha-version",
  ["INVALID_RECAPTCHA_VERSION"]: "invalid-recaptcha-version",
  ["INVALID_REQ_TYPE"]: "invalid-req-type"
};
var CookieAuthProxiedEndpoints = ["/v1/accounts:signInWithCustomToken", "/v1/accounts:signInWithEmailLink", "/v1/accounts:signInWithIdp", "/v1/accounts:signInWithPassword", "/v1/accounts:signInWithPhoneNumber", "/v1/token"];
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
    headers["Content-Type"] = "application/json";
    if (auth.languageCode) {
      headers["X-Firebase-Locale"] = auth.languageCode;
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
        return reject(_createError(this.auth, "network-request-failed"));
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
  isProviderEnabled(providerStr) {
    return this.getProviderEnforcementState(providerStr) === "ENFORCE" || this.getProviderEnforcementState(providerStr) === "AUDIT";
  }
  isAnyProviderEnabled() {
    return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER") || this.isProviderEnabled("PHONE_PROVIDER");
  }
};
async function getRecaptchaParams(auth) {
  return (await _performApiRequest(auth, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || "";
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
  _assert(claims && claims.exp && claims.auth_time && claims.iat, userInternal.auth, "internal-error");
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
  _assert(parsedToken, "internal-error");
  _assert(typeof parsedToken.exp !== "undefined", "internal-error");
  _assert(typeof parsedToken.iat !== "undefined", "internal-error");
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
      this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4);
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
        this.schedule(true);
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
  _assert(response === null || response === void 0 ? void 0 : response.users.length, auth, "internal-error");
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
    headers["Content-Type"] = "application/x-www-form-urlencoded";
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
var StsTokenManager = class {
  constructor() {
    this.refreshToken = null;
    this.accessToken = null;
    this.expirationTime = null;
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(response) {
    _assert(response.idToken, "internal-error");
    _assert(typeof response.idToken !== "undefined", "internal-error");
    _assert(typeof response.refreshToken !== "undefined", "internal-error");
    const expiresIn = "expiresIn" in response && typeof response.expiresIn !== "undefined" ? Number(response.expiresIn) : _tokenExpiresIn(response.idToken);
    this.updateTokensAndExpiration(response.idToken, response.refreshToken, expiresIn);
  }
  updateFromIdToken(idToken) {
    _assert(idToken.length !== 0, "internal-error");
    const expiresIn = _tokenExpiresIn(idToken);
    this.updateTokensAndExpiration(idToken, null, expiresIn);
  }
  async getToken(auth, forceRefresh = false) {
    if (!forceRefresh && this.accessToken && !this.isExpired) {
      return this.accessToken;
    }
    _assert(this.refreshToken, auth, "user-token-expired");
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
    const manager = new StsTokenManager();
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
    return Object.assign(new StsTokenManager(), this.toJSON());
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
var UserImpl = class {
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
    _assert(accessToken, this.auth, "internal-error");
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
    _assert(this.uid === user.uid, this.auth, "internal-error");
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
    const newUser = new UserImpl(Object.assign(Object.assign({}, this), {
      auth,
      stsTokenManager: this.stsTokenManager._clone()
    }));
    newUser.metadata._copy(this.metadata);
    return newUser;
  }
  _onReload(callback) {
    _assert(!this.reloadListener, this.auth, "internal-error");
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
      _redirectEventId: this._redirectEventId
    }, this.metadata.toJSON()), {
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
    _assert(uid && plainObjectTokenManager, auth, "internal-error");
    const stsTokenManager = StsTokenManager.fromJSON(this.name, plainObjectTokenManager);
    _assert(typeof uid === "string", auth, "internal-error");
    assertStringOrUndefined(displayName, auth.name);
    assertStringOrUndefined(email, auth.name);
    _assert(typeof emailVerified === "boolean", auth, "internal-error");
    _assert(typeof isAnonymous === "boolean", auth, "internal-error");
    assertStringOrUndefined(phoneNumber, auth.name);
    assertStringOrUndefined(photoURL, auth.name);
    assertStringOrUndefined(tenantId, auth.name);
    assertStringOrUndefined(_redirectEventId, auth.name);
    assertStringOrUndefined(createdAt, auth.name);
    assertStringOrUndefined(lastLoginAt, auth.name);
    const user = new UserImpl({
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
  static async _fromIdTokenResponse(auth, idTokenResponse, isAnonymous = false) {
    const stsTokenManager = new StsTokenManager();
    stsTokenManager.updateFromServerResponse(idTokenResponse);
    const user = new UserImpl({
      uid: idTokenResponse.localId,
      auth,
      stsTokenManager,
      isAnonymous
    });
    await _reloadWithoutSaving(user);
    return user;
  }
  static async _fromGetAccountInfoResponse(auth, response, idToken) {
    const coreAccount = response.users[0];
    _assert(coreAccount.localId !== void 0, "internal-error");
    const providerData = coreAccount.providerUserInfo !== void 0 ? extractProviderData(coreAccount.providerUserInfo) : [];
    const isAnonymous = !(coreAccount.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
    const stsTokenManager = new StsTokenManager();
    stsTokenManager.updateFromIdToken(idToken);
    const user = new UserImpl({
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
var PersistenceUserManager = class {
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
      return new PersistenceUserManager(_getInstance(inMemoryPersistence), auth, userKey);
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
      return new PersistenceUserManager(selectedPersistence, auth, userKey);
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
    return new PersistenceUserManager(selectedPersistence, auth, userKey);
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
  validatePasswordCharacterOptions(password, status) {
    this.updatePasswordCharacterOptionsStatuses(status, false, false, false, false);
    let passwordChar;
    for (let i = 0; i < password.length; i++) {
      passwordChar = password.charAt(i);
      this.updatePasswordCharacterOptionsStatuses(status, passwordChar >= "a" && passwordChar <= "z", passwordChar >= "A" && passwordChar <= "Z", passwordChar >= "0" && passwordChar <= "9", this.allowedNonAlphanumericCharacters.includes(passwordChar));
    }
  }
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
    await this._updateCurrentUser(user, true);
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
    _assert(this._popupRedirectResolver, this, "argument-error");
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
      _assert(user.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token");
    }
    return this._updateCurrentUser(user && user._clone(this));
  }
  async _updateCurrentUser(user, skipBeforeStateCallbacks = false) {
    if (this._deleted) {
      return;
    }
    if (user) {
      _assert(this.tenantId === user.tenantId, this, "tenant-id-mismatch");
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
    return this._updateCurrentUser(null, true);
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
      _assert(resolver, this, "argument-error");
      this.redirectPersistenceManager = await PersistenceUserManager.create(this, [_getInstance(resolver._redirectPersistence)], "redirectUser");
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
    _assert(promise, this, "internal-error");
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
    _assert(this.persistenceManager, this, "internal-error");
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
      ["X-Client-Version"]: this.clientVersion
    };
    if (this.app.options.appId) {
      headers["X-Firebase-gmpid"] = this.app.options.appId;
    }
    const heartbeatsHeader = await ((_a = this.heartbeatServiceProvider.getImmediate({
      optional: true
    })) === null || _a === void 0 ? void 0 : _a.getHeartbeatsHeader());
    if (heartbeatsHeader) {
      headers["X-Firebase-Client"] = heartbeatsHeader;
    }
    const appCheckToken = await this._getAppCheckToken();
    if (appCheckToken) {
      headers["X-Firebase-AppCheck"] = appCheckToken;
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
    _assert(this.observer, this.auth, "internal-error");
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
  constructor(authExtern) {
    this.type = RECAPTCHA_ENTERPRISE_VERIFIER_TYPE;
    this.auth = _castAuth(authExtern);
  }
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
  });
  Object.assign(newRequest, {
    "recaptchaVersion": "RECAPTCHA_ENTERPRISE"
  });
  return newRequest;
}
async function handleRecaptchaFlow(authInstance, request, actionName, actionMethod, recaptchaAuthProvider) {
  var _a, _b;
  if (recaptchaAuthProvider === "EMAIL_PASSWORD_PROVIDER") {
    if ((_a = authInstance._getRecaptchaConfig()) === null || _a === void 0 ? void 0 : _a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")) {
      const requestWithRecaptcha = await injectRecaptchaFields(authInstance, request, actionName, actionName === "getOobCode");
      return actionMethod(authInstance, requestWithRecaptcha);
    } else {
      return actionMethod(authInstance, request).catch(async error => {
        if (error.code === `auth/${"missing-recaptcha-token"}`) {
          console.log(`${actionName} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);
          const requestWithRecaptcha = await injectRecaptchaFields(authInstance, request, actionName, actionName === "getOobCode");
          return actionMethod(authInstance, requestWithRecaptcha);
        } else {
          return Promise.reject(error);
        }
      });
    }
  } else if (recaptchaAuthProvider === "PHONE_PROVIDER") {
    if ((_b = authInstance._getRecaptchaConfig()) === null || _b === void 0 ? void 0 : _b.isProviderEnabled("PHONE_PROVIDER")) {
      const requestWithRecaptcha = await injectRecaptchaFields(authInstance, request, actionName);
      return actionMethod(authInstance, requestWithRecaptcha).catch(async error => {
        var _a2;
        if (((_a2 = authInstance._getRecaptchaConfig()) === null || _a2 === void 0 ? void 0 : _a2.getProviderEnforcementState("PHONE_PROVIDER")) === "AUDIT") {
          if (error.code === `auth/${"missing-recaptcha-token"}` || error.code === `auth/${"invalid-app-credential"}`) {
            console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${actionName} flow.`);
            const requestWithRecaptchaFields = await injectRecaptchaFields(authInstance, request, actionName, false, true);
            return actionMethod(authInstance, requestWithRecaptchaFields);
          }
        }
        return Promise.reject(error);
      });
    } else {
      const requestWithRecaptchaFields = await injectRecaptchaFields(authInstance, request, actionName, false, true);
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
      _fail(auth2, "already-initialized");
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
  _assert(/^https?:\/\//.test(url), authInternal, "invalid-emulator-scheme");
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
    _assert(authInternal.config.emulator && authInternal.emulatorConfig, authInternal, "emulator-config-failed");
    _assert((0, import_util.deepEqual)(emulator, authInternal.config.emulator) && (0, import_util.deepEqual)(emulatorConfig, authInternal.emulatorConfig), authInternal, "emulator-config-failed");
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
  constructor(providerId, signInMethod) {
    this.providerId = providerId;
    this.signInMethod = signInMethod;
  }
  toJSON() {
    return debugFail("not implemented");
  }
  _getIdTokenResponse(_auth) {
    return debugFail("not implemented");
  }
  _linkToIdToken(_auth, _idToken) {
    return debugFail("not implemented");
  }
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
var EmailAuthCredential = class extends AuthCredential {
  constructor(_email, _password, signInMethod, _tenantId = null) {
    super("password", signInMethod);
    this._email = _email;
    this._password = _password;
    this._tenantId = _tenantId;
  }
  static _fromEmailAndPassword(email, password) {
    return new EmailAuthCredential(email, password, "password");
  }
  static _fromEmailAndCode(email, oobCode, tenantId = null) {
    return new EmailAuthCredential(email, oobCode, "emailLink", tenantId);
  }
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId
    };
  }
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
  async _getIdTokenResponse(auth) {
    switch (this.signInMethod) {
      case "password":
        const request = {
          returnSecureToken: true,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB"
        };
        return handleRecaptchaFlow(auth, request, "signInWithPassword", signInWithPassword, "EMAIL_PASSWORD_PROVIDER");
      case "emailLink":
        return signInWithEmailLink$1(auth, {
          email: this._email,
          oobCode: this._password
        });
      default:
        _fail(auth, "internal-error");
    }
  }
  async _linkToIdToken(auth, idToken) {
    switch (this.signInMethod) {
      case "password":
        const request = {
          idToken,
          returnSecureToken: true,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB"
        };
        return handleRecaptchaFlow(auth, request, "signUpPassword", linkEmailPassword, "EMAIL_PASSWORD_PROVIDER");
      case "emailLink":
        return signInWithEmailLinkForLinking(auth, {
          idToken,
          email: this._email,
          oobCode: this._password
        });
      default:
        _fail(auth, "internal-error");
    }
  }
  _getReauthenticationResolver(auth) {
    return this._getIdTokenResponse(auth);
  }
};
async function signInWithIdp(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithIdp", _addTidIfNecessary(auth, request));
}
var IDP_REQUEST_URI$1 = "http://localhost";
var OAuthCredential = class extends AuthCredential {
  constructor() {
    super(...arguments);
    this.pendingToken = null;
  }
  static _fromParams(params) {
    const cred = new OAuthCredential(params.providerId, params.signInMethod);
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
      _fail("argument-error");
    }
    return cred;
  }
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
    const cred = new OAuthCredential(providerId, signInMethod);
    cred.idToken = rest.idToken || void 0;
    cred.accessToken = rest.accessToken || void 0;
    cred.secret = rest.secret;
    cred.nonce = rest.nonce;
    cred.pendingToken = rest.pendingToken || null;
    return cred;
  }
  _getIdTokenResponse(auth) {
    const request = this.buildRequest();
    return signInWithIdp(auth, request);
  }
  _linkToIdToken(auth, idToken) {
    const request = this.buildRequest();
    request.idToken = idToken;
    return signInWithIdp(auth, request);
  }
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
  ["USER_NOT_FOUND"]: "user-not-found"
};
async function verifyPhoneNumberForExisting(auth, request) {
  const apiRequest = Object.assign(Object.assign({}, request), {
    operation: "REAUTH"
  });
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, apiRequest), VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_);
}
var PhoneAuthCredential = class extends AuthCredential {
  constructor(params) {
    super("phone", "phone");
    this.params = params;
  }
  static _fromVerification(verificationId, verificationCode) {
    return new PhoneAuthCredential({
      verificationId,
      verificationCode
    });
  }
  static _fromTokenResponse(phoneNumber, temporaryProof) {
    return new PhoneAuthCredential({
      phoneNumber,
      temporaryProof
    });
  }
  _getIdTokenResponse(auth) {
    return signInWithPhoneNumber$1(auth, this._makeVerificationRequest());
  }
  _linkToIdToken(auth, idToken) {
    return linkWithPhoneNumber$1(auth, Object.assign({
      idToken
    }, this._makeVerificationRequest()));
  }
  _getReauthenticationResolver(auth) {
    return verifyPhoneNumberForExisting(auth, this._makeVerificationRequest());
  }
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
    return new PhoneAuthCredential({
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
var ActionCodeURL = class {
  constructor(actionLink) {
    var _a, _b, _c, _d, _e, _f;
    const searchParams = (0, import_util.querystringDecode)((0, import_util.extractQuerystring)(actionLink));
    const apiKey = (_a = searchParams["apiKey"]) !== null && _a !== void 0 ? _a : null;
    const code = (_b = searchParams["oobCode"]) !== null && _b !== void 0 ? _b : null;
    const operation = parseMode((_c = searchParams["mode"]) !== null && _c !== void 0 ? _c : null);
    _assert(apiKey && code && operation, "argument-error");
    this.apiKey = apiKey;
    this.operation = operation;
    this.code = code;
    this.continueUrl = (_d = searchParams["continueUrl"]) !== null && _d !== void 0 ? _d : null;
    this.languageCode = (_e = searchParams["languageCode"]) !== null && _e !== void 0 ? _e : null;
    this.tenantId = (_f = searchParams["tenantId"]) !== null && _f !== void 0 ? _f : null;
  }
  static parseLink(link) {
    const actionLink = parseDeepLink(link);
    try {
      return new ActionCodeURL(actionLink);
    } catch (_a) {
      return null;
    }
  }
};
function parseActionCodeURL(link) {
  return ActionCodeURL.parseLink(link);
}
var EmailAuthProvider = class {
  constructor() {
    this.providerId = EmailAuthProvider.PROVIDER_ID;
  }
  static credential(email, password) {
    return EmailAuthCredential._fromEmailAndPassword(email, password);
  }
  static credentialWithLink(email, emailLink) {
    const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
    _assert(actionCodeUrl, "argument-error");
    return EmailAuthCredential._fromEmailAndCode(email, actionCodeUrl.code, actionCodeUrl.tenantId);
  }
};
EmailAuthProvider.PROVIDER_ID = "password";
EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
var FederatedAuthProvider = class {
  constructor(providerId) {
    this.providerId = providerId;
    this.defaultLanguageCode = null;
    this.customParameters = {};
  }
  setDefaultLanguage(languageCode) {
    this.defaultLanguageCode = languageCode;
  }
  setCustomParameters(customOAuthParameters) {
    this.customParameters = customOAuthParameters;
    return this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
};
var BaseOAuthProvider = class extends FederatedAuthProvider {
  constructor() {
    super(...arguments);
    this.scopes = [];
  }
  addScope(scope) {
    if (!this.scopes.includes(scope)) {
      this.scopes.push(scope);
    }
    return this;
  }
  getScopes() {
    return [...this.scopes];
  }
};
var OAuthProvider = class extends BaseOAuthProvider {
  static credentialFromJSON(json) {
    const obj = typeof json === "string" ? JSON.parse(json) : json;
    _assert("providerId" in obj && "signInMethod" in obj, "argument-error");
    return OAuthCredential._fromParams(obj);
  }
  credential(params) {
    return this._credential(Object.assign(Object.assign({}, params), {
      nonce: params.rawNonce
    }));
  }
  _credential(params) {
    _assert(params.idToken || params.accessToken, "argument-error");
    return OAuthCredential._fromParams(Object.assign(Object.assign({}, params), {
      providerId: this.providerId,
      signInMethod: this.providerId
    }));
  }
  static credentialFromResult(userCredential) {
    return OAuthProvider.oauthCredentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return OAuthProvider.oauthCredentialFromTaggedObject(error.customData || {});
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
      return new OAuthProvider(providerId)._credential({
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
var FacebookAuthProvider = class extends BaseOAuthProvider {
  constructor() {
    super("facebook.com");
  }
  static credential(accessToken) {
    return OAuthCredential._fromParams({
      providerId: FacebookAuthProvider.PROVIDER_ID,
      signInMethod: FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,
      accessToken
    });
  }
  static credentialFromResult(userCredential) {
    return FacebookAuthProvider.credentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return FacebookAuthProvider.credentialFromTaggedObject(error.customData || {});
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
      return FacebookAuthProvider.credential(tokenResponse.oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
};
FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
FacebookAuthProvider.PROVIDER_ID = "facebook.com";
var GoogleAuthProvider = class extends BaseOAuthProvider {
  constructor() {
    super("google.com");
    this.addScope("profile");
  }
  static credential(idToken, accessToken) {
    return OAuthCredential._fromParams({
      providerId: GoogleAuthProvider.PROVIDER_ID,
      signInMethod: GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,
      idToken,
      accessToken
    });
  }
  static credentialFromResult(userCredential) {
    return GoogleAuthProvider.credentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return GoogleAuthProvider.credentialFromTaggedObject(error.customData || {});
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
      return GoogleAuthProvider.credential(oauthIdToken, oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
};
GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD = "google.com";
GoogleAuthProvider.PROVIDER_ID = "google.com";
var GithubAuthProvider = class extends BaseOAuthProvider {
  constructor() {
    super("github.com");
  }
  static credential(accessToken) {
    return OAuthCredential._fromParams({
      providerId: GithubAuthProvider.PROVIDER_ID,
      signInMethod: GithubAuthProvider.GITHUB_SIGN_IN_METHOD,
      accessToken
    });
  }
  static credentialFromResult(userCredential) {
    return GithubAuthProvider.credentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return GithubAuthProvider.credentialFromTaggedObject(error.customData || {});
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
      return GithubAuthProvider.credential(tokenResponse.oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
};
GithubAuthProvider.GITHUB_SIGN_IN_METHOD = "github.com";
GithubAuthProvider.PROVIDER_ID = "github.com";
var IDP_REQUEST_URI = "http://localhost";
var SAMLAuthCredential = class extends AuthCredential {
  constructor(providerId, pendingToken) {
    super(providerId, providerId);
    this.pendingToken = pendingToken;
  }
  _getIdTokenResponse(auth) {
    const request = this.buildRequest();
    return signInWithIdp(auth, request);
  }
  _linkToIdToken(auth, idToken) {
    const request = this.buildRequest();
    request.idToken = idToken;
    return signInWithIdp(auth, request);
  }
  _getReauthenticationResolver(auth) {
    const request = this.buildRequest();
    request.autoCreate = false;
    return signInWithIdp(auth, request);
  }
  toJSON() {
    return {
      signInMethod: this.signInMethod,
      providerId: this.providerId,
      pendingToken: this.pendingToken
    };
  }
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
    return new SAMLAuthCredential(providerId, pendingToken);
  }
  static _create(providerId, pendingToken) {
    return new SAMLAuthCredential(providerId, pendingToken);
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
var SAMLAuthProvider = class extends FederatedAuthProvider {
  constructor(providerId) {
    _assert(providerId.startsWith(SAML_PROVIDER_PREFIX), "argument-error");
    super(providerId);
  }
  static credentialFromResult(userCredential) {
    return SAMLAuthProvider.samlCredentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return SAMLAuthProvider.samlCredentialFromTaggedObject(error.customData || {});
  }
  static credentialFromJSON(json) {
    const credential = SAMLAuthCredential.fromJSON(json);
    _assert(credential, "argument-error");
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
var TwitterAuthProvider = class extends BaseOAuthProvider {
  constructor() {
    super("twitter.com");
  }
  static credential(token, secret) {
    return OAuthCredential._fromParams({
      providerId: TwitterAuthProvider.PROVIDER_ID,
      signInMethod: TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,
      oauthToken: token,
      oauthTokenSecret: secret
    });
  }
  static credentialFromResult(userCredential) {
    return TwitterAuthProvider.credentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return TwitterAuthProvider.credentialFromTaggedObject(error.customData || {});
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
      return TwitterAuthProvider.credential(oauthAccessToken, oauthTokenSecret);
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
var UserCredentialImpl = class {
  constructor(params) {
    this.user = params.user;
    this.providerId = params.providerId;
    this._tokenResponse = params._tokenResponse;
    this.operationType = params.operationType;
  }
  static async _fromIdTokenResponse(auth, operationType, idTokenResponse, isAnonymous = false) {
    const user = await UserImpl._fromIdTokenResponse(auth, idTokenResponse, isAnonymous);
    const providerId = providerIdForResponse(idTokenResponse);
    const userCred = new UserCredentialImpl({
      user,
      providerId,
      _tokenResponse: idTokenResponse,
      operationType
    });
    return userCred;
  }
  static async _forOperation(user, operationType, response) {
    await user._updateTokensIfNecessary(response, true);
    const providerId = providerIdForResponse(response);
    return new UserCredentialImpl({
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
    });
  }
  const response = await signUp(authInternal, {
    returnSecureToken: true
  });
  const userCredential = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response, true);
  await authInternal._updateCurrentUser(userCredential.user);
  return userCredential;
}
var MultiFactorError = class extends import_util.FirebaseError {
  constructor(auth, error, operationType, user) {
    var _a;
    super(error.code, error.message);
    this.operationType = operationType;
    this.user = user;
    Object.setPrototypeOf(this, MultiFactorError.prototype);
    this.customData = {
      appName: auth.name,
      tenantId: (_a = auth.tenantId) !== null && _a !== void 0 ? _a : void 0,
      _serverResponse: error.customData._serverResponse,
      operationType
    };
  }
  static _fromErrorAndOperation(auth, error, operationType, user) {
    return new MultiFactorError(auth, error, operationType, user);
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
  if (!providersLeft.has("phone")) {
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
    _assert(response.idToken, auth, "internal-error");
    const parsed = _parseToken(response.idToken);
    _assert(parsed, auth, "internal-error");
    const {
      sub: localId
    } = parsed;
    _assert(user.uid === localId, auth, "user-mismatch");
    return UserCredentialImpl._forOperation(user, operationType, response);
  } catch (e) {
    if ((e === null || e === void 0 ? void 0 : e.code) === `auth/${"user-not-found"}`) {
      _fail(auth, "user-mismatch");
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
    return _fail(auth, "internal-error");
  }
};
var PhoneMultiFactorInfoImpl = class extends MultiFactorInfoImpl {
  constructor(response) {
    super("phone", response);
    this.phoneNumber = response.phoneInfo;
  }
  static _fromServerResponse(_auth, enrollment) {
    return new PhoneMultiFactorInfoImpl(enrollment);
  }
};
var TotpMultiFactorInfoImpl = class extends MultiFactorInfoImpl {
  constructor(response) {
    super("totp", response);
  }
  static _fromServerResponse(_auth, enrollment) {
    return new TotpMultiFactorInfoImpl(enrollment);
  }
};
function _setActionCodeSettingsOnRequest(auth, request, actionCodeSettings) {
  var _a;
  _assert(((_a = actionCodeSettings.url) === null || _a === void 0 ? void 0 : _a.length) > 0, auth, "invalid-continue-uri");
  _assert(typeof actionCodeSettings.dynamicLinkDomain === "undefined" || actionCodeSettings.dynamicLinkDomain.length > 0, auth, "invalid-dynamic-link-domain");
  _assert(typeof actionCodeSettings.linkDomain === "undefined" || actionCodeSettings.linkDomain.length > 0, auth, "invalid-hosting-link-domain");
  request.continueUrl = actionCodeSettings.url;
  request.dynamicLinkDomain = actionCodeSettings.dynamicLinkDomain;
  request.linkDomain = actionCodeSettings.linkDomain;
  request.canHandleCodeInApp = actionCodeSettings.handleCodeInApp;
  if (actionCodeSettings.iOS) {
    _assert(actionCodeSettings.iOS.bundleId.length > 0, auth, "missing-ios-bundle-id");
    request.iOSBundleId = actionCodeSettings.iOS.bundleId;
  }
  if (actionCodeSettings.android) {
    _assert(actionCodeSettings.android.packageName.length > 0, auth, "missing-android-pkg-name");
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
  };
  if (actionCodeSettings) {
    _setActionCodeSettingsOnRequest(authInternal, request, actionCodeSettings);
  }
  await handleRecaptchaFlow(authInternal, request, "getOobCode", sendPasswordResetEmail$1, "EMAIL_PASSWORD_PROVIDER");
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
  _assert(operation, authModular, "internal-error");
  switch (operation) {
    case "EMAIL_SIGNIN":
      break;
    case "VERIFY_AND_CHANGE_EMAIL":
      _assert(response.newEmail, authModular, "internal-error");
      break;
    case "REVERT_SECOND_FACTOR_ADDITION":
      _assert(response.mfaInfo, authModular, "internal-error");
    default:
      _assert(response.email, authModular, "internal-error");
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
  };
  const signUpResponse = handleRecaptchaFlow(authInternal, request, "signUpPassword", signUp, "EMAIL_PASSWORD_PROVIDER");
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
  };
  function setActionCodeSettings(request2, actionCodeSettings2) {
    _assert(actionCodeSettings2.handleCodeInApp, authInternal, "argument-error");
    if (actionCodeSettings2) {
      _setActionCodeSettingsOnRequest(authInternal, request2, actionCodeSettings2);
    }
  }
  setActionCodeSettings(request, actionCodeSettings);
  await handleRecaptchaFlow(authInternal, request, "getOobCode", sendSignInLinkToEmail$1, "EMAIL_PASSWORD_PROVIDER");
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
  _assert(credential._tenantId === (authModular.tenantId || null), authModular, "tenant-id-mismatch");
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
  }) => providerId === "password");
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
  await user._updateTokensIfNecessary(response, true);
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
var MultiFactorSessionImpl = class {
  constructor(type, credential, user) {
    this.type = type;
    this.credential = credential;
    this.user = user;
  }
  static _fromIdtoken(idToken, user) {
    return new MultiFactorSessionImpl("enroll", idToken, user);
  }
  static _fromMfaPendingCredential(mfaPendingCredential) {
    return new MultiFactorSessionImpl("signin", mfaPendingCredential);
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
        return MultiFactorSessionImpl._fromMfaPendingCredential(obj.multiFactorSession.pendingCredential);
      } else if ((_b = obj.multiFactorSession) === null || _b === void 0 ? void 0 : _b.idToken) {
        return MultiFactorSessionImpl._fromIdtoken(obj.multiFactorSession.idToken);
      }
    }
    return null;
  }
};
var MultiFactorResolverImpl = class {
  constructor(session, hints, signInResolver) {
    this.session = session;
    this.hints = hints;
    this.signInResolver = signInResolver;
  }
  static _fromError(authExtern, error) {
    const auth = _castAuth(authExtern);
    const serverResponse = error.customData._serverResponse;
    const hints = (serverResponse.mfaInfo || []).map(enrollment => MultiFactorInfoImpl._fromServerResponse(auth, enrollment));
    _assert(serverResponse.mfaPendingCredential, auth, "internal-error");
    const session = MultiFactorSessionImpl._fromMfaPendingCredential(serverResponse.mfaPendingCredential);
    return new MultiFactorResolverImpl(session, hints, async assertion => {
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
          _assert(error.user, auth, "internal-error");
          return UserCredentialImpl._forOperation(error.user, error.operationType, idTokenResponse);
        default:
          _fail(auth, "internal-error");
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
  _assert(error.customData.operationType, authModular, "argument-error");
  _assert((_a = errorInternal.customData._serverResponse) === null || _a === void 0 ? void 0 : _a.mfaPendingCredential, authModular, "argument-error");
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
var MultiFactorUserImpl = class {
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
    return new MultiFactorUserImpl(user);
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
    super(() => window.localStorage, "LOCAL");
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
        }), true);
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
  _getFinalTarget(originalUrl) {
    if (typeof window === void 0) {
      return originalUrl;
    }
    const url = new URL(`${window.location.origin}/__cookies__`);
    url.searchParams.set("finalTarget", originalUrl);
    return url;
  }
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
  async _set(_key, _value) {
    return;
  }
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
    super(() => window.sessionStorage, "SESSION");
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
var Receiver = class {
  constructor(eventTarget) {
    this.eventTarget = eventTarget;
    this.handlersMap = {};
    this.boundEventHandler = this.handleEvent.bind(this);
  }
  static _getInstance(eventTarget) {
    const existingInstance = this.receivers.find(receiver => receiver.isListeningto(eventTarget));
    if (existingInstance) {
      return existingInstance;
    }
    const newInstance = new Receiver(eventTarget);
    this.receivers.push(newInstance);
    return newInstance;
  }
  isListeningto(eventTarget) {
    return this.eventTarget === eventTarget;
  }
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
  _subscribe(eventType, eventHandler) {
    if (Object.keys(this.handlersMap).length === 0) {
      this.eventTarget.addEventListener("message", this.boundEventHandler);
    }
    if (!this.handlersMap[eventType]) {
      this.handlersMap[eventType] = /* @__PURE__ */new Set();
    }
    this.handlersMap[eventType].add(eventHandler);
  }
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
  removeMessageHandler(handler) {
    if (handler.messageChannel) {
      handler.messageChannel.port1.removeEventListener("message", handler.onMessage);
      handler.messageChannel.port1.close();
    }
    this.handlers.delete(handler);
  }
  async _send(eventType, data, timeout = 50) {
    const messageChannel = typeof MessageChannel !== "undefined" ? new MessageChannel() : null;
    if (!messageChannel) {
      throw new Error("connection_unavailable");
    }
    let completionTimer;
    let handler;
    return new Promise((resolve, reject) => {
      const eventId = _generateEventId("", 20);
      messageChannel.port1.start();
      const ackTimer = setTimeout(() => {
        reject(new Error("unsupported_event"));
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
                reject(new Error("timeout"));
              }, 3e3);
              break;
            case "done":
              clearTimeout(completionTimer);
              resolve(messageEvent.data.response);
              break;
            default:
              clearTimeout(ackTimer);
              clearTimeout(completionTimer);
              reject(new Error("invalid_response"));
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
  async initializeServiceWorkerMessaging() {
    return _isWorker() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    this.receiver = Receiver._getInstance(_getWorkerGlobalScope());
    this.receiver._subscribe("keyChanged", async (_origin, data) => {
      const keys = await this._poll();
      return {
        keyProcessed: keys.includes(data.key)
      };
    });
    this.receiver._subscribe("ping", async (_origin, _data) => {
      return ["keyChanged"];
    });
  }
  async initializeSender() {
    var _a, _b;
    this.activeServiceWorker = await _getActiveServiceWorker();
    if (!this.activeServiceWorker) {
      return;
    }
    this.sender = new Sender(this.activeServiceWorker);
    const results = await this.sender._send("ping", {}, 800);
    if (!results) {
      return;
    }
    if (((_a = results[0]) === null || _a === void 0 ? void 0 : _a.fulfilled) && ((_b = results[0]) === null || _b === void 0 ? void 0 : _b.value.includes("keyChanged"))) {
      this.serviceWorkerReceiverAvailable = true;
    }
  }
  async notifyServiceWorker(key) {
    if (!this.sender || !this.activeServiceWorker || _getServiceWorkerController() !== this.activeServiceWorker) {
      return;
    }
    try {
      await this.sender._send("keyChanged", {
        key
      }, this.serviceWorkerReceiverAvailable ? 800 : 50);
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
    _assert(isHostLanguageValid(hl), auth, "argument-error");
    if (this.shouldResolveImmediately(hl) && isV2(_window().grecaptcha)) {
      return Promise.resolve(_window().grecaptcha);
    }
    return new Promise((resolve, reject) => {
      const networkTimeout = _window().setTimeout(() => {
        reject(_createError(auth, "network-request-failed"));
      }, NETWORK_TIMEOUT_DELAY.get());
      _window()[_JSLOAD_CALLBACK] = () => {
        _window().clearTimeout(networkTimeout);
        delete _window()[_JSLOAD_CALLBACK];
        const recaptcha = _window().grecaptcha;
        if (!recaptcha || !isV2(recaptcha)) {
          reject(_createError(auth, "internal-error"));
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
        reject(_createError(auth, "internal-error"));
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
    _assert(typeof document !== "undefined", this.auth, "operation-not-supported-in-this-environment");
    const container = typeof containerOrId === "string" ? document.getElementById(containerOrId) : containerOrId;
    _assert(container, this.auth, "argument-error");
    this.container = container;
    this.parameters.callback = this.makeTokenCallback(this.parameters.callback);
    this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new MockReCaptchaLoaderImpl() : new ReCaptchaLoaderImpl();
    this.validateStartingState();
  }
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
  _reset() {
    this.assertNotDestroyed();
    if (this.widgetId !== null) {
      this.getAssertedRecaptcha().reset(this.widgetId);
    }
  }
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
    _assert(!this.parameters.sitekey, this.auth, "argument-error");
    _assert(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error");
    _assert(typeof document !== "undefined", this.auth, "operation-not-supported-in-this-environment");
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
    _assert(!this.destroyed, this.auth, "internal-error");
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
    _assert(_isHttpOrHttps() && !_isWorker(), this.auth, "internal-error");
    await domReady();
    this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
    const siteKey = await getRecaptchaParams(this.auth);
    _assert(siteKey, this.auth, "internal-error");
    this.parameters.sitekey = siteKey;
  }
  getAssertedRecaptcha() {
    _assert(this.recaptcha, this.auth, "internal-error");
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
  await _assertLinkedStatus(false, userInternal, "phone");
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
        _assert(session.type === "enroll", auth, "internal-error");
        const startPhoneMfaEnrollmentRequest = {
          idToken: session.credential,
          phoneEnrollmentInfo: {
            phoneNumber: phoneInfoOptions.phoneNumber,
            clientType: "CLIENT_TYPE_WEB"
          }
        };
        const startEnrollPhoneMfaActionCallback = async (authInstance, request) => {
          if (request.phoneEnrollmentInfo.captchaResponse === FAKE_TOKEN) {
            _assert((verifier === null || verifier === void 0 ? void 0 : verifier.type) === RECAPTCHA_VERIFIER_TYPE, authInstance, "argument-error");
            const requestWithRecaptchaV2 = await injectRecaptchaV2Token(authInstance, request, verifier);
            return startEnrollPhoneMfa(authInstance, requestWithRecaptchaV2);
          }
          return startEnrollPhoneMfa(authInstance, request);
        };
        const startPhoneMfaEnrollmentResponse = handleRecaptchaFlow(auth, startPhoneMfaEnrollmentRequest, "mfaSmsEnrollment", startEnrollPhoneMfaActionCallback, "PHONE_PROVIDER");
        const response = await startPhoneMfaEnrollmentResponse.catch(error => {
          return Promise.reject(error);
        });
        return response.phoneSessionInfo.sessionInfo;
      } else {
        _assert(session.type === "signin", auth, "internal-error");
        const mfaEnrollmentId = ((_a = phoneInfoOptions.multiFactorHint) === null || _a === void 0 ? void 0 : _a.uid) || phoneInfoOptions.multiFactorUid;
        _assert(mfaEnrollmentId, auth, "missing-multi-factor-info");
        const startPhoneMfaSignInRequest = {
          mfaPendingCredential: session.credential,
          mfaEnrollmentId,
          phoneSignInInfo: {
            clientType: "CLIENT_TYPE_WEB"
          }
        };
        const startSignInPhoneMfaActionCallback = async (authInstance, request) => {
          if (request.phoneSignInInfo.captchaResponse === FAKE_TOKEN) {
            _assert((verifier === null || verifier === void 0 ? void 0 : verifier.type) === RECAPTCHA_VERIFIER_TYPE, authInstance, "argument-error");
            const requestWithRecaptchaV2 = await injectRecaptchaV2Token(authInstance, request, verifier);
            return startSignInPhoneMfa(authInstance, requestWithRecaptchaV2);
          }
          return startSignInPhoneMfa(authInstance, request);
        };
        const startPhoneMfaSignInResponse = handleRecaptchaFlow(auth, startPhoneMfaSignInRequest, "mfaSmsSignIn", startSignInPhoneMfaActionCallback, "PHONE_PROVIDER");
        const response = await startPhoneMfaSignInResponse.catch(error => {
          return Promise.reject(error);
        });
        return response.phoneResponseInfo.sessionInfo;
      }
    } else {
      const sendPhoneVerificationCodeRequest = {
        phoneNumber: phoneInfoOptions.phoneNumber,
        clientType: "CLIENT_TYPE_WEB"
      };
      const sendPhoneVerificationCodeActionCallback = async (authInstance, request) => {
        if (request.captchaResponse === FAKE_TOKEN) {
          _assert((verifier === null || verifier === void 0 ? void 0 : verifier.type) === RECAPTCHA_VERIFIER_TYPE, authInstance, "argument-error");
          const requestWithRecaptchaV2 = await injectRecaptchaV2Token(authInstance, request, verifier);
          return sendPhoneVerificationCode(authInstance, requestWithRecaptchaV2);
        }
        return sendPhoneVerificationCode(authInstance, request);
      };
      const sendPhoneVerificationCodeResponse = handleRecaptchaFlow(auth, sendPhoneVerificationCodeRequest, "sendVerificationCode", sendPhoneVerificationCodeActionCallback, "PHONE_PROVIDER");
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
  _assert(recaptchaV2Verifier.type === RECAPTCHA_VERIFIER_TYPE, auth, "argument-error");
  const recaptchaV2Token = await recaptchaV2Verifier.verify();
  _assert(typeof recaptchaV2Token === "string", auth, "argument-error");
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
var PhoneAuthProvider = class {
  constructor(auth) {
    this.providerId = PhoneAuthProvider.PROVIDER_ID;
    this.auth = _castAuth(auth);
  }
  verifyPhoneNumber(phoneOptions, applicationVerifier) {
    return _verifyPhoneNumber(this.auth, phoneOptions, (0, import_util.getModularInstance)(applicationVerifier));
  }
  static credential(verificationId, verificationCode) {
    return PhoneAuthCredential._fromVerification(verificationId, verificationCode);
  }
  static credentialFromResult(userCredential) {
    const credential = userCredential;
    return PhoneAuthProvider.credentialFromTaggedObject(credential);
  }
  static credentialFromError(error) {
    return PhoneAuthProvider.credentialFromTaggedObject(error.customData || {});
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
  _assert(auth._popupRedirectResolver, auth, "argument-error");
  return auth._popupRedirectResolver;
}
var IdpCredential = class extends AuthCredential {
  constructor(params) {
    super("custom", "custom");
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
  _assert(user, auth, "internal-error");
  return _reauthenticate(user, new IdpCredential(params), params.bypassAuthState);
}
async function _link(params) {
  const {
    auth,
    user
  } = params;
  _assert(user, auth, "internal-error");
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
        _fail(this.auth, "internal-error");
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
    return Promise.reject(_createError(auth, "operation-not-supported-in-this-environment"));
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
    return Promise.reject(_createError(userInternal.auth, "operation-not-supported-in-this-environment"));
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
var PopupOperation = class extends AbstractPopupRedirectOperation {
  constructor(auth, filter, provider, resolver, user) {
    super(auth, filter, resolver, user);
    this.provider = provider;
    this.authWindow = null;
    this.pollId = null;
    if (PopupOperation.currentPopupAction) {
      PopupOperation.currentPopupAction.cancel();
    }
    PopupOperation.currentPopupAction = this;
  }
  async executeNotNull() {
    const result = await this.execute();
    _assert(result, this.auth, "internal-error");
    return result;
  }
  async onExecution() {
    debugAssert(this.filter.length === 1, "Popup operations only handle one event");
    const eventId = _generateEventId();
    this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], eventId);
    this.authWindow.associatedEvent = eventId;
    this.resolver._originValidation(this.auth).catch(e => {
      this.reject(e);
    });
    this.resolver._isIframeWebStorageSupported(this.auth, isSupported => {
      if (!isSupported) {
        this.reject(_createError(this.auth, "web-storage-unsupported"));
      }
    });
    this.pollUserCancellation();
  }
  get eventId() {
    var _a;
    return ((_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.associatedEvent) || null;
  }
  cancel() {
    this.reject(_createError(this.auth, "cancelled-popup-request"));
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
    PopupOperation.currentPopupAction = null;
  }
  pollUserCancellation() {
    const poll = () => {
      var _a, _b;
      if ((_b = (_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.window) === null || _b === void 0 ? void 0 : _b.closed) {
        this.pollId = window.setTimeout(() => {
          this.pollId = null;
          this.reject(_createError(this.auth, "popup-closed-by-user"));
        }, 8e3);
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
    super(auth, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], resolver, void 0, bypassAuthState);
    this.eventId = null;
  }
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
  return resolverInternal._openRedirect(authInternal, provider, "signInViaRedirect");
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
  _fail(auth, "unauthorized-domain");
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
          reject(_createError(auth, "network-request-failed"));
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
          reject(_createError(auth, "network-request-failed"));
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
var EID_FROM_APIHOST = /* @__PURE__ */new Map([["identitytoolkit.googleapis.com", "p"], ["staging-identitytoolkit.sandbox.googleapis.com", "s"], ["test-identitytoolkit.sandbox.googleapis.com", "t"]]);
function getIframeUrl(auth) {
  const config = auth.config;
  _assert(config.authDomain, auth, "auth-domain-config-required");
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
  _assert(gapi2, auth, "internal-error");
  return context.open({
    where: document.body,
    url: getIframeUrl(auth),
    messageHandlersFilter: gapi2.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: IFRAME_ATTRIBUTES,
    dontclear: true
  }, iframe => new Promise(async (resolve, reject) => {
    await iframe.restyle({
      setHideOnLeave: false
    });
    const networkError = _createError(auth, "network-request-failed");
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
  _assert(newWin, auth, "popup-blocked");
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
  _assert(auth.config.authDomain, auth, "auth-domain-config-required");
  _assert(auth.config.apiKey, auth, "invalid-api-key");
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
      _assert(iframeEvent === null || iframeEvent === void 0 ? void 0 : iframeEvent.authEvent, auth, "invalid-auth-event");
      const handled = manager.onEvent(iframeEvent.authEvent);
      return {
        status: handled ? "ACK" : "ERROR"
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
      _fail(auth, "internal-error");
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
var PhoneMultiFactorAssertionImpl = class extends MultiFactorAssertionImpl {
  constructor(credential) {
    super("phone");
    this.credential = credential;
  }
  static _fromCredential(credential) {
    return new PhoneMultiFactorAssertionImpl(credential);
  }
  _finalizeEnroll(auth, idToken, displayName) {
    return finalizeEnrollPhoneMfa(auth, {
      idToken,
      displayName,
      phoneVerificationInfo: this.credential._makeVerificationRequest()
    });
  }
  _finalizeSignIn(auth, mfaPendingCredential) {
    return finalizeSignInPhoneMfa(auth, {
      mfaPendingCredential,
      phoneVerificationInfo: this.credential._makeVerificationRequest()
    });
  }
};
var PhoneMultiFactorGenerator = class {
  constructor() {}
  static assertion(credential) {
    return PhoneMultiFactorAssertionImpl._fromCredential(credential);
  }
};
PhoneMultiFactorGenerator.FACTOR_ID = "phone";
var TotpMultiFactorGenerator = class {
  static assertionForEnrollment(secret, oneTimePassword) {
    return TotpMultiFactorAssertionImpl._fromSecret(secret, oneTimePassword);
  }
  static assertionForSignIn(enrollmentId, oneTimePassword) {
    return TotpMultiFactorAssertionImpl._fromEnrollmentId(enrollmentId, oneTimePassword);
  }
  static async generateSecret(session) {
    var _a;
    const mfaSession = session;
    _assert(typeof ((_a = mfaSession.user) === null || _a === void 0 ? void 0 : _a.auth) !== "undefined", "internal-error");
    const response = await startEnrollTotpMfa(mfaSession.user.auth, {
      idToken: mfaSession.credential,
      totpEnrollmentInfo: {}
    });
    return TotpSecret._fromStartTotpMfaEnrollmentResponse(response, mfaSession.user.auth);
  }
};
TotpMultiFactorGenerator.FACTOR_ID = "totp";
var TotpMultiFactorAssertionImpl = class extends MultiFactorAssertionImpl {
  constructor(otp, enrollmentId, secret) {
    super("totp");
    this.otp = otp;
    this.enrollmentId = enrollmentId;
    this.secret = secret;
  }
  static _fromSecret(secret, otp) {
    return new TotpMultiFactorAssertionImpl(otp, void 0, secret);
  }
  static _fromEnrollmentId(enrollmentId, otp) {
    return new TotpMultiFactorAssertionImpl(otp, enrollmentId);
  }
  async _finalizeEnroll(auth, idToken, displayName) {
    _assert(typeof this.secret !== "undefined", auth, "argument-error");
    return finalizeEnrollTotpMfa(auth, {
      idToken,
      displayName,
      totpVerificationInfo: this.secret._makeTotpVerificationInfo(this.otp)
    });
  }
  async _finalizeSignIn(auth, mfaPendingCredential) {
    _assert(this.enrollmentId !== void 0 && this.otp !== void 0, auth, "argument-error");
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
var TotpSecret = class {
  constructor(secretKey, hashingAlgorithm, codeLength, codeIntervalSeconds, enrollmentCompletionDeadline, sessionInfo, auth) {
    this.sessionInfo = sessionInfo;
    this.auth = auth;
    this.secretKey = secretKey;
    this.hashingAlgorithm = hashingAlgorithm;
    this.codeLength = codeLength;
    this.codeIntervalSeconds = codeIntervalSeconds;
    this.enrollmentCompletionDeadline = enrollmentCompletionDeadline;
  }
  static _fromStartTotpMfaEnrollmentResponse(response, auth) {
    return new TotpSecret(response.totpSessionInfo.sharedSecretKey, response.totpSessionInfo.hashingAlgorithm, response.totpSessionInfo.verificationCodeLength, response.totpSessionInfo.periodSec, new Date(response.totpSessionInfo.finalizeEnrollmentTime).toUTCString(), response.totpSessionInfo.sessionInfo, auth);
  }
  _makeTotpVerificationInfo(otp) {
    return {
      sessionInfo: this.sessionInfo,
      verificationCode: otp
    };
  }
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
var version = "1.10.0";
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
    _assert(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth");
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
  }, "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((container, _instanceIdentifier, _instance) => {
    const authInternalProvider = container.getProvider("auth-internal");
    authInternalProvider.initialize();
  }));
  (0, import_app._registerComponent)(new import_component.Component("auth-internal", container => {
    const auth = _castAuth(container.getProvider("auth").getImmediate());
    return (auth2 => new AuthInterop(auth2))(auth);
  }, "PRIVATE").setInstantiationMode("EXPLICIT"));
  (0, import_app.registerVersion)(name, version, getVersionForPlatform(clientPlatform));
  (0, import_app.registerVersion)(name, version, "esm2017");
}
var DEFAULT_ID_TOKEN_MAX_AGE = 5 * 60;
var authIdTokenMaxAge = (0, import_util.getExperimentalSetting)("authIdTokenMaxAge") || DEFAULT_ID_TOKEN_MAX_AGE;
var lastPostedIdToken = null;
var mintCookieFactory = url => async user => {
  const idTokenResult = user && (await user.getIdTokenResult());
  const idTokenAge = idTokenResult && (new Date().getTime() - Date.parse(idTokenResult.issuedAtTime)) / 1e3;
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
        const error = _createError("internal-error");
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
registerAuth("Browser");

// node_modules/@firebase/auth/dist/esm2017/index.js
var import_app2 = require("@firebase/app@0.11.4");
var import_util2 = require("@firebase/util@1.11.0");
var import_logger2 = require("@firebase/logger@0.4.4");
var import_tslib2 = require("tslib@2.8.1");
var import_component2 = require("@firebase/component@0.6.13");
/**
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
 */
/**
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
 */
/**
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
 */
/**
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
 */
/**
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
 */
/**
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
 */
/**
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
 */
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmaXJlYmFzZS9hdXRoLjEuMTAuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbW9kZWwvZW51bV9tYXBzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2Vycm9ycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2xvZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2Fzc2VydC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2xvY2F0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvbmF2aWdhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZGVsYXkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9lbXVsYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2ZldGNoX3Byb3ZpZGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvZXJyb3JzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3JlY2FwdGNoYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9hY2NvdW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdGltZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2lkX3Rva2VuX3Jlc3VsdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2ludmFsaWRhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3Byb2FjdGl2ZV9yZWZyZXNoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9tZXRhZGF0YS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3JlbG9hZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdG9rZW5fbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2luc3RhbnRpYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9pbl9tZW1vcnkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcGVyc2lzdGVuY2UvcGVyc2lzdGVuY2VfdXNlcl9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvYnJvd3Nlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3ZlcnNpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9taWRkbGV3YXJlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvcGFzc3dvcmRfcG9saWN5L2dldF9wYXNzd29yZF9wb2xpY3kudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9wYXNzd29yZF9wb2xpY3lfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2F1dGhfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9sb2FkX2pzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfbW9jay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX2VudGVycHJpc2VfdmVyaWZpZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9pbml0aWFsaXplLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvZW11bGF0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvYXV0aF9jcmVkZW50aWFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L2VtYWlsX2FuZF9wYXNzd29yZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2VtYWlsX2FuZF9wYXNzd29yZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2VtYWlsX2xpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvZW1haWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9pZHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvb2F1dGgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9zbXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYWN0aW9uX2NvZGVfdXJsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9lbWFpbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZmVkZXJhdGVkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9vYXV0aC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZmFjZWJvb2sudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2dvb2dsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZ2l0aHViLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL3NhbWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL3NhbWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL3R3aXR0ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9zaWduX3VwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9jcmVkZW50aWFsX2ltcGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9hbm9ueW1vdXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfZXJyb3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9wcm92aWRlcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9saW5rX3VubGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3JlYXV0aGVudGljYXRlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvY3JlZGVudGlhbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2N1c3RvbV90b2tlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2N1c3RvbV90b2tlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9pbmZvLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYWN0aW9uX2NvZGVfc2V0dGluZ3MudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9lbWFpbF9saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vY3JlYXRlX2F1dGhfdXJpLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvcHJvZmlsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2FjY291bnRfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2FkZGl0aW9uYWxfdXNlcl9pbmZvLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX3Nlc3Npb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfcmVzb2x2ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvbWZhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX3VzZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcGVyc2lzdGVuY2UvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2UvYnJvd3Nlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9sb2NhbF9zdG9yYWdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2Nvb2tpZV9zdG9yYWdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL3Nlc3Npb25fc3RvcmFnZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZXNzYWdlY2hhbm5lbC9wcm9taXNlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21lc3NhZ2VjaGFubmVsL3JlY2VpdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZXZlbnRfaWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWVzc2FnZWNoYW5uZWwvc2VuZGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2F1dGhfd2luZG93LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3V0aWwvd29ya2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2luZGV4ZWRfZGIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9tZmEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV9sb2FkZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV92ZXJpZmllci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9zdHJhdGVnaWVzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3Byb3ZpZGVycy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3Jlc29sdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvaWRwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYWJzdHJhY3RfcG9wdXBfcmVkaXJlY3Rfb3BlcmF0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcG9wdXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9yZWRpcmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9zdHJhdGVnaWVzL3JlZGlyZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvYXV0aF9ldmVudF9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvcHJvamVjdF9jb25maWcvZ2V0X3Byb2plY3RfY29uZmlnLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdmFsaWRhdGVfb3JpZ2luLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2lmcmFtZS9nYXBpLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2lmcmFtZS9pZnJhbWUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvdXRpbC9wb3B1cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2hhbmRsZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcG9wdXBfcmVkaXJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfYXNzZXJ0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21mYS9hc3NlcnRpb25zL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvYXNzZXJ0aW9ucy90b3RwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvZmlyZWJhc2VfaW50ZXJuYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9yZWdpc3Rlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9kaXN0L2VzbTIwMTcvaW5kZXguanMiXSwibmFtZXMiOlsiYXV0aF8xXzEwXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQWN0aW9uQ29kZU9wZXJhdGlvbiIsIkFjdGlvbkNvZGVVUkwiLCJBdXRoQ3JlZGVudGlhbCIsIkF1dGhFcnJvckNvZGVzIiwiQVVUSF9FUlJPUl9DT0RFU19NQVBfRE9fTk9UX1VTRV9JTlRFUk5BTExZIiwiRW1haWxBdXRoQ3JlZGVudGlhbCIsIkVtYWlsQXV0aFByb3ZpZGVyIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJGYWN0b3JJZCIsIkdpdGh1YkF1dGhQcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsIk9BdXRoQ3JlZGVudGlhbCIsIk9BdXRoUHJvdmlkZXIiLCJPcGVyYXRpb25UeXBlIiwiUGhvbmVBdXRoQ3JlZGVudGlhbCIsIlBob25lQXV0aFByb3ZpZGVyIiwiUGhvbmVNdWx0aUZhY3RvckdlbmVyYXRvciIsIlByb3ZpZGVySWQiLCJSZWNhcHRjaGFWZXJpZmllciIsIlNBTUxBdXRoUHJvdmlkZXIiLCJTaWduSW5NZXRob2QiLCJUb3RwTXVsdGlGYWN0b3JHZW5lcmF0b3IiLCJUb3RwU2VjcmV0IiwiVHdpdHRlckF1dGhQcm92aWRlciIsImFwcGx5QWN0aW9uQ29kZSIsImJlZm9yZUF1dGhTdGF0ZUNoYW5nZWQiLCJicm93c2VyQ29va2llUGVyc2lzdGVuY2UiLCJicm93c2VyTG9jYWxQZXJzaXN0ZW5jZSIsImJyb3dzZXJQb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJicm93c2VyU2Vzc2lvblBlcnNpc3RlbmNlIiwiY2hlY2tBY3Rpb25Db2RlIiwiY29uZmlybVBhc3N3b3JkUmVzZXQiLCJjb25uZWN0QXV0aEVtdWxhdG9yIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZGVidWdFcnJvck1hcCIsImRlbGV0ZVVzZXIiLCJmZXRjaFNpZ25Jbk1ldGhvZHNGb3JFbWFpbCIsImdldEFkZGl0aW9uYWxVc2VySW5mbyIsImdldEF1dGgiLCJnZXRJZFRva2VuIiwiZ2V0SWRUb2tlblJlc3VsdCIsImdldE11bHRpRmFjdG9yUmVzb2x2ZXIiLCJnZXRSZWRpcmVjdFJlc3VsdCIsImluTWVtb3J5UGVyc2lzdGVuY2UiLCJpbmRleGVkREJMb2NhbFBlcnNpc3RlbmNlIiwiaW5pdGlhbGl6ZUF1dGgiLCJpbml0aWFsaXplUmVjYXB0Y2hhQ29uZmlnIiwiaXNTaWduSW5XaXRoRW1haWxMaW5rIiwibGlua1dpdGhDcmVkZW50aWFsIiwibGlua1dpdGhQaG9uZU51bWJlciIsImxpbmtXaXRoUG9wdXAiLCJsaW5rV2l0aFJlZGlyZWN0IiwibXVsdGlGYWN0b3IiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJvbklkVG9rZW5DaGFuZ2VkIiwicGFyc2VBY3Rpb25Db2RlVVJMIiwicHJvZEVycm9yTWFwIiwicmVhdXRoZW50aWNhdGVXaXRoQ3JlZGVudGlhbCIsInJlYXV0aGVudGljYXRlV2l0aFBob25lTnVtYmVyIiwicmVhdXRoZW50aWNhdGVXaXRoUG9wdXAiLCJyZWF1dGhlbnRpY2F0ZVdpdGhSZWRpcmVjdCIsInJlbG9hZCIsInJldm9rZUFjY2Vzc1Rva2VuIiwic2VuZEVtYWlsVmVyaWZpY2F0aW9uIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsInNlbmRTaWduSW5MaW5rVG9FbWFpbCIsInNldFBlcnNpc3RlbmNlIiwic2lnbkluQW5vbnltb3VzbHkiLCJzaWduSW5XaXRoQ3JlZGVudGlhbCIsInNpZ25JbldpdGhDdXN0b21Ub2tlbiIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsTGluayIsInNpZ25JbldpdGhQaG9uZU51bWJlciIsInNpZ25JbldpdGhQb3B1cCIsInNpZ25JbldpdGhSZWRpcmVjdCIsInNpZ25PdXQiLCJ1bmxpbmsiLCJ1cGRhdGVDdXJyZW50VXNlciIsInVwZGF0ZUVtYWlsIiwidXBkYXRlUGFzc3dvcmQiLCJ1cGRhdGVQaG9uZU51bWJlciIsInVwZGF0ZVByb2ZpbGUiLCJ1c2VEZXZpY2VMYW5ndWFnZSIsInZhbGlkYXRlUGFzc3dvcmQiLCJ2ZXJpZnlCZWZvcmVVcGRhdGVFbWFpbCIsInZlcmlmeVBhc3N3b3JkUmVzZXRDb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlBIT05FIiwiVE9UUCIsIkZBQ0VCT09LIiwiR0lUSFVCIiwiR09PR0xFIiwiUEFTU1dPUkQiLCJUV0lUVEVSIiwiRU1BSUxfTElOSyIsIkVNQUlMX1BBU1NXT1JEIiwiTElOSyIsIlJFQVVUSEVOVElDQVRFIiwiU0lHTl9JTiIsIkVNQUlMX1NJR05JTiIsIlBBU1NXT1JEX1JFU0VUIiwiUkVDT1ZFUl9FTUFJTCIsIlJFVkVSVF9TRUNPTkRfRkFDVE9SX0FERElUSU9OIiwiVkVSSUZZX0FORF9DSEFOR0VfRU1BSUwiLCJWRVJJRllfRU1BSUwiLCJfZGVidWdFcnJvck1hcCIsIl9wcm9kRXJyb3JNYXAiLCJfREVGQVVMVF9BVVRIX0VSUk9SX0ZBQ1RPUlkiLCJpbXBvcnRfdXRpbCIsIkVycm9yRmFjdG9yeSIsIkFETUlOX09OTFlfT1BFUkFUSU9OIiwiQVJHVU1FTlRfRVJST1IiLCJBUFBfTk9UX0FVVEhPUklaRUQiLCJBUFBfTk9UX0lOU1RBTExFRCIsIkNBUFRDSEFfQ0hFQ0tfRkFJTEVEIiwiQ09ERV9FWFBJUkVEIiwiQ09SRE9WQV9OT1RfUkVBRFkiLCJDT1JTX1VOU1VQUE9SVEVEIiwiQ1JFREVOVElBTF9BTFJFQURZX0lOX1VTRSIsIkNSRURFTlRJQUxfTUlTTUFUQ0giLCJDUkVERU5USUFMX1RPT19PTERfTE9HSU5fQUdBSU4iLCJERVBFTkRFTlRfU0RLX0lOSVRfQkVGT1JFX0FVVEgiLCJEWU5BTUlDX0xJTktfTk9UX0FDVElWQVRFRCIsIkVNQUlMX0NIQU5HRV9ORUVEU19WRVJJRklDQVRJT04iLCJFTUFJTF9FWElTVFMiLCJFTVVMQVRPUl9DT05GSUdfRkFJTEVEIiwiRVhQSVJFRF9PT0JfQ09ERSIsIkVYUElSRURfUE9QVVBfUkVRVUVTVCIsIklOVEVSTkFMX0VSUk9SIiwiSU5WQUxJRF9BUElfS0VZIiwiSU5WQUxJRF9BUFBfQ1JFREVOVElBTCIsIklOVkFMSURfQVBQX0lEIiwiSU5WQUxJRF9BVVRIIiwiSU5WQUxJRF9BVVRIX0VWRU5UIiwiSU5WQUxJRF9DRVJUX0hBU0giLCJJTlZBTElEX0NPREUiLCJJTlZBTElEX0NPTlRJTlVFX1VSSSIsIklOVkFMSURfQ09SRE9WQV9DT05GSUdVUkFUSU9OIiwiSU5WQUxJRF9DVVNUT01fVE9LRU4iLCJJTlZBTElEX0RZTkFNSUNfTElOS19ET01BSU4iLCJJTlZBTElEX0VNQUlMIiwiSU5WQUxJRF9FTVVMQVRPUl9TQ0hFTUUiLCJJTlZBTElEX0lEUF9SRVNQT05TRSIsIklOVkFMSURfTE9HSU5fQ1JFREVOVElBTFMiLCJJTlZBTElEX01FU1NBR0VfUEFZTE9BRCIsIklOVkFMSURfTUZBX1NFU1NJT04iLCJJTlZBTElEX09BVVRIX0NMSUVOVF9JRCIsIklOVkFMSURfT0FVVEhfUFJPVklERVIiLCJJTlZBTElEX09PQl9DT0RFIiwiSU5WQUxJRF9PUklHSU4iLCJJTlZBTElEX1BBU1NXT1JEIiwiSU5WQUxJRF9QRVJTSVNURU5DRSIsIklOVkFMSURfUEhPTkVfTlVNQkVSIiwiSU5WQUxJRF9QUk9WSURFUl9JRCIsIklOVkFMSURfUkVDSVBJRU5UX0VNQUlMIiwiSU5WQUxJRF9TRU5ERVIiLCJJTlZBTElEX1NFU1NJT05fSU5GTyIsIklOVkFMSURfVEVOQU5UX0lEIiwiTUZBX0lORk9fTk9UX0ZPVU5EIiwiTUZBX1JFUVVJUkVEIiwiTUlTU0lOR19BTkRST0lEX1BBQ0tBR0VfTkFNRSIsIk1JU1NJTkdfQVBQX0NSRURFTlRJQUwiLCJNSVNTSU5HX0FVVEhfRE9NQUlOIiwiTUlTU0lOR19DT0RFIiwiTUlTU0lOR19DT05USU5VRV9VUkkiLCJNSVNTSU5HX0lGUkFNRV9TVEFSVCIsIk1JU1NJTkdfSU9TX0JVTkRMRV9JRCIsIk1JU1NJTkdfT1JfSU5WQUxJRF9OT05DRSIsIk1JU1NJTkdfTUZBX0lORk8iLCJNSVNTSU5HX01GQV9TRVNTSU9OIiwiTUlTU0lOR19QSE9ORV9OVU1CRVIiLCJNSVNTSU5HX1NFU1NJT05fSU5GTyIsIk1PRFVMRV9ERVNUUk9ZRUQiLCJORUVEX0NPTkZJUk1BVElPTiIsIk5FVFdPUktfUkVRVUVTVF9GQUlMRUQiLCJOVUxMX1VTRVIiLCJOT19BVVRIX0VWRU5UIiwiTk9fU1VDSF9QUk9WSURFUiIsIk9QRVJBVElPTl9OT1RfQUxMT1dFRCIsIk9QRVJBVElPTl9OT1RfU1VQUE9SVEVEIiwiUE9QVVBfQkxPQ0tFRCIsIlBPUFVQX0NMT1NFRF9CWV9VU0VSIiwiUFJPVklERVJfQUxSRUFEWV9MSU5LRUQiLCJRVU9UQV9FWENFRURFRCIsIlJFRElSRUNUX0NBTkNFTExFRF9CWV9VU0VSIiwiUkVESVJFQ1RfT1BFUkFUSU9OX1BFTkRJTkciLCJSRUpFQ1RFRF9DUkVERU5USUFMIiwiU0VDT05EX0ZBQ1RPUl9BTFJFQURZX0VOUk9MTEVEIiwiU0VDT05EX0ZBQ1RPUl9MSU1JVF9FWENFRURFRCIsIlRFTkFOVF9JRF9NSVNNQVRDSCIsIlRJTUVPVVQiLCJUT0tFTl9FWFBJUkVEIiwiVE9PX01BTllfQVRURU1QVFNfVFJZX0xBVEVSIiwiVU5BVVRIT1JJWkVEX0RPTUFJTiIsIlVOU1VQUE9SVEVEX0ZJUlNUX0ZBQ1RPUiIsIlVOU1VQUE9SVEVEX1BFUlNJU1RFTkNFIiwiVU5TVVBQT1JURURfVEVOQU5UX09QRVJBVElPTiIsIlVOVkVSSUZJRURfRU1BSUwiLCJVU0VSX0NBTkNFTExFRCIsIlVTRVJfREVMRVRFRCIsIlVTRVJfRElTQUJMRUQiLCJVU0VSX01JU01BVENIIiwiVVNFUl9TSUdORURfT1VUIiwiV0VBS19QQVNTV09SRCIsIldFQl9TVE9SQUdFX1VOU1VQUE9SVEVEIiwiQUxSRUFEWV9JTklUSUFMSVpFRCIsIlJFQ0FQVENIQV9OT1RfRU5BQkxFRCIsIk1JU1NJTkdfUkVDQVBUQ0hBX1RPS0VOIiwiSU5WQUxJRF9SRUNBUFRDSEFfVE9LRU4iLCJJTlZBTElEX1JFQ0FQVENIQV9BQ1RJT04iLCJNSVNTSU5HX0NMSUVOVF9UWVBFIiwiTUlTU0lOR19SRUNBUFRDSEFfVkVSU0lPTiIsIklOVkFMSURfUkVDQVBUQ0hBX1ZFUlNJT04iLCJJTlZBTElEX1JFUV9UWVBFIiwiSU5WQUxJRF9IT1NUSU5HX0xJTktfRE9NQUlOIiwibG9nQ2xpZW50IiwiaW1wb3J0X2xvZ2dlciIsIkxvZ2dlciIsIl9sb2dXYXJuIiwibXNnIiwiYXJncyIsImxvZ0xldmVsIiwiTG9nTGV2ZWwiLCJXQVJOIiwid2FybiIsImltcG9ydF9hcHAiLCJTREtfVkVSU0lPTiIsIl9sb2dFcnJvciIsIkVSUk9SIiwiZXJyb3IiLCJfZmFpbCIsImF1dGhPckNvZGUiLCJyZXN0IiwiY3JlYXRlRXJyb3JJbnRlcm5hbCIsIl9jcmVhdGVFcnJvciIsIl9lcnJvcldpdGhDdXN0b21NZXNzYWdlIiwiYXV0aCIsImNvZGUiLCJtZXNzYWdlIiwiZXJyb3JNYXAiLCJPYmplY3QiLCJhc3NpZ24iLCJmYWN0b3J5IiwiY3JlYXRlIiwiYXBwTmFtZSIsIm5hbWUiLCJfc2VydmVyQXBwQ3VycmVudFVzZXJPcGVyYXRpb25Ob3RTdXBwb3J0ZWRFcnJvciIsIl9hc3NlcnRJbnN0YW5jZU9mIiwib2JqZWN0IiwiaW5zdGFuY2UiLCJjb25zdHJ1Y3Rvckluc3RhbmNlIiwiY29uc3RydWN0b3IiLCJmdWxsUGFyYW1zIiwic2xpY2UiLCJfZXJyb3JGYWN0b3J5IiwiX2Fzc2VydCIsImFzc2VydGlvbiIsImRlYnVnRmFpbCIsImZhaWx1cmUiLCJFcnJvciIsImRlYnVnQXNzZXJ0IiwiX2dldEN1cnJlbnRVcmwiLCJzZWxmIiwiX2EiLCJsb2NhdGlvbiIsImhyZWYiLCJfaXNIdHRwT3JIdHRwcyIsIl9nZXRDdXJyZW50U2NoZW1lIiwicHJvdG9jb2wiLCJfaXNPbmxpbmUiLCJuYXZpZ2F0b3IiLCJvbkxpbmUiLCJpc0Jyb3dzZXJFeHRlbnNpb24iLCJfZ2V0VXNlckxhbmd1YWdlIiwibmF2aWdhdG9yTGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJsYW5ndWFnZSIsIkRlbGF5Iiwic2hvcnREZWxheSIsImxvbmdEZWxheSIsImlzTW9iaWxlIiwiaXNNb2JpbGVDb3Jkb3ZhIiwiaXNSZWFjdE5hdGl2ZSIsImdldCIsIk1hdGgiLCJtaW4iLCJfZW11bGF0b3JVcmwiLCJjb25maWciLCJwYXRoIiwiZW11bGF0b3IiLCJ1cmwiLCJzdGFydHNXaXRoIiwiRmV0Y2hQcm92aWRlciIsImluaXRpYWxpemUiLCJmZXRjaEltcGwiLCJoZWFkZXJzSW1wbCIsInJlc3BvbnNlSW1wbCIsImZldGNoIiwiZ2xvYmFsVGhpcyIsImhlYWRlcnMiLCJIZWFkZXJzIiwicmVzcG9uc2UiLCJSZXNwb25zZSIsIlNFUlZFUl9FUlJPUl9NQVAiLCJDb29raWVBdXRoUHJveGllZEVuZHBvaW50cyIsIkRFRkFVTFRfQVBJX1RJTUVPVVRfTVMiLCJfYWRkVGlkSWZOZWNlc3NhcnkiLCJyZXF1ZXN0IiwidGVuYW50SWQiLCJfcGVyZm9ybUFwaVJlcXVlc3QiLCJtZXRob2QiLCJjdXN0b21FcnJvck1hcCIsIl9wZXJmb3JtRmV0Y2hXaXRoRXJyb3JIYW5kbGluZyIsImJvZHkiLCJwYXJhbXMiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJxdWVyeXN0cmluZyIsImtleSIsImFwaUtleSIsIl9nZXRBZGRpdGlvbmFsSGVhZGVycyIsImxhbmd1YWdlQ29kZSIsImZldGNoQXJncyIsImlzQ2xvdWRmbGFyZVdvcmtlciIsInJlZmVycmVyUG9saWN5IiwiX2dldEZpbmFsVGFyZ2V0IiwiYXBpSG9zdCIsImZldGNoRm4iLCJfY2FuSW5pdEVtdWxhdG9yIiwibmV0d29ya1RpbWVvdXQiLCJOZXR3b3JrVGltZW91dCIsIlByb21pc2UiLCJyYWNlIiwicHJvbWlzZSIsImNsZWFyTmV0d29ya1RpbWVvdXQiLCJqc29uIiwiX21ha2VUYWdnZWRFcnJvciIsIm9rIiwiZXJyb3JNZXNzYWdlIiwic2VydmVyRXJyb3JDb2RlIiwic2VydmVyRXJyb3JNZXNzYWdlIiwic3BsaXQiLCJhdXRoRXJyb3IiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJlIiwiRmlyZWJhc2VFcnJvciIsIlN0cmluZyIsIl9wZXJmb3JtU2lnbkluUmVxdWVzdCIsInNlcnZlclJlc3BvbnNlIiwiX3NlcnZlclJlc3BvbnNlIiwiaG9zdCIsImJhc2UiLCJhdXRoSW50ZXJuYWwiLCJmaW5hbFRhcmdldCIsImFwaVNjaGVtZSIsImluY2x1ZGVzIiwiX3BlcnNpc3RlbmNlTWFuYWdlckF2YWlsYWJsZSIsIl9nZXRQZXJzaXN0ZW5jZVR5cGUiLCJjb29raWVQZXJzaXN0ZW5jZSIsIl9nZXRQZXJzaXN0ZW5jZSIsInRvU3RyaW5nIiwiX3BhcnNlRW5mb3JjZW1lbnRTdGF0ZSIsImVuZm9yY2VtZW50U3RhdGVTdHIiLCJjbGVhclRpbWVvdXQiLCJ0aW1lciIsIl8iLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwiZXJyb3JQYXJhbXMiLCJlbWFpbCIsInBob25lTnVtYmVyIiwiY3VzdG9tRGF0YSIsIl90b2tlblJlc3BvbnNlIiwiaXNWMiIsImdyZWNhcHRjaGEiLCJnZXRSZXNwb25zZSIsImlzRW50ZXJwcmlzZSIsImVudGVycHJpc2UiLCJSZWNhcHRjaGFDb25maWciLCJzaXRlS2V5IiwicmVjYXB0Y2hhRW5mb3JjZW1lbnRTdGF0ZSIsInJlY2FwdGNoYUtleSIsImdldFByb3ZpZGVyRW5mb3JjZW1lbnRTdGF0ZSIsInByb3ZpZGVyU3RyIiwibGVuZ3RoIiwicHJvdmlkZXIiLCJlbmZvcmNlbWVudFN0YXRlIiwiaXNQcm92aWRlckVuYWJsZWQiLCJpc0FueVByb3ZpZGVyRW5hYmxlZCIsImdldFJlY2FwdGNoYVBhcmFtcyIsInJlY2FwdGNoYVNpdGVLZXkiLCJnZXRSZWNhcHRjaGFDb25maWciLCJkZWxldGVBY2NvdW50IiwiZGVsZXRlTGlua2VkQWNjb3VudHMiLCJnZXRBY2NvdW50SW5mbyIsInV0Y1RpbWVzdGFtcFRvRGF0ZVN0cmluZyIsInV0Y1RpbWVzdGFtcCIsImRhdGUiLCJEYXRlIiwiTnVtYmVyIiwiaXNOYU4iLCJnZXRUaW1lIiwidG9VVENTdHJpbmciLCJ1c2VyIiwiZm9yY2VSZWZyZXNoIiwiZ2V0TW9kdWxhckluc3RhbmNlIiwidXNlckludGVybmFsIiwidG9rZW4iLCJjbGFpbXMiLCJfcGFyc2VUb2tlbiIsImV4cCIsImF1dGhfdGltZSIsImlhdCIsImZpcmViYXNlIiwic2lnbkluUHJvdmlkZXIiLCJhdXRoVGltZSIsInNlY29uZHNTdHJpbmdUb01pbGxpc2Vjb25kcyIsImlzc3VlZEF0VGltZSIsImV4cGlyYXRpb25UaW1lIiwic2lnbkluU2Vjb25kRmFjdG9yIiwic2Vjb25kcyIsImFsZ29yaXRobSIsInBheWxvYWQiLCJzaWduYXR1cmUiLCJkZWNvZGVkIiwiYmFzZTY0RGVjb2RlIiwicGFyc2UiLCJfdG9rZW5FeHBpcmVzSW4iLCJwYXJzZWRUb2tlbiIsIl9sb2dvdXRJZkludmFsaWRhdGVkIiwiYnlwYXNzQXV0aFN0YXRlIiwiaXNVc2VySW52YWxpZGF0ZWQiLCJjdXJyZW50VXNlciIsIlByb2FjdGl2ZVJlZnJlc2giLCJpc1J1bm5pbmciLCJ0aW1lcklkIiwiZXJyb3JCYWNrb2ZmIiwiX3N0YXJ0Iiwic2NoZWR1bGUiLCJfc3RvcCIsImdldEludGVydmFsIiwid2FzRXJyb3IiLCJpbnRlcnZhbCIsImV4cFRpbWUiLCJzdHNUb2tlbk1hbmFnZXIiLCJub3ciLCJtYXgiLCJpdGVyYXRpb24iLCJVc2VyTWV0YWRhdGEiLCJjcmVhdGVkQXQiLCJsYXN0TG9naW5BdCIsIl9pbml0aWFsaXplVGltZSIsImxhc3RTaWduSW5UaW1lIiwiY3JlYXRpb25UaW1lIiwiX2NvcHkiLCJtZXRhZGF0YSIsInRvSlNPTiIsIl9yZWxvYWRXaXRob3V0U2F2aW5nIiwiaWRUb2tlbiIsInVzZXJzIiwiY29yZUFjY291bnQiLCJfbm90aWZ5UmVsb2FkTGlzdGVuZXIiLCJuZXdQcm92aWRlckRhdGEiLCJwcm92aWRlclVzZXJJbmZvIiwiZXh0cmFjdFByb3ZpZGVyRGF0YSIsInByb3ZpZGVyRGF0YSIsIm1lcmdlUHJvdmlkZXJEYXRhIiwib2xkSXNBbm9ueW1vdXMiLCJpc0Fub255bW91cyIsIm5ld0lzQW5vbnltb3VzIiwicGFzc3dvcmRIYXNoIiwidXBkYXRlcyIsInVpZCIsImxvY2FsSWQiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwicGhvdG9VcmwiLCJlbWFpbFZlcmlmaWVkIiwiX3BlcnNpc3RVc2VySWZDdXJyZW50IiwiX25vdGlmeUxpc3RlbmVyc0lmQ3VycmVudCIsIm9yaWdpbmFsIiwibmV3RGF0YSIsImRlZHVwZWQiLCJmaWx0ZXIiLCJvIiwic29tZSIsIm4iLCJwcm92aWRlcklkIiwicHJvdmlkZXJzIiwibWFwIiwiaW1wb3J0X3RzbGliIiwiX19yZXN0IiwicmF3SWQiLCJyZXF1ZXN0U3RzVG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJ0b2tlbkFwaUhvc3QiLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbiIsImV4cGlyZXNJbiIsImV4cGlyZXNfaW4iLCJyZWZyZXNoX3Rva2VuIiwicmV2b2tlVG9rZW4iLCJTdHNUb2tlbk1hbmFnZXIiLCJpc0V4cGlyZWQiLCJ1cGRhdGVGcm9tU2VydmVyUmVzcG9uc2UiLCJ1cGRhdGVUb2tlbnNBbmRFeHBpcmF0aW9uIiwidXBkYXRlRnJvbUlkVG9rZW4iLCJnZXRUb2tlbiIsInJlZnJlc2giLCJjbGVhclJlZnJlc2hUb2tlbiIsIm9sZFRva2VuIiwiZXhwaXJlc0luU2VjIiwiZnJvbUpTT04iLCJtYW5hZ2VyIiwiX2Fzc2lnbiIsIl9jbG9uZSIsIl9wZXJmb3JtUmVmcmVzaCIsImFzc2VydFN0cmluZ09yVW5kZWZpbmVkIiwiVXNlckltcGwiLCJvcHQiLCJwcm9hY3RpdmVSZWZyZXNoIiwicmVsb2FkVXNlckluZm8iLCJyZWxvYWRMaXN0ZW5lciIsInVzZXJJbmZvIiwibmV3VXNlciIsIl9vblJlbG9hZCIsImNhbGxiYWNrIiwiX3N0YXJ0UHJvYWN0aXZlUmVmcmVzaCIsIl9zdG9wUHJvYWN0aXZlUmVmcmVzaCIsIl91cGRhdGVUb2tlbnNJZk5lY2Vzc2FyeSIsInJlbG9hZDIiLCJ0b2tlbnNSZWZyZXNoZWQiLCJkZWxldGUiLCJfaXNGaXJlYmFzZVNlcnZlckFwcCIsImFwcCIsIl9yZWRpcmVjdEV2ZW50SWQiLCJfZnJvbUpTT04iLCJfYiIsIl9jIiwiX2QiLCJfZSIsIl9mIiwiX2ciLCJfaCIsInBsYWluT2JqZWN0VG9rZW5NYW5hZ2VyIiwiQXJyYXkiLCJpc0FycmF5IiwiX2Zyb21JZFRva2VuUmVzcG9uc2UiLCJpZFRva2VuUmVzcG9uc2UiLCJfZnJvbUdldEFjY291bnRJbmZvUmVzcG9uc2UiLCJpbnN0YW5jZUNhY2hlIiwiTWFwIiwiX2dldEluc3RhbmNlIiwiY2xzIiwiRnVuY3Rpb24iLCJzZXQiLCJJbk1lbW9yeVBlcnNpc3RlbmNlIiwidHlwZSIsInN0b3JhZ2UiLCJfaXNBdmFpbGFibGUiLCJfc2V0IiwidmFsdWUiLCJfZ2V0IiwiX3JlbW92ZSIsIl9hZGRMaXN0ZW5lciIsIl9rZXkiLCJfbGlzdGVuZXIiLCJfcmVtb3ZlTGlzdGVuZXIiLCJfcGVyc2lzdGVuY2VLZXlOYW1lIiwiUGVyc2lzdGVuY2VVc2VyTWFuYWdlciIsInBlcnNpc3RlbmNlIiwidXNlcktleSIsIm5hbWUyIiwiZnVsbFVzZXJLZXkiLCJmdWxsUGVyc2lzdGVuY2VLZXkiLCJib3VuZEV2ZW50SGFuZGxlciIsIl9vblN0b3JhZ2VFdmVudCIsImJpbmQiLCJzZXRDdXJyZW50VXNlciIsImdldEN1cnJlbnRVc2VyIiwiYmxvYiIsImNhdGNoIiwicmVtb3ZlQ3VycmVudFVzZXIiLCJzYXZlUGVyc2lzdGVuY2VGb3JSZWRpcmVjdCIsIm5ld1BlcnNpc3RlbmNlIiwicGVyc2lzdGVuY2VIaWVyYXJjaHkiLCJhdmFpbGFibGVQZXJzaXN0ZW5jZXMiLCJhbGwiLCJzZWxlY3RlZFBlcnNpc3RlbmNlIiwidXNlclRvTWlncmF0ZSIsIm1pZ3JhdGlvbkhpZXJhcmNoeSIsInAiLCJfc2hvdWxkQWxsb3dNaWdyYXRpb24iLCJfZ2V0QnJvd3Nlck5hbWUiLCJ1c2VyQWdlbnQiLCJ1YSIsIl9pc0lFTW9iaWxlIiwiX2lzRmlyZWZveCIsIl9pc0JsYWNrQmVycnkiLCJfaXNXZWJPUyIsIl9pc1NhZmFyaSIsIl9pc0Nocm9tZUlPUyIsIl9pc0FuZHJvaWQiLCJyZSIsIm1hdGNoZXMiLCJtYXRjaCIsImdldFVBIiwidGVzdCIsIl9pc0lPUyIsIl9pc0lPUzdPcjgiLCJfaXNJT1NTdGFuZGFsb25lIiwid2luZG93Iiwic3RhbmRhbG9uZSIsIl9pc0lFMTAiLCJpc0lFIiwiZG9jdW1lbnQiLCJkb2N1bWVudE1vZGUiLCJfaXNNb2JpbGVCcm93c2VyIiwiX2dldENsaWVudFZlcnNpb24iLCJjbGllbnRQbGF0Zm9ybSIsImZyYW1ld29ya3MiLCJyZXBvcnRlZFBsYXRmb3JtIiwicmVwb3J0ZWRGcmFtZXdvcmtzIiwiam9pbiIsIkF1dGhNaWRkbGV3YXJlUXVldWUiLCJxdWV1ZSIsInB1c2hDYWxsYmFjayIsIm9uQWJvcnQiLCJ3cmFwcGVkQ2FsbGJhY2siLCJyZXNvbHZlIiwicmVzdWx0IiwicHVzaCIsImluZGV4IiwicnVuTWlkZGxld2FyZSIsIm5leHRVc2VyIiwib25BYm9ydFN0YWNrIiwiYmVmb3JlU3RhdGVDYWxsYmFjayIsInJldmVyc2UiLCJvcmlnaW5hbE1lc3NhZ2UiLCJfZ2V0UGFzc3dvcmRQb2xpY3kiLCJNSU5JTVVNX01JTl9QQVNTV09SRF9MRU5HVEgiLCJQYXNzd29yZFBvbGljeUltcGwiLCJyZXNwb25zZU9wdGlvbnMiLCJjdXN0b21TdHJlbmd0aE9wdGlvbnMiLCJtaW5QYXNzd29yZExlbmd0aCIsIm1heFBhc3N3b3JkTGVuZ3RoIiwiY29udGFpbnNMb3dlcmNhc2VDaGFyYWN0ZXIiLCJjb250YWluc0xvd2VyY2FzZUxldHRlciIsImNvbnRhaW5zVXBwZXJjYXNlQ2hhcmFjdGVyIiwiY29udGFpbnNVcHBlcmNhc2VMZXR0ZXIiLCJjb250YWluc051bWVyaWNDaGFyYWN0ZXIiLCJjb250YWluc05vbkFscGhhbnVtZXJpY0NoYXJhY3RlciIsImFsbG93ZWROb25BbHBoYW51bWVyaWNDaGFyYWN0ZXJzIiwiZm9yY2VVcGdyYWRlT25TaWduaW4iLCJzY2hlbWFWZXJzaW9uIiwicGFzc3dvcmQiLCJzdGF0dXMiLCJpc1ZhbGlkIiwicGFzc3dvcmRQb2xpY3kiLCJ2YWxpZGF0ZVBhc3N3b3JkTGVuZ3RoT3B0aW9ucyIsInZhbGlkYXRlUGFzc3dvcmRDaGFyYWN0ZXJPcHRpb25zIiwibWVldHNNaW5QYXNzd29yZExlbmd0aCIsIm1lZXRzTWF4UGFzc3dvcmRMZW5ndGgiLCJ1cGRhdGVQYXNzd29yZENoYXJhY3Rlck9wdGlvbnNTdGF0dXNlcyIsInBhc3N3b3JkQ2hhciIsImkiLCJjaGFyQXQiLCJBdXRoSW1wbCIsImhlYXJ0YmVhdFNlcnZpY2VQcm92aWRlciIsImFwcENoZWNrU2VydmljZVByb3ZpZGVyIiwiZW11bGF0b3JDb25maWciLCJvcGVyYXRpb25zIiwiYXV0aFN0YXRlU3Vic2NyaXB0aW9uIiwiU3Vic2NyaXB0aW9uIiwiaWRUb2tlblN1YnNjcmlwdGlvbiIsImJlZm9yZVN0YXRlUXVldWUiLCJyZWRpcmVjdFVzZXIiLCJpc1Byb2FjdGl2ZVJlZnJlc2hFbmFibGVkIiwiRVhQRUNURURfUEFTU1dPUkRfUE9MSUNZX1NDSEVNQV9WRVJTSU9OIiwiX2lzSW5pdGlhbGl6ZWQiLCJfZGVsZXRlZCIsIl9pbml0aWFsaXphdGlvblByb21pc2UiLCJfcG9wdXBSZWRpcmVjdFJlc29sdmVyIiwiX2FnZW50UmVjYXB0Y2hhQ29uZmlnIiwiX3RlbmFudFJlY2FwdGNoYUNvbmZpZ3MiLCJfcHJvamVjdFBhc3N3b3JkUG9saWN5IiwiX3RlbmFudFBhc3N3b3JkUG9saWNpZXMiLCJfcmVzb2x2ZVBlcnNpc3RlbmNlTWFuYWdlckF2YWlsYWJsZSIsImxhc3ROb3RpZmllZFVpZCIsInNldHRpbmdzIiwiYXBwVmVyaWZpY2F0aW9uRGlzYWJsZWRGb3JUZXN0aW5nIiwiY2xpZW50VmVyc2lvbiIsInNka0NsaWVudFZlcnNpb24iLCJfaW5pdGlhbGl6ZVdpdGhQZXJzaXN0ZW5jZSIsInBvcHVwUmVkaXJlY3RSZXNvbHZlciIsInBlcnNpc3RlbmNlTWFuYWdlciIsImNhbGwiLCJfc2hvdWxkSW5pdFByb2FjdGl2ZWx5IiwiX2luaXRpYWxpemUiLCJpbml0aWFsaXplQ3VycmVudFVzZXIiLCJhc3NlcnRlZFBlcnNpc3RlbmNlIiwiX2N1cnJlbnRVc2VyIiwiX3VwZGF0ZUN1cnJlbnRVc2VyIiwiaW5pdGlhbGl6ZUN1cnJlbnRVc2VyRnJvbUlkVG9rZW4iLCJkaXJlY3RseVNldEN1cnJlbnRVc2VyIiwiZXJyIiwiY29uc29sZSIsImF1dGhJZFRva2VuIiwidGhlbiIsInByZXZpb3VzbHlTdG9yZWRVc2VyIiwiZnV0dXJlQ3VycmVudFVzZXIiLCJuZWVkc1RvY2hlY2tNaWRkbGV3YXJlIiwiYXV0aERvbWFpbiIsImdldE9ySW5pdFJlZGlyZWN0UGVyc2lzdGVuY2VNYW5hZ2VyIiwicmVkaXJlY3RVc2VyRXZlbnRJZCIsInN0b3JlZFVzZXJFdmVudElkIiwidHJ5UmVkaXJlY3RTaWduSW4iLCJfb3ZlcnJpZGVSZWRpcmVjdFJlc3VsdCIsInJlbG9hZEFuZFNldEN1cnJlbnRVc2VyT3JDbGVhciIsInJlZGlyZWN0UmVzb2x2ZXIiLCJfY29tcGxldGVSZWRpcmVjdEZuIiwiX3NldFJlZGlyZWN0VXNlciIsIl9kZWxldGUiLCJ1c2VyRXh0ZXJuIiwic2tpcEJlZm9yZVN0YXRlQ2FsbGJhY2tzIiwibm90aWZ5QXV0aExpc3RlbmVycyIsInJlZGlyZWN0UGVyc2lzdGVuY2VNYW5hZ2VyIiwiX2dldFJlY2FwdGNoYUNvbmZpZyIsIl9nZXRQYXNzd29yZFBvbGljeUludGVybmFsIiwiX3VwZGF0ZVBhc3N3b3JkUG9saWN5IiwiX3VwZGF0ZUVycm9yTWFwIiwibmV4dE9yT2JzZXJ2ZXIiLCJjb21wbGV0ZWQiLCJyZWdpc3RlclN0YXRlTGlzdGVuZXIiLCJhdXRoU3RhdGVSZWFkeSIsInVuc3Vic2NyaWJlIiwidG9rZW5UeXBlIiwicmVkaXJlY3RNYW5hZ2VyIiwicmVzb2x2ZXIiLCJfcmVkaXJlY3RQZXJzaXN0ZW5jZSIsIl9yZWRpcmVjdFVzZXJGb3JJZCIsImlkIiwibmV4dCIsImN1cnJlbnRVaWQiLCJzdWJzY3JpcHRpb24iLCJjYiIsImlzVW5zdWJzY3JpYmVkIiwiYWRkT2JzZXJ2ZXIiLCJhY3Rpb24iLCJfbG9nRnJhbWV3b3JrIiwiZnJhbWV3b3JrIiwic29ydCIsIl9nZXRGcmFtZXdvcmtzIiwib3B0aW9ucyIsImFwcElkIiwiaGVhcnRiZWF0c0hlYWRlciIsImdldEltbWVkaWF0ZSIsIm9wdGlvbmFsIiwiZ2V0SGVhcnRiZWF0c0hlYWRlciIsImFwcENoZWNrVG9rZW4iLCJfZ2V0QXBwQ2hlY2tUb2tlbiIsImFwcENoZWNrVG9rZW5SZXN1bHQiLCJfY2FzdEF1dGgiLCJvYnNlcnZlciIsImNyZWF0ZVN1YnNjcmliZSIsImV4dGVybmFsSlNQcm92aWRlciIsImxvYWRKUyIsInJlY2FwdGNoYVYyU2NyaXB0IiwicmVjYXB0Y2hhRW50ZXJwcmlzZVNjcmlwdCIsImdhcGlTY3JpcHQiLCJfc2V0RXh0ZXJuYWxKU1Byb3ZpZGVyIiwiX2xvYWRKUyIsIl9yZWNhcHRjaGFWMlNjcmlwdFVybCIsIl9yZWNhcHRjaGFFbnRlcnByaXNlU2NyaXB0VXJsIiwiX2dhcGlTY3JpcHRVcmwiLCJfZ2VuZXJhdGVDYWxsYmFja05hbWUiLCJwcmVmaXgiLCJmbG9vciIsInJhbmRvbSIsIl9TT0xWRV9USU1FX01TIiwiX0VYUElSQVRJT05fVElNRV9NUyIsIl9XSURHRVRfSURfU1RBUlQiLCJNb2NrUmVDYXB0Y2hhIiwiY291bnRlciIsIl93aWRnZXRzIiwicmVuZGVyIiwiY29udGFpbmVyIiwicGFyYW1ldGVycyIsIk1vY2tXaWRnZXQiLCJyZXNldCIsIm9wdFdpZGdldElkIiwiZXhlY3V0ZSIsIk1vY2tHcmVDQVBUQ0hBVG9wTGV2ZWwiLCJNb2NrR3JlQ0FQVENIQSIsInJlYWR5IiwiX3NpdGVLZXkiLCJfb3B0aW9ucyIsIl9jb250YWluZXIiLCJfcGFyYW1ldGVycyIsImNvbnRhaW5lck9ySWQiLCJkZWxldGVkIiwicmVzcG9uc2VUb2tlbiIsImNsaWNrSGFuZGxlciIsImdldEVsZW1lbnRCeUlkIiwiaXNWaXNpYmxlIiwic2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGVja0lmRGVsZXRlZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZW5lcmF0ZVJhbmRvbUFscGhhTnVtZXJpY1N0cmluZyIsImV4cGlyZWRDYWxsYmFjayIsImxlbiIsImNoYXJzIiwiYWxsb3dlZENoYXJzIiwiUkVDQVBUQ0hBX0VOVEVSUFJJU0VfVkVSSUZJRVJfVFlQRSIsIkZBS0VfVE9LRU4iLCJSZWNhcHRjaGFFbnRlcnByaXNlVmVyaWZpZXIiLCJhdXRoRXh0ZXJuIiwidmVyaWZ5IiwicmV0cmlldmVTaXRlS2V5IiwiY2xpZW50VHlwZSIsInZlcnNpb24iLCJyZXRyaWV2ZVJlY2FwdGNoYVRva2VuIiwibW9ja1JlY2FwdGNoYSIsImluamVjdFJlY2FwdGNoYUZpZWxkcyIsImlzQ2FwdGNoYVJlc3AiLCJpc0Zha2VUb2tlbiIsInZlcmlmaWVyIiwiY2FwdGNoYVJlc3BvbnNlIiwibmV3UmVxdWVzdCIsInBob25lRW5yb2xsbWVudEluZm8iLCJyZWNhcHRjaGFUb2tlbiIsInBob25lU2lnbkluSW5mbyIsImhhbmRsZVJlY2FwdGNoYUZsb3ciLCJhdXRoSW5zdGFuY2UiLCJhY3Rpb25OYW1lIiwiYWN0aW9uTWV0aG9kIiwicmVjYXB0Y2hhQXV0aFByb3ZpZGVyIiwicmVxdWVzdFdpdGhSZWNhcHRjaGEiLCJsb2ciLCJfYTIiLCJyZXF1ZXN0V2l0aFJlY2FwdGNoYUZpZWxkcyIsIl9pbml0aWFsaXplUmVjYXB0Y2hhQ29uZmlnIiwiZGVwcyIsIl9nZXRQcm92aWRlciIsImlzSW5pdGlhbGl6ZWQiLCJhdXRoMiIsImluaXRpYWxPcHRpb25zIiwiZ2V0T3B0aW9ucyIsImRlZXBFcXVhbCIsIl9pbml0aWFsaXplQXV0aEluc3RhbmNlIiwiaGllcmFyY2h5IiwiZGlzYWJsZVdhcm5pbmdzIiwiZXh0cmFjdFByb3RvY29sIiwicG9ydCIsImV4dHJhY3RIb3N0QW5kUG9ydCIsInBvcnRTdHIiLCJmcmVlemUiLCJlbWl0RW11bGF0b3JXYXJuaW5nIiwicHJvdG9jb2xFbmQiLCJpbmRleE9mIiwic3Vic3RyIiwiYXV0aG9yaXR5IiwiZXhlYyIsImhvc3RBbmRQb3J0IiwicG9wIiwiYnJhY2tldGVkSVB2NiIsInBhcnNlUG9ydCIsImF0dGFjaEJhbm5lciIsImVsIiwiY3JlYXRlRWxlbWVudCIsInN0eSIsInN0eWxlIiwiaW5uZXJUZXh0IiwicG9zaXRpb24iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsImNvbG9yIiwiYm90dG9tIiwibGVmdCIsIm1hcmdpbiIsInpJbmRleCIsInRleHRBbGlnbiIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiaW5mbyIsInJlYWR5U3RhdGUiLCJzaWduSW5NZXRob2QiLCJfZ2V0SWRUb2tlblJlc3BvbnNlIiwiX2F1dGgiLCJfbGlua1RvSWRUb2tlbiIsIl9pZFRva2VuIiwiX2dldFJlYXV0aGVudGljYXRpb25SZXNvbHZlciIsInJlc2V0UGFzc3dvcmQiLCJ1cGRhdGVFbWFpbFBhc3N3b3JkIiwibGlua0VtYWlsUGFzc3dvcmQiLCJhcHBseUFjdGlvbkNvZGUkMSIsInNpZ25JbldpdGhQYXNzd29yZCIsInNlbmRPb2JDb2RlIiwic2VuZEVtYWlsVmVyaWZpY2F0aW9uJDEiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsJDEiLCJzZW5kU2lnbkluTGlua1RvRW1haWwkMSIsInZlcmlmeUFuZENoYW5nZUVtYWlsIiwic2lnbkluV2l0aEVtYWlsTGluayQxIiwic2lnbkluV2l0aEVtYWlsTGlua0ZvckxpbmtpbmciLCJfZW1haWwiLCJfcGFzc3dvcmQiLCJfdGVuYW50SWQiLCJfZnJvbUVtYWlsQW5kUGFzc3dvcmQiLCJfZnJvbUVtYWlsQW5kQ29kZSIsIm9vYkNvZGUiLCJvYmoiLCJyZXR1cm5TZWN1cmVUb2tlbiIsInNpZ25JbldpdGhJZHAiLCJJRFBfUkVRVUVTVF9VUkkkMSIsInBlbmRpbmdUb2tlbiIsIl9mcm9tUGFyYW1zIiwiY3JlZCIsIm5vbmNlIiwib2F1dGhUb2tlbiIsIm9hdXRoVG9rZW5TZWNyZXQiLCJzZWNyZXQiLCJidWlsZFJlcXVlc3QiLCJhdXRvQ3JlYXRlIiwicmVxdWVzdFVyaSIsInBvc3RCb2R5Iiwic2VuZFBob25lVmVyaWZpY2F0aW9uQ29kZSIsInNpZ25JbldpdGhQaG9uZU51bWJlciQxIiwibGlua1dpdGhQaG9uZU51bWJlciQxIiwidGVtcG9yYXJ5UHJvb2YiLCJWRVJJRllfUEhPTkVfTlVNQkVSX0ZPUl9FWElTVElOR19FUlJPUl9NQVBfIiwidmVyaWZ5UGhvbmVOdW1iZXJGb3JFeGlzdGluZyIsImFwaVJlcXVlc3QiLCJvcGVyYXRpb24iLCJfZnJvbVZlcmlmaWNhdGlvbiIsInZlcmlmaWNhdGlvbklkIiwidmVyaWZpY2F0aW9uQ29kZSIsIl9mcm9tVG9rZW5SZXNwb25zZSIsIl9tYWtlVmVyaWZpY2F0aW9uUmVxdWVzdCIsInNlc3Npb25JbmZvIiwicGFyc2VNb2RlIiwibW9kZSIsInBhcnNlRGVlcExpbmsiLCJsaW5rIiwicXVlcnlzdHJpbmdEZWNvZGUiLCJleHRyYWN0UXVlcnlzdHJpbmciLCJkb3VibGVEZWVwTGluayIsImlPU0RlZXBMaW5rIiwiaU9TRG91YmxlRGVlcExpbmsiLCJhY3Rpb25MaW5rIiwic2VhcmNoUGFyYW1zIiwiY29udGludWVVcmwiLCJwYXJzZUxpbmsiLCJQUk9WSURFUl9JRCIsImNyZWRlbnRpYWwiLCJjcmVkZW50aWFsV2l0aExpbmsiLCJlbWFpbExpbmsiLCJhY3Rpb25Db2RlVXJsIiwiRU1BSUxfUEFTU1dPUkRfU0lHTl9JTl9NRVRIT0QiLCJFTUFJTF9MSU5LX1NJR05fSU5fTUVUSE9EIiwiRmVkZXJhdGVkQXV0aFByb3ZpZGVyIiwiZGVmYXVsdExhbmd1YWdlQ29kZSIsImN1c3RvbVBhcmFtZXRlcnMiLCJzZXREZWZhdWx0TGFuZ3VhZ2UiLCJzZXRDdXN0b21QYXJhbWV0ZXJzIiwiY3VzdG9tT0F1dGhQYXJhbWV0ZXJzIiwiZ2V0Q3VzdG9tUGFyYW1ldGVycyIsIkJhc2VPQXV0aFByb3ZpZGVyIiwic2NvcGVzIiwiYWRkU2NvcGUiLCJzY29wZSIsImdldFNjb3BlcyIsImNyZWRlbnRpYWxGcm9tSlNPTiIsIl9jcmVkZW50aWFsIiwicmF3Tm9uY2UiLCJjcmVkZW50aWFsRnJvbVJlc3VsdCIsInVzZXJDcmVkZW50aWFsIiwib2F1dGhDcmVkZW50aWFsRnJvbVRhZ2dlZE9iamVjdCIsImNyZWRlbnRpYWxGcm9tRXJyb3IiLCJ0b2tlblJlc3BvbnNlIiwib2F1dGhJZFRva2VuIiwib2F1dGhBY2Nlc3NUb2tlbiIsIkZBQ0VCT09LX1NJR05fSU5fTUVUSE9EIiwiY3JlZGVudGlhbEZyb21UYWdnZWRPYmplY3QiLCJHT09HTEVfU0lHTl9JTl9NRVRIT0QiLCJHSVRIVUJfU0lHTl9JTl9NRVRIT0QiLCJJRFBfUkVRVUVTVF9VUkkiLCJTQU1MQXV0aENyZWRlbnRpYWwiLCJfY3JlYXRlIiwiU0FNTF9QUk9WSURFUl9QUkVGSVgiLCJzYW1sQ3JlZGVudGlhbEZyb21UYWdnZWRPYmplY3QiLCJUV0lUVEVSX1NJR05fSU5fTUVUSE9EIiwic2lnblVwIiwiVXNlckNyZWRlbnRpYWxJbXBsIiwib3BlcmF0aW9uVHlwZSIsInByb3ZpZGVySWRGb3JSZXNwb25zZSIsInVzZXJDcmVkIiwiX2Zvck9wZXJhdGlvbiIsIk11bHRpRmFjdG9yRXJyb3IiLCJzZXRQcm90b3R5cGVPZiIsInByb3RvdHlwZSIsIl9mcm9tRXJyb3JBbmRPcGVyYXRpb24iLCJfcHJvY2Vzc0NyZWRlbnRpYWxTYXZpbmdNZmFDb250ZXh0SWZOZWNlc3NhcnkiLCJpZFRva2VuUHJvdmlkZXIiLCJwcm92aWRlckRhdGFBc05hbWVzIiwiU2V0IiwicGlkIiwiX2Fzc2VydExpbmtlZFN0YXR1cyIsImRlbGV0ZVByb3ZpZGVyIiwicHJvdmlkZXJzTGVmdCIsInBkIiwiaGFzIiwiX2xpbmskMSIsImV4cGVjdGVkIiwicHJvdmlkZXJJZHMiLCJfcmVhdXRoZW50aWNhdGUiLCJwYXJzZWQiLCJzdWIiLCJfc2lnbkluV2l0aENyZWRlbnRpYWwiLCJzaWduSW5XaXRoQ3VzdG9tVG9rZW4kMSIsImN1c3RvbVRva2VuIiwiTXVsdGlGYWN0b3JJbmZvSW1wbCIsImZhY3RvcklkIiwibWZhRW5yb2xsbWVudElkIiwiZW5yb2xsbWVudFRpbWUiLCJlbnJvbGxlZEF0IiwiX2Zyb21TZXJ2ZXJSZXNwb25zZSIsImVucm9sbG1lbnQiLCJQaG9uZU11bHRpRmFjdG9ySW5mb0ltcGwiLCJUb3RwTXVsdGlGYWN0b3JJbmZvSW1wbCIsInBob25lSW5mbyIsIl9zZXRBY3Rpb25Db2RlU2V0dGluZ3NPblJlcXVlc3QiLCJhY3Rpb25Db2RlU2V0dGluZ3MiLCJkeW5hbWljTGlua0RvbWFpbiIsImxpbmtEb21haW4iLCJjYW5IYW5kbGVDb2RlSW5BcHAiLCJoYW5kbGVDb2RlSW5BcHAiLCJpT1MiLCJidW5kbGVJZCIsImlPU0J1bmRsZUlkIiwiYW5kcm9pZCIsInBhY2thZ2VOYW1lIiwiYW5kcm9pZEluc3RhbGxBcHAiLCJpbnN0YWxsQXBwIiwiYW5kcm9pZE1pbmltdW1WZXJzaW9uQ29kZSIsIm1pbmltdW1WZXJzaW9uIiwiYW5kcm9pZFBhY2thZ2VOYW1lIiwicmVjYWNoZVBhc3N3b3JkUG9saWN5IiwicmVxdWVzdFR5cGUiLCJuZXdQYXNzd29yZCIsImF1dGhNb2R1bGFyIiwibmV3RW1haWwiLCJtZmFJbmZvIiwibXVsdGlGYWN0b3JJbmZvIiwiZGF0YSIsInByZXZpb3VzRW1haWwiLCJzaWduVXBSZXNwb25zZSIsInNldEFjdGlvbkNvZGVTZXR0aW5ncyIsInJlcXVlc3QyIiwiYWN0aW9uQ29kZVNldHRpbmdzMiIsImNyZWF0ZUF1dGhVcmkiLCJjb250aW51ZVVyaSIsImlkZW50aWZpZXIiLCJzaWduaW5NZXRob2RzIiwidXBkYXRlUHJvZmlsZSQxIiwicHJvZmlsZVJlcXVlc3QiLCJwYXNzd29yZFByb3ZpZGVyIiwiZmluZCIsInVwZGF0ZUVtYWlsT3JQYXNzd29yZCIsInByb2ZpbGUiLCJyYXdVc2VySW5mbyIsImlzTmV3VXNlciIsImtpbmQiLCJmaWx0ZXJlZFByb3ZpZGVySWQiLCJHZW5lcmljQWRkaXRpb25hbFVzZXJJbmZvIiwiRmFjZWJvb2tBZGRpdGlvbmFsVXNlckluZm8iLCJHaXRodWJBZGRpdGlvbmFsVXNlckluZm8iLCJHb29nbGVBZGRpdGlvbmFsVXNlckluZm8iLCJUd2l0dGVyQWRkaXRpb25hbFVzZXJJbmZvIiwic2NyZWVuTmFtZSIsIkZlZGVyYXRlZEFkZGl0aW9uYWxVc2VySW5mb1dpdGhVc2VybmFtZSIsInVzZXJuYW1lIiwibG9naW4iLCJNdWx0aUZhY3RvclNlc3Npb25JbXBsIiwiX2Zyb21JZHRva2VuIiwiX2Zyb21NZmFQZW5kaW5nQ3JlZGVudGlhbCIsIm1mYVBlbmRpbmdDcmVkZW50aWFsIiwibXVsdGlGYWN0b3JTZXNzaW9uIiwicGVuZGluZ0NyZWRlbnRpYWwiLCJNdWx0aUZhY3RvclJlc29sdmVySW1wbCIsInNlc3Npb24iLCJoaW50cyIsInNpZ25JblJlc29sdmVyIiwiX2Zyb21FcnJvciIsIm1mYVJlc3BvbnNlIiwiX3Byb2Nlc3MiLCJyZXNvbHZlU2lnbkluIiwiYXNzZXJ0aW9uRXh0ZXJuIiwiZXJyb3JJbnRlcm5hbCIsInN0YXJ0RW5yb2xsUGhvbmVNZmEiLCJmaW5hbGl6ZUVucm9sbFBob25lTWZhIiwic3RhcnRFbnJvbGxUb3RwTWZhIiwiZmluYWxpemVFbnJvbGxUb3RwTWZhIiwid2l0aGRyYXdNZmEiLCJNdWx0aUZhY3RvclVzZXJJbXBsIiwiZW5yb2xsZWRGYWN0b3JzIiwiX2Zyb21Vc2VyIiwiZ2V0U2Vzc2lvbiIsImVucm9sbCIsImZpbmFsaXplTWZhUmVzcG9uc2UiLCJ1bmVucm9sbCIsImluZm9PclVpZCIsIm11bHRpRmFjdG9yVXNlckNhY2hlIiwiV2Vha01hcCIsInVzZXJNb2R1bGFyIiwiU1RPUkFHRV9BVkFJTEFCTEVfS0VZIiwiQnJvd3NlclBlcnNpc3RlbmNlQ2xhc3MiLCJzdG9yYWdlUmV0cmlldmVyIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJnZXRJdGVtIiwiX1BPTExJTkdfSU5URVJWQUxfTVMkMSIsIklFMTBfTE9DQUxfU1RPUkFHRV9TWU5DX0RFTEFZIiwiQnJvd3NlckxvY2FsUGVyc2lzdGVuY2UiLCJsb2NhbFN0b3JhZ2UiLCJldmVudCIsInBvbGwiLCJvblN0b3JhZ2VFdmVudCIsImxpc3RlbmVycyIsImxvY2FsQ2FjaGUiLCJwb2xsVGltZXIiLCJmYWxsYmFja1RvUG9sbGluZyIsImZvckFsbENoYW5nZWRLZXlzIiwia2V5cyIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJrZXkyIiwiX29sZFZhbHVlIiwibm90aWZ5TGlzdGVuZXJzIiwiZGV0YWNoTGlzdGVuZXIiLCJzdG9wUG9sbGluZyIsInRyaWdnZXJMaXN0ZW5lcnMiLCJzdG9yZWRWYWx1ZTIiLCJzdG9yZWRWYWx1ZSIsImxpc3RlbmVyIiwiZnJvbSIsInN0YXJ0UG9sbGluZyIsInNldEludGVydmFsIiwiU3RvcmFnZUV2ZW50IiwiY2xlYXJJbnRlcnZhbCIsImF0dGFjaExpc3RlbmVyIiwiUE9MTElOR19JTlRFUlZBTF9NUyIsImdldERvY3VtZW50Q29va2llIiwiZXNjYXBlZE5hbWUiLCJtYXRjaGVyIiwiUmVnRXhwIiwiY29va2llIiwiZ2V0Q29va2llTmFtZSIsImlzRGV2TW9kZSIsIkNvb2tpZVBlcnNpc3RlbmNlIiwibGlzdGVuZXJVbnN1YnNjcmliZXMiLCJvcmlnaW5hbFVybCIsIlVSTCIsIm9yaWdpbiIsImlzU2VjdXJlQ29udGV4dCIsImNvb2tpZUVuYWJsZWQiLCJfdmFsdWUiLCJjb29raWVTdG9yZSIsImV4aXN0aW5nVmFsdWUiLCJjaGFuZ2VkQ29va2llIiwiY2hhbmdlZCIsImNoYW5nZSIsImRlbGV0ZWRDb29raWUiLCJ1bnN1YnNjcmliZTIiLCJsYXN0VmFsdWUiLCJjdXJyZW50VmFsdWUiLCJCcm93c2VyU2Vzc2lvblBlcnNpc3RlbmNlIiwic2Vzc2lvblN0b3JhZ2UiLCJfYWxsU2V0dGxlZCIsInByb21pc2VzIiwiZnVsZmlsbGVkIiwicmVhc29uIiwiUmVjZWl2ZXIiLCJldmVudFRhcmdldCIsImhhbmRsZXJzTWFwIiwiaGFuZGxlRXZlbnQiLCJleGlzdGluZ0luc3RhbmNlIiwicmVjZWl2ZXJzIiwicmVjZWl2ZXIiLCJpc0xpc3RlbmluZ3RvIiwibmV3SW5zdGFuY2UiLCJtZXNzYWdlRXZlbnQiLCJldmVudElkIiwiZXZlbnRUeXBlIiwiaGFuZGxlcnMiLCJwb3J0cyIsInBvc3RNZXNzYWdlIiwiaGFuZGxlciIsIl9zdWJzY3JpYmUiLCJldmVudEhhbmRsZXIiLCJfdW5zdWJzY3JpYmUiLCJfZ2VuZXJhdGVFdmVudElkIiwiZGlnaXRzIiwiU2VuZGVyIiwidGFyZ2V0IiwicmVtb3ZlTWVzc2FnZUhhbmRsZXIiLCJtZXNzYWdlQ2hhbm5lbCIsInBvcnQxIiwib25NZXNzYWdlIiwiY2xvc2UiLCJfc2VuZCIsInRpbWVvdXQiLCJNZXNzYWdlQ2hhbm5lbCIsImNvbXBsZXRpb25UaW1lciIsInN0YXJ0IiwiYWNrVGltZXIiLCJwb3J0MiIsImZpbmFsbHkiLCJfd2luZG93IiwiX3NldFdpbmRvd0xvY2F0aW9uIiwiX2lzV29ya2VyIiwiX2dldEFjdGl2ZVNlcnZpY2VXb3JrZXIiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0cmF0aW9uIiwiYWN0aXZlIiwiX2dldFNlcnZpY2VXb3JrZXJDb250cm9sbGVyIiwiY29udHJvbGxlciIsIl9nZXRXb3JrZXJHbG9iYWxTY29wZSIsIkRCX05BTUUiLCJEQl9WRVJTSU9OIiwiREJfT0JKRUNUU1RPUkVfTkFNRSIsIkRCX0RBVEFfS0VZUEFUSCIsIkRCUHJvbWlzZSIsInRvUHJvbWlzZSIsImdldE9iamVjdFN0b3JlIiwiZGIiLCJpc1JlYWRXcml0ZSIsInRyYW5zYWN0aW9uIiwib2JqZWN0U3RvcmUiLCJfZGVsZXRlRGF0YWJhc2UiLCJpbmRleGVkREIiLCJkZWxldGVEYXRhYmFzZSIsIl9vcGVuRGF0YWJhc2UiLCJvcGVuIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJrZXlQYXRoIiwib2JqZWN0U3RvcmVOYW1lcyIsImNvbnRhaW5zIiwiX3B1dE9iamVjdCIsInB1dCIsImdldE9iamVjdCIsIl9kZWxldGVPYmplY3QiLCJfUE9MTElOR19JTlRFUlZBTF9NUyIsIl9UUkFOU0FDVElPTl9SRVRSWV9DT1VOVCIsIkluZGV4ZWREQkxvY2FsUGVyc2lzdGVuY2UiLCJwZW5kaW5nV3JpdGVzIiwic2VuZGVyIiwic2VydmljZVdvcmtlclJlY2VpdmVyQXZhaWxhYmxlIiwiYWN0aXZlU2VydmljZVdvcmtlciIsIl93b3JrZXJJbml0aWFsaXphdGlvblByb21pc2UiLCJpbml0aWFsaXplU2VydmljZVdvcmtlck1lc3NhZ2luZyIsIl9vcGVuRGIiLCJfd2l0aFJldHJpZXMiLCJvcCIsIm51bUF0dGVtcHRzIiwiaW5pdGlhbGl6ZVJlY2VpdmVyIiwiaW5pdGlhbGl6ZVNlbmRlciIsIl9vcmlnaW4iLCJfcG9sbCIsImtleVByb2Nlc3NlZCIsIl9kYXRhIiwicmVzdWx0cyIsIm5vdGlmeVNlcnZpY2VXb3JrZXIiLCJfd2l0aFBlbmRpbmdXcml0ZSIsIndyaXRlIiwiZ2V0QWxsUmVxdWVzdCIsImdldEFsbCIsImtleXNJblJlc3VsdCIsImZiYXNlX2tleSIsImxvY2FsS2V5Iiwic3RhcnRTaWduSW5QaG9uZU1mYSIsImZpbmFsaXplU2lnbkluUGhvbmVNZmEiLCJmaW5hbGl6ZVNpZ25JblRvdHBNZmEiLCJfSlNMT0FEX0NBTExCQUNLIiwiTkVUV09SS19USU1FT1VUX0RFTEFZIiwiUmVDYXB0Y2hhTG9hZGVySW1wbCIsImhvc3RMYW5ndWFnZSIsImxpYnJhcnlTZXBhcmF0ZWx5TG9hZGVkIiwibG9hZCIsImhsIiwiaXNIb3N0TGFuZ3VhZ2VWYWxpZCIsInNob3VsZFJlc29sdmVJbW1lZGlhdGVseSIsInJlY2FwdGNoYSIsIndpZGdldElkIiwib25sb2FkIiwiY2xlYXJlZE9uZUluc3RhbmNlIiwiTW9ja1JlQ2FwdGNoYUxvYWRlckltcGwiLCJSRUNBUFRDSEFfVkVSSUZJRVJfVFlQRSIsIkRFRkFVTFRfUEFSQU1TIiwidGhlbWUiLCJkZXN0cm95ZWQiLCJ0b2tlbkNoYW5nZUxpc3RlbmVycyIsInJlbmRlclByb21pc2UiLCJpc0ludmlzaWJsZSIsIm1ha2VUb2tlbkNhbGxiYWNrIiwiX3JlY2FwdGNoYUxvYWRlciIsInZhbGlkYXRlU3RhcnRpbmdTdGF0ZSIsImFzc2VydE5vdERlc3Ryb3llZCIsImdldEFzc2VydGVkUmVjYXB0Y2hhIiwidG9rZW5DaGFuZ2UiLCJtYWtlUmVuZGVyUHJvbWlzZSIsIl9yZXNldCIsImNsZWFyIiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJub2RlIiwicmVtb3ZlQ2hpbGQiLCJzaXRla2V5IiwiaGFzQ2hpbGROb2RlcyIsImV4aXN0aW5nIiwiZ2xvYmFsRnVuYyIsImluaXQiLCJndWFyYW50ZWVkRW1wdHkiLCJkb21SZWFkeSIsIkNvbmZpcm1hdGlvblJlc3VsdEltcGwiLCJvbkNvbmZpcm1hdGlvbiIsImNvbmZpcm0iLCJhdXRoQ3JlZGVudGlhbCIsImFwcFZlcmlmaWVyIiwiX3ZlcmlmeVBob25lTnVtYmVyIiwicGhvbmVJbmZvT3B0aW9ucyIsInN0YXJ0UGhvbmVNZmFFbnJvbGxtZW50UmVxdWVzdCIsInN0YXJ0RW5yb2xsUGhvbmVNZmFBY3Rpb25DYWxsYmFjayIsInJlcXVlc3RXaXRoUmVjYXB0Y2hhVjIiLCJpbmplY3RSZWNhcHRjaGFWMlRva2VuIiwic3RhcnRQaG9uZU1mYUVucm9sbG1lbnRSZXNwb25zZSIsInBob25lU2Vzc2lvbkluZm8iLCJtdWx0aUZhY3RvckhpbnQiLCJtdWx0aUZhY3RvclVpZCIsInN0YXJ0UGhvbmVNZmFTaWduSW5SZXF1ZXN0Iiwic3RhcnRTaWduSW5QaG9uZU1mYUFjdGlvbkNhbGxiYWNrIiwic3RhcnRQaG9uZU1mYVNpZ25JblJlc3BvbnNlIiwicGhvbmVSZXNwb25zZUluZm8iLCJzZW5kUGhvbmVWZXJpZmljYXRpb25Db2RlUmVxdWVzdCIsInNlbmRQaG9uZVZlcmlmaWNhdGlvbkNvZGVBY3Rpb25DYWxsYmFjayIsInNlbmRQaG9uZVZlcmlmaWNhdGlvbkNvZGVSZXNwb25zZSIsInJlY2FwdGNoYVYyVmVyaWZpZXIiLCJyZWNhcHRjaGFWMlRva2VuIiwicmVjYXB0Y2hhVmVyc2lvbiIsInZlcmlmeVBob25lTnVtYmVyIiwicGhvbmVPcHRpb25zIiwiYXBwbGljYXRpb25WZXJpZmllciIsIlBIT05FX1NJR05fSU5fTUVUSE9EIiwiX3dpdGhEZWZhdWx0UmVzb2x2ZXIiLCJyZXNvbHZlck92ZXJyaWRlIiwiSWRwQ3JlZGVudGlhbCIsIl9idWlsZElkcFJlcXVlc3QiLCJzZXNzaW9uSWQiLCJyZXR1cm5JZHBDcmVkZW50aWFsIiwiX3NpZ25JbiIsIl9yZWF1dGgiLCJfbGluayIsIkFic3RyYWN0UG9wdXBSZWRpcmVjdE9wZXJhdGlvbiIsInBlbmRpbmdQcm9taXNlIiwiZXZlbnRNYW5hZ2VyIiwib25FeGVjdXRpb24iLCJyZWdpc3RlckNvbnN1bWVyIiwib25BdXRoRXZlbnQiLCJ1cmxSZXNwb25zZSIsImdldElkcFRhc2siLCJvbkVycm9yIiwidW5yZWdpc3RlckFuZENsZWFuVXAiLCJ1bnJlZ2lzdGVyQ29uc3VtZXIiLCJjbGVhblVwIiwiX1BPTExfV0lORE9XX0NMT1NFX1RJTUVPVVQiLCJyZXNvbHZlckludGVybmFsIiwiUG9wdXBPcGVyYXRpb24iLCJleGVjdXRlTm90TnVsbCIsImF1dGhXaW5kb3ciLCJwb2xsSWQiLCJjdXJyZW50UG9wdXBBY3Rpb24iLCJjYW5jZWwiLCJfb3BlblBvcHVwIiwiYXNzb2NpYXRlZEV2ZW50IiwiX29yaWdpblZhbGlkYXRpb24iLCJfaXNJZnJhbWVXZWJTdG9yYWdlU3VwcG9ydGVkIiwiaXNTdXBwb3J0ZWQiLCJwb2xsVXNlckNhbmNlbGxhdGlvbiIsImNsb3NlZCIsIlBFTkRJTkdfUkVESVJFQ1RfS0VZIiwicmVkaXJlY3RPdXRjb21lTWFwIiwiUmVkaXJlY3RBY3Rpb24iLCJyZWFkeU91dGNvbWUiLCJoYXNQZW5kaW5nUmVkaXJlY3QiLCJfZ2V0QW5kQ2xlYXJQZW5kaW5nUmVkaXJlY3RTdGF0dXMiLCJwZW5kaW5nUmVkaXJlY3RLZXkiLCJyZXNvbHZlclBlcnNpc3RlbmNlIiwiX3NldFBlbmRpbmdSZWRpcmVjdFN0YXR1cyIsIl9jbGVhclJlZGlyZWN0T3V0Y29tZXMiLCJfc2lnbkluV2l0aFJlZGlyZWN0IiwiX29wZW5SZWRpcmVjdCIsIl9yZWF1dGhlbnRpY2F0ZVdpdGhSZWRpcmVjdCIsInByZXBhcmVVc2VyRm9yUmVkaXJlY3QiLCJfbGlua1dpdGhSZWRpcmVjdCIsIl9nZXRSZWRpcmVjdFJlc3VsdCIsInJlc29sdmVyRXh0ZXJuIiwiRVZFTlRfRFVQTElDQVRJT05fQ0FDSEVfRFVSQVRJT05fTVMiLCJBdXRoRXZlbnRNYW5hZ2VyIiwiY2FjaGVkRXZlbnRVaWRzIiwiY29uc3VtZXJzIiwicXVldWVkUmVkaXJlY3RFdmVudCIsImhhc0hhbmRsZWRQb3RlbnRpYWxSZWRpcmVjdCIsImxhc3RQcm9jZXNzZWRFdmVudFRpbWUiLCJhdXRoRXZlbnRDb25zdW1lciIsImlzRXZlbnRGb3JDb25zdW1lciIsInNlbmRUb0NvbnN1bWVyIiwic2F2ZUV2ZW50VG9DYWNoZSIsIm9uRXZlbnQiLCJoYXNFdmVudEJlZW5IYW5kbGVkIiwiaGFuZGxlZCIsImNvbnN1bWVyIiwiaXNSZWRpcmVjdEV2ZW50IiwiaXNOdWxsUmVkaXJlY3RFdmVudCIsImV2ZW50SWRNYXRjaGVzIiwiZXZlbnRVaWQiLCJ2IiwiX2dldFByb2plY3RDb25maWciLCJJUF9BRERSRVNTX1JFR0VYIiwiSFRUUF9SRUdFWCIsIl92YWxpZGF0ZU9yaWdpbiIsImF1dGhvcml6ZWREb21haW5zIiwiZG9tYWluIiwibWF0Y2hEb21haW4iLCJjdXJyZW50VXJsIiwiaG9zdG5hbWUiLCJjZVVybCIsImVzY2FwZWREb21haW5QYXR0ZXJuIiwiTkVUV09SS19USU1FT1VUIiwicmVzZXRVbmxvYWRlZEdhcGlNb2R1bGVzIiwiYmVhY29uIiwiX19fanNsIiwiSCIsImhpbnQiLCJyIiwiTCIsIkNQIiwibG9hZEdhcGkiLCJsb2FkR2FwaUlmcmFtZSIsImdhcGkiLCJpZnJhbWVzIiwiZ2V0Q29udGV4dCIsIm9udGltZW91dCIsIklmcmFtZSIsImNiTmFtZSIsImNhY2hlZEdBcGlMb2FkZXIiLCJfbG9hZEdhcGkiLCJQSU5HX1RJTUVPVVQiLCJJRlJBTUVfUEFUSCIsIkVNVUxBVEVEX0lGUkFNRV9QQVRIIiwiSUZSQU1FX0FUVFJJQlVURVMiLCJ0b3AiLCJoZWlnaHQiLCJ0YWJpbmRleCIsIkVJRF9GUk9NX0FQSUhPU1QiLCJnZXRJZnJhbWVVcmwiLCJlaWQiLCJmdyIsIl9vcGVuSWZyYW1lIiwiY29udGV4dCIsImdhcGkyIiwid2hlcmUiLCJtZXNzYWdlSGFuZGxlcnNGaWx0ZXIiLCJDUk9TU19PUklHSU5fSUZSQU1FU19GSUxURVIiLCJhdHRyaWJ1dGVzIiwiZG9udGNsZWFyIiwiaWZyYW1lIiwicmVzdHlsZSIsInNldEhpZGVPbkxlYXZlIiwibmV0d29ya0Vycm9yIiwibmV0d29ya0Vycm9yVGltZXIiLCJjbGVhclRpbWVyQW5kUmVzb2x2ZSIsInBpbmciLCJCQVNFX1BPUFVQX09QVElPTlMiLCJyZXNpemFibGUiLCJzdGF0dXNiYXIiLCJ0b29sYmFyIiwiREVGQVVMVF9XSURUSCIsIkRFRkFVTFRfSEVJR0hUIiwiVEFSR0VUX0JMQU5LIiwiRklSRUZPWF9FTVBUWV9VUkwiLCJBdXRoUG9wdXAiLCJ3aW5kb3cyIiwiX29wZW4iLCJzY3JlZW4iLCJhdmFpbEhlaWdodCIsImF2YWlsV2lkdGgiLCJzY3JvbGxiYXJzIiwib3B0aW9uc1N0cmluZyIsImVudHJpZXMiLCJyZWR1Y2UiLCJhY2N1bSIsIm9wZW5Bc05ld1dpbmRvd0lPUyIsIm5ld1dpbiIsImZvY3VzIiwiY2xpY2siLCJjcmVhdGVFdmVudCIsImluaXRNb3VzZUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIldJREdFVF9QQVRIIiwiRU1VTEFUT1JfV0lER0VUX1BBVEgiLCJGSVJFQkFTRV9BUFBfQ0hFQ0tfRlJBR01FTlRfSUQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfZ2V0UmVkaXJlY3RVcmwiLCJhdXRoVHlwZSIsInJlZGlyZWN0VXJsIiwiYWRkaXRpb25hbFBhcmFtcyIsImlzRW1wdHkiLCJ0aWQiLCJwYXJhbXNEaWN0IiwiYXBwQ2hlY2tUb2tlbkZyYWdtZW50IiwiZ2V0SGFuZGxlckJhc2UiLCJXRUJfU1RPUkFHRV9TVVBQT1JUX0tFWSIsIkJyb3dzZXJQb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJldmVudE1hbmFnZXJzIiwib3JpZ2luVmFsaWRhdGlvblByb21pc2VzIiwicHJvbWlzZTIiLCJpbml0QW5kR2V0TWFuYWdlciIsInJlZ2lzdGVyIiwiaWZyYW1lRXZlbnQiLCJhdXRoRXZlbnQiLCJzZW5kIiwiTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwiX2ZpbmFsaXplRW5yb2xsIiwiX2ZpbmFsaXplU2lnbkluIiwiUGhvbmVNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfZnJvbUNyZWRlbnRpYWwiLCJwaG9uZVZlcmlmaWNhdGlvbkluZm8iLCJGQUNUT1JfSUQiLCJhc3NlcnRpb25Gb3JFbnJvbGxtZW50Iiwib25lVGltZVBhc3N3b3JkIiwiVG90cE11bHRpRmFjdG9yQXNzZXJ0aW9uSW1wbCIsIl9mcm9tU2VjcmV0IiwiYXNzZXJ0aW9uRm9yU2lnbkluIiwiZW5yb2xsbWVudElkIiwiX2Zyb21FbnJvbGxtZW50SWQiLCJnZW5lcmF0ZVNlY3JldCIsIm1mYVNlc3Npb24iLCJ0b3RwRW5yb2xsbWVudEluZm8iLCJfZnJvbVN0YXJ0VG90cE1mYUVucm9sbG1lbnRSZXNwb25zZSIsIm90cCIsInRvdHBWZXJpZmljYXRpb25JbmZvIiwiX21ha2VUb3RwVmVyaWZpY2F0aW9uSW5mbyIsInNlY3JldEtleSIsImhhc2hpbmdBbGdvcml0aG0iLCJjb2RlTGVuZ3RoIiwiY29kZUludGVydmFsU2Vjb25kcyIsImVucm9sbG1lbnRDb21wbGV0aW9uRGVhZGxpbmUiLCJ0b3RwU2Vzc2lvbkluZm8iLCJzaGFyZWRTZWNyZXRLZXkiLCJ2ZXJpZmljYXRpb25Db2RlTGVuZ3RoIiwicGVyaW9kU2VjIiwiZmluYWxpemVFbnJvbGxtZW50VGltZSIsImdlbmVyYXRlUXJDb2RlVXJsIiwiYWNjb3VudE5hbWUiLCJpc3N1ZXIiLCJ1c2VEZWZhdWx0cyIsIl9pc0VtcHR5U3RyaW5nIiwiaW5wdXQiLCJBdXRoSW50ZXJvcCIsImludGVybmFsTGlzdGVuZXJzIiwiZ2V0VWlkIiwiYXNzZXJ0QXV0aENvbmZpZ3VyZWQiLCJhZGRBdXRoVG9rZW5MaXN0ZW5lciIsInVwZGF0ZVByb2FjdGl2ZVJlZnJlc2giLCJyZW1vdmVBdXRoVG9rZW5MaXN0ZW5lciIsImdldFZlcnNpb25Gb3JQbGF0Zm9ybSIsInJlZ2lzdGVyQXV0aCIsIl9yZWdpc3RlckNvbXBvbmVudCIsImltcG9ydF9jb21wb25lbnQiLCJDb21wb25lbnQiLCJnZXRQcm92aWRlciIsInNldEluc3RhbnRpYXRpb25Nb2RlIiwic2V0SW5zdGFuY2VDcmVhdGVkQ2FsbGJhY2siLCJfaW5zdGFuY2VJZGVudGlmaWVyIiwiX2luc3RhbmNlIiwiYXV0aEludGVybmFsUHJvdmlkZXIiLCJyZWdpc3RlclZlcnNpb24iLCJERUZBVUxUX0lEX1RPS0VOX01BWF9BR0UiLCJhdXRoSWRUb2tlbk1heEFnZSIsImdldEV4cGVyaW1lbnRhbFNldHRpbmciLCJsYXN0UG9zdGVkSWRUb2tlbiIsIm1pbnRDb29raWVGYWN0b3J5IiwiaWRUb2tlblJlc3VsdCIsImlkVG9rZW5BZ2UiLCJnZXRBcHAiLCJhdXRoVG9rZW5TeW5jUGF0aCIsImF1dGhUb2tlblN5bmNVcmwiLCJtaW50Q29va2llIiwiYXV0aEVtdWxhdG9ySG9zdCIsImdldERlZmF1bHRFbXVsYXRvckhvc3QiLCJnZXRTY3JpcHRQYXJlbnRFbGVtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzZXRBdHRyaWJ1dGUiLCJvbmVycm9yIiwiY2hhcnNldCIsImltcG9ydF9hcHAyIiwicmVxdWlyZSIsImltcG9ydF91dGlsMiIsImltcG9ydF9sb2dnZXIyIiwiaW1wb3J0X3RzbGliMiIsImltcG9ydF9jb21wb25lbnQyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxtQkFBQTtBQUFBQyxRQUFBLENBQUFELG1CQUFBO0VBQUFFLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFDLDBDQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7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QUFFO01BQ2hFblYsc0JBQUEsQ0FBdUJxTixJQUFBLEVBQU1xMUMsVUFBQSxFQUFZLE1BQ3ZDQSxVQUFBLENBQVdyMUMsSUFBQSxDQUFLc00sV0FBVyxDQUFDO01BRTlCOVgsZ0JBQUEsQ0FBaUJ3TCxJQUFBLEVBQU15SyxJQUFBLElBQVE0cUMsVUFBQSxDQUFXNXFDLElBQUksQ0FBQzs7O0VBSW5ELE1BQU02cUMsZ0JBQUEsT0FBbUJ0OUMsV0FBQSxDQUFBdTlDLHNCQUFBLEVBQXVCLE1BQU07RUFDdEQsSUFBSUQsZ0JBQUEsRUFBa0I7SUFDcEJwaUQsbUJBQUEsQ0FBb0I4TSxJQUFBLEVBQU0sVUFBVXMxQyxnQkFBQSxFQUFrQjs7RUFHeEQsT0FBT3QxQyxJQUFBO0FBQ1Q7QUFFQSxTQUFTdzFDLHVCQUFBLEVBQXNCOztFQUM3QixRQUFPemlDLEVBQUEsSUFBQXBSLEVBQUEsR0FBQWtXLFFBQUEsQ0FBUzQ5QixvQkFBQSxDQUFxQixNQUFNLE9BQUksUUFBQTl6QyxFQUFBLHVCQUFBQSxFQUFBLFNBQUUsUUFBQW9SLEVBQUEsY0FBQUEsRUFBQSxHQUFJOEUsUUFBQTtBQUN2RDtBQUVBMkosc0JBQUEsQ0FBdUI7RUFDckJKLE9BQU85ZCxHQUFBLEVBQVc7SUFFaEIsT0FBTyxJQUFJMEMsT0FBQSxDQUFRLENBQUMyUyxPQUFBLEVBQVN2USxNQUFBLEtBQVU7TUFDckMsTUFBTXVmLEVBQUEsR0FBSzlQLFFBQUEsQ0FBUytQLGFBQUEsQ0FBYyxRQUFRO01BQzFDRCxFQUFBLENBQUcrdEIsWUFBQSxDQUFhLE9BQU9weUMsR0FBRztNQUMxQnFrQixFQUFBLENBQUcyYSxNQUFBLEdBQVMzcEIsT0FBQTtNQUNaZ1AsRUFBQSxDQUFHZ3VCLE9BQUEsR0FBVTd1QyxDQUFBLElBQUk7UUFDZixNQUFNckgsS0FBQSxHQUFRSyxZQUFBLENBQVk7UUFDMUJMLEtBQUEsQ0FBTWdKLFVBQUEsR0FBYTNCLENBQUE7UUFDbkJzQixNQUFBLENBQU8zSSxLQUFLO01BQ2Q7TUFDQWtvQixFQUFBLENBQUd4VCxJQUFBLEdBQU87TUFDVndULEVBQUEsQ0FBR2l1QixPQUFBLEdBQVU7TUFDYkosc0JBQUEsQ0FBc0IsRUFBRzVzQixXQUFBLENBQVlqQixFQUFFO0lBQ3pDLENBQUM7O0VBR0hwRyxVQUFBLEVBQVk7RUFDWkYsaUJBQUEsRUFBbUI7RUFDbkJDLHlCQUFBLEVBQ0U7QUFDSDtBQUVEMHlCLFlBQUEsQ0FBWTs7O0FDaEpaLElBQUE2QixXQUFBLEdBQU9DLE9BQUE7QUFDUCxJQUFBQyxZQUFBLEdBQU9ELE9BQUE7QUFDUCxJQUFBRSxjQUFBLEdBQU9GLE9BQUE7QUFDUCxJQUFBRyxhQUFBLEdBQU9ILE9BQUE7QUFDUCxJQUFBSSxpQkFBQSxHQUFPSixPQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwL291dCJ9