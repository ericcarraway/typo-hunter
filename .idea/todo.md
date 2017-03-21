trim trailing punctuation

isolate four letter words

add to `removePunctuation`
- emoji
- _use a better RegEx_

"remove numbers" button
- should remove negative numbers

---

remove number followed by ms
```
1518ms
1570ms
1574ms
1578ms
1623ms
1661ms
1662ms
1673ms
1726ms
1759ms
1781ms
1887ms
1911ms
2421ms
2549ms
2569ms
2633ms
3562ms
```

---

find accidental consecutive words
  - "an array of of resource objects"
  - should find "of of"
  - implementation:

```
- lodash?
- `_.words`

use a `for` loop
if (words[i] === words[i + 1])

indicate context...
[words[i - 2], words[i - 1], words[i], words[i + 1], words[i + 2]].join(' ')
```
