import {
  require_yaml
} from "./chunk-IYVJZ2S3.js";
import {
  __commonJS
} from "./chunk-G3PMV62Z.js";

// node_modules/refractor/lang/tap.js
var require_tap = __commonJS({
  "node_modules/refractor/lang/tap.js"(exports, module) {
    var refractorYaml = require_yaml();
    module.exports = tap;
    tap.displayName = "tap";
    tap.aliases = [];
    function tap(Prism) {
      Prism.register(refractorYaml);
      Prism.languages.tap = {
        fail: /not ok[^#{\n\r]*/,
        pass: /ok[^#{\n\r]*/,
        pragma: /pragma [+-][a-z]+/,
        bailout: /bail out!.*/i,
        version: /TAP version \d+/i,
        plan: /\b\d+\.\.\d+(?: +#.*)?/,
        subtest: {
          pattern: /# Subtest(?:: .*)?/,
          greedy: true
        },
        punctuation: /[{}]/,
        directive: /#.*/,
        yamlish: {
          pattern: /(^[ \t]*)---[\s\S]*?[\r\n][ \t]*\.\.\.$/m,
          lookbehind: true,
          inside: Prism.languages.yaml,
          alias: "language-yaml"
        }
      };
    }
  }
});

export {
  require_tap
};
//# sourceMappingURL=chunk-YZ6ODOUM.js.map