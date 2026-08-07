# UTM — Connections / Meta Lead Ads

Manage Meta connections, pages, ad accounts, Instant Forms, pixels, and lead/customer attribution by ad.

::: tip Access
Menu → **UTM**. Requires the `utm` module.
:::

## Overview

The active flow is the **Connections** hub (Meta Lead Ads and future providers).

| Area | Role |
|------|------|
| **Connections** | Connect Meta and list hubs |
| **Pages** | Facebook pages on the connection |
| **Ad accounts** | Ad Accounts linked to the page |
| **Campaigns / ad sets / ads** | Meta sync (operational read) |
| **Instant Forms** | Sync and map fields + actions |
| **Pixels** | Sync and CAPI token on the ad account |
| **Leads / customers per ad** | Paginated lists from each ad |

::: info Classic UTM
Legacy screens for manual campaigns, site forms, classic WhatsApp tracking, and old analytics are discontinued in the app. The supported path is the Connections hub.
:::

## Connect Meta

1. Open **UTM**
2. Create or open a Meta **connection**
3. Authorize the requested permissions (pages, ads, leads)
4. Select the **pages** and **ad accounts** for the hub

## Navigate to an ad

1. Connections → **Page**
2. Open an **ad account**
3. Sync **campaigns** when needed
4. Open the campaign → **ad set** → **ads** list

In the ads list:

- **Details** — creative, Meta IDs, and status
- **View leads** — leads attributed to that ad
- **View customers** — customers with the same ad

## Attribution by ad

Meta leads are attributed to the **ad** (local ID + Meta ID), not the campaign.

- Instant Forms do **not** pick a campaign/ad in setup
- The ad arrives with the Meta lead itself
- Customers can inherit ad attribution from that link

## Instant Forms

1. On the **page**, open the **Forms** tab
2. Sync Instant Forms from Meta
3. Open the form to map:
   - form fields → Interflow fields
   - actions (tags, funnel stage, etc.)
4. Save the mapping

You do not need (and cannot) bind the form to a campaign: attribution comes from the lead’s ad.

## Pixels (CAPI)

1. Open the **ad account**
2. Sync **pixels** from Meta
3. Set the pixel **CAPI token** used for conversion events

Pixels live at the account level (not campaign or ad set).

## CRM integration

Combine ad attribution with [funnels](/en/guide/crm/funnels) and [customers](/en/guide/crm/customers): tags and stages can be applied by Instant Form actions when the lead arrives.

## Related

- [CRM funnels](/en/guide/crm/funnels)
- [Customers](/en/guide/crm/customers)
- [Changelog v2026.8.1](/en/changelog/2026/08/2026.8.1)
