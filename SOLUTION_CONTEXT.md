# Solution Context

## Solution Name
Evented Backend Blueprint (v0.1)

## Business Outcome (Primary KPI)
Allow rapid deployment of agent-generated front ends on top of an enterprise product-ready backend.

## In-Scope (v0.1)
- Schema definition
- Event detection (CDC)
- Kafka publishing
- Basic event handlers

## Out-of-Scope (v0.1)
- UI builders
- ML training pipelines
- Enterprise IAM

## Known Systems / Data Sources
- Database: Postgres
- Messaging: Kafka
- Deployment: EKS, AKS, GKE, on-prem Kubernetes

## Assumptions
- At-least-once delivery semantics are acceptable
- CDC → Kafka < 1 second
- Handler invocation < 5 seconds

## Open Questions
- Schema notation decision (ADR required)
