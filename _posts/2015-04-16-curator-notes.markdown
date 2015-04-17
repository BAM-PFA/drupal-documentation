---
layout: post
title:  "Curator Notes"
date:   2015-04-15 16:19:37
categories: Documentation
summary: Description of Curator Notes, and how they work on Art Objects and Film Screenings
---

"Curator's Notes" are the writings that accompanies an Art or Film Object for a specific Exhibition or Film Series. These notes live on the Art Object, where there might be many, each one related to a different Exhibition/Film Series which the object was a part of. They display both on the individual Art Object record, as well as on related Film Screening records.

### Content Entry

On the administrative end, these notes will be entered into Art/Film Object nodes in the field collection <code>field_field_ao_curator_notes</code>, consisting of the following information:

* Film Series/Exhibition (that the note was written for)
* Description (Text of the note)
* Author (Related Person)
* Role (Usually "Curator" or "Author")

We will also manually enter the content in the appropriate Film Screening record, as needed. Ideally this process can be improved so BAM/PFA would only have to enter the film note in a single location, but the currently proposed workflow was a compromise due to the technical difficulties involved with the single-location method.

### Display

Curator Notes show up in two places on the site: Art/Film Objects and Film Screenings.

An Art/Film Object should display all of the notes written about that particular object. The following is a proposed user interface for displaying this content: [https://jsfiddle.net/odzncwz2/16/](https://jsfiddle.net/odzncwz2/16/).

On a Film Screening (there is no equivalent for Art Objects/Exhibitions), this information will comprise the main description (<code>body</code>) of the node, and an associated author (via a related person field that needs to be added).

Ideally, the Film Screening view would automatically display the first entry in <code>field_field_ao_curator_notes</code>, unless a description is entered on the screening itself (that is to say, the A/F Object entry would be the "No results" behavior). 

