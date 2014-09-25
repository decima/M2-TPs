var MoneyOps=function (){
}

MoneyOps.add = function(m1,m2){
    if(m1.getCurrency().toLowerCase()!=m2.getCurrency().toLowerCase());
        throw new DevisesIncompatibleExc(m1,m2);
	return new money(m1.getValue()+m2.getValue(),m1.getCurrency());
}