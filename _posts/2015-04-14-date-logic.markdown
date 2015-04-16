---
layout: post
title: Dates
date: 2015-04-15 16:19:37
categories: Documentation
summary: Description of various date fields, and the logic dictating their use throughout the site
---

Most content types store dates in the same way, across an identical set of fields. These fields are intended to provide the ability to properly store, search/filter, and display dates as required by site functionality. 

The *Primary Date Fields* store integers for the first (earliest known) and last (last known) year that an object is known to have existed. The *filtering dates* stores this same information, but in a format that is useful for filtering (although it cannot hold dates earlier than 1001AD, due to software limitations). The *Dates Note* field is a string containing the same information in a format ready for display, and allows for the use of non-numeric dates ("18th century", etc). Finally, the "Circa" checkbox indicates that date is approximate, and should be prepended with "c.".

Currently, all date fields should be filled out (except end dates, when not applicable). Ideally this workflow will be streamlined (entering once and having other fields auto-populate), but this is not in place currently.

###Date Fields

#### Primary Date Fields
Date or date range for the object. If there isn’t a range, only field_dates_year1 will be used. Dates are stored as integers, and should contain only the year. This same data is also in the “field_dates” field, where it is stored using the “datetime” format (which can’t handle years before 1001AD). 

Field name: **Earliest Year**, **Latest Year**   
Machine name: <code>field_dates_year1</code>,<code>field_dates_year2</code>

Examples:

* 1992
* 1992, 2002

----

#### Filtering Dates
Date or date range for the object. If there is no end date, it will default to the same value as the start date and won’t show a range. Dates are stored using the “datetime” format, like “Jan 1 1994 00:00:00”. This same data is also in “field_dates_year1/field_dates_year2”, but stored as ‘datetime’ data type in MySQL.

Field name: **Dates**  
Machine name: <code>field_dates</code>

Examples:

* Jan 1 1994 00:00:00
* Jan 1 1994 00:00:00, Feb 17 1997 00:00:00

---

#### Dates Note
A field that, during migration, combined info from the earliest and latest dates above into a single note, to be used as a display value. Since this is a text field, it can accommodate non-numeric values, like “18th century”.

Field name: **Dates (note)**  
Machine name: <code>field_dates_note</code>

Examples:

* 1970
* 1970-1975
* 18th century
* 18th century to 19th century

---

#### Circa
A boolean (i.e., true/false) to describe whether the dates values are 'circa' or not.

Field name: **Circa**  
Machine name: <code>field_dates_circa</code>