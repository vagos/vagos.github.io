---
title: Alpha-equivalence for free with field(compare=False)
date: 2026-11-23
tags: python type-theory
---

I was writing a tiny proof checker in Python. Terms use [de Bruijn indices](https://en.wikipedia.org/wiki/De_Bruijn_index), so variables are numbers and `λx. x` and `λy. y` are the same term.

Then it rejected a correct proof. Dataclass `==` compares every field, names included:

```python
@dataclass(frozen=True)
class Lam:
    name: str
    A: Term
    body: Term

Lam("x", Const("Nat"), Var(0)) == Lam("y", Const("Nat"), Var(0))  # False
```

The fix is one line:

```python
    name: str = field(compare=False)
```

Now `==` is alpha-equivalence.
