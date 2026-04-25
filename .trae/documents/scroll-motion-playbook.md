# Scroll 动效易报错：留档（Framer Motion + TS）

## 本次可用版本（避免红线/类型报错）

- 组件：CokeBreakHeroBubbles
- 文件：d:\0413AD_Portfolio\components\CokeBreakHeroBubbles.tsx

关键写法：

- 不要写 `reduceMotion ? 0 : useTransform(...)` 这种三元表达式。
  - 原因：会把类型推成 `number | MotionValue<number>`，后续 `useSpring(...)`/`style` 很容易红线。
- 永远让 `raw*` 变量保持为 `MotionValue<number>`：
  - `const rawY1 = useTransform(scrollY, r1, [...])`
  - `const rawOpacity = useTransform(scrollY, [0, 60], [0, 1])`
- “是否减弱动效”只在渲染时处理（style 里切换）：
  - `style={{ y: reduceMotion ? 0 : y1, opacity: reduceMotion ? 1 : opacity }}`
- range 建议显式标注 tuple，避免 `[number, number]` 推断漂移：
  - `const r1: [number, number] = ...`

## 写 Scroll Down 动效时的稳定规则

- Hook 不能条件调用：`useScroll/useTransform/useSpring` 一律无条件执行。
- 避免三元表达式把“数字”和“MotionValue”混在一起；需要分支时，分支放到 `style` 或最终 JSX。
- 需要“触发点/门槛”时：
  - 用一个 `enabled` 布尔值控制是否渲染 motion 元素（或控制 `opacity/y` 的最终值）。
  - 或者用一个 `rangeBase`（记录当前 scrollY）把 `range` 平移到触发点之后。

## 常见现象与对应原因

- 编辑器红线但 Diagnostics 里空：
  - 多数是 TS 推断为联合类型（例如 `number | MotionValue<number>`）导致的类型提示红线；
  - 或 TS Server 缓存没刷新（重启 TS server 可消除）。

## 相关参考文件

- CokeBreakHeroBubbles：d:\0413AD_Portfolio\components\CokeBreakHeroBubbles.tsx
- CokeBreak 页面（bubbles 参数传入处）：d:\0413AD_Portfolio\app\work\cokebreak\page.tsx
