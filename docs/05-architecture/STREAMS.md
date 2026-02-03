# Logical Streams

Logical streams are stable identifiers included in `meta.stream`.
They map to physical Kafka topics via environment-specific configuration.

## Streams (v0.1)
- record.customer.changed
  - Source: Postgres trigger CDC
  - Event Type(s): record.changed (EVT-001)
  - Notes: Example stream used in EVT-001 examples

## Mapping Rules
- Physical topic naming is environment-specific and must be configurable.
- Recommended physical topic convention:
  - <env>.<org>.<stream>
  - Example: prod.pruvida.record.customer.changed
