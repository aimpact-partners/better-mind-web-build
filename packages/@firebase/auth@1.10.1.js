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
    this.languageCode = (_e = searchParams["lang"]) !== null && _e !== void 0 ? _e : null;
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
var import_app2 = require("@firebase/app@0.11.5");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZmlyZWJhc2UvYXV0aC4xLjEwLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21vZGVsL2VudW1fbWFwcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9lcnJvcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9sb2cudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9hc3NlcnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9sb2NhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL25hdmlnYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2RlbGF5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZW11bGF0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9mZXRjaF9wcm92aWRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2Vycm9ycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9yZWNhcHRjaGEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvYWNjb3VudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3RpbWUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9pZF90b2tlbl9yZXN1bHQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9pbnZhbGlkYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9wcm9hY3RpdmVfcmVmcmVzaC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfbWV0YWRhdGEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9yZWxvYWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi90b2tlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3Rva2VuX21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci91c2VyX2ltcGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9pbnN0YW50aWF0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcGVyc2lzdGVuY2UvaW5fbWVtb3J5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3BlcnNpc3RlbmNlL3BlcnNpc3RlbmNlX3VzZXJfbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2Jyb3dzZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC92ZXJzaW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvbWlkZGxld2FyZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL3Bhc3N3b3JkX3BvbGljeS9nZXRfcGFzc3dvcmRfcG9saWN5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvcGFzc3dvcmRfcG9saWN5X2ltcGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9hdXRoX2ltcGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbG9hZF9qcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX21vY2sudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV9lbnRlcnByaXNlX3ZlcmlmaWVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvaW5pdGlhbGl6ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2VtdWxhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL2F1dGhfY3JlZGVudGlhbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9lbWFpbF9saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vaWRwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL29hdXRoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vc21zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2FjdGlvbl9jb2RlX3VybC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZW1haWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2ZlZGVyYXRlZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvb2F1dGgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2ZhY2Vib29rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9nb29nbGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2dpdGh1Yi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9zYW1sLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9zYW1sLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy90d2l0dGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vc2lnbl91cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfY3JlZGVudGlhbF9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYW5vbnltb3VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX2Vycm9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvcHJvdmlkZXJzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvbGlua191bmxpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9yZWF1dGhlbnRpY2F0ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2NyZWRlbnRpYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9jdXN0b21fdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9jdXN0b21fdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2FjdGlvbl9jb2RlX3NldHRpbmdzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWxfYW5kX3Bhc3N3b3JkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWxfbGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2NyZWF0ZV9hdXRoX3VyaS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L3Byb2ZpbGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9hY2NvdW50X2luZm8udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9hZGRpdGlvbmFsX3VzZXJfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9zZXNzaW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX3Jlc29sdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L21mYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV91c2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3BlcnNpc3RlbmNlL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2Jyb3dzZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2UvbG9jYWxfc3RvcmFnZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9jb29raWVfc3RvcmFnZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9zZXNzaW9uX3N0b3JhZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWVzc2FnZWNoYW5uZWwvcHJvbWlzZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZXNzYWdlY2hhbm5lbC9yZWNlaXZlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2V2ZW50X2lkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21lc3NhZ2VjaGFubmVsL3NlbmRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9hdXRoX3dpbmRvdy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci91dGlsL3dvcmtlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9pbmRleGVkX2RiLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vbWZhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfbG9hZGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfdmVyaWZpZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvc3RyYXRlZ2llcy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wcm92aWRlcnMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9yZXNvbHZlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2lkcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2Fic3RyYWN0X3BvcHVwX3JlZGlyZWN0X29wZXJhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9zdHJhdGVnaWVzL3BvcHVwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvcmVkaXJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvc3RyYXRlZ2llcy9yZWRpcmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2F1dGhfZXZlbnRfbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL3Byb2plY3RfY29uZmlnL2dldF9wcm9qZWN0X2NvbmZpZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3ZhbGlkYXRlX29yaWdpbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9pZnJhbWUvZ2FwaS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9pZnJhbWUvaWZyYW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3V0aWwvcG9wdXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9oYW5kbGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BvcHVwX3JlZGlyZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX2Fzc2VydGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZmEvYXNzZXJ0aW9ucy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL2Fzc2VydGlvbnMvdG90cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2ZpcmViYXNlX2ludGVybmFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvcmVnaXN0ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvZGlzdC9lc20yMDE3L2luZGV4LmpzIl0sIm5hbWVzIjpbImF1dGhfMV8xMF8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkFjdGlvbkNvZGVPcGVyYXRpb24iLCJBY3Rpb25Db2RlVVJMIiwiQXV0aENyZWRlbnRpYWwiLCJBdXRoRXJyb3JDb2RlcyIsIkFVVEhfRVJST1JfQ09ERVNfTUFQX0RPX05PVF9VU0VfSU5URVJOQUxMWSIsIkVtYWlsQXV0aENyZWRlbnRpYWwiLCJFbWFpbEF1dGhQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiRmFjdG9ySWQiLCJHaXRodWJBdXRoUHJvdmlkZXIiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJPQXV0aENyZWRlbnRpYWwiLCJPQXV0aFByb3ZpZGVyIiwiT3BlcmF0aW9uVHlwZSIsIlBob25lQXV0aENyZWRlbnRpYWwiLCJQaG9uZUF1dGhQcm92aWRlciIsIlBob25lTXVsdGlGYWN0b3JHZW5lcmF0b3IiLCJQcm92aWRlcklkIiwiUmVjYXB0Y2hhVmVyaWZpZXIiLCJTQU1MQXV0aFByb3ZpZGVyIiwiU2lnbkluTWV0aG9kIiwiVG90cE11bHRpRmFjdG9yR2VuZXJhdG9yIiwiVG90cFNlY3JldCIsIlR3aXR0ZXJBdXRoUHJvdmlkZXIiLCJhcHBseUFjdGlvbkNvZGUiLCJiZWZvcmVBdXRoU3RhdGVDaGFuZ2VkIiwiYnJvd3NlckNvb2tpZVBlcnNpc3RlbmNlIiwiYnJvd3NlckxvY2FsUGVyc2lzdGVuY2UiLCJicm93c2VyUG9wdXBSZWRpcmVjdFJlc29sdmVyIiwiYnJvd3NlclNlc3Npb25QZXJzaXN0ZW5jZSIsImNoZWNrQWN0aW9uQ29kZSIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwiY29ubmVjdEF1dGhFbXVsYXRvciIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImRlYnVnRXJyb3JNYXAiLCJkZWxldGVVc2VyIiwiZmV0Y2hTaWduSW5NZXRob2RzRm9yRW1haWwiLCJnZXRBZGRpdGlvbmFsVXNlckluZm8iLCJnZXRBdXRoIiwiZ2V0SWRUb2tlbiIsImdldElkVG9rZW5SZXN1bHQiLCJnZXRNdWx0aUZhY3RvclJlc29sdmVyIiwiZ2V0UmVkaXJlY3RSZXN1bHQiLCJpbk1lbW9yeVBlcnNpc3RlbmNlIiwiaW5kZXhlZERCTG9jYWxQZXJzaXN0ZW5jZSIsImluaXRpYWxpemVBdXRoIiwiaW5pdGlhbGl6ZVJlY2FwdGNoYUNvbmZpZyIsImlzU2lnbkluV2l0aEVtYWlsTGluayIsImxpbmtXaXRoQ3JlZGVudGlhbCIsImxpbmtXaXRoUGhvbmVOdW1iZXIiLCJsaW5rV2l0aFBvcHVwIiwibGlua1dpdGhSZWRpcmVjdCIsIm11bHRpRmFjdG9yIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwib25JZFRva2VuQ2hhbmdlZCIsInBhcnNlQWN0aW9uQ29kZVVSTCIsInByb2RFcnJvck1hcCIsInJlYXV0aGVudGljYXRlV2l0aENyZWRlbnRpYWwiLCJyZWF1dGhlbnRpY2F0ZVdpdGhQaG9uZU51bWJlciIsInJlYXV0aGVudGljYXRlV2l0aFBvcHVwIiwicmVhdXRoZW50aWNhdGVXaXRoUmVkaXJlY3QiLCJyZWxvYWQiLCJyZXZva2VBY2Nlc3NUb2tlbiIsInNlbmRFbWFpbFZlcmlmaWNhdGlvbiIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJzZW5kU2lnbkluTGlua1RvRW1haWwiLCJzZXRQZXJzaXN0ZW5jZSIsInNpZ25JbkFub255bW91c2x5Iiwic2lnbkluV2l0aENyZWRlbnRpYWwiLCJzaWduSW5XaXRoQ3VzdG9tVG9rZW4iLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbExpbmsiLCJzaWduSW5XaXRoUGhvbmVOdW1iZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJzaWduSW5XaXRoUmVkaXJlY3QiLCJzaWduT3V0IiwidW5saW5rIiwidXBkYXRlQ3VycmVudFVzZXIiLCJ1cGRhdGVFbWFpbCIsInVwZGF0ZVBhc3N3b3JkIiwidXBkYXRlUGhvbmVOdW1iZXIiLCJ1cGRhdGVQcm9maWxlIiwidXNlRGV2aWNlTGFuZ3VhZ2UiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwidmVyaWZ5QmVmb3JlVXBkYXRlRW1haWwiLCJ2ZXJpZnlQYXNzd29yZFJlc2V0Q29kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJQSE9ORSIsIlRPVFAiLCJGQUNFQk9PSyIsIkdJVEhVQiIsIkdPT0dMRSIsIlBBU1NXT1JEIiwiVFdJVFRFUiIsIkVNQUlMX0xJTksiLCJFTUFJTF9QQVNTV09SRCIsIkxJTksiLCJSRUFVVEhFTlRJQ0FURSIsIlNJR05fSU4iLCJFTUFJTF9TSUdOSU4iLCJQQVNTV09SRF9SRVNFVCIsIlJFQ09WRVJfRU1BSUwiLCJSRVZFUlRfU0VDT05EX0ZBQ1RPUl9BRERJVElPTiIsIlZFUklGWV9BTkRfQ0hBTkdFX0VNQUlMIiwiVkVSSUZZX0VNQUlMIiwiX2RlYnVnRXJyb3JNYXAiLCJfcHJvZEVycm9yTWFwIiwiX0RFRkFVTFRfQVVUSF9FUlJPUl9GQUNUT1JZIiwiaW1wb3J0X3V0aWwiLCJFcnJvckZhY3RvcnkiLCJBRE1JTl9PTkxZX09QRVJBVElPTiIsIkFSR1VNRU5UX0VSUk9SIiwiQVBQX05PVF9BVVRIT1JJWkVEIiwiQVBQX05PVF9JTlNUQUxMRUQiLCJDQVBUQ0hBX0NIRUNLX0ZBSUxFRCIsIkNPREVfRVhQSVJFRCIsIkNPUkRPVkFfTk9UX1JFQURZIiwiQ09SU19VTlNVUFBPUlRFRCIsIkNSRURFTlRJQUxfQUxSRUFEWV9JTl9VU0UiLCJDUkVERU5USUFMX01JU01BVENIIiwiQ1JFREVOVElBTF9UT09fT0xEX0xPR0lOX0FHQUlOIiwiREVQRU5ERU5UX1NES19JTklUX0JFRk9SRV9BVVRIIiwiRFlOQU1JQ19MSU5LX05PVF9BQ1RJVkFURUQiLCJFTUFJTF9DSEFOR0VfTkVFRFNfVkVSSUZJQ0FUSU9OIiwiRU1BSUxfRVhJU1RTIiwiRU1VTEFUT1JfQ09ORklHX0ZBSUxFRCIsIkVYUElSRURfT09CX0NPREUiLCJFWFBJUkVEX1BPUFVQX1JFUVVFU1QiLCJJTlRFUk5BTF9FUlJPUiIsIklOVkFMSURfQVBJX0tFWSIsIklOVkFMSURfQVBQX0NSRURFTlRJQUwiLCJJTlZBTElEX0FQUF9JRCIsIklOVkFMSURfQVVUSCIsIklOVkFMSURfQVVUSF9FVkVOVCIsIklOVkFMSURfQ0VSVF9IQVNIIiwiSU5WQUxJRF9DT0RFIiwiSU5WQUxJRF9DT05USU5VRV9VUkkiLCJJTlZBTElEX0NPUkRPVkFfQ09ORklHVVJBVElPTiIsIklOVkFMSURfQ1VTVE9NX1RPS0VOIiwiSU5WQUxJRF9EWU5BTUlDX0xJTktfRE9NQUlOIiwiSU5WQUxJRF9FTUFJTCIsIklOVkFMSURfRU1VTEFUT1JfU0NIRU1FIiwiSU5WQUxJRF9JRFBfUkVTUE9OU0UiLCJJTlZBTElEX0xPR0lOX0NSRURFTlRJQUxTIiwiSU5WQUxJRF9NRVNTQUdFX1BBWUxPQUQiLCJJTlZBTElEX01GQV9TRVNTSU9OIiwiSU5WQUxJRF9PQVVUSF9DTElFTlRfSUQiLCJJTlZBTElEX09BVVRIX1BST1ZJREVSIiwiSU5WQUxJRF9PT0JfQ09ERSIsIklOVkFMSURfT1JJR0lOIiwiSU5WQUxJRF9QQVNTV09SRCIsIklOVkFMSURfUEVSU0lTVEVOQ0UiLCJJTlZBTElEX1BIT05FX05VTUJFUiIsIklOVkFMSURfUFJPVklERVJfSUQiLCJJTlZBTElEX1JFQ0lQSUVOVF9FTUFJTCIsIklOVkFMSURfU0VOREVSIiwiSU5WQUxJRF9TRVNTSU9OX0lORk8iLCJJTlZBTElEX1RFTkFOVF9JRCIsIk1GQV9JTkZPX05PVF9GT1VORCIsIk1GQV9SRVFVSVJFRCIsIk1JU1NJTkdfQU5EUk9JRF9QQUNLQUdFX05BTUUiLCJNSVNTSU5HX0FQUF9DUkVERU5USUFMIiwiTUlTU0lOR19BVVRIX0RPTUFJTiIsIk1JU1NJTkdfQ09ERSIsIk1JU1NJTkdfQ09OVElOVUVfVVJJIiwiTUlTU0lOR19JRlJBTUVfU1RBUlQiLCJNSVNTSU5HX0lPU19CVU5ETEVfSUQiLCJNSVNTSU5HX09SX0lOVkFMSURfTk9OQ0UiLCJNSVNTSU5HX01GQV9JTkZPIiwiTUlTU0lOR19NRkFfU0VTU0lPTiIsIk1JU1NJTkdfUEhPTkVfTlVNQkVSIiwiTUlTU0lOR19TRVNTSU9OX0lORk8iLCJNT0RVTEVfREVTVFJPWUVEIiwiTkVFRF9DT05GSVJNQVRJT04iLCJORVRXT1JLX1JFUVVFU1RfRkFJTEVEIiwiTlVMTF9VU0VSIiwiTk9fQVVUSF9FVkVOVCIsIk5PX1NVQ0hfUFJPVklERVIiLCJPUEVSQVRJT05fTk9UX0FMTE9XRUQiLCJPUEVSQVRJT05fTk9UX1NVUFBPUlRFRCIsIlBPUFVQX0JMT0NLRUQiLCJQT1BVUF9DTE9TRURfQllfVVNFUiIsIlBST1ZJREVSX0FMUkVBRFlfTElOS0VEIiwiUVVPVEFfRVhDRUVERUQiLCJSRURJUkVDVF9DQU5DRUxMRURfQllfVVNFUiIsIlJFRElSRUNUX09QRVJBVElPTl9QRU5ESU5HIiwiUkVKRUNURURfQ1JFREVOVElBTCIsIlNFQ09ORF9GQUNUT1JfQUxSRUFEWV9FTlJPTExFRCIsIlNFQ09ORF9GQUNUT1JfTElNSVRfRVhDRUVERUQiLCJURU5BTlRfSURfTUlTTUFUQ0giLCJUSU1FT1VUIiwiVE9LRU5fRVhQSVJFRCIsIlRPT19NQU5ZX0FUVEVNUFRTX1RSWV9MQVRFUiIsIlVOQVVUSE9SSVpFRF9ET01BSU4iLCJVTlNVUFBPUlRFRF9GSVJTVF9GQUNUT1IiLCJVTlNVUFBPUlRFRF9QRVJTSVNURU5DRSIsIlVOU1VQUE9SVEVEX1RFTkFOVF9PUEVSQVRJT04iLCJVTlZFUklGSUVEX0VNQUlMIiwiVVNFUl9DQU5DRUxMRUQiLCJVU0VSX0RFTEVURUQiLCJVU0VSX0RJU0FCTEVEIiwiVVNFUl9NSVNNQVRDSCIsIlVTRVJfU0lHTkVEX09VVCIsIldFQUtfUEFTU1dPUkQiLCJXRUJfU1RPUkFHRV9VTlNVUFBPUlRFRCIsIkFMUkVBRFlfSU5JVElBTElaRUQiLCJSRUNBUFRDSEFfTk9UX0VOQUJMRUQiLCJNSVNTSU5HX1JFQ0FQVENIQV9UT0tFTiIsIklOVkFMSURfUkVDQVBUQ0hBX1RPS0VOIiwiSU5WQUxJRF9SRUNBUFRDSEFfQUNUSU9OIiwiTUlTU0lOR19DTElFTlRfVFlQRSIsIk1JU1NJTkdfUkVDQVBUQ0hBX1ZFUlNJT04iLCJJTlZBTElEX1JFQ0FQVENIQV9WRVJTSU9OIiwiSU5WQUxJRF9SRVFfVFlQRSIsIklOVkFMSURfSE9TVElOR19MSU5LX0RPTUFJTiIsImxvZ0NsaWVudCIsImltcG9ydF9sb2dnZXIiLCJMb2dnZXIiLCJfbG9nV2FybiIsIm1zZyIsImFyZ3MiLCJsb2dMZXZlbCIsIkxvZ0xldmVsIiwiV0FSTiIsIndhcm4iLCJpbXBvcnRfYXBwIiwiU0RLX1ZFUlNJT04iLCJfbG9nRXJyb3IiLCJFUlJPUiIsImVycm9yIiwiX2ZhaWwiLCJhdXRoT3JDb2RlIiwicmVzdCIsImNyZWF0ZUVycm9ySW50ZXJuYWwiLCJfY3JlYXRlRXJyb3IiLCJfZXJyb3JXaXRoQ3VzdG9tTWVzc2FnZSIsImF1dGgiLCJjb2RlIiwibWVzc2FnZSIsImVycm9yTWFwIiwiT2JqZWN0IiwiYXNzaWduIiwiZmFjdG9yeSIsImNyZWF0ZSIsImFwcE5hbWUiLCJuYW1lIiwiX3NlcnZlckFwcEN1cnJlbnRVc2VyT3BlcmF0aW9uTm90U3VwcG9ydGVkRXJyb3IiLCJfYXNzZXJ0SW5zdGFuY2VPZiIsIm9iamVjdCIsImluc3RhbmNlIiwiY29uc3RydWN0b3JJbnN0YW5jZSIsImNvbnN0cnVjdG9yIiwiZnVsbFBhcmFtcyIsInNsaWNlIiwiX2Vycm9yRmFjdG9yeSIsIl9hc3NlcnQiLCJhc3NlcnRpb24iLCJkZWJ1Z0ZhaWwiLCJmYWlsdXJlIiwiRXJyb3IiLCJkZWJ1Z0Fzc2VydCIsIl9nZXRDdXJyZW50VXJsIiwic2VsZiIsIl9hIiwibG9jYXRpb24iLCJocmVmIiwiX2lzSHR0cE9ySHR0cHMiLCJfZ2V0Q3VycmVudFNjaGVtZSIsInByb3RvY29sIiwiX2lzT25saW5lIiwibmF2aWdhdG9yIiwib25MaW5lIiwiaXNCcm93c2VyRXh0ZW5zaW9uIiwiX2dldFVzZXJMYW5ndWFnZSIsIm5hdmlnYXRvckxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2UiLCJEZWxheSIsInNob3J0RGVsYXkiLCJsb25nRGVsYXkiLCJpc01vYmlsZSIsImlzTW9iaWxlQ29yZG92YSIsImlzUmVhY3ROYXRpdmUiLCJnZXQiLCJNYXRoIiwibWluIiwiX2VtdWxhdG9yVXJsIiwiY29uZmlnIiwicGF0aCIsImVtdWxhdG9yIiwidXJsIiwic3RhcnRzV2l0aCIsIkZldGNoUHJvdmlkZXIiLCJpbml0aWFsaXplIiwiZmV0Y2hJbXBsIiwiaGVhZGVyc0ltcGwiLCJyZXNwb25zZUltcGwiLCJmZXRjaCIsImdsb2JhbFRoaXMiLCJoZWFkZXJzIiwiSGVhZGVycyIsInJlc3BvbnNlIiwiUmVzcG9uc2UiLCJTRVJWRVJfRVJST1JfTUFQIiwiQ29va2llQXV0aFByb3hpZWRFbmRwb2ludHMiLCJERUZBVUxUX0FQSV9USU1FT1VUX01TIiwiX2FkZFRpZElmTmVjZXNzYXJ5IiwicmVxdWVzdCIsInRlbmFudElkIiwiX3BlcmZvcm1BcGlSZXF1ZXN0IiwibWV0aG9kIiwiY3VzdG9tRXJyb3JNYXAiLCJfcGVyZm9ybUZldGNoV2l0aEVycm9ySGFuZGxpbmciLCJib2R5IiwicGFyYW1zIiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5IiwicXVlcnlzdHJpbmciLCJrZXkiLCJhcGlLZXkiLCJfZ2V0QWRkaXRpb25hbEhlYWRlcnMiLCJsYW5ndWFnZUNvZGUiLCJmZXRjaEFyZ3MiLCJpc0Nsb3VkZmxhcmVXb3JrZXIiLCJyZWZlcnJlclBvbGljeSIsIl9nZXRGaW5hbFRhcmdldCIsImFwaUhvc3QiLCJmZXRjaEZuIiwiX2NhbkluaXRFbXVsYXRvciIsIm5ldHdvcmtUaW1lb3V0IiwiTmV0d29ya1RpbWVvdXQiLCJQcm9taXNlIiwicmFjZSIsInByb21pc2UiLCJjbGVhck5ldHdvcmtUaW1lb3V0IiwianNvbiIsIl9tYWtlVGFnZ2VkRXJyb3IiLCJvayIsImVycm9yTWVzc2FnZSIsInNlcnZlckVycm9yQ29kZSIsInNlcnZlckVycm9yTWVzc2FnZSIsInNwbGl0IiwiYXV0aEVycm9yIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwiZSIsIkZpcmViYXNlRXJyb3IiLCJTdHJpbmciLCJfcGVyZm9ybVNpZ25JblJlcXVlc3QiLCJzZXJ2ZXJSZXNwb25zZSIsIl9zZXJ2ZXJSZXNwb25zZSIsImhvc3QiLCJiYXNlIiwiYXV0aEludGVybmFsIiwiZmluYWxUYXJnZXQiLCJhcGlTY2hlbWUiLCJpbmNsdWRlcyIsIl9wZXJzaXN0ZW5jZU1hbmFnZXJBdmFpbGFibGUiLCJfZ2V0UGVyc2lzdGVuY2VUeXBlIiwiY29va2llUGVyc2lzdGVuY2UiLCJfZ2V0UGVyc2lzdGVuY2UiLCJ0b1N0cmluZyIsIl9wYXJzZUVuZm9yY2VtZW50U3RhdGUiLCJlbmZvcmNlbWVudFN0YXRlU3RyIiwiY2xlYXJUaW1lb3V0IiwidGltZXIiLCJfIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImVycm9yUGFyYW1zIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImN1c3RvbURhdGEiLCJfdG9rZW5SZXNwb25zZSIsImlzVjIiLCJncmVjYXB0Y2hhIiwiZ2V0UmVzcG9uc2UiLCJpc0VudGVycHJpc2UiLCJlbnRlcnByaXNlIiwiUmVjYXB0Y2hhQ29uZmlnIiwic2l0ZUtleSIsInJlY2FwdGNoYUVuZm9yY2VtZW50U3RhdGUiLCJyZWNhcHRjaGFLZXkiLCJnZXRQcm92aWRlckVuZm9yY2VtZW50U3RhdGUiLCJwcm92aWRlclN0ciIsImxlbmd0aCIsInByb3ZpZGVyIiwiZW5mb3JjZW1lbnRTdGF0ZSIsImlzUHJvdmlkZXJFbmFibGVkIiwiaXNBbnlQcm92aWRlckVuYWJsZWQiLCJnZXRSZWNhcHRjaGFQYXJhbXMiLCJyZWNhcHRjaGFTaXRlS2V5IiwiZ2V0UmVjYXB0Y2hhQ29uZmlnIiwiZGVsZXRlQWNjb3VudCIsImRlbGV0ZUxpbmtlZEFjY291bnRzIiwiZ2V0QWNjb3VudEluZm8iLCJ1dGNUaW1lc3RhbXBUb0RhdGVTdHJpbmciLCJ1dGNUaW1lc3RhbXAiLCJkYXRlIiwiRGF0ZSIsIk51bWJlciIsImlzTmFOIiwiZ2V0VGltZSIsInRvVVRDU3RyaW5nIiwidXNlciIsImZvcmNlUmVmcmVzaCIsImdldE1vZHVsYXJJbnN0YW5jZSIsInVzZXJJbnRlcm5hbCIsInRva2VuIiwiY2xhaW1zIiwiX3BhcnNlVG9rZW4iLCJleHAiLCJhdXRoX3RpbWUiLCJpYXQiLCJmaXJlYmFzZSIsInNpZ25JblByb3ZpZGVyIiwiYXV0aFRpbWUiLCJzZWNvbmRzU3RyaW5nVG9NaWxsaXNlY29uZHMiLCJpc3N1ZWRBdFRpbWUiLCJleHBpcmF0aW9uVGltZSIsInNpZ25JblNlY29uZEZhY3RvciIsInNlY29uZHMiLCJhbGdvcml0aG0iLCJwYXlsb2FkIiwic2lnbmF0dXJlIiwiZGVjb2RlZCIsImJhc2U2NERlY29kZSIsInBhcnNlIiwiX3Rva2VuRXhwaXJlc0luIiwicGFyc2VkVG9rZW4iLCJfbG9nb3V0SWZJbnZhbGlkYXRlZCIsImJ5cGFzc0F1dGhTdGF0ZSIsImlzVXNlckludmFsaWRhdGVkIiwiY3VycmVudFVzZXIiLCJQcm9hY3RpdmVSZWZyZXNoIiwiaXNSdW5uaW5nIiwidGltZXJJZCIsImVycm9yQmFja29mZiIsIl9zdGFydCIsInNjaGVkdWxlIiwiX3N0b3AiLCJnZXRJbnRlcnZhbCIsIndhc0Vycm9yIiwiaW50ZXJ2YWwiLCJleHBUaW1lIiwic3RzVG9rZW5NYW5hZ2VyIiwibm93IiwibWF4IiwiaXRlcmF0aW9uIiwiVXNlck1ldGFkYXRhIiwiY3JlYXRlZEF0IiwibGFzdExvZ2luQXQiLCJfaW5pdGlhbGl6ZVRpbWUiLCJsYXN0U2lnbkluVGltZSIsImNyZWF0aW9uVGltZSIsIl9jb3B5IiwibWV0YWRhdGEiLCJ0b0pTT04iLCJfcmVsb2FkV2l0aG91dFNhdmluZyIsImlkVG9rZW4iLCJ1c2VycyIsImNvcmVBY2NvdW50IiwiX25vdGlmeVJlbG9hZExpc3RlbmVyIiwibmV3UHJvdmlkZXJEYXRhIiwicHJvdmlkZXJVc2VySW5mbyIsImV4dHJhY3RQcm92aWRlckRhdGEiLCJwcm92aWRlckRhdGEiLCJtZXJnZVByb3ZpZGVyRGF0YSIsIm9sZElzQW5vbnltb3VzIiwiaXNBbm9ueW1vdXMiLCJuZXdJc0Fub255bW91cyIsInBhc3N3b3JkSGFzaCIsInVwZGF0ZXMiLCJ1aWQiLCJsb2NhbElkIiwiZGlzcGxheU5hbWUiLCJwaG90b1VSTCIsInBob3RvVXJsIiwiZW1haWxWZXJpZmllZCIsIl9wZXJzaXN0VXNlcklmQ3VycmVudCIsIl9ub3RpZnlMaXN0ZW5lcnNJZkN1cnJlbnQiLCJvcmlnaW5hbCIsIm5ld0RhdGEiLCJkZWR1cGVkIiwiZmlsdGVyIiwibyIsInNvbWUiLCJuIiwicHJvdmlkZXJJZCIsInByb3ZpZGVycyIsIm1hcCIsImltcG9ydF90c2xpYiIsIl9fcmVzdCIsInJhd0lkIiwicmVxdWVzdFN0c1Rva2VuIiwicmVmcmVzaFRva2VuIiwidG9rZW5BcGlIb3N0IiwiYWNjZXNzVG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJleHBpcmVzSW4iLCJleHBpcmVzX2luIiwicmVmcmVzaF90b2tlbiIsInJldm9rZVRva2VuIiwiU3RzVG9rZW5NYW5hZ2VyIiwiaXNFeHBpcmVkIiwidXBkYXRlRnJvbVNlcnZlclJlc3BvbnNlIiwidXBkYXRlVG9rZW5zQW5kRXhwaXJhdGlvbiIsInVwZGF0ZUZyb21JZFRva2VuIiwiZ2V0VG9rZW4iLCJyZWZyZXNoIiwiY2xlYXJSZWZyZXNoVG9rZW4iLCJvbGRUb2tlbiIsImV4cGlyZXNJblNlYyIsImZyb21KU09OIiwibWFuYWdlciIsIl9hc3NpZ24iLCJfY2xvbmUiLCJfcGVyZm9ybVJlZnJlc2giLCJhc3NlcnRTdHJpbmdPclVuZGVmaW5lZCIsIlVzZXJJbXBsIiwib3B0IiwicHJvYWN0aXZlUmVmcmVzaCIsInJlbG9hZFVzZXJJbmZvIiwicmVsb2FkTGlzdGVuZXIiLCJ1c2VySW5mbyIsIm5ld1VzZXIiLCJfb25SZWxvYWQiLCJjYWxsYmFjayIsIl9zdGFydFByb2FjdGl2ZVJlZnJlc2giLCJfc3RvcFByb2FjdGl2ZVJlZnJlc2giLCJfdXBkYXRlVG9rZW5zSWZOZWNlc3NhcnkiLCJyZWxvYWQyIiwidG9rZW5zUmVmcmVzaGVkIiwiZGVsZXRlIiwiX2lzRmlyZWJhc2VTZXJ2ZXJBcHAiLCJhcHAiLCJfcmVkaXJlY3RFdmVudElkIiwiX2Zyb21KU09OIiwiX2IiLCJfYyIsIl9kIiwiX2UiLCJfZiIsIl9nIiwiX2giLCJwbGFpbk9iamVjdFRva2VuTWFuYWdlciIsIkFycmF5IiwiaXNBcnJheSIsIl9mcm9tSWRUb2tlblJlc3BvbnNlIiwiaWRUb2tlblJlc3BvbnNlIiwiX2Zyb21HZXRBY2NvdW50SW5mb1Jlc3BvbnNlIiwiaW5zdGFuY2VDYWNoZSIsIk1hcCIsIl9nZXRJbnN0YW5jZSIsImNscyIsIkZ1bmN0aW9uIiwic2V0IiwiSW5NZW1vcnlQZXJzaXN0ZW5jZSIsInR5cGUiLCJzdG9yYWdlIiwiX2lzQXZhaWxhYmxlIiwiX3NldCIsInZhbHVlIiwiX2dldCIsIl9yZW1vdmUiLCJfYWRkTGlzdGVuZXIiLCJfa2V5IiwiX2xpc3RlbmVyIiwiX3JlbW92ZUxpc3RlbmVyIiwiX3BlcnNpc3RlbmNlS2V5TmFtZSIsIlBlcnNpc3RlbmNlVXNlck1hbmFnZXIiLCJwZXJzaXN0ZW5jZSIsInVzZXJLZXkiLCJuYW1lMiIsImZ1bGxVc2VyS2V5IiwiZnVsbFBlcnNpc3RlbmNlS2V5IiwiYm91bmRFdmVudEhhbmRsZXIiLCJfb25TdG9yYWdlRXZlbnQiLCJiaW5kIiwic2V0Q3VycmVudFVzZXIiLCJnZXRDdXJyZW50VXNlciIsImJsb2IiLCJjYXRjaCIsInJlbW92ZUN1cnJlbnRVc2VyIiwic2F2ZVBlcnNpc3RlbmNlRm9yUmVkaXJlY3QiLCJuZXdQZXJzaXN0ZW5jZSIsInBlcnNpc3RlbmNlSGllcmFyY2h5IiwiYXZhaWxhYmxlUGVyc2lzdGVuY2VzIiwiYWxsIiwic2VsZWN0ZWRQZXJzaXN0ZW5jZSIsInVzZXJUb01pZ3JhdGUiLCJtaWdyYXRpb25IaWVyYXJjaHkiLCJwIiwiX3Nob3VsZEFsbG93TWlncmF0aW9uIiwiX2dldEJyb3dzZXJOYW1lIiwidXNlckFnZW50IiwidWEiLCJfaXNJRU1vYmlsZSIsIl9pc0ZpcmVmb3giLCJfaXNCbGFja0JlcnJ5IiwiX2lzV2ViT1MiLCJfaXNTYWZhcmkiLCJfaXNDaHJvbWVJT1MiLCJfaXNBbmRyb2lkIiwicmUiLCJtYXRjaGVzIiwibWF0Y2giLCJnZXRVQSIsInRlc3QiLCJfaXNJT1MiLCJfaXNJT1M3T3I4IiwiX2lzSU9TU3RhbmRhbG9uZSIsIndpbmRvdyIsInN0YW5kYWxvbmUiLCJfaXNJRTEwIiwiaXNJRSIsImRvY3VtZW50IiwiZG9jdW1lbnRNb2RlIiwiX2lzTW9iaWxlQnJvd3NlciIsIl9nZXRDbGllbnRWZXJzaW9uIiwiY2xpZW50UGxhdGZvcm0iLCJmcmFtZXdvcmtzIiwicmVwb3J0ZWRQbGF0Zm9ybSIsInJlcG9ydGVkRnJhbWV3b3JrcyIsImpvaW4iLCJBdXRoTWlkZGxld2FyZVF1ZXVlIiwicXVldWUiLCJwdXNoQ2FsbGJhY2siLCJvbkFib3J0Iiwid3JhcHBlZENhbGxiYWNrIiwicmVzb2x2ZSIsInJlc3VsdCIsInB1c2giLCJpbmRleCIsInJ1bk1pZGRsZXdhcmUiLCJuZXh0VXNlciIsIm9uQWJvcnRTdGFjayIsImJlZm9yZVN0YXRlQ2FsbGJhY2siLCJyZXZlcnNlIiwib3JpZ2luYWxNZXNzYWdlIiwiX2dldFBhc3N3b3JkUG9saWN5IiwiTUlOSU1VTV9NSU5fUEFTU1dPUkRfTEVOR1RIIiwiUGFzc3dvcmRQb2xpY3lJbXBsIiwicmVzcG9uc2VPcHRpb25zIiwiY3VzdG9tU3RyZW5ndGhPcHRpb25zIiwibWluUGFzc3dvcmRMZW5ndGgiLCJtYXhQYXNzd29yZExlbmd0aCIsImNvbnRhaW5zTG93ZXJjYXNlQ2hhcmFjdGVyIiwiY29udGFpbnNMb3dlcmNhc2VMZXR0ZXIiLCJjb250YWluc1VwcGVyY2FzZUNoYXJhY3RlciIsImNvbnRhaW5zVXBwZXJjYXNlTGV0dGVyIiwiY29udGFpbnNOdW1lcmljQ2hhcmFjdGVyIiwiY29udGFpbnNOb25BbHBoYW51bWVyaWNDaGFyYWN0ZXIiLCJhbGxvd2VkTm9uQWxwaGFudW1lcmljQ2hhcmFjdGVycyIsImZvcmNlVXBncmFkZU9uU2lnbmluIiwic2NoZW1hVmVyc2lvbiIsInBhc3N3b3JkIiwic3RhdHVzIiwiaXNWYWxpZCIsInBhc3N3b3JkUG9saWN5IiwidmFsaWRhdGVQYXNzd29yZExlbmd0aE9wdGlvbnMiLCJ2YWxpZGF0ZVBhc3N3b3JkQ2hhcmFjdGVyT3B0aW9ucyIsIm1lZXRzTWluUGFzc3dvcmRMZW5ndGgiLCJtZWV0c01heFBhc3N3b3JkTGVuZ3RoIiwidXBkYXRlUGFzc3dvcmRDaGFyYWN0ZXJPcHRpb25zU3RhdHVzZXMiLCJwYXNzd29yZENoYXIiLCJpIiwiY2hhckF0IiwiQXV0aEltcGwiLCJoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXIiLCJhcHBDaGVja1NlcnZpY2VQcm92aWRlciIsImVtdWxhdG9yQ29uZmlnIiwib3BlcmF0aW9ucyIsImF1dGhTdGF0ZVN1YnNjcmlwdGlvbiIsIlN1YnNjcmlwdGlvbiIsImlkVG9rZW5TdWJzY3JpcHRpb24iLCJiZWZvcmVTdGF0ZVF1ZXVlIiwicmVkaXJlY3RVc2VyIiwiaXNQcm9hY3RpdmVSZWZyZXNoRW5hYmxlZCIsIkVYUEVDVEVEX1BBU1NXT1JEX1BPTElDWV9TQ0hFTUFfVkVSU0lPTiIsIl9pc0luaXRpYWxpemVkIiwiX2RlbGV0ZWQiLCJfaW5pdGlhbGl6YXRpb25Qcm9taXNlIiwiX3BvcHVwUmVkaXJlY3RSZXNvbHZlciIsIl9hZ2VudFJlY2FwdGNoYUNvbmZpZyIsIl90ZW5hbnRSZWNhcHRjaGFDb25maWdzIiwiX3Byb2plY3RQYXNzd29yZFBvbGljeSIsIl90ZW5hbnRQYXNzd29yZFBvbGljaWVzIiwiX3Jlc29sdmVQZXJzaXN0ZW5jZU1hbmFnZXJBdmFpbGFibGUiLCJsYXN0Tm90aWZpZWRVaWQiLCJzZXR0aW5ncyIsImFwcFZlcmlmaWNhdGlvbkRpc2FibGVkRm9yVGVzdGluZyIsImNsaWVudFZlcnNpb24iLCJzZGtDbGllbnRWZXJzaW9uIiwiX2luaXRpYWxpemVXaXRoUGVyc2lzdGVuY2UiLCJwb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJwZXJzaXN0ZW5jZU1hbmFnZXIiLCJjYWxsIiwiX3Nob3VsZEluaXRQcm9hY3RpdmVseSIsIl9pbml0aWFsaXplIiwiaW5pdGlhbGl6ZUN1cnJlbnRVc2VyIiwiYXNzZXJ0ZWRQZXJzaXN0ZW5jZSIsIl9jdXJyZW50VXNlciIsIl91cGRhdGVDdXJyZW50VXNlciIsImluaXRpYWxpemVDdXJyZW50VXNlckZyb21JZFRva2VuIiwiZGlyZWN0bHlTZXRDdXJyZW50VXNlciIsImVyciIsImNvbnNvbGUiLCJhdXRoSWRUb2tlbiIsInRoZW4iLCJwcmV2aW91c2x5U3RvcmVkVXNlciIsImZ1dHVyZUN1cnJlbnRVc2VyIiwibmVlZHNUb2NoZWNrTWlkZGxld2FyZSIsImF1dGhEb21haW4iLCJnZXRPckluaXRSZWRpcmVjdFBlcnNpc3RlbmNlTWFuYWdlciIsInJlZGlyZWN0VXNlckV2ZW50SWQiLCJzdG9yZWRVc2VyRXZlbnRJZCIsInRyeVJlZGlyZWN0U2lnbkluIiwiX292ZXJyaWRlUmVkaXJlY3RSZXN1bHQiLCJyZWxvYWRBbmRTZXRDdXJyZW50VXNlck9yQ2xlYXIiLCJyZWRpcmVjdFJlc29sdmVyIiwiX2NvbXBsZXRlUmVkaXJlY3RGbiIsIl9zZXRSZWRpcmVjdFVzZXIiLCJfZGVsZXRlIiwidXNlckV4dGVybiIsInNraXBCZWZvcmVTdGF0ZUNhbGxiYWNrcyIsIm5vdGlmeUF1dGhMaXN0ZW5lcnMiLCJyZWRpcmVjdFBlcnNpc3RlbmNlTWFuYWdlciIsIl9nZXRSZWNhcHRjaGFDb25maWciLCJfZ2V0UGFzc3dvcmRQb2xpY3lJbnRlcm5hbCIsIl91cGRhdGVQYXNzd29yZFBvbGljeSIsIl91cGRhdGVFcnJvck1hcCIsIm5leHRPck9ic2VydmVyIiwiY29tcGxldGVkIiwicmVnaXN0ZXJTdGF0ZUxpc3RlbmVyIiwiYXV0aFN0YXRlUmVhZHkiLCJ1bnN1YnNjcmliZSIsInRva2VuVHlwZSIsInJlZGlyZWN0TWFuYWdlciIsInJlc29sdmVyIiwiX3JlZGlyZWN0UGVyc2lzdGVuY2UiLCJfcmVkaXJlY3RVc2VyRm9ySWQiLCJpZCIsIm5leHQiLCJjdXJyZW50VWlkIiwic3Vic2NyaXB0aW9uIiwiY2IiLCJpc1Vuc3Vic2NyaWJlZCIsImFkZE9ic2VydmVyIiwiYWN0aW9uIiwiX2xvZ0ZyYW1ld29yayIsImZyYW1ld29yayIsInNvcnQiLCJfZ2V0RnJhbWV3b3JrcyIsIm9wdGlvbnMiLCJhcHBJZCIsImhlYXJ0YmVhdHNIZWFkZXIiLCJnZXRJbW1lZGlhdGUiLCJvcHRpb25hbCIsImdldEhlYXJ0YmVhdHNIZWFkZXIiLCJhcHBDaGVja1Rva2VuIiwiX2dldEFwcENoZWNrVG9rZW4iLCJhcHBDaGVja1Rva2VuUmVzdWx0IiwiX2Nhc3RBdXRoIiwib2JzZXJ2ZXIiLCJjcmVhdGVTdWJzY3JpYmUiLCJleHRlcm5hbEpTUHJvdmlkZXIiLCJsb2FkSlMiLCJyZWNhcHRjaGFWMlNjcmlwdCIsInJlY2FwdGNoYUVudGVycHJpc2VTY3JpcHQiLCJnYXBpU2NyaXB0IiwiX3NldEV4dGVybmFsSlNQcm92aWRlciIsIl9sb2FkSlMiLCJfcmVjYXB0Y2hhVjJTY3JpcHRVcmwiLCJfcmVjYXB0Y2hhRW50ZXJwcmlzZVNjcmlwdFVybCIsIl9nYXBpU2NyaXB0VXJsIiwiX2dlbmVyYXRlQ2FsbGJhY2tOYW1lIiwicHJlZml4IiwiZmxvb3IiLCJyYW5kb20iLCJfU09MVkVfVElNRV9NUyIsIl9FWFBJUkFUSU9OX1RJTUVfTVMiLCJfV0lER0VUX0lEX1NUQVJUIiwiTW9ja1JlQ2FwdGNoYSIsImNvdW50ZXIiLCJfd2lkZ2V0cyIsInJlbmRlciIsImNvbnRhaW5lciIsInBhcmFtZXRlcnMiLCJNb2NrV2lkZ2V0IiwicmVzZXQiLCJvcHRXaWRnZXRJZCIsImV4ZWN1dGUiLCJNb2NrR3JlQ0FQVENIQVRvcExldmVsIiwiTW9ja0dyZUNBUFRDSEEiLCJyZWFkeSIsIl9zaXRlS2V5IiwiX29wdGlvbnMiLCJfY29udGFpbmVyIiwiX3BhcmFtZXRlcnMiLCJjb250YWluZXJPcklkIiwiZGVsZXRlZCIsInJlc3BvbnNlVG9rZW4iLCJjbGlja0hhbmRsZXIiLCJnZXRFbGVtZW50QnlJZCIsImlzVmlzaWJsZSIsInNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hlY2tJZkRlbGV0ZWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2VuZXJhdGVSYW5kb21BbHBoYU51bWVyaWNTdHJpbmciLCJleHBpcmVkQ2FsbGJhY2siLCJsZW4iLCJjaGFycyIsImFsbG93ZWRDaGFycyIsIlJFQ0FQVENIQV9FTlRFUlBSSVNFX1ZFUklGSUVSX1RZUEUiLCJGQUtFX1RPS0VOIiwiUmVjYXB0Y2hhRW50ZXJwcmlzZVZlcmlmaWVyIiwiYXV0aEV4dGVybiIsInZlcmlmeSIsInJldHJpZXZlU2l0ZUtleSIsImNsaWVudFR5cGUiLCJ2ZXJzaW9uIiwicmV0cmlldmVSZWNhcHRjaGFUb2tlbiIsIm1vY2tSZWNhcHRjaGEiLCJpbmplY3RSZWNhcHRjaGFGaWVsZHMiLCJpc0NhcHRjaGFSZXNwIiwiaXNGYWtlVG9rZW4iLCJ2ZXJpZmllciIsImNhcHRjaGFSZXNwb25zZSIsIm5ld1JlcXVlc3QiLCJwaG9uZUVucm9sbG1lbnRJbmZvIiwicmVjYXB0Y2hhVG9rZW4iLCJwaG9uZVNpZ25JbkluZm8iLCJoYW5kbGVSZWNhcHRjaGFGbG93IiwiYXV0aEluc3RhbmNlIiwiYWN0aW9uTmFtZSIsImFjdGlvbk1ldGhvZCIsInJlY2FwdGNoYUF1dGhQcm92aWRlciIsInJlcXVlc3RXaXRoUmVjYXB0Y2hhIiwibG9nIiwiX2EyIiwicmVxdWVzdFdpdGhSZWNhcHRjaGFGaWVsZHMiLCJfaW5pdGlhbGl6ZVJlY2FwdGNoYUNvbmZpZyIsImRlcHMiLCJfZ2V0UHJvdmlkZXIiLCJpc0luaXRpYWxpemVkIiwiYXV0aDIiLCJpbml0aWFsT3B0aW9ucyIsImdldE9wdGlvbnMiLCJkZWVwRXF1YWwiLCJfaW5pdGlhbGl6ZUF1dGhJbnN0YW5jZSIsImhpZXJhcmNoeSIsImRpc2FibGVXYXJuaW5ncyIsImV4dHJhY3RQcm90b2NvbCIsInBvcnQiLCJleHRyYWN0SG9zdEFuZFBvcnQiLCJwb3J0U3RyIiwiZnJlZXplIiwiZW1pdEVtdWxhdG9yV2FybmluZyIsInByb3RvY29sRW5kIiwiaW5kZXhPZiIsInN1YnN0ciIsImF1dGhvcml0eSIsImV4ZWMiLCJob3N0QW5kUG9ydCIsInBvcCIsImJyYWNrZXRlZElQdjYiLCJwYXJzZVBvcnQiLCJhdHRhY2hCYW5uZXIiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJzdHkiLCJzdHlsZSIsImlubmVyVGV4dCIsInBvc2l0aW9uIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJjb2xvciIsImJvdHRvbSIsImxlZnQiLCJtYXJnaW4iLCJ6SW5kZXgiLCJ0ZXh0QWxpZ24iLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImluZm8iLCJyZWFkeVN0YXRlIiwic2lnbkluTWV0aG9kIiwiX2dldElkVG9rZW5SZXNwb25zZSIsIl9hdXRoIiwiX2xpbmtUb0lkVG9rZW4iLCJfaWRUb2tlbiIsIl9nZXRSZWF1dGhlbnRpY2F0aW9uUmVzb2x2ZXIiLCJyZXNldFBhc3N3b3JkIiwidXBkYXRlRW1haWxQYXNzd29yZCIsImxpbmtFbWFpbFBhc3N3b3JkIiwiYXBwbHlBY3Rpb25Db2RlJDEiLCJzaWduSW5XaXRoUGFzc3dvcmQiLCJzZW5kT29iQ29kZSIsInNlbmRFbWFpbFZlcmlmaWNhdGlvbiQxIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCQxIiwic2VuZFNpZ25JbkxpbmtUb0VtYWlsJDEiLCJ2ZXJpZnlBbmRDaGFuZ2VFbWFpbCIsInNpZ25JbldpdGhFbWFpbExpbmskMSIsInNpZ25JbldpdGhFbWFpbExpbmtGb3JMaW5raW5nIiwiX2VtYWlsIiwiX3Bhc3N3b3JkIiwiX3RlbmFudElkIiwiX2Zyb21FbWFpbEFuZFBhc3N3b3JkIiwiX2Zyb21FbWFpbEFuZENvZGUiLCJvb2JDb2RlIiwib2JqIiwicmV0dXJuU2VjdXJlVG9rZW4iLCJzaWduSW5XaXRoSWRwIiwiSURQX1JFUVVFU1RfVVJJJDEiLCJwZW5kaW5nVG9rZW4iLCJfZnJvbVBhcmFtcyIsImNyZWQiLCJub25jZSIsIm9hdXRoVG9rZW4iLCJvYXV0aFRva2VuU2VjcmV0Iiwic2VjcmV0IiwiYnVpbGRSZXF1ZXN0IiwiYXV0b0NyZWF0ZSIsInJlcXVlc3RVcmkiLCJwb3N0Qm9keSIsInNlbmRQaG9uZVZlcmlmaWNhdGlvbkNvZGUiLCJzaWduSW5XaXRoUGhvbmVOdW1iZXIkMSIsImxpbmtXaXRoUGhvbmVOdW1iZXIkMSIsInRlbXBvcmFyeVByb29mIiwiVkVSSUZZX1BIT05FX05VTUJFUl9GT1JfRVhJU1RJTkdfRVJST1JfTUFQXyIsInZlcmlmeVBob25lTnVtYmVyRm9yRXhpc3RpbmciLCJhcGlSZXF1ZXN0Iiwib3BlcmF0aW9uIiwiX2Zyb21WZXJpZmljYXRpb24iLCJ2ZXJpZmljYXRpb25JZCIsInZlcmlmaWNhdGlvbkNvZGUiLCJfZnJvbVRva2VuUmVzcG9uc2UiLCJfbWFrZVZlcmlmaWNhdGlvblJlcXVlc3QiLCJzZXNzaW9uSW5mbyIsInBhcnNlTW9kZSIsIm1vZGUiLCJwYXJzZURlZXBMaW5rIiwibGluayIsInF1ZXJ5c3RyaW5nRGVjb2RlIiwiZXh0cmFjdFF1ZXJ5c3RyaW5nIiwiZG91YmxlRGVlcExpbmsiLCJpT1NEZWVwTGluayIsImlPU0RvdWJsZURlZXBMaW5rIiwiYWN0aW9uTGluayIsInNlYXJjaFBhcmFtcyIsImNvbnRpbnVlVXJsIiwicGFyc2VMaW5rIiwiUFJPVklERVJfSUQiLCJjcmVkZW50aWFsIiwiY3JlZGVudGlhbFdpdGhMaW5rIiwiZW1haWxMaW5rIiwiYWN0aW9uQ29kZVVybCIsIkVNQUlMX1BBU1NXT1JEX1NJR05fSU5fTUVUSE9EIiwiRU1BSUxfTElOS19TSUdOX0lOX01FVEhPRCIsIkZlZGVyYXRlZEF1dGhQcm92aWRlciIsImRlZmF1bHRMYW5ndWFnZUNvZGUiLCJjdXN0b21QYXJhbWV0ZXJzIiwic2V0RGVmYXVsdExhbmd1YWdlIiwic2V0Q3VzdG9tUGFyYW1ldGVycyIsImN1c3RvbU9BdXRoUGFyYW1ldGVycyIsImdldEN1c3RvbVBhcmFtZXRlcnMiLCJCYXNlT0F1dGhQcm92aWRlciIsInNjb3BlcyIsImFkZFNjb3BlIiwic2NvcGUiLCJnZXRTY29wZXMiLCJjcmVkZW50aWFsRnJvbUpTT04iLCJfY3JlZGVudGlhbCIsInJhd05vbmNlIiwiY3JlZGVudGlhbEZyb21SZXN1bHQiLCJ1c2VyQ3JlZGVudGlhbCIsIm9hdXRoQ3JlZGVudGlhbEZyb21UYWdnZWRPYmplY3QiLCJjcmVkZW50aWFsRnJvbUVycm9yIiwidG9rZW5SZXNwb25zZSIsIm9hdXRoSWRUb2tlbiIsIm9hdXRoQWNjZXNzVG9rZW4iLCJGQUNFQk9PS19TSUdOX0lOX01FVEhPRCIsImNyZWRlbnRpYWxGcm9tVGFnZ2VkT2JqZWN0IiwiR09PR0xFX1NJR05fSU5fTUVUSE9EIiwiR0lUSFVCX1NJR05fSU5fTUVUSE9EIiwiSURQX1JFUVVFU1RfVVJJIiwiU0FNTEF1dGhDcmVkZW50aWFsIiwiX2NyZWF0ZSIsIlNBTUxfUFJPVklERVJfUFJFRklYIiwic2FtbENyZWRlbnRpYWxGcm9tVGFnZ2VkT2JqZWN0IiwiVFdJVFRFUl9TSUdOX0lOX01FVEhPRCIsInNpZ25VcCIsIlVzZXJDcmVkZW50aWFsSW1wbCIsIm9wZXJhdGlvblR5cGUiLCJwcm92aWRlcklkRm9yUmVzcG9uc2UiLCJ1c2VyQ3JlZCIsIl9mb3JPcGVyYXRpb24iLCJNdWx0aUZhY3RvckVycm9yIiwic2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJfZnJvbUVycm9yQW5kT3BlcmF0aW9uIiwiX3Byb2Nlc3NDcmVkZW50aWFsU2F2aW5nTWZhQ29udGV4dElmTmVjZXNzYXJ5IiwiaWRUb2tlblByb3ZpZGVyIiwicHJvdmlkZXJEYXRhQXNOYW1lcyIsIlNldCIsInBpZCIsIl9hc3NlcnRMaW5rZWRTdGF0dXMiLCJkZWxldGVQcm92aWRlciIsInByb3ZpZGVyc0xlZnQiLCJwZCIsImhhcyIsIl9saW5rJDEiLCJleHBlY3RlZCIsInByb3ZpZGVySWRzIiwiX3JlYXV0aGVudGljYXRlIiwicGFyc2VkIiwic3ViIiwiX3NpZ25JbldpdGhDcmVkZW50aWFsIiwic2lnbkluV2l0aEN1c3RvbVRva2VuJDEiLCJjdXN0b21Ub2tlbiIsIk11bHRpRmFjdG9ySW5mb0ltcGwiLCJmYWN0b3JJZCIsIm1mYUVucm9sbG1lbnRJZCIsImVucm9sbG1lbnRUaW1lIiwiZW5yb2xsZWRBdCIsIl9mcm9tU2VydmVyUmVzcG9uc2UiLCJlbnJvbGxtZW50IiwiUGhvbmVNdWx0aUZhY3RvckluZm9JbXBsIiwiVG90cE11bHRpRmFjdG9ySW5mb0ltcGwiLCJwaG9uZUluZm8iLCJfc2V0QWN0aW9uQ29kZVNldHRpbmdzT25SZXF1ZXN0IiwiYWN0aW9uQ29kZVNldHRpbmdzIiwiZHluYW1pY0xpbmtEb21haW4iLCJsaW5rRG9tYWluIiwiY2FuSGFuZGxlQ29kZUluQXBwIiwiaGFuZGxlQ29kZUluQXBwIiwiaU9TIiwiYnVuZGxlSWQiLCJpT1NCdW5kbGVJZCIsImFuZHJvaWQiLCJwYWNrYWdlTmFtZSIsImFuZHJvaWRJbnN0YWxsQXBwIiwiaW5zdGFsbEFwcCIsImFuZHJvaWRNaW5pbXVtVmVyc2lvbkNvZGUiLCJtaW5pbXVtVmVyc2lvbiIsImFuZHJvaWRQYWNrYWdlTmFtZSIsInJlY2FjaGVQYXNzd29yZFBvbGljeSIsInJlcXVlc3RUeXBlIiwibmV3UGFzc3dvcmQiLCJhdXRoTW9kdWxhciIsIm5ld0VtYWlsIiwibWZhSW5mbyIsIm11bHRpRmFjdG9ySW5mbyIsImRhdGEiLCJwcmV2aW91c0VtYWlsIiwic2lnblVwUmVzcG9uc2UiLCJzZXRBY3Rpb25Db2RlU2V0dGluZ3MiLCJyZXF1ZXN0MiIsImFjdGlvbkNvZGVTZXR0aW5nczIiLCJjcmVhdGVBdXRoVXJpIiwiY29udGludWVVcmkiLCJpZGVudGlmaWVyIiwic2lnbmluTWV0aG9kcyIsInVwZGF0ZVByb2ZpbGUkMSIsInByb2ZpbGVSZXF1ZXN0IiwicGFzc3dvcmRQcm92aWRlciIsImZpbmQiLCJ1cGRhdGVFbWFpbE9yUGFzc3dvcmQiLCJwcm9maWxlIiwicmF3VXNlckluZm8iLCJpc05ld1VzZXIiLCJraW5kIiwiZmlsdGVyZWRQcm92aWRlcklkIiwiR2VuZXJpY0FkZGl0aW9uYWxVc2VySW5mbyIsIkZhY2Vib29rQWRkaXRpb25hbFVzZXJJbmZvIiwiR2l0aHViQWRkaXRpb25hbFVzZXJJbmZvIiwiR29vZ2xlQWRkaXRpb25hbFVzZXJJbmZvIiwiVHdpdHRlckFkZGl0aW9uYWxVc2VySW5mbyIsInNjcmVlbk5hbWUiLCJGZWRlcmF0ZWRBZGRpdGlvbmFsVXNlckluZm9XaXRoVXNlcm5hbWUiLCJ1c2VybmFtZSIsImxvZ2luIiwiTXVsdGlGYWN0b3JTZXNzaW9uSW1wbCIsIl9mcm9tSWR0b2tlbiIsIl9mcm9tTWZhUGVuZGluZ0NyZWRlbnRpYWwiLCJtZmFQZW5kaW5nQ3JlZGVudGlhbCIsIm11bHRpRmFjdG9yU2Vzc2lvbiIsInBlbmRpbmdDcmVkZW50aWFsIiwiTXVsdGlGYWN0b3JSZXNvbHZlckltcGwiLCJzZXNzaW9uIiwiaGludHMiLCJzaWduSW5SZXNvbHZlciIsIl9mcm9tRXJyb3IiLCJtZmFSZXNwb25zZSIsIl9wcm9jZXNzIiwicmVzb2x2ZVNpZ25JbiIsImFzc2VydGlvbkV4dGVybiIsImVycm9ySW50ZXJuYWwiLCJzdGFydEVucm9sbFBob25lTWZhIiwiZmluYWxpemVFbnJvbGxQaG9uZU1mYSIsInN0YXJ0RW5yb2xsVG90cE1mYSIsImZpbmFsaXplRW5yb2xsVG90cE1mYSIsIndpdGhkcmF3TWZhIiwiTXVsdGlGYWN0b3JVc2VySW1wbCIsImVucm9sbGVkRmFjdG9ycyIsIl9mcm9tVXNlciIsImdldFNlc3Npb24iLCJlbnJvbGwiLCJmaW5hbGl6ZU1mYVJlc3BvbnNlIiwidW5lbnJvbGwiLCJpbmZvT3JVaWQiLCJtdWx0aUZhY3RvclVzZXJDYWNoZSIsIldlYWtNYXAiLCJ1c2VyTW9kdWxhciIsIlNUT1JBR0VfQVZBSUxBQkxFX0tFWSIsIkJyb3dzZXJQZXJzaXN0ZW5jZUNsYXNzIiwic3RvcmFnZVJldHJpZXZlciIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiZ2V0SXRlbSIsIl9QT0xMSU5HX0lOVEVSVkFMX01TJDEiLCJJRTEwX0xPQ0FMX1NUT1JBR0VfU1lOQ19ERUxBWSIsIkJyb3dzZXJMb2NhbFBlcnNpc3RlbmNlIiwibG9jYWxTdG9yYWdlIiwiZXZlbnQiLCJwb2xsIiwib25TdG9yYWdlRXZlbnQiLCJsaXN0ZW5lcnMiLCJsb2NhbENhY2hlIiwicG9sbFRpbWVyIiwiZmFsbGJhY2tUb1BvbGxpbmciLCJmb3JBbGxDaGFuZ2VkS2V5cyIsImtleXMiLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwia2V5MiIsIl9vbGRWYWx1ZSIsIm5vdGlmeUxpc3RlbmVycyIsImRldGFjaExpc3RlbmVyIiwic3RvcFBvbGxpbmciLCJ0cmlnZ2VyTGlzdGVuZXJzIiwic3RvcmVkVmFsdWUyIiwic3RvcmVkVmFsdWUiLCJsaXN0ZW5lciIsImZyb20iLCJzdGFydFBvbGxpbmciLCJzZXRJbnRlcnZhbCIsIlN0b3JhZ2VFdmVudCIsImNsZWFySW50ZXJ2YWwiLCJhdHRhY2hMaXN0ZW5lciIsIlBPTExJTkdfSU5URVJWQUxfTVMiLCJnZXREb2N1bWVudENvb2tpZSIsImVzY2FwZWROYW1lIiwibWF0Y2hlciIsIlJlZ0V4cCIsImNvb2tpZSIsImdldENvb2tpZU5hbWUiLCJpc0Rldk1vZGUiLCJDb29raWVQZXJzaXN0ZW5jZSIsImxpc3RlbmVyVW5zdWJzY3JpYmVzIiwib3JpZ2luYWxVcmwiLCJVUkwiLCJvcmlnaW4iLCJpc1NlY3VyZUNvbnRleHQiLCJjb29raWVFbmFibGVkIiwiX3ZhbHVlIiwiY29va2llU3RvcmUiLCJleGlzdGluZ1ZhbHVlIiwiY2hhbmdlZENvb2tpZSIsImNoYW5nZWQiLCJjaGFuZ2UiLCJkZWxldGVkQ29va2llIiwidW5zdWJzY3JpYmUyIiwibGFzdFZhbHVlIiwiY3VycmVudFZhbHVlIiwiQnJvd3NlclNlc3Npb25QZXJzaXN0ZW5jZSIsInNlc3Npb25TdG9yYWdlIiwiX2FsbFNldHRsZWQiLCJwcm9taXNlcyIsImZ1bGZpbGxlZCIsInJlYXNvbiIsIlJlY2VpdmVyIiwiZXZlbnRUYXJnZXQiLCJoYW5kbGVyc01hcCIsImhhbmRsZUV2ZW50IiwiZXhpc3RpbmdJbnN0YW5jZSIsInJlY2VpdmVycyIsInJlY2VpdmVyIiwiaXNMaXN0ZW5pbmd0byIsIm5ld0luc3RhbmNlIiwibWVzc2FnZUV2ZW50IiwiZXZlbnRJZCIsImV2ZW50VHlwZSIsImhhbmRsZXJzIiwicG9ydHMiLCJwb3N0TWVzc2FnZSIsImhhbmRsZXIiLCJfc3Vic2NyaWJlIiwiZXZlbnRIYW5kbGVyIiwiX3Vuc3Vic2NyaWJlIiwiX2dlbmVyYXRlRXZlbnRJZCIsImRpZ2l0cyIsIlNlbmRlciIsInRhcmdldCIsInJlbW92ZU1lc3NhZ2VIYW5kbGVyIiwibWVzc2FnZUNoYW5uZWwiLCJwb3J0MSIsIm9uTWVzc2FnZSIsImNsb3NlIiwiX3NlbmQiLCJ0aW1lb3V0IiwiTWVzc2FnZUNoYW5uZWwiLCJjb21wbGV0aW9uVGltZXIiLCJzdGFydCIsImFja1RpbWVyIiwicG9ydDIiLCJmaW5hbGx5IiwiX3dpbmRvdyIsIl9zZXRXaW5kb3dMb2NhdGlvbiIsIl9pc1dvcmtlciIsIl9nZXRBY3RpdmVTZXJ2aWNlV29ya2VyIiwic2VydmljZVdvcmtlciIsInJlZ2lzdHJhdGlvbiIsImFjdGl2ZSIsIl9nZXRTZXJ2aWNlV29ya2VyQ29udHJvbGxlciIsImNvbnRyb2xsZXIiLCJfZ2V0V29ya2VyR2xvYmFsU2NvcGUiLCJEQl9OQU1FIiwiREJfVkVSU0lPTiIsIkRCX09CSkVDVFNUT1JFX05BTUUiLCJEQl9EQVRBX0tFWVBBVEgiLCJEQlByb21pc2UiLCJ0b1Byb21pc2UiLCJnZXRPYmplY3RTdG9yZSIsImRiIiwiaXNSZWFkV3JpdGUiLCJ0cmFuc2FjdGlvbiIsIm9iamVjdFN0b3JlIiwiX2RlbGV0ZURhdGFiYXNlIiwiaW5kZXhlZERCIiwiZGVsZXRlRGF0YWJhc2UiLCJfb3BlbkRhdGFiYXNlIiwib3BlbiIsImNyZWF0ZU9iamVjdFN0b3JlIiwia2V5UGF0aCIsIm9iamVjdFN0b3JlTmFtZXMiLCJjb250YWlucyIsIl9wdXRPYmplY3QiLCJwdXQiLCJnZXRPYmplY3QiLCJfZGVsZXRlT2JqZWN0IiwiX1BPTExJTkdfSU5URVJWQUxfTVMiLCJfVFJBTlNBQ1RJT05fUkVUUllfQ09VTlQiLCJJbmRleGVkREJMb2NhbFBlcnNpc3RlbmNlIiwicGVuZGluZ1dyaXRlcyIsInNlbmRlciIsInNlcnZpY2VXb3JrZXJSZWNlaXZlckF2YWlsYWJsZSIsImFjdGl2ZVNlcnZpY2VXb3JrZXIiLCJfd29ya2VySW5pdGlhbGl6YXRpb25Qcm9taXNlIiwiaW5pdGlhbGl6ZVNlcnZpY2VXb3JrZXJNZXNzYWdpbmciLCJfb3BlbkRiIiwiX3dpdGhSZXRyaWVzIiwib3AiLCJudW1BdHRlbXB0cyIsImluaXRpYWxpemVSZWNlaXZlciIsImluaXRpYWxpemVTZW5kZXIiLCJfb3JpZ2luIiwiX3BvbGwiLCJrZXlQcm9jZXNzZWQiLCJfZGF0YSIsInJlc3VsdHMiLCJub3RpZnlTZXJ2aWNlV29ya2VyIiwiX3dpdGhQZW5kaW5nV3JpdGUiLCJ3cml0ZSIsImdldEFsbFJlcXVlc3QiLCJnZXRBbGwiLCJrZXlzSW5SZXN1bHQiLCJmYmFzZV9rZXkiLCJsb2NhbEtleSIsInN0YXJ0U2lnbkluUGhvbmVNZmEiLCJmaW5hbGl6ZVNpZ25JblBob25lTWZhIiwiZmluYWxpemVTaWduSW5Ub3RwTWZhIiwiX0pTTE9BRF9DQUxMQkFDSyIsIk5FVFdPUktfVElNRU9VVF9ERUxBWSIsIlJlQ2FwdGNoYUxvYWRlckltcGwiLCJob3N0TGFuZ3VhZ2UiLCJsaWJyYXJ5U2VwYXJhdGVseUxvYWRlZCIsImxvYWQiLCJobCIsImlzSG9zdExhbmd1YWdlVmFsaWQiLCJzaG91bGRSZXNvbHZlSW1tZWRpYXRlbHkiLCJyZWNhcHRjaGEiLCJ3aWRnZXRJZCIsIm9ubG9hZCIsImNsZWFyZWRPbmVJbnN0YW5jZSIsIk1vY2tSZUNhcHRjaGFMb2FkZXJJbXBsIiwiUkVDQVBUQ0hBX1ZFUklGSUVSX1RZUEUiLCJERUZBVUxUX1BBUkFNUyIsInRoZW1lIiwiZGVzdHJveWVkIiwidG9rZW5DaGFuZ2VMaXN0ZW5lcnMiLCJyZW5kZXJQcm9taXNlIiwiaXNJbnZpc2libGUiLCJtYWtlVG9rZW5DYWxsYmFjayIsIl9yZWNhcHRjaGFMb2FkZXIiLCJ2YWxpZGF0ZVN0YXJ0aW5nU3RhdGUiLCJhc3NlcnROb3REZXN0cm95ZWQiLCJnZXRBc3NlcnRlZFJlY2FwdGNoYSIsInRva2VuQ2hhbmdlIiwibWFrZVJlbmRlclByb21pc2UiLCJfcmVzZXQiLCJjbGVhciIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwibm9kZSIsInJlbW92ZUNoaWxkIiwic2l0ZWtleSIsImhhc0NoaWxkTm9kZXMiLCJleGlzdGluZyIsImdsb2JhbEZ1bmMiLCJpbml0IiwiZ3VhcmFudGVlZEVtcHR5IiwiZG9tUmVhZHkiLCJDb25maXJtYXRpb25SZXN1bHRJbXBsIiwib25Db25maXJtYXRpb24iLCJjb25maXJtIiwiYXV0aENyZWRlbnRpYWwiLCJhcHBWZXJpZmllciIsIl92ZXJpZnlQaG9uZU51bWJlciIsInBob25lSW5mb09wdGlvbnMiLCJzdGFydFBob25lTWZhRW5yb2xsbWVudFJlcXVlc3QiLCJzdGFydEVucm9sbFBob25lTWZhQWN0aW9uQ2FsbGJhY2siLCJyZXF1ZXN0V2l0aFJlY2FwdGNoYVYyIiwiaW5qZWN0UmVjYXB0Y2hhVjJUb2tlbiIsInN0YXJ0UGhvbmVNZmFFbnJvbGxtZW50UmVzcG9uc2UiLCJwaG9uZVNlc3Npb25JbmZvIiwibXVsdGlGYWN0b3JIaW50IiwibXVsdGlGYWN0b3JVaWQiLCJzdGFydFBob25lTWZhU2lnbkluUmVxdWVzdCIsInN0YXJ0U2lnbkluUGhvbmVNZmFBY3Rpb25DYWxsYmFjayIsInN0YXJ0UGhvbmVNZmFTaWduSW5SZXNwb25zZSIsInBob25lUmVzcG9uc2VJbmZvIiwic2VuZFBob25lVmVyaWZpY2F0aW9uQ29kZVJlcXVlc3QiLCJzZW5kUGhvbmVWZXJpZmljYXRpb25Db2RlQWN0aW9uQ2FsbGJhY2siLCJzZW5kUGhvbmVWZXJpZmljYXRpb25Db2RlUmVzcG9uc2UiLCJyZWNhcHRjaGFWMlZlcmlmaWVyIiwicmVjYXB0Y2hhVjJUb2tlbiIsInJlY2FwdGNoYVZlcnNpb24iLCJ2ZXJpZnlQaG9uZU51bWJlciIsInBob25lT3B0aW9ucyIsImFwcGxpY2F0aW9uVmVyaWZpZXIiLCJQSE9ORV9TSUdOX0lOX01FVEhPRCIsIl93aXRoRGVmYXVsdFJlc29sdmVyIiwicmVzb2x2ZXJPdmVycmlkZSIsIklkcENyZWRlbnRpYWwiLCJfYnVpbGRJZHBSZXF1ZXN0Iiwic2Vzc2lvbklkIiwicmV0dXJuSWRwQ3JlZGVudGlhbCIsIl9zaWduSW4iLCJfcmVhdXRoIiwiX2xpbmsiLCJBYnN0cmFjdFBvcHVwUmVkaXJlY3RPcGVyYXRpb24iLCJwZW5kaW5nUHJvbWlzZSIsImV2ZW50TWFuYWdlciIsIm9uRXhlY3V0aW9uIiwicmVnaXN0ZXJDb25zdW1lciIsIm9uQXV0aEV2ZW50IiwidXJsUmVzcG9uc2UiLCJnZXRJZHBUYXNrIiwib25FcnJvciIsInVucmVnaXN0ZXJBbmRDbGVhblVwIiwidW5yZWdpc3RlckNvbnN1bWVyIiwiY2xlYW5VcCIsIl9QT0xMX1dJTkRPV19DTE9TRV9USU1FT1VUIiwicmVzb2x2ZXJJbnRlcm5hbCIsIlBvcHVwT3BlcmF0aW9uIiwiZXhlY3V0ZU5vdE51bGwiLCJhdXRoV2luZG93IiwicG9sbElkIiwiY3VycmVudFBvcHVwQWN0aW9uIiwiY2FuY2VsIiwiX29wZW5Qb3B1cCIsImFzc29jaWF0ZWRFdmVudCIsIl9vcmlnaW5WYWxpZGF0aW9uIiwiX2lzSWZyYW1lV2ViU3RvcmFnZVN1cHBvcnRlZCIsImlzU3VwcG9ydGVkIiwicG9sbFVzZXJDYW5jZWxsYXRpb24iLCJjbG9zZWQiLCJQRU5ESU5HX1JFRElSRUNUX0tFWSIsInJlZGlyZWN0T3V0Y29tZU1hcCIsIlJlZGlyZWN0QWN0aW9uIiwicmVhZHlPdXRjb21lIiwiaGFzUGVuZGluZ1JlZGlyZWN0IiwiX2dldEFuZENsZWFyUGVuZGluZ1JlZGlyZWN0U3RhdHVzIiwicGVuZGluZ1JlZGlyZWN0S2V5IiwicmVzb2x2ZXJQZXJzaXN0ZW5jZSIsIl9zZXRQZW5kaW5nUmVkaXJlY3RTdGF0dXMiLCJfY2xlYXJSZWRpcmVjdE91dGNvbWVzIiwiX3NpZ25JbldpdGhSZWRpcmVjdCIsIl9vcGVuUmVkaXJlY3QiLCJfcmVhdXRoZW50aWNhdGVXaXRoUmVkaXJlY3QiLCJwcmVwYXJlVXNlckZvclJlZGlyZWN0IiwiX2xpbmtXaXRoUmVkaXJlY3QiLCJfZ2V0UmVkaXJlY3RSZXN1bHQiLCJyZXNvbHZlckV4dGVybiIsIkVWRU5UX0RVUExJQ0FUSU9OX0NBQ0hFX0RVUkFUSU9OX01TIiwiQXV0aEV2ZW50TWFuYWdlciIsImNhY2hlZEV2ZW50VWlkcyIsImNvbnN1bWVycyIsInF1ZXVlZFJlZGlyZWN0RXZlbnQiLCJoYXNIYW5kbGVkUG90ZW50aWFsUmVkaXJlY3QiLCJsYXN0UHJvY2Vzc2VkRXZlbnRUaW1lIiwiYXV0aEV2ZW50Q29uc3VtZXIiLCJpc0V2ZW50Rm9yQ29uc3VtZXIiLCJzZW5kVG9Db25zdW1lciIsInNhdmVFdmVudFRvQ2FjaGUiLCJvbkV2ZW50IiwiaGFzRXZlbnRCZWVuSGFuZGxlZCIsImhhbmRsZWQiLCJjb25zdW1lciIsImlzUmVkaXJlY3RFdmVudCIsImlzTnVsbFJlZGlyZWN0RXZlbnQiLCJldmVudElkTWF0Y2hlcyIsImV2ZW50VWlkIiwidiIsIl9nZXRQcm9qZWN0Q29uZmlnIiwiSVBfQUREUkVTU19SRUdFWCIsIkhUVFBfUkVHRVgiLCJfdmFsaWRhdGVPcmlnaW4iLCJhdXRob3JpemVkRG9tYWlucyIsImRvbWFpbiIsIm1hdGNoRG9tYWluIiwiY3VycmVudFVybCIsImhvc3RuYW1lIiwiY2VVcmwiLCJlc2NhcGVkRG9tYWluUGF0dGVybiIsIk5FVFdPUktfVElNRU9VVCIsInJlc2V0VW5sb2FkZWRHYXBpTW9kdWxlcyIsImJlYWNvbiIsIl9fX2pzbCIsIkgiLCJoaW50IiwiciIsIkwiLCJDUCIsImxvYWRHYXBpIiwibG9hZEdhcGlJZnJhbWUiLCJnYXBpIiwiaWZyYW1lcyIsImdldENvbnRleHQiLCJvbnRpbWVvdXQiLCJJZnJhbWUiLCJjYk5hbWUiLCJjYWNoZWRHQXBpTG9hZGVyIiwiX2xvYWRHYXBpIiwiUElOR19USU1FT1VUIiwiSUZSQU1FX1BBVEgiLCJFTVVMQVRFRF9JRlJBTUVfUEFUSCIsIklGUkFNRV9BVFRSSUJVVEVTIiwidG9wIiwiaGVpZ2h0IiwidGFiaW5kZXgiLCJFSURfRlJPTV9BUElIT1NUIiwiZ2V0SWZyYW1lVXJsIiwiZWlkIiwiZnciLCJfb3BlbklmcmFtZSIsImNvbnRleHQiLCJnYXBpMiIsIndoZXJlIiwibWVzc2FnZUhhbmRsZXJzRmlsdGVyIiwiQ1JPU1NfT1JJR0lOX0lGUkFNRVNfRklMVEVSIiwiYXR0cmlidXRlcyIsImRvbnRjbGVhciIsImlmcmFtZSIsInJlc3R5bGUiLCJzZXRIaWRlT25MZWF2ZSIsIm5ldHdvcmtFcnJvciIsIm5ldHdvcmtFcnJvclRpbWVyIiwiY2xlYXJUaW1lckFuZFJlc29sdmUiLCJwaW5nIiwiQkFTRV9QT1BVUF9PUFRJT05TIiwicmVzaXphYmxlIiwic3RhdHVzYmFyIiwidG9vbGJhciIsIkRFRkFVTFRfV0lEVEgiLCJERUZBVUxUX0hFSUdIVCIsIlRBUkdFVF9CTEFOSyIsIkZJUkVGT1hfRU1QVFlfVVJMIiwiQXV0aFBvcHVwIiwid2luZG93MiIsIl9vcGVuIiwic2NyZWVuIiwiYXZhaWxIZWlnaHQiLCJhdmFpbFdpZHRoIiwic2Nyb2xsYmFycyIsIm9wdGlvbnNTdHJpbmciLCJlbnRyaWVzIiwicmVkdWNlIiwiYWNjdW0iLCJvcGVuQXNOZXdXaW5kb3dJT1MiLCJuZXdXaW4iLCJmb2N1cyIsImNsaWNrIiwiY3JlYXRlRXZlbnQiLCJpbml0TW91c2VFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJXSURHRVRfUEFUSCIsIkVNVUxBVE9SX1dJREdFVF9QQVRIIiwiRklSRUJBU0VfQVBQX0NIRUNLX0ZSQUdNRU5UX0lEIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiX2dldFJlZGlyZWN0VXJsIiwiYXV0aFR5cGUiLCJyZWRpcmVjdFVybCIsImFkZGl0aW9uYWxQYXJhbXMiLCJpc0VtcHR5IiwidGlkIiwicGFyYW1zRGljdCIsImFwcENoZWNrVG9rZW5GcmFnbWVudCIsImdldEhhbmRsZXJCYXNlIiwiV0VCX1NUT1JBR0VfU1VQUE9SVF9LRVkiLCJCcm93c2VyUG9wdXBSZWRpcmVjdFJlc29sdmVyIiwiZXZlbnRNYW5hZ2VycyIsIm9yaWdpblZhbGlkYXRpb25Qcm9taXNlcyIsInByb21pc2UyIiwiaW5pdEFuZEdldE1hbmFnZXIiLCJyZWdpc3RlciIsImlmcmFtZUV2ZW50IiwiYXV0aEV2ZW50Iiwic2VuZCIsIk11bHRpRmFjdG9yQXNzZXJ0aW9uSW1wbCIsIl9maW5hbGl6ZUVucm9sbCIsIl9maW5hbGl6ZVNpZ25JbiIsIlBob25lTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwiX2Zyb21DcmVkZW50aWFsIiwicGhvbmVWZXJpZmljYXRpb25JbmZvIiwiRkFDVE9SX0lEIiwiYXNzZXJ0aW9uRm9yRW5yb2xsbWVudCIsIm9uZVRpbWVQYXNzd29yZCIsIlRvdHBNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfZnJvbVNlY3JldCIsImFzc2VydGlvbkZvclNpZ25JbiIsImVucm9sbG1lbnRJZCIsIl9mcm9tRW5yb2xsbWVudElkIiwiZ2VuZXJhdGVTZWNyZXQiLCJtZmFTZXNzaW9uIiwidG90cEVucm9sbG1lbnRJbmZvIiwiX2Zyb21TdGFydFRvdHBNZmFFbnJvbGxtZW50UmVzcG9uc2UiLCJvdHAiLCJ0b3RwVmVyaWZpY2F0aW9uSW5mbyIsIl9tYWtlVG90cFZlcmlmaWNhdGlvbkluZm8iLCJzZWNyZXRLZXkiLCJoYXNoaW5nQWxnb3JpdGhtIiwiY29kZUxlbmd0aCIsImNvZGVJbnRlcnZhbFNlY29uZHMiLCJlbnJvbGxtZW50Q29tcGxldGlvbkRlYWRsaW5lIiwidG90cFNlc3Npb25JbmZvIiwic2hhcmVkU2VjcmV0S2V5IiwidmVyaWZpY2F0aW9uQ29kZUxlbmd0aCIsInBlcmlvZFNlYyIsImZpbmFsaXplRW5yb2xsbWVudFRpbWUiLCJnZW5lcmF0ZVFyQ29kZVVybCIsImFjY291bnROYW1lIiwiaXNzdWVyIiwidXNlRGVmYXVsdHMiLCJfaXNFbXB0eVN0cmluZyIsImlucHV0IiwiQXV0aEludGVyb3AiLCJpbnRlcm5hbExpc3RlbmVycyIsImdldFVpZCIsImFzc2VydEF1dGhDb25maWd1cmVkIiwiYWRkQXV0aFRva2VuTGlzdGVuZXIiLCJ1cGRhdGVQcm9hY3RpdmVSZWZyZXNoIiwicmVtb3ZlQXV0aFRva2VuTGlzdGVuZXIiLCJnZXRWZXJzaW9uRm9yUGxhdGZvcm0iLCJyZWdpc3RlckF1dGgiLCJfcmVnaXN0ZXJDb21wb25lbnQiLCJpbXBvcnRfY29tcG9uZW50IiwiQ29tcG9uZW50IiwiZ2V0UHJvdmlkZXIiLCJzZXRJbnN0YW50aWF0aW9uTW9kZSIsInNldEluc3RhbmNlQ3JlYXRlZENhbGxiYWNrIiwiX2luc3RhbmNlSWRlbnRpZmllciIsIl9pbnN0YW5jZSIsImF1dGhJbnRlcm5hbFByb3ZpZGVyIiwicmVnaXN0ZXJWZXJzaW9uIiwiREVGQVVMVF9JRF9UT0tFTl9NQVhfQUdFIiwiYXV0aElkVG9rZW5NYXhBZ2UiLCJnZXRFeHBlcmltZW50YWxTZXR0aW5nIiwibGFzdFBvc3RlZElkVG9rZW4iLCJtaW50Q29va2llRmFjdG9yeSIsImlkVG9rZW5SZXN1bHQiLCJpZFRva2VuQWdlIiwiZ2V0QXBwIiwiYXV0aFRva2VuU3luY1BhdGgiLCJhdXRoVG9rZW5TeW5jVXJsIiwibWludENvb2tpZSIsImF1dGhFbXVsYXRvckhvc3QiLCJnZXREZWZhdWx0RW11bGF0b3JIb3N0IiwiZ2V0U2NyaXB0UGFyZW50RWxlbWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2V0QXR0cmlidXRlIiwib25lcnJvciIsImNoYXJzZXQiLCJpbXBvcnRfYXBwMiIsInJlcXVpcmUiLCJpbXBvcnRfdXRpbDIiLCJpbXBvcnRfbG9nZ2VyMiIsImltcG9ydF90c2xpYjIiLCJpbXBvcnRfY29tcG9uZW50MiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsbUJBQUE7QUFBQUMsUUFBQSxDQUFBRCxtQkFBQTtFQUFBRSxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQywwQ0FBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGtCQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLHlCQUFBLEVBQUFBLENBQUEsS0FBQUEseUJBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLHdCQUFBLEVBQUFBLENBQUEsS0FBQUEsd0JBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxzQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHNCQUFBO0VBQUFDLHdCQUFBLEVBQUFBLENBQUEsS0FBQUEsd0JBQUE7RUFBQUMsdUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSx1QkFBQTtFQUFBQyw0QkFBQSxFQUFBQSxDQUFBLEtBQUFBLDRCQUFBO0VBQUFDLHlCQUFBLEVBQUFBLENBQUEsS0FBQUEseUJBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxtQkFBQSxF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QUNoRW5WLHNCQUFBLENBQXVCcU4sSUFBQSxFQUFNcTFDLFVBQUEsRUFBWSxNQUN2Q0EsVUFBQSxDQUFXcjFDLElBQUEsQ0FBS3NNLFdBQVcsQ0FBQztNQUU5QjlYLGdCQUFBLENBQWlCd0wsSUFBQSxFQUFNeUssSUFBQSxJQUFRNHFDLFVBQUEsQ0FBVzVxQyxJQUFJLENBQUM7OztFQUluRCxNQUFNNnFDLGdCQUFBLE9BQW1CdDlDLFdBQUEsQ0FBQXU5QyxzQkFBQSxFQUF1QixNQUFNO0VBQ3RELElBQUlELGdCQUFBLEVBQWtCO0lBQ3BCcGlELG1CQUFBLENBQW9COE0sSUFBQSxFQUFNLFVBQVVzMUMsZ0JBQUEsRUFBa0I7O0VBR3hELE9BQU90MUMsSUFBQTtBQUNUO0FBRUEsU0FBU3cxQyx1QkFBQSxFQUFzQjs7RUFDN0IsUUFBT3ppQyxFQUFBLElBQUFwUixFQUFBLEdBQUFrVyxRQUFBLENBQVM0OUIsb0JBQUEsQ0FBcUIsTUFBTSxPQUFJLFFBQUE5ekMsRUFBQSx1QkFBQUEsRUFBQSxTQUFFLFFBQUFvUixFQUFBLGNBQUFBLEVBQUEsR0FBSThFLFFBQUE7QUFDdkQ7QUFFQTJKLHNCQUFBLENBQXVCO0VBQ3JCSixPQUFPOWQsR0FBQSxFQUFXO0lBRWhCLE9BQU8sSUFBSTBDLE9BQUEsQ0FBUSxDQUFDMlMsT0FBQSxFQUFTdlEsTUFBQSxLQUFVO01BQ3JDLE1BQU11ZixFQUFBLEdBQUs5UCxRQUFBLENBQVMrUCxhQUFBLENBQWMsUUFBUTtNQUMxQ0QsRUFBQSxDQUFHK3RCLFlBQUEsQ0FBYSxPQUFPcHlDLEdBQUc7TUFDMUJxa0IsRUFBQSxDQUFHMmEsTUFBQSxHQUFTM3BCLE9BQUE7TUFDWmdQLEVBQUEsQ0FBR2d1QixPQUFBLEdBQVU3dUMsQ0FBQSxJQUFJO1FBQ2YsTUFBTXJILEtBQUEsR0FBUUssWUFBQSxDQUFZO1FBQzFCTCxLQUFBLENBQU1nSixVQUFBLEdBQWEzQixDQUFBO1FBQ25Cc0IsTUFBQSxDQUFPM0ksS0FBSztNQUNkO01BQ0Frb0IsRUFBQSxDQUFHeFQsSUFBQSxHQUFPO01BQ1Z3VCxFQUFBLENBQUdpdUIsT0FBQSxHQUFVO01BQ2JKLHNCQUFBLENBQXNCLEVBQUc1c0IsV0FBQSxDQUFZakIsRUFBRTtJQUN6QyxDQUFDOztFQUdIcEcsVUFBQSxFQUFZO0VBQ1pGLGlCQUFBLEVBQW1CO0VBQ25CQyx5QkFBQSxFQUNFO0FBQ0g7QUFFRDB5QixZQUFBLENBQVk7OztBQ2hKWixJQUFBNkIsV0FBQSxHQUFPQyxPQUFBO0FBQ1AsSUFBQUMsWUFBQSxHQUFPRCxPQUFBO0FBQ1AsSUFBQUUsY0FBQSxHQUFPRixPQUFBO0FBQ1AsSUFBQUcsYUFBQSxHQUFPSCxPQUFBO0FBQ1AsSUFBQUksaUJBQUEsR0FBT0osT0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=