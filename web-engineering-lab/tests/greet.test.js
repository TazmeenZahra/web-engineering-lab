import test from "node:test";
import assert from "node:assert";
import { greet } from "../public/script.js";

test("greet returns Hello, World!", () => {
  assert.strictEqual(greet("World"), "Hello, World!");
});
