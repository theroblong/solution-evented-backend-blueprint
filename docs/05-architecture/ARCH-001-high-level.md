# ARCH-001: High-Level Architecture (v0.1)

## Summary
Evented backend deployed on Kubernetes using Docker containers, with Postgres as system of record and Kafka as the event backbone.

## Core Components
- Schema Registry (Mermaid ERD → Canonical JSON)
- Postgres (primary store, outbox, processed-events dedupe)
- Trigger-based CDC
- Event Rules Engine
- Kafka Publisher
- Handler Runtime

## Non-Functional Targets
- CDC → Kafka < 1s
- Handler invocation < 5s
- At-least-once delivery
- Per-handler blocking on failure
