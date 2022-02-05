import { suite } from "uvu";
import * as assert from "uvu/assert";
import * as ruleChecker from "../src";

const API = suite("exports");

API("should export an object", () => {
  assert.type(ruleChecker, "object");
});

API.run();

// --- and test

const andTestSuite = suite("and");

andTestSuite("should be a function", () => {
  assert.type(ruleChecker.and, "function");
});

andTestSuite("should default to true", () => {
  assert.is(ruleChecker.and()(), true);
});

andTestSuite("should handle one argument", () => {
  assert.is(ruleChecker.and(() => true)(), true);
  assert.is(ruleChecker.and(() => false)(), false);
});

andTestSuite("should handle two arguments", () => {
  assert.is(
    ruleChecker.and(
      () => true,
      () => true
    )(),
    true
  );
  assert.is(
    ruleChecker.and(
      () => true,
      () => false
    )(),
    false
  );

  assert.is(
    ruleChecker.and(
      () => false,
      () => true
    )(),
    false
  );
  assert.is(
    ruleChecker.and(
      () => false,
      () => false
    )(),
    false
  );
});

andTestSuite("should handle multiple arguments", () => {
  assert.is(
    ruleChecker.and(
      () => true,
      () => true,
      () => true
    )(),
    true
  );
  assert.is(
    ruleChecker.and(
      () => true,
      () => true,
      () => false
    )(),
    false
  );
  assert.is(
    ruleChecker.and(
      () => true,
      () => false,
      () => true
    )(),
    false
  );
  assert.is(
    ruleChecker.and(
      () => false,
      () => true,
      () => true
    )(),
    false
  );
});

andTestSuite.run();
