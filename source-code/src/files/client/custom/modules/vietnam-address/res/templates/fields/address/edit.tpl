<textarea class="form-control auto-height" data-name="{{name}}Street" rows="1" placeholder="{{translate 'Street'}}" autocomplete="espo-street" maxlength="{{streetMaxLength}}" style="resize: none;">{{streetValue}}</textarea>
<div class="row">
	<div class="col-sm-4 col-xs-4">
		<select class="form-control" data-name="{{name}}City">
			<option value=""></option>
			{{#each cityOptions}}
				{{#ifEqual this ../cityValue}}
					<option value="{{this}}" selected>{{this}}</option>
				{{else}}
					<option value="{{this}}">{{this}}</option>
				{{/ifEqual}}
			{{/each}}
		</select>
	</div>
	<div class="col-sm-4 col-xs-4">
		<select class="form-control" data-name="{{name}}District">
			<option value=""></option>
			{{#each districtOptions}}
				{{#ifEqual this ../districtValue}}
					<option value="{{this}}" selected>{{this}}</option>
				{{else}}
					<option value="{{this}}">{{this}}</option>
				{{/ifEqual}}
			{{/each}}
		</select>
	</div>
	<div class="col-sm-4 col-xs-4">
		<select class="form-control" data-name="{{name}}Ward">
			<option value=""></option>
			{{#each wardOptions}}
				{{#ifEqual this ../wardValue}}
					<option value="{{this}}" selected>{{this}}</option>
				{{else}}
					<option value="{{this}}">{{this}}</option>
				{{/ifEqual}}
			{{/each}}
		</select>
	</div>
</div>
