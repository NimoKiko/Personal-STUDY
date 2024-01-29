# 配置部分

## 1. Eslint配置

- 作用：对代码按一定规则进行校验
- 安装：npm i eslint -D
- 生成eslint配置文件：npx eslint --init
- 生成完后会生成一个 .eslintrc.cjs 文件

### 1.1 Vue3环境代码校验插件

```
# 让所有与prettier规则冲突的Eslint rules失效，并使用prettier进行代码检查
"eslint-config-prettier"
"eslint-plugin-import"
"eslint-plugin-node"
# 运行更漂亮的Eslint，使prettier规则优先级更高，Eslint优先级低
"eslint-plugin-prettier"
# Vue.js的Eslint插件(查找vue语法错误，发现错误指令，查找违规风格指南)
"eslint-plugin-vue"
# 该解析器允许使用Eslint校验所有babel code
"@babel/eslint-parser"
```

### 1.2 安装指令：

```
npm i -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier @babel/eslint-parser
```

### 1.3 Eslint 忽略文件：

```
在根目录下创建文件：.eslintignore，把不需要检查的文件写入该文件内
dist
node_modules
```

### 1.4 修改.eslintrc.cjs 配置文件

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  // 指定如何解析语法
  parser: 'vue-eslint-parser',
  // 优先级低于parser的语法解析配置
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // 继承已有的规则
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'vue'],
  /**
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
   * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  rules: {
    // eslint(https://eslint.bootcss.com/docs/rules/)
    'no-var': 'error', // 禁止使用var
    'no-multiple-empty-lines': ['warn', { max: 1 }], // 禁止出现多行空行
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 禁止console
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 禁止debugger
    'no-unexpected-multiline': 'error', // 禁止出现令人困惑的多行表达式
    'no-useless-escape': 'off', // 禁用不必要的转义字符

    // typescript(https://typescript-eslint.io/rules)
    '@typescript-eslint/no-unused-vars': 'off', // 禁止定义未使用的变量
    '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-expect-error 代替 @ts-ignore
    '@typescript-eslint/no-explicit-any': 'off', // 禁止使用any类型
    '@typescript-eslint/no-non-null-assertion': 'off', // 禁止使用非空断言
    '@typescript-eslint/no-namespace': 'off', // 禁止使用命名空间
    '@typescript-eslint/semi': 'off', // 禁止使用分号

    // eslint-plugin-vue(https://eslint.vuejs.org/rules/)
    'vue/multi-word-component-names': 'off', // 组件名始终为 " - " 连接的单词
    'vue/script-setup-uses-vars': 'error', // 检查 <script setup> 中的变量是否被使用
    'vue/no-mutating-props': 'off', // 禁止修改 props
    'vue/attribute-hyphenation': 'off', // 组件属性名始终为 " - " 连接的单词
  },
}
```

### 1.5 运行脚本

package.json新增两个运行脚本

```
"script": {
    'lint': "eslint src",
    'fix': "eslint src --fix"

}
```

## 2. prettier配置

eslint是针对js的检测语法的工具，包含js语法以及少部分的格式化问题。

prettier属于格式化工具，prettier支持包含js在内的多种语言。

eslint和prettier一个保证js代码质量，一个保证代码美观。

### 2.1 安装依赖包

```
npm i -D prettier
```

### 2.2 .prettierrc.json添加规则

```json
{
  "singleQuote": true,
  "semi": false,
  "bracketSpacing": true,
  "htmlWhitespaceSensitivity": "ignore",
  "endOfLine": "auto",
  "trailingComma": "all",
  "tabWidth": 2
}
```

### 2.3 prettier忽略文件 .prettierignore

```
/dist/*
/html/*
.local
/node_modules/**
**/*.svg
**/*.sh
/public/*
```

## 3. 配置husky

上面已经配置好了代码检验工具，但是每次需要手动执行才能执行格式化代码。

使用husky可以在提交代码前触发git hook，然后执行npm run format 来自动格式化代码
