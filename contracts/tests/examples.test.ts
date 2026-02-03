import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

describe("Contract examples sanity check", () => {
  it("loads EVT-001 example payloads", () => {
    const dir = path.resolve(
      process.cwd(),
      "../examples/payloads/events/EVT-001"
    );
    const files = fs.readdirSync(dir);
    expect(files.length).toBeGreaterThan(0);
  });
});
