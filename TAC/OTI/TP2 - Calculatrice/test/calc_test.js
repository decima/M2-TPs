module("calc", {
//	setup:function(){alert("setup moneyOps individual test");},
//	teardown:function(){alert("teardown moneyOps individual test");}
});

test("test_computeresults", 1, function ()
{
    var fixture = "";
    fixture += ("<div id='res'></div>");
    fixture += ("<form id='form0'>");
    fixture += ("<input type='text' id='v1' name='v1' value='2'/>");
    fixture += ("<input type='text' id='c1' name='c1' value='EU'/>");
    fixture += ("<input type='text' id='v2' name='v2' value='2'/>");
    fixture += ("<input type='text' id='c2' name='c2' value='EU'/>");
    fixture += ("<input type='text' id='ops' name='ops' value='ADD'/>");
    fixture += ("</form>");

    var fixtureNode = document.getElementById("qunit-fixture");
    fixtureNode.innerHTML = fixture;

    var c = new calc();
    c.computeResult(document.getElementById('form0'));
    equal(c.message, "Result : 4 (EU)");
}
);


test("test_computeresults_other", 1, function ()
{
    var fixture = "";
    fixture += ("<div id='res'></div>");
    fixture += ("<form id='form0'>");
    fixture += ("<input type='text' id='v1' name='v1' value='2'/>");
    fixture += ("<input type='text' id='c1' name='c1' value='EU'/>");
    fixture += ("<input type='text' id='v2' name='v2' value='2'/>");
    fixture += ("<input type='text' id='c2' name='c2' value='EU'/>");
    fixture += ("<input type='text' id='ops' name='ops' value='SUB'/>");
    fixture += ("</form>");

    var fixtureNode = document.getElementById("qunit-fixture");
    fixtureNode.innerHTML = fixture;

    var c = new calc();
    c.computeResult(document.getElementById('form0'));
    equal(c.message, "Result : 0 (EU)");
    //equal(c.message, "Unsupported operation SUB");
}
);

test("test_displayResult", 1, function ()
{
    var fixture = "";
    fixture += ("<div id='res'></div>");
    fixture += ("<form id='form0'>");
    fixture += ("<input type='text' id='v1' name='v1' value='2'/>");
    fixture += ("<input type='text' id='c1' name='c1' value='EU'/>");
    fixture += ("<input type='text' id='v2' name='v2' value='2'/>");
    fixture += ("<input type='text' id='c2' name='c2' value='EU'/>");
    fixture += ("<input type='text' id='ops' name='ops' value='ADD'/>");
    fixture += ("</form>");

    var fixtureNode = document.getElementById("qunit-fixture");
    fixtureNode.innerHTML = fixture;

    var c = new calc();
    //c.message = "Result : 4 (EU)";
    //c.displayResult(document.getElementById('res'));
    c.computeResult(document.getElementById('form0'));
    equal(document.getElementById('res').innerHTML, "Result : 4 (EU)");
}
);

test("test_devisesincompatibles", 1, function ()
    {
        var m1 = new money(2, "EUR");
        var m2 = new money(1, "CHF");

        var fixture = "";
        fixture += ("<div id='res'></div>");
        fixture += ("<form id='form0'>");
        fixture += ("<input type='text' id='v1' name='v1' value='"+m1.v+"'/>");
        fixture += ("<input type='text' id='c1' name='c1' value='"+m1.curr+"'/>");
        fixture += ("<input type='text' id='v2' name='v2' value='"+m2.v+"'/>");
        fixture += ("<input type='text' id='c2' name='c2' value='"+m2.curr+"'/>");
        fixture += ("<input type='text' id='ops' name='ops' value='ADD'/>");
        fixture += ("</form>");

        var fixtureNode = document.getElementById("qunit-fixture");
        fixtureNode.innerHTML = fixture;

        var c = new calc();
        c.computeResult(document.getElementById('form0'));
        var result = new DevisesIncompatibleExc(m1,m2);
        equal(c.message, result.toString());
    }
);
