# Reports

Analyze metrics and performance of your service in Interflow.

## Overview

The Interflow Reports module offers detailed analysis of service, customers, team, and appointments. Use data to make informed decisions and continuously improve your operation.

## Accessing Reports

1. In the main menu, click **Reports** (📊)
2. Select the desired report type
3. Configure period and criteria filters
4. View or export data

## Service Reports

Analysis of customer service performance.

### Available Metrics

| Metric | Description |
|--------|-------------|
| **Average response time** | Time to first response |
| **Average resolution time** | Time to resolve service |
| **Resolution rate** | % of successfully resolved services |
| **Service volume** | Quantity per period |
| **Customer satisfaction** | Average rating |

### Filters

- **Period**: Start and end date
- **Team**: Filter by specific team
- **Agent**: Filter by agent
- **Channel**: WhatsApp, Instagram, Email, etc.
- **Status**: Resolved, pending, in progress

### Visualizations

- 📊 **Line charts**: Evolution over time
- 📈 **Bar charts**: Comparison between periods/teams
- 🥧 **Pie charts**: Distribution by category
- 📋 **Tables**: Detailed exportable data

## Advanced Customer Reports

Report generator with custom groupings and subdivisions.

### How to Create

1. In **Customers** → click **"Advanced Reports"** 📊
2. Click **"New Configuration"**
3. Follow the 5-step wizard:

**Step 1: Data Upload**
- Upload JSON (export from customer list)
- System reads data structure

**Step 2: Configure Groupings**
- Select fields to group by (e.g., Source, Status)
- Define grouping hierarchy

**Step 3: Configure Total Column**
- Choose how to calculate total
- Options: count, sum, average

**Step 4: Configure Subdivisions**
- Add subdivisions (e.g., reasons for not buying)
- Configure classification criteria

**Step 5: Review and Save**
- See report preview
- Name the configuration
- Save for reuse

### Features

| Feature | Description |
|---------|-------------|
| **Smart normalization** | Unifies text variations (e.g., "NY", "New York") |
| **Real-time preview** | See result while configuring |
| **CSV export** | Download for Excel/Sheets |
| **Saved templates** | Reuse configurations |

## Team Reports

Analyze individual and collective team performance.

### Metrics per Agent

| Metric | Description |
|--------|-------------|
| **Services performed** | Service quantity |
| **Average response time** | Response speed |
| **Resolution rate** | % success |
| **Satisfaction** | Average rating received |
| **Online time** | Hours logged in |

### Team Ranking

View top performers:

- 🥇 **Top agents** by volume
- ⚡ **Fastest** response
- ⭐ **Best rated** by customers

## Appointment Reports

Metrics from the schedule module.

### Available Metrics

| Metric | Description |
|--------|-------------|
| **Total appointments** | Quantity in period |
| **Attendance rate** | % who showed up |
| **Cancellation rate** | % cancelled |
| **No-show rate** | % who didn't show |
| **Average service time** | Average duration |

### Analysis

- **By service**: Which services are most popular
- **By professional**: Performance of each professional
- **By time**: Which times have most demand
- **By day of week**: Busiest days

## Data Export

### Available Formats

| Format | Recommended Use |
|--------|-----------------|
| **CSV** | Excel, Google Sheets |
| **Excel (.xlsx)** | Advanced analysis |
| **PDF** | Presentations, printing |
| **JSON** | Integrations, APIs |

### How to Export

1. Configure desired filters
2. Click **"Export"**
3. Select format
4. Wait for download

::: tip 💡 Tip
For large reports, system generates file in background and sends by email when ready.
:::

## Report Scheduling

Receive reports automatically by email.

### Configuration

1. Access **Reports** → **Schedules**
2. Click **"New Schedule"**
3. Configure:
   - **Report**: Which report to send
   - **Frequency**: Daily, weekly, monthly
   - **Recipients**: Emails to receive
   - **Format**: PDF, Excel, etc.
4. Save

## Permissions

### Who can access reports

| Profile | Access |
|---------|--------|
| Owner | ✅ All reports |
| Admin | ✅ All reports |
| Manager | ✅ Their team's reports |
| Agent | ⚠️ Personal metrics only |

::: warning ⚠️ Attention
Agents with visibility restrictions see only filtered data from their teams.
:::

## Next Steps

- [Schedule](/en/guide/schedule/) - Appointment metrics
- [CRM & Customers](/en/guide/crm/customers) - Customer reports
- [Settings](/en/guide/settings/) - Report permissions

