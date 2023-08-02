<textarea class="form-control auto-height" data-name="{{name}}Street" rows="1" placeholder="{{translate 'Street'}}" autocomplete="espo-street" maxlength="{{streetMaxLength}}" style="resize: none;">{{streetValue}}</textarea>
<div class="row">
	<div class="col-sm-4 col-xs-4">
		<input type="text" class="form-control" data-name="{{name}}City" value="{{cityValue}}" placeholder="{{translate 'City'}}" autocomplete="espo-city" maxlength="{{cityMaxLength}}">
	</div>
	<div class="col-sm-4 col-xs-4">
		<input type="text" class="form-control" data-name="{{name}}District" value="{{districtValue}}" placeholder="{{translate 'District'}}" autocomplete="espo-district" maxlength="{{districtMaxLength}}">
	</div>
	<div class="col-sm-4 col-xs-4">
		<input type="text" class="form-control" data-name="{{name}}Ward" value="{{wardValue}}" placeholder="{{translate 'Ward'}}" autocomplete="espo-ward" maxlength="{{wardMaxLength}}">
	</div>
</div>
