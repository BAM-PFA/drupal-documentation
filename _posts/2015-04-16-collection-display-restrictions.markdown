---
layout: post
title:  "Collection Display Restrictions"
date:   2015-04-07 16:19:37
categories: Documentation
summary: Restrictions and permissions for displaying Art Object images
---

Many Art Objects in the BAM/PFA Collection are subject to certain display restrictions due to copyright/permission issues. Images of these objects cannot be displayed larger than 250x300px, at 72 DPI. 

However, certain subsets of the collection can be displayed at full size. These include:

* Paintings by Hans Hofmann
* All works by Theresa Hak Kyung Cha
* All images in the public domain (created before 1923)

Ideally, Art Objects will  have a boolean field that indicates whether they can be displayed full size, allowing us to manually grant permission to individual objects as needed. Perhaps a boolean can be created, and a migration run to pre-populate the field based on the above criteria for granting permission.