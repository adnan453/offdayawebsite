# OFFDAYA Launch — Place Selector Revision

**Changes in this revision**
- Removed the Kakkadampoyil-only promotion from public website.
- Added a destination dropdown with Lakshadweep, Kashmir, Srinagar, Gulmarg, Pahalgam, Munnar, Wayanad, Goa, Manali and Other.
- Lakshadweep / Kashmir selections open the currently available detailed package pages.
- Other places launch a custom-trip WhatsApp enquiry; they do NOT imply published or available packages.
- Updated contact details: WhatsApp/call +91 79948 49989, hello@offdaya.in, Instagram @offdaya.in.
- Existing Admin/Partner routes are untouched. Next.js old Kakkadampoyil deep link redirects to /#places.
- The selector is currently frontend-coded; Admin-managed destination catalogue is for the next backend/CMS milestone.

## Static preview
Unzip `OFFDAYA_Launch_Destinations_Static_v2.zip`, open `index.html` in Chrome. Click **Choose a place**, select Lakshadweep / Kashmir or another destination, and test.

## Next.js patch
Back up `D:\OFFDAYA\OFFDAYA_Milestone_1_Local_Foundation_Source` first. Unzip the Next.js patch. Copy its `frontend` folder into the existing project root; merge/replace matching frontend files ONLY. No backend or database overwrite. Your next dev server should update pages. Check `/`, `/admin`, `/partner`, and `/stays/kakkadampoyil` redirect. Do not copy a static site `index.html` into Next.js.

## Safety
- No package offer becomes an instant booking. Pricing, dates, suppliers and availability still require written confirmation.
- This update does not create the dynamic package CMS or integrate new packages into the CRM yet.
