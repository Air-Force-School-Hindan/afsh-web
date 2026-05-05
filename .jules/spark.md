## 2024-05-15 - [React 19: Goodbye forwardRef]
Learning: React 19 allows passing `ref` as a regular prop to functional components, making `forwardRef` obsolete and simplifying component definitions.
Action: Removed `forwardRef` usage in `src/components/ui/Silk.tsx`, passing `ref` directly to `SilkPlane`. This reduces boilerplate and aligns the codebase with modern React patterns.

## 2024-05-16 - [ES2024 Object.groupBy Native Grouping]
Learning: JavaScript ES2024 introduces native `Object.groupBy()` giving us a performant and declarative way to organize array items without writing boilerplate looping or reducing structures.
Action: Replaced manual grouping loops (`events.forEach`) in `CalendarPageNew.tsx` with `Object.groupBy()`. It simplifies complex logic mapping iterables to categorical structures down to one line.

## 2025-02-18 - [ES2023 Immutable Array Methods]
Learning: ES2023 introduces new array copying methods to JavaScript, such as `toSorted()` and `toReversed()`, that return a new array instead of modifying the original in-place. This improves code predictability, predictability and safety in functional programming patterns without requiring manual `.slice()` or spread `[...array]` cloning.
Action: Refactored `GalleryPage.tsx` and `CalendarPageNew.tsx` to replace `[...events].sort()` and `Array.from(y).sort().reverse()` with `.toSorted()` and `.toReversed()` for cleaner and safer state derivation.

## 2024-05-17 - [React 19: useActionState for Form Handling]
Learning: React 19 introduces `useActionState` which provides an integrated pending state, error state, and form submission action management directly, allowing us to drop boilerplate controlled components with `useState` tracking for loaders and errors.
Action: Refactored `src/pages/utility/LoginPage.tsx` to replace multiple `useState` hooks with one `useActionState`, transitioning to uncontrolled inputs and a native `action` prop. This cleans up component re-renders and reduces complex component state management logic into simple native APIs.
