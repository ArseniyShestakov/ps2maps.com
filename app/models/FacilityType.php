<?php

class FacilityType extends Eloquent
{
	public $table = 'facility_types';

	public $incrementing = false;

	public $fillable = array(
		'id',
		'name',
		'slug',
	);

	public function facilities()
	{
		return $this->hasMany('Facility');
	}
}
