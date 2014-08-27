function check_storage_location() {
	if ($("#field-resource_storage_location").val() == "BCGW Data Store") {
		$("#object_name_container").show();
	}
	else {
		$("#field-object_name").val('');
		$("#object_name_container").hide();

	}
}


$(function() {
	check_storage_location();
	$("#field-data_collection_start_date").datepicker({ dateFormat: "yy-mm-dd", showOtherMonths: true, selectOtherMonths: true });
	$("#field-data_collection_end_date").datepicker({ dateFormat: "yy-mm-dd", showOtherMonths: true, selectOtherMonths: true });

	var $resourceForm = $('.dataset-resource-form');
	if($resourceForm.hasClass('archived')) {
		$resourceForm.find('input, select, textarea, button, a.btn').each(function() {
			$(this).attr('disabled', 'disabled');
		});
	}
});