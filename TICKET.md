# FINSERV-4136: Build dashboard KPI calculator service

**Status:** In Progress · **Priority:** High
**Sprint:** Sprint 25 · **Story Points:** 5
**Reporter:** Sunil Patil (Product Lead) · **Assignee:** You (Intern)
**Labels:** `backend`, `javascript`, `dashboard`, `feature`
**Task Type:** Feature Ship

---

## Description

The data aggregator collects raw metrics. Implement the `KPICalculator` that computes business KPIs: revenue growth rate, customer churn, average order value, conversion rate, and MoM comparisons.

## Acceptance Criteria

- [ ] `calculateGrowthRate()` computes period-over-period growth percentage
- [ ] `calculateChurnRate()` computes customer churn
- [ ] `calculateAOV()` computes average order value
- [ ] `getKPIDashboard()` returns all KPIs in a structured response
- [ ] All unit tests pass
