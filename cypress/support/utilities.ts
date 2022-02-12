class util {
    get generateUniqueEmailID() {
        var emailID = "testemail@miro.com".split('@');
        var firstpart = emailID[0];
        firstpart = firstpart + new Date().getUTCMilliseconds();
        return firstpart + "@" + emailID[1]
    }
}
export default util