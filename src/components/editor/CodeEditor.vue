<!--
 * @Description:
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/12/21 20:38
 * @Path: src/components/editor/CodeEditor.vue
-->
<template>
  <!-- 加一层根标签，否则外面使用v-if时会报错 -->
  <div class="code-editor">
    <div v-if="!props.mode"
         class="fileType-box">
      <el-select v-model="typeValue"
                 style="width: 220px;"
                 @change="typeChange"
                 filterable
                 placeholder="请选择代码类型">
        <el-option v-for="item in typeList"
                   :key="item"
                   :label="item"
                   :value="item"/>
      </el-select>
    </div>
    <textarea ref="codeEditor"
              :placeholder="props.placeholder">
    </textarea>
  </div>
  <div v-if="!readonly"
       class="error-box">
    <div v-show="verifyRes.show && !verifyRes.res"
         class="error-info">
      <img src="../../assets/comp/codeError.svg" alt="">
      <span>{{ verifyRes.msg }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, watch, onMounted, onBeforeUnmount, nextTick, reactive, computed} from "vue";
// codemirror基础资源引入
import CodeMirror, {EditorConfiguration, EditorFromTextArea} from "codemirror";
import "codemirror/lib/codemirror.css";
// 编辑器模式
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/nginx/nginx.js";
// 编辑器主题
import "codemirror/theme/ayu-dark.css";
import "codemirror/theme/neo.css";
// 括号显示匹配
import 'codemirror/addon/edit/matchbrackets'
import 'codemirror/addon/selection/active-line'
// 括号、引号编辑和删除时成对出现
import 'codemirror/addon/edit/closebrackets'

// 折叠资源引入:开始
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/fold/foldcode.js";
import "codemirror/addon/fold/brace-fold.js";
import "codemirror/addon/fold/comment-fold.js";
import "codemirror/addon/fold/indent-fold.js";
import "codemirror/addon/fold/foldgutter.js";
// 折叠资源引入:结束

// 搜索资源引入:开始
import "codemirror/addon/scroll/annotatescrollbar.js";
import "codemirror/addon/search/matchesonscrollbar.js";
import "codemirror/addon/search/match-highlighter.js";
import "codemirror/addon/search/jump-to-line.js";

import "codemirror/addon/dialog/dialog.js";
import "codemirror/addon/dialog/dialog.css";
import "codemirror/addon/search/searchcursor.js";
import "codemirror/addon/search/search.js";
// 搜索资源引入:结束

// 启用placeholder
import "codemirror/addon/display/placeholder.js";
import {preDebounce} from "@/utils/publicFun";
import {ElOption, ElSelect} from "element-plus";

const props = defineProps({
  // 编辑器高度
  height: {
    type: String,
    default: '100%'
  },
  // v-model
  modelValue: {
    type: String,
    default: ''
  },
  // 主题，需要引入主题文件
  theme: {
    type: String,
    default: 'ayu-dark'
  },
  // 编辑器模式
  mode: {
    type: String,
    default: ''
  },
  // 是否只读
  readonly: {
    type: Boolean,
    default: false
  },
  // 占位符
  placeholder: {
    type: String,
    default: ''
  },
  // 是否不为空校验
  required: {
    type: Boolean,
    default: false
  },
  // 为空时的错误提示
  requiredMsg: {
    type: String,
    default: '内容不能为空'
  },
  // 校验触发方式 可选 blur、change, 不填不会触发校验
  trigger: {
    type: String,
    default: ''
  },
  // 校验格式 verifyFunc处理
  verify: {
    type: Object,
    default: () => ({
      type: 'json',
      msg: '格式错误'
    })
  }
})

const emit = defineEmits(['update:modelValue', 'change', 'keyDownSave'])

