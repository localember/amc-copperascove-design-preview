# AMC Copperas Cove location site: Design preview, not live

Ticket AMC-2026-11-24-copperascove (Local Ember Design Worker 3, 2026-11-24 CT).
Full Copperas Cove location site on the AMC main design (Local Ember Alpine, AMC palette). Every URL on the live
copperascove.anthonychiro.com site (sitemap, menus, WordPress page and post lists) is kept at the same slug so rankings can carry over,
except /additional-offers/ and /ai-generated-content-disclaimer/, removed on John's instruction (redirect targets to be decided by Grok Build).
Pattern site for Grok Build to finish the other AMC location sites.

- noindex,nofollow on every page and robots.txt Disallow: /
- Forms off: disabled inputs and buttons, no form actions, no tracking or third-party scripts
- Service and condition pages use the Local Ember catalog (tools/bd-generator/catalog); pages with no catalog file use new draft content (catalog JSON drafts in the AMC Drive folder for Grok Build)
- Blog: 2 posts rewritten as the pattern; 26 placeholders at their exact URLs queued for Grok Build
- Legal pages are the Local Ember standards from the AMC main preview, at the live site's slugs
- Not the live site. Not sent to the client.
