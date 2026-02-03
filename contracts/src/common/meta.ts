import { z } from "zod";
import { FeatureId, UseCaseId } from "./ids.js";

export const IsoTimestamp = z.string().datetime();

export const Meta = z.object({
  id: z.string().min(8),
  timestamp: IsoTimestamp,
  source: z.string().min(1),

  featureId: FeatureId,
  useCaseId: UseCaseId,

  correlationId: z.string().min(1).optional(),
  traceId: z.string().min(1).optional(),
  spanId: z.string().min(1).optional(),
  tenantId: z.string().min(1).optional(),
  actor: z.string().min(1).optional(),

  /** Logical stream identifier (NOT the physical Kafka topic). */
  stream: z.string().min(1),
});
