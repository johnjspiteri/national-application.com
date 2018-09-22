(function () {
	'use strict';

	function stateFactory () {
		var state = {
			clean: "",
			plan: {
				title: "NationalRx",
				bin: "018398",
				pcn: "48300712",
				group: "96100245",
				patient_id: "NRX43710"
			},
			organization: "NationalRx",
			email: "info@nationalrxcard.com",
			file_url: "https://s3.amazonaws.com/nationalrx/card/national_rx_card.png"
		};

		state.setState = function(data) {
			// this = data
		};

		state.getState = function() {
			return this;
		};

		return state;
	}

	angular
		.module('app.index')
		.factory('stateFactory', stateFactory);

	stateFactory.$inject = [];

})();
