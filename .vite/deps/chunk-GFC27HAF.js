import {
  require_c
} from "./chunk-HORBIYZS.js";
import {
  __commonJS
} from "./chunk-G3PMV62Z.js";

// node_modules/refractor/lang/glsl.js
var require_glsl = __commonJS({
  "node_modules/refractor/lang/glsl.js"(exports, module) {
    var refractorC = require_c();
    module.exports = glsl;
    glsl.displayName = "glsl";
    glsl.aliases = [];
    function glsl(Prism) {
      Prism.register(refractorC);
      Prism.languages.glsl = Prism.languages.extend("c", {
        keyword: /\b(?:active|asm|atomic_uint|attribute|[ibdu]?vec[234]|bool|break|buffer|case|cast|centroid|class|coherent|common|const|continue|d?mat[234](?:x[234])?|default|discard|do|double|else|enum|extern|external|false|filter|fixed|flat|float|for|fvec[234]|goto|half|highp|hvec[234]|[iu]?sampler2DMS(?:Array)?|[iu]?sampler2DRect|[iu]?samplerBuffer|[iu]?samplerCube|[iu]?samplerCubeArray|[iu]?sampler[123]D|[iu]?sampler[12]DArray|[iu]?image2DMS(?:Array)?|[iu]?image2DRect|[iu]?imageBuffer|[iu]?imageCube|[iu]?imageCubeArray|[iu]?image[123]D|[iu]?image[12]DArray|if|in|inline|inout|input|int|interface|invariant|layout|long|lowp|mediump|namespace|noinline|noperspective|out|output|partition|patch|precise|precision|public|readonly|resource|restrict|return|sample|sampler[12]DArrayShadow|sampler[12]DShadow|sampler2DRectShadow|sampler3DRect|samplerCubeArrayShadow|samplerCubeShadow|shared|short|sizeof|smooth|static|struct|subroutine|superp|switch|template|this|true|typedef|uint|uniform|union|unsigned|using|varying|void|volatile|while|writeonly)\b/
      });
    }
  }
});

export {
  require_glsl
};
//# sourceMappingURL=chunk-GFC27HAF.js.map
