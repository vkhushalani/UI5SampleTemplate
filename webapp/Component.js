sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/ngahr/TestTemplate/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("com.ngahr.TestTemplate.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			//sesion expire handling

			jQuery(document).ajaxComplete(function(e, jqXHR) {
				if (jqXHR.getResponseHeader("com.sap.cloud.security.login")) {
					alert("Session is expired, page shall be reloaded.");
					window.location.reload();
				}
			});
		}
	});
});