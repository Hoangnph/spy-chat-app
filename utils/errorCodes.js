export default function errorCodes(code) {
  switch (code) {
    case "auth/user-not-found":
      return "Không tìm thấy User";
    case "auth/wrong-password":
      return "Sai Password";
    default:
      return code;
  }
}
