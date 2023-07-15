//selfinvokedfunctions

let account = (function() {
    let bankbalance = function() {
        currentbalance = 1000;

        let deposite = function(depositeamount) {
            currentbalance = currentbalance + depositeamount;
            return `your currentbalance:${currentbalance}`;
        }
        let withdrawlamount = function(withdraw) {
            currentbalance = currentbalance - withdraw;
            return `your account balance afterwithdrawl ${currentbalance}`;

        }

        function getaccountbalance() {
            return currentbalance;
        }
        return { deposite, withdrawlamount, getaccountbalance };
    }
})();
account.getaccountbalance();

account.deposite(2000);
account.withdrawlamount(200);