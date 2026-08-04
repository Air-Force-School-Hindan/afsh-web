## 2024-05-15 - [React 19: Goodbye forwardRef]
Learning: React 19 allows passing `ref` as a regular prop to functional components, making `forwardRef` obsolete and simplifying component definitions.
Action: Removed `forwardRef` usage in `src/components/ui/Silk.tsx`, passing `ref` directly to `SilkPlane`. This reduces boilerplate and aligns the codebase with modern React patterns.

## 2024-05-16 - [ES2024 Object.groupBy Native Grouping]
Learning: JavaScript ES2024 introduces native `Object.groupBy()` giving us a performant and declarative way to organize array items without writing boilerplate looping or reducing structures.
Action: Replaced manual grouping loops (`events.forEach`) in `CalendarPageNew.tsx` with `Object.groupBy()`. It simplifies complex logic mapping iterables to categorical structures down to one line.

## 2025-02-18 - [ES2023 Immutable Array Methods]
Learning: ES2023 introduces new array copying methods to JavaScript, such as `toSorted()` and `toReversed()`, that return a new array instead of modifying the original in-place. This improves code predictability, predictability and safety in functional programming patterns without requiring manual `.slice()` or spread `[...array]` cloning.
Action: Refactored `GalleryPage.tsx` and `CalendarPageNew.tsx` to replace `[...events].sort()` and `Array.from(y).sort().reverse()` with `.toSorted()` and `.toReversed()` for cleaner and safer state derivation.

## 2025-02-19 - [React 19: Form Actions and useActionState]
Learning: React 19 introduced `useActionState` and native `<form action={...}>` handling. It allows developers to replace multiple `useState` hooks (for form values, loading states, and errors) with a single declarative hook that integrates natively with the browser form submission process.
Action: Refactored `src/pages/utility/LoginPage.tsx` to replace 4 `useState` instances with one `useActionState` implementation, pulling fields natively via `FormData`. This removes controlled input boilerplate and relies on robust, built-in browser standards.
