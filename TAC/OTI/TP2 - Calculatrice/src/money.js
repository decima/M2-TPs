var Currencies = ["EUR", "CHF", "USD"];

Array.prototype.inArray = function (needle) {

    var length = this.length;
    for (var i = 0; i < length; i++) {
        if (this[i].toLowerCase() === needle.toLowerCase())
            return true;
    }
    return false;
};

var money = function (v, curr) {
    curr.trim();
    this.v = v;
    this.curr = curr;

    if (curr.length > 3)
        throw new DeviseFormatExc(this);
    if (!Currencies.inArray(curr))
        throw new DevisesNonAccepteesExc();
    if (v < 0)
        throw new ValeurNegativeExc(this);
}

money.prototype.getCurrency =
        function () {
            return this.curr;
        };

money.prototype.getValue =
        function () {
            return this.v;
        };

money.prototype.equals =
        function (otherM) {
            return (otherM.getValue() == this.getValue() && otherM.getCurrency().toLowerCase() == this.getCurrency().toLowerCase());
        };

money.prototype.toString =
        function () {
            return this.getValue() + " (" + this.getCurrency() + ")";
        };