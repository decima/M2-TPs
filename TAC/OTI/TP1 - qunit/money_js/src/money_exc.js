function DevisesIncompatibleExc(_d1,_d2) {
	this.d1=_d1; this.d2=_d2;

}

DevisesIncompatibleExc.prototype.toString=function (){
		return "Devises incompatibles : "+d1+" vs "+d2;
}


function ValeurNegativeExc(i){
    this._i=i;
}

ValeurNegativeExc.prototype.toString=function(){
    return "Valeur négative : "+this._i;
};


function DeviseFormatExc(i){
    this._i=i;
}

DeviseFormatExc.prototype.toString=function(){
    return "Format de devise invalide : "+this._i;
};

function SoustractionNegativeExc(_d1) {
	this.d1=_d1;
}

SoustractionNegativeExc.prototype.toString=function(){
	return "Soustraction négative : "+d1;
}
