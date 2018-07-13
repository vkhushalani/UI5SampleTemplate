sap.ui.define([],
	function() {
		"use strict";
		return {
			//Format milliseconds to JavaScript date 
			millisecToJScriptDate: function(msDate) {
				if (msDate) {
					var jDate = new Date(msDate);
					return jDate;
				} else {
					return msDate;
				}
			},
			//Format JavaScript date to milliseconds 	
			JScriptDateToMillisec: function(jDate) {
				if (jDate) {
					return jDate.getTime();
				} else {
					return jDate;
				}
			},
			//Format YYYYMMDD String  to JavaScript date	
			YYYYMMDDtoJScript: function(sDate) {
				if (sDate) {
					sDate = sDate.toString();
					var year = sDate.substring(0, 4);
					var month = sDate.substring(4, 6);
					var day = sDate.substring(6, 8);

					var date = new Date(year, month - 1, day);
					return date;
				}
			},

			//Format JavaScript date to YYYYMMDD String  
			JScriptToYYYYMMDD: function(date) {
				if (date) {
					var mm = date.getMonth() + 1; // getMonth() is zero-based
					var dd = date.getDate();

					return [date.getFullYear(),
						(mm > 9 ? '' : '0') + mm,
						(dd > 9 ? '' : '0') + dd
					].join('');
				}
			},

			//Format YYYYMMDDHHMM String  to JavaScript date
			JScriptToYYYYMMDDHHMM: function(date) {
				if (date) {
					var mm = date.getMonth() + 1; // getMonth() is zero-based
					var dd = date.getDate();
					var hh = date.getHours();
					var mn = date.getMinutes();

					return [date.getFullYear(),
						(mm > 9 ? '' : '0') + mm,
						(dd > 9 ? '' : '0') + dd,
						(hh > 9 ? '' : '0') + hh,
						(mn > 9 ? '' : '0') + mn
					].join('');
				}
			},

			//Format milliseconds to DD/MM/YYYY
			dateDiplayFormat: function(value) {
				var date;
				if (this.formatter) {
					date = this.formatter.JScriptToYYYYMMDD(this.formatter.millisecToJScriptDate(value));
				} else {
					date = this.JScriptToYYYYMMDD(this.millisecToJScriptDate(value));
				}
				if (date) {
					date = date.toString();
					var match = date.match(/(\d{4})(\d{2})(\d{2})/);
					return match[3] + '/' + match[2] + '/' + match[1];
				}
			},

			//Format milliseconds to DD/MM/YYYY HH:MM
			dateTimeDiplayFormat: function(value) {
				var date;
				if (this.formatter) {
					date = this.formatter.JScriptToYYYYMMDDHHMM(this.formatter.millisecToJScriptDate(value));
				} else {
					date = this.JScriptToYYYYMMDDHHMM(this.millisecToJScriptDate(value));
				}
				if (date) {
					date = date.toString();
					var match = date.match(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/);
					return match[3] + '/' + match[2] + '/' + match[1] + ' ' + match[4] + ':' + match[5];
				}
			},
			// get i18n value of the key
			getNameFromBundle: function(key) {
				var oBundle = this.getResourceBundle();
				return oBundle.getText(key);
			}
		};

	});