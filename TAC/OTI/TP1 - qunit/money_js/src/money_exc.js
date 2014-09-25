function DevisesIncompatibleExc(_d1,_d2) {
	this.d1=_d1; this.d2=_d2;

}

DevisesIncompatibleExc.prototype.toString=function (){
		return "Devises incompatibles : "+d1+" vs "+d2;
}

/**
 * negativeValueExeption
 * @param i - objet money levant l'exception
 */
function negativeValueExeption(i){
    this._i=i;
}

negativeValueExeption.prototype.toString=function(){
    return "no negative values allowed "+this._i;
};


function currencyFormatExeption(i){
    this._i=i;
}

currencyFormatExeption.prototype.toString=function(){
    return "currency value unsupported "+this._i;
};
