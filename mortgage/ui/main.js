// Add a method to the Number object to format the number with commas and n decimal digits
Number.prototype.format = function(n){
	return this.toFixed(n).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

var mortgage = (function() {
	var P, i, n, m, t;
	
	var readValues = function() {
		P = $('#P').val()*1,
		i = $('#i').val()/100,
		n = $('#ny').val()*1 + $('#nm').val()/12,
		m = $('#m').val()*1,
		t = $('#t').val()*1,
		j = monthlyRate(i);
	}

	// effective monthly rate as decimal, given annual Canadian mortgage rate as decimal
	var monthlyRate = function(i) {
		var mr = Math.pow(1+i/2,1/6) - 1;
		console.log('monthly', mr);
		return mr;
	}
	
	// annual Canadian mortgage rate as decimal given effective monthly rate as decimal
	var annualRate = function(j) {
		var ar = 2 * Math.pow(j + 1,6) - 2;
		console.log('annual', ar);
		return ar;
	}
	
	var displayAmortize = function() {
		var principle = P,
			interestPayment, 
			principlePayment,
			termPrinciple,
			mcount = 0,
			tm = 0, 
			th = 0, 
			tc = 0,
			term = (t > 0) ? t * 12 : 999999;
		$('#amortize').html('<table><thead><tr><th>Month</th><th>Payment</th><th>Interest</th><th>Principle</th><th>Balance</th></tr></thead><tfoot></tfoot><tbody></tbody></table>');
		while(principle > 0) {
			mcount++;
			interestPayment = principle * j;
			principlePayment = m - interestPayment;
			if(interestPayment>m){
				alert('Monthly Payment is too small. Must grater than $' + interestPayment.toFixed(2));
				break;
			}
			if(principlePayment>principle-0.1) {principlePayment = principle; m=interestPayment+principle}
			principle = principle - principlePayment;
			if(term >= mcount) {
				tm += m;
				th += interestPayment;
				tc += principlePayment;
				$('#amortize tbody').append('<tr><td>' + mcount + '</td><td>' + m.format(2) + '</td><td>' + interestPayment.format(2) + '</td><td>' + principlePayment.format(2) + '</td><td>' + principle.format(2) + '</td></tr>');
				termPrinciple = principle;
			}
		}
		$('#amortize tfoot').append('<tr class="total"><td>Total</td><td>$' + tm.format(2) + '</td><td>$' + th.format(2) + '</td><td>$' + tc.format(2) + '</td><td>$' + termPrinciple.format(2) + '</td></tr>');
		$('#b').val('$' + termPrinciple.format(2));
		if(term>mcount) { term=mcount; }
		if(n===0){
			displayAmortizePeriod(mcount/12);
		}
	}

	var displayValues = function() {
		$('#P').val((P*1).toFixed(2));
		$('#i').val((i*100).toFixed(2));
		$('#m').val((m*1).toFixed(2));
		displayAmortizePeriod(n);
		displayAmortize();
	}
	var displayAmortizePeriod = function(n) {
		$('#ny').val(Math.floor(n));
		$('#nm').val(Math.ceil(((n-Math.floor(n))*12).toFixed(4)));
	}

	return {
		// Calc Monthly payment
		calcMonthly : function() {
			readValues();
			var N = 12 * n;
			if(j <= 0) {
				j = 0;
				i = 0;
				m = P / N;
			} else {
				m = P * j / ( 1 - Math.pow(1+j,-N) );
			}
			displayValues();
		},
		// Calc Monthly payment
		calcAmortize : function() {
			readValues();
			n = 0;
			displayValues();
		},
		calcPrinciple : function() {
			readValues();
			var N = 12 * n;
			P = m * ( Math.pow(1+j,N) - 1) / ( j * Math.pow((1+j),N) );
			displayValues();
		},
		approxInterest : function() {
			readValues();
			var N = 12 * n;
			var us = 72 / N * Math.sqrt(m*N/3/P - 1/12) - 36/N;
			i = annualRate(us/12);
			displayValues();
		}
	}
}());

$(document).ready(function() {
	// Calc Payment event
	$('#calcM').click(function(event){
		mortgage.calcMonthly();
	});

	// Calc Amortization event
	$('#calcN').click(function(event){
		mortgage.calcAmortize();
	});
	
	// Calc Amortization event
	$('#calcP').click(function(event){
		mortgage.calcPrinciple();
	});

	// Calc Amortization event
	$('#calcI').click(function(event){
		mortgage.approxInterest();
	});
});
