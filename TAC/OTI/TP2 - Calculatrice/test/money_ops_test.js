module("moneyOps", {
//	setup:function(){alert("setup moneyOps individual test");},
//	teardown:function(){alert("teardown moneyOps individual test");}
});


test("test simple add", 2, function () {
    var m1 = new money(1, "EUR");
    var m2 = new money(2, "EUR");
    var m3 = new money(3, "EUR");

    ok(m3.equals(MoneyOps.add(m1, m2)), "3e = 1e+2e");
    deepEqual(m3, MoneyOps.add(m1, m2), "3e = 1e+2e deepEqual");
});


test("test multi devise add", 1, function () {
    var m1 = new money(1, "EUR");
    var m2 = new money(2, "CHF");
    throws(function () {
        var m3 = MoneyOps.add(m1, m2)
    }, DevisesIncompatibleExc, "Devises Incompatibles");
});

test("test simple sub", 2, function ()
{
    var m1 = new money(2, "EUR");
    var m2 = new money(1, "EUR");
    var m3 = new money(1, "EUR");

    ok(m3.equals(MoneyOps.sub(m1, m2)), "1e = 2e-1e");
    deepEqual(m3, MoneyOps.sub(m1, m2), "3e = 1e+2e deepEqual");
}
);

test("test multi devise sub", 1, function ()
{
    var m1 = new money(2, "EUR");
    var m2 = new money(1, "CHF");

    throws(function () {
        var m3 = MoneyOps.sub(m1, m2)
    }, DevisesIncompatibleExc, "Devises Incompatibles");
}
);

test("test negative sub", 1, function ()
{
    var m1 = new money(1, "EUR");
    var m2 = new money(2, "EUR");
    throws(function () {
        var m3 = MoneyOps.sub(m1, m2)
    }, SoustractionNegativeExc, "Soustraction Negative");
}
);



test("test messages d'alerte", function () {
    window.alert = function (msg) {

        throw new AlertExc();
    };

    var m1 = new money(1, "CHF");
    var m2 = new money(2, "EUR");
    var m3 = new money(1, "EUR");

    throws(function () {
        MoneyOps.add(m1, m2)
    }, AlertExc, "alerte affichée (addition de deux devises différentes)");
    throws(function () {
        MoneyOps.sub(m1, m2)
    }, AlertExc, "alerte affichée (soustraction de deux devises différentes)");
    throws(function () {
        MoneyOps.sub(m3, m2)
    }, AlertExc, "alerte affichée (soustraction de deux nombres trop petits)");
});


test("operation interdite", function () {
    window.alert = function (msg) {

        throw new AlertExc();
    };

    var m1 = new money(1, "EUR");
    var m2 = new money(2, "EUR");

    throws(function () {
        MoneyOps.unknownOp("MULT", m1, m2);
    }, OperationInconnueExc, "alerte affichée (addition de deux devises différentes)");

});