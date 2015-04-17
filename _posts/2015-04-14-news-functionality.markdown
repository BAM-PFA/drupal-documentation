---
layout: post
title:  "News Functionality"
date:   2015-04-15 16:19:37
categories: Documentation
summary: Plan for how news should be entered into the site, and how it will appear to the public.
---

### Administrative Interface

The News content type contains the following the fields:

* **Image**: A single image to serve as the feature image for a news article
* **Caption**: A caption for the feature image
* **Categories**: A multiple select field, probably via a Drupal "Vocabulary", that would allow for the association of news items with specific terms and display options. One category should be "Featured", which will determine which news items display on the site homepage.
* **Author**: Related people, with a role of "author"
* **Date**: Ideally just the date when the node is first published, but could be a date picker if necessary/easier.
* **Body**: WYSIWYG field containing the body of the news item

---

### Front End Display

News displays in three ways:

* [Single View](#single-view)
* [List View](#list-view)
* [News Block](#news-block)

These various displays are detailed below.

---

#### <a name="single-view"></a>Single View 

This is an individual news item, and should display like a basic page, using the standard two column template.

##### Main Column
The main column should display all news content as follows:

<img class="textual-graphic" src="https://docs.google.com/drawings/d/1A387DqqYXywuOkLcAAIN2kdzExRhSGqFg9SKQ94CI40/pub?w=960&amp;h=720">

##### Sidebar
The sidebar (right column) should contain a "News block" (see below), that displays the five most recent news items from any category. It should also contain a social media component, the standard "related items", and any additoinal promo blocks that are added via nodequeues.


#### <a name="list-view"></a>List View

A listing of all news items, using the standard two column template.

##### Main Column

The main column contains a listing of all news items. The content displayed for each individual news item is the same as in the Single View, but with the following variations: 

* Title is a link to the single view
* Body text is cut off and 125 words
* "Read more" link is added after body text that links to single view

Standard pagination should allow users to go back in time to view older posts.

##### Sidebar

Sidebar will be populated with promos via nodequeues.

---

#### <a name="news-block"></a>News Block

A News Block is a standard block for displaying links to news items from the sidebar of other pages. It should show the five most recent news items, either overall, or filtered to a specific category on a per-block basis.

Layout should include an editable title ("Featured News", "Recent News", etc), and then a list of five news items: square thumbnail image (floated left), title (linking to single view), and date below the title.

