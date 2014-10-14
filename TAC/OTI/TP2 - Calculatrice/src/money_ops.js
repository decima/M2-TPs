var MoneyOps = function () {
}
MoneyOps.unknownOp = function (operation, m1, m2) {
    throw new OperationInconnueExc(operation);
}

MoneyOps.add = function (m1, m2) {
    if (m1.getCurrency().toLowerCase() != m2.getCurrency().toLowerCase()) {
        window.alert("devises incompatibles!");
        throw new DevisesIncompatibleExc(m1, m2);
    }
    return new money(m1.getValue() + m2.getValue(), m1.getCurrency());
}

MoneyOps.sub = function (m1, m2) {
    if (m1.getCurrency().toLowerCase() != m2.getCurrency().toLowerCase()) {
        window.alert("devises incompatibles!");

        throw new DevisesIncompatibleExc(m1, m2);
    }

    if (m1.getValue() < m2.getValue()) {
        window.alert("Soustraction négative!!");

        throw new SoustractionNegativeExc(m1.getValue() - m2.getValue());
    }
    return new money(m1.getValue() - m2.getValue(), m1.getCurrency());
}