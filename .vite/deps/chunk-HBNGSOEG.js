import {
  require_t4_templating
} from "./chunk-PRFVXIL2.js";
import {
  require_csharp
} from "./chunk-V6QRROUR.js";
import {
  __commonJS
} from "./chunk-G3PMV62Z.js";

// node_modules/refractor/lang/t4-cs.js
var require_t4_cs = __commonJS({
  "node_modules/refractor/lang/t4-cs.js"(exports, module) {
    var refractorT4Templating = require_t4_templating();
    var refractorCsharp = require_csharp();
    module.exports = t4Cs;
    t4Cs.displayName = "t4Cs";
    t4Cs.aliases = [];
    function t4Cs(Prism) {
      Prism.register(refractorT4Templating);
      Prism.register(refractorCsharp);
      Prism.languages.t4 = Prism.languages["t4-cs"] = Prism.languages["t4-templating"].createT4("csharp");
    }
  }
});

export {
  require_t4_cs
};
//# sourceMappingURL=chunk-HBNGSOEG.js.map