const codeEditor = ref();
// 编辑器实例
let editor: EditorFromTextArea | null = null
const config: EditorConfiguration = {
    value: props.modelValue,
    // mime: "vue",
    mode: props.mode,
    theme: props.theme,
    readOnly: !!props.readonly,
    lineNumbers: true, // 是否在编辑器左侧显示行号
    matchBrackets: true, // 括号匹配
    autoCloseBrackets: true, // 输入和退格时成对
    // 启用代码折叠相关功能:开始
    foldGutter: true,
    fullScreen: true,
    lineWrapping: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
    // 启用代码折叠相关功能:结束
    autocorrect: true,
    extraKeys: {"Tab": "autocomplete", "Ctrl-D": "deleteLine", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown"},
  },
  typeValue = ref(''),
  typeList = ref(["apl", "asciiarmor", "asn.1", "asterisk", "brainfuck", "clike", "clojure", "cmake", "cobol", "coffeescript", "commonlisp", "crystal", "css", "cypher", "d", "dart", "diff", "django", "dockerfile", "dtd", "dylan", "ebnf", "ecl", "eiffel", "elm", "erlang", "factor", "fcl", "forth", "fortran", "gas", "gfm", "gherkin", "go", "groovy", "haml", "handlebars", "haskell", "haskell-literate", "haxe", "htmlembedded", "htmlmixed", "http", "idl", "index.html", "javascript", "jinja2", "jsx", "julia", "livescript", "lua", "markdown", "mathematica", "mbox", "meta.js", "mirc", "mllike", "modelica", "mscgen", "mumps", "nginx", "nsis", "ntriples", "octave", "oz", "pascal", "pegjs", "perl", "php", "pig", "powershell", "properties", "protobuf", "pug", "puppet", "python", "q", "r", "rpm", "rst", "ruby", "rust", "sas", "sass", "scheme", "shell", "sieve", "slim", "smalltalk", "smarty", "solr", "soy", "sparql", "spreadsheet", "sql", "stex", "stylus", "swift", "tcl", "textile", "tiddlywiki", "tiki", "toml", "tornado", "troff", "ttcn", "ttcn-cfg", "turtle", "twig", "vb", "vbscript", "velocity", "verilog", "vhdl", "vue", "wast", "webidl", "xml", "xquery", "yacas", "yaml", "yaml-frontmatter", "z80"])

// 切换类型
function typeChange(value: string) {
  console.log(value, '选中的值')

  if (value != '自动识别') {
    config.mode = value
  }
  // init()
  editor.setOption("mode", value);
}

function init() {

  // 初始化编辑器
  editor = CodeMirror.fromTextArea(codeEditor.value, config);
  // 设置默认值
  editor.setValue(props.modelValue)
  // 监听编辑器的change事件
  editor.on("change", () => {
    verifyFunc()
    if (props.trigger === 'change' && !verifyRes.res) verifyRes.show = true
    emit("update:modelValue", editor && editor.getValue())
    emit("change", editor && editor.getValue())
  });
  editor.on("blur", () => {
    if (props.trigger === 'blur' && !verifyRes.res) verifyRes.show = true
  });
  // 组件隐藏后再显示会出现样式问题，使用以下方法解决
  nextTick(() => refresh())
  // 初始化校验
  verifyFunc()
}

onMounted(() => {
  init()
});

// 监听modelValue变化，设置编辑器
watch(() => props.modelValue, () => {
  if (editor !== null && props.modelValue !== editor.getValue()) {
    editor.setValue(props.modelValue)
    verifyFunc()
  }
});
// 监听设置readonly
watch(() => props.readonly, () => editor && editor.setOption("readOnly", props.readonly))
// 监听设置theme
watch(() => props.theme, () => editor && editor.setOption("theme", props.theme))
// 监听设置mode
watch(() => props.mode, () => editor && editor.setOption("mode", props.mode))

// 刷新编辑器
function refresh() {
  editor && editor.refresh()
}

// 校验结果
const verifyRes = reactive({
  show: false,
  res: true,
  msg: ''
})

// 校验
function verifyFunc() {
  verifyRes.res = true
  verifyRes.show = false
  let value = editor && editor.getValue()
  if (props.required && !value) {
    verifyRes.res = false
    verifyRes.msg = props.requiredMsg
  } else if (props.verify?.type === 'json') {
    try {
      JSON.parse(value!)
    } catch (e) {
      verifyRes.res = false
      verifyRes.msg = props.verify.msg || '格式错误'
    }
  }
}

// 清空校验结果
function clearVerify() {
  verifyRes.show = false
  verifyRes.res = true
  verifyRes.msg = ''
}

// 销毁编辑器
onBeforeUnmount(destroy);

function destroy() {
  if (editor !== null) {
    editor.toTextArea();
    editor = null;
  }
}

defineExpose({
  refresh,
  verifyRes: computed(() => ({
    res: verifyRes.res,
    msg: verifyRes.msg
  })),
  verify: () => {
    return new Promise((resolve, reject) => {
      verifyFunc()
      if (verifyRes.res) {
        resolve(undefined)
      } else {
        verifyRes.show = true
        reject(verifyRes.msg)
      }
    })
  },
  clearVerify
})
const editorHeight = computed(() => {
  return (props.trigger && !props.readonly) ? `${props.height} - ${20}px` : `${props.height}`
})

// 监听ctrl+s
onMounted(() => {
  document.onkeydown = keyDown
})

const keyDownSave = preDebounce(() => emit('keyDownSave'), 500)

function keyDown(e: KeyboardEvent) {
  let currKey = e.keyCode || e.which || e.charCode;
  if (currKey == 83 && (e.ctrlKey || e.metaKey)) {
    keyDownSave()
    e.preventDefault();
  }
}

</script>

<script lang="ts">
export default {
  name: 'CodeEditor',
  inheritAttrs: false
}
</script>

<style lang='scss' scoped>
.code-editor {
  position: relative;
  height: calc(v-bind(editorHeight));
  overflow: auto;
}

.fileType-box {
  display: flex;
  align-items: center;
  padding: 10px 0;
  background: #0a0e14;
}

.code-editor:deep(.CodeMirror) {
  height: 100%;
}

.error-box {
  height: 20px;
}

.error-info {
  display: flex;
  align-items: center;
  height: 20px;
  line-height: 20px;
  color: red;
}

:deep(.el-input__wrapper) {
  & > .el-input__inner {
    color: white !important;
  }

  background: transparent;

}

:deep(.el-popper__arrow:before) {
  background: red;
}

:deep(.el-select-dropdown__wrap) {
  background: red !important;
}

</style>
