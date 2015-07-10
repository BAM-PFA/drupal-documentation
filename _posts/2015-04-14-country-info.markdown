---
layout: post
title:  "Country/Region logic"
date:   2015-04-15 16:19:37
summary: "Description of various country/region fields, and the logic dictating their use throughout the site"
categories: Documentation
---

This is an explanation of the fields that are used for storing location information (country, region, nationality, etc) for various content types on the site. The goal in setting this up was to maintain accuracy, but also make content accessible and easy to find.

###Objects

These are fields for Art/Film Objects and Documentation.

####Country of Origin

This is the term reference field using the 'nation' taxonomy. It only stores exact matches to the term list, and should probably ONLY be used for filtering purposes.

Field name: **Country of Origin**  
Machine name: <code>field_region_country</code>

Examples:

* 20984

----

####Place of Origin

Text value for all regional information (including countries). This should be the display value for nation/region/city/etc.For instance, an object that is from a historical country like West Germany should show up when filtering by "Germany", but should display "West Germany" on the record.

Field name: **Place of Origin**  
Machine name: <code>field_region_other</code>

Examples:

* West Germany
* Great Britain

----

###People

People are different than objects in that they can have an associated nationality that is different than their birthplace.

####Nationality
**field_person_nationality** – term reference field with 'nations' vocabulary that should be the filter value
**field_person_nationality_text** – text field that should be the display value

####Birthplace
**field_person_birthplace_country** – term reference field with 'nations' vocabulary that should be the filter value
**field_person_birthplace_text** – text field that should be the display value

needs examples/usage info

####Other
**field_person_other_regional_info** – text field for 'other regional info'
**field_person_period** – text field for 'dynasty/period'

needs examples/usage info
