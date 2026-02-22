# PR Review - Dashboard KPI calculator service (by Deepak Gupta)

## Reviewer: Neha Sharma
---

**Overall:** Good foundation but critical bugs need fixing before merge.

### `kpiCalculator.js`

> **Bug #1:** Month-over-month growth formula divides by current month instead of previous month
> This is the higher priority fix. Check the logic carefully and compare against the design doc.

### `dataAggregator.js`

> **Bug #2:** Percentage formatting multiplies by 100 twice showing 1000 percent instead of 10 percent
> This is more subtle but will cause issues in production. Make sure to add a test case for this.

---

**Deepak Gupta**
> Acknowledged. I have documented the issues for whoever picks this up.
