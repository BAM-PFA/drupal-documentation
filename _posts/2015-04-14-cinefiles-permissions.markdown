---
layout: post
title:  "Cinefiles Permissions"
date:   2015-04-15 16:19:37
summary: "Description of various use restrictions associated with Cinefiles content"
categories:
---

CineFiles Documentation have a series of "Access Codes" that indicate who is able to access the documents online. There are 5 levels of restriction, although looking through the database it looks like only 3 are used. The list below details these.

* **BAM/PFA Staff** - Access Code "0" - Online access is restricted to BAM/PFA staff.
* **UCB Campus** - Access code "3" - Online acess is restricted to users with an IP address within a specific range.
* **World** - Access code "4" - No restrictions, world viewable.

There are probably a number of ways to properly achieve these restrictions. For instance, documentation with a code of 0 might be visible only to a logged in Drupal user, which will ensure that they are Staff (at least for the foreseeable future). Cinefiles is using UCBerkeley IP restriction in some way, so perhaps they have insights on how to achieve that. 

There also might be options for restriction via Amazon's AWS. IP/URL restriction can be achieved via [AWS Policies](http://docs.aws.amazon.com/IAM/latest/UserGuide/PoliciesOverview.html), and is currently being used to restrict access of image delivery to the current live site on Pantheon: [http://live-bam-pfa.gotpantheon.com/](http://live-bam-pfa.gotpantheon.com/). Perhaps a policy can be applied to only cinefiles documentation that restricts to a UCB IP range, and Drupal can respond accordingly to whether the asset is retrievable or not.

----

### Displaying restricted documents

For documents that do have restrictions placed on them, certain modifications to the view will need to be made:

* View and Download buttons are removed
* Image slider exists, but cannot be clicked on for expanded lightbox view
* Additional text should appear beneath the Use Restriction text as follows: "Due to copyright restrictions, this document cannot be displayed online. You may request to have a PDF sent to you via email." Followed by a button reading "Request PDF". When clicked, this button should open a modal form that allows a student to enter their email address and press send. The form would send an email to "cinefiles@berkeley.edu" containing the students email, as well as the ID (field called "ORIGINAL PRIMARY KEY - CINEFILES" ??) of the document they are requesting.


